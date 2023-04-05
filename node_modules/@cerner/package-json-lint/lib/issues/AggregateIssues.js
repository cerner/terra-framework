const chalk = require('chalk');

class AggregateIssues {
  constructor({ packagesIssues }) {
    this.packagesIssues = packagesIssues;
    const { errorCount, warningCount } = packagesIssues.reduce(
      (counts, result) => ({
        errorCount: counts.errorCount + result.errorCount,
        warningCount: counts.warningCount + result.warningCount,
      }),
      {
        errorCount: 0,
        warningCount: 0,
      },
    );
    this.errorCount = errorCount;
    this.warningCount = warningCount;
  }

  toString() {
    const aggregateResults = this.packagesIssues.map(packageIssue => packageIssue.toString()).filter(packageIssueString => packageIssueString).join('\n');

    const errorCountMessage = `${this.errorCount} ${this.errorCount === 1 ? 'error' : 'errors'}`;
    const warningCountMessage = `${this.warningCount} ${this.warningCount === 1 ? 'warning' : 'warnings'}`;
    const totals = `${chalk.underline('Totals')}\n${chalk.red.bold(errorCountMessage)}\n${chalk.yellow.bold(warningCountMessage)}\n`;

    return `${aggregateResults}\n${totals}`;
  }
}

module.exports = AggregateIssues;
