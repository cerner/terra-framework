const defaultSelector = '#default-terra-flowsheet-data-grid-table';

const holdDownShiftKey = () => {
  browser.performActions([{
    type: 'key',
    id: 'keyboard',
    actions: [{ type: 'keyDown', value: '\uE008' }],
  }]);
};

const releaseShiftKey = () => {
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
  browser.keys(['Tab']);
  moveCurrentPositionBy(row, col);
};

const clickCell = (row, col, selector) => {
  browser.$$(`${selector} tr`)[row].$(`:nth-child(${col + 1})`).click();
};

Terra.describeViewports('FlowsheetDataGrid', ['medium', 'large'], () => {
  describe('Cell selection', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/default-flowsheet-data-grid');
    });

    it('selects the current cell with spacebar', () => {
      navigateToCell(1, 1);
      browser.keys(['Space']);

      expect(browser.$('[role="grid"] tbody tr:nth-of-type(1) td:nth-of-type(1)').isFocused()).toBe(true);
      Terra.validates.element('selection-and-focus-on-1-1', { selector: defaultSelector });
    });

    it('validates that navigating the grid does not change the selected cell', () => {
      navigateToCell(1, 1);
      browser.keys(['Space']);
      moveCurrentPositionBy(2, 0);

      expect(browser.$('[role="grid"] tbody tr:nth-of-type(3) td:nth-of-type(1)').isFocused()).toBe(true);
      Terra.validates.element('selection-1-1-focus-3-1', { selector: defaultSelector });
    });

    it('validates that selecting another cell moves the selection and focus to current cell', () => {
      navigateToCell(1, 1);
      browser.keys(['Space']);
      moveCurrentPositionBy(2, 0);
      browser.keys(['Space']);

      expect(browser.$('[role="grid"] tbody tr:nth-of-type(3) td:nth-of-type(1)').isFocused()).toBe(true);
      Terra.validates.element('selection-3-1-focus-3-1', { selector: defaultSelector });
    });

    it('validates that Shift+Space selects a range of cells starting at the first selected cell', () => {
      navigateToCell(1, 1);
      browser.keys(['Space']);
      moveCurrentPositionBy(2, 1);
      holdDownShiftKey();
      browser.keys(['Space']);
      releaseShiftKey();

      Terra.validates.element('selection-space-range-1-1-to-3-2', { selector: defaultSelector });
    });

    it('validates that Shift+Arrow keys selects a range of cells starting at the first selected cell', () => {
      navigateToCell(1, 1);
      browser.keys(['Space']);
      holdDownShiftKey();
      moveCurrentPositionBy(2, 1);
      releaseShiftKey();

      Terra.validates.element('selection-arrows-range-1-1-to-3-2', { selector: defaultSelector });
    });

    it('validates that Shift+Arrow keys does not select row header cells when navigated to', () => {
      navigateToCell(1, 1);
      browser.keys(['Space']);
      holdDownShiftKey();
      moveCurrentPositionBy(2, -1);
      releaseShiftKey();

      expect(browser.$('[role="grid"] tbody tr:nth-of-type(3) th:nth-of-type(1)').isFocused()).toBe(true);
      Terra.validates.element('selection-arrows-range-1-1-to-3-1-focus-3-0', { selector: defaultSelector });
    });

    it('validates that Shift+Arrow keys does not select column header cells when navigated to', () => {
      navigateToCell(3, 1);
      browser.keys(['Space']);
      holdDownShiftKey();
      moveCurrentPositionBy(-3, 0);
      releaseShiftKey();

      expect(browser.$('tr.column-header-row th:nth-child(2) div[role=button]').isFocused()).toBe(true);
      Terra.validates.element('selection-arrows-range-3-1-to-1-1-focus-0-1', { selector: defaultSelector });
    });

    it('validates that clicking on a cell, moves selection and focus to that cell', () => {
      clickCell(3, 1, defaultSelector);

      expect(browser.$('[role="grid"] tbody tr:nth-of-type(3) td:nth-of-type(1)').isFocused()).toBe(true);
      Terra.validates.element('selection-3-1-focus-3-1-with-hover', { selector: defaultSelector });
    });

    it('validates that navigation does not change cell selected via mouse click', () => {
      clickCell(3, 1, defaultSelector);
      moveCurrentPositionBy(-2, -1);

      expect(browser.$('[role="grid"] tbody tr:nth-of-type(1) th:nth-of-type(1)').isFocused()).toBe(true);
      Terra.validates.element('selection-3-1-focus-1-0', { selector: defaultSelector });
    });

    it('validates that mouse click moves selection and focus to clicked cell', () => {
      clickCell(3, 1, defaultSelector);
      clickCell(4, 2, defaultSelector);

      expect(browser.$('[role="grid"] tbody tr:nth-of-type(4) td:nth-of-type(2)').isFocused()).toBe(true);
      Terra.validates.element('selection-4-2-focus-4-2', { selector: defaultSelector });
    });

    it('validates that Shift+Click selects a range of cells starting at the first selected cell', () => {
      clickCell(3, 1, defaultSelector);
      holdDownShiftKey();
      clickCell(4, 2, defaultSelector);
      releaseShiftKey();

      Terra.validates.element('selection-click-range-3-1-to-4-2', { selector: defaultSelector });
    });

    it('clears selection with Esc key', () => {
      clickCell(3, 1, defaultSelector);
      browser.keys(['Escape']);

      expect(browser.$('[role="grid"] tbody tr:nth-of-type(3) td:nth-of-type(1)').isFocused()).toBe(true);
      Terra.validates.element('cell-3-1-focused', { selector: defaultSelector });
    });
  });

  describe('Sections', () => {
    const sectionSelector = '#flowsheet-with-sections';
    beforeEach(() => {
      browser.url('raw/tests/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/flowsheet-with-sections');
    });

    it('validate Flowsheet section UI', () => {
      Terra.validates.element('flowsheet-with-sections', { selector: sectionSelector });
    });
  });
});
