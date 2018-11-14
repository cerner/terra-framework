describe('ApplicationMenu Theme', () => {
  describe('Displays a themed application menu', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-menu');
      browser.waitForVisible('#test-menu');
    });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-application-menu-background-color': 'pink',
        '--terra-application-menu-header-background-color': 'blue',
      },
    });
  });
});
