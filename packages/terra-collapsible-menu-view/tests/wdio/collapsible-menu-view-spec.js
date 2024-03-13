const ignoredA11y = {
  'aria-required-parent': { enabled: false },
  'aria-required-children': { enabled: false },
};

Terra.describeViewports('Responsive', ['tiny', 'small', 'medium', 'huge', 'large', 'enormous'], () => {
  it('should display responsive default', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/collapsible-menu-view/default-collapsible-menu-view');
    Terra.validates.element('responsive', {selector: '#collapsible-menu-view-test'});
  });
});

// Only test viewports that have collapsed menu items
Terra.describeViewports('Responsive Hidden Open', ['tiny', 'small', 'medium', 'large'], () => {
  it('should display responsive hidden open', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/collapsible-menu-view/default-collapsible-menu-view');
    $('[data-collapsible-menu-toggle]').click();
    Terra.validates.element('responsive hidden open', { selector: '#root', rules: ignoredA11y });
  });
});

Terra.describeViewports('Collapsible Menu With Item Before Divider', ['tiny', 'small', 'medium', 'large'], () => {
  it('should display with item before divider', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/collapsible-menu-view/default-collapsible-menu-view');
    $('[data-collapsible-menu-toggle]').click();
    Terra.validates.element('collapsible menu', { selector: '[data-terra-popup-content]', rules: ignoredA11y });
  });
});

Terra.describeViewports('Collapsible Menu With Unselectable Toggle', ['tiny', 'small', 'medium', 'large'], () => {
  it('should display an unselectable toggle', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/collapsible-menu-view/collapsible-menu-view-unselectable-toggle');
    $('[data-collapsible-menu-toggle]').click();
    Terra.validates.element('collapsible menu with unselectable toggle', { selector: '[data-terra-popup-content]', rules: ignoredA11y });
  });
});

Terra.describeViewports('First hidden item visible when isIconOnly', ['medium'], () => {
  it('should display First hidden item visible when isIconOnly', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/collapsible-menu-view/first-hidden-item-is-icon');
    Terra.validates.element('first hidden item visible');
  });
});

Terra.describeViewports('Responsive Single Item', ['tiny', 'large'], () => {
  it('should display responsive single item', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/collapsible-menu-view/collapsible-menu-view-single-item');
    $('#root').moveTo({ xOffset: 0, yOffset: 0 });
    Terra.validates.element('responsive single item', { selector: '#root', rules: ignoredA11y });
  });
});

Terra.describeViewports('Single Item Group', ['enormous', 'large', 'huge', 'medium'], () => {
  it('should display single item group', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/collapsible-menu-view/single-item-group');
    Terra.validates.element('single item group');
  });
});

Terra.describeViewports('Single Item Group Hidden Open', ['tiny', 'small'], () => {
  it('should display single item group hidden open', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/collapsible-menu-view/single-item-group');
    $('[data-collapsible-menu-toggle]').click();
    Terra.validates.element('single item group hidden open', { selector: '#root', rules: ignoredA11y });
  });
});

Terra.describeViewports('Collapsed Menu', ['tiny', 'large'], () => {
  it('is always shown and pre populated with menu items when they passed as always collapsed menu items', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/collapsible-menu-view/pre-populated-collapsed-menu-items');
    $('[data-collapsible-menu-toggle]').click();
    Terra.validates.element('collapsed menu', { selector: '#root', rules: ignoredA11y });
  });
  it('selects and unselects Button 1', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/collapsible-menu-view/pre-populated-collapsed-menu-items');
    $('#data-menu-button').click();
    Terra.validates.element('button1 selected', { selector: '#root', rules: ignoredA11y });
    $('#data-menu-button').click();
    Terra.validates.element('button1 unselected', { selector: '#root', rules: ignoredA11y });
  });
});

Terra.describeViewports('Collapsible Menu with multiselect group items', ['large'], () => {
  it('face up items are created with role checkbox', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/collapsible-menu-view/collapsible-menu-multi-select');
    expect($('#tableView')).toHaveAttribute('role', 'checkbox');
  });
});

Terra.describeViewports('Collapsible Menu with multiselect group items', ['small'], () => {
  it('collapsed menu items are created with role menu', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/collapsible-menu-view/collapsible-menu-multi-select');
    expect($('#tableView')).toHaveAttribute('role', 'menuitemcheckbox');
  });
});

Terra.describeViewports('Start Aligned', ['tiny', 'small', 'medium', 'huge', 'large', 'enormous'], () => {
  it('should display start aligned', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/collapsible-menu-view/collapsible-menu-view-start-alignment');
    Terra.validates.element('start aligned', { rules: ignoredA11y });
  });
});

Terra.describeViewports('Unselectable Toggle', ['tiny', 'small', 'medium', 'huge', 'large', 'enormous'], () => {
  it('should display an unselectable toggle', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/collapsible-menu-view/unselectable-toggle');
    Terra.validates.element('unselectable toggle', { rules: ignoredA11y });
  });
});

Terra.describeViewports('Reversed and start aligned', ['tiny', 'small'], () => {
  it('should display hyperlinks and chevron right icons', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/collapsible-menu-view/reverse-start-aligned');
    Terra.validates.element('reverse start aligned');
    $('[data-collapsible-menu-toggle]').click();
    Terra.validates.element('reverse start aligned menu open', { selector: '#root', rules: ignoredA11y });
  });
});

// Only test viewports that have collapsed menu items
Terra.describeViewports('Start Aligned Hidden Open', ['tiny', 'small', 'medium', 'large'], () => {
  it('should display start aligned with menu open', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/collapsible-menu-view/collapsible-menu-view-start-alignment');
    $('[data-collapsible-menu-toggle]').click();
    Terra.validates.element('start aligned with menu open', { selector: '#root', rules: ignoredA11y });
  });
});
