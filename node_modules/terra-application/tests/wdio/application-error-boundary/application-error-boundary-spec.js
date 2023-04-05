Terra.describeViewports('ApplicationErrorBoundary', ['large'], () => {
  it('should render the application error boundary', () => {
    browser.url('/raw/tests/terra-application/application-error-boundary/error-boundary-test');

    $('#root').moveTo({ xOffset: 0, yOffset: 0 });

    Terra.validates.element('initial', { selector: '#root' });

    $('button').click();

    Terra.validates.element('error boundary', { selector: '#root' });
  });
});
