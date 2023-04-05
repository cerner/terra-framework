const expect = require('expect');
const fs = require('fs-extra');
const path = require('path');
const {
  SevereServiceError
} = require('webdriverio');
const {
  accessibility,
  element,
  screenshot
} = require('../../commands/validates');
const {
  toBeAccessible,
  toMatchReference
} = require('../../commands/expect');
const {
  describeTests,
  describeViewports,
  getViewports,
  hideInputCaret,
  ScreenshotRequestor,
  setApplicationLocale,
  setViewport
} = require('../../commands/utils');
const {
  BUILD_BRANCH,
  BUILD_TYPE
} = require('../../constants');
const GithubIssue = require('./GithubIssue');
const GithubPr = require('./GithubPr');
class WDIOTerraService {
  /**
   * Service constructor.
   * @param {Object} _options - The options specific to this service.
   * @param {Object} _capabilities - The list of capabilities details.
   * @param {Object} config - The object containing the wdio configuration and options defined in the terra-cli test runner.
   */
  constructor(_options, _capabilities, config = {}) {
    const {
      serviceOptions,
      launcherOptions
    } = config;
    this.serviceOptions = {
      selector: '[data-terra-test-content] *:first-child',
      ...launcherOptions,
      ...serviceOptions
    };
    this.getRemoteScreenshotConfiguration = config.getRemoteScreenshotConfiguration;
    this.screenshotsSites = config.screenshotsSites;
  }

  /**
   * Parses Package.json for metadata.
   * @returns An object of metadata.
   */
  static async getRepoMetadata() {
    const metadata = await fs.readJson(path.join(process.cwd(), 'package.json'));

    // Do not try to use the URL constructor here. It will fail on urls with
    // custom protocols like 'git+https://'.
    const [, rOwner, rName] = metadata.repository.url.split('://')[1].split('/');
    return {
      owner: rOwner,
      name: rName
    };
  }

  /**
   * Gets executed once before all workers get launched.
   * Downloads the reference screenshots from the remote repository if useRemoteReferenceScreenshots is true.
   */
  async onPrepare() {
    const {
      buildBranch,
      gitApiUrl,
      gitToken,
      issueNumber,
      useRemoteReferenceScreenshots
    } = this.serviceOptions;
    if (!useRemoteReferenceScreenshots) {
      return;
    }
    let screenshotConfig;
    try {
      if (buildBranch.match(BUILD_BRANCH.pullRequest)) {
        // When building PR branches the reference screenshots are downloaded from the PR's base branch's remote repo.
        const metadata = await WDIOTerraService.getRepoMetadata();
        const gp = new GithubPr(gitApiUrl, gitToken, metadata.owner, metadata.repo, issueNumber);
        const baseBranch = await gp.getBaseBranchRef();
        screenshotConfig = this.getRemoteScreenshotConfiguration(this.screenshotsSites, baseBranch);
      } else {
        // When building non-PR branches, download reference screenshots from the build branch's remote repo.
        screenshotConfig = this.getRemoteScreenshotConfiguration(this.screenshotsSites, buildBranch);
      }
      const screenshotRequestor = new ScreenshotRequestor(screenshotConfig.publishScreenshotConfiguration);
      await screenshotRequestor.download();
    } catch (error) {
      throw new SevereServiceError(error);
    }
  }

  /**
   * Service hook executed prior to initializing the webdriver session.
   */
  beforeSession() {
    global.Terra = {};

    // Add the service options to the global.
    global.Terra.serviceOptions = this.serviceOptions;

    /**
     * This command must be defined in the beforeSession hook instead of together with the other Terra custom commands in the
     * before hook. The reason being WebdriverIO v6 now executes the describe block prior to running the before hook.
     * Therefore, this command needs to be defined before the test starts in the testing life cycle.
     *
     * Reference: https://github.com/webdriverio/webdriverio/issues/6119
     */
    global.Terra.describeTests = describeTests;
    global.Terra.describeViewports = describeViewports;
    global.Terra.viewports = getViewports;
  }

  /**
   * Service hook executed prior to test execution.
   * Initializes the Terra Service's custom commands.
   */
  before(capabilities) {
    // Set Jest's expect module as the global assertion framework.
    global.expect = expect;
    global.expect.extend({
      toBeAccessible,
      toMatchReference
    });

    // Setup and expose global utility functions.
    global.Terra.setApplicationLocale = setApplicationLocale;
    global.Terra.hideInputCaret = hideInputCaret;

    // Setup and expose the validates utility functions.
    global.Terra.validates = {
      accessibility,
      element,
      screenshot
    };

    /**
     * Global axe override options.
     * Options modified here will be applied globally for all tests.
     */
    global.Terra.axe = {
      rules: {
        /**
         * This rule was introduced in axe-core v3.3 and causes failures in many Terra components.
         * The solution to address this failure vary by component. It is being disabled until a solution is identified in the future.
         *
         * Reference: https://github.com/cerner/terra-framework/issues/991
         */
        'scrollable-region-focusable': {
          enabled: false
        },
        /**
         * The lowlight theme adheres to a non-default color contrast ratio and fails the default ratio check.
         * The color-contrast ratio check is disabled for lowlight theme testing.
         */
        'color-contrast': {
          enabled: this.serviceOptions.theme !== 'clinical-lowlight-theme'
        }
      }
    };

    // IE driver takes longer to be ready for browser interactions.
    if (capabilities.browserName === 'internet explorer') {
      global.browser.$('body').waitForExist({
        timeout: global.browser.config.waitforTimeout,
        interval: 100
      });
    }

    // Set the viewport size before the spec begins.
    setViewport(this.serviceOptions.formFactor || 'huge');
  }

  // eslint-disable-next-line class-methods-use-this
  afterCommand(commandName, _args, _result, error) {
    if ((commandName === 'refresh' || commandName === 'url') && !error) {
      try {
        // This is only meant as a convenience so failure is not particularly concerning.
        global.Terra.hideInputCaret('body');
        if (global.browser.$('[data-terra-test-loading]').isExisting()) {
          global.browser.$('[data-terra-test-content]').waitForExist({
            timeout: global.browser.config.waitforTimeout + 2000,
            interval: 100
          });
        }
      } catch (err) {
        // Intentionally blank. If this fails we don't want to warn because the user can't fix the issue.
      }
    }
  }

  /**
   * Post a warning about screenshot mismatches to a PR, but only once per PR.
   *
   * If the comment is already on the PR don't post anything.
   */
  async postMismatchWarningOnce() {
    const {
      buildUrl,
      gitApiUrl,
      gitToken,
      issueNumber
    } = this.serviceOptions;
    const metadata = await WDIOTerraService.getRepoMetadata();
    const issue = new GithubIssue(gitApiUrl, gitToken, metadata.owner, metadata.repo, issueNumber);
    const warning = [':warning: :bangbang: **WDIO MISMATCH**\n\n', `Check that screenshot change is intended at: ${buildUrl}\n\n`, 'If screenshot change is intended, remote reference screenshots will be updated upon PR merge.\n', 'If screenshot change is unintended, please fix screenshot issues before PR merge to prevent them from being uploaded.\n\n', 'Note: This comment only appears the first time a screenshot mismatch is detected on a PR build, ', 'future builds will need to be checked for unintended screenshot mismatches.'].join('');
    const comments = await issue.getComments();
    if (comments.includes(warning)) {
      return;
    }
    await issue.postComment(warning);
  }

  /**
   * Upload screenshots to a remote repository.
   */
  async uploadBuildBranchScreenshots() {
    const {
      buildBranch
    } = this.serviceOptions;
    try {
      const screenshotConfig = this.getRemoteScreenshotConfiguration(this.screenshotsSites, buildBranch);
      const screenshotRequestor = new ScreenshotRequestor(screenshotConfig.publishScreenshotConfiguration);
      await screenshotRequestor.upload();
    } catch (err) {
      throw new SevereServiceError(err);
    }
  }

  /**
   * Gets executed once before all workers are shut down.
   * @throws a SevereServiceError(err); to stop the run if anything goes wrong.
   */
  async onComplete() {
    const {
      buildBranch,
      buildType,
      useRemoteReferenceScreenshots
    } = this.serviceOptions;
    if (!useRemoteReferenceScreenshots) {
      return;
    }
    try {
      if (process.env.SCREENSHOT_MISMATCH_CHECK === 'true' && buildBranch.match(BUILD_BRANCH.pullRequest)) {
        // We found a screenshot mismatch during our build of this PR branch.
        await this.postMismatchWarningOnce();
      } else if (!buildBranch.match(BUILD_BRANCH.pullRequest) && buildType === BUILD_TYPE.branchEventCause) {
        // This non-PR branch is being merged or someone pushed code into it directly.
        await this.uploadBuildBranchScreenshots();
      }
    } catch (err) {
      // The service will stop only if a SevereServiceError is thrown.
      if (err instanceof SevereServiceError) {
        throw err;
      }
      throw new SevereServiceError(err);
    }
  }
}
module.exports = WDIOTerraService;