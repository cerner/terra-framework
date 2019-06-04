const viewports = Terra.viewports('tiny', 'medium');

viewports.forEach((viewport) => {
  describe(`Application Menu - ${viewport}`, () => {
    before(() => browser.setViewportSize(viewport));

    describe('Displays a default application menu', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-application-menu-layout/application-menu-layout/application-menu-default');
        browser.waitForVisible('#test-menu');
      });

      Terra.it.validatesElement({ selector: '#test-menu' });
    });
  });
});
