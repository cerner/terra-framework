/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo } = require('terra-toolkit/lib/nightwatch/responsive-helpers');

module.exports = resizeTo(['large'], {
  'Displays a default application header': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/application-header-layout/default`);

    browser.expect.element('#test-header #test-logo').to.be.present;
    browser.expect.element('#test-header #test-navigation').to.be.present;
    browser.expect.element('#test-header #test-utilities').to.be.present;
    browser.expect.element('#test-header #test-toggle').to.be.present;
    browser.expect.element('#test-header #test-extensions').to.be.present;
  },
});
