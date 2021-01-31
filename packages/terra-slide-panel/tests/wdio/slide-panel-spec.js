/*
const context = '[data-terra-dev-site-content] *:first-child';

Terra.describeViewports('Slide panel', ['large'], () => {
  it('displays Slide panel end', () => {
    browser.url('/raw/tests/terra-slide-panel/slide-panel/slide-panel-end');
    Terra.validates.element('end', { context });
  });

  it('displays Slide panel fill', () => {
    browser.url('/raw/tests/terra-slide-panel/slide-panel/slide-panel-fill');
    Terra.validates.element('fill');
  });

  it('displays Slide panel fullscreen', () => {
    browser.url('/raw/tests/terra-slide-panel/slide-panel/slide-panel-fullscreen');
    Terra.validates.element('fullscreen');
  });

  it('displays Slide panel large', () => {
    browser.url('/raw/tests/terra-slide-panel/slide-panel/slide-panel-large');
    Terra.validates.element('large');
  });

  it('displays Slide panel no fill', () => {
    browser.url('/raw/tests/terra-slide-panel/slide-panel/slide-panel-no-fill');
    Terra.validates.element('no fill');
  });

  it('displays Slide panel overlay', () => {
    browser.url('/raw/tests/terra-slide-panel/slide-panel/slide-panel-overlay');
    Terra.validates.element('overlay');
  });

  it('displays Slide panel small', () => {
    browser.url('/raw/tests/terra-slide-panel/slide-panel/slide-panel-small');
    Terra.validates.element('small');
  });

  it('displays Slide panel squish', () => {
    browser.url('/raw/tests/terra-slide-panel/slide-panel/slide-panel-squish');
    Terra.validates.element('squish');
  });

  it('displays Slide panel start', () => {
    browser.url('/raw/tests/terra-slide-panel/slide-panel/slide-panel-start');
    Terra.validates.element('start');
  });

  it('displays Large size squished slide panel', () => {
    browser.url('/raw/tests/terra-slide-panel/slide-panel/slide-panel-squish-large');
    Terra.validates.element('large squish');
  });

  it('Toggles the slide panel and hidden styles', () => {
    browser.url('/raw/tests/terra-slide-panel/slide-panel/slide-panel-toggle');
    $('#test-slide [aria-hidden="true"]').waitForExist();
    Terra.validates.element('toggle and hidden styles', { selector: '#root' });
  });

  describe('Toggle the slide panel click', () => {
    it('Opens panel and focuses on panel', () => {
      browser.url('/raw/tests/terra-slide-panel/slide-panel/slide-panel-toggle');
      $('#test-toggle').click();
      $('#test-slide [aria-hidden="false"]').waitForExist();
      browser.pause(150);
      $('#panel-content').isFocused();

      // On Tab Press focuses on the button inside the panel
      browser.keys(['Tab']);
      $('#focus-button').isFocused();

      Terra.validates.element('panel focused', { selector: '#root' });
    });
  });

  describe('Toggle the slide panel side', () => {
    it('Switches panel side', () => {
      browser.url('/raw/tests/terra-slide-panel/slide-panel/slide-panel-side-toggle');
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
}); */
