Terra.describeViewports('ApplicationHeaderUtility', ['tiny', 'medium'], () => {
  before(() => {
    browser.url('/#/raw/tests/terra-application-utility/application-utility/default-application-header-utility');
    browser.waitForVisible('#default');
  });

  describe('Displays a default application header utility', () => {
    Terra.it.validatesElement({ selector: '#default' });
  });

  describe('Hover-application header utility', () => {
    before(() => { browser.moveToObject('#default'); });
    Terra.it.validatesElement({ selector: '#default' });
  });

  describe('Focus-application header utility', () => {
    before(() => { browser.keys('Tab'); });
    Terra.it.validatesElement({ selector: '#default' });
  });
});
