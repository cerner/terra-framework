const childProcess = require('child_process');
const fs = require('fs-extra');
const path = require('path');
const stripAnsi = require('strip-ansi');
const { Logger } = require('@cerner/terra-cli');

const logger = new Logger({ prefix: '[terra-open-source-scripts:version]' });

const updateChangelogForPackage = require('./updateChangelogForPackage');
const logReleasingPackages = require('./logReleasingPackages');

const VERSION_OUTPUT_PATH = path.join(process.cwd(), 'tmp', 'version-output.txt');

module.exports = async () => {
  try {
    await fs.ensureFile(VERSION_OUTPUT_PATH);

    // Utilize inherit in terms of stdio so that we can interact with the user running the command to capture requested versions.
    // Exec doesn't allow using inherit and when you use inherit the output doesn't get returned. Thus, we use script
    // to capture the output to a file
    childProcess.execSync(`script -q ${VERSION_OUTPUT_PATH} lerna version --no-git-tag-version`, { stdio: 'inherit' });

    const versionOutputContents = stripAnsi(await fs.readFile(VERSION_OUTPUT_PATH, 'utf-8'));
    if (versionOutputContents.includes('lerna success version finished')) {
      // Extract packages and versions from the version output
      const packagesAndVersionsRegEx = /- (\S+): \S+ => (\d+.\d+.\d+)/g;
      let packagesAndVersionsMatch = packagesAndVersionsRegEx.exec(versionOutputContents);
      const packagesAndVersions = [];
      const updatedPackages = [];
      while (packagesAndVersionsMatch !== null) {
        updatedPackages.push(packagesAndVersionsMatch[1]);
        packagesAndVersions.push(`${packagesAndVersionsMatch[1]}@${packagesAndVersionsMatch[2]}`);
        packagesAndVersionsMatch = packagesAndVersionsRegEx.exec(versionOutputContents);
      }

      // Update release version in changelog files
      const packagePaths = updatedPackages.map(x => `packages/${x.replace('@cerner/', '')}`);
      await Promise.all(packagePaths.map(packagePath => updateChangelogForPackage(packagePath)));

      logReleasingPackages(packagesAndVersions);
    } else {
      logger.warn('Lerna version aborted');
    }
  } finally {
    fs.remove(VERSION_OUTPUT_PATH);
  }
};
