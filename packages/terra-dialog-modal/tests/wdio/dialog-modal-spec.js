/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium', 'large');
const selector = '#root';

describe('DialogModal', () => {
  describe('Default Dialog Modal', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/dialog-modal/default-dialog-modal');
      browser.click('#trigger-dialog-modal');
    });
    Terra.should.beAccessible({ viewports, selector });
    Terra.should.matchScreenshot({ viewports, selector });
  });

  describe('Dialog Modal With Long text', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/dialog-modal/dialog-modal-with-long-text');
      browser.click('#trigger-dialog-modal');
    });
    Terra.should.beAccessible({ viewports, selector });
    Terra.should.matchScreenshot({ viewports, selector });
  });
});
