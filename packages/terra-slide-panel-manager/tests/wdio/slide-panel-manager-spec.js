Terra.describeViewports('SlidePanelManager', ['tiny', 'large'], () => {
  before(() => browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default')
    .refresh());
  afterEach(() => {
    Terra.validates.element({ selector: '#site' });
    browser.click('[class*="slide-group"] #DemoContainer-1 .dismiss');
  });
  describe('Sizes', () => {
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

  describe('Dimensions', () => {
    describe('Disclose Width-320', () => {
      it('Disclose Width-320', () => {
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-320-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.pause(300);
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Width-480', () => {
      it('Disclose Width-480', () => {
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-480-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.pause(300);
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Width-560', () => {
      it('Disclose Width-560', () => {
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-560-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.pause(300);
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Width-640', () => {
      it('Disclose Width-640', () => {
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-640-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.pause(300);
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Height-240', () => {
      it('Disclose Height-240', () => {
        browser.click('#disclosureDimensions-width-0');
        browser.click('#width-320-0');

        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-240-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.pause(300);
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Height-420', () => {
      it('Disclose Height-420', () => {
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-420-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.pause(300);
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Height-600', () => {
      it('Disclose Height-600', () => {
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-600-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.pause(300);
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });

    describe('Disclose Height-690', () => {
      it('Disclose Height-690', () => {
        browser.click('#disclosureDimensions-height-0');
        browser.click('#height-690-0');
        browser.click('#root-component #disclose-dimension-0');
        browser.pause(300);
        browser.moveToObject('#DemoContainer-1 .disclose');
      });
    });
  });
});

Terra.describeViewports('SlidePanelManager- Behaviors', ['large'], () => {
  before(() => browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default')
    .refresh());

  describe('Nested Disclose', () => {
    it('Nested Disclose', () => {
      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .disclose-tiny', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .disclose-tiny');

      Terra.validates.element({ selector: '#site' });
      browser.click('[class*="slide-group"] #DemoContainer-2 .close-disclosure');
    });
  });

  describe('Disclosure - Dismiss', () => {
    it('Disclosure - Dismiss', () => {
      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .dismiss', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .dismiss');
      Terra.validates.element({ selector: '#site' });
    });
  });

  describe('Disclosure - Close Disclosure', () => {
    it('Disclosure - Close Disclosure', () => {
      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .close-disclosure', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .close-disclosure');
      Terra.validates.element({ selector: '#site' });
    });
  });

  describe('Disclosure - Maximize', () => {
    it('Disclosure - Maximize', () => {
      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .maximize');

      Terra.validates.element({ selector: '#site' });
      browser.click('[class*="slide-group"] #DemoContainer-1 .dismiss');
    });
  });

  describe('Disclosure - Minimize', () => {
    it('Disclosure - Minimize', () => {
      browser.click('#root-component .disclose-large');

      browser.pause(500);
      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .maximize');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .minimize', 1000);
      browser.click('[class*="slide-group"] #DemoContainer-1 .minimize');

      browser.waitForVisible('[class*="slide-group"] #DemoContainer-1 .maximize', 1000);
      Terra.validates.element({ selector: '#site' });
      browser.click('[class*="slide-group"] #DemoContainer-1 .dismiss');
    });
  });
});

Terra.describeViewports('SlidePanelManager - Managed Header', ['large'], () => {
  const selector = '#root-component';

  describe('Disclosure - Header Close', () => {
    before(() => browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-with-header-adapter').refresh());

    it('presents the close button within the managed header', () => {
      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="right-buttons"] > *:first-child', 500);
      Terra.validates.element({ selector });
      browser.click('[class*="right-buttons"] > *:first-child');
    });

    it('closes the disclosure when the close button is pressed', () => {
      browser.click('#root-component .disclose-large');

      browser.waitForVisible('[class*="right-buttons"] > *:first-child', 500);
      browser.click('[class*="right-buttons"] > *:first-child');
      Terra.validates.element('after selecting close', { selector });
    });
  });

  describe('Disclosure - Header Back', () => {
    before(() => browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-with-header-adapter').refresh());

    afterEach(() => {
      browser.click('[class*="right-buttons"] > *:first-child');
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
    before(() => browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-with-header-adapter').refresh());

    afterEach(() => {
      browser.click('[class*="right-buttons"] > *:first-child');
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
    before(() => browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-with-header-adapter').refresh());

    afterEach(() => {
      browser.click('[class*="right-buttons"] > *:first-child');
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

Terra.describeViewports('SlidePanelManager - Disclosure Accessory', ['large'], () => {
  const selector = '#root-component';

  before(() => browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-with-disclosure-accessory').refresh());

  describe('Disclosure Accessory', () => {
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
});
