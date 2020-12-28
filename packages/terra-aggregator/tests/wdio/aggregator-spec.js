/* global $ */
Terra.describeViewports('Aggregator', ['large'], () => {
  it('displays standalone aggregator', () => {
    browser.url('/raw/tests/terra-aggregator/aggregator/aggregator-standalone');
    $('#test-aggregator #section1').click();
    $('#test-aggregator #section2').click();
    $('#test-aggregator #section3').click();
    Terra.validates.element('Standalone');
  });
  describe('With Disclosure', () => {
    it('displays aggregator with disclosure - open', () => {
      browser.url('/raw/tests/terra-aggregator/aggregator/aggregator-with-disclosure');
      $('#test-aggregator #section1').click();
      Terra.validates.element('Open', { selector: '#test-aggregator' });
    });

    it('displays aggregator with disclosure - close from focus release', () => {
      $('[class*="slide-group"] .close-disclosure').waitForDisplayed();
      $('#test-aggregator #section1').click();
      Terra.validates.element('close from focus release', { selector: '#test-aggregator' });
    });

    it('displays aggregator with disclosure - close from explicit close', () => {
      $('#test-aggregator #section1').click();
      $('[class*="slide-group"] .close-disclosure').waitForDisplayed();
      $('[class*="slide-group"] .close-disclosure').click();
      Terra.validates.element('close from explicit close', { selector: '#test-aggregator' });
    });

    it('displays aggregator with disclosure - close from explicit button flip', () => {
      $('#test-aggregator #section1').click();
      $('[class*="slide-group"] .close-disclosure').waitForDisplayed();
      $('#flip-button').click();
      Terra.validates.element('close from explicit button flip', { selector: '#test-aggregator' });
    });
  });
});
