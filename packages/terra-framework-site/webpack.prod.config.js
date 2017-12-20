const config = require('./webpack.config');
const prodConfig = require('x-site/webpack.prod.config');

// Clean build before running
config.plugins.concat(prodConfig.plugins);

// Create output file
config.output = prodConfig.output;

module.exports = config;
