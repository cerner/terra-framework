describe('Collapsible Menu View', () => {
  Terra.viewports().forEach((viewport) => {
    describe('Responsive', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-collapsible-menu-view/collapsible-menu-view/default-collapsible-menu-view');
        browser.setViewportSize(viewport);
      });

      Terra.it.matchesScreenshot();
      Terra.it.isAccessible();
    });
  });

  // Only test viewports that have collapsed menu items
  Terra.viewports('tiny', 'small', 'medium', 'large').forEach((viewport) => {
    describe('Responsive Hidden Open', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-collapsible-menu-view/collapsible-menu-view/default-collapsible-menu-view');
        browser.setViewportSize(viewport);
        browser.click('[data-collapsible-menu-toggle]');
      });

      Terra.it.matchesScreenshot({ selector: '#root' });
      Terra.it.isAccessible();
    });
  });

  describe('First hidden item visible when isIconOnly', () => {
    const viewports = Terra.viewports('medium');
    before(() => browser.url('/#/raw/tests/terra-collapsible-menu-view/collapsible-menu-view/first-hidden-item-is-icon'));
    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  Terra.viewports('tiny', 'large').forEach((viewport) => {
    describe('Responsive Single Item', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-collapsible-menu-view/collapsible-menu-view/collapsible-menu-view-single-item');
        browser.setViewportSize(viewport);
      });

      Terra.it.matchesScreenshot({ selector: '#root' });
      Terra.it.isAccessible();
    });
  });
});
