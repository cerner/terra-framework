Terra.describeViewports('Slider', ['medium', 'large'], () => {
  describe('Default Slider', () => {
    it('displays a default slider', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slider/default-slider');
      Terra.validates.element('default');
    });

    it('should display Slider with hover updated', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slider/default-slider');
      $('input').moveTo();

      Terra.validates.element('hover');
    });

    it('should display Slider with mouse focus', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slider/default-slider');
      $('input').click();

      Terra.validates.element('mouse-focus');
    });

    it('should display Slider with keyboard focus', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slider/default-slider');
      browser.keys('Tab');

      Terra.validates.element('keyboard-focus');
    });

    it('should display Slider with lower selected value on ArrowLeft', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slider/default-slider');
      const initialValue = $('input').getValue();
      browser.keys('Tab');
      browser.keys('ArrowLeft');
      browser.keys('ArrowLeft');
      browser.keys('ArrowLeft');
      browser.keys('ArrowLeft');
      browser.keys('ArrowLeft');
      expect($('input')).toHaveValue(initialValue - 5);

      Terra.validates.element('lower-arrowLeft');
    });

    it('should display Slider with higher selected value on ArrowRight', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slider/default-slider');
      const initialValue = $('input').getValue();
      browser.keys('Tab');
      browser.keys('ArrowRight');
      browser.keys('ArrowRight');
      browser.keys('ArrowRight');
      browser.keys('ArrowRight');
      browser.keys('ArrowRight');
      expect($('input')).toHaveValue(initialValue + 5);

      Terra.validates.element('higher-arrowRight');
    });

    it('should display Slider with lower selected value on ArrowDown', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slider/default-slider');
      const initialValue = $('input').getValue();
      browser.keys('Tab');
      browser.keys('ArrowDown');
      browser.keys('ArrowDown');
      browser.keys('ArrowDown');
      browser.keys('ArrowDown');
      browser.keys('ArrowDown');
      expect($('input')).toHaveValue(initialValue - 5);

      Terra.validates.element('lower-arrowDown');
    });

    it('should display Slider with higher selected value on ArrowUp', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slider/default-slider');
      const initialValue = $('input').getValue();
      browser.keys('Tab');
      browser.keys('ArrowUp');
      browser.keys('ArrowUp');
      browser.keys('ArrowUp');
      browser.keys('ArrowUp');
      browser.keys('ArrowUp');
      expect($('input')).toHaveValue(initialValue + 5);

      Terra.validates.element('higher-arrowUp');
    });
  });

  describe('Custom Slider', () => {
    it('displays a slider with custom min and max labels', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slider/custom-slider');
      Terra.validates.element('custom-slider');
    });
  });

  describe('Disabled Slider', () => {
    it('displays a disabled slider', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slider/disabled-slider');
      Terra.validates.element('disabled');
    });

    it('should display disabled slider with no hover changes', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slider/disabled-slider');
      $('input').moveTo();

      Terra.validates.element('no-hover');
    });

    it('should display disabled slider with no mouse focus', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slider/disabled-slider');
      $('input').click();

      Terra.validates.element('no-mouse-focus');
    });

    it('should display disabled slider with no keyboard-focused', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slider/disabled-slider');
      browser.keys('Tab');

      Terra.validates.element('no-keyboard-focus');
    });
  });

  describe('Slider With On Change Callback', () => {
    it('displays a slider with initial value', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/slider/slider-with-on-change-callback');
      Terra.validates.element('on-change-callback-initial');
      $('input').setValue(80);
      Terra.validates.element('on-change-callback-update');
    });
  });
});
