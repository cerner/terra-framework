/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  /*
  TODO: Uncomment once tests are created.
  'Displays a default embedded-component': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/raw/tests/embedded-component-tests/default`)
      .expect.element('.embedded-component').to.be.present;
  }, */
});
