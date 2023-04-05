Terra.describeViewports('ApplicationLoadingOverlay', ['large'], () => {
  before(() => {
    browser.url('/raw/tests/terra-application/application-loading-overlay/loading-overlay-test');
    browser.disableCSSAnimations();
    $('#root').moveTo({ xOffset: 0, yOffset: 0 });
  });

  it('should render the initial page', () => {
    Terra.validates.element('initial', { selector: '#root' });
  });

  it('should render the clear overlay', () => {
    $('#clear-button').click();

    Terra.validates.element('clear overlay', { selector: '#root' });
  });

  it('should render the light overlay', () => {
    $('#reset-button').click();
    $('#light-button').click();

    Terra.validates.element('light overlay', { selector: '#root' });
  });

  it('should render the dark overlay', () => {
    $('#reset-button').click();
    $('#dark-button').click();

    Terra.validates.element('dark overlay', { selector: '#root' });
  });
});
