/* global $ */
const ignoredA11y = {
  'aria-required-parent': { enabled: false },
};

Terra.describeViewports('Menu Item Group', ['medium'], () => {
  before(() => {
    browser.url('/raw/tests/terra-menu/menu/menu-item-group/menu-item-group-default');
  });

  it('displays a Menu Item Group-Default', () => {
    Terra.validates.element('default', { rules: ignoredA11y });
  });

  describe('Menu Item Group-Selectable Via Click', () => {
    it('selects Item 3', () => {
      $('.TestGroupItem3').click();
      Terra.validates.element('item 3 selected via click', { rules: ignoredA11y });
    });

    it('selects Item 1 and deselects Item 3', () => {
      $('.TestGroupItem1').click();
      $('h3').moveTo();
      Terra.validates.element('item 1 selected via click', { rules: ignoredA11y });
    });
  });

  describe('Menu Item Group-Selectable Via Keyboard Navigation', () => {
    it('selects Item 2 on Enter', () => {
      browser.keys(['Tab', 'Enter']);
      Terra.validates.element('item 2 selected via keyboard navigation', { rules: ignoredA11y });
    });

    it('selects Item 3 on Space', () => {
      browser.keys(['Tab', 'Space']);
      Terra.validates.element('item 3 selected via keyboard navigation', { rules: ignoredA11y });
    });
  });
});
