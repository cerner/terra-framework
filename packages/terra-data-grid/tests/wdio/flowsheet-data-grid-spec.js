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

const holdDownCtrlKey = () => {
  browser.performActions([{
    type: 'key',
    id: 'keyboard',
    actions: [{ type: 'keyDown', value: '\uE03D' }],
  }]);
};

const releaseCtrlKey = () => {
  browser.performActions([{
    type: 'key',
    id: 'keyboard',
    actions: [{ type: 'keyUp', value: '\uE03D' }],
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
  browser.$$(`${selector} tr`)[row].$(`td:nth-child(${col + 1}), th:nth-child(${col + 1})`).click();
};

Terra.describeViewports('FlowsheetDataGrid', ['medium', 'large'], () => {
  describe('FlowsheetDataGrid configuration', () => {
    describe('default flowsheet data grid', () => {
      before(() => {
        browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/default-flowsheet-data-grid');
      });

      it('renders a default flowsheet data grid', () => {
        browser.keys(['Tab']); // Cell 0,0 gets focus
        expect(browser.$('[class*="column-header-row"] th:nth-child(1)').isFocused()).toBe(true);
        Terra.validates.element('default-flowsheet-data-grid', { selector: '#default-terra-flowsheet-data-grid-table' });
      });
    });

    describe('flowsheet data grid with column span', () => {
      const columnSpanSelector = '#flowsheet-with-column-span';
      before(() => {
        browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/flowsheet-with-column-span');
      });

      it('renders a flowsheet data grid with column span', () => {
        browser.keys(['Tab']); // Cell 0,0 gets focus
        expect(browser.$('[class*="column-header-row"] th:nth-child(1)').isFocused()).toBe(true);
        Terra.validates.element('flowsheet-with-column-span', { selector: columnSpanSelector });
      });

      it('validates that Shift+Space selects a range of cells starting at the first selected cell', () => {
        navigateToCell(1, 1);
        browser.keys(['Space']);
        moveCurrentPositionBy(2, 1);
        holdDownShiftKey();
        browser.keys(['Space']);
        releaseShiftKey();

        Terra.validates.element('column-span-space-range-1-1-to-3-2', { selector: columnSpanSelector });
      });

      it('validates that Shift+Click selects a range of cells starting at the first selected cell', () => {
        clickCell(3, 1, columnSpanSelector);
        holdDownShiftKey();
        clickCell(4, 2, columnSpanSelector);
        releaseShiftKey();

        Terra.validates.element('column-span-click-range-3-1-to-4-2', { selector: columnSpanSelector });
      });

      it('clears selection with Esc key', () => {
        clickCell(3, 1, columnSpanSelector);
        browser.keys(['Escape']);

        expect(browser.$('[role="grid"] tbody tr:nth-of-type(3) td:nth-of-type(1)').isFocused()).toBe(true);
        Terra.validates.element('column-span-cell-3-1-focused', { selector: columnSpanSelector });
      });

      it('selects multiple non contiguous cells when Ctrl key is held down', () => {
        holdDownCtrlKey();
        clickCell(3, 1, columnSpanSelector);
        clickCell(4, 2, columnSpanSelector);
        clickCell(5, 3, columnSpanSelector);
        releaseCtrlKey();
        Terra.validates.element('column-span-non-contiguous-cells-selected', { selector: columnSpanSelector });
      });
    });

    describe('flowsheet data grid with pinned column span', () => {
      before(() => {
        browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/flowsheet-with-pinned-column-span');
      });

      it('renders a flowsheet data grid with a pinned column span', () => {
        browser.keys(['Tab']); // Cell 0,0 gets focus
        expect(browser.$('[class*="column-header-row"] th:nth-child(1)').isFocused()).toBe(true);
        Terra.validates.element('flowsheet-with-pinned-column-span', { selector: '#flowsheet-with-pinned-column-span' });
      });
    });

    describe('flowsheet data grid with column span actions', () => {
      before(() => {
        browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/flowsheet-with-column-span-actions');
      });

      it('renders a flowsheet data grid with column spans and actions', () => {
        browser.keys(['Tab']); // Cell 0,0 gets focus
        expect(browser.$('[class*="column-header-row"] th:nth-child(1)').isFocused()).toBe(true);
        Terra.validates.element('flowsheet-with-column-span-actions', { selector: '#flowsheet-with-column-span-actions' });
      });
    });

    describe('flowsheet data grid with no column headers', () => {
      before(() => {
        browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/column-headers-hidden');
      });

      it('renders a flowsheet data grid without column headers', () => {
        expect(browser.$('//thead').getCSSProperty('height').parsed.value).toBe(0);
        Terra.validates.element('flowsheet-data-grid-no-column-headers', { selector: '#terra-flowsheet-data-grid-no-column-headers-table' });
      });

      it('tabs into (1, 0) instead of (0, 0)', () => {
        browser.keys(['Tab']);
        expect(browser.$('//*[@id="terra-flowsheet-data-grid-no-column-headers-table-rowheader-1"]').isFocused()).toBe(true);
      });

      it('does not focus the header column', () => {
        browser.keys(['ArrowDown']);
        expect(browser.$('//*[@id="terra-flowsheet-data-grid-no-column-headers-table-rowheader-2"]').isFocused()).toBe(true);

        browser.keys(['ArrowUp', 'ArrowUp']);
        expect(browser.$('//*[@id="terra-flowsheet-data-grid-no-column-headers-table-rowheader-1"]').isFocused()).toBe(true);
      });
    });

    describe('flowsheet data grid with column highlight', () => {
      it('renders a flowsheet with default column highlight', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/column-highlight-orange');
        browser.keys(['Tab']); // Cell 0,0 gets focus
        expect(browser.$('[class*="column-header-row"] th:nth-child(1)').isFocused()).toBe(true);
        Terra.validates.element('flowsheet-data-grid-column-highlight', { selector: '#terra-flowsheet-data-grid-column-highlight-orange' });
      });

      it('renders a flowsheet data grid with green column highlight', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/column-highlight-green');
        browser.keys(['Tab']); // Cell 0,0 gets focus
        expect(browser.$('[class*="column-header-row"] th:nth-child(1)').isFocused()).toBe(true);
        Terra.validates.element('flowsheet-data-grid-column-highlight-green', { selector: '#terra-flowsheet-data-grid-column-highlight-green' });
      });

      it('renders a flowsheet data grid with orange and green column highlight', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/multi-column-highlight');
        browser.keys(['Tab']); // Cell 0,0 gets focus
        expect(browser.$('[class*="column-header-row"] th:nth-child(1)').isFocused()).toBe(true);
        Terra.validates.element('flowsheet-data-grid-multi-column-highlight', { selector: '#terra-flowsheet-data-grid-multi-column-highlight' });
      });

      it('renders a flowsheet data grid sections along with orange column highlight', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/flowsheet-sections-with-col-highlight');
        Terra.validates.element('flowsheet-data-grid-sections-with-orange-column-highlight', { selector: '#flowsheet-sections-with-col-highlight' });
      });
    });
  });

  describe('Cell selection', () => {
    const cellSelectionSelector = '#terra-flowsheet-data-grid-cell-selection-table';
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/cell-selection');
    });

    it('selects the current cell with spacebar', () => {
      navigateToCell(1, 1);
      browser.keys(['Space']);

      expect(browser.$('[role="grid"] tbody tr:nth-of-type(1) td:nth-of-type(1)').isFocused()).toBe(true);
      Terra.validates.element('selection-and-focus-on-1-1', { selector: cellSelectionSelector });
    });

    it('validates that navigating the grid does not change the selected cell', () => {
      navigateToCell(1, 1);
      browser.keys(['Space']);
      moveCurrentPositionBy(2, 0);

      expect(browser.$('[role="grid"] tbody tr:nth-of-type(3) td:nth-of-type(1)').isFocused()).toBe(true);
      Terra.validates.element('selection-1-1-focus-3-1', { selector: cellSelectionSelector });
    });

    it('validates that selecting another cell moves the selection and focus to current cell', () => {
      navigateToCell(1, 1);
      browser.keys(['Space']);
      moveCurrentPositionBy(2, 0);
      browser.keys(['Space']);

      expect(browser.$('[role="grid"] tbody tr:nth-of-type(3) td:nth-of-type(1)').isFocused()).toBe(true);
      Terra.validates.element('selection-3-1-focus-3-1', { selector: cellSelectionSelector });
    });

    it('validates that Shift+Space selects a range of cells starting at the first selected cell', () => {
      navigateToCell(1, 1);
      browser.keys(['Space']);
      moveCurrentPositionBy(2, 1);
      holdDownShiftKey();
      browser.keys(['Space']);
      releaseShiftKey();

      Terra.validates.element('selection-space-range-1-1-to-3-2', { selector: cellSelectionSelector });
    });

    it('validates that Shift+Arrow keys selects a range of cells starting at the first selected cell', () => {
      navigateToCell(1, 1);
      browser.keys(['Space']);
      holdDownShiftKey();
      moveCurrentPositionBy(2, 1);
      releaseShiftKey();

      Terra.validates.element('selection-arrows-range-1-1-to-3-2', { selector: cellSelectionSelector });
    });

    it('validates that Shift+Arrow keys does not select row header cells when navigated to', () => {
      navigateToCell(1, 1);
      browser.keys(['Space']);
      holdDownShiftKey();
      moveCurrentPositionBy(2, -1);
      releaseShiftKey();

      expect(browser.$('[role="grid"] tbody tr:nth-of-type(3) th:nth-of-type(1)').isFocused()).toBe(true);
      Terra.validates.element('selection-arrows-range-1-1-to-3-1-focus-3-0', { selector: cellSelectionSelector });
    });

    it('validates that Shift+Arrow keys does not select column header cells when navigated to', () => {
      navigateToCell(3, 1);
      browser.keys(['Space']);
      holdDownShiftKey();
      moveCurrentPositionBy(-3, 0);
      releaseShiftKey();

      expect(browser.$('[class*="column-header-row"] th:nth-child(2)').isFocused()).toBe(true);
      Terra.validates.element('selection-arrows-range-3-1-to-1-1-focus-0-1', { selector: cellSelectionSelector });
    });

    it('validates that clicking on a cell, moves selection and focus to that cell', () => {
      clickCell(3, 1, cellSelectionSelector);

      expect(browser.$('[role="grid"] tbody tr:nth-of-type(3) td:nth-of-type(1)').isFocused()).toBe(true);
      Terra.validates.element('selection-3-1-focus-3-1-with-hover', { selector: cellSelectionSelector });
    });

    it('validates that navigation does not change cell selected via mouse click', () => {
      clickCell(3, 1, cellSelectionSelector);
      moveCurrentPositionBy(-2, -1);

      expect(browser.$('[role="grid"] tbody tr:nth-of-type(1) th:nth-of-type(1)').isFocused()).toBe(true);
      Terra.validates.element('selection-3-1-focus-1-0', { selector: cellSelectionSelector });
    });

    it('validates that mouse click moves selection and focus to clicked cell', () => {
      clickCell(3, 1, cellSelectionSelector);
      clickCell(4, 2, cellSelectionSelector);

      expect(browser.$('[role="grid"] tbody tr:nth-of-type(4) td:nth-of-type(2)').isFocused()).toBe(true);
      Terra.validates.element('selection-4-2-focus-4-2', { selector: cellSelectionSelector });
    });

    it('validates that Shift+Click selects a range of cells starting at the first selected cell', () => {
      clickCell(3, 1, cellSelectionSelector);
      holdDownShiftKey();
      clickCell(4, 2, cellSelectionSelector);
      releaseShiftKey();

      Terra.validates.element('selection-click-range-3-1-to-4-2', { selector: cellSelectionSelector });
    });

    it('clears selection with Esc key', () => {
      clickCell(3, 1, cellSelectionSelector);
      browser.keys(['Escape']);

      expect(browser.$('[role="grid"] tbody tr:nth-of-type(3) td:nth-of-type(1)').isFocused()).toBe(true);
      Terra.validates.element('cell-3-1-focused', { selector: cellSelectionSelector });
    });

    it('selects multiple non contiguous cells when Ctrl key is held down', () => {
      holdDownCtrlKey();
      clickCell(3, 1, cellSelectionSelector);
      clickCell(4, 2, cellSelectionSelector);
      clickCell(5, 3, cellSelectionSelector);
      releaseCtrlKey();
      Terra.validates.element('Non Contiguous Cells Selected', { selector: cellSelectionSelector });
    });
  });

  describe('Row selection', () => {
    const rowSelectionSelector = '#terra-flowsheet-data-grid-row-selection-table';
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/row-selection');
    });

    it('validates that selecting the row header cell with spacebar selects the current row', () => {
      navigateToCell(1, 0);
      browser.keys(['Space']);

      expect(browser.$('[role="grid"] tbody tr:nth-of-type(1) th:nth-of-type(1)').isFocused()).toBe(true);
      Terra.validates.element('selection-row-1-with-space', { selector: rowSelectionSelector });
    });

    it('validates that selecting another row header cell moves the selection and focus to current cell and selects the current row', () => {
      navigateToCell(1, 0);
      browser.keys(['Space']);
      moveCurrentPositionBy(2, 0);
      browser.keys(['Space']);

      expect(browser.$('[role="grid"] tbody tr:nth-of-type(3) th:nth-of-type(1)').isFocused()).toBe(true);
      Terra.validates.element('selection-row-3-changed-with-space', { selector: rowSelectionSelector });
    });

    it('validates that mouse click on a row header cell selects the current row', () => {
      clickCell(2, 0, rowSelectionSelector);

      expect(browser.$('[role="grid"] tbody tr:nth-of-type(2) th:nth-of-type(1)').isFocused()).toBe(true);
      Terra.validates.element('selection-row-2-with-click', { selector: rowSelectionSelector });
    });

    it('validates that mouse click moves selection and focus to clicked row header cell and selects the current row', () => {
      clickCell(2, 0, rowSelectionSelector);
      clickCell(4, 0, rowSelectionSelector);

      expect(browser.$('[role="grid"] tbody tr:nth-of-type(4) th:nth-of-type(1)').isFocused()).toBe(true);
      Terra.validates.element('selection-row-4-changed-with-click', { selector: rowSelectionSelector });
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

    it('validates selected cells are cleared when the section header is clicked', () => {
      clickCell(3, 1, sectionSelector);
      browser.$('table h2').click();
      browser.$('table h2').click();
      browser.$(`${sectionSelector}`).click();

      Terra.validates.element('flowsheet-with-sections', { selector: sectionSelector });
    });

    it('validates multi-cell select within sections', () => {
      navigateToCell(2, 1, sectionSelector);
      browser.keys(['Space']);

      moveCurrentPositionBy(1, 1, sectionSelector);
      holdDownShiftKey();
      browser.keys(['Space']);
      releaseShiftKey();

      Terra.validates.element('flowsheet-with-sections-multi-cell-select', { selector: sectionSelector });
    });

    it('validates multi-cell select across sections and the anchor section on top', () => {
      navigateToCell(2, 1, sectionSelector);
      browser.keys(['Space']);

      moveCurrentPositionBy(4, 1, sectionSelector);
      holdDownShiftKey();
      browser.keys(['Space']);
      releaseShiftKey();

      Terra.validates.element('flowsheet-with-sections-multi-cell-select-top-anchor', { selector: sectionSelector });
    });

    it('validates multi-cell select across sections and the anchor section on bottom', () => {
      navigateToCell(6, 2, sectionSelector);
      browser.keys(['Space']);

      moveCurrentPositionBy(-4, -1, sectionSelector);
      holdDownShiftKey();
      browser.keys(['Space']);
      releaseShiftKey();

      Terra.validates.element('flowsheet-with-sections-multi-cell-select-bottom-anchor', { selector: sectionSelector });
    });

    it('validates range selection within sections', () => {
      navigateToCell(2, 1, sectionSelector);
      holdDownShiftKey();
      moveCurrentPositionBy(1, 1);
      releaseShiftKey();

      Terra.validates.element('flowsheet-with-sections-multi-cell-select', { selector: sectionSelector });
    });

    it('validates range selection across sections and the anchor section on top', () => {
      navigateToCell(2, 1, sectionSelector);
      holdDownShiftKey();
      moveCurrentPositionBy(4, 1);
      releaseShiftKey();

      Terra.validates.element('flowsheet-with-sections-multi-cell-select-top-anchor2', { selector: sectionSelector });
    });

    it('validates range selection across sections and the anchor section on bottom', () => {
      navigateToCell(6, 2, sectionSelector);
      holdDownShiftKey();
      moveCurrentPositionBy(-4, -1);
      releaseShiftKey();

      Terra.validates.element('flowsheet-with-sections-multi-cell-select-bottom-anchor2', { selector: sectionSelector });
    });
  });

  describe('Subsections', () => {
    const subsectionSelector = '#flowsheet-with-subsections';
    beforeEach(() => {
      browser.url('raw/tests/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/flowsheet-with-subsections');
    });

    it('validate Flowsheet subsection UI', () => {
      Terra.validates.element('flowsheet-with-subsections', { selector: subsectionSelector });
    });

    it('validates multi-cell select within subsections', () => {
      browser.keys(['Tab', 'ArrowDown', 'ArrowDown']);

      Terra.validates.element('flowsheet-with-subsections-first-subsection', { selector: subsectionSelector });
    });

    it('validates multi-cell select within subsections', () => {
      navigateToCell(3, 1, subsectionSelector);
      browser.keys(['Space']);

      moveCurrentPositionBy(1, 1, subsectionSelector);
      holdDownShiftKey();
      browser.keys(['Space']);
      releaseShiftKey();

      Terra.validates.element('flowsheet-with-subsections-multi-cell-select', { selector: subsectionSelector });
    });

    it('validates multi-cell select across subsections and the anchor section on top', () => {
      navigateToCell(3, 1, subsectionSelector);
      browser.keys(['Space']);

      moveCurrentPositionBy(4, 1, subsectionSelector);
      holdDownShiftKey();
      browser.keys(['Space']);
      releaseShiftKey();

      Terra.validates.element('flowsheet-with-subsections-multi-cell-select-top-anchor', { selector: subsectionSelector });
    });

    it('validates multi-cell select across subsections and the anchor subsection on bottom', () => {
      navigateToCell(7, 2, subsectionSelector);
      browser.keys(['Space']);

      moveCurrentPositionBy(-4, -1, subsectionSelector);
      holdDownShiftKey();
      browser.keys(['Space']);
      releaseShiftKey();

      Terra.validates.element('flowsheet-with-subsections-multi-cell-select-bottom-anchor', { selector: subsectionSelector });
    });

    it('validates range selection within a subsection', () => {
      navigateToCell(3, 1, subsectionSelector);
      holdDownShiftKey();
      moveCurrentPositionBy(1, 1);
      releaseShiftKey();

      Terra.validates.element('flowsheet-with-subsections-multi-cell-select', { selector: subsectionSelector });
    });

    it('validates range selection across subsections and the anchor subsection on top', () => {
      navigateToCell(3, 1, subsectionSelector);
      holdDownShiftKey();
      moveCurrentPositionBy(4, 1);
      releaseShiftKey();

      Terra.validates.element('flowsheet-with-subsections-multi-cell-select-top-anchor2', { selector: subsectionSelector });
    });

    it('validates range selection across subsections and the anchor subsection on bottom', () => {
      navigateToCell(7, 2, subsectionSelector);
      holdDownShiftKey();
      moveCurrentPositionBy(-4, -1);
      releaseShiftKey();

      Terra.validates.element('flowsheet-with-subsections-multi-cell-select-bottom-anchor2', { selector: subsectionSelector });
    });
  });
});
