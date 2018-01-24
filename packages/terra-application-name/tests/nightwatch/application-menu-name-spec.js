/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['large'], {
  'Displays an application-name for a menu with visible title and subtitle': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/application-name/menu-visible-text`);
    browser.expect.element('#default').to.be.present;
    browser.expect.element('#default').text.to.equal('TitleSubtitle');
  },
  'Displays an application-name for a header with no visible title and subtitle': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/application-name/menu-no-text`);
    browser.expect.element('#default').text.to.equal('');
  },
});
