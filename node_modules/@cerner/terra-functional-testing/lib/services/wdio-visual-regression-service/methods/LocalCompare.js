const fs = require('fs-extra');
const resemble = require('@mirzazeyrek/node-resemble-js');
const lodashGet = require('lodash.get');
const {
  Logger
} = require('@cerner/terra-cli');
const BaseCompare = require('./BaseCompare');
const {
  eventEmitter
} = require('../../../commands/utils');
const logger = new Logger({
  prefix: '[wdio-visual-regression-service:LocalCompare]'
});
class LocalCompare extends BaseCompare {
  /**
   * @param {Object} options - Service configuration options.
   * @param {Object} options.locale - The locale being tested.
   * @param {Object} options.theme - The theme being tested.
   */
  constructor(options) {
    super(options);
    this.ignoreComparison = 'ignore';
    this.mismatchTolerance = 0.01;
  }

  /**
   * Process for Local Comparison of a new latest screenshot against a reference screenshot, if one exists. If the
   * two images are of a different size or are not within the mismatch tolerance, a screenshot highlighting the
   * differences will be created.
   *
   * @param {Object} context - Information provided to process the screenshot.
   * @param {Object} context.desiredCapabilities - Contains the browser name and capabilities.
   * @param {Object} context.suite - The test suite that is running.
   * @param {Object} context.test - The test that is running.
   * @param {Object} context.meta - Contains the currentFormFactor as meta data to use.
   * @param {*} base64Screenshot - The screenshot captured by the selenium command to process.
   * @returns {Object} - The relevant comparison results to report.
   */
  async processScreenshot(context, base64Screenshot) {
    const {
      referencePath,
      latestPath,
      diffPath
    } = this.getScreenshotPaths(context);
    eventEmitter.emit('terra-functional-testing:capture-screenshot', latestPath);

    // create latest screenshot
    await fs.outputFile(latestPath, base64Screenshot, 'base64');
    const referenceExists = fs.existsSync(referencePath);
    if (referenceExists) {
      logger.verbose('reference screenshot exists, compare it with the screenshot taken now');
      const latestScreenshot = new Buffer.from(base64Screenshot, 'base64'); // eslint-disable-line new-cap

      const ignoreComparison = lodashGet(context, 'options.ignoreComparison', this.ignoreComparison);
      const compareData = await this.compareImages(referencePath, latestScreenshot, ignoreComparison);
      const {
        isSameDimensions
      } = compareData;
      const misMatchPercentage = Number(compareData.misMatchPercentage);
      const mismatchTolerance = lodashGet(context, 'options.mismatchTolerance', this.mismatchTolerance);
      let screenshotWasUpdated = false;
      const isWithinMismatchTolerance = misMatchPercentage <= mismatchTolerance;
      if (!isWithinMismatchTolerance || !isSameDimensions) {
        if (this.updateScreenshots) {
          logger.verbose('update the reference screenshot with the latest captured screenshot.');
          await fs.outputFile(referencePath, base64Screenshot, 'base64');
          screenshotWasUpdated = true;
        } else {
          logger.verbose(`Image is different! ${misMatchPercentage}%`);
          const png = compareData.getDiffImage().pack();
          await this.writeDiff(png, diffPath);
        }
      } else {
        logger.verbose('Image is within tolerance or the same');
        // remove diff screenshot if it existed from a previous run
        await fs.remove(diffPath);
      }
      return this.createResultReport(referenceExists, misMatchPercentage, isWithinMismatchTolerance, isSameDimensions, screenshotWasUpdated);
    }
    logger.verbose('first run - create reference file');
    await fs.outputFile(referencePath, base64Screenshot, 'base64');
    return this.createResultReport(referenceExists);
  }

  /**
   * Compares the latest image to the latest image with resemble to determine if they are the same.
   *
   * @param {string} referencePath - Path to reference image.
   * @param {Buffer} latestScreenshot - Buffer of the latest image.
   * @param {string} ignoreComparison - The image comparison algorithm to use.
   * @returns {Object} - The screenshot comparison results returned as { misMatchPercentage: Number, isSameDimensions: Boolean, getImageDataUrl: function }.
   */
  // eslint-disable-next-line class-methods-use-this
  async compareImages(referencePath, latestScreenshot, ignoreComparison = '') {
    return await new Promise(resolve => {
      // eslint-disable-line no-return-await
      const image = resemble(referencePath).compareTo(latestScreenshot);
      switch (ignoreComparison) {
        case 'colors':
          image.ignoreColors();
          break;
        case 'antialiasing':
          image.ignoreAntialiasing();
          break;
        default:
          image.ignoreNothing();
      }
      image.onComplete(data => {
        resolve(data);
      });
    });
  }

  /**
   * Writes provided diff by resemble as png.
   *
   * @param  {Stream} - png node-png file Stream.
   * @returns {Promise} - Resolves is stream is outputted successfully.
   */
  // eslint-disable-next-line class-methods-use-this
  async writeDiff(png, filepath) {
    await new Promise((resolve, reject) => {
      // eslint-disable-line no-return-await
      const chunks = [];
      // eslint-disable-next-line func-names, space-before-function-paren, prefer-arrow-callback
      png.on('data', function (chunk) {
        chunks.push(chunk);
      });
      png.on('end', () => {
        const buffer = Buffer.concat(chunks);
        Promise.resolve().then(() => fs.outputFile(filepath, buffer.toString('base64'), 'base64')).then(() => resolve()).catch(reject);
      });
      png.on('error', err => reject(err));
    });
  }
}
module.exports = LocalCompare;