describe('ApplicationHeaderName Theme', () => {
  describe('Displays a themed application header name', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-application-name/application-name/application-header-name-default'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-application-header-name-align-items': 'left',
        '--terra-application-header-name-color': '#800080',
        '--terra-application-header-name-flex': '1 1 auto',
        '--terra-application-header-name-accessory-padding-left': '1rem',
        '--terra-application-header-name-title-font-weight': 'bold',
        '--terra-application-header-name-title-padding-left': '1rem',
        '--terra-application-header-name-title-padding-right': '3rem',
      },
    });
  });
});
