const VerboseReporter = require('@jest/reporters/build/verbose_reporter').default;
const stripAnsi = require('strip-ansi');
const fs = require('fs');
const path = require('path');
const endOfLine = require('os').EOL;
const { Logger } = require('@cerner/terra-cli');

const logger = new Logger({ prefix: '[jest-config-terra:TerraVerboseReporter]' });

class TerraVerboseReporter extends VerboseReporter {
  constructor(globalConfig) {
    super(globalConfig);
    this.results = {
      startDate: '',
      output: {},
      endDate: '',
    };
    this.unformattedResult = {};
    this.moduleName = process.cwd().split(path.sep).pop();
    this.log = this.log.bind(this);
    this.ensureResultsDir = this.ensureResultsDir.bind(this);
    this.setTestModule = this.setTestModule.bind(this);
    this.setTestDirPath = this.setTestDirPath.bind(this);
    this.setResultDir = this.setResultDir.bind(this);
    this.filePath = this.setTestDirPath();
    this.resultDir = this.setResultDir(globalConfig);
    this.ensureResultsDir();

    // Disable _out and _err so that we don't write out anything as part of this reporter
    this._out = () => {}; // eslint-disable-line no-underscore-dangle
    this._err = () => {}; // eslint-disable-line no-underscore-dangle
  }

  // eslint-disable-next-line class-methods-use-this
  setTestDirPath() {
    let testDir = 'tests';
    if (fs.existsSync(path.join(process.cwd(), 'test'))) {
      testDir = 'test';
    }
    return path.join(testDir, 'jest', 'reports', 'results');
  }

  setResultDir(globalConfig) {
    if (!globalConfig.rootDir) {
      return path.join(process.cwd(), this.filePath);
    }
    return path.join(globalConfig.rootDir, this.filePath);
  }

  ensureResultsDir() {
    if (!fs.existsSync(this.resultDir)) {
      fs.mkdirSync(this.resultDir, { recursive: true }, (err) => {
        if (err) {
          logger.error(err.message);
        }
      });
    }
  }

  setTestModule(testLog) {
    const index = testLog.lastIndexOf(`packages${path.sep}`);
    if (index > -1) {
      const testFilePath = testLog.substring(index).split(path.sep);
      const moduleName = testFilePath && testFilePath[1] ? testFilePath[1] : process.cwd().split(path.sep).pop();
      if (moduleName && moduleName !== this.moduleName) {
        this.moduleName = moduleName;
      }
    }
  }

  onRunStart(aggregatedResults) {
    this.results.startDate = new Date(aggregatedResults.startTime).toLocaleString();
  }

  log(message) {
    const readableMessage = `${stripAnsi(message)}${endOfLine}`;
    this.setTestModule(readableMessage);
    const { moduleName } = this;
    if (!this.results.output[moduleName]) {
      this.results.output[moduleName] = [];
    }
    if (!this.unformattedResult[moduleName]) {
      this.unformattedResult[moduleName] = [];
    }
    if (readableMessage.search('\n') !== -1) {
      this.results.output[moduleName].push(readableMessage.split(/\n/g).forEach((piece) => {
        this.unformattedResult[moduleName].push(piece);
      }));
    }
    // filter out empty strings
    this.results.output[moduleName] = this.unformattedResult[moduleName].filter((obj) => obj);
  }

  onRunComplete() {
    this.results.endDate = new Date().toLocaleString();
    const { startDate, endDate, output } = this.results;
    let filePathLocation;
    const moduleKeys = Object.keys(output) || [];
    if (output && moduleKeys.length) {
      moduleKeys.forEach((key) => {
        const fileData = {
          startDate,
          output: output[key],
          endDate,
        };
        filePathLocation = `${this.resultDir}/${key}.json`;
        fs.writeFileSync(filePathLocation, `${JSON.stringify(fileData, null, 2)}`, { flag: 'w+' }, (err) => {
          if (err) {
            logger.error(err.message);
          }
        });
      });
    }
  }
}
module.exports = TerraVerboseReporter;
