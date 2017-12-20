// By default eslint assumes packages imported are supposed to be dependencies,
// not devDependencies. Disabling this rule in webpack.conig.js
/* eslint-disable import/no-extraneous-dependencies */
const CleanPlugin = require('clean-webpack-plugin');
const path = require('path');

const config = {
  // Clean build before running
  plugins: [
    new CleanPlugin('build', { exclude: ['stats.json'] }),
  ],
  // Create output file
  output: {
    path: path.resolve(path.join(process.cwd(), 'build')),
    filename: '[name]-[hash].js',
  },
};

module.exports = config;
