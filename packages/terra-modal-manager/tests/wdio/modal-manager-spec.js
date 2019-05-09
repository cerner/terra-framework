const viewports = Terra.viewports('tiny', 'large');
const selector = '#root';

viewports.forEach((viewport) => {
  describe('ModalManager - Size Props', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('Disclose Default', () => {
      beforeEach(() => browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default')
        .click('#root-component .disclose'));

      Terra.should.matchScreenshot({ selector });
      Terra.should.beAccessible();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '[class*="modal-manager"]',
        properties: {
          '--terra-modal-manager-border': '5px dotted purple',
          '--terra-modal-manager-border-radius': '10px',
          '--terra-modal-manager-box-shadow': '2px 3px orange',
          '--terra-modal-manager-foreground-color': 'yellow',
        },
      });
    });

    describe('Disclose Tiny', () => {
      beforeEach(() => browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default')
        .click('#root-component .disclose-tiny'));

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Small', () => {
      beforeEach(() => browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default')
        .click('#root-component .disclose-small'));

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Medium', () => {
      beforeEach(() => browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default')
        .click('#root-component .disclose-medium'));

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Large', () => {
      beforeEach(() => browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default')
        .click('#root-component .disclose-large'));

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Huge', () => {
      beforeEach(() => browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default')
        .click('#root-component .disclose-huge'));

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Fullscreen', () => {
      beforeEach(() => browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default')
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
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-320-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Width-480', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-480-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Width-560', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-560-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Width-640', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-640-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Width-800', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-800-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Width-960', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-960-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Width-1120', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-1120-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Width-1280', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-1280-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Width-1440', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-1440-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Width-1600', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-1600-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Width-1760', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-1760-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Width-1920', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-1920-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Height-240', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-240-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Height-420', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-420-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Height-600', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-600-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Height-690', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-690-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Height-780', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-780-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Height-870', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-870-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Height-960', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-960-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });

      Terra.should.matchScreenshot({ selector });
    });

    describe('Disclose Height-1140', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-1140-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
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
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');

      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .disclose-tiny', 500);
      browser.click('[class*="slide-group"] #DemoContainer-1 .disclose-tiny');
    });

    Terra.should.matchScreenshot({ selector });
  });

  describe('Disclosure - Dismiss', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');

      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .dismiss', 500);
      browser.click('[class*="slide-group"] #DemoContainer-1 .dismiss');
    });

    Terra.should.matchScreenshot({ selector });
  });

  describe('Disclosure - Close Disclosure', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');

      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .close-disclosure', 500);
      browser.click('[class*="slide-group"] #DemoContainer-1 .close-disclosure');
    });

    Terra.should.matchScreenshot({ selector });
  });

  describe('Disclosure - Maximize', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');

      browser.click('#root-component .disclose-small');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 500);
      browser.click('[class*="slide-group"] #DemoContainer-1 .maximize');
    });

    Terra.should.matchScreenshot({ selector });
  });

  describe('Disclosure - Minimize', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default');

      browser.click('#root-component .disclose-small');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .maximize');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .minimize', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .minimize');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 1000);
    });

    Terra.should.matchScreenshot({ selector });
  });
});

describe('ModalManager - Component Integration', () => {
  before(() => {
    browser.setViewportSize(Terra.viewports('large')[0]);
  });

  describe('Select Field in Modal Manager', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-integration');

      browser.click('#root-component .disclose-small');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 1000);
      browser.click('[role="dialog"] [data-terra-select]');
    });

    Terra.should.matchScreenshot({ selector });
  });
});


/*
describe('Within Modal Focus Handling', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-custom-props'));

    it('focuses on the modal when opened', () => {
      expect(browser.hasFocus('[aria-modal="true"][role="dialog"]')).to.be.equal(true);
    });

    Terra.should.matchScreenshot('modal is focused on open', { selector: '#root' });

    it('focuses on interactive elements within the modal', () => {
      browser.keys(['Tab']);
      expect(browser.hasFocus('#focus-button')).to.be.equal(true);
    });

    Terra.should.matchScreenshot('modal button focused', { selector: '#root' });

    it('does not focus on interactive content within the app when the modal is open - tab cycle forward', () => {
      browser.keys(['Tab']);
    });

    Terra.should.matchScreenshot('focused shifted outside the end of the modal', { selector: '#root' });

    it('shifts focus back onto interactive elements within the modal', () => {
      browser.keys(['Shift', 'Tab']);
      expect(browser.hasFocus('#focus-button')).to.be.equal(true);
    });

    Terra.should.matchScreenshot('modal button focused again', { selector: '#root' });
  });
*/

describe('Focus Handling', () => {
  before(() => {
    browser.setViewportSize(Terra.viewports('large')[0]);
  });

  describe('Modal Focus', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-integration');
      browser.click('#root-component .disclose-small');
      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 1000);
    });

    it('focuses on the modal when opened', () => {
      expect(browser.hasFocus('[aria-modal="true"][role="dialog"]')).to.be.equal(true);
    });

    Terra.should.matchScreenshot('modal is focused', { selector });
  });

  describe('Modal Content Focus', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-integration');
      browser.click('#root-component .disclose-small');
      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 1000);
      browser.keys(['Tab']); // Shift tab focus onto modal content
    });

    it('focuses on the modal content when focus is shifted into the modal', () => {
      expect(browser.hasFocus('[class*="slide-group"] #DemoContainer-1 .disclose')).to.be.equal(true);
    });

    Terra.should.matchScreenshot('modal content is focused', { selector });
  });

  describe('Outside Focus Handling Before Modal', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-integration');
      browser.click('#root-component .disclose-small');
      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 1000);
      browser.keys(['Shift', 'Tab']); // Shift tab focus backward outside of modal
    });

    Terra.should.matchScreenshot('focused shifted before modal', { selector });
  });

  describe('Outside Focus Handling After Modal', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-integration');
      browser.click('#root-component .disclose-small');
      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 1000);
      browser.execute(() => {
        document.querySelector('#DemoContainer-1 .maximize').focus();
      });
      browser.keys(['Shift']); // Release shift key
      browser.keys(['Tab']); // Shift tab focus forward outside of modal
    });

    Terra.should.matchScreenshot('focused shifted after modal', { selector });
  });
});
