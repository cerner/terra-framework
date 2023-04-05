/**
 * Note: The terra-cli test runner is required to use this wdio configuration.
 *
 * The following configurations options are initialized by the cli test runner:
 *
 *      - baseUrl
 *      - capabilities
 *      - hostname
 *      - port
 */

const SeleniumDockerService = require('../services/wdio-selenium-docker-service');
const TerraService = require('../services/wdio-terra-service');
const AssetServerService = require('../services/wdio-asset-server-service');
const VisualRegressionLauncher = require('../services/wdio-visual-regression-service');
const {
  AccessibilityReporter
} = require('../reporters/accessibility-reporter');
const {
  SpecReporter,
  cleanResults,
  mergeResults
} = require('../reporters/spec-reporter');
const FileOutputReporter = require('../reporters/file-output-reporter');
exports.config = {
  //
  // ====================
  // Runner Configuration
  // ====================
  //
  // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
  // on a remote machine).
  runner: 'local',
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // directory is where your package.json resides, so `wdio` will be called from there.
  //
  specs: ['./tests/wdio/**/*-spec.js', './packages/*/tests/wdio/**/*-spec.js'],
  //
  // ============
  // Capabilities
  // ============
  // Capabilities are initialized by the cli test runner. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 10,
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'warn',
  //
  // Set specific log levels per logger
  // loggers:
  // - webdriver, webdriverio
  // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
  // - @wdio/mocha-framework, @wdio/jasmine-framework
  // - @wdio/local-runner, @wdio/lambda-runner
  // - @wdio/sumologic-reporter
  // - @wdio/cli, @wdio/config, @wdio/sync, @wdio/utils
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  // logLevels: {
  //     webdriver: 'info',
  //     '@wdio/applitools-service': 'info'
  // },
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  // Set the path to connect to the selenium container.
  path: '/wd/hub',
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 10000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 1200000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: [[TerraService], [AssetServerService], [VisualRegressionLauncher], [SeleniumDockerService]],
  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: https://webdriver.io/docs/frameworks.html
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: 'mocha',
  //
  // The number of times to retry the entire specfile when it fails as a whole
  // specFileRetries: 1,
  //
  // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
  // specFileRetriesDeferred: false,
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: https://webdriver.io/docs/dot-reporter.html
  reporters: ['spec', AccessibilityReporter, SpecReporter, FileOutputReporter],
  //
  // Options to be passed to Mocha.
  // See the full list at http://mochajs.org/
  mochaOpts: {
    ui: 'bdd',
    timeout: 1200000
  },
  /**
   * Gets executed once before all workers get launched.
   */
  onPrepare() {
    // Clean previous reporter results.
    cleanResults();
  },
  /**
   * Gets executed after all workers have shut down and the process is about to exit.
   * An error thrown in the `onComplete` hook will result in the test run failing.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   */
  onComplete(_exitCode, config = {}) {
    const {
      launcherOptions
    } = config;
    const {
      formFactor,
      locale,
      theme
    } = launcherOptions || {};

    // Merge reporter results.
    mergeResults({
      ...(formFactor && {
        formFactor
      }),
      ...(locale && {
        locale
      }),
      ...(theme && {
        theme
      })
    });
  }
};