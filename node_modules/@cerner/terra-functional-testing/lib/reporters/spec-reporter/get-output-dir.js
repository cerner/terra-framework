const path = require('path');

/**
 * Returns the default output directory for reporter results.
 * @returns {string} - An output directory.
 */
const getOutputDir = () => path.resolve(process.cwd(), 'tests', 'wdio', 'reports');
module.exports = getOutputDir;