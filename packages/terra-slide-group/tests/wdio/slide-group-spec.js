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
    it('should go back a slide with keyboard controls and remain focused on originating element', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-group/non-animated-slide-group');

      browser.keys(['Tab']);
      expect($('#increment-1').isFocused()).toBeTruthy();
      Terra.validates.element('slide 1 non animated increment focused');

      browser.keys(['Enter']);
      Terra.validates.element('slide 2 non animated');
      
      browser.keys(['Tab', 'Tab']);
      expect($('#decrement-2').isFocused()).toBeTruthy();
      Terra.validates.element('slide 2 non animated decrement focused');

      browser.keys(['Enter']);
      expect($('#increment-1').isFocused()).toBeTruthy();
      Terra.validates.element('slide 1 non animated increment focused');
    });

    it('should go back a slide with mouse controls', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-group/non-animated-slide-group');

      $('#increment-1').click();
      Terra.validates.element('slide 2 non animated');

      $('#decrement-2').click();
      Terra.validates.element('slide 1 non animated increment focused mouse');
    });
  });

  describe('Animated', () => {
    it('should go back a slide with keyboard controls and remain focused on originating element', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-group/non-animated-slide-group');

      browser.keys(['Tab']);
      expect($('#increment-1').isFocused()).toBeTruthy();
      Terra.validates.element('slide 1 animated increment focused');

      browser.keys(['Enter']);
      browser.pause(350);
      Terra.validates.element('slide 2 animated');
      
      browser.keys(['Tab', 'Tab']);
      expect($('#decrement-2').isFocused()).toBeTruthy();
      Terra.validates.element('slide 2 animated decrement focused');

      browser.keys(['Enter']);
      browser.pause(350);
      expect($('#increment-1').isFocused()).toBeTruthy();
      Terra.validates.element('slide 1 animated increment focused');
    });

    it('should go back a slide with mouse controls', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slide-group/non-animated-slide-group');

      $('#increment-1').click();
      browser.pause(350);
      Terra.validates.element('slide 2 animated');

      $('#decrement-2').click();
      browser.pause(350);
      Terra.validates.element('slide 1 animated increment focused mouse');
    });
  });
});
