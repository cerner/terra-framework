Terra.describeViewports('DateInput', ['tiny', 'medium', 'large'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-date-input/default-date-input'));

    it('validates the element', () => {
      Terra.validates.element();
    });
  });
});
