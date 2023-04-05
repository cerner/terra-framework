const fs = require('fs');
const path = require('path');
const Launcher = require('@wdio/cli').default;
const { Logger } = require('@cerner/terra-cli');
const getConfigurationOptions = require('../../config/utils/getConfigurationOptions');
const { cleanScreenshots } = require('../../commands/utils');

const logger = new Logger({ prefix: '[terra-functional-testing:wdio]' });

class TestRunner {
  /**
   * Resolves the configuration file path.
   * If no path is provided the current working directory will be searched. Falls back to the default configuration file.
   * @param {string} configPath - The path to the test runner configuration file.
   * @returns {string} A resolved path to the test runner configuration file.
   */
  static configPath(configPath) {
    if (configPath) {
      return path.resolve(configPath);
    }

    const relativeConfigPath = path.resolve(process.cwd(), 'wdio.conf.js');

    if (fs.existsSync(relativeConfigPath)) {
      return relativeConfigPath;
    }

    return path.resolve(__dirname, '../../config/wdio.conf.js');
  }

  /**
   * Runs the test runner.
   * @param {Object} options - The test run options.
   * @param {number} options.assetServerPort - The port to run the webpack and express asset services on.
   * @param {string} options.browsers - A list of browsers for the test run.
   * @param {string} options.buildBranch - The name of branch being built.
   * @param {string} options.buildType - The cause of branch being built.
   * @param {string} options.config - A file path to the test runner configuration.
   * @param {boolean} options.disableSeleniumService - A flag to disable the selenium docker service.
   * @param {string} options.externalHost - The host address the testing environment is connected to.
   * @param {number} options.externalPort - The port mapping from the host to the container.
   * @param {string} options.formFactor - A form factor for the test run.
   * @param {string} options.gridUrl - The remote selenium grid address.
   * @param {boolean} options.keepAliveSeleniumDockerService - Determines to keep the selenium docker service running upon test completion.
   * @param {string} options.locale - A language locale for the test run.
   * @param {number} options.seleniumServicePort - The port mapping for the selenium service or the external selenium grid.
   * @param {string} options.seleniumServiceUrl - The address for the selenium service.
   * @param {string} options.site - A file path to a static directory of assets. When defined, an express server will launch to serve the assets and disable running webpack..
   * @param {array} options.spec - A list of spec file paths.
   * @param {array} options.suite - Overrides specs and runs only the defined suites.
   * @param {string} options.theme - A theme for the test run.
   * @param {boolean} options.updateScreenshots - Updates all reference screenshots with the latest screenshots.
   * @param {boolean} options.useRemoteReferenceScreenshots - A flag to download reference screenshots from a remote site for screenshot comparisons instead of using the local reference screenshots.
   * @param {boolean} options.useSeleniumStandaloneService - A flag to use the selenium standalone service instead of the selenium docker service.
   * @returns {Promise} A promise that resolves with the test run exit code.
   */
  static async run(options) {
    let exitCode;

    try {
      const { config } = options;

      const configPath = TestRunner.configPath(config);
      const testRunner = new Launcher(configPath, getConfigurationOptions(options));

      exitCode = await testRunner.run();
    } catch (error) {
      logger.error('Launcher failed to start the test');
      throw error;
    }

    if (exitCode !== 0) {
      throw new Error(`[terra-functional-testing:wdio] Launcher returned with an exit code of ${exitCode}`);
    }
  }

  /**
   * Starts the test runner.
   * @param {Object} options - The test run options.
   * @param {number} options.assetServerPort - The port to run the webpack and express asset services on.
   * @param {string} options.browsers - A list of browsers for the test run.
   * @param {string} options.buildBranch - The name of branch being built.
   * @param {string} options.buildType - The cause of branch being built.
   * @param {string} options.buildURL - Url for CI build output.
   * @param {string} options.config - A file path to the test runner configuration.
   * @param {boolean} options.disableSeleniumService - A flag to disable the selenium docker service.
   * @param {string} options.externalHost - The host address the testing environment is connected to.
   * @param {number} options.externalPort - The port mapping from the host to the container.
   * @param {string} options.formFactors - A list of form factors for the test run.
   * @param {string} options.gitApiUrl - URL to use for git api.
   * @param {string} options.gitToken - git token
   * @param {string} options.gridUrl - The remote selenium grid address.
   * @param {string} options.issueNumber - The pull request issue number
   * @param {boolean} options.keepAliveSeleniumDockerService - Determines to keep the selenium docker service running upon test completion.
   * @param {string} options.locales - A list of language locales for the test run.
   * @param {number} options.seleniumServicePort - The port mapping for the selenium service or the external selenium grid.
   * @param {string} options.seleniumServiceUrl - The address for the selenium service.
   * @param {string} options.site - A file path to a static directory of assets. When defined, an express server will launch to serve the assets and disable running webpack..
   * @param {array} options.spec - A list of spec file paths.
   * @param {array} options.suite - Overrides specs and runs only the defined suites.
   * @param {string} options.themes - A list of themes for the test run.
   * @param {boolean} options.updateScreenshots - Updates all reference screenshots with the latest screenshots.
   * @param {boolean} options.useRemoteReferenceScreenshots - A flag to download reference screenshots from a remote site for screenshot comparisons instead of using the local reference screenshots.
   * @param {boolean} options.useSeleniumStandaloneService - A flag to use the selenium standalone service instead of the selenium docker service.
   */
  static async start(options) {
    const {
      formFactors = [],
      locales,
      themes,
      ...cliOptions
    } = options;

    cleanScreenshots();

    /**
     * The following code loops through each permutation of theme, locale, and form factor.
     * Each permutation sequentially invokes a new test runner. A new test runner will not start
     * until the previous runner has succeeded. Execution stops if a previous runner fails.
     */
    for (let themeIndex = 0; themeIndex < themes.length; themeIndex += 1) {
      for (let localeIndex = 0; localeIndex < locales.length; localeIndex += 1) {
        let formFactorIndex = 0;

        do {
          const formFactor = formFactors[formFactorIndex];
          const locale = locales[localeIndex];
          const theme = themes[themeIndex];

          // eslint-disable-next-line no-await-in-loop
          await TestRunner.run({
            ...cliOptions,
            formFactor,
            locale,
            theme,
          });

          formFactorIndex += 1;
        } while (formFactorIndex < formFactors.length);
      }
    }
  }
}

module.exports = TestRunner;
