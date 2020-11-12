Terra.describeViewports('Aggregator', ['large'], () => {
  it('displays standalone aggregator', () => {
    browser.url('/raw/tests/terra-aggregator/aggregator/aggregator-standalone');
    browser.click('#test-aggregator #section1');
    browser.click('#test-aggregator #section2');
    browser.click('#test-aggregator #section3');
    Terra.validates.element('Standalone');
  });
  describe('With Disclosure', () => {
    it('displays aggregator with disclosure - open', () => {
      browser.url('/raw/tests/terra-aggregator/aggregator/aggregator-with-disclosure');
      browser.click('#test-aggregator #section1');
      Terra.validates.element('Open', { selector: '#test-aggregator' });
    });

    it('displays aggregator with disclosure - close from focus release', () => {
      browser.waitForVisible('[class*="slide-group"] .close-disclosure');
      browser.click('#test-aggregator #section1');
      Terra.validates.element('close from focus release', { selector: '#test-aggregator' });
    });

    it('displays aggregator with disclosure - close from explicit close', () => {
      browser.click('#test-aggregator #section1');
      browser.waitForVisible('[class*="slide-group"] .close-disclosure');
      browser.click('[class*="slide-group"] .close-disclosure');
      Terra.validates.element('close from explicit close', { selector: '#test-aggregator' });
    });

    it('displays aggregator with disclosure - close from explicit button flip', () => {
      browser.click('#test-aggregator #section1');
      browser.waitForVisible('[class*="slide-group"] .close-disclosure');
      browser.click('#flip-button');
      Terra.validates.element('close from explicit button flip', { selector: '#test-aggregator' });
    });
  });
});
