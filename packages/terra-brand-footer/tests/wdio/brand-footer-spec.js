/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'large');

describe('BrandFooter', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/default-brand-footer'));

    const rules = { bypass: { enabled: false } };

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

  describe('Section Headers', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/section-header-brand-footer'));

    const rules = { bypass: { enabled: false } };

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
});
