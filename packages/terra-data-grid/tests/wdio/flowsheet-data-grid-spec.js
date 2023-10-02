const defaultSelector = '#default-terra-flowsheet-data-grid';

Terra.describeViewports('FlowsheetDataGrid', ['medium', 'large'], () => {
  describe('Default Flowsheet Data Grid', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/default-flowsheet-data-grid');
    });

    it('should display the default flowsheet data grid', () => {
      Terra.validates.element('default', { selector: defaultSelector });
    });
  });
});
