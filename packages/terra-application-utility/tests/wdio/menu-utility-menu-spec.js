Terra.describeViewports('MenuUtilityMenu', ['huge'], () => {
  it('Displays a default menu utility menu', () => {
    browser.url('/#/raw/tests/terra-application-utility/application-utility/default-menu-utility-menu');
    browser.waitForVisible('#default');
    Terra.validates.element({ selector: '#default' });
  });

  it('Focus-menu utility menu', () => {
    browser.keys(['Tab', 'Tab']);
    browser.moveToObject('#root', 0, 0);
    Terra.validates.element('focus', { selector: '#default' });
  });
});
