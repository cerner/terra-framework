const prompts = require('prompts');
const fs = require('fs-extra');
const path = require('path');
const log = require('npmlog');
const spawn = require('@npmcli/promise-spawn');
const updateChangelogForPackage = require('./updateChangelogForPackage');
const logReleasingPackages = require('./logReleasingPackages');

const promptForVersionType = async () => {
  // Pause the npm logger while we prompt for the type of release we want to perform
  log.pause();
  const { versionType } = await prompts([
    {
      type: 'select',
      name: 'versionType',
      message: 'What type of release do you want to version for?',
      choices: [{ title: 'major', value: 'major' }, { title: 'minor', value: 'minor' }, { title: 'patch', value: 'patch' }],
      pageSize: 3,
    },
  ]);
  log.resume();
  return versionType;
};

module.exports = async () => {
  // Determine the version type
  const versionType = await promptForVersionType();
  // Run npm version to update package.json with respect to the requested version type
  const { stdout } = await spawn('npm', ['--no-git-tag-version', 'version', versionType], { stdioString: true });
  // Update the changelog for the current package
  await updateChangelogForPackage(process.cwd());

  const { name: packageName } = await fs.readJSON(path.join(process.cwd(), 'package.json'));
  logReleasingPackages([`${packageName}@${stdout.substring(1)}`]);
};
