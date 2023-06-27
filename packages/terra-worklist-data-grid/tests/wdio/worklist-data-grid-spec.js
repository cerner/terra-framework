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

    it('tab into the grid', () => {
      browser.keys(['Tab']);

      Terra.validates.element('first-cell-in-grid-focused', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('tab back out of the grid', () => {
      browser.keys(['Tab', 'Shift', 'Tab', 'Shift']);

      Terra.validates.element('tab-selection-off-grid', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('tab forward out of the grid', () => {
      browser.keys(['Tab', 'Tab']);

      Terra.validates.element('tab-selection-off-grid', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('arrow keys', () => {
      browser.keys(['Tab']
        .concat(new Array(5).fill('ArrowDown'))
        .concat(new Array(6).fill('ArrowRight'))
        .concat(new Array(3).fill('ArrowUp'))
        .concat(new Array(2).fill('ArrowLeft')));

      Terra.validates.element('arrow-key-navigation', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('up arrow key cannot navigate outside grid', () => {
      browser.keys(['Tab']
        .concat(new Array(1).fill('ArrowDown'))
        .concat(new Array(3).fill('ArrowUp')));

      Terra.validates.element('first-cell-in-grid-focused', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('left arrow key cannot navigate outside grid', () => {
      browser.keys(['Tab']
        .concat(new Array(1).fill('ArrowDown'))
        .concat(new Array(3).fill('ArrowUp'))
        .concat(new Array(3).fill('ArrowLeft')));

      Terra.validates.element('first-cell-in-grid-focused', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('control with home key', () => {
      browser.keys(['Tab']
        .concat(new Array(4).fill('ArrowDown'))
        .concat(new Array(3).fill('ArrowRight'))
        .concat(['Control', 'Home', 'Control']));

      Terra.validates.element('first-non-column-header-cell-focused', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('home key', () => {
      browser.keys(['Tab']
        .concat(new Array(4).fill('ArrowDown'))
        .concat(new Array(3).fill('ArrowRight'))
        .concat(['Home']));

      Terra.validates.element('first-cell-in-row-focused', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('end key', () => {
      browser.keys(['Tab']
        .concat(new Array(4).fill('ArrowDown'))
        .concat(new Array(3).fill('ArrowRight'))
        .concat(['End']));

      Terra.validates.element('last-cell-in-row-focused', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('control with end key', () => {
      browser.keys(['Tab']
        .concat(new Array(4).fill('ArrowDown'))
        .concat(new Array(3).fill('ArrowRight'))
        .concat(['Control', 'End', 'Control']));

      Terra.validates.element('last-cell-in-last-row-focused', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('down arrow cannot navigate outside grid', () => {
      browser.keys(['Tab']
        .concat(['Control', 'End', 'Control'])
        .concat(new Array(3).fill('ArrowDown')));

      Terra.validates.element('last-cell-in-last-row-focused', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('right arrow cannot navigate outside grid', () => {
      browser.keys(['Tab']
        .concat(['Control', 'End', 'Control'])
        .concat(new Array(3).fill('ArrowRight')));

      Terra.validates.element('last-cell-in-last-row-focused', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });
  });

  describe('cell selection : ', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/worklist-data-grid/default-worklist-data-grid');
    });

    it('spacebar selects a cell', () => {
      navigateToCell(1, 1);
      browser.keys(['Space']);

      Terra.validates.element('selection-and-focus-on-1-1', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('selecting an already selected cell has no effect', () => {
      navigateToCell(1, 1);
      browser.keys(['Space', 'Space']);

      Terra.validates.element('selection-and-focus-on-1-1', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('navigating does not move selected cell', () => {
      navigateToCell(1, 1);
      browser.keys(['Space']);
      moveCurrentPositionBy(2, 0);

      Terra.validates.element('selection-1-1-focus-3-1', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('selecting another cell moves the selection and focus', () => {
      navigateToCell(1, 1);
      browser.keys(['Space']);
      moveCurrentPositionBy(2, 0);
      browser.keys(['Space']);

      Terra.validates.element('selection-3-1-focus-3-1', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('mouse click on a cell, moves selection and focus to that cell', () => {
      clickCell(3, 1);

      Terra.validates.element('selection-3-1-focus-3-1-with-hover', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('mouse click and navigate to another', () => {
      clickCell(3, 1);
      moveCurrentPositionBy(-2, -1);

      Terra.validates.element('selection-3-1-focus-1-0', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('mouse click moves selection and focus to that cell', () => {
      clickCell(3, 1); // Selection and Focus is on (3,1)
      clickCell(4, 2); // Selection and Focus should move to (4,2)

      Terra.validates.element('selection-4-2-focus-4-2', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('esc clears cell selection', () => {
      clickCell(3, 1);
      browser.keys(['Escape']);

      Terra.validates.element('cell-3-1-focused', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });
  });

  describe('with row selection', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/worklist-data-grid/worklist-data-grid-with-row-selection');
    });

    it('first tab into grid, focuses on the checkbox', () => {
      browser.keys(['Tab']);

      Terra.validates.element('row-1-checkbox-focused-row-selection-mode', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('control with end key', () => {
      rowSelectionNavigateToCell(4, 3);
      browser.keys(['Control', 'End', 'Control']);

      Terra.validates.element('last-cell-focused-row-selection-mode', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('control with home key', () => {
      rowSelectionNavigateToCell(4, 3);
      browser.keys(['Control', 'Home', 'Control']);

      Terra.validates.element('row-1-checkbox-focused-row-selection-mode', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('spacebar selects row', () => {
      rowSelectionNavigateToCell(4, 3);
      browser.keys(['Space']);

      Terra.validates.element('row-4-selected-row-selection-mode', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('spacebar unselects selected row', () => {
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

    it('navigate while row is selected', () => {
      rowSelectionNavigateToCell(1, 3);
      browser.keys(['Space']); // Row 1 now selected
      moveCurrentPositionBy(3, 2); // Cell (4,5)

      Terra.validates.element('row-1-selected-cell-4-5-focused-row-selection-mode', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('select all rows', () => {
      rowSelectionNavigateToCell(3, 2);
      browser.keys(['Control', 'A', 'Control']);

      Terra.validates.element('all-rows-selected-row-selection-mode', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('esc clears selected rows', () => {
      rowSelectionNavigateToCell(1, 2);
      browser.keys(['Space']); // Row 1 selected
      moveCurrentPositionBy(1, 0);
      browser.keys(['Space']); // Row 2 selected
      browser.keys(['Escape']); // clear both selected rows

      Terra.validates.element('no-rows-selected-row-selection-mode', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('esc clears row selection mode when no rows selected', () => {
      rowSelectionNavigateToCell(4, 1);
      browser.keys(['Escape']); // clears row selection mode

      Terra.validates.element('row-selection-mode-off-cell-4-1-focused', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('clicking cell selects row', () => {
      clickCell(3, 1);

      Terra.validates.element('row-3-selected-row-selection-mode', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('clicking on selected row, unselects the row', () => {
      clickCell(3, 2);
      clickCell(3, 6);

      Terra.validates.element('no-rows-selected-after-click-row-selection-mode', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('masked cells in worklist data grid', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/worklist-data-grid/worklist-data-grid-masked-cell');

      Terra.validates.element('masked-cell', '#terra-worklist-data-grid-masked-cell');
    });

    it('hover over selectable cell in worklist data grid', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/worklist-data-grid/worklist-data-grid-with-selections');

      browser.$$('td[class*="worklist-data-grid-cell"][class*="selectable"]')[0].moveTo();
      browser.pause(2000);
      Terra.validates.element('hover-selectable-cell', '#terra-worklist-data-grid-with-selections');
    });

    it('hover over non-selectable cell in worklist data grid', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/worklist-data-grid/worklist-data-grid-with-selections');

      browser.$$('td[class*="worklist-data-grid-cell"]:not([class*="selectable"])')[0].moveTo();
      browser.pause(2000);
      Terra.validates.element('hover-non-selectable-cell', '#terra-worklist-data-grid-with-selections');
    });
  });
});
