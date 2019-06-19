const selector = '#test-root';

Terra.describeViewports('Navigation Layout', ['tiny', 'small', 'medium', 'large', 'huge'], () => {
  describe('Displays a basic NavigationLayout', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-navigation-layout/navigation-layout/navigation-layout-basic');
    });

    Terra.it.matchesScreenshot({ selector });
  });

  describe('Displays a complex NavigationLayout - page 1', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-navigation-layout/navigation-layout/navigation-layout-complex');
      browser.click('#test-root .page-1-link');
    });

    Terra.it.matchesScreenshot({ selector });
  });

  describe('Displays a complex NavigationLayout - page 2', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-navigation-layout/navigation-layout/navigation-layout-complex');
      browser.click('#test-root .page-2-link');
    });

    Terra.it.matchesScreenshot({ selector });
  });

  describe('Displays a complex NavigationLayout - page 3', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-navigation-layout/navigation-layout/navigation-layout-complex');
      browser.click('#test-root .page-3-link');
    });

    Terra.it.matchesScreenshot({ selector });
  });
});
