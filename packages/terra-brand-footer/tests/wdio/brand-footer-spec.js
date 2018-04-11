/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('BrandFooter', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/brand-footer/default-brand-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
