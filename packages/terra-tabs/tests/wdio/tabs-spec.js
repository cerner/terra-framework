/* global $ */
// Verify tabs collapse appropriately
Terra.describeViewports('Tabs - Responsive', ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
  it('Default', () => {
    browser.url('/raw/tests/terra-tabs/tabs/tabs/default-tabs');
    browser.pause(1000);
    $('[class*="tab-content"]').moveTo();
    Terra.validates.element('default', { selector: '#root' });
  });

  it('displays Extended tabs', () => {
    browser.url('/raw/tests/terra-tabs/tabs/tabs/extended-tabs');
    browser.refresh();
    $('[class*="tab-content"]').moveTo();
    Terra.validates.element('extended', { selector: '#root' });
  });

  it('displays Icon Only Tabs', () => {
    browser.url('/raw/tests/terra-tabs/tabs/tabs/default-icon-only-tabs');
    $('[class*="tab-content"]').moveTo();
    Terra.validates.element('icon only');
  });

  it('Icon Only Tabs - No Overflow', () => {
    browser.url('/raw/tests/terra-tabs/tabs/tabs/overflow-tabs');
    Terra.validates.element('icon only no overflow');
  });
});

// Only test viewports that have collapsed tabs
Terra.describeViewports('Responsive Hidden Open', ['tiny', 'small', 'medium', 'large'], () => {
  before(() => {
    browser.url('/raw/tests/terra-tabs/tabs/tabs/default-tabs');
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
      browser.url('/raw/tests/terra-tabs/tabs/tabs/default-tabs');
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
    browser.url('/raw/tests/terra-tabs/tabs/tabs/fill-parent-tabs');
    $('[class*="tab-content"]').moveTo();
    Terra.validates.element('fill parent');
  });

  describe('Additional Tabs after mount', () => {
    it('displays before mount', () => {
      browser.url('/raw/tests/terra-tabs/tabs/tabs/additional-tabs');
      Terra.validates.element('before', { selector: '#tabsWrapper-5' });
    });

    it('Additional Tabs', () => {
      $('button').click();
      $('#tabsWrapper-20').waitForDisplayed();
      Terra.validates.element('after', { selector: '#tabsWrapper-20' });
    });
  });
});

// Verify tabs do not _completely_ collapse.
Terra.describeViewports('Tabs - Uncollapsed', ['tiny'], () => {
  describe('Icon Only Tabs', () => {
    it('Icon Only Tabs', () => {
      browser.url('/raw/tests/terra-tabs/tabs/tabs/uncollapsed-icon-only-tabs');
      Terra.validates.element('uncollapsed', { selector: '#iconOnlyTabs' });
    });
  });

  describe('Default', () => {
    it('Default', () => {
      browser.url('/raw/tests/terra-tabs/tabs/tabs/uncollapsed-tabs');
      Terra.validates.element('uncollapsed');
    });
  });
});

Terra.describeViewports('Tabs - Responsive to Window', ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
  it('Responsive to Window', () => {
    browser.url('/raw/tests/terra-tabs/tabs/tabs/tabs-responsive-to-window');
    $('[class*="tab-content"]').moveTo();
    Terra.validates.element('responsive to window', { selector: '#tabs-container' });
  });
});

Terra.describeViewports('Tabs - Responsive to Parent', ['huge'], () => {
  it('Responsive to Parent', () => {
    browser.url('/raw/tests/terra-tabs/tabs/tabs/tabs-responsive-to-parent');
    Terra.validates.element('before');
    $('button').click();
    $('[class*="tab-content"]').moveTo();
    Terra.validates.element('after');
  });
});
