/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'large');

describe('BrandFooter', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/brand-footer/default-brand-footer'));

    const rules = { bypass: { enabled: false } };

    Terra.should.beAccessible({ viewports, rules });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-brand-footer-nav-background-color': 'blue',
      '--terra-brand-footer-nav-color': 'yellow',
      '--terra-brand-footer-footer-content-background-color': 'red',
      '--terra-brand-footer-footer-content-color': 'black',
    });
  });
});
