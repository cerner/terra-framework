Terra.describeViewports('HeaderUtilityMenu', ['huge'], () => {
  before(() => {
    browser.url('/#/raw/tests/terra-application-utility/application-utility/default-header-utility-menu');
    browser.waitForVisible('#default');
  });

  describe('Displays a default header utility menu', () => {
    Terra.it.validatesElement({ selector: '#default' });
  });

  describe('Hover-header utility menu', () => {
    before(() => {
      browser.waitForVisible('#test-item-2');
      browser.moveToObject('#test-item-2');
    });

    Terra.it.validatesElement({ selector: '#default' });
  });

  describe('Focus-header utility menu', () => {
    before(() => {
      browser.keys(['Tab', 'Tab']);
      browser.moveToObject('#root', 0, 0);
    });

    Terra.it.validatesElement({ selector: '#default' });
  });
});
