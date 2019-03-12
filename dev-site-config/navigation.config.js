// eslint-disable-next-line import/no-extraneous-dependencies
const navConfig = require('terra-dev-site/config/site/navigation.config');

const providerLink = {
  path: '/provider',
  text: 'Provider',
  pageTypes: ['provider'],
  isHidden: true,
};

navConfig.navigation.links.push(providerLink);

module.exports = navConfig;
