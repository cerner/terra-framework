Terra.describeViewports('Slide Group', ['medium'], () => {
  it('displays default slide group', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/slide-group/default-slide-group');
    Terra.validates.element('default', { selector: '#SlideGroup' });
  });

  it('displays slide group with One Item', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/slide-group/one-item-slide-group');

    Terra.validates.element('one item', { selector: '#SlideGroup' });
  });

  describe('Non Animated', () => {
    it('should advance the slide with keyboard controls', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-group/non-animated-slide-group');

      browser.keys(['Tab']);
      $('#increment-1').isFocused();
      Terra.validates.element('slide 1 non animated increment focused');

      browser.keys(['Enter']);
      Terra.validates.element('slide 2 non animated');
    });

    it('should go back a slide with keyboard controls and remain focused on originating element', () => {
      browser.keys(['Tab', 'Tab']);
      $('#decrement-2').isFocused();
      Terra.validates.element('slide 2 non animated decrement focused');

      browser.keys(['Enter']);
      $('#increment-1').isFocused();
      Terra.validates.element('slide 1 non animated increment focused');
    });

    it('should advance the slide with mouse controls', () => {
      $('#increment-1').click();
      Terra.validates.element('slide 2 non animated');
    });

    it('should go back a slide with mouse controls', () => {
      $('#decrement-2').click();
      Terra.validates.element('slide 1 non animated increment focused');
    });
  });

  describe('Animated', () => {
    it('should advance the slide with keyboard controls', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-group/non-animated-slide-group');

      browser.keys(['Tab']);
      $('#increment-1').isFocused();
      Terra.validates.element('slide 1 animated increment focused');

      browser.keys(['Enter']);
      browser.pause(350);
      Terra.validates.element('slide 2 animated');
    });

    it('should go back a slide with keyboard controls and remain focused on originating element', () => {
      browser.keys(['Tab', 'Tab']);
      $('#decrement-2').isFocused();
      Terra.validates.element('slide 2 animated decrement focused');

      browser.keys(['Enter']);
      browser.pause(350);
      $('#increment-1').isFocused();
      Terra.validates.element('slide 1 animated increment focused');
    });

    it('should advance the slide with mouse controls', () => {
      $('#increment-1').click();
      browser.pause(350);
      Terra.validates.element('slide 2 animated');
    });

    it('should go back a slide with mouse controls', () => {
      $('#decrement-2').click();
      browser.pause(350);
      Terra.validates.element('slide 1 animated increment focused');
    });
  });
});
