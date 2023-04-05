const chalk = require('chalk');
const WDIOReporter = require('@wdio/reporter').default;
class AccessibilityReporter extends WDIOReporter {
  /**
   * Indents a string.
   * @param {string} string - The string to indent.
   * @param {number} indent - The number of spaces to indent the string.
   */
  static indent(string, indent) {
    if (indent > 0) {
      return string.replace(/^(?!\s*$)/gm, Array(indent + 1).join(' '));
    }
    return string;
  }
  constructor(options) {
    super({
      stdout: true,
      ...options
    });
    this.currentTest = null;
    this.accessibilityResults = {};
    process.on('terra:report:accessibility', this.onReportAccessibility.bind(this));
  }

  /**
   * Hook invoked at the start of the test.
   * @param {TestStats} test - The current test object.
   */
  onTestStart(test) {
    this.currentTest = test.uid;
  }

  /**
   * Hook invoked when accessibility results are reported.
   * @param {Object} results - Accessibility results.
   * @param {array} results.warnings - Accessibility warning results.
   */
  onReportAccessibility(results) {
    this.accessibilityResults[this.currentTest] = results;
  }

  /**
   * Hook invoked when the runner ends.
   * @param RunnerStats runner - The test runner stats object.
   */
  onRunnerEnd(runner) {
    this.printReport(runner);
  }

  /**
   * Print the accessibility report.
   * @param {RunnerStats} runner - The test runner.
   */
  printReport(runner) {
    const warnings = Object.keys(this.accessibilityResults);
    if (warnings.length === 0) {
      return;
    }
    const rootSuite = this.currentSuites.find(suite => suite.uid === '(root)');
    const output = this.travelSuite(rootSuite);
    const spec = runner.specs[0];
    this.write(`Spec: ${spec}\n${output}`);
  }

  /**
   * Travels the suite tree to generate the accessibility report.
   * @param {SuiteStats} currentSuite - The current suite.
   * @param {number} depth - The current nesting depth of the suite tree.
   * @returns {string} - An accessibility report.
   */
  travelSuite(currentSuite, depth = 0) {
    const {
      suites,
      tests,
      title
    } = currentSuite;
    const warnings = [];
    suites.forEach(suite => {
      const output = this.travelSuite(suite, depth + 1);
      if (output.length > 0) {
        warnings.push(output);
      }
    });
    tests.forEach(test => {
      const {
        uid
      } = test;
      if (this.accessibilityResults[uid]) {
        const testTitle = this.formatTestWarning(uid, depth * 2 + 2);
        warnings.push(testTitle);
      }
    });
    if (warnings.length > 0) {
      const suiteTitle = title === '(root)' ? '' : title;
      return `${AccessibilityReporter.indent(suiteTitle, depth * 2)}\n${warnings.join('\n')}\n`;
    }
    return '';
  }

  /**
   * Formats an accessibility warning summary for a test.
   * @param {string} uid - The unique identifier of the test.
   * @param {number} indent - The indentation the report should have.
   */
  formatTestWarning(uid, indent) {
    const {
      title
    } = this.tests[uid];
    const {
      warnings
    } = this.accessibilityResults[uid];
    const string = `${chalk.yellow('warning')} ${title}\n\n ${chalk.yellow(`${JSON.stringify(warnings, null, 2)}`)}`;
    return AccessibilityReporter.indent(string, indent);
  }
}
module.exports = AccessibilityReporter;