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
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#root',
      properties: {
        '--terra-dialog-modal-border-radius': '1rem',
        '--terra-dialog-modal-header-background-color': '#c00',
        '--terra-dialog-modal-header-border': '1rem solid #c00',
        '--terra-dialog-modal-main-background-color': '#000',
        '--terra-dialog-modal-main-padding': '0rem',
        '--terra-dialog-modal-body-footer-background-color': '#c00',
        '--terra-dialog-modal-footer-border': '1rem solid #c00',
      },
    });
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

  describe('Within Modal Focus Handling', () => {
    before(() => browser.url('/#/raw/tests/terra-dialog-modal/dialog-modal/default-dialog-modal'));

    it('focuses on the modal when opened', () => {
      browser.click('#trigger-dialog-modal');
      expect(browser.hasFocus('[aria-modal="true"][role="dialog"]')).to.be.equal(true);
    });

    Terra.should.matchScreenshot('modal is focused on open', { selector: '#root' });

    it('focuses on interactive elements within the modal', () => {
      browser.keys(['Tab']);
      expect(browser.hasFocus('[type="button"][aria-label="Close"]')).to.be.equal(true);
    });

    Terra.should.matchScreenshot('modal button focused', { selector: '#root' });

    it('does not focus on interactive content within the app when the modal is open - tab cycle forward', () => {
      browser.keys(['Tab']);
    });

    Terra.should.matchScreenshot('focused shifted outside the end of the modal', { selector: '#root' });

    it('shifts focus back onto interactive elements within the modal', () => {
      browser.keys(['Shift', 'Tab']);
      expect(browser.hasFocus('[type="button"][aria-label="Close"]')).to.be.equal(true);
    });

    Terra.should.matchScreenshot('modal button focused again', { selector: '#root' });
  });

  describe('Outside Modal Focus Handling', () => {
    before(() => browser.url('/#/raw/tests/terra-dialog-modal/dialog-modal/default-dialog-modal'));

    it('does not focus on interactive content within the app when modal is open and focus is shifted backwards from the modal dialog', () => {
      browser.click('#trigger-dialog-modal');
      browser.keys(['Shift', 'Shift', 'Tab']);
    });

    Terra.should.matchScreenshot('focused shifted outside the beginning of the modal', { selector: '#root' });

    it('does not focus on interactive content within the app when modal is open and focus is shifted forwards from the modal dialog', () => {
      browser.keys(['Tab', 'Tab']);
    });

    Terra.should.matchScreenshot('focused shifted outside the end of the modal', { selector: '#root' });
  });
});
