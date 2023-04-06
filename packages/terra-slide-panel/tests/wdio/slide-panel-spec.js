const context = '[data-terra-dev-site-content] *:first-child';

Terra.describeViewports('Slide panel', ['large'], () => {
  it('displays Slide panel end', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-end');
    Terra.validates.element('end', { context });
  });

  it('displays Slide panel fill', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-fill');
    Terra.validates.element('fill');
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

  it('Toggles the slide panel and hidden styles', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-toggle');
    $('#test-slide [aria-hidden="true"]').waitForExist();
    Terra.validates.element('toggle and hidden styles', { selector: '#root' });
  });

  describe('Toggle the slide panel click', () => {
    it('Opens panel and focuses on panel', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-toggle');
      $('#test-toggle').click();
      $('#test-slide [aria-hidden="false"]').waitForExist();
      browser.pause(150);
      $('#panel-content').isFocused();

      // On Tab Press focuses on the button inside the panel
      browser.keys(['Tab']);
      $('#focus-button').isFocused();

      Terra.validates.element('panel focused', { selector: '#root' });
    });
    it('Closes panel and focuses on toggle button with keyboard controls', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-toggle');

      browser.keys(['Tab']);
      $('#test-toggle').isFocused();
      browser.keys(['Enter']);
      $('#test-slide [aria-hidden="false"]').waitForExist();
      browser.pause(150);

      browser.keys(['Tab']);
      $('#focus-button').isFocused();
      browser.keys(['Enter']);
      $('#test-slide [aria-hidden="true"]').waitForExist();

      $('#test-toggle').isFocused();

      browser.pause(150);

      Terra.validates.element('toggle button focused', { selector: '#root' });
    });
    it('Closes panel and focuses on toggle button with mouse controls', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-toggle');
      $('#test-toggle').click();
      $('#test-slide [aria-hidden="false"]').waitForExist();
      browser.pause(150);

      $('#focus-button').click();
      $('#test-slide [aria-hidden="true"]').waitForExist();

      $('#test-toggle').isFocused();

      browser.pause(150);

      Terra.validates.element('toggle button focused', { selector: '#root' });
    });
    it('Closes panel and focuses on toggle button with multiple buttons with keyboard controls', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-multiple-buttons-toggle');

      browser.keys(['Tab', 'Tab']);
      $('#test-toggle').isFocused();
      browser.keys(['Enter']);
      $('#test-slide [aria-hidden="false"]').waitForExist();
      browser.pause(150);

      browser.keys(['Shift', 'Tab']);
      $('#another-button').isFocused();

      browser.keys(['Tab', 'Tab']);
      $('#focus-button').isFocused();
      browser.keys(['Enter']);
      $('#test-slide [aria-hidden="true"]').waitForExist();

      browser.pause(150);

      $('#test-toggle').isFocused();

      Terra.validates.element('toggle button focused with multiple buttons', { selector: '#root' });
    });
    it('Closes panel and focuses on toggle button with multiple buttons with mouse controls', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-multiple-buttons-toggle');

      $('#test-toggle').click();
      $('#test-slide [aria-hidden="false"]').waitForExist();
      browser.pause(150);

      browser.keys(['Shift', 'Tab']);
      $('#another-button').isFocused();

      $('#focus-button').click();
      $('#test-slide [aria-hidden="true"]').waitForExist();

      browser.pause(150);

      $('#test-toggle').isFocused();

      Terra.validates.element('toggle button focused with multiple buttons', { selector: '#root' });
    });
    it('Closes panel and focuses on main div if panel is closed after open on load', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-toggled-on');

      $('#toggle-panel-button').click();
      $('#test-slide [aria-hidden="true"]').waitForExist();
      browser.pause(150);

      $('#main-div').isFocused();
      Terra.validates.element('main div focused after panel closed', { selector: '#root' });
    });
  });

  describe('Toggle the slide panel side', () => {
    it('Switches panel side', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-panel/slide-panel-side-toggle');
      expect($('#test-slide [aria-hidden="false"]').getText()).toEqual('Increase Count 0');

      $('#focus-button').click();
      expect($('#test-slide [aria-hidden="false"]').getText()).toEqual('Increase Count 1');

      Terra.validates.element('panel with end position', { selector: '#root' });

      $('#test-toggle').click();
      $('#test-slide [aria-hidden="false"]').waitForExist();
      expect($('#test-slide [aria-hidden="false"]').getText()).toEqual('Increase Count 1');

      Terra.validates.element('panel with start position', { selector: '#root' });
    });
  });
});
