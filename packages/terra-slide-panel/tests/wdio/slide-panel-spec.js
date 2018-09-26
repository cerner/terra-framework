const context = '[data-terra-dev-site-content] *:first-child';

describe('Slide panel', () => {
  before(() => browser.setViewportSize(Terra.viewports('large')[0]));

  describe('Slide panel end', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-end'));
    Terra.should.beAccessible({ context });
    Terra.should.matchScreenshot();
  });

  describe('Slide panel fill', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-fill');
    });

    Terra.should.matchScreenshot();
  });

  describe('Slide panel fullscreen', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-fullscreen');
    });

    Terra.should.matchScreenshot();
  });

  describe('Slide panel large', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-large');
    });

    Terra.should.matchScreenshot();
  });

  describe('Slide panel no fill', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-no-fill');
    });

    Terra.should.matchScreenshot();
  });

  describe('Slide panel overlay', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-overlay');
    });

    Terra.should.matchScreenshot();
  });

  describe('Slide panel small', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-small');
    });

    Terra.should.matchScreenshot();
  });

  describe('Slide panel squish', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-squish');
    });

    Terra.should.matchScreenshot();
  });

  describe('Slide panel start', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-start');
    });

    Terra.should.matchScreenshot();
  });


  describe('Large size squished slide panel', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-squish-large');
    });

    Terra.should.matchScreenshot();
  });


  describe('Toggle the slide panel and hidden styles', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-toggle');
      browser.waitForExist('#test-slide [aria-hidden="true"]');
    });

    Terra.should.matchScreenshot({ selector: '#root' });
  });

  describe('Toggle the slide panel click', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-toggle');
      browser.click('#test-toggle');
      browser.waitForExist('#test-slide [aria-hidden="false"]');
      browser.pause(150);
    });

    Terra.should.matchScreenshot({ selector: '#root' });
  });

  describe('Toggle the slide panel double click', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-toggle');
      browser.click('#test-toggle');
      browser.waitForExist('#test-slide [aria-hidden="false"]');
      browser.pause(150);
      browser.click('#test-toggle');
      browser.waitForExist('#test-slide [aria-hidden="true"]');
      browser.pause(150);
    });

    Terra.should.matchScreenshot({ selector: '#root' });
  });

  describe('Slide panel theming', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-slide-panel/slide-panel/slide-panel-end'));

    Terra.should.themeEachCustomProperty({
      '--terra-slide-panel-panel-width-small': '420px',
      '--terra-slide-panel-panel-width-large-scalar': '0.8',
      '--terra-slide-panel-shadow-color': 'orange',
      '--terra-slide-panel-panel-border-color': 'blue',
      '--terra-slide-panel-panel-border-radius': '5px',
    });
  });
});
