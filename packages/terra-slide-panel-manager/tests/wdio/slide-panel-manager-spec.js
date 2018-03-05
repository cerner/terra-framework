/* global browser, Terra, beforeEach, expect */
const viewports = Terra.viewports('tiny', 'large');

describe('SlidePanelManager', () => {
  describe('Disclose Tiny', () => {
    beforeEach(() => browser.url('/#/raw/tests/slide-panel-manager/slide-panel-manager-default')
        .click('#root-component .disclose-tiny'));

    Terra.should.matchScreenshot({ viewports, selector: '#site' });
    Terra.should.beAccessible({ viewports });
  });

  describe('Disclose Small', () => {
    beforeEach(() => browser.url('/#/raw/tests/slide-panel-manager/slide-panel-manager-default')
        .click('#root-component .disclose-small'));

    Terra.should.matchScreenshot({ viewports, selector: '#site' });
    Terra.should.beAccessible({ viewports });
  });

  describe('Disclose Medium', () => {
    beforeEach(() => browser.url('/#/raw/tests/slide-panel-manager/slide-panel-manager-default')
        .click('#root-component .disclose-medium'));

    Terra.should.matchScreenshot({ viewports, selector: '#site' });
    Terra.should.beAccessible({ viewports });
  });

  describe('Disclose Large', () => {
    beforeEach(() => browser.url('/#/raw/tests/slide-panel-manager/slide-panel-manager-default')
        .click('#root-component .disclose-large'));

    Terra.should.matchScreenshot({ viewports, selector: '#site' });
    Terra.should.beAccessible({ viewports });
  });

  describe('Disclose Huge', () => {
    beforeEach(() => browser.url('/#/raw/tests/slide-panel-manager/slide-panel-manager-default')
        .click('#root-component .disclose-huge'));

    Terra.should.matchScreenshot({ viewports, selector: '#site' });
    Terra.should.beAccessible({ viewports });
  });

  describe('Disclose Fullscreen', () => {
    beforeEach(() => browser.url('/#/raw/tests/slide-panel-manager/slide-panel-manager-default')
        .click('#root-component .disclose-fullscreen'));

    Terra.should.matchScreenshot({ viewports, selector: '#site' });
    Terra.should.beAccessible({ viewports });
  });

  describe('Nested Disclose', () => {
    beforeEach(() => {
      browser.setViewportSize(Terra.viewports('large')[0]);
      browser.url('/#/raw/tests/slide-panel-manager/slide-panel-manager-default');

      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .disclose-tiny', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .disclose-tiny');
    });

    Terra.should.matchScreenshot({ selector: '#site' });
    Terra.should.beAccessible();
  });

  describe('Disclosure - Dismiss', () => {
    beforeEach(() => {
      browser.setViewportSize(Terra.viewports('large')[0]);
      browser.url('/#/raw/tests/slide-panel-manager/slide-panel-manager-default');

      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .dismiss', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .dismiss');
    });

    Terra.should.matchScreenshot({ selector: '#site' });
    Terra.should.beAccessible();
  });

  describe('Disclosure - Close Disclosure', () => {
    beforeEach(() => {
      browser.setViewportSize(Terra.viewports('large')[0]);
      browser.url('/#/raw/tests/slide-panel-manager/slide-panel-manager-default');

      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .close-disclosure', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .close-disclosure');
    });

    Terra.should.matchScreenshot({ selector: '#site' });
    Terra.should.beAccessible();
  });

  describe('Disclosure - Maximize', () => {
    beforeEach(() => {
      browser.setViewportSize(Terra.viewports('large')[0]);
      browser.url('/#/raw/tests/slide-panel-manager/slide-panel-manager-default');

      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .maximize');
    });

    Terra.should.matchScreenshot({ selector: '#site' });
    Terra.should.beAccessible();
  });

  describe('Disclosure - Minimize', () => {
    beforeEach(() => {
      browser.setViewportSize(Terra.viewports('large')[0]);
      browser.url('/#/raw/tests/slide-panel-manager/slide-panel-manager-default');

      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .maximize');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .minimize', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .minimize');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 1000);
    });

    Terra.should.matchScreenshot({ selector: '#site' });
    Terra.should.beAccessible();
  });

  describe('Disclosure - RequestFocus', () => {
    beforeEach(() => {
      browser.setViewportSize(Terra.viewports('large')[0]);
      browser.url('/#/raw/tests/slide-panel-manager/slide-panel-manager-default');

      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .requestFocus', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .requestFocus');
    });

    Terra.should.matchScreenshot({ selector: '#site' });
    Terra.should.beAccessible();
  });

  describe('Disclosure - ReleaseFocus', () => {
    beforeEach(() => {
      browser.setViewportSize(Terra.viewports('large')[0]);
      browser.url('/#/raw/tests/slide-panel-manager/slide-panel-manager-default');

      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .requestFocus', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .requestFocus');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .releaseFocus', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .releaseFocus');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .requestFocus', 1000);
    });

    Terra.should.matchScreenshot({ selector: '#site' });
    Terra.should.beAccessible();
  });
});
