// Verify tabs collapse appropriately
Terra.describeViewports('Tabs - Responsive', ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
  it('Default', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/tabs/tabs/default-tabs');
    browser.pause(1000);
    $('[class*="tab-content"]').moveTo();
    Terra.validates.element('default', { selector: '#root' });
  });

  it('displays Extended tabs', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/tabs/tabs/extended-tabs');
    browser.refresh();
    $('[class*="tab-content"]').moveTo();
    Terra.validates.element('extended', { selector: '#root' });
  });

  it('displays Icon Only Tabs', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/tabs/tabs/default-icon-only-tabs');
    $('[class*="tab-content"]').moveTo();
    Terra.validates.element('icon only');
  });

  it('Icon Only Tabs - No Overflow', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/tabs/tabs/overflow-tabs');
    Terra.validates.element('icon only no overflow');
  });
});

// Only test viewports that have collapsed tabs
Terra.describeViewports('Responsive Hidden Open', ['tiny', 'small', 'medium', 'large'], () => {
  before(() => {
    browser.url('/raw/tests/cerner-terra-framework-docs/tabs/tabs/default-tabs');
    browser.refresh();
  });

  it('should close menu when tab is selected', () => {
    $('[data-terra-tabs-menu]').waitForDisplayed();
    $('[data-terra-tabs-menu]').click();

    Terra.validates.element('0', { selector: '#root' });
    $('#tab12').click();

    Terra.validates.element('1', { selector: '#root' });
  });
});

// Test desktop styles and functionality
Terra.describeViewports('Tabs - Large screen', ['large'], () => {
  describe('Default', () => {
    it('Default', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/tabs/tabs/default-tabs');
      browser.refresh();
      $('[class*="tab-content"]').moveTo();
    });

    describe('Collapsible active focus', () => {
      it('Collapsible active focus', () => {
        $('#tab2').waitForDisplayed();
        $('#tab2').click();
        Terra.validates.element('Collapsible active focus');
      });
    });
  });

  it('Fill Parent Tabs', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/tabs/tabs/fill-parent-tabs');
    $('[class*="tab-content"]').moveTo();
    Terra.validates.element('fill parent');
  });

  describe('Additional Tabs after mount', () => {
    it('displays before mount', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/tabs/tabs/additional-tabs');
      Terra.validates.element('additional tabs before mount', { selector: '#tabsWrapper-5' });
    });

    it('Additional Tabs', () => {
      $('button').click();
      $('#tabsWrapper-20').waitForDisplayed();
      Terra.validates.element('additional tabs after mount', { selector: '#tabsWrapper-20' });
    });
  });
});

// Verify tabs do not _completely_ collapse.
Terra.describeViewports('Tabs - Uncollapsed', ['tiny'], () => {
  describe('Icon Only Tabs', () => {
    it('Icon Only Tabs', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/tabs/tabs/uncollapsed-icon-only-tabs');
      Terra.validates.element('uncollapsed icon only tabs', { selector: '#iconOnlyTabs' });
    });
  });

  describe('Default', () => {
    it('Default', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/tabs/tabs/uncollapsed-tabs');
      Terra.validates.element('uncollapsed default');
    });
  });
});

Terra.describeViewports('Tabs - Icons in Menu', ['tiny'], () => {
  it('displays Tabs With Icons In Menu', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/tabs/tabs/tabs-with-icons-in-menu');

    $('[data-terra-tabs-menu]').waitForDisplayed();
    Terra.validates.element('displays tabs with icons', { selector: '#tabsWithIconsInMenu' });

    $('[data-terra-tabs-menu]').click();
    Terra.validates.element('displays tabs with icons in menu', { selector: '#tabsWithIconsInMenu' });

    $('#error').click();
    Terra.validates.element('error icon list item selected', { selector: '#tabsWithIconsInMenu' });
  });
});

Terra.describeViewports('Tabs - Responsive to Window', ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
  it('Responsive to Window', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/tabs/tabs/tabs-responsive-to-window');
    $('[class*="tab-content"]').moveTo();
    Terra.validates.element('responsive to window', { selector: '#tabs-container' });
  });
});

Terra.describeViewports('Tabs - Responsive to Parent', ['huge'], () => {
  it('Responsive to Parent', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/tabs/tabs/tabs-responsive-to-parent');
    Terra.validates.element('responsive to parent before');
    $('button').click();
    $('[class*="tab-content"]').moveTo();
    Terra.validates.element('responsive to parent after');
  });
});

Terra.describeViewports('Tabs - Keyboard Navigation', ['medium'], () => {
  it('displays tab with keyboard focus', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/tabs/tabs/default-tabs');
    browser.keys('Tab');
    Terra.validates.element('Keyboard Focus', { selector: '#root' });
  });
  it('should navigate to 2nd tab using right arrow and activate on enter', () => {
    browser.keys(['ArrowRight', 'Enter']);
    Terra.validates.element('Navigate and activate using keyboard', { selector: '#root' });
  });
});
