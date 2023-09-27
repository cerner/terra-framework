const defaultSelector = '#default-terra-flowsheet-data-grid';

Terra.describeViewports('FlowsheetDataGrid', ['medium', 'large'], () => {
  describe('Grid focus', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/default-flowsheet-data-grid');
    });

    it('validates that the first cell gains initial focus when Tab is pressed', () => {
      browser.keys(['Tab']);

      expect(browser.$('[role="grid"] thead tr:nth-of-type(1) th:nth-of-type(1)').isFocused());
      Terra.validates.element('first-cell-initial-focus', { selector: defaultSelector });
    });
  });
});
