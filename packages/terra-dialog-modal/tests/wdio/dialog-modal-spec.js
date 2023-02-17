const selector = '#root';

Terra.describeViewports('Dialog Modal', ['tiny', 'medium', 'large'], () => {
  describe('Default Dialog Modal', () => {
    it('Default Dialog Modal', () => {
      browser.url('/raw/tests/terra-dialog-modal/dialog-modal/default-dialog-modal');
      $('#trigger-dialog-modal').click();

      Terra.validates.element('default', { selector });
    });
  });

  describe('Dialog Modal With Long text', () => {
    it('Dialog Modal With Long text', () => {
      browser.url('/raw/tests/terra-dialog-modal/dialog-modal/dialog-modal-with-long-text');
      $('#trigger-dialog-modal').click();

      Terra.validates.element('long text', { selector });
    });
  });

  describe('Dialog Modal With Custom Header and Custom Footer', () => {
    it('Dialog Modal With Custom Header and Custom Footer', () => {
      browser.url('/raw/tests/terra-dialog-modal/dialog-modal/dialog-modal-with-custom-header-and-custom-footer');
      $('#trigger-dialog-modal').click();

      Terra.validates.element('custom header and footer', { selector });
    });
  });
});

describe('Dialog Modal', () => {
  describe('Within Modal Focus Handling', () => {
    it('focuses on the modal when opened', () => {
      browser.url('/raw/tests/terra-dialog-modal/dialog-modal/default-dialog-modal');
      $('#trigger-dialog-modal').click();
      expect($('[aria-modal="true"][role="dialog"]').isFocused()).toEqual(true);
      Terra.validates.element('modal is focused on open', { selector: '#root' });
    });

    it('focuses on interactive elements within the modal', () => {
      browser.keys(['Tab']);
      expect($('[type="button"][data-terra-action-header]').isFocused()).toEqual(true);
      Terra.validates.element('modal button focused', { selector: '#root' });
    });

    it('does not focus on interactive content within the app when the modal is open - tab cycle forward', () => {
      browser.keys(['Tab']);
      Terra.validates.element('focused shifted outside the end of the modal on tab cycle', { selector: '#root' });
    });

    it('shifts focus back onto interactive elements within the modal', () => {
      browser.keys(['Shift', 'Tab']);
      expect($('[type="button"][data-terra-action-header]').isFocused()).toEqual(true);
      Terra.validates.element('modal button focused again', { selector: '#root' });
    });
  });

  describe('Outside Modal Focus Handling', () => {
    it('does not focus on interactive content within the app when modal is open and focus is shifted backwards from the modal dialog', () => {
      browser.keys(['Shift', 'Tab']);
      Terra.validates.element('focused shifted outside the beginning of the modal', { selector: '#root' });
    });

    it('does not focus on interactive content within the app when modal is open and focus is shifted forwards from the modal dialog', () => {
      browser.keys(['Tab', 'Tab', 'Tab']);
      Terra.validates.element('focused shifted outside the end of the modal', { selector: '#root' });
    });
  });

  describe('Closing Select inside modal using escape', () => {
    it('Opens the Select inside the modal', () => {
      browser.url('/raw/tests/terra-dialog-modal/dialog-modal/dialog-modal-with-select');
      $('#trigger-dialog-modal').click();
      $('[data-terra-form-select-toggle]').click();
      Terra.validates.element('Select Opened inside a modal', { selector: '#root' });
    });

    it('Closes only the select on pressing Escape', () => {
      browser.keys(['Escape']);
      Terra.validates.element('Select Closed', { selector: '#root' });
    });

    it('Closes the modal on pressing Escape', () => {
      browser.keys(['Escape']);
      Terra.validates.element('Modal Closed', { selector: '#root' });
    });
  });
});
