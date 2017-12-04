/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo, screenWidth } = require('terra-toolkit/lib/nightwatch/responsive-helpers');

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge'], {
  'Displays a basic NavigationLayout': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/navigation-layout/basic`);

    browser.expect.element('#test-root .test-header').to.be.present;
    browser.expect.element('#test-root .test-content').to.be.present;
    browser.expect.element('#test-root .test-menu').to.be.present;
  },

  'Displays a complex NavigationLayout': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/navigation-layout/complex`);

    const width = screenWidth(browser);

    browser.click('#test-root .page-1-link', () => {
      browser.expect.element('#test-root .test-header').to.be.present;
      browser.expect.element('#test-root .page-1-content').to.be.present;

      if (width < browser.globals.breakpoints.medium[0]) {
        browser.expect.element('#test-root .test-menu').to.be.present;
      } else if (width < browser.globals.breakpoints.large[0]) {
        browser.expect.element('#test-root .test-menu').to.not.be.present;
      } else if (width < browser.globals.breakpoints.huge[0]) {
        browser.expect.element('#test-root .test-menu').to.be.present;
      } else if (width < browser.globals.breakpoints.enormous[0]) {
        browser.expect.element('#test-root .test-menu').to.not.be.present;
      } else {
        browser.expect.element('#test-root .test-menu').to.be.present;
      }
    });

    browser.click('#test-root .page-2-link', () => {
      browser.expect.element('#test-root .test-header').to.be.present;
      browser.expect.element('#test-root .page-2-content').to.be.present;

      if (width < browser.globals.breakpoints.enormous[0]) {
        browser.expect.element('#test-root .test-menu').to.be.present;
      } else {
        browser.expect.element('#test-root .test-menu-huge').to.be.present;
      }
    });

    browser.click('#test-root .page-3-link', () => {
      browser.expect.element('#test-root .test-header').to.be.present;
      browser.expect.element('#test-root .page-3-content').to.be.present;

      browser.expect.element('#test-root .test-menu').to.not.be.present;
    });
  },
});
