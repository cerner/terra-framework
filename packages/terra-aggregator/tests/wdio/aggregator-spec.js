Terra.describeViewports('Aggregator', ['large'], () => {
  describe('Standalone', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-aggregator/aggregator/aggregator-standalone');

      browser.click('#test-aggregator #section1');
      browser.click('#test-aggregator #section2');
      browser.click('#test-aggregator #section3');
    });

    Terra.it.validatesElement();
  });

  describe('With Disclosure - Open', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-aggregator/aggregator/aggregator-with-disclosure');
      browser.click('#test-aggregator #section1');
    });

    Terra.it.validatesElement({ selector: '#test-aggregator' });

    describe('With Disclosure - Close from focus release', () => {
      before(() => {
        browser.waitForVisible('[class*="slide-group"] .close-disclosure');

        browser.click('#test-aggregator #section1');
      });

      Terra.it.validatesElement({ selector: '#test-aggregator' });
    });

    describe('With Disclosure - Close from explicit close', () => {
      before(() => {
        browser.click('#test-aggregator #section1');

        browser.waitForVisible('[class*="slide-group"] .close-disclosure');

        browser.click('[class*="slide-group"] .close-disclosure');
      });

      Terra.it.validatesElement({ selector: '#test-aggregator' });
    });

    describe('With Disclosure - Close from explicit button flip', () => {
      before(() => {
        browser.click('#test-aggregator #section1');
        browser.waitForVisible('[class*="slide-group"] .close-disclosure');
        browser.click('#flip-button');
      });

      Terra.it.validatesElement({ selector: '#test-aggregator' });
    });
  });
});
