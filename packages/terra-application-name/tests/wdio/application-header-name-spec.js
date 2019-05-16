const viewports = Terra.viewports('tiny', 'medium');

viewports.forEach((viewport) => {
  describe(`ApplicationHeaderName - ${viewport}`, () => {
    before(() => browser.setViewportSize(viewport));

    describe('Displays a default application header name', () => {
      before(() => browser.url('/#/raw/tests/terra-application-name/application-name/application-header-name-default'));

      Terra.should.validateElement({ selector: '#default' });
      if (browser.options.formFactor === 'medium') {
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
      }
    });

    describe('Displays a truncated application header name', () => {
      before(() => browser.url('/#/raw/tests/terra-application-name/application-name/application-header-name-truncated'));

      Terra.should.validateElement({ selector: '#truncated' });
    });
  });
});
