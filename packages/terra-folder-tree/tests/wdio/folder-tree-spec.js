Terra.describeViewports('FolderTree', ['small', 'medium'], () => {
  describe('Basic Folder Tree', () => {
    it('displays a basic folder tree', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/basic-folder-tree');

      Terra.validates.screenshot('basic folder tree', { selector: '#basic-folder-tree' });
    });

    it('selects a folder tree item', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/basic-folder-tree');

      browser.keys('Tab');
      browser.keys('Space');
      Terra.validates.screenshot('basic folder tree selected', { selector: '#basic-folder-tree' });
    });

    it('expands a collapsed folder via mouse click', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/expand-collapse-folder-tree');

      $('span=Projects - Level 1').click();
      Terra.validates.screenshot('expanded folder', { selector: '#expand-collapse-folder-tree' });
    });

    it('collapses an expanded folder via mouse click', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/expand-collapse-folder-tree');

      $('span=Projects - Level 1').click();
      $('span=Projects - Level 1').click();
      Terra.validates.screenshot('collapsed folder', { selector: '#expand-collapse-folder-tree' });
    });

    it('wraps items with long labels', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/wrapped-label-folder-tree');

      Terra.validates.screenshot('wrapped label folder tree', { selector: '#wrapped-label-folder-tree' });
    });
  });
});
