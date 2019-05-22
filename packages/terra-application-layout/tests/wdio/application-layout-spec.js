const viewports = Terra.viewports('small', 'large');
// This issue should be resolved once the following axe-core issue is resolved:
// https://github.com/dequelabs/axe-core/issues/1583
const ignoredA11y = {
  'landmark-banner-is-top-level': { enabled: false },
  'landmark-main-is-top-level': { enabled: false },
};

describe('ApplicationLayout', () => {
  describe('Displays a default application layout', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout');
      browser.waitForVisible('#application-layout-test');
    });

    Terra.should.matchScreenshot({ selector: '#application-layout-test', viewports });
    Terra.should.beAccessible({ viewports, context: '#application-layout-test', rules: ignoredA11y });
  });

  describe('Displays an application layout with top navigation tabs', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-no-top-nav');
      browser.waitForVisible('#application-layout-test');
    });

    Terra.should.matchScreenshot({ selector: '#application-layout-test', viewports });
    Terra.should.beAccessible({ viewports, context: '#application-layout-test', rules: ignoredA11y });
  });

  describe('Displays an application layout with no header content', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-empty');
      browser.waitForVisible('#application-layout-test');
    });

    Terra.should.matchScreenshot({ selector: '#application-layout-test', viewports });
    Terra.should.beAccessible({ viewports, context: '#application-layout-test', rules: ignoredA11y });
  });

  describe('Navigates with top navigation tabs', () => {
    beforeEach(() => {
      browser.setViewportSize(Terra.viewports('huge')[0]);
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout');
      browser.waitForVisible('#application-layout-tab-1');
      browser.click('#application-layout-tab-1');
    });

    Terra.should.matchScreenshot({ selector: '#application-layout-test' });
    Terra.should.beAccessible({ context: '#application-layout-test', rules: ignoredA11y });
  });

  describe('Toggles menu when small', () => {
    beforeEach(() => {
      browser.setViewportSize(Terra.viewports('small')[0]);
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout');
      browser.waitForVisible('#application-layout-test');
      browser.click('[data-application-header-toggle]');
      browser.waitForVisible('[data-routing-menu]');
    });

    Terra.should.matchScreenshot({ selector: '#application-layout-test' });
    Terra.should.beAccessible({ context: '#application-layout-test', rules: ignoredA11y });
  });

  describe('Renders primary nav menu when small', () => {
    beforeEach(() => {
      browser.setViewportSize(Terra.viewports('small')[0]);
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout');
      browser.waitForVisible('#application-layout-test');
      browser.click('[data-application-header-toggle]');
      browser.waitForVisible('[data-routing-menu] [data-navigation-side-menu-action-header] button');
      browser.click('[data-routing-menu] [data-navigation-side-menu-action-header] button');
      browser.waitForVisible('[data-routing-menu]');
    });

    Terra.should.matchScreenshot({ selector: '#application-layout-test' });
    Terra.should.beAccessible({ context: '#application-layout-test', rules: ignoredA11y });
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

    Terra.should.matchScreenshot({ selector: '#application-layout-test' });
    Terra.should.beAccessible({ context: '#application-layout-test', rules: ignoredA11y });
  });

  describe('Presents utility menu from header when large', () => {
    beforeEach(() => {
      browser.setViewportSize(Terra.viewports('large')[0]);
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout');
      browser.waitForVisible('[data-application-header-utility]');
      browser.click('[data-application-header-utility]');
    });

    Terra.should.matchScreenshot({ selector: '#application-layout-test' });
    Terra.should.beAccessible({ context: '#application-layout-test', rules: ignoredA11y });
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

    Terra.should.matchScreenshot({ selector: '#application-layout-test' });
    Terra.should.beAccessible({ context: '[role="dialog"]', rules: ignoredA11y });
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

    Terra.should.matchScreenshot({ selector: '#application-layout-test' });
    Terra.should.beAccessible({ context: '#application-layout-test', rules: ignoredA11y });
  });

  describe('Displays an application layout with nav icons', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-with-icons');
      browser.waitForVisible('#application-layout-test');
    });

    Terra.should.matchScreenshot({ selector: '#application-layout-test', viewports });
  });
});
