Terra.describeViewports('Slider', ['medium', 'large'], () => {
  it('displays a default slider', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/slider/default-slider');
    Terra.validates.element('default');
  });

  it('displays a disabled slider', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/slider/disabled-slider');
    Terra.validates.element('disabled');
  });
});
