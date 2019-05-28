describe('HeaderUtilityMenu', () => {
  beforeEach(() => {
    browser.url('/#/raw/tests/terra-application-utility/application-utility/default-header-utility-menu');
    browser.waitForVisible('#default');
  });

  describe('Displays a default header utility menu', () => {
    Terra.it.validatesElement({ selector: '#default' });
  });

  describe('Hover-header utility menu', () => {
    beforeEach(() => {
      browser.waitForVisible('#test-item-2');
      browser.moveToObject('#test-item-2');
    });

    Terra.it.validatesElement({ selector: '#default' });
  });

  describe('Focus-header utility menu', () => {
    beforeEach(() => {
      browser.keys(['Tab', 'Tab', 'Tab']);
    });

    Terra.it.validatesElement({ selector: '#default' });
  });
});
