Terra.describeViewports('CompactInteractiveList', ['medium', 'large'], () => {
  describe('placeholder', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/compact-interactive-list/default-compact-interactive-list');
    });

    it('placeholder', () => {
      Terra.validates.element('default compact interactive list');
    });
  });
});
