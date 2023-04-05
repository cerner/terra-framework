const spawn = require('@npmcli/promise-spawn');
const { Logger } = require('@cerner/terra-cli');

const setupGit = require('./setupGit');
const setupNPM = require('./setupNPM');

const logger = new Logger({ prefix: '[terra-open-source-scripts:release]' });

// Manipulate lerna publish output to find what packages were released and need to be tagged.
const getTags = (output) => {
  const successString = 'Successfully published:\n';
  const lastIndexOf = output.lastIndexOf(successString);
  // If we didn't find the success string, we have no tags
  if (lastIndexOf < 0) {
    return null;
  }
  const substring = output.substring(lastIndexOf + successString.length);
  const withoutDashes = substring.replace(/ - /g, '').trim();
  return withoutDashes.split('\n');
};

module.exports = async () => {
  // Setup NPM for the publishing process
  await setupNPM();

  // Capture the stdout from the publish command so that we can parse it for the appropriate tags
  const { stdout } = await spawn('npx', ['lerna', 'publish', 'from-package', '--yes'], { stdioString: true });
  logger.info(stdout);

  // Retrieve the tags that were published
  const tags = getTags(stdout);
  if (tags) {
    // Setup git
    await setupGit();
    logger.info('tags', JSON.stringify(tags, null, 2));

    // Tag based on what was published and push those tags to origin
    await Promise.all(tags.map(tag => spawn('git', ['tag', '-a', tag, '-m', tag], { stdioString: true })));
    await spawn('git', ['push', 'origin', '--tags'], { stdioString: true });
  } else {
    logger.info('Nothing to tag');
  }
};
