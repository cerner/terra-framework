const viewports = Terra.viewports('tiny', 'medium');

describe('ApplicationHeaderUtility', () => {
  beforeEach(() => {
    browser.url('/#/raw/tests/terra-application-utility/application-utility/default-application-header-utility');
    browser.waitForVisible('#default');
  });

  describe('Displays a default application header utility', () => {
    Terra.should.matchScreenshot({ viewports, selector: '#default' });
    Terra.should.beAccessible({ viewports, context: '#default' });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#default',
      properties: {
        '--terra-application-utility-header-background-color': 'blue',
        '--terra-application-utility-header-border-radius': '6px',
        '--terra-application-utility-header-border-width': '10px',
        '--terra-application-utility-header-color': 'purple',
        '--terra-application-utility-header-padding-left': '20px',
        '--terra-application-utility-header-padding-right': '20px',
        '--terra-application-utility-header-icon-width': '15px',
        '--terra-application-utility-header-accessory-height': '2rem',
        '--terra-application-utility-header-accessory-margin-right': '20px',
        '--terra-application-utility-header-accessory-width': '2rem',
        '--terra-application-utility-header-title-font-size': '2rem',
        '--terra-application-utility-header-title-font-weight': 'bold',
        '--terra-application-utility-header-title-margin-right': '20px',
      },
    });
  });

  describe('Hover-application header utility', () => {
    beforeEach(() => { browser.moveToObject('#default'); });
    Terra.should.matchScreenshot({ viewports, selector: '#default' });
    Terra.should.beAccessible({ viewports, context: '#default' });
    Terra.should.themeEachCustomProperty('#default', {
      '--terra-application-utility-header-hover-background-color': 'blue',
    });
  });

  describe('Focus-application header utility', () => {
    beforeEach(() => { browser.keys('Tab'); });
    Terra.should.matchScreenshot({ viewports, selector: '#default' });
    Terra.should.beAccessible({ viewports, context: '#default' });
    Terra.should.themeEachCustomProperty('#default', {
      '--terra-application-utility-header-focus-box-shadow': '0 0 4px 4px rgba(80, 80, 233, 0.5), 0 0 6px 7px rgba(80, 80, 233, 0.35)',
    });
  });
});
