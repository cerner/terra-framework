/* global $ */
Terra.describeViewports('Application Menu', ['tiny', 'medium'], () => {
  it('Displays a default application menu', () => {
    browser.url('/raw/tests/terra-application-menu-layout/application-menu-layout/application-menu-default');
    $('#test-menu').waitForDisplayed();
    Terra.validates.element('application menu', { selector: '#test-menu' });
  });
});
