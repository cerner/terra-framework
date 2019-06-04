Terra.describeViewports('Navigation Side Menu', ['medium'], () => {
  describe('Default navigation side menu display', () => {
    it('Default navigation side menu display', () => {
      browser.url('/#/raw/tests/terra-navigation-side-menu/navigation-side-menu/navigation-side-menu-default');
      browser.waitForVisible('#test-menu');
      Terra.validates.element('#test-menu', { selector: '#test-menu' });
    });
  });

  describe('Default navigation side menu display with toolbar', () => {
    it('Default navigation side menu display with toolbar', () => {
      browser.url('/#/raw/tests/terra-navigation-side-menu/navigation-side-menu/navigation-side-menu-default-with-toolbar');
      browser.waitForVisible('#test-menu');
      Terra.validates.element('#test-menu', { selector: '#test-menu' });
    });
  });

  describe('Hover navigation side menu display', () => {
    it('Hover navigation side menu display', () => {
      browser.url('/#/raw/tests/terra-navigation-side-menu/navigation-side-menu/navigation-side-menu-default');
      browser.waitForVisible('#test-menu');
      browser.moveToObject('#test-menu #test-item-1');
      Terra.validates.element('#test-menu', { selector: '#test-menu' });
    });
  });

  describe('Selected navigation side menu display', () => {
    it('Selected navigation side menu display', () => {
      browser.url('/#/raw/tests/terra-navigation-side-menu/navigation-side-menu/navigation-side-menu-default');
      browser.waitForVisible('#test-menu');
      browser.moveToObject('#test-menu #test-item-1');
      browser.click('#test-menu #test-item-1');
      browser.click('#test-menu #test-item-2');
      Terra.validates.element('#test-menu', { selector: '#test-menu' });
    });
  });

  describe('isRootMenu navigation side menu display', () => {
    it('isRootMenu navigation side menu display', () => {
      browser.url('/#/raw/tests/terra-navigation-side-menu/navigation-side-menu/navigation-side-menu-root');
      browser.waitForVisible('#test-menu');
      Terra.validates.element('#test-menu', { selector: '#test-menu' });
    });
  });
});
