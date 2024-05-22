Terra.describeViewports('Navigation Side Menu', ['medium'], () => {
  describe('Default navigation side menu display', () => {
    it('Default navigation side menu display', () => {
      browser.url('/#/raw/tests/cerner-terra-framework-docs/navigation-side-menu/navigation-side-menu-default');
      $('#test-menu').waitForDisplayed();
      Terra.validates.element('navigation side menu display', { selector: '#test-menu' });
    });
  });

  describe('Default navigation side menu display with toolbar', () => {
    it('Default navigation side menu display with toolbar', () => {
      browser.url('/#/raw/tests/cerner-terra-framework-docs/navigation-side-menu/navigation-side-menu-default-with-toolbar');
      $('#test-menu').waitForDisplayed();
      Terra.validates.element('navigation side menu display with toolbar', { selector: '#test-menu' });
    });
  });

  describe('Hover navigation side menu display', () => {
    it('Hover navigation side menu display', () => {
      browser.url('/#/raw/tests/cerner-terra-framework-docs/navigation-side-menu/navigation-side-menu-default');
      $('#test-menu').waitForDisplayed();
      $('#test-menu #test-item-1').moveTo();
      Terra.validates.element('hover navigation side menu display', { selector: '#test-menu' });
    });
  });

  describe('Selected navigation side menu display', () => {
    it('Selected navigation side menu display', () => {
      browser.url('/#/raw/tests/cerner-terra-framework-docs/navigation-side-menu/navigation-side-menu-default');
      $('#test-menu').waitForDisplayed();
      $('#test-menu #test-item-1').moveTo();
      $('#test-menu #test-item-1').click();
      $('#test-menu #test-item-2').click();
      Terra.validates.element('selected navigation side menu display', { selector: '#test-menu' });
    });
  });

  describe('isRootMenu navigation side menu display', () => {
    it('isRootMenu navigation side menu display', () => {
      browser.url('/#/raw/tests/cerner-terra-framework-docs/navigation-side-menu/navigation-side-menu-root');
      $('#test-menu').waitForDisplayed();
      Terra.validates.element('isRootMenu navigation side menu display', { selector: '#test-menu' });
    });
  });

  describe('Keyboard Navigation Using Arrow Keys', () => {
    before(() => browser.url('/#/raw/tests/cerner-terra-framework-docs/navigation-side-menu/navigation-side-menu-default'));

    it('Navigates to first menu item', () => {
      browser.keys(['Tab', 'ArrowDown']);
      Terra.validates.element('first menu item focused', { selector: '#root' });
    });

    it('Navigate to submenu with right arrow', () => {
      browser.keys(['ArrowRight']);
      Terra.validates.element('submenu header focused with right arrow', { selector: '#root' });
    });

    it('Navigate to menu item with left arrow', () => {
      browser.keys(['ArrowDown', 'ArrowLeft']);
      Terra.validates.element('first menu item focused with left arrow', { selector: '#root' });
    });

    it('should focus on second menu item', () => {
      browser.keys(['ArrowDown']);
      Terra.validates.element('second menu item focused', { selector: '#root' });
    });
  });
});

Terra.describeViewports('DrillIn View', ['medium'], () => {
  describe('DrillIn display', () => {
    it('Default DrillIn view display', () => {
      browser.url('/#/raw/tests/cerner-terra-framework-docs/navigation-side-menu/drill-in');
      $('#test-menu').waitForDisplayed();
      Terra.validates.element('drill-in display', { selector: '#test-menu' });
    });
  });

  describe('Hover DrillIn display', () => {
    it('Hover DrillIn display', () => {
      browser.url('/#/raw/tests/cerner-terra-framework-docs/navigation-side-menu/drill-in');
      $('#test-menu').waitForDisplayed();
      $('#test-menu #test-item-1').moveTo();
      Terra.validates.element('hover drill-in display', { selector: '#test-menu' });
    });
  });

  describe('Selected DrillIn display', () => {
    it('Selected DrillIn display', () => {
      browser.url('/#/raw/tests/cerner-terra-framework-docs/navigation-side-menu/drill-in');
      $('#test-menu').waitForDisplayed();
      $('#test-menu #test-item-1').moveTo();
      $('#test-menu #test-item-1').click();
      $('#test-menu #test-item-2').click();
      Terra.validates.element('selected drill-in display', { selector: '#test-menu' });
    });
  });

  describe('DrillIn keyboard Navigation using Arrow Keys', () => {
    before(() => browser.url('/#/raw/tests/cerner-terra-framework-docs/navigation-side-menu/drill-in'));

    it('Navigates to first DrillIn item', () => {
      browser.keys(['Tab', 'ArrowDown']);
      Terra.validates.element('first drill-in item focused', { selector: '#root' });
    });

    it('Navigate into folder with right arrow', () => {
      browser.keys(['ArrowRight']);
      Terra.validates.element('displays drill-in items in folder with right arrow', { selector: '#root' });
    });

    it('Navigate to DrillIn item with left arrow', () => {
      browser.keys(['ArrowDown', 'ArrowLeft']);
      Terra.validates.element('first drill-in item focused with left arrow', { selector: '#root' });
    });

    it('should focus on second DrillIn item', () => {
      browser.keys(['ArrowDown']);
      Terra.validates.element('second drill-in item focused', { selector: '#root' });
    });
  });

  describe('DrillIn status display for folder with no items', () => {
    it('Navigates into folder with no items', () => {
      browser.url('/#/raw/tests/cerner-terra-framework-docs/navigation-side-menu/drill-in');
      browser.keys(['Tab', 'ArrowDown', 'ArrowRight', 'ArrowDown', 'ArrowDown', 'ArrowDown', 'ArrowRight',
        'ArrowDown', 'ArrowDown', 'ArrowDown', 'ArrowRight']);
      Terra.validates.element('displays no results status-view', { selector: '#root' });
    });

    it('Should display custom status for folder with no items', () => {
      browser.url('/#/raw/tests/cerner-terra-framework-docs/navigation-side-menu/drill-in');
      browser.keys(['Tab', 'ArrowDown', 'ArrowDown', 'ArrowDown', 'ArrowDown', 'ArrowDown', 'ArrowRight']);
      Terra.validates.element('displays no results custom status', { selector: '#root' });
    });

    it('Should display custom status when Loading is true and data when loading is false', () => {
      browser.url('/#/raw/tests/cerner-terra-framework-docs/navigation-side-menu/drill-in');
      browser.keys(['Tab', 'ArrowDown', 'ArrowRight', 'ArrowDown', 'ArrowDown', 'ArrowDown']);
      browser.keys(['ArrowRight', 'ArrowDown', 'ArrowDown', 'ArrowRight']);
      Terra.validates.element('displays loading status', { selector: '#root' });
      browser.pause(1000);
      Terra.validates.element('displays data after loading', { selector: '#root' });
    });
  });
});

