/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'large');

describe('BrandFooter', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-brand-footer/default-brand-footer'));

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

  describe('Hovered', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-brand-footer/hovered-brand-footer');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-brand-footer-link-hover-color': 'brown',
    });
  });

  describe('Active', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-brand-footer/active-brand-footer');
    });

    Terra.should.themeEachCustomProperty({
      '--terra-brand-footer-link-active-color': 'maroon',
    });
  });
});
