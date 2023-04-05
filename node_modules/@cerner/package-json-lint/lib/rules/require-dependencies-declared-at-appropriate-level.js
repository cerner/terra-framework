const { devDependencySet } = require('./dev-dependency-set.json');

function findUnnecessaryDependency(rule, dependencies, dependencyType) {
  const { ruleConfig, projectType, report } = rule;
  const messageString = 'require-dependencies-declared-at-appropriate-level';
  if (projectType !== 'devModule') {
    const currentProblems = Object.keys(dependencies).map((dependency) => {
      const dependencyVersion = dependencies[dependency];
      if (devDependencySet.includes(dependency) && !(ruleConfig.severity.allowList && ruleConfig.severity.allowList.includes(dependency))) {
        return `${dependency}@${dependencyVersion} does not satisfy requirement for ${messageString} rule.`;
      }
      return undefined;
    }).filter(problem => !!problem);

    if (currentProblems.length) {
      let lintMessage;
      if (dependencyType === 'dependency') {
        lintMessage = `This project has unnecessary dependencies that violates the ${messageString} rule:\n  ${currentProblems.join('\n  ')}`;
      } else if (dependencyType === 'peer') {
        lintMessage = `This project has unnecessary peerDependencies that violates the ${messageString} rule:\n  ${currentProblems.join('\n  ')}`;
      }
      report({
        lintId: messageString,
        severity: ruleConfig.severity,
        lintMessage,
        projectType,
      });
    }
  }
}

module.exports = {
  create: ({
    ruleConfig,
    projectType,
    report,
  }) => ({
    dependencies: (dependencies) => {
      findUnnecessaryDependency({ ruleConfig, projectType, report }, dependencies, 'dependency');
    },
    peerDependencies: (peerDependencies) => {
      findUnnecessaryDependency({ ruleConfig, projectType, report }, peerDependencies, 'peer');
    },
  }),
};
