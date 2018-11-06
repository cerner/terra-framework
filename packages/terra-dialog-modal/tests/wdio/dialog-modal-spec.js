const selector = '#root';
const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('Dialog Modal', () => {
  describe('Default Dialog Modal', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-dialog-modal/dialog-modal/default-dialog-modal');
      browser.click('#trigger-dialog-modal');
    });
    Terra.should.beAccessible({ viewports, selector });
    Terra.should.matchScreenshot({ viewports, selector });
  });

  describe('Dialog Modal With Long text', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-dialog-modal/dialog-modal/dialog-modal-with-long-text');
      browser.click('#trigger-dialog-modal');
    });
    Terra.should.beAccessible({ viewports, selector });
    Terra.should.matchScreenshot({ viewports, selector });
  });

  describe('Dialog Modal With Custom Header and Custom Footer', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-dialog-modal/dialog-modal/dialog-modal-with-custom-header-and-custom-footer');
      browser.click('#trigger-dialog-modal');
    });
    Terra.should.beAccessible({ viewports, selector });
    Terra.should.matchScreenshot({ viewports, selector });
  });
});
