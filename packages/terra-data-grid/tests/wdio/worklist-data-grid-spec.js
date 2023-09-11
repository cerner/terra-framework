const defaultSelector = '#default-terra-worklist-data-grid';

const holdDownShiftKey = () => {
  browser.performActions([{
    type: 'key',
    id: 'keyboard',
    actions: [{ type: 'keyDown', value: '\uE008' }],
  }]);
};

const releaseKey = () => {
  browser.performActions([{
    type: 'key',
    id: 'keyboard',
    actions: [{ type: 'keyUp', value: '\uE008' }],
  }]);
};

const moveCurrentPositionBy = (row, col) => browser.keys(
  new Array(Math.abs(row)).fill(row > 0 ? 'ArrowDown' : 'ArrowUp')
    .concat(new Array(Math.abs(col)).fill(col > 0 ? 'ArrowRight' : 'ArrowLeft')),
);

const navigateToCell = (row, col) => {
  // When row selection mode is off, tabbing into the grid goes to (0,0)
  browser.keys(['Tab']);
  moveCurrentPositionBy(row, col);
};

const rowSelectionNavigateToCell = (row, col) => {
  browser.keys(['Tab']);
  moveCurrentPositionBy(row > 0 ? row - 1 : 0, col);
};

const clickCell = (row, col, selector) => {
  browser.$$(`${selector} tr`)[row].$(`:nth-child(${col + 1})`).click();
};

const shiftClickCell = (row, col, selector) => {
  holdDownShiftKey();
  clickCell(row, col, selector);
  releaseKey();
};

Terra.describeViewports('WorklistDataGrid', ['medium', 'large'], () => {
  describe('with keyboard navigation', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/default-worklist-data-grid');
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

  describe('Cell selection : ', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/default-worklist-data-grid');
    });

    it('selects the current cell with spacebar', () => {
      navigateToCell(1, 1);
      browser.keys(['Space']);

      Terra.validates.element('selection-and-focus-on-1-1', { selector: defaultSelector });
    });

    it('validates that navigating the grid does not change the selected cell', () => {
      navigateToCell(1, 1);
      browser.keys(['Space']);
      moveCurrentPositionBy(2, 0);

      Terra.validates.element('selection-1-1-focus-3-1', { selector: defaultSelector });
    });

    it('validates that selecting another cell moves the selection and focus to current cell', () => {
      navigateToCell(1, 1);
      browser.keys(['Space']);
      moveCurrentPositionBy(2, 0);
      browser.keys(['Space']);

      Terra.validates.element('selection-3-1-focus-3-1', { selector: defaultSelector });
    });

    it('validates that clicking on a cell, moves selection and focus to that cell', () => {
      clickCell(3, 1, defaultSelector);

      Terra.validates.element('selection-3-1-focus-3-1-with-hover', { selector: defaultSelector });
    });

    it('validates that navigation does not change cell selected via mouse click', () => {
      clickCell(3, 1, defaultSelector);
      moveCurrentPositionBy(-2, -1);

      Terra.validates.element('selection-3-1-focus-1-0', { selector: defaultSelector });
    });

    it('validates that mouse click moves selection and focus to clicked cell', () => {
      clickCell(3, 1, defaultSelector); // Selection and Focus is on (3,1)
      clickCell(4, 2, defaultSelector); // Selection and Focus should move to (4,2)

      Terra.validates.element('selection-4-2-focus-4-2', { selector: defaultSelector });
    });

    it('clears selection with Esc key', () => {
      clickCell(3, 1, defaultSelector);
      browser.keys(['Escape']);

      Terra.validates.element('cell-3-1-focused', { selector: defaultSelector });
    });

    it('hovers over selectable cell on an even row', () => {
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

  describe('With row selection', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/worklist-data-grid-with-row-selection');
    });

    it('verifies that first tab into grid focuses on the checkbox', () => {
      browser.keys(['Tab']);

      Terra.validates.element('row-1-checkbox-focused-row-selection-mode', { selector: defaultSelector });
    });

    it('navigates to last cell with Control + End key', () => {
      rowSelectionNavigateToCell(4, 3);
      browser.keys(['Control', 'End', 'Control']);

      Terra.validates.element('last-cell-focused-row-selection-mode', { selector: defaultSelector });
    });

    it('navigates to first non-header cell with Control + Home key', () => {
      rowSelectionNavigateToCell(4, 3);
      browser.keys(['Control', 'Home', 'Control']);

      Terra.validates.element('row-1-checkbox-focused-row-selection-mode', { selector: defaultSelector });
    });

    it('selects the entire row with spacebar', () => {
      rowSelectionNavigateToCell(4, 3);
      browser.keys(['Space']);

      Terra.validates.element('row-4-selected-row-selection-mode', { selector: defaultSelector });
    });

    it('unselects an already selected row with spacebar', () => {
      rowSelectionNavigateToCell(1, 3);
      browser.keys(['Space']); // Row 1 now selected
      moveCurrentPositionBy(3, 2); // Cell (4,5)
      browser.keys(['Space']); // Row 4 now selected

      // Two rows selected. Move up and unselect the first.
      moveCurrentPositionBy(-3, -2);
      browser.keys(['Space']); // unselect row 1

      Terra.validates.element('row-4-selected-after-unselect-row-selection-mode', { selector: defaultSelector });
    });

    it('can still navigate when a row is selected', () => {
      rowSelectionNavigateToCell(1, 3);
      browser.keys(['Space']); // Row 1 now selected
      moveCurrentPositionBy(3, 2); // Cell (4,5)

      Terra.validates.element('row-1-selected-cell-4-5-focused-row-selection-mode', { selector: defaultSelector });
    });

    it('selects all rows with Control + A', () => {
      rowSelectionNavigateToCell(3, 2);
      browser.keys(['Control', 'A', 'Control']);

      Terra.validates.element('all-rows-selected-row-selection-mode', { selector: defaultSelector });
    });

    it('clears all selected rows with Esc', () => {
      rowSelectionNavigateToCell(1, 2);
      browser.keys(['Space']); // Row 1 selected
      moveCurrentPositionBy(1, 0);
      browser.keys(['Space']); // Row 2 selected
      browser.keys(['Escape']); // clear both selected rows

      Terra.validates.element('no-rows-selected-row-selection-mode', { selector: defaultSelector });
    });

    it('clears row selection mode when no rows are selected', () => {
      rowSelectionNavigateToCell(4, 1);
      browser.keys(['Escape']); // clears row selection mode

      Terra.validates.element('row-selection-mode-off-cell-4-1-focused', { selector: defaultSelector });
    });

    it('selects a row by clicking inside that row', () => {
      clickCell(3, 1, defaultSelector);

      Terra.validates.element('row-3-selected-row-selection-mode', { selector: defaultSelector });
    });

    it('unselects a selected row by clicking in that row', () => {
      clickCell(3, 2, defaultSelector);
      clickCell(3, 4, defaultSelector);

      Terra.validates.element('no-rows-selected-after-click-row-selection-mode', { selector: defaultSelector });
    });

    it('hovers over selectable cell in worklist data grid', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/worklist-data-grid-with-selections');

      browser.$$('td[class*="worklist-data-grid-cell"][class*="selectable"]')[0].moveTo();
      browser.pause(2000);
      Terra.validates.element('hover-selectable-cell', '#terra-worklist-data-grid-with-selections');
    });

    it('hovers over selectable cell in worklist data grid', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/worklist-data-grid-with-selections');

      browser.$$('td[class*="worklist-data-grid-cell"][class*="selectable"]')[0].moveTo();
      browser.pause(2000);
      Terra.validates.element('hover-selectable-cell', '#terra-worklist-data-grid-with-selections');
    });

    it('hovers over selectable cell on an even row', () => {
      browser.$$('tbody tr')[0].$$('td')[0].moveTo();
      browser.pause(2000);
      Terra.validates.element('hover-odd-row-selection', { selector: defaultSelector });
    });

    it('hovers over selectable cell on an even row', () => {
      browser.$$('tbody tr')[3].$$('td')[0].moveTo();
      browser.pause(2000);
      Terra.validates.element('hover-even-row-selection', { selector: defaultSelector });
    });

    it('enables row selection mode by Shift+Space when turned off', () => {
      browser.keys(['Tab', 'Escape']);
      rowSelectionNavigateToCell(3, 0);
      browser.keys(['Shift', 'Space', 'Shift']);

      Terra.validates.element('row-3-selected-without-hover-row-selection-mode', { selector: defaultSelector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('selects multiple rows after moving downwards from anchor row', () => {
      rowSelectionNavigateToCell(3, 2);
      browser.keys(['Shift', 'Space', 'Shift']);
      moveCurrentPositionBy(2, -1);
      browser.keys(['Shift', 'Space', 'Shift']);

      Terra.validates.element('row-3-to-5-selected-row-selection-mode', { selector: defaultSelector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('selects multiple rows after moving upwards from anchor row', () => {
      rowSelectionNavigateToCell(7, 2);
      browser.keys(['Shift', 'Space', 'Shift']);
      moveCurrentPositionBy(-4, 2);
      browser.keys(['Shift', 'Space', 'Shift']);

      Terra.validates.element('row-7-to-3-selected-row-selection-mode', { selector: defaultSelector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('selects rows only between anchor row and Shift + space row', () => {
      rowSelectionNavigateToCell(5, 2);
      browser.keys(['Shift', 'Space', 'Shift']);
      moveCurrentPositionBy(-2, 0);
      browser.keys(['Shift', 'Space', 'Shift']);
      moveCurrentPositionBy(5, 1);
      browser.keys(['Shift', 'Space', 'Shift']);

      Terra.validates.element('row-5-to-8-selected-row-selection-mode', { selector: defaultSelector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('validates that anchor row changes when a new row is selected individually via space', () => {
      rowSelectionNavigateToCell(5, 2);
      browser.keys(['Space']);
      shiftClickCell(3, 0, defaultSelector);
      clickCell(7, 1, defaultSelector);
      moveCurrentPositionBy(2, 2);
      browser.keys(['Shift', 'Space', 'Shift']);

      Terra.validates.element('row-multiple-ranges-selected-row-selection-mode', { selector: defaultSelector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    // Shift Up/Down
    it('enables row selection mode by Shift+Up when turned off', () => {
      browser.keys(['Tab', 'Escape']);
      rowSelectionNavigateToCell(3, 2);
      browser.keys(['Shift', 'ArrowUp', 'Shift']);

      Terra.validates.element('row-3-to-2-selected-row-selection-mode', { selector: defaultSelector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('enables row selection mode by Shift+Down when turned off', () => {
      browser.keys(['Tab', 'Escape']);
      rowSelectionNavigateToCell(3, 0);
      browser.keys(['Shift', 'ArrowDown', 'ArrowDown', 'Shift']);

      Terra.validates.element('row-3-to-5-selected-row-selection-mode', { selector: defaultSelector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('validates that shift Up/Down establishes new anchor each time after the shift key is released.', () => {
      rowSelectionNavigateToCell(5, 1);
      browser.keys(['Shift', 'ArrowUp', 'ArrowUp', 'Shift']);
      moveCurrentPositionBy(4, 1);
      browser.keys(['Shift', 'ArrowDown', 'ArrowDown', 'Shift']);

      Terra.validates.element('multiple-ranges-selected-row-selection-mode', { selector: defaultSelector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('validates that shift Up/Down establishes an anchor that can be used by subsequent shift+Space.', () => {
      rowSelectionNavigateToCell(4, 1);
      browser.keys(['Shift', 'ArrowDown', 'Shift']);
      moveCurrentPositionBy(3, 1);
      browser.keys(['Shift', 'Space', 'Shift']);

      Terra.validates.element('row-4-to-8-selected', { selector: defaultSelector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('validates that shift Up/Down replaces existing anchor.', () => {
      browser.keys(['Tab']);
      clickCell(2, 3, defaultSelector);
      moveCurrentPositionBy(2, 0);
      browser.keys(['Shift', 'ArrowDown', 'Shift']);
      moveCurrentPositionBy(3, 0);
      browser.keys(['Shift', 'Space', 'Shift']);

      Terra.validates.element('row-2-and-rows-4-to-8-selected', { selector: defaultSelector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('selects row when moving away from anchor and unselects rows when moving towards anchor', () => {
      rowSelectionNavigateToCell(5, 1);
      browser.keys(['Shift', 'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowDown', 'ArrowDown', 'Shift']);

      Terra.validates.element('moving-towards-anchor-unselects-rows-row-selection-mode', { selector: defaultSelector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    // Shift Click
    it('enables row selection mode by Shift+Click when turned off', () => {
      browser.keys(['Tab', 'Escape']);
      clickCell(3, 3, defaultSelector);
      shiftClickCell(5, 1, defaultSelector);

      Terra.validates.element('only-row-5-selected', { selector: defaultSelector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('select rows upwards of anchor row by Shift+Click', () => {
      clickCell(6, 4, defaultSelector);
      shiftClickCell(4, 2, defaultSelector);

      Terra.validates.element('row-4-to-6-selected-with-hover-row-selection-mode', { selector: defaultSelector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('select multiple batches of rows by Shift+Click', () => {
      clickCell(5, 2, defaultSelector);
      shiftClickCell(3, 1, defaultSelector);

      clickCell(7, 2, defaultSelector);
      shiftClickCell(9, 3, defaultSelector);

      Terra.validates.element('multiple-ranges-selected-with-hover-row-selection-mode', { selector: defaultSelector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('unselects rows when moving towards or across anchor row', () => {
      clickCell(5, 3, defaultSelector);

      holdDownShiftKey();

      clickCell(3, 4, defaultSelector);
      clickCell(9, 1, defaultSelector);

      releaseKey();

      Terra.validates.element('row-5-to-9-selected-with-hover-row-selection-mode', { selector: defaultSelector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });
  });

  describe('Focusable Cell Navigation : ', () => {
    const columnResizeSelector = '#terra-worklist-data-grid-focusable-cell';

    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/worklist-data-grid-focusable-cell');
    });

    it('validates that the proper grid element is selected when Tab is used to give initial focus to the grid', () => {
      browser.keys(['Tab', 'Tab']);

      Terra.validates.element('worklist-initial-focus', { columnResizeSelector });
      expect(browser.$('[role="grid"] thead tr:nth-of-type(1) th:nth-of-type(1)').isFocused());
    });

    it('validates that a Tab key press inside the grid will skip focusable cell elements', () => {
      browser.keys(['Tab', 'Tab', 'Tab']);

      Terra.validates.element('worklist-skip-focusable-elements-next', { columnResizeSelector });
      expect(browser.$('#next-focus-button').isFocused());
    });

    it('validates that a Shift+Tab key press while inside the grid will skip to the previous focusable element outside the grid', () => {
      browser.keys(['Tab', 'Tab', 'ArrowDown', 'ArrowDown', 'Shift', 'Tab', 'Shift']);

      Terra.validates.element('worklist-skip-focusable-elements-previous', { columnResizeSelector });
      expect(browser.$('#previous-focus-button').isFocused());
    });

    it('validates that the proper element is selected when Shift+Tab is used to give focus to the grid', () => {
      browser.keys(['Tab', 'Tab', 'Tab', 'Shift', 'Tab', 'Shift']);

      Terra.validates.element('worklist-return-focus', { columnResizeSelector });
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
  });

  describe('with pinned columns', () => {
    const pinnedColumnsSelector = '#pinned-columns';
    const pinnedColumnsWithRowSelectionSelector = '#pinned-columns-with-row-selection';

    it('validates that focused cells scroll into view when pinned columns exist', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/pinned-columns');

      browser.keys(['Tab', 'ArrowDown', 'ArrowRight', 'ArrowRight']);

      const testScript = 'document.querySelector(\'div[class*="worklist-data-grid-container"\').scrollBy(450,0)';
      browser.execute(testScript);

      browser.keys(['ArrowRight']);

      browser.pause(150);
      Terra.validates.element('pinned-column-scroll-fix', { selector: pinnedColumnsSelector });
    });

    it('adds pinned columns', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/pinned-columns');

      Terra.validates.element('pinned-columns', { selector: pinnedColumnsSelector });
    });

    it('keeps pinned columns stickied when scrolling', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/pinned-columns');
      navigateToCell(2, 1);
      moveCurrentPositionBy(0, 9);
      Terra.validates.element('pinned-columns-scroll', { selector: pinnedColumnsSelector });
    });

    it('selects the current cell with spacebar', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/pinned-columns');
      navigateToCell(1, 1);
      browser.keys(['Space']);

      Terra.validates.element('pinned-columns-selection-and-focus-on-1-1', { selector: pinnedColumnsSelector });
    });

    it('validates that navigating the grid does not change the selected cell', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/pinned-columns');
      navigateToCell(1, 1);
      browser.keys(['Space']);
      moveCurrentPositionBy(1, 0);

      Terra.validates.element('pinned-columns-selection-2-1-focus-2-1', { selector: pinnedColumnsSelector });
    });

    it('validates that selecting another cell moves the selection and focus to current cell', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/pinned-columns');
      navigateToCell(1, 1);
      browser.keys(['Space']);
      moveCurrentPositionBy(1, 0);
      browser.keys(['Space']);

      Terra.validates.element('pinned-columns-selection-change', { selector: pinnedColumnsSelector });
    });

    it('validates that clicking on a cell, moves selection and focus to that cell', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/pinned-columns');
      clickCell(1, 1, pinnedColumnsSelector);

      Terra.validates.element('pinned-columns-selection-1-1-focus-1-1-with-hover', { selector: pinnedColumnsSelector });
    });

    it('validates that mouse click moves selection and focus to clicked cell', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/pinned-columns');
      clickCell(0, 1, pinnedColumnsSelector); // Selection and Focus is on (0,1)
      clickCell(1, 2, pinnedColumnsSelector); // Selection and Focus should move to (1,2)

      Terra.validates.element('pinned-columns-selection-1-2-focus-1-2', { selector: pinnedColumnsSelector });
    });

    it('keeps row selection column stickied when scrolling', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/pinned-columns-with-row-selection');
      navigateToCell(2, 1);
      moveCurrentPositionBy(0, 9);
      Terra.validates.element('pinned-columns-with-row-selection-scroll', { selector: pinnedColumnsWithRowSelectionSelector });
    });

    it('selects the whole row with pinned columns', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/pinned-columns-with-row-selection');

      clickCell(2, 0, pinnedColumnsWithRowSelectionSelector);
      Terra.validates.element('pinned-columns-with-row-selection-select', { selector: pinnedColumnsWithRowSelectionSelector });
    });
  });

  describe('with sticky column header', () => {
    const stickyHeaderSelector = '#terra-worklist-data-grid-sticky';

    it('verifies that the table column header is fixed when scrolling', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/worklist-data-grid-sticky-header');
      navigateToCell(2, 1);
      moveCurrentPositionBy(6, 0);
      Terra.validates.element('sticky-header-scroll', { selector: stickyHeaderSelector });
    });

    it('validates that focused cells scroll into view when beneath sticky column header', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/worklist-data-grid-sticky-header');

      browser.keys(['Tab']);

      const testScript = 'document.querySelector(\'div[class*="worklist-data-grid-container"\').scrollBy(0,25)';
      browser.execute(testScript);

      browser.keys(['ArrowDown']);

      browser.pause(250);
      Terra.validates.element('sticky-header-scroll-fix', { selector: stickyHeaderSelector });
    });
  });
});
