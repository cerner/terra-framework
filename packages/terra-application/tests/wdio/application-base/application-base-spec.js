Terra.describeViewports('ApplicationBase', ['small', 'large'], () => {
  describe('breakpoint', () => {
    before(() => {
      browser.url('/raw/tests/terra-application/application/application-base/application-base-test');
      browser.refresh();
    });

    Terra.it.validatesElement('with breakpoint', { selector: '#root' });
  });

  describe('intl', () => {
    before(() => {
      browser.url('/raw/tests/terra-application/application/application-base/application-base-test');
      browser.refresh();
    });

    Terra.it.validatesElement('with intl', { selector: '#root' });
  });

  describe('loading overlay', () => {
    before(() => {
      browser.url('/raw/tests/terra-application/application/application-base/application-base-test');
      browser.refresh();
      browser.click('button#overlay');
      browser.execute('var animationElement = document.querySelector("#terra-icon-animation"); if (animationElement) { animationElement.parentElement.removeChild(animationElement); }');
    });

    Terra.it.validatesElement('with overlay', { selector: '#root' });
  });

  describe('with error', () => {
    before(() => {
      browser.url('/raw/tests/terra-application/application/application-base/application-base-test');
      browser.refresh();
      browser.click('button#error');
    });

    Terra.it.validatesElement('with error', { selector: '#root' });
  });

  describe('with navigation prompt', () => {
    function hasAlert() {
      try {
        // alertText will throw an exception if no alert is presented.
        browser.alertText();
        return true;
      } catch (e) {
        return false;
      }
    }

    before(() => {
      browser.url('/raw/tests/terra-application/application/application-base/application-base-test');
      browser.refresh();
    });

    it('presents prompt on unload', () => {
      browser.click('button#prompt');
      browser.refresh();

      expect(hasAlert()).to.equal(true);
    });

    it('does not present prompt on unload if no navigation prompts present', () => {
      browser.alertDismiss();
      browser.click('button#prompt');
      browser.refresh();

      expect(hasAlert()).to.equal(false);
    });
  });
});
