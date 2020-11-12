Terra.describeViewports('HeaderUtilityMenu', ['huge'], () => {
  it('Displays a default header utility menu', () => {
    browser.url('/raw/tests/terra-application-utility/application-utility/default-header-utility-menu');
    browser.waitForVisible('#default');
    Terra.validates.element('default', { selector: '#default' });
  });

  it('Focus-header utility menu', () => {
    browser.keys(['Tab', 'Tab']);
    browser.moveToObject('#root', 0, 0);
    Terra.validates.element('focus', { selector: '#default' });
  });
});
