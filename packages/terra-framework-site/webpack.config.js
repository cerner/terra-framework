const path = require('path');
const webpackConfig = require('x-site/webpack.config');

const frameworkEntry = { 'terra-framework': path.resolve(path.join(process.cwd(), 'src', 'Index')) };

webpackConfig.entry = Object.assign({}, webpackConfig.entry, frameworkEntry);

module.exports = webpackConfig;
