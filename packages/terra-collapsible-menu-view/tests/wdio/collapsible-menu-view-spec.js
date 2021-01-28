/* global $ */
const ignoredA11y = {
  'aria-required-parent': { enabled: false },
};

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
    $('[data-collapsible-menu-toggle]').click();
    Terra.validates.element('default', { selector: '#root', rules: ignoredA11y });
  });
});

Terra.describeViewports('Collapsible Menu With Item Before Divider', ['tiny', 'small', 'medium', 'large'], () => {
  it('should display with item before divider', () => {
    browser.url('/raw/tests/terra-collapsible-menu-view/collapsible-menu-view/default-collapsible-menu-view');
    $('[data-collapsible-menu-toggle]').click();
    Terra.validates.element('default', { selector: '[data-terra-popup-content]', rules: ignoredA11y });
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
    $('#root').moveTo({ xOffset: 0, yOffset: 0 });
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
    $('[data-collapsible-menu-toggle]').click();
    Terra.validates.element('default', { selector: '#root' });
  });
});
