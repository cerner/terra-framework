/* global browser, Terra */

const viewports = Terra.viewports('small', 'large');

describe('ApplicationMenu', () => {
  describe('Displays a default application menu', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/application-layout/application-layout-menu');
      browser.waitForVisible('#test-menu');
    });

    Terra.should.matchScreenshot('#test-header', { selector: '#test-menu', viewports });
    Terra.should.beAccessible({ viewports, context: '#test-menu' });
    Terra.should.themeEachCustomProperty('#test-menu', {
      '--terra-application-menu-background-color': 'pink',
      '--terra-application-menu-header-background-color': 'blue',
    });
  });
});
