Terra.describeViewports('Embedded Content Consumer', ['tiny', 'large'], () => {
  describe('default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/basic-consumer');
    });

    Terra.it.matchesScreenshot();
  });

  describe('custom-event', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/custom-event-consumer');
      browser.waitForExist('#CustomEvent');
    });

    Terra.it.matchesScreenshot();

    it('Provider triggers EventA message', () => {
      const myFrame = browser.element('iframe[src="/#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-event-provider"]').value;
      browser.frame(myFrame);

      browser.click('#EventA');
      browser.frameParent();
      browser.moveToObject('#root', 0, 0);
    });

    Terra.it.matchesScreenshot('EventA');
  });

  describe('custom-events', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/custom-events-consumer');
      browser.waitForExist('#CustomEvents');
    });

    Terra.it.matchesScreenshot();

    it('Provider triggers EventA message', () => {
      const myFrame = browser.element('iframe[src="/#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-events-provider"]').value;
      browser.frame(myFrame);

      browser.click('#EventA');
      browser.frameParent();
      browser.moveToObject('#root', 0, 0);
    });

    Terra.it.matchesScreenshot('EventA');

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
    });

    Terra.it.matchesScreenshot('EventB');

    it('successfully replied with EventB message', () => {
      const myFrame = browser.element('iframe[src="/#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-events-provider"]').value;
      browser.frame(myFrame);

      expect(browser.getText('#embedded-content-consumer-reply')).to.have.string('eventB');
    });
  });

  describe('data-status', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/data-status-consumer');
    });

    it('has mounted, launched, and authorized elements', () => {
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
