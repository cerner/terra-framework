/* global browser, Terra, before, expect */
const viewports = Terra.viewports('tiny', 'large');
const selector = '#root';

describe('ModalManager', () => {
  describe('Disclose Tiny', () => {
    before(() => browser.url('/#/raw/tests/modal-manager/modal-manager-default')
        .click('#root-component .disclose-tiny'));

    Terra.should.matchScreenshot({ selector, viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Disclose Small', () => {
    before(() => browser.url('/#/raw/tests/modal-manager/modal-manager-default')
        .click('#root-component .disclose-small'));

    Terra.should.matchScreenshot({ selector, viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Disclose Medium', () => {
    before(() => browser.url('/#/raw/tests/modal-manager/modal-manager-default')
        .click('#root-component .disclose-medium'));

    Terra.should.matchScreenshot({ selector, viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Disclose Large', () => {
    before(() => browser.url('/#/raw/tests/modal-manager/modal-manager-default')
        .click('#root-component .disclose-large'));

    Terra.should.matchScreenshot({ selector, viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Disclose Huge', () => {
    before(() => browser.url('/#/raw/tests/modal-manager/modal-manager-default')
        .click('#root-component .disclose-huge'));

    Terra.should.matchScreenshot({ selector, viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Disclose Fullscreen', () => {
    before(() => browser.url('/#/raw/tests/modal-manager/modal-manager-default')
        .click('#root-component .disclose-fullscreen'));

    Terra.should.matchScreenshot({ selector, viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Nested Disclose', () => {
    before(() => {
      browser.setViewportSize(Terra.viewports('large')[0]);
      browser.url('/#/raw/tests/modal-manager/modal-manager-default');

      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .disclose-tiny', 500);
      browser.click('[class*="slide-group"] #DemoContainer-1 .disclose-tiny');
    });

    Terra.should.matchScreenshot({ selector });
    Terra.should.beAccessible();
  });

  describe('Disclosure - Dismiss', () => {
    before(() => {
      browser.setViewportSize(Terra.viewports('large')[0]);
      browser.url('/#/raw/tests/modal-manager/modal-manager-default');

      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .dismiss', 500);
      browser.click('[class*="slide-group"] #DemoContainer-1 .dismiss');
    });

    Terra.should.matchScreenshot({ selector });
    Terra.should.beAccessible();
  });

  describe('Disclosure - Close Disclosure', () => {
    before(() => {
      browser.setViewportSize(Terra.viewports('large')[0]);
      browser.url('/#/raw/tests/modal-manager/modal-manager-default');

      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .close-disclosure', 500);
      browser.click('[class*="slide-group"] #DemoContainer-1 .close-disclosure');
    });

    Terra.should.matchScreenshot({ selector });
    Terra.should.beAccessible();
  });

  describe('Disclosure - Maximize', () => {
    before(() => {
      browser.setViewportSize(Terra.viewports('large')[0]);
      browser.url('/#/raw/tests/modal-manager/modal-manager-default');

      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 500);
      browser.click('[class*="slide-group"] #DemoContainer-1 .maximize');
    });

    Terra.should.matchScreenshot({ selector });
    Terra.should.beAccessible();
  });

  describe('Disclosure - Minimize', () => {
    before(() => {
      browser.setViewportSize(Terra.viewports('large')[0]);
      browser.url('/#/raw/tests/modal-manager/modal-manager-default');

      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .maximize');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .minimize', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .minimize');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 1000);
    });

    Terra.should.matchScreenshot({ selector });
    Terra.should.beAccessible();
  });

  describe('Disclosure - RequestFocus', () => {
    before(() => {
      browser.setViewportSize(Terra.viewports('large')[0]);
      browser.url('/#/raw/tests/modal-manager/modal-manager-default');

      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .requestFocus', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .requestFocus');
    });

    Terra.should.matchScreenshot({ selector });
    Terra.should.beAccessible();
  });

  describe('Disclosure - ReleaseFocus', () => {
    before(() => {
      browser.setViewportSize(Terra.viewports('large')[0]);
      browser.url('/#/raw/tests/modal-manager/modal-manager-default');

      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .requestFocus', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .requestFocus');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .releaseFocus', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .releaseFocus');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .requestFocus', 1000);
    });

    Terra.should.matchScreenshot({ selector });
    Terra.should.beAccessible();
  });
});
