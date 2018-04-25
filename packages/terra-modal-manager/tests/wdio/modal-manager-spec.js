/* global browser, Terra, before, expect */
const viewports = Terra.viewports('tiny', 'large');
const selector = '#root';

viewports.forEach((viewport) => {
  describe('ModalManager - Size Props', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('Disclose Default', () => {
      before(() => browser.url('/#/raw/tests/modal-manager/modal-manager-default')
          .click('#root-component .disclose-tiny'));

      Terra.should.matchScreenshot({ selector });
      Terra.should.beAccessible();
    });

    describe('Disclose Tiny', () => {
      before(() => browser.url('/#/raw/tests/modal-manager/modal-manager-default')
          .click('#root-component .disclose-tiny'));

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Small', () => {
      before(() => browser.url('/#/raw/tests/modal-manager/modal-manager-default')
          .click('#root-component .disclose-small'));

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Medium', () => {
      before(() => browser.url('/#/raw/tests/modal-manager/modal-manager-default')
          .click('#root-component .disclose-medium'));

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Large', () => {
      before(() => browser.url('/#/raw/tests/modal-manager/modal-manager-default')
          .click('#root-component .disclose-large'));

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Huge', () => {
      before(() => browser.url('/#/raw/tests/modal-manager/modal-manager-default')
          .click('#root-component .disclose-huge'));

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Fullscreen', () => {
      before(() => browser.url('/#/raw/tests/modal-manager/modal-manager-default')
          .click('#root-component .disclose-fullscreen'));

      Terra.should.matchScreenshot({ selector });
    });
  });
});

viewports.forEach((viewport) => {
  describe('ModalManager - Dimensions Props', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('Disclose Width-320', () => {
      before(() => {
        browser.url('/#/raw/tests/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-320-0');
        browser.click('#root-component #disclose-dimension-0');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Width-480', () => {
      before(() => {
        browser.url('/#/raw/tests/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-480-0');
        browser.click('#root-component #disclose-dimension-0');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Width-640', () => {
      before(() => {
        browser.url('/#/raw/tests/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-640-0');
        browser.click('#root-component #disclose-dimension-0');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Width-800', () => {
      before(() => {
        browser.url('/#/raw/tests/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-800-0');
        browser.click('#root-component #disclose-dimension-0');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Width-960', () => {
      before(() => {
        browser.url('/#/raw/tests/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-960-0');
        browser.click('#root-component #disclose-dimension-0');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Width-1120', () => {
      before(() => {
        browser.url('/#/raw/tests/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-1120-0');
        browser.click('#root-component #disclose-dimension-0');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Width-1280', () => {
      before(() => {
        browser.url('/#/raw/tests/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-1280-0');
        browser.click('#root-component #disclose-dimension-0');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Width-1440', () => {
      before(() => {
        browser.url('/#/raw/tests/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-1440-0');
        browser.click('#root-component #disclose-dimension-0');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Width-1600', () => {
      before(() => {
        browser.url('/#/raw/tests/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-1600-0');
        browser.click('#root-component #disclose-dimension-0');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Width-1760', () => {
      before(() => {
        browser.url('/#/raw/tests/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-1760-0');
        browser.click('#root-component #disclose-dimension-0');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Width-1920', () => {
      before(() => {
        browser.url('/#/raw/tests/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-1920-0');
        browser.click('#root-component #disclose-dimension-0');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Height-240', () => {
      before(() => {
        browser.url('/#/raw/tests/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-240-0');
        browser.click('#root-component #disclose-dimension-0');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Height-420', () => {
      before(() => {
        browser.url('/#/raw/tests/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-420-0');
        browser.click('#root-component #disclose-dimension-0');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Height-600', () => {
      before(() => {
        browser.url('/#/raw/tests/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-600-0');
        browser.click('#root-component #disclose-dimension-0');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Height-690', () => {
      before(() => {
        browser.url('/#/raw/tests/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-690-0');
        browser.click('#root-component #disclose-dimension-0');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Height-780', () => {
      before(() => {
        browser.url('/#/raw/tests/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-780-0');
        browser.click('#root-component #disclose-dimension-0');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Height-870', () => {
      before(() => {
        browser.url('/#/raw/tests/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-870-0');
        browser.click('#root-component #disclose-dimension-0');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Height-960', () => {
      before(() => {
        browser.url('/#/raw/tests/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-960-0');
        browser.click('#root-component #disclose-dimension-0');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Height-1140', () => {
      before(() => {
        browser.url('/#/raw/tests/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-1140-0');
        browser.click('#root-component #disclose-dimension-0');
      });

      Terra.should.matchScreenshot({ selector });
    });
  });
});

describe('ModalManager - Behaviors', () => {
  before(() => {
    browser.setViewportSize(Terra.viewports('large')[0]);
  });

  describe('Nested Disclose', () => {
    before(() => {
      browser.url('/#/raw/tests/modal-manager/modal-manager-default');

      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .disclose-tiny', 500);
      browser.click('[class*="slide-group"] #DemoContainer-1 .disclose-tiny');
    });

    Terra.should.matchScreenshot({ selector });
  });

  describe('Disclosure - Dismiss', () => {
    before(() => {
      browser.url('/#/raw/tests/modal-manager/modal-manager-default');

      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .dismiss', 500);
      browser.click('[class*="slide-group"] #DemoContainer-1 .dismiss');
    });

    Terra.should.matchScreenshot({ selector });
  });

  describe('Disclosure - Close Disclosure', () => {
    before(() => {
      browser.url('/#/raw/tests/modal-manager/modal-manager-default');

      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .close-disclosure', 500);
      browser.click('[class*="slide-group"] #DemoContainer-1 .close-disclosure');
    });

    Terra.should.matchScreenshot({ selector });
  });

  describe('Disclosure - Maximize', () => {
    before(() => {
      browser.url('/#/raw/tests/modal-manager/modal-manager-default');

      browser.click('#root-component .disclose-small');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 500);
      browser.click('[class*="slide-group"] #DemoContainer-1 .maximize');
    });

    Terra.should.matchScreenshot({ selector });
  });

  describe('Disclosure - Minimize', () => {
    before(() => {
      browser.url('/#/raw/tests/modal-manager/modal-manager-default');

      browser.click('#root-component .disclose-small');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .maximize');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .minimize', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .minimize');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 1000);
    });

    Terra.should.matchScreenshot({ selector });
  });

  describe('Disclosure - RequestFocus', () => {
    before(() => {
      browser.url('/#/raw/tests/modal-manager/modal-manager-default');

      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .requestFocus', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .requestFocus');
    });

    Terra.should.matchScreenshot({ selector });
  });

  describe('Disclosure - ReleaseFocus', () => {
    before(() => {
      browser.url('/#/raw/tests/modal-manager/modal-manager-default');

      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .requestFocus', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .requestFocus');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .releaseFocus', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .releaseFocus');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .requestFocus', 1000);
    });

    Terra.should.matchScreenshot({ selector });
  });
});
