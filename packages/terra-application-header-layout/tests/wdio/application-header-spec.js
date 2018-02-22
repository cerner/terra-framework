/* global browser, Terra, beforeEach, expect */

const viewports = Terra.viewports('tiny', 'medium');

describe('Application Header', () => {
  describe('Displays a default application header', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/application-header-layout/application-header-default');
      browser.waitForVisible('#test-header');
    });

    Terra.should.matchScreenshot({ viewports, selector: '#test-header' });
    Terra.should.beAccessible({ viewports, context: '#test-header' });
  });
});
