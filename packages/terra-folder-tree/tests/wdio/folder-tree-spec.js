Terra.describeViewports('FolderTree', ['medium'], () => {
  describe('Basic Folder Tree', () => {
    it('displays a basic folder tree', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/basic-folder-tree');

      Terra.validates.screenshot('basic folder tree', { selector: '#basic-folder-tree' });
    });

    it('selects a folder tree item via mouse click', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/basic-folder-tree');

      $('input[type="radio"]').click();
      $('h3').moveTo({ xOffset: 0, yOffset: 0 });
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

    it('expands and collapses all folders via mouse click', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/expand-collapse-folder-tree');

      $('aria/Expand All').click();
      Terra.validates.screenshot('expand all folders mouse', { selector: '#expand-collapse-folder-tree' });

      $('aria/Collapse All').click();
      Terra.validates.screenshot('collapse all folders mouse', { selector: '#expand-collapse-folder-tree' });
    });

    it('expands and collapses all folders via keyboard', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/expand-collapse-folder-tree');

      browser.keys('Tab');
      browser.keys('Enter');
      Terra.validates.screenshot('expand all folders keyboard', { selector: '#expand-collapse-folder-tree' });

      browser.keys('Tab');
      browser.keys('Enter');
      Terra.validates.screenshot('collapse all folders keyboard', { selector: '#expand-collapse-folder-tree' });
    });

    it('wraps items with long labels', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/wrapped-label-folder-tree');

      Terra.validates.screenshot('wrapped label folder tree', { selector: '#wrapped-label-folder-tree' });
    });
  });
});
