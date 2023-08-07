const selector = '#default-terra-worklist-data-grid';

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

const clickCell = (row, col) => {
  browser.$$('#default-terra-worklist-data-grid tr')[row].$(`:nth-child(${col + 1})`).click();
};

Terra.describeViewports('WorklistDataGrid', ['medium', 'large'], () => {
  describe('with keyboard navigation', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/worklist-data-grid/default-worklist-data-grid');
    });

    it('tabs into the grid', () => {
      browser.keys(['Tab']);

      Terra.validates.element('first-cell-in-grid-focused', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('tabs in and shift tab out of the grid', () => {
      browser.keys(['Tab', 'Shift', 'Tab', 'Shift']);

      Terra.validates.element('tab-selection-off-grid', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('tabs forward out of the grid', () => {
      browser.keys(['Tab', 'Tab']);

      Terra.validates.element('tab-selection-off-grid', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('uses arrow keys to navigate', () => {
      browser.keys(['Tab']
        .concat(new Array(2).fill('ArrowDown'))
        .concat(new Array(2).fill('ArrowRight'))
        .concat(new Array(1).fill('ArrowUp'))
        .concat(new Array(1).fill('ArrowLeft')));

      browser.pause(150);
      Terra.validates.element('arrow-key-navigation', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('validates that the up arrow key cannot navigate outside the grid', () => {
      browser.keys(['Tab']
        .concat(new Array(3).fill('ArrowUp')));

      browser.pause(150);
      Terra.validates.element('first-cell-in-grid-focused', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('validates that the left arrow key cannot navigate outside the grid', () => {
      browser.keys(['Tab']
        .concat(new Array(2).fill('ArrowLeft')));

      browser.pause(150);
      Terra.validates.element('first-cell-in-grid-focused', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('validates that Control + Home goes to first non-header cell', () => {
      browser.keys(['Tab']
        .concat(new Array(2).fill('ArrowDown'))
        .concat(new Array(2).fill('ArrowRight'))
        .concat(['Control', 'Home', 'Control']));

      browser.pause(150);
      Terra.validates.element('first-non-column-header-cell-focused', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('validates that the Home key goes to the first cell in current row', () => {
      browser.keys(['Tab']
        .concat(new Array(2).fill('ArrowDown'))
        .concat(new Array(2).fill('ArrowRight'))
        .concat(['Home']));

      browser.pause(150);
      Terra.validates.element('first-cell-in-row-focused', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('validates that the End key goes to the last cell in current row', () => {
      browser.keys(['Tab', 'ArrowDown', 'End']);

      browser.pause(150);
      Terra.validates.element('last-cell-in-row-focused', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('validates that Control + End key goes to the last cell in the grid', () => {
      browser.keys(['Tab']
        .concat(['Control', 'End', 'Control']));

      browser.pause(150);
      Terra.validates.element('last-cell-in-last-row-focused', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('validates that the down arrow key cannot navigate outside the grid', () => {
      browser.keys(['Tab']
        .concat(['Control', 'End', 'Control'])
        .concat(new Array(2).fill('ArrowDown')));

      browser.pause(150);
      Terra.validates.element('last-cell-in-last-row-focused', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('validates that the right arrow key cannot navigate outside the grid', () => {
      browser.keys(['Tab']
        .concat(['Control', 'End', 'Control'])
        .concat(new Array(2).fill('ArrowRight')));

      browser.pause(150);
      Terra.validates.element('last-cell-in-last-row-focused', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });
  });

  describe('Cell selection : ', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/worklist-data-grid/default-worklist-data-grid');
    });

    it('selects the current cell with spacebar', () => {
      navigateToCell(1, 1);
      browser.keys(['Space']);

      Terra.validates.element('selection-and-focus-on-1-1', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('validates that selecting an already selected cell has no effect', () => {
      navigateToCell(1, 1);
      browser.keys(['Space', 'Space']);

      Terra.validates.element('selection-and-focus-on-1-1', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('validates that navigating the grid does not change the selected cell', () => {
      navigateToCell(1, 1);
      browser.keys(['Space']);
      moveCurrentPositionBy(2, 0);

      Terra.validates.element('selection-1-1-focus-3-1', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('validates that selecting another cell moves the selection and focus to current cell', () => {
      navigateToCell(1, 1);
      browser.keys(['Space']);
      moveCurrentPositionBy(2, 0);
      browser.keys(['Space']);

      Terra.validates.element('selection-3-1-focus-3-1', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('validates that clicking on a cell, moves selection and focus to that cell', () => {
      clickCell(3, 1);

      Terra.validates.element('selection-3-1-focus-3-1-with-hover', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('validates that navigation does not change cell selected via mouse click', () => {
      clickCell(3, 1);
      moveCurrentPositionBy(-2, -1);

      Terra.validates.element('selection-3-1-focus-1-0', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('validates that mouse click moves selection and focus to clicked cell', () => {
      clickCell(3, 1); // Selection and Focus is on (3,1)
      clickCell(4, 2); // Selection and Focus should move to (4,2)

      Terra.validates.element('selection-4-2-focus-4-2', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('clears selection with Esc key', () => {
      clickCell(3, 1);
      browser.keys(['Escape']);

      Terra.validates.element('cell-3-1-focused', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });
  });

  describe('With row selection', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/worklist-data-grid/worklist-data-grid-with-row-selection');
    });

    it('verifies that first tab into grid focuses on the checkbox', () => {
      browser.keys(['Tab']);

      Terra.validates.element('row-1-checkbox-focused-row-selection-mode', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('navigates to last cell with Control + End key', () => {
      rowSelectionNavigateToCell(4, 3);
      browser.keys(['Control', 'End', 'Control']);

      Terra.validates.element('last-cell-focused-row-selection-mode', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('navigates to first non-header cell with Control + Home key', () => {
      rowSelectionNavigateToCell(4, 3);
      browser.keys(['Control', 'Home', 'Control']);

      Terra.validates.element('row-1-checkbox-focused-row-selection-mode', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('selects the entire row with spacebar', () => {
      rowSelectionNavigateToCell(4, 3);
      browser.keys(['Space']);

      Terra.validates.element('row-4-selected-row-selection-mode', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('unselects an already selected row with spacebar', () => {
      rowSelectionNavigateToCell(1, 3);
      browser.keys(['Space']); // Row 1 now selected
      moveCurrentPositionBy(3, 2); // Cell (4,5)
      browser.keys(['Space']); // Row 4 now selected

      // Two rows selected. Move up and unselect the first.
      moveCurrentPositionBy(-3, -2);
      browser.keys(['Space']); // unselect row 1

      Terra.validates.element('row-4-selected-after-unselect-row-selection-mode', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('can still navigate when a row is selected', () => {
      rowSelectionNavigateToCell(1, 3);
      browser.keys(['Space']); // Row 1 now selected
      moveCurrentPositionBy(3, 2); // Cell (4,5)

      Terra.validates.element('row-1-selected-cell-4-5-focused-row-selection-mode', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('selects all rows with Control + A', () => {
      rowSelectionNavigateToCell(3, 2);
      browser.keys(['Control', 'A', 'Control']);

      Terra.validates.element('all-rows-selected-row-selection-mode', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('clears all selected rows with Esc', () => {
      rowSelectionNavigateToCell(1, 2);
      browser.keys(['Space']); // Row 1 selected
      moveCurrentPositionBy(1, 0);
      browser.keys(['Space']); // Row 2 selected
      browser.keys(['Escape']); // clear both selected rows

      Terra.validates.element('no-rows-selected-row-selection-mode', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('clears row selection mode when no rows are selected', () => {
      rowSelectionNavigateToCell(4, 1);
      browser.keys(['Escape']); // clears row selection mode

      Terra.validates.element('row-selection-mode-off-cell-4-1-focused', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('selects a row by clicking inside that row', () => {
      clickCell(3, 1);

      Terra.validates.element('row-3-selected-row-selection-mode', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('unselects a selected row by clicking in that row', () => {
      clickCell(3, 2);
      clickCell(3, 4);

      Terra.validates.element('no-rows-selected-after-click-row-selection-mode', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('hovers over selectable cell in worklist data grid', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/worklist-data-grid/worklist-data-grid-with-selections');

      browser.$$('td[class*="worklist-data-grid-cell"][class*="selectable"]')[0].moveTo();
      browser.pause(2000);
      Terra.validates.element('hover-selectable-cell', '#terra-worklist-data-grid-with-selections');
    });

    it('hovers over non-selectable cell in worklist data grid', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/worklist-data-grid/worklist-data-grid-with-selections');

      browser.$$('td[class*="worklist-data-grid-cell"]:not([class*="selectable"])')[0].moveTo();
      browser.pause(2000);
      Terra.validates.element('hover-non-selectable-cell', '#terra-worklist-data-grid-with-selections');
    });
  });

  describe('Focusable Cell Navigation : ', () => {
    const columnResizeSelector = '#terra-worklist-data-grid-focusable-cell';

    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/worklist-data-grid/worklist-data-grid-focusable-cell');
    });

    it('validates that a cell with no focusable elements does not trap focus', () => {
      browser.keys(['Tab', 'ArrowDown', 'Enter', 'ArrowRight']);

      Terra.validates.element('non-focusable-cell-no-trap', { columnResizeSelector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('validates that a cell with a button element traps focus', () => {
      browser.keys(['Tab', 'ArrowDown', 'ArrowRight', 'Enter', 'ArrowRight']);

      Terra.validates.element('focusable-button-cell-trap-focus', { columnResizeSelector });
      expect(browser.$$('button:focus')).toBeElementsArrayOfSize(1);
    });

    it('validates that Escape can be used to release a focus trap', () => {
      browser.keys(['Tab', 'ArrowDown', 'ArrowRight', 'Enter', 'Escape']);

      Terra.validates.element('focusable-button-cell-escape-trap', { columnResizeSelector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('validates that a cell with an input element traps focus', () => {
      browser.keys(['Tab', 'ArrowDown', 'ArrowRight', 'ArrowRight', 'Enter', 'ArrowRight']);

      Terra.validates.element('focusable-input-cell-trap-focus', { columnResizeSelector });
      expect(browser.$$('input:focus')).toBeElementsArrayOfSize(1);
    });

    it('validates that a cell with an anchor element with href traps focus', () => {
      browser.keys(['Tab', 'ArrowDown', 'ArrowRight', 'ArrowRight', 'ArrowRight', 'Enter', 'ArrowRight']);

      Terra.validates.element('focusable-anchor-cell-trap-focus', { columnResizeSelector });
      expect(browser.$$('a:focus')).toBeElementsArrayOfSize(1);
    });

    it('validates that acell with multiple focusable elements traps focus', () => {
      browser.keys(['Tab', 'ArrowDown', 'ArrowDown', 'ArrowRight', 'Enter', 'ArrowRight']);

      Terra.validates.element('focusable-multiple-element-cell-trap-focus', { columnResizeSelector });
      expect(browser.$$('button:focus')).toBeElementsArrayOfSize(1);
    });

    it('validates that a cell with multiple focusable elements can be navigated via Tab', () => {
      browser.keys(['Tab', 'ArrowDown', 'ArrowDown', 'ArrowRight', 'Enter', 'Tab']);

      Terra.validates.element('focusable-multiple-element-cell-tab-navigate', { columnResizeSelector });
      expect(browser.$$('input:focus')).toBeElementsArrayOfSize(1);
    });

    it('validates that a cell with a select element traps focus', () => {
      browser.keys(['Tab', 'ArrowDown', 'ArrowDown', 'ArrowRight', 'ArrowRight', 'Enter', 'ArrowRight']);

      Terra.validates.element('focusable-select-cell-trap-focus', { columnResizeSelector });
      expect(browser.$$('select:focus')).toBeElementsArrayOfSize(1);
    });

    it('validates that a cell with a text area element traps focus', () => {
      browser.keys(['Tab', 'ArrowDown', 'ArrowDown', 'ArrowRight', 'ArrowRight', 'ArrowRight', 'Enter', 'ArrowRight']);

      Terra.validates.element('focusable-textarea-cell-trap-focus', { columnResizeSelector });
      expect(browser.$$('textarea:focus')).toBeElementsArrayOfSize(1);
    });
  });
});
