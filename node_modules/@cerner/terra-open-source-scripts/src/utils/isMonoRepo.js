const fs = require('fs-extra');
const path = require('path');

// Check if lerna.json is present to determine if we're in a monorepo.
const isMonoRepo = async () => fs.pathExists(path.join(process.cwd(), 'lerna.json'));

module.exports = isMonoRepo;
