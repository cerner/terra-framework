const semver = require('semver');
const maxSatisfying = require('semver/ranges/max-satisfying');
const { execSync } = require('child_process');

const versionSet = [
  { name: 'redux', versionRange: '<4.0.0' },
  { name: 'axios', versionRange: '<0.19.0' },
  { name: 'uuid', versionRange: '<7.0.0' },
];

module.exports = {
  create: ({ ruleConfig, projectType, report }) => ({
    dependencies: (dependencies) => {
      const messageString = 'require-ie10-compatible-dependency-versions';
      const currentProblems = versionSet.map(({ name, versionRange }) => {
        const dependencyVersion = dependencies[name];
        if (dependencyVersion && !semver.intersects(dependencyVersion, versionRange) && !(ruleConfig.severity.allowList && ruleConfig.severity.allowList.includes(name))) {
          const allReleasedVersions = execSync(`npm view ${name} versions`, { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 }).match(/\d.\d.\d/g);
          const maxCompatibleVersion = maxSatisfying(allReleasedVersions, versionRange);
          return `${name}@${dependencyVersion} does not satisfy IE10 compatibility for ${messageString}. **Note** Use ${name}@${maxCompatibleVersion} or lower instead.`;
        }
        return undefined;
      }).filter(problem => !!problem);

      if (currentProblems.length) {
        const lintMessage = `The dependencies for this project do not satisfy the requirement for ${messageString}:\n  ${currentProblems.join('\n  ')}`;
        report({
          lintId: messageString, severity: ruleConfig.severity, lintMessage, projectType,
        });
      }
    },

  }),
};
