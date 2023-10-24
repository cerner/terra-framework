Terra.describeViewports('FolderTree', ['medium', 'large'], () => {
    describe('placeholder', () => {
      beforeEach(() => {
        browser.url('/raw/tests/cerner-terra-framework-docs/folder-tree/basic-folder-tree');
      });
  
      it('placeholder', () => {
        Terra.validates.element('placeholder');
      });
    });
  });
