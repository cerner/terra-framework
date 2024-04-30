Terra.describeViewports('OutlineView', ['tiny', 'medium', 'large'], () => {
  describe('Default', () => {
    before(() => browser.url('/raw/tests/terra-outline-view/outline-view/default-outline-view'));

    it('validates the element', () => {
      Terra.validates.element();
    });
  });
});
