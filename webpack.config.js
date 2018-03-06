/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const path = require('path');
const glob = require('glob');
const webpackConfig = require('terra-dev-site/src/config/webpack.config');
const I18nAggregatorPlugin = require('terra-i18n-plugin');
const i18nSupportedLocales = require('terra-i18n/lib/i18nSupportedLocales');

const processPath = process.cwd();
const rootPath = processPath.includes('packages') ? processPath.split('packages')[0] : processPath;

const searchPatterns = [
  path.resolve(rootPath, 'packages', 'terra-*'), // repo tranlsations
  path.resolve(rootPath, 'node_modules', 'terra-*'), // root level dependency tranlsations
  path.resolve(rootPath, 'packages', 'terra-*', 'node_modules', 'terra-*'), // package level dependency tranlsations
];

let translationsDirectories = [];
searchPatterns.forEach((pattern) => {
  translationsDirectories = translationsDirectories.concat(glob.sync(pattern));
});

const i18nPlugin = new I18nAggregatorPlugin({
  baseDirectory: rootPath,
  translationsDirectories,
  supportedLocales: i18nSupportedLocales,
});

const plugins = webpackConfig.plugins;
plugins[2] = i18nPlugin;

webpackConfig.plugins = plugins;

webpackConfig.resolve.modules = [path.resolve(path.join(rootPath, 'aggregated-translations')), 'node_modules'];

module.exports = webpackConfig;
