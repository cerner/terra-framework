describe('Application Header Layout Theme', () => {
  describe('Displays a application header layout with themeable styles', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-header-layout/application-header-layout/application-header-default');
      browser.waitForVisible('#test-header');
    });

    Terra.should.themeEachCustomProperty('#test-header', {
      '--terra-application-header-layout-logo-min-width': '5rem',
    });
  });
});
