Terra.describeViewports('ApplicationMenu', ['small', 'large'], () => {
  it('Displays a default application menu', () => {
    browser.url('/raw/tests/terra-application-layout/application-layout/application-layout-menu');
    browser.waitForVisible('#test-menu');
    Terra.validates.element({ selector: '#test-menu' });
  });

  describe('Displays an application menu utilities', () => {
    it('clicks the menu utility', () => {
      browser.click('[data-application-menu-utility]');
      Terra.validates.element();
    });

    it('closes the menu and remove focus for next test', () => {
      browser.keys('Escape');
      browser.click('#root');
    });
  });
});
