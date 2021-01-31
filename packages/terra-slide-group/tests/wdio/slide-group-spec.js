Terra.describeViewports('Slide Group', ['medium'], () => {
  it('displays default slide group', () => {
    browser.url('/raw/tests/terra-slide-group/slide-group/default-slide-group');
    Terra.validates.element('default', { selector: '#SlideGroup' });
  });

  it('displays slide group with One Item', () => {
    browser.url('/raw/tests/terra-slide-group/slide-group/one-item-slide-group');

    Terra.validates.element('one item', { selector: '#SlideGroup' });
  });

  describe('Non Animated', () => {
    it('should advance the slide', () => {
      browser.url('/raw/tests/terra-slide-group/slide-group/non-animated-slide-group');
      $('#increment-1').click();
      Terra.validates.element('slide 2 non animated');
    });

    it('should go back a slide', () => {
      $('#decrement-2').click();
      Terra.validates.element('slide 1 non animated');
    });
  });

  describe('Animated', () => {
    it('should advance the slide', () => {
      browser.url('/raw/tests/terra-slide-group/slide-group/animated-slide-group');
      $('#increment-1').click();

      browser.pause(350);
      Terra.validates.element('slide 2 animated');
    });

    it('should go back a slide', () => {
      $('#decrement-2').click();

      browser.pause(350);
      Terra.validates.element('slide 1 animated');
    });
  });
});
