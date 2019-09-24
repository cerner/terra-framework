const ignoredA11y = {
  'aria-required-parent': { enabled: false },
};

Terra.describeViewports('Menu Item', ['medium'], () => {
  describe('Menu Item-Default', () => {
    before(() => browser.url('/#/raw/tests/terra-menu/menu/menu-item/menu-item-default'));

    Terra.it.matchesScreenshot();
    Terra.it.isAccessible({ rules: ignoredA11y });
  });

  describe('Menu Item-Selectable', () => {
    before(() => browser.url('/#/raw/tests/terra-menu/menu/menu-item/menu-item-selectable'));

    describe('Menu Item-Selectable Via Click', () => {
      it('is selected', () => {
        browser.click('.TestSelectableItem');
      });

      Terra.it.matchesScreenshot('selected');
      Terra.it.isAccessible({ rules: ignoredA11y });

      it('is deselected', () => {
        browser.click('.TestSelectableItem');
      });

      Terra.it.matchesScreenshot('deselected');
      Terra.it.isAccessible({ rules: ignoredA11y });
    });

    describe('Menu Item-Selectable Via Enter', () => {
      it('is selected', () => {
        browser.keys('Enter');
      });

      Terra.it.matchesScreenshot('selected');
      Terra.it.isAccessible({ rules: ignoredA11y });

      it('is deselected', () => {
        browser.keys('Enter');
      });

      Terra.it.matchesScreenshot('deselected');
      Terra.it.isAccessible({ rules: ignoredA11y });
    });
  });
});

describe('Menu Item-Disabled', () => {
  before(() => browser.url('/#/raw/tests/terra-menu/menu/menu-item/menu-item-disabled'));

  Terra.it.matchesScreenshot();
  Terra.it.isAccessible({ rules: ignoredA11y });

  it('does not check item when clicked', () => {
    browser.click('.TestDisabledItem');
  });
  Terra.it.matchesScreenshot('disabled item was not checked');
});

describe('Menu Item-Submenu Indicator', () => {
  before(() => browser.url('/#/raw/tests/terra-menu/menu/menu-item/menu-item-sub-menu'));

  Terra.it.matchesScreenshot();
  Terra.it.isAccessible({ rules: ignoredA11y });
});

describe('Menu Item-Wrapped Text', () => {
  before(() => browser.url('/#/raw/tests/terra-menu/menu/menu-item/menu-item-wrapped-text'));

  Terra.it.matchesScreenshot();
  Terra.it.isAccessible({ rules: ignoredA11y });
});

describe('Menu Item-Triggers onClick Function', () => {
  before(() => browser.url('/#/raw/tests/terra-menu/menu/menu-item/menu-item-on-click'));

  it('starts with click number of 0', () => {
    expect(browser.getText('#clickNumber')).to.contain('0');
  });

  it('increments on Click', () => {
    browser.click('.TestOnClickItem');
    expect(browser.getText('#clickNumber')).to.contain('1');
  });

  it('increments on Enter', () => {
    browser.keys('Enter');
    expect(browser.getText('#clickNumber')).to.contain('2');
  });

  it('increments on Space', () => {
    browser.keys('Space');
    expect(browser.getText('#clickNumber')).to.contain('3');
  });

  describe('Menu Item-With eIFU Icon, eIFU Icon is considered over check mark icon ', () => {
    before(() => browser.url('/#/raw/tests/terra-menu/menu/menu-item/menu-item-with-instructions-for-use'));

    Terra.it.matchesScreenshot();
    Terra.it.isAccessible({ rules: ignoredA11y });
  });
});
