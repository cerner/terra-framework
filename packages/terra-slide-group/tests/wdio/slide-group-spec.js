Terra.describeViewports('Slide Group', ['medium'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-slide-group/slide-group/default-slide-group'));

    Terra.it.matchesScreenshot({ selector: '#SlideGroup' });
    Terra.it.isAccessible();
  });

  describe('One Item', () => {
    before(() => browser.url('/#/raw/tests/terra-slide-group/slide-group/one-item-slide-group'));

    Terra.it.matchesScreenshot({ selector: '#SlideGroup' });
    Terra.it.isAccessible();
  });

  describe('Non Animated', () => {
    before(() => browser.url('/#/raw/tests/terra-slide-group/slide-group/non-animated-slide-group'));

    it('should advance the slide', () => {
      browser.click('#increment-1');
    });

    Terra.it.matchesScreenshot('slide 2');

    it('should go back a slide', () => {
      browser.click('#decrement-2');
    });

    Terra.it.matchesScreenshot('slide 1');
    Terra.it.isAccessible();
  });

  describe('Animated', () => {
    before(() => browser.url('/#/raw/tests/terra-slide-group/slide-group/animated-slide-group'));

    it('should advance the slide', () => {
      browser.click('#increment-1');

      browser.pause(350);
    });

    Terra.it.matchesScreenshot('slide 2');

    it('should go back a slide', () => {
      browser.click('#decrement-2');

      browser.pause(350);
    });

    Terra.it.matchesScreenshot('slide 1');
    Terra.it.isAccessible();
  });
});
