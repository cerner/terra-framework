Terra.describeViewports('ApplicationHeaderUtility', ['tiny', 'medium'], () => {
  it('Displays a default application header utility', () => {
    browser.url('/raw/tests/terra-application-utility/application-utility/default-application-header-utility');
    browser.waitForVisible('#default');
    Terra.validates.element({ selector: '#default' });
  });

  it('Focus-application header utility', () => {
    browser.keys('Tab');
    Terra.validates.element('focus', { selector: '#default' });
  });
});
