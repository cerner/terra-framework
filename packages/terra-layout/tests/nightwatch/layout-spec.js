/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo, screenWidth } = require('terra-toolkit/lib/nightwatch/responsive-helpers');

module.exports = resizeTo(['small', 'large', 'huge'], {
  'Displays a default layout': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/layout/default`);

    browser.expect.element('#test-root #test-header').to.be.present;
    browser.expect.element('#test-root #test-content').to.be.present;
    browser.expect.element('#test-root #test-menu').to.be.present;

    const width = screenWidth(browser);

    if (width < browser.globals.breakpoints.medium[0]) {
      browser.expect.element('#test-root [class*=_hover-section_]').to.not.be.visible;

      browser.click('#test-root .test-header-toggle', () => {
        browser.expect.element('#test-root #test-menu').to.be.visible;
        browser.waitForElementVisible('#test-root #test-menu .test-menu-toggle');
      });
    } else if (width < browser.globals.breakpoints.huge[0]) {
      browser.expect.element('#test-root #test-menu').to.not.be.visible;
      browser.waitForElementVisible('#test-root [class*=_hover-section_]', 1000);
      browser.expect.element('#test-root [class*=_hover-section_]').to.be.visible;

      browser.click('#test-root [class*=_hover-section_]', () => {
        browser.waitForElementVisible('#test-menu', 1000);
        browser.expect.element('#test-menu').to.be.visible;

        // Resetting pointer position
        browser.click('#test-root #test-header');
      });
    } else {
      browser.expect.element('#test-root #test-menu').to.be.visible;
      browser.expect.element('#test-root #test-content .test-content-toggle').to.not.be.present;
    }
  },

  'Displays a layout with no menu': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/layout/no-menu`);

    browser.expect.element('#test-root #test-header').to.be.present;
    browser.expect.element('#test-root #test-content').to.be.present;
    browser.expect.element('#test-root #test-menu').to.not.be.present;
    browser.expect.element('#test-root [class*=_hover-section_]').to.not.be.visible;
  },

  'Displays a layout with long menu control text': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/layout/long-text`);

    browser.expect.element('#test-root #test-header').to.be.present;
    browser.expect.element('#test-root #test-content').to.be.present;
    browser.expect.element('#test-root #test-menu').to.be.present;

    const width = screenWidth(browser);

    if (width < browser.globals.breakpoints.medium[0]) {
      browser.expect.element('#test-root #test-menu').to.not.be.visible;
    } else if (width < browser.globals.breakpoints.huge[0]) {
      browser.expect.element('#test-root #test-menu').to.not.be.visible;
      browser.expect.element('#test-root [class*=_hover-section_]').to.be.present;
      browser.expect.element('#test-root [class*=_hover-section_]').text.to.equal('Menu Text That Is Really Really Really Really Really Really Really Really Really Really Really Really Really Really Really Really Long');
    } else {
      browser.expect.element('#test-root #test-menu').to.be.visible;
    }
  },

  'Displays a layout without a header': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/layout/no-header`);

    browser.expect.element('#test-root #test-header').to.not.be.present;
    browser.expect.element('#test-root #test-content').to.be.present;
    browser.expect.element('#test-root #test-menu').to.be.present;

    const width = screenWidth(browser);

    if (width < browser.globals.breakpoints.medium[0]) {
      browser.expect.element('#test-root [class*=_hover-section_]').to.not.be.visible;

      browser.click('#test-root .test-content-toggle', () => {
        browser.expect.element('#test-root #test-menu').to.be.visible;
        browser.waitForElementVisible('#test-root #test-menu .test-menu-toggle');
      });
    } else if (width < browser.globals.breakpoints.huge[0]) {
      browser.expect.element('#test-root #test-menu').to.not.be.visible;
      browser.expect.element('#test-root [class*=_hover-section_]').to.be.visible;

      browser.click('#test-root [class*=_hover-section_]', () => {
        browser.waitForElementVisible('#test-menu', 1000);
        browser.expect.element('#test-menu').to.be.visible;
      });
    } else {
      browser.expect.element('#test-root #test-menu').to.be.visible;
      browser.expect.element('#test-root #test-content .test-content-toggle').to.not.be.present;
    }
  },
});
