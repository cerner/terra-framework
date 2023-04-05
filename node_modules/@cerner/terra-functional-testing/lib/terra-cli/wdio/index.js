const TestRunner = require('./test-runner');

const cli = {
  command: 'wdio',
  describe: 'Run wdio tests',
  builder: (yargs) => (
    yargs.options({
      assetServerPort: {
        type: 'number',
        describe: 'The port to run the webpack and express asset services on.',
        default: () => {
          if (process.env.WDIO_INTERNAL_PORT) {
            return process.env.WDIO_INTERNAL_PORT;
          }

          return 8080;
        },
      },
      browsers: {
        type: 'array',
        describe: 'A list of browsers for the test run.',
        default: () => {
          let browsers = process.env.BROWSERS;
          if (browsers) {
            // Remove the brackets if BROWSERS is set as an array like ['chrome, firefox, ie'] or ['chrome','firefox','ie'] in Jenkinsfile.
            browsers = browsers.replace('[', '');
            browsers = browsers.replace(']', '');

            // Split the list of BROWSERS into an array if it is set in the string form like 'chrome,firefox,ie'.
            if (browsers.includes(',')) {
              // There could be empty spaces between each browser name. For example: 'chrome, firefox,     ie'.
              // Remove all empty spaces in each browser name to avoid adding them with the empty space. For example: [' firefox', '     ie'].
              browsers = browsers.replace(/ /g, '');
              return browsers.split(',');
            }

            return [browsers];
          }

          return [];
        },
      },
      buildBranch: {
        type: 'string',
        describe: 'The type of branch being built',
        default: () => {
          if (process.env.BUILD_BRANCH) {
            return process.env.BUILD_BRANCH;
          }

          return '';
        },
      },
      buildType: {
        type: 'string',
        describe: 'The cause of branch being built',
        default: () => {
          if (process.env.BUILD_TYPE) {
            return process.env.BUILD_TYPE;
          }

          return '';
        },
      },
      buildUrl: {
        type: 'string',
        describe: 'Url for CI build output',
        default: () => {
          if (process.env.BUILD_URL) {
            return process.env.BUILD_URL;
          }

          return undefined;
        },
      },
      c: {
        type: 'string',
        alias: 'config',
        describe: 'A file path to the test runner configuration.',
      },
      disableSeleniumService: {
        type: 'boolean',
        describe: 'A flag to disable the selenium docker service.',
        default: false,
      },
      externalHost: {
        type: 'string',
        describe: 'The host address the testing environment is connected to.',
        default: () => {
          if (process.env.WDIO_EXTERNAL_HOST) {
            return process.env.WDIO_EXTERNAL_HOST;
          }

          return undefined;
        },
      },
      externalPort: {
        type: 'number',
        describe: 'The port mapping from the host to the container.',
        default: () => {
          if (process.env.WDIO_EXTERNAL_PORT) {
            return process.env.WDIO_EXTERNAL_PORT;
          }

          return undefined;
        },
      },
      formFactors: {
        type: 'array',
        describe: 'A list of form factors for the test run.',
        default: () => {
          if (process.env.FORM_FACTOR) {
            return [process.env.FORM_FACTOR];
          }

          return [];
        },
      },
      gitApiUrl: {
        type: 'string',
        describe: 'URL to use for git api.',
        default: () => {
          if (process.env.GIT_API_URL) {
            return process.env.GIT_API_URL;
          }

          return undefined;
        },
      },
      gitToken: {
        type: 'string',
        describe: '',
        default: () => {
          if (process.env.GIT_TOKEN) {
            return process.env.GIT_TOKEN;
          }

          return undefined;
        },
      },
      gridUrl: {
        type: 'string',
        describe: 'The remote selenium grid address.',
        default: () => {
          if (process.env.SELENIUM_GRID_URL) {
            return process.env.SELENIUM_GRID_URL;
          }

          return undefined;
        },
      },
      ignoreScreenshotMismatch: {
        type: 'boolean',
        describe: 'A flag to ignore screenshot mismatch.',
        default: false,
      },
      issueNumber: {
        type: 'number',
        describe: 'The pull request issue number',
        default: () => {
          if (process.env.ISSUE_NUMBER) {
            return process.env.ISSUE_NUMBER;
          }

          return undefined;
        },
      },
      keepAliveSeleniumDockerService: {
        type: 'boolean',
        describe: 'Determines to keep the selenium docker service running upon test completion.',
        default: false,
      },
      locales: {
        type: 'array',
        describe: 'A list of language locales for the test run.',
        default: () => {
          if (process.env.LOCALE) {
            return [process.env.LOCALE];
          }

          return ['en'];
        },
      },
      screenshotUrl: {
        type: 'string',
        describe: 'The url to the registry that stores the screenshots',
        default: () => {
          if (process.env.SCREENSHOT_URL) {
            return process.env.SCREENSHOT_URL;
          }

          return undefined;
        },
      },
      seleniumServicePort: {
        type: 'number',
        describe: 'The port mapping for the selenium service or the external selenium grid.',
        default: () => {
          if (process.env.WDIO_SELENIUM_SERVICE_PORT) {
            return process.env.WDIO_SELENIUM_SERVICE_PORT;
          }

          return undefined;
        },
      },
      seleniumServiceUrl: {
        type: 'string',
        describe: 'The address for the selenium service.',
        default: () => {
          if (process.env.WDIO_SELENIUM_SERVICE_URL) {
            return process.env.WDIO_SELENIUM_SERVICE_URL;
          }

          return undefined;
        },
      },
      site: {
        type: 'string',
        describe: 'A file path to a static directory of assets. When defined, an express server will launch to serve the assets and disable running webpack.',
        default: () => {
          if (process.env.SITE) {
            return process.env.SITE;
          }

          return undefined;
        },
      },
      spec: {
        type: 'array',
        describe: 'A list of spec file paths.',
      },
      suite: {
        type: 'array',
        describe: 'Overrides specs and runs only the defined suites.',
      },
      themes: {
        type: 'array',
        describe: 'A list of themes for the test run.',
        default: () => {
          if (process.env.THEME) {
            return [process.env.THEME];
          }

          return [undefined];
        },
      },
      u: {
        type: 'boolean',
        alias: 'updateScreenshots',
        describe: 'Whether or not to automatically update all reference screenshots with the latest screenshots.',
        default: false,
      },
      useRemoteReferenceScreenshots: {
        type: 'boolean',
        describe: 'A flag to download reference screenshots from a remote site for screenshot comparisons instead of using the local reference screenshots.',
        default: process.env.USE_REMOTE_REFERENCE_SCREENSHOTS === 'true',
      },
      useSeleniumStandaloneService: {
        type: 'boolean',
        describe: 'A flag to use the selenium standalone service instead of the selenium docker service.',
        default: process.env.USE_SELENIUM_STANDALONE_SERVICE === 'true',
      },
    })
  ),
  handler: TestRunner.start,
};

module.exports = cli;
