Terra.describeViewports('ApplicationLayout', ['small', 'large'], () => {
  describe('Displays a default application layout', () => {
    it('Displays a default application layout', () => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout');
      browser.waitForVisible('#application-layout-test');

      Terra.validates.element({ selector: '#application-layout-test' });
    });
  });

  describe('Displays an application layout with top navigation tabs', () => {
    it('Displays an application layout with top navigation tabs', () => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-no-top-nav');
      browser.waitForVisible('#application-layout-test');

      Terra.validates.element({ selector: '#application-layout-test' });
    });
  });

  describe('Displays an application layout with no header content', () => {
    it('Displays an application layout with no header content', () => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-empty');
      browser.waitForVisible('#application-layout-test');

      Terra.validates.element({ selector: '#application-layout-test' });
    });
  });

  describe('Displays an application layout with nav icons', () => {
    it('Displays an application layout with nav icons', () => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-with-icons');
      browser.moveToObject('#root', 0, 0);
      browser.waitForVisible('#application-layout-test');

      Terra.validates.element({ selector: '#application-layout-test' });
    });
  });
});

Terra.describeViewports('ApplicationLayout', ['huge'], () => {
  describe('Navigates with top navigation tabs', () => {
    it('Navigates with top navigation tabs', () => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout');
      browser.waitForVisible('#application-layout-tab-1');
      browser.click('#application-layout-tab-1');

      Terra.validates.element({ selector: '#application-layout-test' });
      browser.click('#application-layout-tab-0');
    });
  });
});

Terra.describeViewports('ApplicationLayout', ['large'], () => {
  describe('Presents utility menu from header when large', () => {
    it('Presents utility menu from header when large', () => {
      browser.waitForVisible('[data-application-header-utility]');
      browser.click('[data-application-header-utility]');

      Terra.validates.element({ selector: '#application-layout-test' });
      browser.keys('Escape');
    });
  });

  describe('Presents utility menu from header and checks for closure on read-only item click', () => {
    it('Presents utility menu from header and checks for closure on read-only item click', () => {
      browser.waitForVisible('[data-application-header-utility]');
      browser.click('[data-application-header-utility]');
      browser.waitForVisible('#readonly');
      browser.click('#readonly');

      Terra.validates.element({ selector: '#application-layout-test' });
      browser.keys('Escape');
    });
  });
});


Terra.describeViewports('ApplicationLayout', ['small'], () => {
  describe('Toggles menu when small', () => {
    it('Toggles menu when small', () => {
      browser.waitForVisible('[data-application-header-toggle');
      browser.click('[data-application-header-toggle]');
      browser.waitForVisible('[data-routing-menu]');

      Terra.validates.element({ selector: '#application-layout-test' });
    });
  });

  describe('Renders primary nav menu when small', () => {
    it('Renders primary nav menu when small', () => {
      browser.waitForVisible('[data-routing-menu] [data-navigation-side-menu-action-header] button');
      browser.click('[data-routing-menu] [data-navigation-side-menu-action-header] button');
      browser.waitForVisible('[data-routing-menu]');

      Terra.validates.element({ selector: '#application-layout-test' });
    });
  });

  describe('Presents utility menu from menu when small', () => {
    it('Presents utility menu from menu when small', () => {
      browser.waitForVisible('[data-application-menu-utility]');
      browser.click('[data-application-menu-utility]');

      Terra.validates.element({ selector: '#application-layout-test' });
      browser.keys('Escape');
    });
  });

  describe('Navigates from primary nav menu when small', () => {
    it('Navigates from primary nav menu when small', () => {
      browser.click('[data-application-header-toggle]');
      browser.waitForVisible('[data-routing-menu] [data-navigation-side-menu-action-header] button');
      browser.click('[data-routing-menu] [data-navigation-side-menu-action-header] button');
      browser.waitForVisible('[data-routing-menu] [data-menu-item="/page_2"]');
      browser.click('[data-routing-menu] [data-menu-item="/page_2"]');
      browser.pause(150);

      Terra.validates.element({ selector: '#application-layout-test' });
    });
  });
});
