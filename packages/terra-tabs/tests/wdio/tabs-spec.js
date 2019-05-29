const ignoredA11y = {
  // https://github.com/cerner/terra-core/issues/1061
  'aria-allowed-attr': { enabled: false },
};

// Verify tabs collapse appropriately
Terra.describeViewports('Tabs - Responsive', ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
  describe('Default', () => {
    it('Default', () => {
      browser.url('/#/raw/tests/terra-tabs/tabs/tabs/default-tabs');
      browser.moveToObject('.tabContent');
      Terra.validates.element();
    });
  });
  describe('Extended', () => {
    it('Extended', () => {
      browser.url('/#/raw/tests/terra-tabs/tabs/tabs/extended-tabs');
      browser.moveToObject('.tabContent');
      Terra.validates.element();
    });
  });
  describe('Icon Only Tabs', () => {
    it('Icon Only Tabs', () => {
      browser.url('/#/raw/tests/terra-tabs/tabs/tabs/icon-only-tabs');
      browser.moveToObject('.tabContent');
      Terra.validates.element();
    });
  });
});

// Only test viewports that have collapsed tabs
Terra.describeViewports('Responsive Hidden Open', ['tiny', 'small', 'medium', 'large'], () => {
  before(() => {
    browser.url('/#/raw/tests/terra-tabs/tabs/tabs/default-tabs');
    browser.refresh();
  });

  it('should close menu when tab is selected', () => {
    browser.waitForVisible('[data-terra-tabs-menu]');
    browser.click('[data-terra-tabs-menu]');

    Terra.validates.element('0', { rules: ignoredA11y, selector: '#root' });
    browser.click('#tab12');

    Terra.validates.element('1', { rules: ignoredA11y, selector: '#root' });
  });
});

// Test desktop styles and functionality
Terra.describeViewports('Tabs - Large screen', ['large'], () => {
  describe('Default', () => {
    it('Default', () => {
      browser.url('/#/raw/tests/terra-tabs/tabs/tabs/default-tabs');
      browser.refresh();
      browser.moveToObject('.tabContent');
    });

    describe('Collapsible hover', () => {
      it('Collapsible hover', () => {
        browser.waitForVisible('#tab2');
        browser.moveToObject('#tab2');
        Terra.validates.element();
      });
    });

    describe('Collapsible active focus', () => {
      it('Collapsible active focus', () => {
        browser.waitForVisible('#tab2');
        browser.click('#tab2');
        Terra.validates.element();
      });
    });
  });

  describe('Fill Parent Tabs', () => {
    it('Fill Parent Tabs', () => {
      browser.url('/#/raw/tests/terra-tabs/tabs/tabs/fill-parent-tabs');
      browser.moveToObject('.tabContent');
      Terra.validates.element();
    });
  });
});
