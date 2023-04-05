const prepareForReleaseMonoRepoHandler = require('./prepareForReleaseMonoRepoHandler');
const prepareForReleaseRepoHandler = require('./prepareForReleaseRepoHandler');
const isMonoRepo = require('../../utils/isMonoRepo');

const prepareForRelease = {
  command: 'prepare-for-release',
  describe: 'Prepare the project for release by updating the version and changelog of the project(s)',
  handler: async () => (await isMonoRepo() ? prepareForReleaseMonoRepoHandler() : prepareForReleaseRepoHandler()),
};

module.exports = prepareForRelease;
