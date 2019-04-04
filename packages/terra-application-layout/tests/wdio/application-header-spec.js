const viewports = Terra.viewports('small', 'large');

describe('ApplicationHeader', () => {
  describe('Displays a default application header', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-header');
      browser.waitForVisible('#test-header');
    });

    Terra.should.matchScreenshot('#test-header', { selector: '#test-header', viewports });
    Terra.should.beAccessible({ viewports, context: '#test-header' });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-application-layout-navbar-background-color': 'red',
        '--terra-application-layout-navbar-border': '3px dotted purple',
        '--terra-application-layout-navbar-height': '5rem',
      },
    });
  });

  describe('Displays an application header toggle standard', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-header-small');
      browser.waitForVisible('#test-header');
    });

    Terra.should.matchScreenshot('#test-header', { selector: '#test-header', viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-application-layout-toggle-button-icon-height': '2rem',
        '--terra-application-layout-toggle-button-icon-width': '2rem',
        '--terra-application-layout-toggle-button-color': '#green',
        '--terra-application-layout-toggle-button-background-color': 'orange',
        '--terra-application-layout-navbar-toggle-width': '2rem',
        '--terra-application-layout-navbar-toggle-border-right': '5px dotted yellow',
        '--terra-application-layout-navbar-toggle-box-shadow': 'inset -2rem 0 0 0 green',
      },
    });
  });

  describe('Displays an application header toggle with hover styling', () => {
    beforeEach(() => {
      browser.setViewportSize(Terra.viewports('huge')[0]);
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-header-small');
      browser.waitForVisible('#test-header');
      browser.moveToObject('[data-application-header-toggle]');
    });

    Terra.should.themeEachCustomProperty('#test-header', {
      '--terra-application-header-toggle-hover-background-color': 'aqua',
    });
  });

  describe('Displays an application header utilities', () => {
    before(() => browser.setViewportSize(Terra.viewports('small')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-header');
      browser.waitForVisible('#test-header');
      browser.click('[data-application-header-utility]');
    });

    Terra.should.matchScreenshot('#test-header', { selector: '#test-header', viewports });
    Terra.should.matchScreenshot({ selector: '#site' });
  });

  describe('Displays an application header with icons', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-header-with-icons');
      browser.waitForVisible('#test-header');
    });

    Terra.should.matchScreenshot('#test-header', { selector: '#test-header', viewports });
  });
});
