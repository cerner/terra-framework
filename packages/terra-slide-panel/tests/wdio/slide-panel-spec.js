const context = '[data-terra-dev-site-content] *:first-child';

describe('Slide panel', () => {
  before(() => browser.setViewportSize(Terra.viewports('large')[0]));

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
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-toggle');
      browser.click('#test-toggle');
      browser.waitForExist('#test-slide [aria-hidden="false"]');
      browser.pause(150);
    });

    it('Opens panel and focuses on panel', () => {
      browser.hasFocus('#panel-content');
    });

    it('On Tab Press focuses on the button inside the panel', () => {
      browser.keys(['Tab']);
      browser.hasFocus('#focus-button');
    });

    Terra.it.matchesScreenshot({ selector: '#root' });
  });
});
