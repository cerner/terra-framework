const defaultSelector = '#default-terra-data-grid-table';

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

  describe('keyboard navigation with sections', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/data-grid/data-grid-with-sections');
    });

    it('navigates via keyboard', () => {
      browser.keys(['Tab']);
      Terra.validates.element('data-grid-with-section-initial-focus', { selector: defaultSelector });

      browser.keys(['ArrowDown']);
      Terra.validates.element('data-grid-first-section', { selector: defaultSelector });

      browser.keys(['ArrowDown', 'ArrowDown', 'ArrowDown']);
      Terra.validates.element('data-grid-second-section', { selector: defaultSelector });

      browser.keys(['ArrowDown', 'ArrowRight', 'ArrowRight', 'ArrowUp', 'ArrowUp']);
      Terra.validates.element('data-grid-sections-maintain-column', { selector: defaultSelector });
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
      expect(browser.$('[role="grid"] thead tr:nth-of-type(1) th:nth-of-type(1) div[role=button]').isFocused()).toBe(true);
    });

    it('validates that a Tab key press inside the grid will skip focusable cell elements', () => {
      browser.keys(['Tab', 'Tab', 'Tab']);

      Terra.validates.element('data-grid-skip-focusable-elements-next', { columnResizeSelector });
      expect(browser.$('#next-focus-button').isFocused()).toBe(true);
    });

    it('validates that a Tab key press inside the grid as last focusable element wraps', () => {
      const testScript = 'document.getElementById("next-focus-button").style.display="none"';
      browser.execute(testScript);
      browser.pause(250);
      browser.keys(['Tab', 'Tab', 'Tab']);

      Terra.validates.element('data-grid-focusable-elements-wrap', { columnResizeSelector });
      expect(browser.$('#previous-focus-button').isFocused()).toBe(true);
    });

    it('validates that a Shift+Tab key press while inside the grid will skip to the previous focusable element outside the grid', () => {
      browser.keys(['Tab', 'Tab', 'ArrowDown', 'ArrowDown', 'Shift', 'Tab', 'Shift']);

      Terra.validates.element('data-grid-skip-focusable-elements-previous', { columnResizeSelector });
      expect(browser.$('#previous-focus-button').isFocused()).toBe(true);
    });

    it('validates that the proper element is selected when Shift+Tab is used to give focus to the grid', () => {
      browser.keys(['Tab', 'Tab', 'Tab', 'Shift', 'Tab', 'Shift']);

      Terra.validates.element('data-grid-return-focus', { columnResizeSelector });
      expect(browser.$('[role="grid"] thead tr:nth-of-type(1) th:nth-of-type(1) div[role=button]').isFocused()).toBe(true);
    });

    it('validates that a cell with no focusable elements does not trap focus', () => {
      browser.keys(['Tab', 'Tab', 'ArrowDown', 'Enter', 'ArrowRight']);

      Terra.validates.element('non-focusable-cell-no-trap', { columnResizeSelector });
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
      expect(browser.$('#input-cell').isFocused()).toBe(true);
    });

    it('validates that keyboard inputs will not move focus from a textarea', () => {
      browser.$('#textarea-cell').click();

      browser.pause(250);

      browser.keys(['ArrowRight', 'ArrowLeft']);

      Terra.validates.element('data-grid-focusable-textarea-retains-focus', { columnResizeSelector });
      expect(browser.$('#textarea-cell').isFocused()).toBe(true);
    });

    it('validates that keyboard inputs will not move focus from a select element', () => {
      browser.$('#specialties').click();

      browser.keys(['ArrowRight', 'ArrowLeft']);

      Terra.validates.element('data-grid-focusable-select-retains-focus', { columnResizeSelector });
      expect(browser.$('#specialties').isFocused()).toBe(true);
    });

    it('focuses on a button if it is the only component in a cell', () => {
      browser.keys(['Tab', 'Tab', 'ArrowDown', 'ArrowRight']);
      expect(browser.$('//*[@id="default-terra-data-grid-focusable-cell-table"]/tbody[2]/tr[1]/td[1]/div/button').isFocused()).toBe(true);
    });

    it('selects the cell after pressing Escape on a button that was auto focused', () => {
      browser.keys(['Tab', 'Tab', 'ArrowDown', 'ArrowRight', 'Escape']);
      expect(browser.$('//*[@id="default-terra-data-grid-focusable-cell-table"]/tbody[2]/tr[1]/td[1]').isFocused()).toBe(true);
    });

    it('selects the button after pressing Enter on cell that has focus with an auto focusable element', () => {
      browser.keys(['Tab', 'Tab', 'ArrowDown', 'ArrowRight', 'Escape', 'Enter']);
      expect(browser.$('//*[@id="default-terra-data-grid-focusable-cell-table"]/tbody[2]/tr[1]/td[1]/div/button').isFocused()).toBe(true);
    });

    it('clicks the button instead of diving in if it is the only component in the cell', () => {
      const modal = browser.$('[aria-modal="true"]');
      expect(modal.isDisplayed()).toBe(false);

      browser.keys(['Tab', 'Tab', 'ArrowDown', 'ArrowRight', 'Enter']);

      expect(modal.isDisplayed()).toBe(true);
      expect(browser.$('/html/body/div[2]/div[2]/div/div/div/div[4]/div/button').isFocused()).toBe(true);
    });

    it('focuses on a hyperlink if it is the only component in a cell', () => {
      browser.keys(['Tab', 'Tab', 'ArrowDown', 'ArrowRight', 'ArrowRight', 'ArrowRight']);
      expect(browser.$('//*[@id="default-terra-data-grid-focusable-cell-table"]/tbody[2]/tr[1]/td[3]/div/a').isFocused()).toBe(true);
    });
  });

  describe('with pinned columns', () => {
    const pinnedColumnsSelector = '#data-grid-pinned-columns-table';

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
    const stickyHeaderSelector = '#terra-data-grid-sticky-table';

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

  describe('column resizing', () => {
    const columnResizingGridSelector = '#terra-data-grid-with-column-resizing-table';
    it('focuses on the column resize handle', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/data-grid/data-grid-with-column-resizing');
      browser.keys(['Tab']); // navigate to first column
      browser.keys(['ArrowRight']); // navigate to first column resize handle

      expect($('[class*="column-header-row"]').$('//th[1]/div[2]').isFocused()).toBe(true);
      Terra.validates.element('column-resize-handle-focused', { selector: columnResizingGridSelector });
    });

    it('increases the column width with the keyboard in resize mode', () => {
      // disabling the 'aria-input-field-name' rule as it is dynamically removed
      // for the keyboard resize workflow and this causes an accessibility failure
      const options = {
        selector: columnResizingGridSelector,
        rules: { 'aria-input-field-name': { enabled: false } },
      };

      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/data-grid/data-grid-with-column-resizing');
      browser.keys(['Tab', 'ArrowRight']);
      browser.keys(['Enter', 'ArrowRight', 'ArrowRight']);

      expect($('[class*="column-header-row"]').$('//th[1]').getCSSProperty('width').parsed.value).toBe(220);
      Terra.validates.element('column-resize-increase-keyboard', options);
    });

    it('decreases the column width with the keyboard in resize mode', () => {
      // disabling the 'aria-input-field-name' rule as it is dynamically removed
      // for the keyboard resize workflow and this causes an accessibility failure
      const options = {
        selector: columnResizingGridSelector,
        rules: { 'aria-input-field-name': { enabled: false } },
      };

      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/data-grid/data-grid-with-column-resizing');
      browser.keys(['Tab', 'ArrowRight']);
      browser.keys(['Enter', 'ArrowLeft', 'ArrowLeft']);

      expect($('[class*="column-header-row"]').$('//th[1]').getCSSProperty('width').parsed.value).toBe(180);
      Terra.validates.element('column-resize-decrease-keyboard', options);
    });

    it('returns to navigation mode from resize mode with the escape key', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/data-grid/data-grid-with-column-resizing');
      browser.keys(['Tab']);
      browser.keys(Array(3).fill('ArrowRight')); // navigate to 2nd column resize handle
      browser.keys(['Enter', 'ArrowLeft', 'ArrowLeft']);
      browser.keys(['Escape']);
      browser.keys(['ArrowLeft']);

      expect($('[class*="column-header-row"]').$('//th[2]/div[@role="button"]').isFocused()).toBe(true);
      expect($('[class*="column-header-row"]').$('//th[2]').getCSSProperty('width').parsed.value).toBe(180);
    });

    it('returns focus to the header cell if resize handle is selected and tabbed out and back into the table', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/data-grid/data-grid-with-column-resizing');
      browser.keys(['Tab']);
      browser.keys(['ArrowRight', 'ArrowRight']); // navigate to column-header-2
      browser.keys(['Shift', 'Tab', 'Shift', 'Tab']); // tab back out and back into the grid

      expect($('[class*="column-header-row"]').$('//th[2]/div[@role="button"]').isFocused()).toBe(true);
    });

    it('resumes column navigation after tabbing out and back into the table', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/data-grid/data-grid-with-column-resizing');
      browser.keys(['Tab', 'ArrowRight', 'ArrowRight']); // navigate to column-header-2
      browser.keys(['Shift', 'Tab', 'Shift', 'Tab']); // tab back out and back into the grid
      browser.keys(['ArrowRight']); // navigate to column-header-2's resize handle

      expect($('[class*="column-header-row"]').$('//th[2]/div[2]').isFocused()).toBe(true);
    });

    it('does not focus on column resize handle if it is disabled', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/data-grid/data-grid-with-column-resizing');
      browser.keys(['Tab']);
      browser.keys(Array(5).fill('ArrowRight')); // navigate to 2nd column resize handle

      expect($('[class*="column-header-row"]').$('//th[4]/div[@role="button"]').isFocused()).toBe(true);
    });

    it('focuses on the resize handle in the column header when navigating right from the column header', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/data-grid/default-data-grid');

      browser.keys(['Tab', 'ArrowRight']); // Focus is on (0,0)
      expect(browser.$('[class*="column-header-row"] th:nth-child(1) div[class*=resize-handle]').isFocused()).toBe(true);

      Terra.validates.element('column-header-0-0-resize-handle-focused', { selector: defaultSelector });
    });

    it('focuses on the resize handle in the column header when navigating left from the column header', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/data-grid/default-data-grid');

      browser.keys(['Tab', 'ArrowRight', 'ArrowRight']); // Focus is on (0,1)
      expect(browser.$('[class*="column-header-row"] th:nth-child(2) div[role=button]').isFocused()).toBe(true);

      browser.keys(['ArrowLeft']);
      expect(browser.$('[class*="column-header-row"] th:nth-child(1) div[class*=resize-handle]').isFocused()).toBe(true);

      Terra.validates.element('column-header-0-0-resize-handle-focused', { selector: defaultSelector });
    });

    it('focuses on the column header when navigating left from the resize handle', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/data-grid/default-data-grid');
      browser.keys(['Tab', 'ArrowRight', 'ArrowRight', 'ArrowRight']); // Focus on resize handle in (0,1)

      expect(browser.$('[class*="column-header-row"] th:nth-child(2) div[class*=resize-handle]').isFocused()).toBe(true);

      browser.keys(['ArrowLeft']);
      expect(browser.$('[class*="column-header-row"] th:nth-child(2) div[role=button]').isFocused()).toBe(true);

      Terra.validates.element('column-header-0-1-focused', { selector: defaultSelector });
    });

    it('focuses on the column header when navigating right from the resize handle', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/data-grid/default-data-grid');

      browser.keys(['Tab', 'ArrowRight']); // Focus is on the (0,0) resize handle
      expect(browser.$('[class*="column-header-row"] th:nth-child(1) div[class*=resize-handle]').isFocused()).toBe(true);

      browser.keys(['ArrowRight']);
      expect(browser.$('[class*="column-header-row"] th:nth-child(2) div[role=button]').isFocused()).toBe(true);

      Terra.validates.element('column-header-0-1-focused', { selector: defaultSelector });
    });

    it('focuses on the column header when navigating from the resize handle to a non-resizable column header', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/data-grid/data-grid-with-column-resizing');

      browser.keys(['Tab', 'ArrowRight', 'ArrowRight', 'ArrowRight']); // Focus is on the (0,1) resize handle
      expect(browser.$('[class*="column-header-row"] th:nth-child(2) div[class*=resize-handle]').isFocused()).toBe(true);

      browser.keys(['ArrowRight']);
      expect(browser.$('[class*="column-header-row"] th:nth-child(3) div[role=button]').isFocused()).toBe(true);

      Terra.validates.element('column-header-0-2-focused', { selector: columnResizingGridSelector });
    });

    it('focuses on the column header when navigating right from a non-resizable column header', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/data-grid/data-grid-with-column-resizing');

      browser.keys(['Tab', 'ArrowRight', 'ArrowRight', 'ArrowRight', 'ArrowRight']); // Focus is on (0,3)
      expect(browser.$('[class*="column-header-row"] th:nth-child(3) div[role=button]').isFocused()).toBe(true);

      browser.keys(['ArrowRight']);
      expect(browser.$('[class*="column-header-row"] th:nth-child(4) div[role=button]').isFocused()).toBe(true);

      Terra.validates.element('column-header-0-3-focused', { selector: columnResizingGridSelector });
    });

    it('focuses on the column header when navigating left to a non-resizable column header from resizable column header', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/data-grid/data-grid-with-column-resizing');

      browser.keys(['Tab', 'ArrowRight', 'ArrowRight', 'ArrowRight', 'ArrowRight', 'ArrowRight']); // Focus is on (0,4)
      expect(browser.$('[class*="column-header-row"] th:nth-child(4) div[role=button]').isFocused()).toBe(true);

      browser.keys(['ArrowLeft']);
      expect(browser.$('[class*="column-header-row"] th:nth-child(3) div[role=button]').isFocused()).toBe(true);

      Terra.validates.element('column-header-0-2-focused', { selector: columnResizingGridSelector });
    });
  });
});
