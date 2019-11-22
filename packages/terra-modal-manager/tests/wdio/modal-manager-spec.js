const selector = '#root';

Terra.describeViewports('ModalManager', ['tiny', 'large'], () => {
  before(() => browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default').refresh());

  afterEach(() => {
    Terra.validates.element({ selector });
    browser.keys('Escape');
  });

  describe('Size Props', () => {
    describe('Disclose Default', () => {
      it('Disclose Default', () => browser.click('#root-component .disclose'));
    });

    describe('Disclose Tiny', () => {
      it('Disclose Tiny', () => browser.click('#root-component .disclose-tiny'));
    });

    describe('Disclose Small', () => {
      it('Disclose Small', () => browser.click('#root-component .disclose-small'));
    });

    describe('Disclose Medium', () => {
      it('Disclose Medium', () => browser.click('#root-component .disclose-medium'));
    });

    describe('Disclose Large', () => {
      it('Disclose Large', () => browser.click('#root-component .disclose-large'));
    });

    describe('Disclose Huge', () => {
      it('Disclose Huge', () => browser.click('#root-component .disclose-huge'));
    });

    describe('Disclose Fullscreen', () => {
      it('Disclose Fullscreen', () => browser.click('#root-component .disclose-fullscreen'));
    });
  });

  describe('Dimensions Props', () => {
    describe('Disclose Width-320', () => {
      it('Disclose Width-320', () => {
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-320-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Width-480', () => {
      it('Disclose Width-480', () => {
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-480-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Width-560', () => {
      it('Disclose Width-560', () => {
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-560-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Width-640', () => {
      it('Disclose Width-640', () => {
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-640-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Width-800', () => {
      it('Disclose Width-800', () => {
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-800-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Width-960', () => {
      it('Disclose Width-960', () => {
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-960-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Width-1120', () => {
      it('Disclose Width-1120', () => {
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-1120-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Width-1280', () => {
      it('Disclose Width-1280', () => {
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-1280-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Width-1440', () => {
      it('Disclose Width-1440', () => {
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-1440-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Width-1600', () => {
      it('Disclose Width-1600', () => {
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-1600-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Width-1760', () => {
      it('Disclose Width-1760', () => {
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-1760-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Width-1920', () => {
      it('Disclose Width-1920', () => {
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-1920-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Height-240', () => {
      it('Disclose Height-240', () => {
        // reset width
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-320-0');

        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-240-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Height-420', () => {
      it('Disclose Height-420', () => {
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-420-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Height-600', () => {
      it('Disclose Height-600', () => {
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-600-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Height-690', () => {
      it('Disclose Height-690', () => {
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-690-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Height-780', () => {
      it('Disclose Height-780', () => {
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-780-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Height-870', () => {
      it('Disclose Height-870', () => {
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-870-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Height-960', () => {
      it('Disclose Height-960', () => {
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-960-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Height-1140', () => {
      it('Disclose Height-1140', () => {
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-1140-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });
  });
});

Terra.describeViewports('ModalManager - Behaviors', ['large'], () => {
  describe('Behaviors', () => {
    before(() => browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default')
      .refresh());
    describe('Nested Disclose', () => {
      it('Nested Disclose', () => {
        browser.click('#root-component .disclose-large');

        browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .disclose-tiny', 500);
        browser.click('[class*="slide-group"] #DemoContainer-1 .disclose-tiny');
        Terra.validates.element({ selector });
        browser.keys('Escape');
      });
    });

    describe('Disclosure - Dismiss', () => {
      it('Disclosure - Dismiss', () => {
        browser.click('#root-component .disclose-large');

        browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .dismiss', 500);
        browser.click('[class*="slide-group"] #DemoContainer-1 .dismiss');
        Terra.validates.element({ selector });
      });
    });

    describe('Disclosure - Close Disclosure', () => {
      it('Disclosure - Close Disclosure', () => {
        browser.click('#root-component .disclose-large');

        browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .close-disclosure', 500);
        browser.click('[class*="slide-group"] #DemoContainer-1 .close-disclosure');
        Terra.validates.element({ selector });
      });
    });

    describe('Disclosure - Maximize', () => {
      it('Disclosure - Maximize', () => {
        browser.click('#root-component .disclose-small');

        browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 500);
        browser.click('[class*="slide-group"] #DemoContainer-1 .maximize');
        Terra.validates.element({ selector });
        browser.keys('Escape');
      });
    });

    describe('Disclosure - Minimize', () => {
      it('Disclosure - Minimize', () => {
        browser.click('#root-component .disclose-small');

        browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 1000);
        browser.click('[class*="slide-group"] #DemoContainer-1 .maximize');

        browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .minimize', 1000);
        browser.click('[class*="slide-group"] #DemoContainer-1 .minimize');

        browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 1000);
        Terra.validates.element({ selector });
        browser.keys('Escape');
      });
    });
  });

  describe('Component Integration', () => {
    before(() => browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-integration'));
    describe('Select Field in Modal Manager', () => {
      it('Select Field in Modal Manager', () => {
        browser.click('#root-component .disclose-small');

        browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 1000);
        browser.click('[role="dialog"] [data-terra-select]');
        Terra.validates.element({ selector });
        browser.keys(['Escape', 'Escape']);
      });
    });

    describe('Modal Focus', () => {
      it('focuses on the modal when opened', () => {
        browser.click('#root-component .disclose-small');
        browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 1000);
        expect(browser.hasFocus('[aria-modal="true"][role="dialog"]')).to.be.equal(true);
        Terra.validates.element('modal is focused', { selector });
        browser.keys('Escape');
      });
    });

    describe('Modal Content Focus', () => {
      it('focuses on the modal content when focus is shifted into the modal', () => {
        browser.click('#root-component .disclose-small');
        browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 1000);
        browser.keys(['Tab']); // Shift tab focus onto modal content
        expect(browser.hasFocus('[class*="slide-group"] #DemoContainer-1 .disclose')).to.be.equal(true);
        Terra.validates.element('modal content is focused', { selector });
        browser.keys('Escape');
      });
    });

    describe('Outside Focus Handling Before Modal', () => {
      it('shifts focus before modal', () => {
        browser.click('#root-component .disclose-small');
        browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 1000);
        browser.keys(['Shift', 'Tab']); // Shift tab focus backward outside of modal
        Terra.validates.element('focused shifted before modal', { selector });
        browser.keys('Escape');
      });
    });

    describe('Outside Focus Handling After Modal', () => {
      it('shifts focus after the modal', () => {
        browser.click('#root-component .disclose-small');
        browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 1000);
        browser.execute(() => {
          document.querySelector('#DemoContainer-1 .maximize').focus();
        });
        browser.keys(['Shift']); // Release shift key
        browser.keys(['Tab']); // Shift tab focus forward outside of modal
        Terra.validates.element('focused shifted after modal', { selector });
        browser.keys('Escape');
      });
    });
  });
});

Terra.describeViewports('ModalManager - Managed Header', ['large'], () => {
  describe('Disclosure - Header Close', () => {
    before(() => browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-with-header-adapter')
      .refresh());

    afterEach(() => {
      browser.keys('Escape');
    });

    it('presents the close button within the managed header', () => {
      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="right-buttons"] > *:first-child', 500);
      Terra.validates.element({ selector });
    });

    it('closes the disclosure when the close button is pressed', () => {
      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="right-buttons"] > *:first-child', 500);
      browser.click('[class*="right-buttons"] > *:first-child');
      Terra.validates.element('after selecting close', { selector });
    });
  });

  describe('Disclosure - Header Back', () => {
    before(() => browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-with-header-adapter')
      .refresh());

    afterEach(() => {
      browser.keys('Escape');
    });

    it('presents the back button within the managed header', () => {
      browser.click('#root-component .disclose-large');
      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .disclose-large', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .disclose-large', 1000);

      browser.waitForVisible('[class*="left-buttons"] > *:first-child', 500);
      Terra.validates.element({ selector });
    });

    it('navigates back when the back button is pressed', () => {
      browser.click('#root-component .disclose-large');
      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .disclose-large', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .disclose-large', 1000);

      browser.waitForVisible('[class*="left-buttons"] > *:first-child', 500);
      browser.click('[class*="left-buttons"] > *:first-child', 500);
      Terra.validates.element('after selecting back', { selector });
    });
  });

  describe('Disclosure - Header Maximize', () => {
    before(() => browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-with-header-adapter')
      .refresh());

    afterEach(() => {
      browser.keys('Escape');
    });

    it('presents the maximize button within the managed header', () => {
      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="left-buttons"] > *:first-child', 500);
      Terra.validates.element({ selector });
    });

    it('maximizes the disclosure when the maximize button is pressed', () => {
      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="left-buttons"] > *:first-child', 500);
      browser.click('[class*="left-buttons"] > *:first-child');
      Terra.validates.element('after selecting maximize', { selector });
    });
  });

  describe('Disclosure - Header Minimize', () => {
    before(() => browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-with-header-adapter')
      .refresh());

    afterEach(() => {
      browser.keys('Escape');
    });

    it('presents the minimize button within the managed header', () => {
      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="left-buttons"] > *:first-child', 500);
      browser.click('[class*="left-buttons"] > *:first-child');
      Terra.validates.element({ selector });
    });

    it('maximizes the disclosure when the minimize button is pressed', () => {
      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="left-buttons"] > *:first-child', 500);
      browser.click('[class*="left-buttons"] > *:first-child');
      browser.click('[class*="left-buttons"] > *:first-child');
      Terra.validates.element('after selecting minimize', { selector });
    });
  });
});

Terra.describeViewports('ModalManager - Disclosure Accessory', ['large'], () => {
  describe('Disclosure Accessory', () => {
    before(() => browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-with-disclosure-accessory').refresh());
    it('renders the disclosure accessory', () => {
      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .disclose-tiny', 1000);
      Terra.validates.element({ selector });
      browser.click('[class*="slide-group"] #DemoContainer-1 .close-disclosure');
    });

    it('renders the disclosure accessory for each disclosed component', () => {
      browser.click('#root-component .disclose-large');
      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .disclose-tiny', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .disclose-tiny');

      Terra.validates.element('nested disclosure', { selector });
      browser.click('[class*="slide-group"] #DemoContainer-2 .close-disclosure');
    });
  });

  describe.only('Disclosure Container', () => {
    before(() => browser.url('/#/raw/tests/terra-modal-manager/modal-manager/with-disclosure-container').refresh());
    it('opens the modal', () => {
      browser.click('#root-component .disclose-large');
      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .disclose-tiny', 1000);
    });

    it('renders the panel in an disclosure container', () => {
      expect(browser.isExisting('[data-disclosure-container="true"]')).to.be.true;
      Terra.validates.element({ selector });
    });

    it('opens a nested slide-panel', () => {
      browser.click('[class*="slide-group"] #DemoContainer-1 .disclose-tiny');
      browser.waitForVisible('[class*="slide-group"] #DemoContainer-2 .disclose-tiny', 1000);
    });

    it('renders each disclosed component in a disclosure container', () => {
      expect(browser.isExisting('[data-disclosure-container="true"]')).to.be.true;
      Terra.validates.element('nested disclosure', { selector });
      browser.click('[class*="slide-group"] #DemoContainer-2 .close-disclosure');
    });
  });
});
