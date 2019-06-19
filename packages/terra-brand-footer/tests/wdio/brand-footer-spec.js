const rules = { bypass: { enabled: false } };

Terra.describeViewports('BrandFooter', ['tiny', 'large'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/default-brand-footer'));

    Terra.it.isAccessible({ rules });
    Terra.it.matchesScreenshot();
  });

  describe('Links Prop', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/links-prop-brand-footer'));

    Terra.it.isAccessible({ rules });
    Terra.it.matchesScreenshot();
  });

  describe('No Nav', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/no-nav-brand-footer'));

    Terra.it.isAccessible({ rules });
    Terra.it.matchesScreenshot();
  });

  describe('Section Headers', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/section-header-brand-footer'));

    Terra.it.isAccessible({ rules });
    Terra.it.matchesScreenshot();
  });

  describe('Vertical Nav', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/vertical-nav-brand-footer'));

    Terra.it.isAccessible({ rules });
    Terra.it.matchesScreenshot();
  });

  describe('Vertical Mixed Headers', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/vertical-mixed-headers-brand-footer'));

    Terra.it.isAccessible({ rules });
    Terra.it.matchesScreenshot();
  });

  describe('Horizontal Wrap', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/horizontal-wrap-brand-footer'));

    Terra.it.isAccessible({ rules });
    Terra.it.matchesScreenshot();
  });
});

// Medium exemplifies 3x2 layout and Large 4 in a row with 2 on the botton row
Terra.describeViewports('BrandFooter', ['medium', 'large'], () => {
  describe('Many Sections', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/many-sections-brand-footer'));

    Terra.it.isAccessible({ rules });
    Terra.it.matchesScreenshot();
  });
});
