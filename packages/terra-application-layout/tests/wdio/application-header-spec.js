Terra.describeViewports('ApplicationHeader', ['small', 'large'], () => {
  describe('Displays a default application header', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-header');
      browser.waitForVisible('#test-header');
    });

    Terra.it.matchesScreenshot('#test-header', { selector: '#test-header' });
    Terra.it.isAccessible();
  });

  describe('Displays an application header toggle standard', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-header-small');
      browser.moveToObject('#root', 0, 900);
      browser.waitForVisible('#test-header');
    });

    Terra.it.matchesScreenshot('#test-header', { selector: '#test-header' });
  });

  describe('Displays an application header utilities', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-header');
    });

    it('opens the utility menu', () => {
      browser.waitForVisible('#test-header');
      browser.click('[data-application-header-utility]');
    });
    Terra.it.matchesScreenshot('#test-header', { selector: '#test-header' });
    Terra.it.matchesScreenshot({ selector: '#site' });
  });

  describe('Displays an application header with icons', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-header-with-icons');
      browser.waitForVisible('#test-header');
      browser.moveToObject('#root', 0, 0);
    });

    Terra.it.matchesScreenshot('#test-header', { selector: '#test-header' });
  });
});
