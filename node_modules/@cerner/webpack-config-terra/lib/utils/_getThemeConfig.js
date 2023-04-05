const fs = require('fs');
const path = require('path');

const CONFIG = 'terra-theme.config.js';

module.exports = () => {
  let themeConfig = {};

  const defaultConfig = path.resolve(process.cwd(), CONFIG);
  if (fs.existsSync(defaultConfig)) {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    themeConfig = require(defaultConfig);
  }
  return themeConfig;
};
