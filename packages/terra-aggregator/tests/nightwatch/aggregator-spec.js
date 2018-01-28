/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default aggregator': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/aggregator-tests/default`)
      .expect.element('.aggregator').to.be.present;
  },
});
