Terra.describeViewports('ApplicationMenuName', ['tiny', 'medium'], () => {
  it('Displays a default application menu name', () => {
    browser.url('/raw/tests/terra-application-name/application-name/application-menu-name-default');
    browser.pause(3000); // to display image
    Terra.validates.element('application menu name', { selector: '#default' });
  });

  it('Displays a wrapping application menu name', () => {
    browser.url('/raw/tests/terra-application-name/application-name/application-menu-name-wrapping');
    Terra.validates.element('wrapping application menu name', { selector: '#wrapping' });
  });
});
