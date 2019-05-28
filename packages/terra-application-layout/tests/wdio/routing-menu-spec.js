const viewports = Terra.viewports('small');

describe('RoutingMenu', () => {
  describe('Displays a default routing menu', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/routing-menu');
      browser.waitForVisible('#routing-menu-test');
    });

    Terra.it.matchesScreenshot({ selector: '#routing-menu-test', viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Displays a routing menu without header', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/routing-menu-no-header');
      browser.waitForVisible('#routing-menu-test');
    });

    Terra.it.matchesScreenshot({ selector: '#routing-menu-test', viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Navigates away from the site', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/routing-menu-external');
      browser.waitForVisible('#routing-menu-test');
      browser.click('[data-menu-item="/item_3"]');
      browser.pause(100);
    });

    it('successfully navigated away', () => {
      expect(browser.url().value).to.equal('https://engineering.cerner.com/terra-ui/#/home/terra-ui/index');
    });
  });
});
