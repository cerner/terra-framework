/* global browser, Terra, beforeEach, expect */
describe('Aggregator', () => {
  describe('Standalone', () => {
    beforeEach(() => {
      browser.setViewportSize(Terra.viewports('large')[0]);
      browser.url('/#/raw/tests/aggregator/aggregator-standalone');

      browser.click('#test-aggregator #section1');
      browser.click('#test-aggregator #section2');
      browser.click('#test-aggregator #section3');
    });

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });

  describe('With Disclosure - Open', () => {
    beforeEach(() => {
      browser.setViewportSize(Terra.viewports('large')[0]);
      browser.url('/#/raw/tests/aggregator/aggregator-with-disclosure');

      browser.click('#test-aggregator #section1');
    });

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });

  describe('With Disclosure - Close from focus release', () => {
    beforeEach(() => {
      browser.setViewportSize(Terra.viewports('large')[0]);
      browser.url('/#/raw/tests/aggregator/aggregator-with-disclosure');

      browser.click('#test-aggregator #section1');

      browser.waitForVisible('[class*="slide-group"] .close-disclosure', 500);

      browser.click('#test-aggregator #section1');
    });

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });

  describe('With Disclosure - Close from explicit close', () => {
    beforeEach(() => {
      browser.setViewportSize(Terra.viewports('large')[0]);
      browser.url('/#/raw/tests/aggregator/aggregator-with-disclosure');

      browser.click('#test-aggregator #section1');

      browser.waitForVisible('[class*="slide-group"] .close-disclosure', 500);

      browser.click('[class*="slide-group"] .close-disclosure');
    });

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });
});
