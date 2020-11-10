Terra.describeViewports('RoutingMenu', ['small'], () => {
  it('Displays a default routing menu', () => {
    browser.url('/#/raw/tests/terra-application-layout/application-layout/routing-menu');
    browser.waitForVisible('#routing-menu-test');
    Terra.validates.element({ selector: '#routing-menu-test' });
  });

  it('Displays a routing menu without header', () => {
    browser.url('/#/raw/tests/terra-application-layout/application-layout/routing-menu-no-header');
    browser.waitForVisible('#routing-menu-test');
    Terra.validates.element('without header', { selector: '#routing-menu-test' });
  });

  describe('Navigates away from the site', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/routing-menu-external');
      browser.waitForVisible('#routing-menu-test');
      browser.click('[data-menu-item="/item_3"]');
      browser.pause(100);
    });

    it('successfully navigated away', () => {
      expect(browser.url().value).to.equal('https://engineering.cerner.com/terra-ui/home/terra-ui/index');
    });
  });
});
