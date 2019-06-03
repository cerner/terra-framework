const viewports = Terra.viewports('tiny', 'medium');

viewports.forEach((viewport) => {
  describe(`ApplicationMenuName - ${viewport}`, () => {
    before(() => browser.setViewportSize(viewport));

    describe('Displays a default application menu name', () => {
      before(() => browser.url('/#/raw/tests/terra-application-name/application-name/application-menu-name-default'));

      Terra.it.validatesElement({ selector: '#default' });
    });

    describe('Displays a wrapping application menu name', () => {
      before(() => browser.url('/#/raw/tests/terra-application-name/application-name/application-menu-name-wrapping'));

      Terra.it.validatesElement({ selector: '#wrapping' });
    });
  });
});
