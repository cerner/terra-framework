const context = '[data-terra-dev-site-content] *:first-child';

Terra.describeViewports('Slide panel', ['large'], () => {
  describe('Slide panel end', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-end'));
    Terra.it.isAccessible({ context });
    Terra.it.matchesScreenshot();
  });

  describe('Slide panel fill', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-fill');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Slide panel fullscreen', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-fullscreen');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Slide panel large', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-large');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Slide panel no fill', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-no-fill');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Slide panel overlay', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-overlay');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Slide panel small', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-small');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Slide panel squish', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-squish');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Slide panel start', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-start');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Large size squished slide panel', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-squish-large');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Toggle the slide panel and hidden styles', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-toggle');
      browser.waitForExist('#test-slide [aria-hidden="true"]');
    });

    Terra.it.matchesScreenshot({ selector: '#root' });
  });

  describe('Toggle the slide panel click', () => {
    it('Opens panel and focuses on panel', () => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-toggle');
      browser.click('#test-toggle');
      browser.waitForExist('#test-slide [aria-hidden="false"]');
      browser.pause(150);
      browser.hasFocus('#panel-content');

      // On Tab Press focuses on the button inside the panel
      browser.keys(['Tab']);
      browser.hasFocus('#focus-button');

      Terra.validates.screenshot({ selector: '#root' });
    });
  });

  describe('Toggle the slide panel side', () => {
    it('Switches panel side', () => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-side-toggle');
      expect(browser.getText('#test-slide [aria-hidden="false"]')).to.equal('Increase Count 0');

      browser.click('#focus-button');
      browser.pause(150);
      expect(browser.getText('#test-slide [aria-hidden="false"]')).to.equal('Increase Count 1');

      Terra.validates.screenshot('panel with end position', { selector: '#root' });

      browser.click('#test-toggle');
      browser.waitForExist('#test-slide [aria-hidden="false"]');
      browser.pause(150);

      expect(browser.getText('#test-slide [aria-hidden="false"]')).to.equal('Increase Count 1');

      Terra.validates.screenshot('panel with start position', { selector: '#root' });
    });
  });
});
