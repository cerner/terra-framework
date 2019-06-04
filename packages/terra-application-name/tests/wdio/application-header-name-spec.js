const viewports = Terra.viewports('tiny', 'medium');

viewports.forEach((viewport) => {
  describe(`ApplicationHeaderName - ${viewport}`, () => {
    before(() => browser.setViewportSize(viewport));

    describe('Displays a default application header name', () => {
      before(() => browser.url('/#/raw/tests/terra-application-name/application-name/application-header-name-default'));

      Terra.it.validatesElement({ selector: '#default' });
    });

    describe('Displays a truncated application header name', () => {
      before(() => browser.url('/#/raw/tests/terra-application-name/application-name/application-header-name-truncated'));

      Terra.it.validatesElement({ selector: '#truncated' });
    });
  });
});
