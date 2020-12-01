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
      browser.click('#increment-1');
      Terra.validates.element('slide 2');
    });

    it('should go back a slide', () => {
      browser.click('#decrement-2');
      Terra.validates.element('slide 1');
    });
  });

  describe('Animated', () => {
    it('should advance the slide', () => {
      browser.url('/raw/tests/terra-slide-group/slide-group/animated-slide-group');
      browser.click('#increment-1');

      browser.pause(350);
      Terra.validates.element('slide 2');
    });

    it('should go back a slide', () => {
      browser.click('#decrement-2');

      browser.pause(350);
      Terra.validates.element('slide 1');
    });
  });
});
