const fs = require('fs-extra');
const rules = require('./rules');
const PackageIssues = require('./issues/PackageIssues');
const AggregateIssues = require('./issues/AggregateIssues');
const { getRuleConfig, getConfigForFile } = require('./config');
const { getPathsForPackages } = require('./project-structure');

/**
 * Lints a package json file with the given package json data with the config provided by the config parameter
 * @param {Object} options - options for linting the package json
 * @param {string} options.packageJsonData - the package json data
 * @param {Object} options.config - the config to use when running the linter
 */
const lint = ({ packageJsonData, config }) => {
  if (!config.rules) {
    return [];
  }

  const issues = [];
  const projectType = config.projectType || 'module';
  const rulesToRun = Object.entries(config.rules).map(([ruleId, ruleInformation]) => {
    const rule = rules[ruleId];
    const ruleConfig = getRuleConfig({ rule, ruleInformation });
    if (ruleConfig.severity !== 'off') {
      return rule.create({ ruleConfig, projectType, report: issue => issues.push(issue) });
    }
    return undefined;
  }).filter(rule => !!rule);

  Object.entries(packageJsonData).forEach(([node, value]) => {
    rulesToRun.forEach((rule) => {
      const nodeFunction = rule[node];
      if (nodeFunction) {
        nodeFunction(value);
      }
    });
  });
  return issues;
};

/**
 * Lints a package json file at the given package json path with the config provided by the config parameter
 * @param {Object} options - options for linting the package json
 * @param {string} options.packageJsonPath - the path to the package json file
 * @param {Object} options.config - the config to use when running the linter
 */
const lintPackageJsonFile = async ({ packageJsonPath, config }) => {
  const packageJsonData = await fs.readJson(packageJsonPath);
  return lint({ packageJsonData, config });
};

module.exports = async () => {
  const paths = await getPathsForPackages();
  const packagesIssues = await Promise.all(paths.map(async (packageJsonPath) => {
    const configForFile = await getConfigForFile({ packageJsonPath });
    const results = await lintPackageJsonFile({ packageJsonPath, config: configForFile });
    return new PackageIssues({ packageJsonPath, results });
  }));
  const aggregateIssues = new AggregateIssues({ packagesIssues });
  if (aggregateIssues.errorCount || aggregateIssues.warningCount) {
    // eslint-disable-next-line no-console
    console.log(aggregateIssues.toString());
    if (aggregateIssues.errorCount) {
      process.exitCode = 1;
    }
  }
};
