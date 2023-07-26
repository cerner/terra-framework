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
  it('should open menu when More button is clicked', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/tabs/tabs/default-tabs');
    browser.refresh();
    $('[data-testid]').waitForDisplayed();
    $('[data-testid]').click();

    Terra.validates.element('0', { selector: '#root' });
  });

  it('should close menu when tab is selected', () => {
    $('#terra-common-tabs-Tab12').click();

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
        $('#terra-common-tabs-Tab2').waitForDisplayed();
        $('#terra-common-tabs-Tab2').click();
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
  it('displays Tabs With Icons', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/tabs/tabs/tabs-with-icons-in-menu');
    $('[data-testid]').waitForDisplayed();

    Terra.validates.element('displays tabs with icons', { selector: '#tabsWithIconsInMenu' });
  });

  it('displays Tabs With Icons in Menu', () => {
    $('[data-testid]').click();

    Terra.validates.element('displays tabs with icons in menu', { selector: '#tabsWithIconsInMenu' });
  });

  it('selects error icon item in Menu', () => {
    $('#terra-common-tabs-Error').click();

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
  it('Responsive to Parent before', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/tabs/tabs/tabs-responsive-to-parent');

    Terra.validates.element('responsive to parent before', { selector: '#responsiveToParent' });
  });

  it('Responsive to Parent After', () => {
    $('button').click();
    $('[class*="tab-content"]').moveTo();

    Terra.validates.element('responsive to parent after', { selector: '#responsiveToParent' });
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

Terra.describeViewports('Tabs - Drag and Drop', ['medium'], () => {
  it('displays tab before drag and drop', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/tabs/tabs/controlled-tabs');
    Terra.validates.element('Before Drag and Drop', { selector: '#root' });
  });
  it('should perform drag and drop operation', () => {
    browser.keys(['Tab', 'Space', 'ArrowRight', 'Space']);
    Terra.validates.element('After Drag and Drop', { selector: '#root' });
  });
});
