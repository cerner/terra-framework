const selector = '#root';

Terra.describeViewports('Abstract Modal', ['medium'], () => {
  describe('Default Modal', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/default-abstract-modal'));

    it('clicks to open modal', () => {
      browser.click('button');
      Terra.validates.element('open', { selector });
    });

    it('clicks outside to close modal', () => {
      browser.moveToObject('[class*="ModalOverlay"]', 235, 5)
        .leftClick();
      Terra.validates.element('closed');
      expect(browser.hasFocus('#modal-open-button')).to.be.true;
    });

    it('reopens the modal', () => {
      browser.keys('Enter');
    });

    it('closes modal on ESC', () => {
      browser.keys('Escape');
      expect(browser.hasFocus('#modal-open-button')).to.be.true;
    });
  });

  describe('Fullscreen Modal', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/fullscreen-abstract-modal'));

    it('clicks to open modal', () => {
      browser.click('button');
      Terra.validates.element('open', { selector });
    });

    it('clicks outside to close modal', () => {
      browser.moveToObject('[class*="ModalOverlay"]', 235, 5)
        .leftClick();
      Terra.validates.element('closed');
      expect(browser.hasFocus('#modal-open-button')).to.be.true;
    });

    it('reopens the modal', () => {
      browser.keys('enter');
    });

    it('closes modal on ESC', () => {
      browser.keys('Escape');
      expect(browser.hasFocus('#modal-open-button')).to.be.true;
    });
  });

  describe('Disabled Close On Esc', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-disable-close-on-esc'));

    Terra.it.validatesElement('open', { selector });

    it('attempts to close modal with ESC', () => {
      browser.keys('Escape');
    });

    it('validates close on escape is disabled and the modal was not removed', () => {
      expect(browser.isExisting('div[role="dialog"]')).to.be.true;
    });
  });

  describe('Disabled Close On Outside Click', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-disable-close-on-outside-click'));

    Terra.it.validatesElement('open', { selector });

    it('attempts to close modal with outside click', () => {
      browser.moveToObject('[class*="ModalOverlay"]', 235, 5)
        .leftClick();
    });

    it('validates close on outside click is disabled and the modal was not removed', () => {
      expect(browser.isExisting('div[role="dialog"]')).to.be.true;
    });
  });

  describe('Modal Focus Handling', () => {
    describe('Focusable Content', () => {
      before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/default-abstract-modal'));

      it('clicks to open modal', () => {
        browser.click('button');
      });

      it('focuses on the modal when opened', () => {
        expect(browser.hasFocus('[aria-modal="true"][role="dialog"]')).to.be.true;
        Terra.validates.element('modal focused', { selector });
      });

      it('focuses on interactive elements within the modal', () => {
        browser.keys(['Tab']);
        expect(browser.hasFocus('#modal-button')).to.be.true;
        Terra.validates.element('modal button focused', { selector });
      });

      it('shifts focus forward away from the modal dialog', () => {
        browser.keys(['Tab']);
        expect(browser.hasFocus('#modal-button')).to.be.false;
        expect(browser.hasFocus('#modal-open-button')).to.be.false;
        expect(browser.hasFocus('[aria-modal="true"][role="dialog"]')).to.be.false;
        Terra.validates.screenshot('focused shifted outside the end of the modal', { selector });
      });

      it('shifts focus back onto interactive elements within the modal', () => {
        browser.keys(['Shift', 'Tab']);
        expect(browser.hasFocus('#modal-button')).to.be.true;
        Terra.validates.screenshot('modal button focused again', { selector });
      });

      it('shifts focus backwards away from the modal dialog', () => {
        browser.keys(['Shift', 'Tab']);
        expect(browser.hasFocus('#modal-button')).to.be.false;
        expect(browser.hasFocus('#modal-open-button')).to.be.false;
        expect(browser.hasFocus('[aria-modal="true"][role="dialog"]')).to.be.false;
        Terra.validates.screenshot('focused shifted outside the beginning of the modal', { selector });
      });

      it('shifts focus back onto interactive elements within the modal', () => {
        browser.keys(['Shift', 'Tab']);
        expect(browser.hasFocus('#modal-button')).to.be.true;
      });
    });

    describe('No Focusable Content', () => {
      before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-no-focusable-content'));

      it('does focus on the modal when opened', () => {
        expect(browser.hasFocus('[aria-modal="true"][role="dialog"]')).to.be.true;
        Terra.validates.element({ selector });
      });
    });
  });
});

Terra.describeViewports('Abstract Modal', ['enormous'], () => {
  describe('Content Overflow', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-content-overflow'));

    Terra.it.validatesElement({ selector });
  });
});
