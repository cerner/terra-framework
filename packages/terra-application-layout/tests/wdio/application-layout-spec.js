const viewports = Terra.viewports('small', 'large');

describe('ApplicationLayout', () => {
  describe('Displays a default application layout', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout');
      browser.waitForVisible('#application-layout-test');
    });

    Terra.it.matchesScreenshot({ selector: '#application-layout-test', viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Displays an application layout with top navigation tabs', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-no-top-nav');
      browser.waitForVisible('#application-layout-test');
    });

    Terra.it.matchesScreenshot({ selector: '#application-layout-test', viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Displays an application layout with no header content', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-empty');
      browser.waitForVisible('#application-layout-test');
    });

    Terra.it.matchesScreenshot({ selector: '#application-layout-test', viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Navigates with top navigation tabs', () => {
    beforeEach(() => {
      browser.setViewportSize(Terra.viewports('huge')[0]);
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout');
      browser.waitForVisible('#application-layout-tab-1');
      browser.click('#application-layout-tab-1');
    });

    Terra.it.matchesScreenshot({ selector: '#application-layout-test' });
    Terra.it.isAccessible();
  });

  describe('Toggles menu when small', () => {
    before(() => {
      browser.setViewportSize(Terra.viewports('small')[0]);
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout');
      browser.refresh();
      browser.waitForVisible('#application-layout-test');
      browser.click('[data-application-header-toggle]');
      browser.waitForVisible('[data-routing-menu]');
    });

    Terra.it.matchesScreenshot({ selector: '#application-layout-test' });
    Terra.it.isAccessible();
  });

  describe('Renders primary nav menu when small', () => {
    beforeEach(() => {
      browser.setViewportSize(Terra.viewports('small')[0]);
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout');
      browser.refresh();
      browser.waitForVisible('#application-layout-test');
      browser.click('[data-application-header-toggle]');
      browser.waitForVisible('[data-routing-menu] [data-navigation-side-menu-action-header] button');
      browser.click('[data-routing-menu] [data-navigation-side-menu-action-header] button');
      browser.waitForVisible('[data-routing-menu]');
    });

    Terra.it.matchesScreenshot({ selector: '#application-layout-test' });
    Terra.it.isAccessible();
  });

  describe('Navigates from primary nav menu when small', () => {
    beforeEach(() => {
      browser.setViewportSize(Terra.viewports('small')[0]);
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout');
      browser.waitForVisible('#application-layout-test');
      browser.click('[data-application-header-toggle]');
      browser.waitForVisible('[data-routing-menu] [data-navigation-side-menu-action-header] button');
      browser.click('[data-routing-menu] [data-navigation-side-menu-action-header] button');
      browser.waitForVisible('[data-routing-menu] [data-menu-item="/page_2"]');
      browser.click('[data-routing-menu] [data-menu-item="/page_2"]');
    });

    Terra.it.matchesScreenshot({ selector: '#application-layout-test' });
    Terra.it.isAccessible();
  });

  describe('Presents utility menu from header when large', () => {
    beforeEach(() => {
      browser.setViewportSize(Terra.viewports('large')[0]);
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout');
      browser.waitForVisible('[data-application-header-utility]');
      browser.click('[data-application-header-utility]');
    });

    Terra.it.matchesScreenshot({ selector: '#application-layout-test' });
    Terra.it.isAccessible();
  });

  describe('Presents utility menu from menu when small', () => {
    beforeEach(() => {
      browser.setViewportSize(Terra.viewports('small')[0]);
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout');
      browser.waitForVisible('#application-layout-test');
      browser.click('[data-application-header-toggle]');
      browser.waitForVisible('[data-application-menu-utility]');
      browser.click('[data-application-menu-utility]');
    });

    Terra.it.matchesScreenshot({ selector: '#application-layout-test' });
    Terra.it.isAccessible();
  });

  describe('Presents utility menu from header and checks for closure on read-only item click', () => {
    beforeEach(() => {
      browser.setViewportSize(Terra.viewports('large')[0]);
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout');
      browser.waitForVisible('[data-application-header-utility]');
      browser.click('[data-application-header-utility]');
      browser.waitForVisible('#readonly');
      browser.click('#readonly');
    });

    Terra.it.matchesScreenshot({ selector: '#application-layout-test' });
    Terra.it.isAccessible();
  });

  describe('Displays an application layout with nav icons', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-with-icons');
      browser.waitForVisible('#application-layout-test');
    });

    Terra.it.matchesScreenshot({ selector: '#application-layout-test', viewports });
  });
});
