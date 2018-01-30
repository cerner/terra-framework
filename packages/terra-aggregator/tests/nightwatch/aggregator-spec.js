/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo } = require('terra-toolkit/lib/nightwatch/responsive-helpers');

module.exports = resizeTo(['small', 'large'], {
  'Displays standard aggregator': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/aggregator/default`);
  },
});
