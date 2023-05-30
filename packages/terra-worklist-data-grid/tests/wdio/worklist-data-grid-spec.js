const selector = '#default-terra-worklist-data-grid';

Terra.describeViewports('WorklistDataGrid', ['tiny', 'medium', 'large'], () => {
  describe('with keyboard navigation', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/worklist-data-grid/default-worklist-data-grid');
    });

    afterEach(async () => {
      await expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('tab into the grid', () => {
      browser.keys(new Array(1).fill('Tab'));
      Terra.validates.element('first-cell-in-grid-selected', { selector });
    });

    it('tab back out of the grid', () => {
      browser.keys(['Tab', 'Shift', 'Tab', 'Shift']);

      Terra.validates.element('tab-selection-off-grid', { selector });
    });

    it('tab forward out of the grid', () => {
      browser.keys(['Tab', 'Tab']);

      Terra.validates.element('tab-selection-off-grid', { selector });
    });

    it('arrow keys', () => {
      browser.keys(['Tab']
        .concat(new Array(5).fill('ArrowDown'))
        .concat(new Array(6).fill('ArrowRight'))
        .concat(new Array(3).fill('ArrowUp'))
        .concat(new Array(2).fill('ArrowLeft')));

      Terra.validates.element('arrow-key-navigation', { selector });
    });

    it('up arrow key cannot navigate outside grid', () => {
      browser.keys(['Tab']
        .concat(new Array(1).fill('ArrowDown'))
        .concat(new Array(3).fill('ArrowUp')));

      Terra.validates.element('first-cell-in-grid-selected', { selector });
    });

    it('left arrow key cannot navigate outside grid', () => {
      browser.keys(['Tab']
        .concat(new Array(1).fill('ArrowDown'))
        .concat(new Array(3).fill('ArrowUp'))
        .concat(new Array(3).fill('ArrowLeft')));

      Terra.validates.element('first-cell-in-grid-selected', { selector });
    });

    it('control with home key', () => {
      browser.keys(['Tab']
        .concat(new Array(4).fill('ArrowDown'))
        .concat(new Array(3).fill('ArrowRight'))
        .concat(['Control', 'Home', 'Control']));

      Terra.validates.element('first-non-column-header-cell-selected', { selector });
    });

    it('home key', () => {
      browser.keys(['Tab']
        .concat(new Array(4).fill('ArrowDown'))
        .concat(new Array(3).fill('ArrowRight'))
        .concat(['Home']));

      Terra.validates.element('first-cell-in-row-selected', { selector });
    });

    it('end key', () => {
      browser.keys(['Tab']
        .concat(new Array(4).fill('ArrowDown'))
        .concat(new Array(3).fill('ArrowRight'))
        .concat(['End']));

      Terra.validates.element('last-cell-in-row-selected', { selector });
    });

    it('control with end key', () => {
      browser.keys(['Tab']
        .concat(new Array(4).fill('ArrowDown'))
        .concat(new Array(3).fill('ArrowRight'))
        .concat(['Control', 'End', 'Control']));

      Terra.validates.element('last-cell-in-last-row-selected', { selector });
    });

    it('down arrow cannot navigate outside grid', () => {
      browser.keys(['Tab']
        .concat(['Control', 'End', 'Control'])
        .concat(new Array(3).fill('ArrowDown')));

      Terra.validates.element('last-cell-in-last-row-selected', { selector });
    });

    it('right arrow cannot navigate outside grid', () => {
      browser.keys(['Tab']
        .concat(['Control', 'End', 'Control'])
        .concat(new Array(3).fill('ArrowRight')));

      Terra.validates.element('last-cell-in-last-row-selected', { selector });
    });
  });
});
