// Verify tabs collapse appropriately
Terra.describeViewports('Tabs - Responsive', ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
  describe('Default', () => {
    it('Default', () => {
      browser.url('/#/raw/tests/terra-tabs/tabs/tabs/default-tabs');
      browser.pause(1000);
      browser.moveToObject('[class*="tab-content"]');
      Terra.validates.element({ selector: '#root' });
    });
  });
  describe('Extended', () => {
    it('Extended', () => {
      browser.url('/#/raw/tests/terra-tabs/tabs/tabs/extended-tabs');
      browser.refresh();
      browser.moveToObject('[class*="tab-content"]');
      Terra.validates.element({ selector: '#root' });
    });
  });
  describe('Icon Only Tabs', () => {
    it('Icon Only Tabs', () => {
      browser.url('/#/raw/tests/terra-tabs/tabs/tabs/default-icon-only-tabs');
      browser.moveToObject('[class*="tab-content"]');
      Terra.validates.element();
    });
  });

  describe('Icon Only Tabs - No Overflow', () => {
    it('Icon Only Tabs - No Overflow', () => {
      browser.url('/#/raw/tests/terra-tabs/tabs/tabs/overflow-tabs');
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

    Terra.validates.element('0', { selector: '#root' });
    browser.click('#tab12');

    Terra.validates.element('1', { selector: '#root' });
  });
});

// Test desktop styles and functionality
Terra.describeViewports('Tabs - Large screen', ['large'], () => {
  describe('Default', () => {
    it('Default', () => {
      browser.url('/#/raw/tests/terra-tabs/tabs/tabs/default-tabs');
      browser.refresh();
      browser.moveToObject('[class*="tab-content"]');
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
      browser.moveToObject('[class*="tab-content"]');
      Terra.validates.element();
    });
  });

  describe('Additional Tabs after mount', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-tabs/tabs/tabs/additional-tabs');
    });

    Terra.it.matchesScreenshot('before', { selector: '#tabsWrapper-5' });

    it('Additional Tabs', () => {
      browser.click('button');
      browser.waitForVisible('#tabsWrapper-20');
      Terra.validates.element('after', { selector: '#tabsWrapper-20' });
    });
  });
});

// Verify tabs do not _completely_ collapse.
Terra.describeViewports('Tabs - Uncollapsed', ['tiny'], () => {
  describe('Icon Only Tabs', () => {
    it('Icon Only Tabs', () => {
      browser.url('/#/raw/tests/terra-tabs/tabs/tabs/uncollapsed-icon-only-tabs');
      Terra.validates.element('uncollapsed', { selector: '#iconOnlyTabs' });
    });
  });

  describe('Default', () => {
    it('Default', () => {
      browser.url('/#/raw/tests/terra-tabs/tabs/tabs/uncollapsed-tabs');
      Terra.validates.element('uncollapsed');
    });
  });
});

Terra.describeViewports('Tabs - Responsive to Window', ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
  describe('Responsive to Window', () => {
    it('Responsive to Window', () => {
      browser.url('/#/raw/tests/terra-tabs/tabs/tabs/tabs-responsive-to-window');
      browser.moveToObject('[class*="tab-content"]');
      Terra.validates.element({ selector: '#tabs-container' });
    });
  });
});

Terra.describeViewports('Tabs - Responsive to Parent', ['huge'], () => {
  describe('Responsive to Parent', () => {
    it('Responsive to Parent', () => {
      browser.url('/#/raw/tests/terra-tabs/tabs/tabs/tabs-responsive-to-parent');
      Terra.validates.element('before');
      browser.click('button');
      browser.moveToObject('[class*="tab-content"]');
      Terra.validates.element('after');
    });
  });
});
