/* eslint-disable class-methods-use-this, no-unused-vars */
const path = require('path');

/* Pattern to find the shortened test ID within braces. */
const TEST_ID_REGEX = /\[([^)]+)\]/;
class BaseCompare {
  /**
   * @param {Object} options - Service configuration options.
   * @param {Object} options.locale - The locale being tested.
   * @param {Object} options.theme - The theme being tested.
   * @param {boolean} options.updateScreenshots - Whether or not all reference screenshots should be updated even when there are mistmach with latest.
   */
  constructor(options = {}) {
    const {
      cloudRegion,
      locale,
      theme,
      updateScreenshots
    } = options;

    // screenshot naming config
    this.baseScreenshotDir = process.cwd();
    this.cloudRegion = cloudRegion || '';
    this.locale = locale || 'en';
    this.theme = theme || 'terra-default-theme';
    this.updateScreenshots = updateScreenshots === true;
  }

  /**
   * The subclass extending the BaseCompare class should implement this method to perform
   * the screenshot processing appropriate for the subclass' comparison method.
   *
   * @param {Object} context - Information provided to process the screenshot.
   * @param {Object} context.desiredCapabilities - Contains the browser name and capabilities.
   * @param {Object} context.suite - The test suite that is running.
   * @param {Object} context.test - The test that is running.
   * @param {Object} context.meta - Contains the currentFormFactor as meta data to use.
   * @param {*} base64Screenshot - The screenshot captured by the selenium command to process.
   */
  async processScreenshot(_context, _base64Screenshot) {
    return Promise.resolve();
  }

  /**
   * Creates the sanitized test name for the screenshot.
   *
   * @param {string} fullName - The test name.
   * @returns {string} - The test name.
   */
  createTestName(fullName) {
    const matches = TEST_ID_REGEX.exec(fullName);

    // If test ID is provided, use the ID for a shorter test name, otherwise use the full name.
    let name = matches ? matches[1] : fullName.trim();

    // Replace white spaces with underscores.
    name = name.replace(/[\s+.]/g, '_');

    // Remove windows reserved characters. See: https://msdn.microsoft.com/en-us/library/windows/desktop/aa365247(v=vs.85).aspx#naming_conventions.
    // eslint-disable-next-line no-useless-escape
    name = name.replace(/[\?\<\>\/\\|\*\"\:\+\.]/g, '-');
    return name;
  }

  /**
   * Creates the PNG file name for a screenshot.
   *
   * @param {Object} context - Compare context provided by VisualRegressionLauncher.
   * @returns {String} - Full screenshot name with png extension.
   */
  getScreenshotName(context) {
    const {
      name
    } = context.options || {};
    const testName = this.createTestName(name);
    return `${testName}.png`;
  }

  /**
   * Determines the directories to save the screenshot to.
   *
   * @param {Object} context - Compare context provided by VisualRegressionLauncher.
   * @param {Object} context.desiredCapabilities - Contains the browser name and capabilities.
   * @param {Object} context.meta - Contains the currentFormFactor as meta data to use.
   * @returns {String} - The screenshot directory path.
   */
  getScreenshotDir(context) {
    const {
      desiredCapabilities,
      meta
    } = context;
    const {
      browserName
    } = desiredCapabilities;
    const formFactor = meta.currentFormFactor;
    const testForm = `${browserName}_${formFactor}`;
    const testSpec = path.parse(context.test.file).name;
    return path.join(this.cloudRegion, this.theme, this.locale, testForm, testSpec);
  }

  /**
   * Determines the reference, latest and diff screenshot names.
   *
   * @param {Object} context - Compare context provided by VisualRegressionLauncher.
   * @returns {Object} - The screenshot names returned as { referencePath, latestPath, diffPath }.
   */
  getScreenshotPaths(context) {
    let [, specPath] = path.dirname(context.test.file).split(process.cwd());

    // Added to allow for test reusability from terra repositories
    if (specPath.includes('node_modules')) {
      specPath = specPath.replace('node_modules', path.join('tests', 'wdio'));
    }
    const baseScreenshotPath = path.join(this.baseScreenshotDir, specPath, '__snapshots__');
    const screenshotPath = path.join(this.getScreenshotDir(context), this.getScreenshotName(context));
    return {
      referencePath: path.join(baseScreenshotPath, 'reference', screenshotPath),
      latestPath: path.join(baseScreenshotPath, 'latest', screenshotPath),
      diffPath: path.join(baseScreenshotPath, 'diff', screenshotPath),
      errorPath: path.join(baseScreenshotPath, 'error', screenshotPath)
    };
  }

  /**
   * Creates the screenshot comparison report object.
   *
   * @param {boolean} referenceExists - Whether or not the screenshot was just created.
   * @param {number} misMatchPercentage - The percent mismatched of the latest screenshot compared to the reference screenshot.
   * @param {boolean} isWithinMismatchTolerance - Whether or not the latest screenshot is a close enough match the reference screenshot.
   * @param {boolean} isSameDimensions - Whether or not the latest screenshot was the same dimensions as the reference screenshot.
   * @param {boolean} screenshotWasUpdated - Whether or not the reference screenshot was updated with the latest captured screenshot.
   * @returns {Object} - The relevant comparison results to report.
   */
  createResultReport(referenceExists, misMatchPercentage, isWithinMismatchTolerance, isSameDimensions, screenshotWasUpdated) {
    if (!referenceExists) {
      return {
        isNewScreenshot: true
      };
    }
    return {
      misMatchPercentage,
      isWithinMismatchTolerance,
      isSameDimensions,
      screenshotWasUpdated
    };
  }
}
module.exports = BaseCompare;