Terra.describeViewports('ApplicationHeader', ['small', 'large'], () => {
  it('Displays a default application header', () => {
    browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-header');
    browser.waitForVisible('#test-header');
    Terra.validates.element({ selector: '#test-header' });
  });

  it('Displays an application header toggle standard', () => {
    browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-header-small');
    browser.moveToObject('#root', 0, 900);
    browser.waitForVisible('#test-header');
    Terra.validates.element('toggle standard', { selector: '#test-header' });
  });

  describe('Displays an application header utilities', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-header');
    });

    it('opens the utility menu', () => {
      browser.waitForVisible('#test-header');
      browser.click('[data-application-header-utility]');
      Terra.validates.element('#test-header', { selector: '#test-header' });
      Terra.validates.element({ selector: '#site' });
    });
  });

  it('Displays an application header with icons', () => {
    browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-header-with-icons');
    browser.waitForVisible('#test-header');
    browser.moveToObject('#root', 0, 0);
    Terra.validates.element('with icons', { selector: '#test-header' });
  });
});
