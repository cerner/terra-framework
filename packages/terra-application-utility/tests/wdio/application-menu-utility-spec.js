Terra.describeViewports('ApplicationMenuUtility', ['tiny', 'medium'], () => {
  before(() => {
    browser.url('/#/raw/tests/terra-application-utility/application-utility/default-application-menu-utility');
    browser.waitForVisible('#default');
  });

  describe('Displays a default application menu utility', () => {
    Terra.it.validatesElement({ selector: '#default' });
  });

  describe('Focus-application menu utility', () => {
    before(() => { browser.keys('Tab'); });
    Terra.it.validatesElement({ selector: '#default' });
  });
});
