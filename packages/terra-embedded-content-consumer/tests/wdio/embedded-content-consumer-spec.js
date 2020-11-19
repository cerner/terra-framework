Terra.describeViewports('Embedded Content Consumer', ['tiny', 'large'], () => {
  it('displays default embedded content consumer', () => {
    browser.url('/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/basic-consumer');
    Terra.validates.screenshot('default');
  });

  describe('custom-event', () => {
    it('displays with custom events', () => {
      browser.url('/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/custom-event-consumer');
      browser.waitForExist('#CustomEvent');
      Terra.validates.screenshot('custom event');
    });

    it('Provider triggers EventA message', () => {
      const myFrame = browser.element('iframe[src="/#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-event-provider"]').value;
      browser.frame(myFrame);

      browser.click('#EventA');
      browser.frameParent();
      browser.moveToObject('#root', 0, 0);
      Terra.validates.screenshot('EventA');
    });
  });

  describe('custom-events', () => {
    it('displays with custom event', () => {
      browser.url('/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/custom-events-consumer');
      browser.waitForExist('#CustomEvents');
      Terra.validates.element('custom event');
    });

    it('Provider triggers EventA message', () => {
      const myFrame = browser.element('iframe[src="/#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-events-provider"]').value;
      browser.frame(myFrame);

      browser.click('#EventA');
      browser.frameParent();
      browser.moveToObject('#root', 0, 0);
      Terra.validates.screenshot('EventA');
    });

    it('successfully replied with EventA message', () => {
      const myFrame = browser.element('iframe[src="/#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-events-provider"]').value;
      browser.frame(myFrame);

      expect(browser.getText('#embedded-content-consumer-reply')).to.have.string('eventA');
      browser.frameParent();
    });

    it('Provider triggers EventB message', () => {
      const myFrame = browser.element('iframe[src="/#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-events-provider"]').value;
      browser.frame(myFrame);

      browser.click('#EventB');
      browser.frameParent();
      browser.moveToObject('#root', 0, 0);
      Terra.validates.element('EventB');
    });

    it('successfully replied with EventB message', () => {
      const myFrame = browser.element('iframe[src="/#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-events-provider"]').value;
      browser.frame(myFrame);

      expect(browser.getText('#embedded-content-consumer-reply')).to.have.string('eventB');
    });
  });

  describe('data-status', () => {
    it('has mounted, launched, and authorized elements', () => {
      browser.url('/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/data-status-consumer');
      const timeout = browser.options.waitforTimeout + 5000;
      browser.waitForExist('iframe[src="/#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/data-status-provider"]', timeout);

      const myFrame = browser.element('iframe[src="/#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/data-status-provider"]').value;
      browser.frame(myFrame);

      expect(browser.isExisting('#Mounted'));
      expect(browser.isExisting('#Launched'));
      expect(browser.isExisting('#Authorized'));
    });
  });
});
