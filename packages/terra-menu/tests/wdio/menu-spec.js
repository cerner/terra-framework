const ignoredA11y = {
  // Issue logged here: https://github.com/cerner/terra-core/issues/1585
  'button-name': { enabled: false },
};

Terra.describeViewports('Menu', ['medium'], () => {
  describe('Menu-Default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/default-menu');
      browser.click('#default-button');
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
    });

    Terra.it.matchesScreenshot({ selector: '#root' });
    Terra.it.isAccessible();
  });

  describe('Menu-Bounded', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/bounded-menu');
      browser.click('#bounded-button');
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
    });

    Terra.it.matchesScreenshot();
    Terra.it.isAccessible({ rules: ignoredA11y });

    it('opens submenu', () => {
      browser.click('.TestNestedMenu');
      browser.hasFocus('[role="button"][aria-label="Back"]');
    });
    Terra.it.matchesScreenshot('submenu', { selector: '#root' });
    Terra.it.isAccessible({ rules: ignoredA11y });
  });

  describe('Menu-Small Height', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/small-menu');
      browser.click('#small-menu-button');
    });

    Terra.it.matchesScreenshot({ selector: '#root' });
    Terra.it.isAccessible();
  });

  describe('Menu-Medium Height', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/medium-menu');
      browser.click('#medium-menu-button');
    });

    Terra.it.matchesScreenshot({ selector: '#root' });
    Terra.it.isAccessible();
  });

  describe('Menu-Large Height', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/large-menu');
      browser.click('#large-menu-button');
    });

    Terra.it.matchesScreenshot({ selector: '#root' });
    Terra.it.isAccessible();
  });

  describe('Menu-Non-Selectable', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/non-selectable-menu');
      browser.click('#non-selectable-menu-button');
    });

    Terra.it.matchesScreenshot({ selector: '#root' });
    Terra.it.isAccessible();
  });

  describe('Menu-Selectable', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/selectable-menu');
      browser.click('#selectable-menu-button');
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
      browser.click('.TestGroupItem3');
      browser.hasFocus('li:last-child[aria-checked="true"][role="menuitemradio"]');
    });

    Terra.it.matchesScreenshot({ selector: '#root' });
    Terra.it.isAccessible();
  });

  describe('Menu-Selectable with Varying Items', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/selectable-and-unselectable-items-menu');
      browser.click('#default-button');
    });

    Terra.it.matchesScreenshot({ selector: '#root' });
    Terra.it.isAccessible();

    it('selects an item and maintains selection after menu has been reopened', () => {
      browser.click('.TestSelectableItem');
      browser.hasFocus('#default-button');
      browser.click('#default-button');
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
    });
    Terra.it.matchesScreenshot('maintained selection after reopen', { selector: '#root' });
  });

  describe('Menu with a submenu', () => {
    it('Menu with a submenu', () => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/sub-menu');
      browser.click('#sub-menu-button');
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
      Terra.validates.element('main menu', { selector: '#root' });

      browser.click('.TestNestedMenu');
      browser.hasFocus('[role="button"][aria-label="Back"]');
      Terra.validates.element('submenu', { selector: '#root' });
      browser.keys('Escape');
    });
  });

  describe('Menu and submenu with long header title', () => {
    it('Menu with submenu and long header title', () => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/sub-menu-long-title');
      browser.click('#sub-menu-button');
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
      Terra.validates.element('main menu long header', { selector: '#root' });

      browser.click('.TestNestedMenu');
      browser.hasFocus('[role="button"][aria-label="Back"]');
      Terra.validates.element('submenu long header', { selector: '#root' });
      browser.keys('Escape');
    });
  });

  describe('Menu Keyboard Navigation-Arrow Keys', () => {
    it('Menu Keyboard Navigation-Arrow Keys', () => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/sub-menu');
      browser.click('#sub-menu-button');
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');

      // it does not do anything when left arrow is pressed on the first layer
      browser.keys(['Tab', 'ArrowLeft']);
      browser.hasFocus('li:first-child[class*="item"][role="menuitem"]');

      Terra.validates.element('main menu remains open', { selector: '#root' });

      // it displays the submenu on right arrow
      browser.keys(['ArrowDown', 'ArrowRight']);
      browser.hasFocus('[role="button"][aria-label="Back"]');

      Terra.validates.element('navigated to submenu', { selector: '#root' });

      // it returns to the main menu on left arrow
      browser.keys(['ArrowLeft']);
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');

      Terra.validates.element('returned to main menu', { selector: '#root' });
      browser.keys('Escape');
    });
  });

  describe('Menu Keyboard Navigation-Enter Key', () => {
    it('Menu Keyboard Navigation-Enter Key', () => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/sub-menu');
      browser.click('#sub-menu-button');
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');

      // it displays the submenu on enter
      browser.keys(['Tab', 'ArrowDown', 'Enter']);
      browser.hasFocus('[role="button"][aria-label="Back"]');

      Terra.validates.element('navigated to submenu', { selector: '#root' });

      // it returns to the main menu on enter
      browser.keys(['Enter']);
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');

      Terra.validates.element('returned to main menu', { selector: '#root' });
    });
  });
});
