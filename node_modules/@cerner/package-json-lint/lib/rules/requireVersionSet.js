const semver = require('semver');

module.exports = ({
  versionSet, dependencies, ruleConfig, projectType, report, lintId, messageString,
}) => {
  const currentProblems = versionSet.map(({ name, versionRange }) => {
    const dependencyVersion = dependencies[name];
    if (dependencyVersion && !semver.intersects(dependencyVersion, versionRange) && !(ruleConfig.severity.allowList && ruleConfig.severity.allowList.includes(name))) {
      return `${name}@${dependencyVersion} does not satisfy range requirement for ${messageString}: ${name}@${versionRange}`;
    }
    return undefined;
  }).filter(problem => !!problem);

  if (currentProblems.length) {
    const lintMessage = `The dependencies for this project do not have the minimum versions required for ${messageString}:\n  ${currentProblems.join('\n  ')}`;
    report({
      lintId, severity: ruleConfig.severity, lintMessage, projectType,
    });
  }
};
