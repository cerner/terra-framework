const fs = require('fs-extra');
const path = require('path');
const WDIOReporter = require('@wdio/reporter').default;
const getOutputDir = require('./get-output-dir');
const {
  eventEmitter
} = require('../../commands/utils');
class SpecReporter extends WDIOReporter {
  constructor(options) {
    super({
      stdout: true,
      ...options
    });
    this.screenshotPaths = [];
    this.screenshotMap = {};

    // Listen to this event when a screenshot is being captured.
    eventEmitter.on('terra-functional-testing:capture-screenshot', latestPath => {
      if (!this.screenshotPaths.includes(latestPath)) {
        this.screenshotPaths.push(latestPath);
      }
    });
    this.formatResults = this.formatResults.bind(this);
    this.formatSuites = this.formatSuites.bind(this);
    this.formatTests = this.formatTests.bind(this);
  }

  /**
   * Hook invoked when a test ends.
   * @param {Object} test - The test result.
   */
  onTestEnd(test) {
    const {
      uid
    } = test;
    this.screenshotMap[uid] = this.screenshotPaths;
    this.screenshotPaths = [];
  }

  /**
   * Hook invoked when the runner ends.
   * @param {RunnerStats} runner - The test runner stats object.
   */
  onRunnerEnd(runner) {
    // The root suite is always at index 0 and is guaranteed to exist.
    const rootSuite = this.currentSuites[0];
    const results = this.formatResults(rootSuite, runner);
    SpecReporter.writeResults(runner, results);
  }

  /**
   * Formats the test runner spec results.
   * @param {SuiteStats} rootSuite - The root suite object.
   * @param {RunnerStats} runner - The test runner stats object.
   * @returns {Object} - A formatted results object for a single spec file.
   */
  formatResults(rootSuite, runner) {
    const {
      start,
      end,
      capabilities,
      specs
    } = runner;
    const {
      suites,
      tests
    } = rootSuite;
    return {
      spec: specs[0],
      start,
      end,
      capabilities: SpecReporter.formatCapabilities(capabilities),
      packageName: SpecReporter.getPackageName(specs[0]),
      suites: this.formatSuites(suites),
      tests: this.formatTests(tests)
    };
  }

  /**
   * Formats the browser capabilities.
   * @param {Object} capabilities - The browser capabilities.
   */
  static formatCapabilities(capabilities) {
    const {
      browserName,
      platform,
      version
    } = capabilities;
    return {
      browserName,
      platform,
      version
    };
  }

  /**
   * Formats the test suite results.
   * @param {array} suites - The collection of suites.
   * @returns {Object} - A formatted suite results object.
   */
  formatSuites(suites) {
    return suites.map(suite => {
      const {
        title,
        fullTitle,
        duration,
        start,
        end,
        tests
      } = suite;
      return {
        title,
        fullTitle,
        duration,
        start,
        end,
        tests: this.formatTests(tests),
        suites: this.formatSuites(suite.suites)
      };
    });
  }

  /**
   * Formats the test results.
   * @param {array} tests - An array of test results.
   * @returns {Object} - A formatted test results object.
   */
  formatTests(tests) {
    return tests.map(test => {
      const {
        title,
        fullTitle,
        duration,
        start,
        end,
        state,
        error,
        uid
      } = test;
      return {
        title,
        fullTitle,
        duration,
        start,
        end,
        state,
        screenshots: this.screenshotMap[uid],
        error
      };
    });
  }

  /**
   * Returns the package name of the spec file.
   * @param {string} spec - The spec filepath.
   * @returns {string} - The package name of the spec file.
   */
  static getPackageName(spec) {
    // Check if the spec file is nested within a monorepo package.
    if (spec.indexOf(`${path.sep}packages${path.sep}`) > -1) {
      return spec.split(`${path.sep}packages${path.sep}`).pop().split(path.sep)[0];
    }
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packagejson = fs.readJsonSync(packageJsonPath);
      return packagejson.name;
    }
    return process.cwd().split(path.sep).pop();
  }

  /**
   * Writes the spec results to file.
   * @param {RunnerStats} runner - The test runner stats object.
   * @param {Object} results - A formatted results object for a spec file.
   */
  static writeResults(runner, results) {
    const {
      cid
    } = runner;
    const outputDir = getOutputDir();

    // Create the output directory if it does not already exist.
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, {
        recursive: true
      });
    }
    const fileName = path.join(outputDir, `wdio-spec-results-${cid}.json`);
    fs.writeFileSync(fileName, JSON.stringify(results, null, 2));
  }
}
module.exports = SpecReporter;