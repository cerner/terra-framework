/* global browser, Terra, beforeEach */

const viewports = Terra.viewports('small');

describe('RoutingMenu', () => {
  describe('Displays a default routing menu', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/routing-menu');
      browser.waitForVisible('#routing-menu-test');
    });

    Terra.should.matchScreenshot({ selector: '#routing-menu-test', viewports });
    Terra.should.beAccessible({ viewports, context: '#routing-menu-test' });
  });

  describe('Displays a routing menu without header', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/routing-menu-no-header');
      browser.waitForVisible('#routing-menu-test');
    });

    Terra.should.matchScreenshot({ selector: '#routing-menu-test', viewports });
    Terra.should.beAccessible({ viewports, context: '#routing-menu-test' });
  });
});
