Terra.describeViewports('Menu Item', ['medium'], () => {
  it('displays a Menu Item-Default', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/menu/menu-item/menu-item-default');
    Terra.validates.element('default');
  });

  describe('Menu Item-Selectable', () => {
    describe('Menu Item-Selectable Via Click', () => {
      it('is selected', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/menu/menu-item/menu-item-selectable');
        $('.TestSelectableItem').click();
        Terra.validates.element('selected via click');
      });

      it('is deselected', () => {
        $('.TestSelectableItem').click();
        Terra.validates.element('deselected via click');
      });
    });

    describe('Menu Item-Selectable Via Enter', () => {
      it('is selected', () => {
        browser.keys('Enter');
        Terra.validates.element('selected via enter');
      });

      it('is deselected', () => {
        browser.keys('Enter');
        Terra.validates.element('deselected via enter');
      });
    });
  });

  describe('Menu Item-Icon', () => {
    it('displays Menu Items with icon', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/menu/menu-item/menu-items-with-icons');
      Terra.validates.element('default icon');
    });
  });

  describe('Menu Item-Highlighted', () => {
    it('displays Menu Items highlighted', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/menu/menu-item/menu-items-highlighted');
      Terra.validates.element('default isHighlighted');
    });
  });
});
Terra.describeViewports('Menu Item', ['huge'], () => {
  describe('Menu Item-Disabled', () => {
    it('displays a disabled Menu Item', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/menu/menu-item/menu-item-disabled');
      Terra.validates.element('disabled');
    });

    it('does not check item when clicked', () => {
      $('.TestDisabledItem').click();
      Terra.validates.element('disabled item was not checked');
    });
  });

  it('displays a Menu Item-Submenu Indicator', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/menu/menu-item/menu-item-sub-menu');
    Terra.validates.element('submenu indicator');
  });

  it('displays a Menu Item-Wrapped Text', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/menu/menu-item/menu-item-wrapped-text');
    Terra.validates.element('wrapped text');
  });

  describe('Menu Item-Triggers onClick Function', () => {
    it('starts with click number of 0', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/menu/menu-item/menu-item-on-click');
      expect($('#clickNumber')).toHaveTextContaining('0');
    });

    it('increments on Click', () => {
      $('.TestOnClickItem').click();
      expect($('#clickNumber')).toHaveTextContaining('1');
    });

    it('increments on Enter', () => {
      browser.keys('Enter');
      expect($('#clickNumber')).toHaveTextContaining('2');
    });

    it('increments on Space', () => {
      browser.keys('Space');
      expect($('#clickNumber')).toHaveTextContaining('3');
    });

    it('displays Menu Item-With eIFU Icon, eIFU Icon is considered over check mark icon ', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/menu/menu-item/menu-item-with-instructions-for-use');
      Terra.validates.element('with eIFU icon');
    });
  });
});
