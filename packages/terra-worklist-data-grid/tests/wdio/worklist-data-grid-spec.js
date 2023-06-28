const selector = '#default-terra-worklist-data-grid';

Terra.describeViewports('WorklistDataGrid', ['medium', 'large'], () => {
  describe('with keyboard navigation', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/worklist-data-grid/default-worklist-data-grid');
    });

    it('tab into the grid', () => {
      browser.keys(['Tab']);
      Terra.validates.element('first-cell-in-grid-selected', { selector });
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

      browser.waitUntil(() => browser.$('[role="grid"] [tabIndex="0"]').isDisplayedInViewport() === true);
      browser.pause(1000);
      Terra.validates.element('arrow-key-navigation', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('up arrow key cannot navigate outside grid', () => {
      browser.keys(['Tab']
        .concat(new Array(1).fill('ArrowDown'))
        .concat(new Array(3).fill('ArrowUp')));

      browser.pause(150);
      Terra.validates.element('first-cell-in-grid-selected', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('left arrow key cannot navigate outside grid', () => {
      browser.keys(['Tab']
        .concat(new Array(1).fill('ArrowDown'))
        .concat(new Array(3).fill('ArrowUp'))
        .concat(new Array(3).fill('ArrowLeft')));

      browser.pause(150);
      Terra.validates.element('first-cell-in-grid-selected', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('control with home key', () => {
      browser.keys(['Tab']
        .concat(new Array(4).fill('ArrowDown'))
        .concat(new Array(3).fill('ArrowRight'))
        .concat(['Control', 'Home', 'Control']));

      browser.pause(150);
      Terra.validates.element('first-non-column-header-cell-selected', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('home key', () => {
      browser.keys(['Tab']
        .concat(new Array(4).fill('ArrowDown'))
        .concat(new Array(3).fill('ArrowRight'))
        .concat(['Home']));

      browser.pause(150);
      Terra.validates.element('first-cell-in-row-selected', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('end key', () => {
      browser.keys(['Tab']
        .concat(new Array(4).fill('ArrowDown'))
        .concat(new Array(3).fill('ArrowRight'))
        .concat(['End']));

      browser.waitUntil(() => browser.$('[role="grid"] [tabIndex="0"]').isDisplayedInViewport() === true);
      browser.pause(1000);
      Terra.validates.element('last-cell-in-row-selected', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('control with end key', () => {
      browser.keys(['Tab']
        .concat(new Array(4).fill('ArrowDown'))
        .concat(new Array(3).fill('ArrowRight'))
        .concat(['Control', 'End', 'Control']));

      browser.waitUntil(() => browser.$('[role="grid"] [tabIndex="0"]').isDisplayedInViewport() === true);
      browser.pause(1000);
      Terra.validates.element('last-cell-in-last-row-selected', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('down arrow cannot navigate outside grid', () => {
      browser.keys(['Tab']
        .concat(['Control', 'End', 'Control'])
        .concat(new Array(3).fill('ArrowDown')));

      browser.waitUntil(() => browser.$('[role="grid"] [tabIndex="0"]').isDisplayedInViewport() === true);
      browser.pause(1000);
      Terra.validates.element('last-cell-in-last-row-selected', { selector });
      expect(browser.$$('[role="grid"] [tabIndex="0"]')).toBeElementsArrayOfSize(1);
    });

    it('right arrow cannot navigate outside grid', () => {
      browser.keys(['Tab']
        .concat(['Control', 'End', 'Control']));

      browser.waitUntil(() => browser.$('[role="grid"] [tabIndex="0"]').isDisplayedInViewport() === true);
      browser.pause(1000);

      browser.keys(new Array(3).fill('ArrowRight'));

      Terra.validates.element('last-cell-in-last-row-selected', { selector });
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
