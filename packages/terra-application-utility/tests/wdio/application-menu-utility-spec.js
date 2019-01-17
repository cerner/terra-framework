const viewports = Terra.viewports('tiny', 'medium');

describe('ApplicationMenuUtility', () => {
  beforeEach(() => {
    browser.url('/#/raw/tests/terra-application-utility/application-utility/default-application-menu-utility');
    browser.waitForVisible('#default');
  });

  describe('Displays a default application menu utility', () => {
    Terra.should.matchScreenshot({ viewports, selector: '#default' });
    Terra.should.beAccessible({ viewports, context: '#default' });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#default',
      properties: {
        '--terra-application-utility-menu-background-color': 'blue',
        '--terra-application-utility-menu-border-bottom-width': '6px',
        '--terra-application-utility-menu-border-left-width': '6px',
        '--terra-application-utility-menu-border-radius': '6px',
        '--terra-application-utility-menu-border-right-width': '6px',
        '--terra-application-utility-menu-border-top': '6px solid blue',
        '--terra-application-utility-menu-color': 'purple',
        '--terra-application-utility-menu-padding-left': '20px',
        '--terra-application-utility-menu-padding-right': '20px',
        '--terra-application-utility-menu-icon-width': '15px',
        '--terra-application-utility-menu-accessory-height': '2rem',
        '--terra-application-utility-menu-accessory-margin-right': '20px',
        '--terra-application-utility-menu-accessory-width': '2rem',
        '--terra-application-utility-menu-title-font-size': '2rem',
        '--terra-application-utility-menu-title-font-weight': 'bold',
        '--terra-application-utility-menu-title-margin-right': '20px',
      },
    });
  });

  describe('Hover-application menu utility', () => {
    beforeEach(() => { browser.moveToObject('#default'); });
    Terra.should.matchScreenshot({ viewports, selector: '#default' });
    Terra.should.beAccessible({ viewports, context: '#default' });
    Terra.should.themeEachCustomProperty('#default', {
      '--terra-application-utility-menu-hover-background-color': 'blue',
    });
  });

  describe('Focus-application menu utility', () => {
    beforeEach(() => { browser.keys('Tab'); });
    Terra.should.matchScreenshot({ viewports, selector: '#default' });
    Terra.should.beAccessible({ viewports, context: '#default' });
    Terra.should.themeEachCustomProperty('#default', {
      '--terra-application-utility-menu-focus-box-shadow': '0 0 4px 4px rgba(80, 80, 233, 0.5), 0 0 6px 7px rgba(80, 80, 233, 0.35)',
    });
  });
});
