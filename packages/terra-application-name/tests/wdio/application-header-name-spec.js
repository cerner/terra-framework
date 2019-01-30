const viewports = Terra.viewports('tiny', 'medium');

describe('ApplicationHeaderName', () => {
  describe('Displays a default application header name', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-application-name/application-name/application-header-name-default'));

    Terra.should.matchScreenshot({ viewports, selector: '#default' });
    Terra.should.beAccessible({ viewports, context: '#default' });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-application-name-header-align-items': 'flex-start',
        '--terra-application-name-header-color': '#800080',
        '--terra-application-name-header-accessory-padding-right': '1rem',
        '--terra-application-name-header-title-font-weight': 'bold',
        '--terra-application-name-header-padding-left': '1rem',
        '--terra-application-name-header-padding-right': '3rem',
      },
    });
  });

  describe('Displays a truncated application header name', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-application-name/application-name/application-header-name-truncated'));

    Terra.should.matchScreenshot({ viewports, selector: '#truncated' });
  });
});
