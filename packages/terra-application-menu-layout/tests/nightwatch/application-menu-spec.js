/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo } = require('terra-toolkit/lib/nightwatch/responsive-helpers');

module.exports = resizeTo(['large'], {
  'Displays a default application menu': (browser) => {
    browser.url(`${browser.launchUrl}/#/site/tests/application-menu-layout/application-menu-default`);

    browser.expect.element('#test-menu #test-header').to.be.present;
    browser.expect.element('#test-menu #test-extensions').to.be.present;
    browser.expect.element('#test-menu #test-content').to.be.present;
    browser.expect.element('#test-menu #test-footer').to.be.present;
  },
});
