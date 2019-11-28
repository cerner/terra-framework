const selector = '#root';

Terra.describeViewports('Dialog Modal', ['tiny', 'medium', 'large'], () => {
  describe('Default Dialog Modal', () => {
    it('Default Dialog Modal', () => {
      browser.url('/#/raw/tests/terra-dialog-modal/dialog-modal/default-dialog-modal');
      browser.click('#trigger-dialog-modal');

      Terra.validates.element({ selector });
    });
  });

  describe('Dialog Modal With Long text', () => {
    it('Dialog Modal With Long text', () => {
      browser.url('/#/raw/tests/terra-dialog-modal/dialog-modal/dialog-modal-with-long-text');
      browser.click('#trigger-dialog-modal');

      Terra.validates.element({ selector });
    });
  });

  describe('Dialog Modal With Custom Header and Custom Footer', () => {
    it('Dialog Modal With Custom Header and Custom Footer', () => {
      browser.url('/#/raw/tests/terra-dialog-modal/dialog-modal/dialog-modal-with-custom-header-and-custom-footer');
      browser.click('#trigger-dialog-modal');

      Terra.validates.element({ selector });
    });
  });
});

describe('Dialog Modal', () => {
  describe('Within Modal Focus Handling', () => {
    before(() => browser.url('/#/raw/tests/terra-dialog-modal/dialog-modal/default-dialog-modal'));

    it('focuses on the modal when opened', () => {
      browser.click('#trigger-dialog-modal');
      expect(browser.hasFocus('[aria-modal="true"][role="dialog"]')).to.be.equal(true);
    });

    Terra.it.matchesScreenshot('modal is focused on open', { selector: '#root' });

    it('focuses on interactive elements within the modal', () => {
      browser.keys(['Tab']);
      expect(browser.hasFocus('[type="button"][aria-label="Close"]')).to.be.equal(true);
    });

    Terra.it.matchesScreenshot('modal button focused', { selector: '#root' });

    it('does not focus on interactive content within the app when the modal is open - tab cycle forward', () => {
      browser.keys(['Tab']);
    });

    Terra.it.matchesScreenshot('focused shifted outside the end of the modal', { selector: '#root' });

    it('shifts focus back onto interactive elements within the modal', () => {
      browser.keys(['Shift', 'Tab']);
      expect(browser.hasFocus('[type="button"][aria-label="Close"]')).to.be.equal(true);
    });

    Terra.it.matchesScreenshot('modal button focused again', { selector: '#root' });
  });

  describe('Outside Modal Focus Handling', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-dialog-modal/dialog-modal/default-dialog-modal');
      browser.click('#trigger-dialog-modal');
      browser.keys(['Tab']);
    });

    it('does not focus on interactive content within the app when modal is open and focus is shifted backwards from the modal dialog', () => {
      browser.keys(['Shift', 'Tab']);
    });

    Terra.it.matchesScreenshot('focused shifted outside the beginning of the modal', { selector: '#root' });

    it('does not focus on interactive content within the app when modal is open and focus is shifted forwards from the modal dialog', () => {
      browser.keys(['Tab', 'Tab', 'Tab']);
    });

    Terra.it.matchesScreenshot('focused shifted outside the end of the modal', { selector: '#root' });
  });
});
