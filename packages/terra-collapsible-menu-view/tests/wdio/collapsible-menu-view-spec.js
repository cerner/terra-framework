Terra.describeViewports('Responsive', ['tiny', 'small', 'medium', 'huge', 'large', 'enormous'], () => {
  it('should display responsive default', () => {
    browser.url('/raw/tests/terra-collapsible-menu-view/collapsible-menu-view/default-collapsible-menu-view');
    Terra.validates.element('default');
  });
});

// Only test viewports that have collapsed menu items
Terra.describeViewports('Responsive Hidden Open', ['tiny', 'small', 'medium', 'large'], () => {
  it('should display responsive hidden open', () => {
    browser.url('/raw/tests/terra-collapsible-menu-view/collapsible-menu-view/default-collapsible-menu-view');
    browser.click('[data-collapsible-menu-toggle]');
    Terra.validates.element('default', { selector: '#root' });
  });
});

Terra.describeViewports('Collapsible Menu With Item Before Divider', ['tiny', 'small', 'medium', 'large'], () => {
  it('should display with item before divider', () => {
    browser.url('/raw/tests/terra-collapsible-menu-view/collapsible-menu-view/default-collapsible-menu-view');
    browser.click('[data-collapsible-menu-toggle]');
    Terra.validates.element('default', { selector: '[data-terra-popup-content]' });
  });
});

Terra.describeViewports('First hidden item visible when isIconOnly', ['medium'], () => {
  it('should display First hidden item visible when isIconOnly', () => {
    browser.url('/raw/tests/terra-collapsible-menu-view/collapsible-menu-view/first-hidden-item-is-icon');
    Terra.validates.element('default');
  });
});

Terra.describeViewports('Responsive Single Item', ['tiny', 'large'], () => {
  it('should display responsive single item', () => {
    browser.url('/raw/tests/terra-collapsible-menu-view/collapsible-menu-view/collapsible-menu-view-single-item');
    browser.moveToObject('#root', 0, 0);
    Terra.validates.element('default', { selector: '#root' });
  });
});

Terra.describeViewports('Single Item Group', ['enormous', 'large', 'huge', 'medium'], () => {
  it('should display single item group', () => {
    browser.url('/raw/tests/terra-collapsible-menu-view/collapsible-menu-view/single-item-group');
    Terra.validates.element('default');
  });
});

Terra.describeViewports('Single Item Group Hidden Open', ['tiny', 'small'], () => {
  it('should display single item group hidden open', () => {
    browser.url('/raw/tests/terra-collapsible-menu-view/collapsible-menu-view/single-item-group');
    browser.click('[data-collapsible-menu-toggle]');
    Terra.validates.element('default', { selector: '#root' });
  });
});

Terra.describeViewports('Collapsed Menu', ['tiny', 'large'], () => {
  it('is always shown and pre populated with menu items when they passed as always collapsed menu items', () => {
    browser.url('/raw/tests/terra-collapsible-menu-view/collapsible-menu-view/pre-populated-collapsed-menu-items');
    browser.click('[data-collapsible-menu-toggle]');
    Terra.validates.element('default', { selector: '#root' });
  });
});
