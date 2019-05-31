const viewports = Terra.viewports('tiny', 'large');

const rules = { bypass: { enabled: false } };

describe('BrandFooter', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/default-brand-footer'));

    Terra.it.isAccessible({ viewports, rules });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Links Prop', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/links-prop-brand-footer'));

    Terra.it.isAccessible({ viewports, rules });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('No Nav', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/no-nav-brand-footer'));

    Terra.it.isAccessible({ viewports, rules });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Section Headers', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/section-header-brand-footer'));

    Terra.it.isAccessible({ viewports, rules });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Vertical Nav', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/vertical-nav-brand-footer'));

    Terra.it.isAccessible({ viewports, rules });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Vertical Mixed Headers', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/vertical-mixed-headers-brand-footer'));

    Terra.it.isAccessible({ viewports, rules });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Horizontal Wrap', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/horizontal-wrap-brand-footer'));

    Terra.it.isAccessible({ viewports, rules });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Many Sections', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/many-sections-brand-footer'));

    // Medium exemplifies 3x2 layout and Large 4 in a row with 2 on the botton row
    Terra.it.isAccessible({ viewports: Terra.viewports('medium', 'large'), rules });
    Terra.it.matchesScreenshot({ viewports: Terra.viewports('medium', 'large') });
  });
});
