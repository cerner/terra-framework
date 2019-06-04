const viewports = Terra.viewports('tiny', 'medium');

viewports.forEach((viewport) => {
  describe(`ApplicationHeaderUtility - ${viewport}`, () => {
    before(() => browser.setViewportSize(viewport));

    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-utility/application-utility/default-application-header-utility');
      browser.waitForVisible('#default');
    });

    describe('Displays a default application header utility', () => {
      Terra.it.validatesElement({ selector: '#default' });
    });

    describe('Hover-application header utility', () => {
      beforeEach(() => { browser.moveToObject('#default'); });
      Terra.it.validatesElement({ selector: '#default' });
    });

    describe('Focus-application header utility', () => {
      beforeEach(() => { browser.keys('Tab'); });
      Terra.it.validatesElement({ selector: '#default' });
    });
  });
});
