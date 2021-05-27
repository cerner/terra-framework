Terra.describeViewports('HeaderUtilityMenu', ['huge'], () => {
  it('Displays a default header utility menu', () => {
    browser.url('/raw/tests/terra-application-utility/application-utility/default-header-utility-menu');
    $('#default').waitForDisplayed();
    Terra.validates.element('default', { selector: '#default' });
  });

  it('should Focus-header utility menu', () => {
    browser.keys(['Tab', 'Tab']);
    $('#root').moveTo({ xOffset: 0, yOffset: 0 });
    Terra.validates.element('focus', { selector: '#default' });
  });
});
