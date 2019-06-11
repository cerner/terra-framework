Terra.describeViewports('ApplicationMenu', ['small', 'large'], () => {
  before(() => {
    browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-menu');
    browser.waitForVisible('#test-menu');
  });

  describe('Displays a default application menu', () => {
    Terra.it.matchesScreenshot('#test-menu', { selector: '#test-menu' });
    Terra.it.isAccessible();
  });

  describe('Displays an application menu utilities', () => {
    it('clicks the menu utility', () => {
      browser.click('[data-application-menu-utility]');
    });

    Terra.it.matchesScreenshot();

    it('closes the menu and remove focus for next test', () => {
      browser.keys('Escape');
      browser.click('#root');
    });
  });
});
