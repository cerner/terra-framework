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

  describe('cell focus and select styling', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/compact-interactive-list/cell-content');
    });

    it('should apply focus and selection styling to cells', () => {
      browser.keys(['Tab', 'Space', 'ArrowRight']);
      Terra.validates.element('selected-and-focused-cells', { selector: '#compact-interactive-list-cell-content' });
    });

    it('should apply focus styling to the interactive element in the cell', () => {
      browser.keys(['Tab', 'ArrowRight', 'ArrowRight']);
      Terra.validates.element('focused-button-in-cell', { selector: '#compact-interactive-list-cell-content' });
    });
  });

  describe('rowHeight', () => {
    it('should render rows of specific height for vertical flow', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/compact-interactive-list/row-height-vertical-flow');
      Terra.validates.element('row-height-vertical-flow', { selector: '#compact-interactive-list-row-height-vertical' });
    });

    it('should render rows of specific height for horizontal flow', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/compact-interactive-list/row-height-horizontal-flow');
      Terra.validates.element('row-height-horizontal-flow', { selector: '#compact-interactive-list-row-height-horizontal' });
    });
  });
});
