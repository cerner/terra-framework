// eslint-disable-next-line import/no-extraneous-dependencies
const terraDevSiteWebpackConfig = require('terra-dev-site/config/webpack/webpack.config');

module.exports = (env, argv) => {
  const aggregateOptions = {};

  if (process.env.LOCALE) {
    aggregateOptions.locales = [process.env.LOCALE];
  }

  return terraDevSiteWebpackConfig({ ...env, aggregateOptions }, argv);
};
