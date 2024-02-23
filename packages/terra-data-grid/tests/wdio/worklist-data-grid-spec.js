const defaultSelector = '#default-terra-worklist-data-grid-table';

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
  moveCurrentPositionBy(row > 0 ? row : 0, col);
};

const clickCell = (row, col, selector) => {
  browser.$$(`${selector} tr`)[row].$(`td:nth-child(${col + 1}), th:nth-child(${col + 1})`).click();
};

const shiftClickCell = (row, col, selector) => {
  holdDownShiftKey();
  clickCell(row, col, selector);
  releaseKey();
};

Terra.describeViewports('WorklistDataGrid', ['medium', 'large'], () => {
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
  });

  describe('With row selection', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/worklist-data-grid-with-row-selection');
    });

    it('verifies that first tab into grid focuses on the row selection column header', () => {
      browser.keys(['Tab']);

      Terra.validates.element('row-selection-header-focused-row-selection-mode', { selector: defaultSelector });
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

      Terra.validates.element('row-selection-mode-off-cell-4-0-focused', { selector: defaultSelector });
    });

    it('focus remains on the grid when row selection mode is turned off from a row selection cell', () => {
      rowSelectionNavigateToCell(4, 0);
      browser.keys(['Escape']); // clears row selection mode

      Terra.validates.element('row-selection-mode-off-cell-4-0-focused', { selector: defaultSelector });
      expect(browser.$('[role="grid"] tbody tr:nth-of-type(4) th:nth-of-type(1)').isFocused()).toBe(true);
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

      browser.$$('td[class*="cell"][class*="selectable"]')[0].moveTo();
      browser.pause(2000);
      Terra.validates.element('hover-selectable-cell', '#terra-worklist-data-grid-with-selections');
    });

    it('hovers over non-selectable cell in worklist data grid', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/worklist-data-grid-with-selections');

      browser.$$('td[class*="cell"]:not([class*="selectable"])')[0].moveTo();
      browser.pause(2000);
      Terra.validates.element('hover-non-selectable-cell', '#terra-worklist-data-grid-with-selections');
    });

    it('hovers over selectable cell on an odd row when row selection is enabled', () => {
      browser.$$('tbody tr')[0].$$('td')[0].moveTo();
      browser.pause(2000);
      Terra.validates.element('hover-odd-row-selection', { selector: defaultSelector });
    });

    it('hovers over selectable cell on an even row when row selection is enabled', () => {
      browser.$$('tbody tr')[3].$$('td')[0].moveTo();
      browser.pause(2000);
      Terra.validates.element('hover-even-row-selection', { selector: defaultSelector });
    });

    it('hovers over selectable cell on an odd row when row selection is not enabled', () => {
      browser.keys(['Tab', 'Escape']);
      browser.$$('tbody tr')[0].$$('td')[0].moveTo();
      browser.pause(2000);
      Terra.validates.element('hover-odd-row-cell-selection', { selector: defaultSelector });
    });

    it('hovers over selectable cell on an even row when row selection is not enabled', () => {
      browser.keys(['Tab', 'Escape']);
      browser.$$('tbody tr')[3].$$('td')[0].moveTo();
      browser.pause(2000);
      Terra.validates.element('hover-even-row-cell-selection', { selector: defaultSelector });
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

  describe('row and column deletion', () => {
    const deleteRowsSelector = '#worklist-data-grid-delete-rows';
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/worklist-data-grid-delete-rows-and-columns');
    });

    it('retains the last selected row index when filtering rows', () => {
      clickCell(2, 1, deleteRowsSelector);
      clickCell(8, 1, deleteRowsSelector);
      clickCell(5, 1, deleteRowsSelector);

      browser.$('#filter-rows-button').click();
      browser.keys(['Tab']);

      expect(browser.$('tbody tr:nth-child(2) th').isFocused()).toBe(true);
    });

    it('uses the last focused row when the row is deleted and the index is not out of bounds after deletion', () => {
      clickCell(1, 1, deleteRowsSelector);
      holdDownShiftKey();
      clickCell(3, 1, deleteRowsSelector);

      browser.$('#delete-rows-button').click();
      browser.keys(['Tab', 'Tab']);

      expect(browser.$('tbody tr:nth-child(3) th').isFocused()).toBe(true);
    });

    it('focuses the last row when selected and the index is out of bounds after deletion', () => {
      clickCell(5, 1, deleteRowsSelector);
      holdDownShiftKey();
      clickCell(10, 1, deleteRowsSelector);

      browser.$('#delete-rows-button').click();
      browser.keys(['Tab', 'Tab']);
      expect(browser.$('tbody tr:last-child th').isFocused()).toBe(true);
    });

    // it('focuses on the last column when selected and the index is out of bounds', () => {
    //   clickCell(0, 2, deleteRowsSelector);
    //   clickCell(0, 2, deleteRowsSelector);
    //   clickCell(0, 2, deleteRowsSelector);

    //   browser.keys(['Shift', 'Tab']);
    //   expect(browser.$('thead th:nth-child(2)').isFocused()).toBe(true);
    // });
  });

  describe('with pinned columns', () => {
    const pinnedColumnsSelector = '#pinned-columns-table';
    const pinnedColumnsWithRowSelectionSelector = '#pinned-columns-with-row-selection-table';

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

  describe('Column actions', () => {
    it('validates rendering with proper styling', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/worklist-data-grid-column-actions');
      Terra.validates.element('column-actions');
    });

    it('validates action focus styling', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/worklist-data-grid-column-actions');
      navigateToCell(1, 0);
      Terra.validates.element('column-action-focus');
    });

    it('validates resize handle focus', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/worklist-data-grid-column-actions');
      navigateToCell(1, 1);
      Terra.validates.element('column-action-focus-on-resize-handle');
    });

    it('validates action placeholder focus', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/worklist-data-grid/worklist-data-grid-column-actions');
      navigateToCell(1, 2);
      Terra.validates.element('column-action-placeholder-focus');
    });
  });
});
