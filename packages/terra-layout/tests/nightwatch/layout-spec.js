/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo, screenWidth } = require('terra-toolkit/lib/nightwatch/responsive-helpers');

module.exports = resizeTo(['tiny', 'small', 'large'], {
  'Displays a default layout': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/layout-tests/default`);

    browser.expect.element('#test-header').to.be.present;
    browser.expect.element('#test-content').to.be.present;
    browser.expect.element('#test-menu').to.be.present;
    browser.expect.element('[data-hover-target-hover-section]').to.be.present;

    browser.expect.element('#test-menu').to.not.be.visible;

    const width = screenWidth(browser);

    if (width < browser.globals.breakpoints.large[0]) {
      browser.expect.element('[data-hover-target-hover-section]').to.not.be.visible;

      browser.click('.test-header-toggle', () => {
        browser.expect.element('#test-menu').to.be.visible;
      });
    } else {
      browser.expect.element('[data-hover-target-hover-section]').to.be.visible;

      browser.click('[data-hover-target-hover-section]', () => {
        browser.waitForElementVisible('#test-menu', 200);
        browser.expect.element('#test-menu').to.be.visible;

        browser.expect.element('[data-menu-header-pin]').to.be.visible;
        browser.click('[data-menu-header-pin]', () => {
          browser.waitForElementVisible('[data-menu-header-unpin]', 200);
          browser.expect.element('[data-menu-header-unpin]').to.be.visible;

          browser.click('[data-menu-header-unpin]', () => {
            browser.waitForElementVisible('[data-menu-header-pin]', 200);
            browser.expect.element('[data-menu-header-pin]').to.be.visible;
          });
        });
      });
    }
  },

  'Displays a layout with no menu': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/layout-tests/no-menu`);

    browser.expect.element('#test-header').to.be.present;
    browser.expect.element('#test-content').to.be.present;
    browser.expect.element('#test-menu').to.not.be.present;
    browser.expect.element('[data-hover-target-hover-section]').to.not.be.present;
  },

  'Displays a layout with long menu control text': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/layout-tests/long-text`);

    browser.expect.element('#test-header').to.be.present;
    browser.expect.element('#test-content').to.be.present;
    browser.expect.element('#test-menu').to.be.present;

    const width = screenWidth(browser);

    if (width >= browser.globals.breakpoints.large[0]) {
      browser.expect.element('[data-hover-target-hover-section]').to.be.visible;
      browser.expect.element('[data-hover-target-hover-section]').text.to.equal('Menu Text That Is Really Really Really Really Really Really Really Really Really Really Really Really Really Really Really Really Long');

      browser.click('[data-hover-target-hover-section]', () => {
        browser.waitForElementVisible('[data-menu-header]', 200);
        browser.expect.element('[data-menu-header]').text.to.equal('Menu Text That Is Really Really Really Really Really Really Really Really Really Really Really Really Really Really Really Really Long');
      });
    }
  },
});
