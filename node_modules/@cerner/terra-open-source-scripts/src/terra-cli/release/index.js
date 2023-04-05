const releaseMonoRepoHandler = require('./releaseMonoRepoHandler');
const releaseRepoHandler = require('./releaseRepoHandler');
const isMonoRepo = require('../../utils/isMonoRepo');

const release = {
  command: 'release',
  describe: 'Publish the current project, create git tags, and push the git tags',
  handler: async () => (await isMonoRepo() ? releaseMonoRepoHandler() : releaseRepoHandler()),
};

module.exports = release;
