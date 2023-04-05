/* eslint-disable class-methods-use-this */
const path = require('path');
const util = require('util');
const childProcess = require('child_process');
const {
  SevereServiceError
} = require('webdriverio');
const {
  Logger
} = require('@cerner/terra-cli');
const logger = new Logger({
  prefix: '[terra-functional-testing:wdio-selenium-docker-service]'
});
const exec = util.promisify(childProcess.exec);
class SeleniumDockerService {
  /**
   * Service constructor.
   * @param {Object} _options - The options specific to this service.
   * @param {Object} _capabilities - The list of capabilities details.
   * @param {Object} config - The object containing the wdio configuration and options defined in the terra-cli test runner.
   */
  constructor(_options, _capabilities, config = {}) {
    const {
      launcherOptions,
      serviceOptions
    } = config;
    const {
      disableSeleniumService,
      keepAliveSeleniumDockerService
    } = launcherOptions || {};
    const {
      seleniumVersion
    } = serviceOptions || {};
    this.disableSeleniumService = disableSeleniumService === true;
    this.keepAliveSeleniumDockerService = keepAliveSeleniumDockerService === true;
    this.seleniumVersion = seleniumVersion;
  }

  /**
   * Gets executed once before all workers get launched.
   */
  async onPrepare() {
    if (!this.disableSeleniumService) {
      try {
        // Verify docker is installed.
        await exec('docker -v');
        await this.startSeleniumHub();
      } catch (error) {
        throw new SevereServiceError(error);
      }
    }
  }

  /**
   * Waits for a command to complete successfully.
   * @param {string} command - The shell command to run.
   * @param {func} callback - A callback function to accept or reject the result of the command. Must return a promise.
   * @param {number} retries - The number of times to retry the command. Defaults to 30 retries.
   * @param {number} interval - The timeout between commands in milliseconds. Defaults to every two seconds.
   * @returns {Promise} - A promise that resolves when the callback accepts the command response.
   */
  async pollCommand(command, callback, retries = 30, interval = 2000) {
    return new Promise((resolve, reject) => {
      let retryCount = 0;
      let pollTimeout = null;
      const poll = async () => {
        if (retryCount >= retries) {
          clearTimeout(pollTimeout);
          pollTimeout = null;
          reject(Error(`Timeout. Exceeded retry count for ${command}.`));
        }
        try {
          const result = await exec(command);
          await callback(result).then(() => resolve());
        } catch (error) {
          retryCount += 1;
          pollTimeout = setTimeout(poll, interval);
        }
      };
      pollTimeout = setTimeout(poll, interval);
    });
  }

  /**
   * Retrieves the docker compose filepath.
   * @returns {string} - The docker compose file path.
   */
  getDockerComposeFilePath() {
    return path.resolve(__dirname, '../docker/docker-compose.yml');
  }

  /**
   * Starts the docker selenium hub and waits for the grid to become ready.
   */
  async startSeleniumHub() {
    logger.info('Starting the docker selenium hub...');
    const envVars = this.seleniumVersion ? `TERRA_SELENIUM_DOCKER_VERSION=${this.seleniumVersion} ` : '';
    await exec(`${envVars}docker-compose -f ${this.getDockerComposeFilePath()} up -d`);
    await this.waitForSeleniumHubReady();
    logger.info('Successfully started the docker selenium hub.');
  }

  /**
   * Waits for the docker selenium hub to become healthy.
   */
  async waitForSeleniumHubReady() {
    await this.pollCommand('docker inspect --format="{{json .State.Health.Status}}" selenium-hub', result => new Promise((resolve, reject) => {
      const {
        stdout
      } = result;
      if (stdout && stdout.trim() === '"healthy"') {
        resolve();
      } else {
        reject();
      }
      // A two minute timeout for the selenium service to become available.
      // This helps account for pulling the docker images for the very first time.
    }), 60, 2000);
  }

  /**
   * Gets executed after all workers have shut down and the process is about to exit.
   * An error thrown in the `onComplete` hook will result in the test run failing.
   */
  async onComplete() {
    // When multiple test sessions are executed sequentially as specified in the WDIO script in the package.json file, the keepAliveSeleniumDockerService cli option
    // is used to indicate not to remove the currently deployed docker stack upon test completion as it will be used again for the next test session.
    // The docker stack is expected to be removed by the last test session when no keepAliveSeleniumDockerService cli option is specified.
    if (!this.keepAliveSeleniumDockerService && !this.disableSeleniumService) {
      logger.info('Shutting down the docker selenium hub...');
      await exec(`docker-compose -f ${this.getDockerComposeFilePath()} down`);
    }
  }
}
module.exports = SeleniumDockerService;