const viewports = Terra.viewports('tiny', 'medium');

viewports.forEach((viewport) => {
  describe(`Application Header Layout - ${viewport.name}`, () => {
    before(() => browser.setViewportSize(viewport));

    describe('Displays a default application header layout', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-application-header-layout/application-header-layout/application-header-default');
        browser.waitForVisible('#test-header');
      });

      Terra.it.matchesScreenshot({ selector: '#test-header' });
    });

    describe('Displays the Skip to Content when focused onto', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-application-header-layout/application-header-layout/application-header-default');
        browser.waitForVisible('#test-header');
        browser.keys(['Tab']);
      });

      Terra.it.validatesElement('Visible', { selector: '#test-header' });

      it('should hide the button after a tab', () => {
        browser.keys(['Tab', 'Tab']);
      });

      Terra.it.validatesElement('Not Visible', { selector: '#test-header' });
    });

    describe('Displays a application header layout with logo and utilities only', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-application-header-layout/application-header-layout/application-header-with-logo-and-utilities-only');
        browser.waitForVisible('#test-header');
      });

      Terra.it.validatesElement({ selector: '#test-header' });
    });
  });
});
