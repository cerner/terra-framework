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
      browser.click('.TestGroupItem3');
      Terra.validates.element('Item 3 Selected', { rules: ignoredA11y });
    });

    it('selects Item 1 and deselects Item 3', () => {
      browser.click('.TestGroupItem1');
      browser.moveToObject('h3');
      Terra.validates.screenshot('Item 1 Selected');
    });
  });

  describe('Menu Item Group-Selectable Via Keyboard Navigation', () => {
    it('selects Item 2 on Enter', () => {
      browser.keys(['Tab', 'Enter']);
      Terra.validates.screenshot('Item 2 Selected');
    });

    it('selects Item 3 on Space', () => {
      browser.keys(['Tab', 'Space']);
      Terra.validates.screenshot('Item 3 Selected');
    });
  });
});
