/* global $ */
Terra.describeViewports('RoutingMenu', ['small'], () => {
  it('Displays a default routing menu', () => {
    browser.url('/raw/tests/terra-application-layout/application-layout/routing-menu');
    $('#routing-menu-test').waitForDisplayed();
    Terra.validates.element('routing menu', { selector: '#routing-menu-test' });
  });

  it('Displays a routing menu without header', () => {
    browser.url('/raw/tests/terra-application-layout/application-layout/routing-menu-no-header');
    $('#routing-menu-test').waitForDisplayed();
    Terra.validates.element('routing menu without header', { selector: '#routing-menu-test' });
  });

  describe('Navigates away from the site', () => {
    it('successfully navigated away', () => {
      browser.url('/raw/tests/terra-application-layout/application-layout/routing-menu-external');
      $('#routing-menu-test').waitForDisplayed();
      $('[data-menu-item="/item_3"]').click();
      browser.pause(100);
      expect(browser.getUrl()).toEqual('https://engineering.cerner.com/terra-ui/home/terra-ui/index');
    });
  });
});
