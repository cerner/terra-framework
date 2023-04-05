const fs = require('fs-extra');
const path = require('path');

module.exports = async (packagePath) => {
  const packageFile = path.resolve(packagePath, 'package.json');
  const changelogFile = path.resolve(packagePath, 'CHANGELOG.md');
  const releaseDate = new Date().toLocaleString('en-us', { month: 'long', year: 'numeric', day: 'numeric' });

  if (!(await fs.pathExists(packageFile)) || !(await fs.pathExists(changelogFile))) {
    return;
  }

  // Read package.json and pull out version
  const { version } = await fs.readJSON(packageFile);

  const regex = /## Unreleased\n*([^#]*)/;

  const changelog = await fs.readFile(changelogFile, 'utf-8');

  // Grab any content in the unreleased section until the next heading (#).
  const unreleasedContent = changelog.match(regex);

  // Default message
  let releaseContent = [
    '* Changed',
    '  * Minor dependency version bump',
    '',
    '',
  ].join('\n');

  const [, captureGroup] = unreleasedContent;

  // If there was content, don't use the default content.
  if (captureGroup) {
    releaseContent = captureGroup;
  }

  // setup change log entry
  const changelogDoc = [
    '## Unreleased',
    '',
    `## ${version} - (${releaseDate})`,
    '',
    releaseContent,
  ].join('\n');

  // Swap in change log entry
  const updatedChangelog = changelog.replace(regex, changelogDoc);

  // write out file.
  await fs.writeFile(changelogFile, updatedChangelog, { encoding: 'utf8', flag: 'w' });
};
