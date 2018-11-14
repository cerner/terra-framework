describe('ApplicationMenuName Theme', () => {
  describe('Displays a themed application menu name', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-application-name/application-name/application-menu-name-default'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-application-menu-name-align-items': 'left',
        '--terra-application-menu-name-color': '#800080',
        '--terra-application-menu-name-flex': '1 1 auto',
        '--terra-application-menu-name-accessory-padding-left': '1rem',
        '--terra-application-menu-name-title-font-weight': 'bold',
        '--terra-application-menu-name-title-padding-left': '1rem',
        '--terra-application-menu-name-title-padding-right': '3rem',
      },
    });
  });
});
