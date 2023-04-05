const archiver = require('archiver');
const extract = require('extract-zip');
const fetch = require('node-fetch');
const fs = require('fs-extra');
const path = require('path');
const FormData = require('form-data');
const {
  Logger
} = require('@cerner/terra-cli');
const MemoryStream = require('./MemoryStream');
const logger = new Logger({
  prefix: '[terra-functional-testing:screenshotRequestor]'
});

/**
 * Class to manage downloading the existing reference screenshots from the remote repository, zip up the new reference screenshots, and upload it to the remote repository.
 */
class ScreenshotRequestor {
  /**
   * Constructor for ScreenshotRequestor.
   * @param {Object} config the config that contains information needed to download and upload screenshots from the remote repository
   * @param {string} config.latestScreenshotsPath the path to the latest screenshots. This is used for uploading.
   * @param {string} config.referenceScreenshotsPath the path to the reference screenshots. This is used for downloading.
   * @param {string} config.serviceAuthHeader - the auth header to use when making the download and upload requests.
   * @param {string} config.serviceUrl - the url to use when making the download and upload requests.
   * @param {string} config.url - the url where the screenshots will downloaded from and uploaded to.
   * @param {string} config.zipFilePath - the path to the zipped screenshot file
   */
  constructor(config) {
    const {
      latestScreenshotsPath,
      referenceScreenshotsPath,
      serviceAuthHeader,
      serviceUrl,
      url,
      zipFilePath
    } = config;
    this.latestScreenshotsPath = latestScreenshotsPath;
    this.referenceScreenshotsPath = referenceScreenshotsPath;
    this.serviceAuthHeader = serviceAuthHeader;
    this.serviceUrl = serviceUrl;
    this.url = url;
    this.zipFilePath = zipFilePath;
  }

  /**
   * Checks the status of the response. Will return the response if it is 'ok' or if the status code is in the list of allowed codes. Otherwise, will throw an error
   * @param {*} response - the response to check
   * @param {Array} allowedStatusCodes - the allowed status codes
   */
  static checkStatus(response, allowedStatusCodes = []) {
    if (response.ok || allowedStatusCodes.includes(response.status)) {
      return response;
    }
    throw new Error(response.statusText);
  }

  /**
   * Deletes the existing screenshots
   */
  async deleteExistingScreenshots() {
    const response = await fetch(this.serviceUrl, {
      method: 'DELETE',
      headers: {
        Authorization: this.serviceAuthHeader
      }
    });

    // Allow 404s because that just means the screenshots don't exists yet.
    ScreenshotRequestor.checkStatus(response, [404]);
    logger.info('Existing screenshots deleted from remote repository.');
  }

  /**
   * Deletes the zipped latest screenshots
   */
  deleteZippedLatestScreenshots() {
    const archiveName = path.join(this.zipFilePath, 'latest.zip');
    fs.removeSync(archiveName);
  }

  /**
   * Zips the latest screenshots.
   */
  async zipLatestScreenshots() {
    const archiveName = path.join(this.zipFilePath, 'latest.zip');
    const writeStream = fs.createWriteStream(archiveName);
    const archive = archiver('zip');
    archive.pipe(writeStream);
    archive.directory(this.latestScreenshotsPath, false);
    await archive.finalize();
  }

  /**
   * Zips the build directory to memory and returns it as a MemoryStream
   */
  async zipDirectoryToMemory() {
    const archive = archiver('zip');
    const memoryStream = new MemoryStream({
      highWaterMark: 10 * 1024 * 1024 * 1024
    });
    archive.pipe(memoryStream);
    const archiveName = path.join(this.zipFilePath, 'latest.zip');

    // Name the uploaded file reference.zip since the latest screenshots will now be used as the reference screenshots.
    archive.file(archiveName, {
      name: 'reference.zip'
    });
    await archive.finalize();
    logger.info('Memory stream created');
    return memoryStream;
  }

  /**
   * Downloads the screenshots and unzip it to the reference screenshot directory defined by referenceScreenshotsPath.
   */
  async downloadScreenshots() {
    const archiveUrl = `${this.serviceUrl}/reference.zip`;
    const response = await fetch(archiveUrl, {
      method: 'GET',
      headers: {
        Authorization: this.serviceAuthHeader
      }
    });
    if (response.status === 404) {
      logger.info(`No screenshots downloaded from ${this.url}. Either the URL is invalid or no screenshots were previously uploaded.`);
      return;
    }
    ScreenshotRequestor.checkStatus(response);
    await new Promise((resolve, reject) => {
      try {
        const writeStream = fs.createWriteStream('terra-wdio-screenshots.zip');
        response.body.pipe(writeStream);
        writeStream.on('finish', async () => {
          await extract('terra-wdio-screenshots.zip', {
            dir: this.referenceScreenshotsPath
          });
          fs.removeSync('terra-wdio-screenshots.zip');
          logger.info(`Screenshots downloaded from ${this.url}`);
          resolve();
        });
      } catch (error) {
        fs.removeSync('terra-wdio-screenshots.zip');
        logger.error(`Error occurred while extracting screenshots. ${error}`);
        reject();
      }
    });
  }

  /**
   * Uploads the site zip contained in memoryStream
   * @param {MemoryStream} memoryStream - the MemoryStream to use when uploading
   */
  async uploadScreenshots(memoryStream) {
    const formData = new FormData();
    formData.append('file', memoryStream, {
      filename: 'reference.zip',
      knownLength: memoryStream.length
    });
    const response = await fetch(this.serviceUrl, {
      method: 'PUT',
      headers: {
        Authorization: this.serviceAuthHeader
      },
      body: formData
    });
    ScreenshotRequestor.checkStatus(response);
    logger.info(`Screenshots are uploaded to ${this.url}`);
  }

  /**
   * Downloads the screenshots.
   */
  async download() {
    await this.downloadScreenshots();
  }

  /**
   * Uploads the screenshots by deleting the existing screenshots, zipping the new ones, and uploading it
   */
  async upload() {
    // Delete the existing screenshots from the remote repository because new screenshots will be uploaded.
    await this.deleteExistingScreenshots();

    // Zip up the existing latest screenshots
    await this.zipLatestScreenshots();

    // Create a write stream to upload the zipped screenshots.
    const memoryStream = await this.zipDirectoryToMemory();

    // Upload the screenshots to the remote repository
    await this.uploadScreenshots(memoryStream);

    // The zipped latest screenshots can now be safely deleted.
    this.deleteZippedLatestScreenshots();
  }
}
module.exports = ScreenshotRequestor;