// This issue should be resolved once the following axe-core issue is resolved:
// https://github.com/dequelabs/axe-core/issues/1583
const ignoredA11y = {
  'landmark-banner-is-top-level': { enabled: false },
  'landmark-main-is-top-level': { enabled: false },
};

Terra.describeViewports('ApplicationLayout', ['small', 'large'], () => {
  describe('Displays a default application layout', () => {
    it('Displays a default application layout', () => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout');
      browser.waitForVisible('#application-layout-test');

      Terra.validates.element({ selector: '#application-layout-test', axeRules: { rules: ignoredA11y } });
    });
  });

  describe('Displays an application layout with top navigation tabs', () => {
    it('Displays an application layout with top navigation tabs', () => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-no-top-nav');
      browser.waitForVisible('#application-layout-test');

      Terra.validates.element({ selector: '#application-layout-test', axeRules: { rules: ignoredA11y } });
    });
  });

  describe('Displays an application layout with no header content', () => {
    it('Displays an application layout with no header content', () => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-empty');
      browser.waitForVisible('#application-layout-test');

      Terra.validates.element({ selector: '#application-layout-test', axeRules: { rules: ignoredA11y } });
    });
  });

  describe('Displays an application layout with nav icons', () => {
    it('Displays an application layout with nav icons', () => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-with-icons');
      browser.moveToObject('#root', 0, 0);
      browser.waitForVisible('#application-layout-test');

      Terra.validates.element({ selector: '#application-layout-test', axeRules: { rules: ignoredA11y } });
    });
  });
});

describe('ApplicationLayout', () => {
  describe('Navigates with top navigation tabs', () => {
    it('Navigates with top navigation tabs', () => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout');
      browser.setViewportSize(Terra.viewports('huge')[0]);
      browser.waitForVisible('#application-layout-tab-1');
      browser.click('#application-layout-tab-1');

      Terra.validates.element({ selector: '#application-layout-test', axeRules: { rules: ignoredA11y } });
      browser.click('#application-layout-tab-0');
    });
  });

  describe('Presents utility menu from header when large', () => {
    it('Presents utility menu from header when large', () => {
      browser.setViewportSize(Terra.viewports('large')[0]);
      browser.waitForVisible('[data-application-header-utility]');
      browser.click('[data-application-header-utility]');

      Terra.validates.element({ selector: '#application-layout-test', axeRules: { rules: ignoredA11y } });
      browser.keys('Escape');
    });
  });

  describe('Presents utility menu from header and checks for closure on read-only item click', () => {
    it('Presents utility menu from header and checks for closure on read-only item click', () => {
      browser.setViewportSize(Terra.viewports('large')[0]);
      browser.waitForVisible('[data-application-header-utility]');
      browser.click('[data-application-header-utility]');
      browser.waitForVisible('#readonly');
      browser.click('#readonly');

      Terra.validates.element({ selector: '#application-layout-test', axeRules: { rules: ignoredA11y } });
      browser.keys('Escape');
    });
  });

  describe('Toggles menu when small', () => {
    it('Toggles menu when small', () => {
      browser.setViewportSize(Terra.viewports('small')[0]);
      browser.waitForVisible('[data-application-header-toggle');
      browser.click('[data-application-header-toggle]');
      browser.waitForVisible('[data-routing-menu]');

      Terra.validates.element({ selector: '#application-layout-test', axeRules: { rules: ignoredA11y } });
    });
  });

  describe('Renders primary nav menu when small', () => {
    it('Renders primary nav menu when small', () => {
      browser.waitForVisible('[data-routing-menu] [data-navigation-side-menu-action-header] button');
      browser.click('[data-routing-menu] [data-navigation-side-menu-action-header] button');
      browser.waitForVisible('[data-routing-menu]');

      Terra.validates.element({ selector: '#application-layout-test', axeRules: { rules: ignoredA11y } });
    });
  });

  describe('Presents utility menu from menu when small', () => {
    it('Presents utility menu from menu when small', () => {
      browser.waitForVisible('[data-application-menu-utility]');
      browser.click('[data-application-menu-utility]');

      Terra.validates.element({ selector: '#application-layout-test', axeRules: { rules: ignoredA11y } });
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

      Terra.validates.element({ selector: '#application-layout-test', axeRules: { rules: ignoredA11y } });
    });
  });
});
