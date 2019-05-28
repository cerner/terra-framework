const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');

const ignoredA11y = {
  // https://github.com/cerner/terra-core/issues/1061
  'aria-allowed-attr': { enabled: false },
};

// Verify tabs collapse appropriately
describe('Tabs - Responsive', () => {
  viewports.forEach((viewport) => {
    describe('Default', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-tabs/tabs/tabs/default-tabs');
        browser.setViewportSize(viewport);
        browser.moveToObject('.tabContent');
      });
      Terra.it.matchesScreenshot();
      Terra.it.isAccessible();
    });
    describe('Extended', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-tabs/tabs/tabs/extended-tabs');
        browser.setViewportSize(viewport);
        browser.moveToObject('.tabContent');
      });
      Terra.it.matchesScreenshot();
      Terra.it.isAccessible();
    });
    describe('Icon Only Tabs', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-tabs/tabs/tabs/icon-only-tabs');
        browser.setViewportSize(viewport);
        browser.moveToObject('.tabContent');
      });
      Terra.it.matchesScreenshot();
      Terra.it.isAccessible();
    });
  });

  // Only test viewports that have collapsed tabs
  Terra.viewports('tiny', 'small', 'medium', 'large').forEach((viewport) => {
    describe('Responsive Hidden Open', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-tabs/tabs/tabs/default-tabs');
        browser.setViewportSize(viewport);
        browser.click('[data-terra-tabs-menu]');
      });

      Terra.it.matchesScreenshot('0', { selector: '#root' });
      Terra.it.isAccessible({ rules: ignoredA11y });

      it('should close menu when tab is selected', () => {
        browser.click('#tab12');
      });

      Terra.it.isAccessible({ rules: ignoredA11y });
      Terra.it.matchesScreenshot('1');
    });
  });

  // Test desktop styles and functionality
  describe('Tabs - Large screen', () => {
    before(() => browser.setViewportSize(Terra.viewports('large')[0]));
    describe('Default', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-tabs/tabs/tabs/default-tabs');
        browser.moveToObject('.tabContent');
      });

      describe('Collapsible hover', () => {
        beforeEach(() => {
          browser.waitForVisible('#tab2');
          browser.moveToObject('#tab2');
        });

        Terra.it.matchesScreenshot();
        Terra.it.isAccessible();
      });

      describe('Collapsible active focus', () => {
        beforeEach(() => {
          browser.waitForVisible('#tab2');
          browser.click('#tab2');
        });

        Terra.it.matchesScreenshot();
        Terra.it.isAccessible();
      });
    });

    describe('Fill Parent Tabs', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-tabs/tabs/tabs/fill-parent-tabs');
        browser.moveToObject('.tabContent');
      });

      Terra.it.matchesScreenshot();
      Terra.it.isAccessible();
    });
  });
});
