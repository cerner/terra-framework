Terra.describeViewports('ApplicationHeaderName', ['tiny', 'medium'], () => {
  it('Displays a default application header name', () => {
    browser.url('/raw/tests/terra-application-name/application-name/application-header-name-default');
    browser.waitForVisible('[class*="demo-image-container"]');
    Terra.validates.element({ selector: '#default' });
  });

  it('Displays a truncated application header name', () => {
    browser.url('/raw/tests/terra-application-name/application-name/application-header-name-truncated');
    Terra.validates.element('truncated', { selector: '#truncated' });
  });
});
