const viewports = Terra.viewports('tiny', 'medium');

describe('ApplicationMenuName', () => {
  describe('Displays a default application menu name', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-application-name/application-name/application-menu-name-default'));

    Terra.should.matchScreenshot({ viewports, selector: '#default' });
    Terra.should.beAccessible({ viewports, context: '#default' });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-application-name-menu-align-items': 'flex-start',
        '--terra-application-name-menu-color': '#800080',
        '--terra-application-name-menu-accessory-padding-right': '1rem',
        '--terra-application-name-menu-title-font-weight': 'bold',
        '--terra-application-name-menu-padding-left': '1rem',
        '--terra-application-name-menu-padding-right': '3rem',
      },
    });
  });

  describe('Displays a wrapping application menu name', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-application-name/application-name/application-menu-name-wrapping'));

    Terra.should.matchScreenshot({ viewports, selector: '#wrapping' });
  });
});
