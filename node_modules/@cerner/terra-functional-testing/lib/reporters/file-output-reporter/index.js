const fs = require('fs-extra');
const path = require('path');
const stripAnsi = require('strip-ansi');
const SpecReporter = require('@wdio/spec-reporter').default;
const endOfLine = require('os').EOL;
const {
  Logger
} = require('@cerner/terra-cli');
const LOG_CONTEXT = '[terra-functional-testing:file-output-reporter]';
class FileOutputReporter extends SpecReporter {
  constructor(options) {
    super({
      stdout: true,
      ...options
    });
    this.runners = [];
    this.outputDir = options.outputDir || 'wdio';
    this.resultJsonObject = {
      startDate: '',
      type: 'wdio',
      locale: '',
      formFactor: '',
      theme: '',
      cloudRegion: '',
      output: {},
      endDate: ''
    };
    this.fileName = '';
    this.setResultsDir = this.setResultsDir.bind(this);
    this.hasResultsDir = this.hasResultsDir.bind(this);
    this.printReport = this.printReport.bind(this);
    this.getMessage = this.getMessage.bind(this);
    this.setResultsDir();
    this.hasResultsDir();
  }

  /**
   * Sets results directory for the test run. Uses the wdio reporterOptions.outputDir if set, otherwise
   * it outputs to tests/wdio/reports.
   * @return null;
   */
  setResultsDir() {
    this.resultsDir = path.join(process.cwd(), 'tests', this.outputDir, 'reports');
  }

  /**
   * Check and create reports dir if doesn't exist
   * @return null
   */
  hasResultsDir() {
    if (!fs.existsSync(this.resultsDir)) {
      fs.mkdirSync(this.resultsDir, {
        recursive: true
      }, err => {
        if (err) {
          Logger.error(err.message, {
            context: LOG_CONTEXT
          });
        }
      });
    }
  }

  /**
   * Formatting the filename based on locale, theme, and formFactor
   * @return null
   */
  buildFileName(options) {
    const {
      browserName,
      cid,
      formFactor,
      locale,
      theme,
      cloudRegion
    } = options;
    const fileNameConf = ['fileOutput'];
    if (locale) {
      fileNameConf.push(locale);
    }
    if (theme) {
      fileNameConf.push(theme);
    }
    if (formFactor) {
      fileNameConf.push(formFactor);
    }
    if (browserName) {
      fileNameConf.push(browserName);
    }
    if (cloudRegion) {
      fileNameConf.push(cloudRegion);
    }
    if (cid) {
      fileNameConf.push(cid);
    }
    this.fileName = fileNameConf.join('-');
  }

  /**
   * Updates resultJsonObject based on locale, theme, and formFactor
   * @return null
   */
  updateResultObject(options) {
    const {
      formFactor,
      locale,
      theme,
      cloudRegion
    } = options;
    if (locale) {
      this.resultJsonObject.locale = locale;
    }
    if (theme) {
      this.resultJsonObject.theme = theme;
    }
    if (formFactor) {
      this.resultJsonObject.formFactor = formFactor;
    }
    if (cloudRegion) {
      this.resultJsonObject.cloudRegion = cloudRegion;
    }
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
  onRunnerEnd(runner) {
    this.runners.push(runner);
    this.printReport(runner);
  }
  getMessage(runner) {
    const results = this.getResultDisplay();
    if (results.length === 0) {
      return null;
    }
    let testLinks;
    if (runner.isMultiremote) {
      testLinks = Object.entries(runner.capabilities).map(([instanceName, capabilities]) => this.getTestLink({
        config: {
          ...global.browser.config,
          ...{
            capabilities
          }
        },
        sessionId: capabilities.sessionId,
        isMultiremote: runner.isMultiremote,
        instanceName
      }));
    } else {
      testLinks = this.getTestLink(runner);
    }
    const output = [...this.getHeaderDisplay(runner), '', ...results, ...this.getFailureDisplay(), ...(testLinks.length ? ['', ...testLinks] : [])];
    const preface = `[${this.getEnviromentCombo(runner.capabilities, false, runner.isMultiremote).trim()} #${runner.cid}]`;
    const divider = '------------------------------------------------------------------';
    const prefacedOutput = output.map(value => value ? `${preface} ${value}` : preface);
    return `${divider}\n${prefacedOutput}`;
  }
  printReport() {
    const {
      runners
    } = this;
    if (runners && runners.length) {
      runners.forEach((runner, index) => {
        // determine correct file name given configuration for run
        if (index === 0) {
          const {
            cid,
            capabilities
          } = runner;
          const {
            browserName
          } = capabilities;
          const {
            config
          } = global.browser;
          const {
            formFactor,
            locale,
            theme,
            cloudRegion
          } = config.launcherOptions;
          const options = {
            browserName,
            cid,
            formFactor,
            locale,
            theme,
            cloudRegion
          };
          this.buildFileName(options);
          this.updateResultObject(options);
        }
        const packageName = FileOutputReporter.getPackageName(runner.specs[0]);
        if (!this.resultJsonObject.output[packageName]) {
          this.resultJsonObject.output[packageName] = [];
        }
        const readableMessage = this.getMessage(runner);
        const readableArrayMessage = readableMessage.toString().split(',');
        const messages = readableArrayMessage.map(message => stripAnsi(`${message}${endOfLine}`));
        this.resultJsonObject.output[packageName].push(messages.join(''));
        this.resultJsonObject.startDate = new Date(runner.start).toLocaleString();
        this.resultJsonObject.endDate = new Date(runner.end).toLocaleString();
      });
    }
    const {
      endDate,
      startDate,
      locale,
      formFactor,
      theme,
      output
    } = this.resultJsonObject;
    const moduleKeys = Object.keys(output) || [];
    if (output && moduleKeys.length) {
      moduleKeys.forEach(key => {
        const fileData = {
          startDate,
          locale,
          theme,
          formFactor,
          output: output[key],
          endDate
        };
        const filePathLocation = path.join(this.resultsDir, `${this.fileName}-${key}.json`);
        fs.writeFileSync(filePathLocation, `${JSON.stringify(fileData, null, 2)}`, {
          flag: 'w+'
        }, err => {
          if (err) {
            Logger.error(err.message, {
              context: LOG_CONTEXT
            });
          }
        });
      });
    }
  }
}
module.exports = FileOutputReporter;