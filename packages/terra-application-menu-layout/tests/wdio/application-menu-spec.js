Terra.describeViewports('Application Menu', ['tiny', 'medium'], () => {
  it('Displays a default application menu', () => {
    browser.url('/raw/tests/terra-application-menu-layout/application-menu-layout/application-menu-default');
    browser.waitForVisible('#test-menu');
    Terra.validates.element({ selector: '#test-menu' });
  });
});
