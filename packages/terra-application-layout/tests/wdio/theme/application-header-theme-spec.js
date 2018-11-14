const viewports = Terra.viewports('small', 'large');

describe('ApplicationHeader Theme', () => {
  describe('Displays a themed application header', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-header');
      browser.waitForVisible('#test-header');
    });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-application-header-background-color': 'red',
        '--terra-application-header-border': '3px dotted purple',
        '--terra-application-header-height': '5rem',
      },
    });
  });

  describe('Displays a themed application header toggle', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-header-small');
      browser.waitForVisible('#test-header');
    });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-application-header-toggle-icon-height': '2rem',
        '--terra-application-header-toggle-icon-width': '2rem',
        '--terra-application-header-toggle-color': '#green',
        '--terra-application-header-toggle-background-color': 'orange',
        '--terra-application-header-toggle-width': '2rem',
        '--terra-application-header-toggle-border-right': '5px dotted yellow',
        '--terra-application-header-toggle-box-shadow': 'inset -2rem 0 0 0 green',
      },
    });
  });

  describe('Displays an application header toggle with hover styling', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-header-small');
      browser.waitForVisible('#test-header');
      browser.moveToObject('[data-application-header-toggle]');
    });

    Terra.should.matchScreenshot('#test-header', { selector: '#test-header', viewports });
    Terra.should.themeEachCustomProperty('#test-header', {
      '--terra-application-header-toggle-hover-background-color': 'aqua',
    });
  });
});
