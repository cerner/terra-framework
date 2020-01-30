// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge');
const terraDevSiteWebpackConfig = require('terra-dev-site/config/webpack/webpack.config');

const mergedConfig = (env, argv) => (
  merge(terraDevSiteWebpackConfig(env, argv), { devServer: { clientLogLevel: 'debug', stats: { assets: false } }, watchOptions: { ignored: /aggregated-translations/ } })
);

module.exports = mergedConfig;
