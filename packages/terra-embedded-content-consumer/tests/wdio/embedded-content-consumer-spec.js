Terra.describeViewports('Embedded Content Consumer', ['tiny', 'large'], () => {
  it('displays default embedded content consumer', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/embedded-content-consumer/consumers/basic-consumer');
    Terra.validates.element('default');
  });

  describe('custom-event', () => {
    it('displays with custom events', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/embedded-content-consumer/consumers/custom-event-consumer');
      $('#CustomEvent').waitForDisplayed();
      Terra.validates.element('custom event');
    });

    it('Provider triggers EventA message', () => {
      const myFrame = $('iframe[id="custom-event-consumer-frame"]');
      browser.switchToFrame(myFrame);

      $('#EventA').click();
      browser.switchToParentFrame();
      $('#root').moveTo(0, 0);
      Terra.validates.element('EventA for custom-event');
    });
  });

  describe('custom-events', () => {
    it('displays with custom event', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/embedded-content-consumer/consumers/custom-events-consumer');
      $('#CustomEvents').waitForDisplayed();
      Terra.validates.element('custom events');
    });

    it('Provider triggers EventA message', () => {
      const myFrame = $('iframe[id="custom-events-consumer-frame"]');
      browser.switchToFrame(myFrame);

      $('#EventA').click();
      browser.switchToParentFrame();
      $('#root').moveTo(0, 0);
      Terra.validates.element('EventA for custom-events');
    });

    it('successfully replied with EventA message', () => {
      const myFrame = $('iframe[id="custom-events-consumer-frame"]');
      browser.switchToFrame(myFrame);

      expect($('#embedded-content-consumer-reply')).toHaveTextContaining('eventA');
      browser.switchToParentFrame();
    });

    it('Provider triggers EventB message', () => {
      const myFrame = $('iframe[id="custom-events-consumer-frame"]');
      browser.switchToFrame(myFrame);

      $('#EventB').click();
      browser.switchToParentFrame();
      $('#root').moveTo(0, 0);
      Terra.validates.element('EventB');
    });

    it('successfully replied with EventB message', () => {
      const myFrame = $('iframe[id="custom-events-consumer-frame"]');
      browser.switchToFrame(myFrame);

      expect($('#embedded-content-consumer-reply')).toHaveTextContaining('eventB');
    });
  });

  describe('data-status', () => {
    it('has mounted, launched, and authorized elements', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/embedded-content-consumer/consumers/data-status-consumer');
      const timeout = browser.options.waitforTimeout + 5000;
      $('iframe[id="data-embedded-consumer-data-status"]').waitForDisplayed({ timeout });

      const myFrame = $('iframe[id="data-embedded-consumer-data-status"]');
      browser.switchToFrame(myFrame);

      expect($('#Mounted').isExisting());
      expect($('#Launched').isExisting());
      expect($('#Authorized').isExisting());
    });
  });

  describe('consumer with srcdoc', () => {
    it('renders content inside of an iframe using content set in srcdoc', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/embedded-content-consumer/consumers/basic-consumer-with-srcdoc');
      $('iframe[id="iframe-with-srcdoc"]').waitForDisplayed();

      Terra.validates.element('consumer with srcdoc');
    });
  });

  describe('scrolling', () => {
    it('scrolls to the content', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/embedded-content-consumer/consumers/basic-consumer-with-scrolling');
      $('iframe[id="basic-consumer-with-scrolling"]').waitForDisplayed();

      const myFrame = $('iframe[id="basic-consumer-with-scrolling"]');
      browser.switchToFrame(myFrame);

      const p = $('<p>');
      p.scrollIntoView();

      browser.switchToParentFrame();

      Terra.validates.element('Scroll content into view');
    });
  });

  describe('visual focus indicator', () => {
    it('shows visual focus indicator on the frame when clicked', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/embedded-content-consumer/consumers/basic-consumer-with-scrolling');
      $('iframe[id="basic-consumer-with-scrolling"]').waitForDisplayed();

      const myFrame = $('iframe[id="basic-consumer-with-scrolling"]');
      browser.switchToFrame(myFrame);

      const p = $('<p>');
      p.scrollIntoView();
      p.click();

      browser.switchToParentFrame();

      Terra.validates.element('focus indicator on the frame when clicked', { selector: '#site' });
    });

    it('shows visual focus indicator on the frame when tabbing through and focus is on the frame', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/embedded-content-consumer/consumers/basic-consumer');
      browser.keys('Tab');

      Terra.validates.element('focus indicator on the frame when tabbing through', { selector: '#site' });
    });
  });
});
