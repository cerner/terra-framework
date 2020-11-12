Terra.describeViewports('Application Header Layout', ['tiny', 'medium'], () => {
  it('Displays a default application header layout', () => {
    browser.url('/raw/tests/terra-application-header-layout/application-header-layout/application-header-default');
    browser.waitForVisible('#test-header');
    Terra.validates.screenshot('default', { selector: '#test-header' });
  });

  describe('Displays the Skip to Content when focused onto', () => {
    it('should be visible', () => {
      browser.url('/raw/tests/terra-application-header-layout/application-header-layout/application-header-default');
      browser.waitForVisible('#test-header');
      browser.keys(['Tab']);
      Terra.validates.element('Visible', { selector: '#test-header' });
    });

    it('should hide the button after a tab', () => {
      browser.keys(['Tab', 'Tab']);
      Terra.validates.element('Not Visible', { selector: '#test-header' });
    });
  });

  it('Displays a application header layout with logo and utilities only', () => {
    browser.url('/raw/tests/terra-application-header-layout/application-header-layout/application-header-with-logo-and-utilities-only');
    browser.waitForVisible('#test-header');
    Terra.validates.element('with logo and utilities only', { selector: '#test-header' });
  });
});
