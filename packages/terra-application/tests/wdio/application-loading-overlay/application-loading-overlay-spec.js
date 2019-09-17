Terra.describeViewports('ApplicationLoadingOverlay', ['large'], () => {
  describe('Loading overlay management', () => {
    before(() => {
      browser.url('/raw/tests/terra-application/application/application-loading-overlay/loading-overlay-test');
    });

    Terra.it.validatesElement('initial', { selector: '#root' });

    it('shows the overlay', () => {
      browser.click('button');
      browser.execute('var animationElement = document.querySelector("#terra-icon-animation"); if (animationElement) { animationElement.parentElement.removeChild(animationElement); }');
    });

    Terra.it.validatesElement('with overlay', { selector: '#root' });
  });
});
