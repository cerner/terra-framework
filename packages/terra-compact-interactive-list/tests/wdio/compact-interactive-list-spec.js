Terra.describeViewports('CompactInteractiveList', ['medium', 'large'], () => {
  describe('fixed width columns', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/compact-interactive-list/fixed-width-columns');
    });

    it('should render correctly', () => {
      Terra.validates.element('fixed width columns');
    });
  });

  describe('responsive columns', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/compact-interactive-list/responsive-columns');
    });

    it('should render correctly', () => {
      Terra.validates.element('responsive columns');
    });
  });

  describe('responsive columns with max width', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/compact-interactive-list/responsive-columns-max-width');
    });

    it('should render correctly', () => {
      Terra.validates.element('responsive columns with max width');
    });
  });

  describe('scalable units', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/compact-interactive-list/scalable-units');
    });

    it('should render correctly', () => {
      Terra.validates.element('scalable units');
    });
  });

  describe('width breakpoints', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/compact-interactive-list/width-breakpoints');
    });

    it('should render correctly', () => {
      Terra.validates.element('width breakpoints');
    });
  });

  describe('horizontal flow', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-framework-docs/compact-interactive-list/width-breakpoints-horizontal-flow');
    });

    it('should render correctly', () => {
      Terra.validates.element('width breakpoints horizontal flow');
    });
  });
});
