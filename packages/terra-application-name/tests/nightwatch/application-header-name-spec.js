/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'large'], {
  'Displays a default application-name for a header': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/application-name/header-default`)
      .expect.element('#default').to.be.present;
  },
});
