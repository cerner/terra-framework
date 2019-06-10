Terra.describeViewports('ApplicationMenu', ['small', 'large'], () => {
  describe('Displays a default application menu', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-menu');
      browser.waitForVisible('#test-menu');
    });

    Terra.it.matchesScreenshot('#test-menu', { selector: '#test-menu' });
    Terra.it.isAccessible();
  });

  describe('Displays an application menu utilities', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-menu');
      browser.waitForVisible('#test-menu');
      browser.click('[data-application-menu-utility]');
    });

    Terra.it.matchesScreenshot();
  });
});
