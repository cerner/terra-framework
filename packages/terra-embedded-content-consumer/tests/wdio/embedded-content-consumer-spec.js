/* global $ */
Terra.describeViewports('Embedded Content Consumer', ['tiny', 'large'], () => {
  it('displays default embedded content consumer', () => {
    browser.url('/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/basic-consumer');
    Terra.validates.element('default');
  });

  describe('custom-event', () => {
    it('displays with custom events', () => {
      browser.url('/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/custom-event-consumer');
      $('#CustomEvent').waitForDisplayed();
      Terra.validates.element('custom event');
    });

    it('Provider triggers EventA message', () => {
      const myFrame = browser.findElement('iframe[src="/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-event-provider"]').value;
      browser.switchToFrame(myFrame);

      $('#EventA').click();
      browser.switchToFrameParent();
      $('#root').moveTo(0, 0);
      Terra.validates.element('EventA');
    });
  });

  describe('custom-events', () => {
    it('displays with custom event', () => {
      browser.url('/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/custom-events-consumer');
      $('#CustomEvents').waitForDisplayed();
      Terra.validates.element('custom event');
    });

    it('Provider triggers EventA message', () => {
      const myFrame = browser.findElement('iframe[src="/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-events-provider"]').value;
      browser.switchToFrame(myFrame);

      $('#EventA').click();
      browser.switchToFrameParent();
      $('#root').moveTo(0, 0);
      Terra.validates.element('EventA');
    });

    it('successfully replied with EventA message', () => {
      const myFrame = browser.findElement('iframe[src="/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-events-provider"]').value;
      browser.switchToFrame(myFrame);

      expect($('#embedded-content-consumer-reply').getText()).stringContaining('eventA');
      browser.switchToFrameParent();
    });

    it('Provider triggers EventB message', () => {
      const myFrame = browser.findElement('iframe[src="/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-events-provider"]').value;
      browser.switchToFrame(myFrame);

      $('#EventB').click();
      browser.switchToFrameParent();
      $('#root').moveTo(0, 0);
      Terra.validates.element('EventB');
    });

    it('successfully replied with EventB message', () => {
      const myFrame = browser.findElement('iframe[src="/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-events-provider"]').value;
      browser.switchToFrame(myFrame);

      expect($('#embedded-content-consumer-reply').getText()).stringContaining('eventB');
    });
  });

  describe('data-status', () => {
    it('has mounted, launched, and authorized elements', () => {
      browser.url('/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/data-status-consumer');
      const timeout = browser.options.waitforTimeout + 5000;
      $('iframe[src="/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/data-status-provider"]').waitForDisplayed({ timeout });

      const myFrame = browser.findElement('iframe[src="/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/data-status-provider"]').value;
      browser.switchToFrame(myFrame);

      expect($('#Mounted').isExisting());
      expect($('#Launched').isExisting());
      expect($('#Authorized').isExisting());
    });
  });
});
