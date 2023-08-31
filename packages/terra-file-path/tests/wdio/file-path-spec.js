const defaultSelector = '#default-terra-file-path';

Terra.describeViewports('FilePath', ['medium', 'large'], () => {
  describe('placeholder', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/file-path/default-file-path');
    });

    it('placeholder', () => {
      Terra.validates.element('placeholder', { selector: defaultSelector });
    });
  });
});
