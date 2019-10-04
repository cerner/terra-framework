Terra.describeViewports('ApplicationLoadingOverlay', ['large'], () => {
  describe('Loading overlay management', () => {
    before(() => {
      browser.url('/raw/tests/terra-application/application/application-loading-overlay/loading-overlay-test');
    });

    Terra.it.validatesElement('initial', { selector: '#root' });

    it('shows the clear overlay', () => {
      browser.click('#clear-button');
      browser.execute('var animationElement = document.querySelector("#terra-icon-animation"); if (animationElement) { animationElement.parentElement.removeChild(animationElement); }');
    });

    Terra.it.validatesElement('with clear overlay', { selector: '#root' });

    it('shows the light overlay', () => {
      browser.click('#reset-button');
      browser.click('#light-button');
      browser.execute('var animationElement = document.querySelector("#terra-icon-animation"); if (animationElement) { animationElement.parentElement.removeChild(animationElement); }');
    });

    Terra.it.validatesElement('with light overlay', { selector: '#root' });

    it('shows the dark overlay', () => {
      browser.click('#reset-button');
      browser.click('#dark-button');
      browser.execute('var animationElement = document.querySelector("#terra-icon-animation"); if (animationElement) { animationElement.parentElement.removeChild(animationElement); }');
    });

    Terra.it.validatesElement('with dark overlay', { selector: '#root' });
  });
});
