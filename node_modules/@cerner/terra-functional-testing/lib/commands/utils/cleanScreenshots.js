const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');
const {
  Logger
} = require('@cerner/terra-cli');
const logger = new Logger({
  prefix: '[terra-functional-testing:cleanScreenshots]'
});

// eslint-disable-next-line global-require, import/no-dynamic-require
const isDirectory = filePath => fs.existsSync(filePath) && fs.lstatSync(filePath).isDirectory();

/**
 * Delete the `diff`, `error`, `latest` and `reference` screenshot directories for each test run so all the screenshots are current.
 */
async function cleanScreenshots() {
  const monoRepoPath = path.resolve(process.cwd(), 'packages');
  const isMonoRepo = fs.existsSync(monoRepoPath);
  const patterns = [];

  // Check whether or not it is a monorepo and then get the paths to the snapshot directories.
  if (isMonoRepo) {
    const packageNames = fs.readdirSync(monoRepoPath);
    packageNames.forEach(packageName => {
      patterns.push(path.resolve(monoRepoPath, packageName, 'tests', 'wdio', '**', '__snapshots__', 'diff'));
      patterns.push(path.resolve(monoRepoPath, packageName, 'tests', 'wdio', '**', '__snapshots__', 'error'));
      patterns.push(path.resolve(monoRepoPath, packageName, 'tests', 'wdio', '**', '__snapshots__', 'latest'));
    });
  } else {
    patterns.push(path.resolve(process.cwd(), 'tests', 'wdio', '**', '__snapshots__', 'diff'));
    patterns.push(path.resolve(process.cwd(), 'tests', 'wdio', '**', '__snapshots__', 'error'));
    patterns.push(path.resolve(process.cwd(), 'tests', 'wdio', '**', '__snapshots__', 'latest'));
  }

  // For each of the three directory patterns, do a glob search to identify all the existing and matching screenshot directories and delete them.
  patterns.forEach(pattern => {
    // Determine the existing snapshot directories.
    const screenshotDirectories = glob.sync(pattern) || [];

    // It is possible there are multiple directories containing the __snapshot__ directory due to the '**' pattern in the glob search.
    screenshotDirectories.forEach(screenshotDirectory => {
      // Delete the existing snapshot directories if found.
      if (isDirectory(screenshotDirectory)) {
        fs.removeSync(screenshotDirectory);
      }
    });
  });
  logger.info('Cleaned wdio snapshots directories.');
}
module.exports = cleanScreenshots;