/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo, screenWidth } = require('terra-toolkit/lib/nightwatch/responsive-helpers');

module.exports = resizeTo(['small', 'large', 'huge'], {
  'Displays a default layout': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/layout/layout-default`);

    browser.expect.element('#test-root #test-header').to.be.present;
    browser.expect.element('#test-root #test-content').to.be.present;
    browser.expect.element('#test-root #test-menu').to.be.present;

    const width = screenWidth(browser);

    if (width < browser.globals.breakpoints.medium[0]) {
      browser.click('#test-root .test-header-toggle', () => {
        browser.expect.element('#test-root #test-menu').to.be.visible;
        browser.waitForElementVisible('#test-root #test-menu .test-menu-toggle');
      });
    } else {
      browser.expect.element('#test-root #test-menu').to.be.visible;
      browser.expect.element('#test-root #test-content .test-content-toggle').to.not.be.present;
    }
  },

  'Displays a layout with no menu': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/layout/layout-no-menu`);

    browser.expect.element('#test-root #test-header').to.be.present;
    browser.expect.element('#test-root #test-content').to.be.present;
    browser.expect.element('#test-root #test-menu').to.not.be.present;
  },

  'Displays a layout without a header': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/layout/layout-no-header`);

    browser.expect.element('#test-root #test-header').to.not.be.present;
    browser.expect.element('#test-root #test-content').to.be.present;
    browser.expect.element('#test-root #test-menu').to.be.present;

    const width = screenWidth(browser);

    if (width < browser.globals.breakpoints.medium[0]) {
      browser.click('#test-root .test-content-toggle', () => {
        browser.expect.element('#test-root #test-menu').to.be.visible;
        browser.waitForElementVisible('#test-root #test-menu .test-menu-toggle');
      });
    } else {
      browser.expect.element('#test-root #test-menu').to.be.visible;
      browser.expect.element('#test-root #test-content .test-content-toggle').to.not.be.present;
    }
  },
});
