describe('Abstract Modal', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Append Class', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-append-class'));

    Terra.it.validatesElement({ selector: 'div[role="dialog"]' });
  });

  describe('Content Overflow', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-content-overflow');
      browser.setViewportSize({ height: 1684, width: 1870 });
    });

    after(() => browser.setViewportSize(Terra.viewports('medium')[0]));

    Terra.it.validatesElement({ selector: 'div[role="dialog"]' });
  });

  describe('Custom Props', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-custom-props'));
    it('checks for custom id prop', () => {
      expect(browser.getAttribute('div[role="dialog"]', 'id')).to.equal('custom-props');
    });
  });

  describe('Disable Close On Esc', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-disable-close-on-esc'));

    Terra.it.validatesElement('modal present', { selector: 'div[role="dialog"]' });

    it('attempts to close modal with ESC', () => {
      browser.keys('Escape');
    });

    Terra.it.validatesElement('modal present', { selector: 'div[role="dialog"]' });
  });

  describe('Within Modal Focus Handling', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-custom-props'));

    it('focuses on the modal when opened', () => {
      expect(browser.hasFocus('[aria-modal="true"][role="dialog"]')).to.be.equal(true);
    });

    Terra.it.validatesElement('modal is focused on open', { selector: '#root' });

    it('focuses on interactive elements within the modal', () => {
      browser.keys(['Tab']);
      expect(browser.hasFocus('#focus-button')).to.be.equal(true);
    });

    Terra.it.validatesElement('modal button focused', { selector: '#root' });

    it('does not focus on interactive content within the app when the modal is open - tab cycle forward', () => {
      browser.keys(['Tab']);
      expect(browser.hasFocus('#focus-button')).to.be.equal(false);
    });

    // The following line was changed from validateElement to matchScreenshot to avoid an axe bug.
    // Checking accessibility after shifting tab focus outside the modal prevented tab focus from being returned to the modal.
    Terra.it.matchesScreenshot('focused shifted outside the end of the modal', { selector: '#root' });

    it('shifts focus back onto interactive elements within the modal', () => {
      browser.keys(['Shift', 'Tab']);
      expect(browser.hasFocus('#focus-button')).to.be.equal(true);
    });

    Terra.it.validatesElement('modal button focused again', { selector: '#root' });
  });

  describe('Outside Modal Focus Handling', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-custom-props'));

    it('does not focus on interactive content within the app when modal is open and focus is shifted backwards from the modal dialog', () => {
      browser.keys(['Shift', 'Tab']);
      expect(browser.hasFocus('#focus-button')).to.be.equal(false);
    });

    Terra.it.matchesScreenshot('focused shifted outside the beginning of the modal', { selector: '#root' });

    it('does not focus on interactive content within the app when modal is open and focus is shifted forwards from the modal dialog', () => {
      browser.keys(['Tab', 'Tab', 'Tab']);
      expect(browser.hasFocus('#focus-button')).to.be.equal(false);
    });

    Terra.it.matchesScreenshot('focused shifted outside the end of the modal', { selector: '#root' });
  });

  describe('Disable Close On Outside Click', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-disable-close-on-outside-click'));

    Terra.it.validatesElement('modal present', { selector: 'div[role="dialog"]' });

    it('attempts to close modal with outside click', () => {
      browser.leftClick('button');
    });
    Terra.it.validatesElement('modal present', { selector: 'div[role="dialog"]' });
  });

  describe('Is Fullscreen', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-is-fullscreen'));

    Terra.it.validatesElement('modal present', { selector: 'div[role="dialog"]' });

    it('clicks outside to close modal', () => {
      browser.moveToObject('[class*="ModalOverlay"]', 235, 5)
        .leftClick();
    });
    Terra.it.validatesElement('modal closed');

    it('opens the modal', () => {
      browser.click('button');
    });
    Terra.it.validatesElement('modal present', { selector: 'div[role="dialog"]' });

    it('closes modal on ESC', () => {
      browser.keys('Escape');
    });
    Terra.it.validatesElement('modal closed, with focus');
  });

  describe('Is Open', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-is-open'));

    Terra.it.validatesElement('modal closed');

    it('clicks to open modal', () => {
      browser.click('button');
    });
    Terra.it.validatesElement({ selector: 'div[role="dialog"]' });

    it('closes the modal on ESC', () => {
      browser.keys('Escape');
    });
    Terra.it.validatesElement('modal closed, with focus');
  });

  describe('No Focusable Content', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-no-focusable-content'));

    Terra.it.validatesElement({ selector: 'div[role="dialog"]' });
  });

  describe('Override Role', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-override-role'));

    Terra.it.validatesElement({ selector: 'div[role="alertdialog"]' });
  });
});
