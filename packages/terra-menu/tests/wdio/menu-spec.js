/*
const ignoredA11y = {
  'aria-required-parent': { enabled: false }, 'aria-required-children': { enabled: false },
};

Terra.describeViewports('Menu', ['medium'], () => {
  it('displays a default Menu', () => {
    browser.url('/raw/tests/terra-menu/menu/menu/default-menu');
    $('#default-button').click();
    $('[class*="content"][aria-modal="true"][role="dialog"]').isFocused();
    Terra.validates.element('default', { selector: '#root' });
  });

  describe('Menu-Bounded', () => {
    it('displays a bounded menu', () => {
      browser.url('/raw/tests/terra-menu/menu/menu/bounded-menu');
      $('#bounded-button').click();
      $('[class*="content"][aria-modal="true"][role="dialog"]').isFocused();
      Terra.validates.element('bounded', { rules: ignoredA11y });
    });

    it('opens submenu', () => {
      $('.TestNestedMenu').click();
      $('[role="button"][aria-label="Back"]').isFocused();
      Terra.validates.element('submenu', { selector: '#root' });
    });
  });

  it('displays a Menu with Small Height', () => {
    browser.url('/raw/tests/terra-menu/menu/menu/small-menu');
    $('#small-menu-button').click();
    Terra.validates.element('small height', { selector: '#root' });
  });

  it('displays a Menu with Medium Height', () => {
    browser.url('/raw/tests/terra-menu/menu/menu/medium-menu');
    $('#medium-menu-button').click();
    Terra.validates.element('medium height', { selector: '#root', rules: ignoredA11y });
  });

  it('displays a Menu with Large Height', () => {
    browser.url('/raw/tests/terra-menu/menu/menu/large-menu');
    $('#large-menu-button').click();
    Terra.validates.element('large height', { selector: '#root', rules: ignoredA11y });
  });

  it('displays a non-selectable menu', () => {
    browser.url('/raw/tests/terra-menu/menu/menu/non-selectable-menu');
    $('#non-selectable-menu-button').click();
    Terra.validates.element('non selectable', { selector: '#root' });
  });

  it('displays a Menu-Selectable', () => {
    browser.url('/raw/tests/terra-menu/menu/menu/selectable-menu');
    $('#selectable-menu-button').click();
    $('[class*="content"][aria-modal="true"][role="dialog"]').isFocused();
    $('.TestGroupItem3').click();
    $('li:last-child[aria-checked="true"][role="menuitemradio"]').isFocused();

    Terra.validates.element('selectable', { selector: '#root', rules: ignoredA11y });
  });

  describe('Menu-Selectable with Varying Items', () => {
    it('displays a selectable menu with varying items', () => {
      browser.url('/raw/tests/terra-menu/menu/menu/selectable-and-unselectable-items-menu');
      $('#default-button').click();
      Terra.validates.element('with varying items', { selector: '#root' });
    });

    it('selects an item and maintains selection after menu has been reopened', () => {
      $('.TestSelectableItem').click();
      $('#default-button').isFocused();
      $('#default-button').click();
      $('[class*="content"][aria-modal="true"][role="dialog"]').isFocused();
      Terra.validates.element('maintained selection after reopen', { selector: '#root' });
    });
  });

  it('displays a Menu with a submenu', () => {
    browser.url('/raw/tests/terra-menu/menu/menu/sub-menu');
    $('#sub-menu-button').click();
    $('[class*="content"][aria-modal="true"][role="dialog"]').isFocused();
    Terra.validates.element('main menu', { selector: '#root' });

    $('.TestNestedMenu').click();
    $('[role="button"][aria-label="Back"]').isFocused();
    Terra.validates.element('submenu', { selector: '#root' });
    browser.keys('Escape');
  });

  describe('Menu and submenu with long header title', () => {
    it('displays Menu with submenu and long header title', () => {
      browser.url('/raw/tests/terra-menu/menu/menu/sub-menu-long-title');
      $('#sub-menu-button').click();
      $('[class*="content"][aria-modal="true"][role="dialog"]').isFocused();
      Terra.validates.element('main menu long header', { selector: '#root' });

      $('.TestNestedMenu').click();
      $('[role="button"][aria-label="Back"]').isFocused();
      Terra.validates.element('submenu long header', { selector: '#root' });
      browser.keys('Escape');
    });
  });

  describe('Menu Keyboard Navigation-Arrow Keys', () => {
    it('navigates Menu using  Keyboard Navigation-Arrow Keys', () => {
      browser.url('/raw/tests/terra-menu/menu/menu/sub-menu');
      $('#sub-menu-button').click();
      $('[class*="content"][aria-modal="true"][role="dialog"]').isFocused();

      // it does not do anything when left arrow is pressed on the first layer
      browser.keys(['Tab', 'ArrowLeft']);
      $('li:first-child[class*="item"][role="menuitem"]').isFocused();

      Terra.validates.element('main menu remains open', { selector: '#root' });

      // it displays the submenu on right arrow
      browser.keys(['ArrowDown', 'ArrowRight']);
      $('[role="button"][aria-label="Back"]').isFocused();

      Terra.validates.element('navigated to submenu', { selector: '#root' });

      // it returns to the main menu on left arrow
      browser.keys(['ArrowLeft']);
      $('[class*="content"][aria-modal="true"][role="dialog"]').isFocused();

      Terra.validates.element('returned to main menu', { selector: '#root' });
      browser.keys('Escape');
    });
  });

  describe('Menu Keyboard Navigation-Enter Key', () => {
    it('Menu Keyboard Navigation-Enter Key', () => {
      browser.url('/raw/tests/terra-menu/menu/menu/sub-menu');
      $('#sub-menu-button').click();
      $('[class*="content"][aria-modal="true"][role="dialog"]').isFocused();

      // it displays the submenu on enter
      browser.keys(['Tab', 'ArrowDown', 'Enter']);
      $('[role="button"][aria-label="Back"]').isFocused();

      Terra.validates.element('navigated to submenu', { selector: '#root' });

      // it returns to the main menu on enter
      browser.keys(['Enter']);
      $('[class*="content"][aria-modal="true"][role="dialog"]').isFocused();

      Terra.validates.element('returned to main menu', { selector: '#root' });
    });
  });
}); */
