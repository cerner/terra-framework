const defaultSelector = '#default-terra-data-grid';

const moveCurrentPositionBy = (row, col) => browser.keys(
  new Array(Math.abs(row)).fill(row > 0 ? 'ArrowDown' : 'ArrowUp')
    .concat(new Array(Math.abs(col)).fill(col > 0 ? 'ArrowRight' : 'ArrowLeft')),
);

const navigateToCell = (row, col) => {
  // When row selection mode is off, tabbing into the grid goes to (0,0)
  browser.keys(['Tab']);
  moveCurrentPositionBy(row, col);
};

Terra.describeViewports('DataGrid', ['medium', 'large'], () => {
  describe('Empty DataGrid', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/data-grid/data-grid-with-no-rows');
    });

    it('renders with no data rows', () => {
      browser.$$('thead tr')[0].$$('th')[0].moveTo(); // Explicitly hover over the first column to generate consistent screenshots.
      browser.keys(['Tab']); // Cell 0,0 gets focus
      browser.keys(['ArrowDown']); // Down Arrow should have no effect since there are no data rows.
      browser.keys(['ArrowRight']); // Cell 0,1 gets focus
      browser.pause(150);
      Terra.validates.element('second-column-cell-focused-in-empty-grid', '#terra-data-grid-with-no-rows');
    });
  });

  describe('with keyboard navigation', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/data-grid/default-data-grid');
    });

    it('uses arrow keys to navigate', () => {
      browser.keys(['Tab']
        .concat(new Array(2).fill('ArrowDown'))
        .concat(new Array(2).fill('ArrowRight'))
        .concat(new Array(1).fill('ArrowUp'))
        .concat(new Array(1).fill('ArrowLeft')));

      browser.pause(150);
      Terra.validates.element('arrow-key-navigation', { selector: defaultSelector });
    });

    it('validates that the up arrow key cannot navigate outside the grid', () => {
      browser.keys(['Tab']
        .concat(new Array(3).fill('ArrowUp')));

      browser.pause(150);
      Terra.validates.element('first-cell-in-grid-focused', { selector: defaultSelector });
    });

    it('validates that the left arrow key cannot navigate outside the grid', () => {
      browser.keys(['Tab']
        .concat(new Array(2).fill('ArrowLeft')));

      browser.pause(150);
      Terra.validates.element('first-cell-in-grid-focused', { selector: defaultSelector });
    });

    it('validates that Control + Home goes to first non-header cell', () => {
      browser.keys(['Tab']
        .concat(new Array(2).fill('ArrowDown'))
        .concat(new Array(2).fill('ArrowRight'))
        .concat(['Control', 'Home', 'Control']));

      browser.pause(150);
      Terra.validates.element('first-non-column-header-cell-focused', { selector: defaultSelector });
    });

    it('validates that the Home key goes to the first cell in current row', () => {
      browser.keys(['Tab']
        .concat(new Array(2).fill('ArrowDown'))
        .concat(new Array(2).fill('ArrowRight'))
        .concat(['Home']));

      browser.pause(150);
      Terra.validates.element('first-cell-in-row-focused', { selector: defaultSelector });
    });

    it('validates that the End key goes to the last cell in current row', () => {
      browser.keys(['Tab', 'ArrowDown', 'End']);

      browser.pause(150);
      Terra.validates.element('last-cell-in-row-focused', { selector: defaultSelector });
    });

    it('validates that Control + End key goes to the last cell in the grid', () => {
      browser.keys(['Tab']
        .concat(['Control', 'End', 'Control']));

      browser.pause(150);
      Terra.validates.element('last-cell-in-last-row-focused', { selector: defaultSelector });
    });

    it('validates that the down arrow key cannot navigate outside the grid', () => {
      browser.keys(['Tab']
        .concat(['Control', 'End', 'Control'])
        .concat(new Array(2).fill('ArrowDown')));

      browser.pause(150);
      Terra.validates.element('last-cell-in-last-row-focused', { selector: defaultSelector });
    });

    it('validates that the right arrow key cannot navigate outside the grid', () => {
      browser.keys(['Tab']
        .concat(['Control', 'End', 'Control'])
        .concat(new Array(2).fill('ArrowRight')));

      browser.pause(150);
      Terra.validates.element('last-cell-in-last-row-focused', { selector: defaultSelector });
    });
  });

  describe('with keyboard navigation', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/data-grid/default-data-grid');
    });

    it('hovers over selectable cell on an odd row', () => {
      browser.$$('tbody tr')[0].$$('td')[0].moveTo();
      browser.pause(2000);
      Terra.validates.element('hover-odd-row-cell-selection', { selector: defaultSelector });
    });

    it('hovers over selectable cell on an even row', () => {
      browser.$$('tbody tr')[3].$$('td')[0].moveTo();
      browser.pause(2000);
      Terra.validates.element('hover-even-row-cell-selection', { selector: defaultSelector });
    });
  });

  describe('Focusable Cell Navigation : ', () => {
    const columnResizeSelector = 'body';

    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/data-grid/data-grid-focusable-cell');
    });

    it('validates that the proper grid element is selected when Tab is used to give initial focus to the grid', () => {
      browser.keys(['Tab', 'Tab']);

      Terra.validates.element('data-grid-initial-focus', { columnResizeSelector });
      expect(browser.$('[role="grid"] thead tr:nth-of-type(1) th:nth-of-type(1)').isFocused());
    });

    it('validates that a Tab key press inside the grid will skip focusable cell elements', () => {
      browser.keys(['Tab', 'Tab', 'Tab']);

      Terra.validates.element('data-grid-skip-focusable-elements-next', { columnResizeSelector });
      expect(browser.$('#next-focus-button').isFocused());
    });

    it('validates that a Tab key press inside the grid as last focusable element wraps', () => {
      const testScript = 'document.getElementById("next-focus-button").style.display="none"';
      browser.execute(testScript);

      browser.pause(250);

      browser.keys(['Tab', 'Tab', 'Tab']);

      Terra.validates.element('data-grid-focusable-elements-wrap', { columnResizeSelector });
      expect(browser.$('#previous-focus-button').isFocused());
    });

    it('validates that a Shift+Tab key press while inside the grid will skip to the previous focusable element outside the grid', () => {
      browser.keys(['Tab', 'Tab', 'ArrowDown', 'ArrowDown', 'Shift', 'Tab', 'Shift']);

      Terra.validates.element('data-grid-skip-focusable-elements-previous', { columnResizeSelector });
      expect(browser.$('#previous-focus-button').isFocused());
    });

    it('validates that the proper element is selected when Shift+Tab is used to give focus to the grid', () => {
      browser.keys(['Tab', 'Tab', 'Tab', 'Shift', 'Tab', 'Shift']);

      Terra.validates.element('data-grid-return-focus', { columnResizeSelector });
      expect(browser.$('[role="grid"] thead tr:nth-of-type(1) th:nth-of-type(1)').isFocused());
    });

    it('validates that a cell with no focusable elements does not trap focus', () => {
      browser.keys(['Tab', 'Tab', 'ArrowDown', 'Enter', 'ArrowRight']);

      Terra.validates.element('non-focusable-cell-no-trap', { columnResizeSelector });
    });

    it('validates that a cell with a button element traps focus', () => {
      browser.keys(['Tab', 'Tab', 'ArrowDown', 'ArrowRight', 'Enter', 'ArrowRight']);

      Terra.validates.element('focusable-button-cell-trap-focus', { columnResizeSelector });
      expect(browser.$$('button:focus')).toBeElementsArrayOfSize(1);
    });

    it('validates that Escape can be used to release a focus trap', () => {
      browser.keys(['Tab', 'Tab', 'ArrowDown', 'ArrowRight', 'Enter', 'Escape']);

      Terra.validates.element('focusable-button-cell-escape-trap', { columnResizeSelector });
    });

    it('validates that a cell with an input element traps focus', () => {
      browser.keys(['Tab', 'Tab', 'ArrowDown', 'ArrowRight', 'ArrowRight', 'Enter', 'ArrowRight']);

      Terra.validates.element('focusable-input-cell-trap-focus', { columnResizeSelector });
      expect(browser.$$('input:focus')).toBeElementsArrayOfSize(1);
    });

    it('validates that a cell with an anchor element with href traps focus', () => {
      browser.keys(['Tab', 'Tab', 'ArrowDown', 'ArrowRight', 'ArrowRight', 'ArrowRight', 'Enter', 'ArrowRight']);

      Terra.validates.element('focusable-anchor-cell-trap-focus', { columnResizeSelector });
      expect(browser.$$('a:focus')).toBeElementsArrayOfSize(1);
    });

    it('validates that a cell with multiple focusable elements traps focus', () => {
      browser.keys(['Tab', 'Tab', 'ArrowDown', 'ArrowDown', 'ArrowRight', 'Enter', 'ArrowRight']);

      Terra.validates.element('focusable-multiple-element-cell-trap-focus', { columnResizeSelector });
      expect(browser.$$('button:focus')).toBeElementsArrayOfSize(1);
    });

    it('validates that a cell with a select element traps focus', () => {
      browser.keys(['Tab', 'Tab', 'ArrowDown', 'ArrowDown', 'ArrowRight', 'ArrowRight', 'Enter', 'ArrowLeft']);

      Terra.validates.element('focusable-select-cell-trap-focus', { columnResizeSelector });
      expect(browser.$$('select:focus')).toBeElementsArrayOfSize(1);
    });

    it('validates that a cell with a text area element traps focus', () => {
      browser.keys(['Tab', 'Tab', 'ArrowDown', 'ArrowDown', 'ArrowRight', 'ArrowRight', 'ArrowRight', 'Enter', 'ArrowRight']);

      Terra.validates.element('focusable-textarea-cell-trap-focus', { columnResizeSelector });
      expect(browser.$$('textarea:focus')).toBeElementsArrayOfSize(1);
    });

    it('validates that keyboard inputs will not move focus from an input field', () => {
      browser.$('#input-cell').click();

      browser.keys(['ArrowRight', 'ArrowLeft']);

      Terra.validates.element('data-grid-focusable-input-retains-focus', { columnResizeSelector });
      expect(browser.$('#input-cell').isFocused());
    });

    it('validates that keyboard inputs will not move focus from a textarea', () => {
      browser.$('#textarea-cell').click();

      browser.pause(250);

      browser.keys(['ArrowRight', 'ArrowLeft']);

      Terra.validates.element('data-grid-focusable-textarea-retains-focus', { columnResizeSelector });
      expect(browser.$('#textarea-cell').isFocused());
    });

    it('validates that keyboard inputs will not move focus from a select element', () => {
      browser.$('#specialties').click();

      browser.keys(['ArrowRight', 'ArrowLeft']);

      Terra.validates.element('data-grid-focusable-select-retains-focus', { columnResizeSelector });
      expect(browser.$('#specialties').isFocused());
    });
  });

  describe('with pinned columns', () => {
    const pinnedColumnsSelector = '#data-grid-pinned-columns';

    it('adds pinned columns', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/data-grid/data-grid-pinned-columns');

      Terra.validates.element('pinned-columns', { selector: pinnedColumnsSelector });
    });

    it('keeps pinned columns stickied when scrolling', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/data-grid/data-grid-pinned-columns');
      navigateToCell(2, 1);
      moveCurrentPositionBy(0, 9);
      Terra.validates.element('pinned-columns-scroll', { selector: pinnedColumnsSelector });
    });
  });

  describe('with sticky column header', () => {
    const stickyHeaderSelector = '#terra-data-grid-sticky';

    it('verifies that the table column header is fixed when scrolling', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/data-grid/data-grid-sticky-header');
      navigateToCell(2, 1);
      moveCurrentPositionBy(6, 0);
      Terra.validates.element('sticky-header-scroll', { selector: stickyHeaderSelector });
    });

    it('validates that focused cells scroll into view when beneath sticky column header', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/data-grid/data-grid-sticky-header');

      browser.keys(['Tab']);

      const testScript = 'document.querySelector(\'div[class*="data-grid-container"\').scrollBy(0,25)';
      browser.execute(testScript);

      browser.keys(['ArrowDown']);

      browser.pause(250);
      Terra.validates.element('sticky-header-scroll-fix', { selector: stickyHeaderSelector });
    });
  });
});
