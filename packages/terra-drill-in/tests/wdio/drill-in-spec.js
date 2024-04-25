Terra.describeViewports('DrillIn', ['tiny', 'medium', 'large'], () => {
  describe('Default', () => {
    before(() => browser.url('/raw/tests/terra-drill-in/drill-in/default-drill-in'));

    it('validates the element', () => {
      Terra.validates.element();
    });
  });
});
