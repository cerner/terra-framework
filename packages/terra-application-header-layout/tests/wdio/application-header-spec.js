Terra.describeViewports('Application Header Layout', ['tiny', 'medium'], () => {
  it('Displays a default application header layout', () => {
    browser.url('/raw/tests/terra-application-header-layout/application-header-layout/application-header-default');
    $('#test-header').waitForDisplayed();
    Terra.validates.element('default', { selector: '#test-header' });
  });

  describe('Displays the Skip to Content when focused onto', () => {
    it('should be visible', () => {
      browser.url('/raw/tests/terra-application-header-layout/application-header-layout/application-header-default');
      $('#test-header').waitForDisplayed();
      browser.keys(['Tab']);
      Terra.validates.element('skipTo visible', { selector: '#test-header' });
    });

    it('should hide the Skip to Content when focused away', () => {
      browser.keys(['Tab']);
      Terra.validates.element('skipTo not visible', { selector: '#test-header' });
    });
  });

  it('Displays a application header layout with logo and utilities only', () => {
    browser.url('/raw/tests/terra-application-header-layout/application-header-layout/application-header-with-logo-and-utilities-only');
    $('#test-header').waitForDisplayed();
    Terra.validates.element('with logo and utilities only', { selector: '#test-header' });
  });
});
