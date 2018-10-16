const viewports = Terra.viewports('tiny', 'medium');

describe('Application Header Layout', () => {
  describe('Displays a default application header layout', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-header-layout/application-header-layout/application-header-default');
      browser.waitForVisible('#test-header');
    });

    Terra.should.matchScreenshot({ viewports, selector: '#test-header' });
    Terra.should.beAccessible({ viewports, context: '#test-header' });
  });

  describe('Displays a application header layout with themeable styles', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-header-layout/application-header-layout/application-header-default');
      browser.waitForVisible('#test-header');
    });

    Terra.should.matchScreenshot({ viewports, selector: '#test-header' });
    Terra.should.beAccessible({ viewports, context: '#test-header' });

    Terra.should.themeEachCustomProperty('#test-header', {
      '--terra-application-header-layout-logo-min-width': '5rem',
    });
  });

  describe('Displays the Skip to Content when focused onto', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-application-header-layout/application-header-layout/application-header-default');
      browser.waitForVisible('#test-header');
      browser.keys(['Tab']);
    });

    Terra.should.matchScreenshot('Visible', { viewports, selector: '#test-header' });

    it('should hide the button after a tab', () => {
      browser.keys(['Tab', 'Tab']);
    });

    Terra.should.matchScreenshot('Not Visible', { viewports, selector: '#test-header' });
  });
});
