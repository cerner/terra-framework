// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terraClinical-navigation-secondary', done);
  },

  'Displays a default NavigationPrimary': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/navigation-secondary-tests/default`)
      .assert.elementPresent('.terraClinical-NavigationSecondary');
  },
};
