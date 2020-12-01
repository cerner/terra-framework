Terra.describeViewports('Menu', ['medium'], () => {
  it('displays a default Menu', () => {
    browser.url('/raw/tests/terra-menu/menu/menu/default-menu');
    browser.click('#default-button');
    browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
    Terra.validates.element('default', { selector: '#root' });
  });

  describe('Menu-Bounded', () => {
    it('displays a bounded menu', () => {
      browser.url('/raw/tests/terra-menu/menu/menu/bounded-menu');
      browser.click('#bounded-button');
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
      Terra.validates.element('bounded');
    });

    it('opens submenu', () => {
      browser.click('.TestNestedMenu');
      browser.hasFocus('[role="button"][aria-label="Back"]');
      Terra.validates.element('submenu', { selector: '#root' });
    });
  });

  it('displays a Menu with Small Height', () => {
    browser.url('/raw/tests/terra-menu/menu/menu/small-menu');
    browser.click('#small-menu-button');
    Terra.validates.element('small height', { selector: '#root' });
  });

  it('displays a Menu with Medium Height', () => {
    browser.url('/raw/tests/terra-menu/menu/menu/medium-menu');
    browser.click('#medium-menu-button');
    Terra.validates.element('medium height', { selector: '#root' });
  });

  it('displays a Menu with Large Height', () => {
    browser.url('/raw/tests/terra-menu/menu/menu/large-menu');
    browser.click('#large-menu-button');
    Terra.validates.element('large height', { selector: '#root' });
  });

  it('displays a non-selectable menu', () => {
    browser.url('/raw/tests/terra-menu/menu/menu/non-selectable-menu');
    browser.click('#non-selectable-menu-button');
    Terra.validates.element('non selectable', { selector: '#root' });
  });

  it('displays a Menu-Selectable', () => {
    browser.url('/raw/tests/terra-menu/menu/menu/selectable-menu');
    browser.click('#selectable-menu-button');
    browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
    browser.click('.TestGroupItem3');
    browser.hasFocus('li:last-child[aria-checked="true"][role="menuitemradio"]');

    Terra.validates.element('selectable', { selector: '#root' });
  });

  describe('Menu-Selectable with Varying Items', () => {
    it('displays a selectable menu with varying items', () => {
      browser.url('/raw/tests/terra-menu/menu/menu/selectable-and-unselectable-items-menu');
      browser.click('#default-button');
      Terra.validates.element('with varying items', { selector: '#root' });
    });

    it('selects an item and maintains selection after menu has been reopened', () => {
      browser.click('.TestSelectableItem');
      browser.hasFocus('#default-button');
      browser.click('#default-button');
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
      Terra.validates.element('maintained selection after reopen', { selector: '#root' });
    });
  });

  it('displays a Menu with a submenu', () => {
    browser.url('/raw/tests/terra-menu/menu/menu/sub-menu');
    browser.click('#sub-menu-button');
    browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
    Terra.validates.element('main menu', { selector: '#root' });

    browser.click('.TestNestedMenu');
    browser.hasFocus('[role="button"][aria-label="Back"]');
    Terra.validates.element('submenu', { selector: '#root' });
    browser.keys('Escape');
  });

  describe('Menu and submenu with long header title', () => {
    it('displays Menu with submenu and long header title', () => {
      browser.url('/raw/tests/terra-menu/menu/menu/sub-menu-long-title');
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
    it('navigates Menu using  Keyboard Navigation-Arrow Keys', () => {
      browser.url('/raw/tests/terra-menu/menu/menu/sub-menu');
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
      browser.url('/raw/tests/terra-menu/menu/menu/sub-menu');
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
