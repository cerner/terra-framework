Terra.describeViewports('ApplicationMenuUtility', ['tiny', 'medium'], () => {
  it('Displays a default application menu utility', () => {
    browser.url('/raw/tests/terra-application-utility/application-utility/default-application-menu-utility');
    $('#default').waitForDisplayed();
    Terra.validates.element('default', { selector: '#default' });
  });

  it('Focus-application menu utility', () => {
    browser.keys('Tab');
    Terra.validates.element('focus', { selector: '#default' });
  });
});
