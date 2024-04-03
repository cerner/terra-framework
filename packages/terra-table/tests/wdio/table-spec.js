Terra.describeViewports('Table', ['medium', 'large'], () => {
  describe('Default Table', () => {
    it('Validates the default table', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/table/default-table');
      Terra.validates.element('default-table', '#default-terra-table');
    });
  });

  describe('No Interaction Table', () => {
    it('Validates the default table is not interactable', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/table/no-interaction-table');
      browser.keys(['Tab']);
      expect($('#focused-button')).toBeFocused();

      Terra.validates.element('no-interaction-table', '#no-interaction-test-container');
    });
  });

  describe('Empty Table', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/table/table-with-no-rows');
    });

    it('verifies that a table renders with no rows', () => {
      Terra.validates.element('table-no-rows', '#table-with-no-rows');
    });
  });

  describe('Pinned Columns Table', () => {
    const pinnedColumnsSelector = '#table-pinned-columns';
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/table/table-pinned-columns');
    });

    it('adds pinned columns', () => {
      Terra.validates.element('pinned-columns', { selector: pinnedColumnsSelector });
    });

    it('keeps pinned columns stickied when scrolling', () => {
      const testScript = 'document.querySelector(\'div[class*="table-container"\').scrollBy(150,0)';
      browser.execute(testScript);
      Terra.validates.element('pinned-columns-scroll', { selector: pinnedColumnsSelector });
    });
  });

  describe('Sticky Header Table', () => {
    const stickyHeaderSelector = '#table-sticky-header';

    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/table/table-sticky-header');
    });

    it('verifies un-scrolled sticky header table', () => {
      Terra.validates.element('sticky-header-unscrolled', { selector: stickyHeaderSelector });
    });

    it('verifies that the table column header is fixed when scrolling', () => {
      const testScript = 'document.querySelector(\'div[class*="table-container"\').scrollBy(0, 15)';
      browser.execute(testScript);
      browser.pause(250);
      Terra.validates.element('sticky-header-scrolled', { selector: stickyHeaderSelector });
    });
  });

  describe('Sortable Table', () => {
    const sortableTableSelector = '#sortable-table';
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/table/sortable-table');
    });

    it('Validates the selectable column header is focusable', () => {
      browser.keys(['Tab']);
      Terra.validates.element('sortable-table-focused-header', { selector: sortableTableSelector });
    });

    it('Validates the selectable column header is sortable with keyboard', () => {
      browser.keys(['Tab', 'Space']);
      Terra.validates.element('sortable-table-keyboard', { selector: sortableTableSelector });
    });
  });

  describe('Table with Grid Context', () => {
    const tableWithGridContextSelector = '#terra-table-grid-context';

    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/table/table-with-grid-context');
    });

    it('Validates a cell is selectable and focused when clicked', () => {
      $('tbody tr:first-child td').click();
      Terra.validates.element('table-grid-context', { selector: tableWithGridContextSelector });
    });
  });

  describe('Table Without Header', () => {
    const tableWithoutHeadersSelector = '#table-without-headers';

    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/table/table-without-headers');
    });

    it('Renders a table without column headers', () => {
      Terra.validates.element('table-without-column-headers', { selector: tableWithoutHeadersSelector });
    });
  });

  describe('Zebra Striped Table', () => {
    const zebraStripeTableSelector = '#zebra-striped-table';

    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/table/zebra-striped-table');
    });

    it('Validates a table has zebra striping when specified via props', () => {
      Terra.validates.element('zebra-striped-table', { selector: zebraStripeTableSelector });
    });
  });

  describe('Focusable Cell Element Navigation : ', () => {
    const focusElementSelector = 'body';

    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/table/table-focusable-cell');
    });

    it('validates that the first interactive element in the table is given focus on tab', () => {
      browser.keys(['Tab']);

      expect(browser.$$('button:focus')).toBeElementsArrayOfSize(1);
      Terra.validates.element('table-focus-first-button', { columnResizeSelector: focusElementSelector });
    });

    it('validates that the second interactive element in the table is given focus with two tabs', () => {
      browser.keys(['Tab', 'Tab']);

      expect(browser.$$('input:focus')).toBeElementsArrayOfSize(1);
      Terra.validates.element('table-focus-input', { columnResizeSelector: focusElementSelector });
    });
  });

  describe('Scrollable Table', () => {
    const scrollableTableSelector = '#scroll-test-container';

    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/table/scrollable-table');
      browser.pause(100);
    });

    it('Validates first scrollable table receives focus', () => {
      browser.keys(['Tab']);
      expect($('#scroll-test-1')).toBeFocused();
      Terra.validates.element('scrollable-table-first-focus', { selector: scrollableTableSelector });
    });

    it('Validates second scrollable table receives focus', () => {
      browser.keys(['Tab', 'Tab']);
      expect($('#scroll-test-3')).toBeFocused();
      Terra.validates.element('scrollable-table-second-focus', { selector: scrollableTableSelector });
    });

    it('Validates table is scrollable vertically via arrow keys', () => {
      browser.keys(['Tab', 'ArrowDown', 'ArrowDown']);
      Terra.validates.element('scrollable-table-first-scroll', { selector: scrollableTableSelector });
    });

    it('Validates table is scrollable horizontally via arrow keys', () => {
      browser.keys(['Tab', 'Tab', 'ArrowRight', 'ArrowRight']);
      Terra.validates.element('scrollable-table-second-scroll', { selector: scrollableTableSelector });
    });
  });

  describe('Table with Sections', () => {
    const tableWithSectionsSelector = '#table-with-sections';

    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/table/table-with-sections');
    });

    it('Validates a table with sections', () => {
      Terra.validates.element('table-with-sections', { selector: tableWithSectionsSelector });
    });
  });

  describe('With row selection', () => {
    const rowSelectionTableSelector = '#table-with-row-selections';

    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/table/table-row-selection');
    });

    it('verifies that first row selection checkbox gets focus', () => {
      browser.keys(['Tab']);

      expect(browser.$$('input:focus')).toBeElementsArrayOfSize(1);
      Terra.validates.element('row-selection-first-row-checkbox-focused', { selector: rowSelectionTableSelector });
    });

    it('verifies that first row is selected', () => {
      browser.keys(['Tab', 'Space']);

      Terra.validates.element('row-selection-first-row-selected', { selector: rowSelectionTableSelector });
    });

    it('verifies that first row is unselected', () => {
      browser.keys(['Tab', 'Space', 'Space']);

      Terra.validates.element('row-selection-first-row-unselected', { selector: rowSelectionTableSelector });
    });

    it('verifies that multiple rows are selected', () => {
      browser.keys(['Tab', 'Space', 'Tab', 'Tab', 'Space']);

      Terra.validates.element('row-selection-multiple-selections', { selector: rowSelectionTableSelector });
    });

    it('validates hovering over a selectable row', () => {
      browser.$$('tbody tr')[0].$$('td')[2].moveTo();
      browser.pause(1000);
      Terra.validates.element('row-selection-hover', { selector: rowSelectionTableSelector });
    });

    it('validates hovering over a selectable row', () => {
      browser.$$('tbody tr')[0].$$('td')[2].click();
      Terra.validates.element('row-selection-cell-click', { selector: rowSelectionTableSelector });
    });

    it('validates hovering over a selectable row', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/table/table-row-selection?header-select=true');
      browser.keys(['Tab']);

      Terra.validates.element('row-selection-header-selectable', { selector: rowSelectionTableSelector });
    });

    it('verifies Home key selects first focusable element', () => {
      browser.keys(['Tab', 'Tab', 'Home']);

      Terra.validates.element('row-selection-home', { selector: rowSelectionTableSelector });
    });

    it('verifies that End key selects last focusable element', () => {
      browser.keys(['Tab', 'End']);

      Terra.validates.element('row-selection-end', { selector: rowSelectionTableSelector });
    });
  });

  describe('With single row selection', () => {
    const rowSelectionTableSelector = '#table-with-single-row-selection';

    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/table/table-single-row-selection');
    });

    it('validates hovering over a selectable row', () => {
      browser.$$('tbody tr')[0].$$('td')[0].moveTo();
      browser.pause(1000);
      Terra.validates.element('row-single-selection-hover', { selector: rowSelectionTableSelector });

      browser.$$('tbody tr')[0].$$('td')[0].click();
      Terra.validates.element('row-single-selection-cell-click', { selector: rowSelectionTableSelector });
    });

    it('validates right click on a selectable row does not select row', () => {
      browser.$$('tbody tr')[0].$$('td')[0].click({ button: 'right' });
      Terra.validates.element('row-single-selection-cell-right-click', { selector: rowSelectionTableSelector });
    });

    it('validates click on an interactive element in cell does not select row', () => {
      $('#button').click();
      Terra.validates.element('row-single-selection-cell-interactive-element-click', { selector: rowSelectionTableSelector });
    });
  });

  describe('Table with Large Text Data', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/table/table-with-large-data');
    });

    it('verifies that a table renders with large text cell data', () => {
      Terra.validates.element('table-large-text', '#table-with-large-text');
    });
  });

  describe('Table With Resizable Columns', () => {
    it('Validates the resizable table', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/table/table-with-resizable-columns');
      Terra.validates.element('resizable-table', '#resizable-terra-table');
    });
  });

  describe('Table with no row headers', () => {
    it('Validates table with no row headers', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/table/table-without-row-header');
      Terra.validates.element('table-without-row-header', '#table-without-row-header');
    });
  });

  describe('Auto Layoyut Table', () => {
    it('Validates the auto layout table', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/table/auto-layout-table');
      Terra.validates.element('auto-layout-table', '#auto-layout-table');
    });
  });
});
