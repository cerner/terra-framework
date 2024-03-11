Terra.describeViewports('CompactInteractiveList', ['medium', 'large'], () => {
  describe('fixed width columns', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/compact-interactive-list/fixed-width-columns');
    });

    it('should render correctly', () => {
      Terra.validates.element('fixed width columns');
    });
  });

  describe('responsive columns', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/compact-interactive-list/responsive-columns');
    });

    it('should render correctly', () => {
      Terra.validates.element('responsive columns');
    });
  });

  describe('responsive columns with max width', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/compact-interactive-list/responsive-columns-max-width');
    });

    it('should render correctly', () => {
      Terra.validates.element('responsive columns with max width');
    });
  });

  describe('scalable units', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/compact-interactive-list/scalable-units');
    });

    it('should render correctly', () => {
      Terra.validates.element('scalable units');
    });
  });

  describe('width breakpoints', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/compact-interactive-list/width-breakpoints');
    });

    it('should render correctly', () => {
      Terra.validates.element('width breakpoints');
    });
  });

  describe('horizontal flow', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/compact-interactive-list/width-breakpoints-horizontal-flow');
    });

    it('should render correctly', () => {
      Terra.validates.element('width breakpoints horizontal flow');
    });
  });

  describe('inconsistent width units', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/compact-interactive-list/inconsistent-width-units');
    });

    it('should remove width and maximumWidth properties if width unit type is inconsistent across the columns', () => {
      Terra.validates.element('inconsistent width units');
    });
  });
});

Terra.describeViewports('CompactInteractiveList', ['medium'], () => {
  describe('cell selection and focusing', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/compact-interactive-list/cell-content');
    });

    it('should apply focus and selection styling to cells', () => {
      browser.keys(['Tab', 'Space', 'ArrowRight']);
      Terra.validates.element('selected-and-focused-cells', { selector: '#compact-interactive-list-cell-content' });
    });

    it('should set focus to a button in a cell', () => {
      browser.keys(['Tab', 'ArrowDown', 'ArrowRight', 'ArrowRight']);
      Terra.validates.element('focused-button', { selector: '#compact-interactive-list-cell-content' });
    });

    it('should set focus to a hyperlink in a cell', () => {
      browser.keys(['Tab', 'ArrowDown', 'ArrowDown', 'ArrowRight', 'ArrowRight']);
      Terra.validates.element('focused-hyperlink', { selector: '#compact-interactive-list-cell-content' });
    });
  });

  describe('cell with menu, keyboard navigation', () => {
    it('should focus on menu buton', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/compact-interactive-list/cell-content');
      browser.keys(['Tab', 'ArrowRight', 'ArrowRight']);
      Terra.validates.element('focus-on-menu-button', { selector: '#compact-interactive-list-cell-content' });
    });

    it('should open menu on Enter', () => {
      browser.keys(['Enter']);
      Terra.validates.element('focus-on-menu-first-item', { selector: '#compact-interactive-list-cell-content' });
    });

    it('should select first menu item on Space', () => {
      // Arrow left or Arrow right doesn't move focus from menu item without submenu
      browser.keys(['ArrowLeft', 'ArrowRight']);
      // Select first item on Space
      browser.keys(['Space']);
      Terra.validates.element('focus-on-menu-first-item-selected', { selector: '#compact-interactive-list-cell-content' });
    });

    it('should open sub menu on Enter', () => {
      // Walk down one item and open sub menu on Enter
      browser.keys(['ArrowDown', 'Enter']);
      Terra.validates.element('focus-on-submenu-first-item', { selector: '#compact-interactive-list-cell-content' });
    });

    it('should returns to the first menu on Arrow Left', () => {
      browser.keys(['ArrowLeft']);
      Terra.validates.element('focus-on-menu-item-which-called-submenu', { selector: '#compact-interactive-list-cell-content' });
    });

    it('should close menu on Escape', () => {
      browser.keys(['Escape']);
      Terra.validates.element('focus-on-menu-button', { selector: '#compact-interactive-list-cell-content' });
    });

    it('should navigate to the next cell', () => {
      // Arrow right navigates to the next cell
      browser.keys(['ArrowRight']);
      Terra.validates.element('focus-on-featured-icon-cell', { selector: '#compact-interactive-list-cell-content' });
    });
  });

  describe('cell with menu, mouse interactions', () => {
    it('should open menu on click', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/compact-interactive-list/cell-content');
      $('#menu-button').click();
      Terra.validates.element('focus-on-menu-first-item', { selector: '#compact-interactive-list-cell-content' });
    });

    it('should select first menu item on click', () => {
      $('.MenuItem1').click();
      Terra.validates.element('focus-on-menu-first-item-selected', { selector: '#compact-interactive-list-cell-content' });
    });

    it('should open submenu on click and focus on the first submenu item', () => {
      $('.MenuItem2').click();
      Terra.validates.element('focus-on-submenu-first-item', { selector: '#compact-interactive-list-cell-content' });
    });
  });
});
