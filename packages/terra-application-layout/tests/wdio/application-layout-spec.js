Terra.describeViewports('ApplicationLayout', ['small', 'large'], () => {
  describe('Displays a default application layout', () => {
    it('Displays a default application layout', () => {
      browser.url('/raw/tests/terra-application-layout/application-layout/application-layout');
      $('#application-layout-test').waitForDisplayed();

      browser.pause(3000);// to display image
      Terra.validates.element('application layout', { selector: '#application-layout-test' });
    });
  });

  describe('Displays an application layout with top navigation tabs', () => {
    it('Displays an application layout with top navigation tabs', () => {
      browser.url('/raw/tests/terra-application-layout/application-layout/application-layout-no-top-nav');
      $('#application-layout-test').waitForDisplayed();
      $('#root').moveTo({ xOffset: 0, yOffset: 0 });
      Terra.validates.element('application layout with top navigation tabs', { selector: '#application-layout-test' });
    });
  });

  describe('Displays an application layout with no header content', () => {
    it('Displays an application layout with no header content', () => {
      browser.url('/raw/tests/terra-application-layout/application-layout/application-layout-empty');
      $('#application-layout-test').waitForDisplayed();
      $('#root').moveTo({ xOffset: 0, yOffset: 0 });
      Terra.validates.element('application layout with no header content', { selector: '#application-layout-test' });
    });
  });

  describe('Displays an application layout with nav icons', () => {
    it('Displays an application layout with nav icons', () => {
      browser.url('/raw/tests/terra-application-layout/application-layout/application-layout-with-icons');
      $('#root').moveTo({ xOffset: 0, yOffset: 0 });
      $('#application-layout-test').waitForDisplayed();

      Terra.validates.element('application layout with nav icons', { selector: '#application-layout-test' });
    });
  });
});

Terra.describeViewports('ApplicationLayout', ['huge'], () => {
  describe('Navigates with top navigation tabs', () => {
    it('Navigates with top navigation tabs', () => {
      browser.url('/raw/tests/terra-application-layout/application-layout/application-layout');
      $('#application-layout-tab-1').waitForDisplayed();
      $('#application-layout-tab-1').click();

      Terra.validates.element('navigates with top navigation tabs', { selector: '#application-layout-test' });
      $('#application-layout-tab-0').click();
    });
  });
});

Terra.describeViewports('ApplicationLayout', ['large'], () => {
  describe('Presents utility menu from header when large', () => {
    it('Presents utility menu from header when large', () => {
      browser.url('/raw/tests/terra-application-layout/application-layout/application-layout');
      $('[data-application-header-utility]').waitForDisplayed();
      $('[data-application-header-utility]').click();

      Terra.validates.element('presents utility menu from header', { selector: '#application-layout-test' });
      browser.keys('Escape');
    });
  });

  describe('Presents utility menu from header and checks for closure on read-only item click', () => {
    it('Presents utility menu from header and checks for closure on read-only item click', () => {
      browser.url('/raw/tests/terra-application-layout/application-layout/application-layout');
      $('[data-application-header-utility]').waitForDisplayed();
      $('[data-application-header-utility]').click();
      $('#readonly').waitForDisplayed();
      $('#readonly').click();

      Terra.validates.element('checks for closure on read-only item click', { selector: '#application-layout-test' });
      browser.keys('Escape');
    });
  });
});

Terra.describeViewports('ApplicationLayout', ['small'], () => {
  describe('Toggles menu when small', () => {
    it('Toggles menu when small', () => {
      $('[data-application-header-toggle').waitForDisplayed();
      $('[data-application-header-toggle]').click();
      $('[data-routing-menu]').waitForDisplayed();

      Terra.validates.element('toggles menu when small', { selector: '#application-layout-test' });
    });
  });

  describe('Renders primary nav menu when small', () => {
    it('Renders primary nav menu when small', () => {
      $('[data-routing-menu] [data-navigation-side-menu-action-header]').waitForDisplayed();
      $('[data-routing-menu] [data-navigation-side-menu-action-header]').click();
      $('[data-routing-menu]').waitForDisplayed();

      Terra.validates.element('renders primary nav menu when small', { selector: '#application-layout-test' });
    });
  });

  describe('Presents utility menu from menu when small', () => {
    it('Presents utility menu from menu when small', () => {
      $('[data-application-menu-utility]').waitForDisplayed();
      $('[data-application-menu-utility]').click();

      Terra.validates.element('presents utility menu from menu when small', { selector: '#application-layout-test' });
      browser.keys('Escape');
    });
  });

  // TODO: uncomment and fix this failing test
  // describe('Navigates from primary nav menu when small', () => {
  //   it('Navigates from primary nav menu when small', () => {
  //     $('[data-application-header-toggle]').click();
  //     $('[data-routing-menu] [data-navigation-side-menu-action-header] button').waitForDisplayed();
  //     $('[data-routing-menu] [data-navigation-side-menu-action-header] button').click();
  //     $('[data-routing-menu] [data-menu-item="/page_2"]').waitForDisplayed();
  //  NOTE: the following line is causing a WARN: Request failed with status 400 due to element not interactable
  //  which sporadically times out and causes triggers test failures.
  //     $('[data-routing-menu] [data-menu-item="/page_2"]').click();
  //     browser.pause(150);

  //     Terra.validates.element('navigates from primary nav menu when small', { selector: '#application-layout-test' });
  //   });
  // });
});
