/* global before, browser, Terra */
const viewports = Terra.viewports('tiny', 'large');

const rules = { bypass: { enabled: false } };

describe('BrandFooter', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/default-brand-footer'));

    Terra.should.beAccessible({ viewports, rules });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-brand-footer-nav-background-color': 'pink',
      '--terra-brand-footer-nav-color': 'yellow',
      '--terra-brand-footer-link-color': 'green',
      '--terra-brand-footer-footer-content-background-color': 'red',
      '--terra-brand-footer-footer-content-color': 'black',
    });
  });

  describe('Links Prop', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/links-prop-brand-footer'));

    Terra.should.beAccessible({ viewports, rules });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-brand-footer-nav-background-color': 'pink',
      '--terra-brand-footer-nav-color': 'yellow',
      '--terra-brand-footer-link-color': 'green',
      '--terra-brand-footer-footer-content-background-color': 'red',
      '--terra-brand-footer-footer-content-color': 'black',
    });
  });

  describe('No Nav', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/no-nav-brand-footer'));

    Terra.should.beAccessible({ viewports, rules });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-brand-footer-footer-content-background-color': 'red',
      '--terra-brand-footer-footer-content-color': 'black',
    });
  });

  describe('Section Headers', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/section-header-brand-footer'));

    Terra.should.beAccessible({ viewports, rules });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-brand-footer-nav-header-color': 'orange',
    });
  });

  describe('Vertical Nav', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/vertical-nav-brand-footer'));

    Terra.should.beAccessible({ viewports, rules });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-brand-footer-nav-background-color': 'pink',
      '--terra-brand-footer-nav-color': 'yellow',
      '--terra-brand-footer-nav-header-color': 'orange',
      '--terra-brand-footer-link-color': 'green',
      '--terra-brand-footer-footer-content-background-color': 'red',
      '--terra-brand-footer-footer-content-color': 'black',
    });
  });

  describe('Vertical Mixed Headers', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/vertical-mixed-headers-brand-footer'));

    Terra.should.beAccessible({ viewports, rules });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Horizontal Wrap', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/horizontal-wrap-brand-footer'));

    Terra.should.beAccessible({ viewports, rules });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Many Sections', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/many-sections-brand-footer'));

    // Use medium because large is just too large to wrap the nav into three rows
    Terra.should.beAccessible({ viewports: Terra.viewports('medium'), rules });
    Terra.should.matchScreenshot({ viewports: Terra.viewports('medium') });
  });
});
