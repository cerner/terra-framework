Terra.describeViewports('ApplicationMenu', ['small', 'large'], () => {
  it('Displays a default application menu', () => {
    browser.url('/raw/tests/terra-application-layout/application-layout/application-layout-menu');
    $('#test-menu').waitForDisplayed();
    Terra.validates.element('application menu', { selector: '#test-menu' });
  });

  describe('Displays an application menu utilities', () => {
    it('clicks the menu utility', () => {
      $('[data-application-menu-utility]').click();
      Terra.validates.element('application menu utilities');
    });

    it('closes the menu and remove focus for next test', () => {
      browser.keys('Escape');
      $('#root').click();
    });
  });
});
