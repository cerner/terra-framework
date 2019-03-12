const viewports = Terra.viewports('tiny', 'large');

describe('Embedded Content Consumer', () => {
  describe('default', () => {
    before(() => {
      browser.url('#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/basic-consumer');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('custom-event', () => {
    before(() => {
      browser.url('#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/custom-event-consumer');
      browser.waitForExist('#CustomEvent');
      browser.pause(1000);
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('custom-events', () => {
    before(() => {
      browser.url('#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/custom-events-consumer');
      browser.waitForExist('#CustomEvents');
      browser.pause(1000);
    });

    Terra.should.matchScreenshot('EventA', { viewports });

    it('waits for Provider to trigger eventB', () => {
      // Waiting for events to execute.
      browser.pause(10000);
    });

    Terra.should.matchScreenshot('EventB', { viewports });
  });

  describe('data-status', () => {
    before(() => {
      browser.url('#/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/data-status-consumer');
    });

    it('has mounted, launched, and authorized elements', () => {
      const timeout = browser.options.waitforTimeout + 2000;
      browser.waitForExist('iframe[src="#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/data-status-provider"]', timeout);

      const myFrame = browser.element('iframe[src="#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/data-status-provider"]').value;
      browser.frame(myFrame);

      expect(browser.isExisting('#Mounted'));
      expect(browser.isExisting('#Launched'));
      expect(browser.isExisting('#Authorized'));
    });
  });
});
