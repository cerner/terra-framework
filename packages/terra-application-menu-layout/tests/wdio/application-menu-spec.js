/* global browser, Terra, before */

const viewports = Terra.viewports('tiny', 'medium');

describe('Application Menu', () => {
  describe('Displays a default application menu', () => {
    before(() => {
      browser.url('/#/raw/tests/application-menu-layout/application-menu-default');
      browser.waitForVisible('#test-menu');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports, context: '#test-menu' });
  });
});
