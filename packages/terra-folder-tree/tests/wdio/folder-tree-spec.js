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

    it('selects a folder tree item via mouse click outside the main radio button', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/basic-folder-tree');

      browser.$$('input[type="radio"]')[2].click({ x: 23 }); // click 23 pixels to the right
      $('h3').moveTo({ xOffset: 0, yOffset: 0 });
      Terra.validates.screenshot('selected outside radio', { selector: '#basic-folder-tree' });

      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/basic-folder-tree');
      browser.$$('input[type="radio"]')[2].click({ x: -23 }); // click 23 pixels to the left
      $('h3').moveTo({ xOffset: 0, yOffset: 0 });
      Terra.validates.screenshot('selected outside radio', { selector: '#basic-folder-tree' });

      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/basic-folder-tree');
      browser.$$('input[type="radio"]')[2].click({ y: 23 }); // click 23 pixels below
      $('h3').moveTo({ xOffset: 0, yOffset: 0 });
      Terra.validates.screenshot('selected outside radio', { selector: '#basic-folder-tree' });

      browser.$$('input[type="radio"]')[2].click({ y: -23 }); // click 23 pixels above
      $('h3').moveTo({ xOffset: 0, yOffset: 0 });
      Terra.validates.screenshot('selected outside radio', { selector: '#basic-folder-tree' });
    });

    it('does not select a non-selectable folder tree item on mouse click', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/folder-tree-selection');

      $('[role="treeitem"]:nth-of-type(2)').click();
      Terra.validates.screenshot('non-selectable item mouse', { selector: '#folder-tree-selection' });
    });

    it('does not select a non-selectable folder tree item on key press', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/folder-tree-selection');

      browser.keys('Tab');
      browser.keys('Tab');
      browser.keys('Tab');
      browser.keys('ArrowDown');
      browser.keys('Enter');
      Terra.validates.screenshot('non-selectable item keyboard', { selector: '#folder-tree-selection' });
    });

    it('expands a non-selectable, expandable folder tree item on mouse click', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/folder-tree-selection');

      $('[role="treeitem"]:nth-of-type(3)').click();
      Terra.validates.screenshot('expand non-selectable item mouse', { selector: '#folder-tree-selection' });
    });

    it('expands a non-selectable, expandable folder tree item on key press', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/folder-tree-selection');

      browser.keys('Tab');
      browser.keys('Tab');
      browser.keys('Tab');
      browser.keys('ArrowDown');
      browser.keys('ArrowDown');
      browser.keys('ArrowRight');
      Terra.validates.screenshot('expand non-selectable item keyboard', { selector: '#folder-tree-selection' });
    });

    it('expands a collapsed folder via mouse click', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/expand-collapse-folder-tree');

      $('[role="treeitem"]:nth-of-type(1)').click();
      Terra.validates.screenshot('expanded folder', { selector: '#expand-collapse-folder-tree' });
    });

    it('collapses an expanded folder via mouse click', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/expand-collapse-folder-tree');

      $('[role="treeitem"]:nth-of-type(1)').click();
      $('[role="treeitem"]:nth-of-type(1)').click();
      Terra.validates.screenshot('collapsed folder', { selector: '#expand-collapse-folder-tree' });
    });

    it('expands and collapses all folders via mouse click', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/expand-collapse-folder-tree');

      $('aria/Expand All').click();
      Terra.validates.screenshot('expand all folders mouse', { selector: '#expand-collapse-folder-tree' });

      $('aria/Collapse All').click();
      Terra.validates.screenshot('collapse all folders mouse', { selector: '#expand-collapse-folder-tree' });
    });

    it('announces on expands and collapses all folders', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/expand-collapse-folder-tree');

      $('aria/Expand All').click();
      expect($('span[aria-live="polite"]').getHTML(false)).toBe('All items expanded.');

      $('aria/Collapse All').click();
      expect($('span[aria-live="polite"]').getHTML(false)).toBe('All items collapsed.');
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

    it('expands and selects via keyboard', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/expand-collapse-folder-tree');

      browser.keys('Tab');
      browser.keys('Tab');
      browser.keys('Tab');
      browser.keys('ArrowRight');
      Terra.validates.screenshot('expand first folder keyboard', { selector: '#expand-collapse-folder-tree' });

      browser.keys('ArrowDown');
      browser.keys('Enter');
      Terra.validates.screenshot('select second item keyboard', { selector: '#expand-collapse-folder-tree' });
    });

    it('navigates via keyboard', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/expand-collapse-folder-tree');

      $('aria/Expand All').click();
      browser.keys('Tab');
      browser.keys('Tab');
      browser.keys('ArrowDown');
      browser.keys('ArrowDown');
      browser.keys('ArrowDown');
      Terra.validates.screenshot('level three folder focused keyboard', { selector: '#expand-collapse-folder-tree' });

      browser.keys('ArrowDown');
      browser.keys('ArrowDown');
      browser.keys('ArrowDown');
      browser.keys('ArrowDown');
      browser.keys('Enter');
      Terra.validates.screenshot('level three folder child selected keyboard', { selector: '#expand-collapse-folder-tree' });

      browser.keys('ArrowLeft');
      Terra.validates.screenshot('level three folder child selected left arrow keyboard', { selector: '#expand-collapse-folder-tree' });

      browser.keys('ArrowLeft');
      browser.keys('ArrowDown');
      Terra.validates.screenshot('last item focused keyboard', { selector: '#expand-collapse-folder-tree' });
    });

    it('remembers the last focused item when tabbing in and out', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/expand-collapse-folder-tree');

      $('aria/Expand All').click();
      browser.keys('Tab');
      browser.keys('Tab');
      browser.keys('ArrowDown');
      browser.keys('ArrowDown');
      expect($('//li[2]').isFocused()).toBe(true);

      browser.keys('Tab');
      expect($('//li[2]').isFocused()).toBe(false);

      browser.keys(['Shift', 'Tab']);
      expect($('//li[2]').isFocused()).toBe(true);
    });

    it('wraps items with long labels', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/wrapped-label-folder-tree');

      Terra.validates.screenshot('wrapped label folder tree', { selector: '#wrapped-label-folder-tree' });
    });

    it('gains focus after updating the children', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/folder-tree-reload');

      $('#reload-data-button').click();
      browser.keys('Tab');
      browser.keys('Tab');
      browser.keys('Tab');

      Terra.validates.screenshot('reload-focus', { selector: '#folder-tree-reload' });
    });
  });
});
