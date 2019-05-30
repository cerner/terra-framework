// eslint-disable-next-line import/no-extraneous-dependencies
import { danger, warn, fail } from 'danger';

const determinePackages = (changedList, path) => {
  const path1 = path.split('packages/')[1];
  const packageName = path1.split('/')[0];
  return changedList.includes(packageName) ? changedList : changedList.concat([packageName]);
};

const newChangelogs = danger.git.created_files.filter((filePath) => {
  const changelogPattern = /^packages\/terra-([a-z-])*\/CHANGELOG.md/i;
  return changelogPattern.test(filePath);
}).reduce(determinePackages, []);

const modifiedChangelogs = danger.git.modified_files.filter((filePath) => {
  const changelogPattern = /^packages\/terra-([a-z-])*\/CHANGELOG.md/i;
  return changelogPattern.test(filePath);
}).reduce(determinePackages, []);

const modifiedPackages = danger.git.modified_files.filter((filePath) => {
  const changelogPattern = /^packages\/terra-([a-z-])*\/CHANGELOG.md/i;
  const packagePattern = /^packages\/terra-([a-z-])*\//i;
  return packagePattern.test(filePath) && !changelogPattern.test(filePath);
}).reduce(determinePackages, []);

const missingChangelogs = modifiedPackages.filter(packageName => !modifiedChangelogs.includes(packageName) || newChangelogs.includes(packageName));

// Fail if there are package changes without a CHANGELOG update
if (missingChangelogs.length > 0) {
  fail(`Please include a CHANGELOG entry for each changed package this PR. Looks like a CHANGELOG is missing for: \n - ${missingChangelogs.join('\n - ')}`);
}
