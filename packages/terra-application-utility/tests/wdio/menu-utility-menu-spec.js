Terra.describeViewports('MenuUtilityMenu', ['huge'], () => {
  it('Displays a default menu utility menu', () => {
    browser.url('/raw/tests/terra-application-utility/application-utility/default-menu-utility-menu');
    $('#default').waitForDisplayed();
    Terra.validates.element('default', { selector: '#default' });
  });

  it('Focus-menu utility menu', () => {
    browser.keys(['Tab', 'Tab']);
    $('#root').moveTo({ xOffset: 0, yOffset: 0 });
    Terra.validates.element('focus', { selector: '#default' });
  });
});
