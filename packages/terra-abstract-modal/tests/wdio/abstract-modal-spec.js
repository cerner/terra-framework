const selector = '#root';

Terra.describeViewports('Abstract Modal', ['medium'], () => {
  describe('Default Modal', () => {
    it('clicks to open modal', () => {
      browser.url('/raw/tests/terra-abstract-modal/abstract-modal/default-abstract-modal');
      $('button').click();
      expect($('#root').getAttribute('inert')).toEqual('true');
      expect($('#root').getAttribute('aria-hidden')).toEqual('true');
      Terra.validates.element('open', { selector });
    });

    it('clicks outside to close modal', () => {
      $('[class*="ModalOverlay"]').click({ x: 235, y: 5 });
      Terra.validates.element('closed');
      expect($('#root').getAttribute('inert')).toEqual('false');
      expect($('#root').getAttribute('aria-hidden')).toEqual(null);
      expect($('#modal-open-button').isFocused()).toBeTruthy();
    });

    it('reopens the modal', () => {
      browser.keys('Enter');
      $('[aria-modal="true"][role="dialog"]').waitForDisplayed();
      expect($('#root').getAttribute('inert')).toEqual('true');
      expect($('#root').getAttribute('aria-hidden')).toEqual('true');
      expect($('[aria-modal="true"][role="dialog"]').isFocused()).toBeTruthy();
    });

    it('closes modal on ESC', () => {
      browser.keys('Escape');
      expect($('#root').getAttribute('inert')).toEqual('false');
      expect($('#root').getAttribute('aria-hidden')).toEqual(null);
      expect($('#modal-open-button').isFocused()).toBeTruthy();
    });
  });

  describe('Fullscreen Modal', () => {
    it('clicks to open modal', () => {
      browser.url('/raw/tests/terra-abstract-modal/abstract-modal/fullscreen-abstract-modal');
      $('button').click();
      expect($('#root').getAttribute('inert')).toEqual('true');
      expect($('#root').getAttribute('aria-hidden')).toEqual('true');
      Terra.validates.element('open', { selector });
    });

    it('clicks outside to close modal', () => {
      $('[class*="ModalOverlay"]').click({ x: 410, y: 5 });
      Terra.validates.element('closed');
      expect($('#root').getAttribute('inert')).toEqual('false');
      expect($('#root').getAttribute('aria-hidden')).toEqual(null);
      expect($('#modal-open-button').isFocused()).toBeTruthy();
    });

    it('reopens the modal', () => {
      browser.keys('Enter');
      $('[role="dialog"]').waitForDisplayed();
      expect($('#root').getAttribute('inert')).toEqual('true');
      expect($('#root').getAttribute('aria-hidden')).toEqual('true');
      expect($('[role="dialog"]').isFocused()).toBeTruthy();
    });

    it('closes modal on ESC', () => {
      browser.keys('Escape');
      expect($('#root').getAttribute('inert')).toEqual('false');
      expect($('#root').getAttribute('aria-hidden')).toEqual(null);
      expect($('#modal-open-button').isFocused()).toBeTruthy();
    });
  });

  describe('Disabled Close On Esc', () => {
    it('displays an open modal', () => {
      browser.url('/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-disable-close-on-esc');
      Terra.validates.element('open', { selector });
    });

    it('attempts to close modal with ESC', () => {
      browser.keys('Escape');
    });

    it('validates close on escape is disabled and the modal was not removed', () => {
      expect($('div[role="dialog"]').isExisting()).toBeTruthy();
    });
  });

  describe('Disabled Close On Outside Click', () => {
    it('displays an open modal', () => {
      browser.url('/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-disable-close-on-outside-click');
      Terra.validates.element('open', { selector });
    });

    it('attempts to close modal with outside click', () => {
      $('[class*="ModalOverlay"]').click({ button: 'left', x: 235, y: 5 });
    });

    it('validates close on outside click is disabled and the modal was not removed', () => {
      expect($('div[role="dialog"]').isExisting()).toBeTruthy();
    });
  });

  describe('Modal Focus Handling', () => {
    describe('Focusable Content', () => {
      it('clicks to open modal', () => {
        browser.url('/raw/tests/terra-abstract-modal/abstract-modal/default-abstract-modal');
        $('button').click();
      });

      it('focuses on the modal when opened', () => {
        expect($('[aria-modal="true"][role="dialog"]').isFocused()).toBeTruthy();
        Terra.validates.element('modal focused', { selector });
      });

      it('focuses on interactive elements within the modal', () => {
        browser.keys(['Tab']);
        expect($('#modal-button').isFocused()).toBeTruthy();
        Terra.validates.element('modal button focused', { selector });
      });

      it('shifts focus forward away from the modal dialog', () => {
        browser.keys(['Tab']);
        expect($('#modal-button').isFocused()).toBeFalsy();
        expect($('#modal-open-button').isFocused()).toBeFalsy();
        expect($('[aria-modal="true"][role="dialog"]').isFocused()).toBeFalsy();
        Terra.validates.element('focused shifted outside the end of the modal', { selector });
      });

      it('shifts focus back onto interactive elements within the modal', () => {
        browser.keys(['Shift', 'Tab']);
        expect($('#modal-button').isFocused()).toBeTruthy();
        Terra.validates.element('modal button focused again', { selector });
      });

      it('shifts focus backwards away from the modal dialog', () => {
        browser.keys(['Shift', 'Tab']);
        expect($('#modal-button').isFocused()).toBeFalsy();
        expect($('#modal-open-button').isFocused()).toBeFalsy();
        expect($('[aria-modal="true"][role="dialog"]').isFocused()).toBeFalsy();
        Terra.validates.element('focused shifted outside the beginning of the modal', { selector });
      });

      it('shifts focus back onto interactive elements within the modal', () => {
        browser.keys(['Shift', 'Tab']);
        expect($('#modal-button').isFocused()).toBeTruthy();
      });
    });

    describe('No Focusable Content', () => {
      it('does focus on the modal when opened', () => {
        browser.url('/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-no-focusable-content');
        expect($('[aria-modal="true"][role="dialog"]').isFocused()).toBeTruthy();
        Terra.validates.element('focus on modal', { selector });
      });
    });
  });
});

Terra.describeViewports('Abstract Modal', ['enormous'], () => {
  it('displays abstract modal with content overflow', () => {
    browser.url('/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-content-overflow');
    Terra.validates.element('content overflow', { selector });
  });
});
