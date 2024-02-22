Terra.describeViewports('Navigation Side Menu', ['medium'], () => {
  describe('Default navigation side menu display', () => {
    it('Default navigation side menu display', () => {
      browser.url('/#/raw/tests/cerner-terra-framework-docs/navigation-side-menu/navigation-side-menu-default');
      $('#test-menu').waitForDisplayed();
      Terra.validates.element('navigation side menu display', { selector: '#test-menu' });
    });
  });

  describe('Default navigation side menu display with toolbar', () => {
    it('Default navigation side menu display with toolbar', () => {
      browser.url('/#/raw/tests/cerner-terra-framework-docs/navigation-side-menu/navigation-side-menu-default-with-toolbar');
      $('#test-menu').waitForDisplayed();
      Terra.validates.element('navigation side menu display with toolbar', { selector: '#test-menu' });
    });
  });

  describe('Hover navigation side menu display', () => {
    it('Hover navigation side menu display', () => {
      browser.url('/#/raw/tests/cerner-terra-framework-docs/navigation-side-menu/navigation-side-menu-default');
      $('#test-menu').waitForDisplayed();
      $('#test-menu #test-item-1').moveTo();
      Terra.validates.element('hover navigation side menu display', { selector: '#test-menu' });
    });
  });

  describe('Selected navigation side menu display', () => {
    it('Selected navigation side menu display', () => {
      browser.url('/#/raw/tests/cerner-terra-framework-docs/navigation-side-menu/navigation-side-menu-default');
      $('#test-menu').waitForDisplayed();
      $('#test-menu #test-item-1').moveTo();
      $('#test-menu #test-item-1').click();
      $('#test-menu #test-item-2').click();
      Terra.validates.element('selected navigation side menu display', { selector: '#test-menu' });
    });
  });

  describe('isRootMenu navigation side menu display', () => {
    it('isRootMenu navigation side menu display', () => {
      browser.url('/#/raw/tests/cerner-terra-framework-docs/navigation-side-menu/navigation-side-menu-root');
      $('#test-menu').waitForDisplayed();
      Terra.validates.element('isRootMenu navigation side menu display', { selector: '#test-menu' });
    });
  });

  describe('Keyboard Navigation Using Arrow Keys', () => {
    before(() => browser.url('/#/raw/tests/cerner-terra-framework-docs/navigation-side-menu/navigation-side-menu-default'));

    it('Navigates to first menu item', () => {
      browser.keys(['Tab', 'Tab']);
      Terra.validates.element('first menu item focused', { selector: '#root' });
    });
    it('should focus on second menu item', () => {
      browser.keys(['ArrowDown']);
      Terra.validates.element('second menu item focused', { selector: '#root' });
    });
  });
});
