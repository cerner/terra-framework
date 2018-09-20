const viewports = Terra.viewports('small', 'large');

describe('ApplicationMenu', () => {
  describe('Displays a default application menu', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-menu');
      browser.waitForVisible('#test-menu');
    });

    Terra.should.matchScreenshot('#test-menu', { selector: '#test-menu', viewports });
    Terra.should.beAccessible({ viewports, context: '#test-menu' });
    Terra.should.themeEachCustomProperty('#test-menu', {
      '--terra-application-menu-background-color': 'pink',
      '--terra-application-menu-header-background-color': 'blue',
    });

    describe('Displays an application menu utilities', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-menu');
        browser.waitForVisible('#test-menu');
        browser.click('[data-application-menu-utility]');
      });

      Terra.should.matchScreenshot({ viewports });
    });
  });
});
