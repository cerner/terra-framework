/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  // TODO: Create tests.
  // 'Displays a default application-name': (browser) => {
  //   browse
  //     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/application-name-tests/default`)
  //     .expect.element('.application-name').to.be.present;
  // },
});
