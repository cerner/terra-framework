const viewports = Terra.viewports('small');

describe('DevSiteRoutingMenu', () => {
  describe('Displays a default dev site routing menu', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/dev-site-routing-menu');
      browser.waitForVisible('#dev-site-routing-menu-test');
    });

    Terra.should.matchScreenshot({ selector: '#dev-site-routing-menu-test', viewports });
    Terra.should.beAccessible({ viewports, context: '#dev-site-routing-menu-test' });
  });

  describe('Displays a dev site routing menu without header', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/dev-site-routing-menu-no-header');
      browser.waitForVisible('#dev-site-routing-menu-test');
    });

    Terra.should.matchScreenshot({ selector: '#dev-site-routing-menu-test', viewports });
    Terra.should.beAccessible({ viewports, context: '#dev-site-routing-menu-test' });
  });

  describe('Navigates away from the site', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/dev-site-routing-menu-external');
      browser.waitForVisible('#dev-site-routing-menu-test');
      browser.click('[data-menu-item="Item 3"]');
      browser.pause(100);
    });

    Terra.should.matchScreenshot({ selector: 'body', viewports });
    Terra.should.beAccessible({ viewports, context: '#dev-site-routing-menu-test' });
  });
});
