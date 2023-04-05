const chalk = require('chalk');
const logSymbols = require('log-symbols');

class PackageIssues {
  constructor({ packageJsonPath, results }) {
    this.packageJsonPath = packageJsonPath;
    this.results = results;
    const { errorCount, warningCount } = this.results.reduce(
      (counts, issue) => {
        const isErrorSeverity = issue.severity === 'error';
        const newErrorCount = isErrorSeverity ? counts.errorCount + 1 : counts.errorCount;
        const newWarningCount = isErrorSeverity ? counts.warningCount : counts.warningCount + 1;

        return {
          errorCount: newErrorCount,
          warningCount: newWarningCount,
        };
      },
      {
        errorCount: 0,
        warningCount: 0,
      },
    );
    this.errorCount = errorCount;
    this.warningCount = warningCount;
  }

  toString() {
    if (this.errorCount || this.warningCount) {
      const packageJsonPath = chalk.underline(this.packageJsonPath);
      const results = this.results.map((result) => {
        const logSymbol = result.severity === 'error' ? logSymbols.error : logSymbols.warning;
        const formattedLintId = chalk.gray.dim(result.lintId);
        const formattedMessage = result.severity === 'error' ? chalk.bold.red(result.lintMessage) : chalk.yellow(result.lintMessage);

        return `${logSymbol} ${formattedLintId} - ${formattedMessage}`;
      }).join('\n');
      return `${packageJsonPath}\n${results}\n`;
    }
    return undefined;
  }
}

module.exports = PackageIssues;
