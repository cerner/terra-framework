Terra.describeViewports('FolderTree', ['medium', 'large'], () => {
  describe('Basic Folder Tree', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/basic-folder-tree');
    });

    it('displays a basic folder tree', () => {
      Terra.validates.screenshot('basic folder tree', { selector: '#basic-folder-tree' });
    });

    it('selects a folder tree item', () => {
      browser.keys('Tab');
      browser.keys('Space');
      Terra.validates.screenshot('basic folder tree selected', { selector: '#basic-folder-tree' });
    });

    it('wraps items with long labels', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/wrapped-label-folder-tree');

      Terra.validates.screenshot('wrapped label folder tree', { selector: '#wrapped-label-folder-tree' });
    });
  });
});
