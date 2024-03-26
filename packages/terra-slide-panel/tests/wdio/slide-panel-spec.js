const context = '[data-terra-dev-site-content] *:first-child';

Terra.describeViewports('Slide panel', ['large'], () => {
  it('displays Slide panel end', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-end');
    Terra.validates.element('end', { context });
  });

  it('displays Slide panel fill', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-fill');
    Terra.validates.element('fill', { selector: '#root' });
  });

  it('displays Slide panel fullscreen', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-fullscreen');
    Terra.validates.element('fullscreen');
  });

  it('displays Slide panel large', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-large');
    Terra.validates.element('large');
  });

  it('displays Slide panel no fill', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-no-fill');
    Terra.validates.element('no fill');
  });

  it('displays Slide panel overlay', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-overlay');
    Terra.validates.element('overlay');
  });

  it('displays Slide panel small', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-small');
    Terra.validates.element('small');
  });

  it('displays Slide panel squish', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-squish');
    Terra.validates.element('squish');
  });

  it('displays Slide panel start', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-start');
    Terra.validates.element('start');
  });

  it('displays Large size squished slide panel', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-squish-large');
    Terra.validates.element('large squish');
  });

  it('displays multiple slide panels', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-multiple-panels');
    Terra.validates.element('multiple panels');
  });

  it('Toggles the slide panel and hidden styles', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-toggle');
    $('#test-slide [aria-label="Panel content area"][aria-hidden="true"]').waitForExist();
    Terra.validates.element('toggle and hidden styles', { selector: '#root' });
  });

  describe('Toggle the slide panel click', () => {
    it('Opens panel and focuses on panel', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-toggle');
      const disclosingButton = $('#test-toggle');
      // the disclosing button should not have aria-expanded property yet
      expect(disclosingButton.getAttribute('aria-expanded')).toBeFalsy();
      disclosingButton.click();
      $('#test-slide [aria-label="Panel content area"][aria-hidden="false"]').waitForExist();
      browser.pause(150);
      expect($('[aria-label="Panel content area"]').isFocused()).toBeTruthy();
      // the disclosing button should have aria-expanded property set to true
      expect(disclosingButton.getAttribute('aria-expanded')).toBe('true');

      // On Tab Press focuses on the button inside the panel
      browser.keys(['Tab']);
      expect($('#focus-button').isFocused()).toBeTruthy();

      Terra.validates.element('panel focused', { selector: '#root' });
    });
    it('Closes panel and focuses on toggle button with keyboard controls', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-toggle');

      browser.keys(['Tab']);
      const disclosingButton = $('#test-toggle');
      // the disclosing button should not have aria-expanded property yet
      expect(disclosingButton.getAttribute('aria-expanded')).toBeFalsy();
      expect(disclosingButton.isFocused()).toBeTruthy();
      browser.keys(['Enter']);
      $('#test-slide [aria-label="Panel content area"][aria-hidden="false"]').waitForExist();
      browser.pause(150);

      browser.keys(['Tab']);
      expect($('#focus-button').isFocused()).toBeTruthy();
      // the disclosing button should have aria-expanded property set to true
      expect(disclosingButton.getAttribute('aria-expanded')).toBe('true');

      browser.keys(['Enter']);
      $('#test-slide [aria-label="Panel content area"][aria-hidden="true"]').waitForExist();

      expect($('#test-toggle').isFocused()).toBeTruthy();
      // the disclosing button should have aria-expanded property set to false
      expect(disclosingButton.getAttribute('aria-expanded')).toBe('false');

      browser.pause(150);

      Terra.validates.element('toggle button focused', { selector: '#root' });
    });
    it('Closes panel and focuses on toggle button with mouse controls', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-toggle');
      $('#test-toggle').click();
      $('#test-slide [aria-label="Panel content area"][aria-hidden="false"]').waitForExist();
      browser.pause(150);

      $('#focus-button').click();
      $('#test-slide [aria-label="Panel content area"][aria-hidden="true"]').waitForExist();
      browser.pause(150);

      expect($('#test-toggle').isFocused()).toBeTruthy();
      Terra.validates.element('toggle button focused mouse', { selector: '#root' });
    });
    it('Closes panel and focuses on toggle button with multiple buttons with keyboard controls', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-multiple-buttons-toggle');

      browser.keys(['Tab', 'Tab']);
      expect($('#test-toggle').isFocused()).toBeTruthy();
      browser.keys(['Enter']);
      $('#test-slide [aria-label="Panel content area"][aria-hidden="false"]').waitForExist();
      browser.pause(150);

      browser.keys(['Shift', 'Tab']);
      expect($('#another-button').isFocused()).toBeTruthy();

      browser.keys(['Tab', 'Tab']);
      expect($('#focus-button').isFocused()).toBeTruthy();
      browser.keys(['Enter']);
      $('#test-slide [aria-label="Panel content area"][aria-hidden="true"]').waitForExist();

      browser.pause(150);

      expect($('#test-toggle').isFocused()).toBeTruthy();

      Terra.validates.element('toggle button focused with multiple buttons', { selector: '#root' });
    });
    it('Closes panel and focuses on toggle button with multiple buttons with mouse controls', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-multiple-buttons-toggle');

      $('#test-toggle').click();
      $('#test-slide [aria-label="Panel content area"][aria-hidden="false"]').waitForExist();
      browser.pause(150);

      browser.keys(['Shift', 'Tab']);
      expect($('#another-button').isFocused()).toBeTruthy();

      $('#focus-button').click();
      $('#test-slide [aria-label="Panel content area"][aria-hidden="true"]').waitForExist();

      browser.pause(150);

      expect($('#test-toggle').isFocused()).toBeTruthy();

      Terra.validates.element('toggle button focused with multiple buttons mouse', { selector: '#root' });
    });
  });

  describe('Toggle the slide panel side', () => {
    it('Switches panel side', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-side-toggle');
      expect($('#panel-content').getText()).toEqual('Increase Count 0');

      $('#focus-button').click();
      expect($('#panel-content').getText()).toEqual('Increase Count 1');

      Terra.validates.element('panel with end position', { selector: '#root' });

      $('#test-toggle').click();
      $('#panel-content').waitForExist();
      expect($('#panel-content').getText()).toEqual('Increase Count 1');

      Terra.validates.element('panel with start position', { selector: '#root' });
    });
  });

  describe('Panel is open by default on page load', () => {
    it('Closes panel and focuses on main div', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-toggled-on');

      $('#toggle-panel-button').click();

      expect($('[aria-label="Main content area"]').isFocused()).toBeTruthy();
    });
  });

  describe('Main content is not focusable when fullscreen panel is open', () => {
    it('Tabs back out of panel content and does not select main content button element', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-toggled-on-fullscreen');

      $('#test-slide [aria-label="Panel content area"][aria-hidden="false"]').waitForExist();
      browser.keys(['Tab']);

      expect($('#close-panel-button').isFocused()).toBeTruthy();
      browser.keys(['Shift', 'Tab']);

      expect($('#close-panel-button').isFocused()).toBeFalsy();
      expect($('#toggle-panel-button').isFocused()).toBeFalsy();
    });
  });

  describe('Non-focusable element used to disclose slide panel', () => {
    it('does not focus SVG when it is the disclosing node', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-svg-toggle');
      const disclosingElement = $('#test-click-svg');
      // the disclosing non-focusable element should not have aria-expanded property set
      expect(disclosingElement.getAttribute('aria-expanded')).toBeFalsy();
      $(disclosingElement).moveTo();
      $(disclosingElement).click();
      $('#test-slide [aria-label="Panel content area"][aria-hidden="false"]').waitForExist();
      browser.keys(['Tab']);
      expect($('#focus-button').isFocused()).toBeTruthy();
      // the disclosing non-focusable element should not have aria-expanded property set
      expect(disclosingElement.getAttribute('aria-expanded')).toBeFalsy();
      browser.keys(['Enter']);

      expect($('[aria-label="Main content area"]').isFocused()).toBeTruthy();
      expect($(disclosingElement).isFocused()).toBeFalsy();
    });

    it('focuses main node when disclosing node has undefined focus', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-svg-toggle');
      const disclosingElement = $('#test-p-click');
      // the disclosing non-focusable element should not have aria-expanded property set
      expect(disclosingElement.getAttribute('aria-expanded')).toBeFalsy();
      disclosingElement.moveTo();
      disclosingElement.click();
      $('#test-slide [aria-label="Panel content area"][aria-hidden="false"]').waitForExist();
      browser.keys(['Tab']);
      expect($('#focus-button').isFocused()).toBeTruthy();
      // the disclosing non-focusable element should not have aria-expanded property set
      expect(disclosingElement.getAttribute('aria-expanded')).toBeFalsy();
      browser.keys(['Enter']);

      expect($('[aria-label="Main content area"]').isFocused()).toBeTruthy();
      expect($('#test-click-svg').isFocused()).toBeFalsy();
    });
  });

  describe('Slide panel with no mainContent prop passed', () => {
    it('sets focus and aria-expanded props correctly if disclosing node is a regular button', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-no-main-content');
      const disclosureButton = $('#mainToggleBtn');
      // the disclosing button should not have aria-expanded property set
      expect(disclosureButton.getAttribute('aria-expanded')).toBeFalsy();
      $(disclosureButton).moveTo();
      $(disclosureButton).click();
      $('[aria-label="Panel content area"][aria-hidden="false"]').waitForExist();
      browser.keys(['Tab']);
      expect($('#panelToggleBtn').isFocused()).toBeTruthy();
      // the disclosing button should have aria-expanded property set
      expect(disclosureButton.getAttribute('aria-expanded')).toBe('true');
      browser.keys(['Enter']);
      expect(disclosureButton.isFocused()).toBeTruthy();
      expect(disclosureButton.getAttribute('aria-expanded')).toBe('false');
    });

    it('sets focus and aria-expanded props correctly if disclosing node is not focusable', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-no-main-content');
      const disclosureElement = $('#mainToggleParagraph');
      // the disclosing button should not have aria-expanded property set
      expect(disclosureElement.getAttribute('aria-expanded')).toBeFalsy();
      $(disclosureElement).moveTo();
      $(disclosureElement).click();
      $('[aria-label="Panel content area"][aria-hidden="false"]').waitForExist();
      browser.keys(['Tab']);
      expect($('#panelToggleBtn').isFocused()).toBeTruthy();
      // the disclosing button should not have aria-expanded property set
      expect(disclosureElement.getAttribute('aria-expanded')).toBeFalsy();
      browser.keys(['Enter']);
      expect(disclosureElement.isFocused()).toBeFalsy();
    });
  });
});
