const viewports = Terra.viewports('tiny', 'medium');

viewports.forEach((viewport) => {
  describe(`ApplicationMenuUtility - ${viewport}`, () => {
    before(() => browser.setViewportSize(viewport));

    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-utility/application-utility/default-application-menu-utility');
      browser.waitForVisible('#default');
    });

    describe('Displays a default application menu utility', () => {
      Terra.it.validatesElement({ selector: '#default' });
    });

    describe('Hover-application menu utility', () => {
      beforeEach(() => { browser.moveToObject('#default'); });
      Terra.it.validatesElement({ selector: '#default' });
    });

    describe('Focus-application menu utility', () => {
      beforeEach(() => { browser.keys('Tab'); });
      Terra.it.validatesElement({ selector: '#default' });
    });
  });
});
