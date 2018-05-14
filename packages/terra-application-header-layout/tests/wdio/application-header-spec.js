/* global browser, Terra, beforeEach, expect */

const viewports = Terra.viewports('tiny', 'medium');

describe('Application Header', () => {
  describe('Displays a default application header', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-header-layout//application-header-layoutapplication-header-default');
      browser.waitForVisible('#test-header');
    });

    Terra.should.matchScreenshot({ viewports, selector: '#test-header' });
    Terra.should.beAccessible({ viewports, context: '#test-header' });
  });

  describe('Displays a application header with themeable styles', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-header-layout//application-header-layoutapplication-header-default');
      browser.waitForVisible('#test-header');
    });

    Terra.should.matchScreenshot({ viewports, selector: '#test-header' });
    Terra.should.beAccessible({ viewports, context: '#test-header' });

    Terra.should.themeEachCustomProperty('#test-header', {
      '--terra-application-header-layout-logo-min-width': '5rem',
    });
  });
});
