const pacote = require('pacote');
const path = require('path');
const fs = require('fs-extra');
const spawn = require('@npmcli/promise-spawn');
const { Logger } = require('@cerner/terra-cli');

const setupGit = require('./setupGit');
const setupNPM = require('./setupNPM');

const logger = new Logger({ prefix: '[terra-open-source-scripts:release]' });

/**
 * Determines whether the name and version of a given package is already published
 * @param {string} name - the name of the package to check
 * @param {string} version - the version of the package to check
 * @returns {boolean} whether or not the package is already published
 */
const isAlreadyPublished = async (name, version) => {
  // Retrieve metadata about the given package
  const pkgJson = await pacote.packument(name, {
    registry: 'https://registry.npmjs.org/',
  });

  // Determine if a version is in the list of metadata
  const publishedVersions = Object.keys(pkgJson.versions);
  return publishedVersions.includes(version);
};

module.exports = async () => {
  const packageFile = path.resolve(process.cwd(), 'package.json');

  // Read package.json and pull out version
  const { name, version } = await fs.readJSON(packageFile);

  if (await isAlreadyPublished(name, version)) {
    logger.info('Nothing to publish');
    return;
  }

  // Setup NPM for the publishing process
  await setupNPM();

  // Actually publish the package to npm
  await spawn('npm', ['publish'], { stdioString: true });

  // Setup git
  await setupGit(name, version);

  // Tag based on what was published and push those tags to origin
  const tag = `v${version}`;
  await spawn('git', ['tag', '-a', tag, '-m', tag], { stdioString: true });
  await spawn('git', ['push', 'origin', '--tags'], { stdioString: true });
};
