Terra.describeViewports('SlidePanelManager', ['tiny', 'large'], () => {
  before(() => {
    browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default');
    browser.refresh();
  });
  afterEach(() => {
    Terra.validates.element('sizes', { selector: '#site' });
    $('[class*="slide-group"] #DemoContainer-1 .dismiss').click();
  });
  describe('Sizes', () => {
    describe('Disclose Default', () => {
      it('Disclose Default', () => $('#root-component .disclose').click());
    });

    describe('Disclose Tiny', () => {
      it('Disclose Tiny', () => $('#root-component .disclose-tiny').click());
    });

    describe('Disclose Small', () => {
      it('Disclose Small', () => $('#root-component .disclose-small').click());
    });

    describe('Disclose Medium', () => {
      it('Disclose Medium', () => $('#root-component .disclose-medium').click());
    });

    describe('Disclose Large', () => {
      it('Disclose Large', () => $('#root-component .disclose-large').click());
    });

    describe('Disclose Huge', () => {
      it('Disclose Huge', () => $('#root-component .disclose-huge').click());
    });

    describe('Disclose Fullscreen', () => {
      it('Disclose Fullscreen', () => $('#root-component .disclose-fullscreen').click());
    });
  });

  describe('Dimensions', () => {
    describe('Disclose Width-320', () => {
      it('Disclose Width-320', () => {
        $('#disclosureDimensions-width-0').click();
        $('#width-320-0').click();
        $('#root-component #disclose-dimension-0').click();
        browser.pause(300);
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Width-480', () => {
      it('Disclose Width-480', () => {
        $('#disclosureDimensions-width-0').click();
        $('#width-480-0').click();
        $('#root-component #disclose-dimension-0').click();
        browser.pause(300);
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Width-560', () => {
      it('Disclose Width-560', () => {
        $('#disclosureDimensions-width-0').click();
        $('#width-560-0').click();
        $('#root-component #disclose-dimension-0').click();
        browser.pause(300);
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Width-640', () => {
      it('Disclose Width-640', () => {
        $('#disclosureDimensions-width-0').click();
        $('#width-640-0').click();
        $('#root-component #disclose-dimension-0').click();
        browser.pause(300);
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Height-240', () => {
      it('Disclose Height-240', () => {
        $('#disclosureDimensions-width-0').click();
        $('#width-320-0').click();

        $('#disclosureDimensions-height-0').click();
        $('#height-240-0').click();
        $('#root-component #disclose-dimension-0').click();
        browser.pause(300);
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Height-420', () => {
      it('Disclose Height-420', () => {
        $('#disclosureDimensions-height-0').click();
        $('#height-420-0').click();
        $('#root-component #disclose-dimension-0').click();
        browser.pause(300);
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Height-600', () => {
      it('Disclose Height-600', () => {
        $('#disclosureDimensions-height-0').click();
        $('#height-600-0').click();
        $('#root-component #disclose-dimension-0').click();
        browser.pause(300);
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Height-690', () => {
      it('Disclose Height-690', () => {
        $('#disclosureDimensions-height-0').click();
        $('#height-690-0').click();
        $('#root-component #disclose-dimension-0').click();
        browser.pause(300);
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });
  });
});

Terra.describeViewports('SlidePanelManager- Behaviors', ['large'], () => {
  before(() => {
    browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-default');
    browser.refresh();
  });

  describe('Nested Disclose', () => {
    it('Nested Disclose', () => {
      $('#root-component .disclose-large').click();

      $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').waitForDisplayed({ timeout: 1000 });
      $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').click();

      Terra.validates.element('nested disclosure', { selector: '#site' });
      $('[class*="slide-group"] #DemoContainer-2 .close-disclosure').click();
    });
  });

  describe('Disclosure - Dismiss', () => {
    it('Disclosure - Dismiss', () => {
      $('#root-component .disclose-large').click();

      $('[class*="slide-group"] #DemoContainer-1 .dismiss').waitForDisplayed({ timeout: 1000 });
      $('[class*="slide-group"] #DemoContainer-1 .dismiss').click();
      Terra.validates.element('dismiss disclosure', { selector: '#site' });
    });
  });

  describe('Disclosure - Close Disclosure', () => {
    it('Disclosure - Close Disclosure', () => {
      $('#root-component .disclose-large').click();

      $('[class*="slide-group"] #DemoContainer-1 .close-disclosure').waitForDisplayed({ timeout: 1000 });
      $('[class*="slide-group"] #DemoContainer-1 .close-disclosure').click();
      Terra.validates.element('close disclosure', { selector: '#site' });
    });
  });

  describe('Disclosure - Maximize', () => {
    it('Disclosure - Maximize', () => {
      $('#root-component .disclose-large').click();

      $('[class*="slide-group"] #DemoContainer-1 .maximize').waitForDisplayed({ timeout: 1000 });
      $('[class*="slide-group"] #DemoContainer-1 .maximize').click();

      Terra.validates.element('maximize disclosure', { selector: '#site' });
      $('[class*="slide-group"] #DemoContainer-1 .dismiss').click();
    });
  });

  describe('Disclosure - Minimize', () => {
    it('Disclosure - Minimize', () => {
      $('#root-component .disclose-large').click();

      browser.pause(500);
      $('[class*="slide-group"] #DemoContainer-1 .maximize').waitForDisplayed({ timeout: 1000 });
      $('[class*="slide-group"] #DemoContainer-1 .maximize').click();

      $('[class*="slide-group"] #DemoContainer-1 .minimize').waitForDisplayed({ timeout: 1000 });
      $('[class*="slide-group"] #DemoContainer-1 .minimize').click();

      $('[class*="slide-group"] #DemoContainer-1 .maximize').waitForDisplayed({ timeout: 1000 });
      Terra.validates.element('minimize disclosure', { selector: '#site' });
      $('[class*="slide-group"] #DemoContainer-1 .dismiss').click();
    });
  });
});

Terra.describeViewports('SlidePanelManager - Managed Header', ['large'], () => {
  const selector = '#root-component';

  describe('Disclosure - Header Close', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-with-header-adapter');
      browser.refresh();
    });

    it('presents the close button within the managed header', () => {
      $('#root-component .disclose-large').click();

      $('[class*="right-buttons"] > *:first-child').waitForDisplayed({ timeout: 500 });
      Terra.validates.element('close button', { selector });
      $('[class*="right-buttons"] > *:first-child').click();
    });

    it('closes the disclosure when the close button is pressed', () => {
      $('#root-component .disclose-large').click();

      $('[class*="right-buttons"] > *:first-child').waitForDisplayed({ timeout: 500 });
      $('[class*="right-buttons"] > *:first-child').click();
      Terra.validates.element('after selecting close', { selector });
    });
  });

  describe('Disclosure - Header Back', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-with-header-adapter');
      browser.refresh();
    });

    afterEach(() => {
      $('[class*="right-buttons"] > *:first-child').click();
    });

    it('presents the back button within the managed header', () => {
      $('#root-component .disclose-large').click();
      $('[class*="slide-group"] #DemoContainer-1 .disclose-large').waitForDisplayed({ timeout: 1000 });
      $('[class*="slide-group"] #DemoContainer-1 .disclose-large').click();

      $('[class*="left-buttons"] > *:first-child').waitForDisplayed({ timeout: 500 });
      Terra.validates.element('back button', { selector });
    });

    it('navigates back when the back button is pressed', () => {
      $('#root-component .disclose-large').click();
      $('[class*="slide-group"] #DemoContainer-1 .disclose-large').waitForDisplayed({ timeout: 1000 });
      $('[class*="slide-group"] #DemoContainer-1 .disclose-large').click();

      $('[class*="left-buttons"] > *:first-child').waitForDisplayed({ timeout: 500 });
      $('[class*="left-buttons"] > *:first-child').click();
      Terra.validates.element('after selecting back', { selector });
    });
  });

  describe('Disclosure - Header Maximize', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-with-header-adapter');
      browser.refresh();
    });

    afterEach(() => {
      $('[class*="right-buttons"] > *:first-child').click();
    });

    it('presents the maximize button within the managed header', () => {
      $('#root-component .disclose-large').click();

      $('[class*="left-buttons"] > *:first-child').waitForDisplayed({ timeout: 500 });
      Terra.validates.element('maximize button', { selector });
    });

    it('maximizes the disclosure when the maximize button is pressed', () => {
      $('#root-component .disclose-large').click();

      $('[class*="left-buttons"] > *:first-child').waitForDisplayed({ timeout: 500 });
      $('[class*="left-buttons"] > *:first-child').click();
      Terra.validates.element('after selecting maximize', { selector });
    });
  });

  describe('Disclosure - Header Minimize', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-with-header-adapter');
      browser.refresh();
    });

    afterEach(() => {
      $('[class*="right-buttons"] > *:first-child').click();
    });

    it('presents the minimize button within the managed header', () => {
      $('#root-component .disclose-large').click();

      $('[class*="left-buttons"] > *:first-child').waitForDisplayed({ timeout: 500 });
      $('[class*="left-buttons"] > *:first-child').click();
      Terra.validates.element('minimize button', { selector });
    });

    it('maximizes the disclosure when the minimize button is pressed', () => {
      $('#root-component .disclose-large').click();

      $('[class*="left-buttons"] > *:first-child').waitForDisplayed({ timeout: 500 });
      $('[class*="left-buttons"] > *:first-child').click();
      $('[class*="left-buttons"] > *:first-child').click();
      Terra.validates.element('after selecting minimize', { selector });
    });
  });
});

Terra.describeViewports('SlidePanelManager - Disclosure Accessory', ['large'], () => {
  const selector = '#root-component';

  describe('Disclosure Accessory', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/slide-panel-manager-with-disclosure-accessory');
      browser.refresh();
    });
    it('renders the disclosure accessory', () => {
      $('#root-component .disclose-large').click();

      $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').waitForDisplayed({ timeout: 1000 });
      Terra.validates.element('disclosure accessory', { selector });
      $('[class*="slide-group"] #DemoContainer-1 .close-disclosure').click();
    });

    it('renders the disclosure accessory for each disclosed component', () => {
      $('#root-component .disclose-large').click();
      $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').waitForDisplayed({ timeout: 1000 });
      $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').click();

      Terra.validates.element('nested disclosure', { selector });
      $('[class*="slide-group"] #DemoContainer-2 .close-disclosure').click();
    });
  });

  describe('Disclosure Container', () => {
    before(() => browser.url('/#/raw/tests/terra-slide-panel-manager/slide-panel-manager/with-disclosure-container'));
    it('opens the slide-panel', () => {
      $('#root-component .disclose-large').click();
      $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').waitForDisplayed({ timeout: 1000 });
    });

    it('renders the panel in an disclosure container', () => {
      expect($('[data-disclosure-container="true"]').isExisting()).toBeTruthy();
      Terra.validates.element('slide panel', { selector });
    });

    it('opens a nested slide-panel', () => {
      $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').click();
      $('[class*="slide-group"] #DemoContainer-2 .disclose-tiny').waitForDisplayed({ timeout: 1000 });
    });

    it('renders each disclosed component in a disclosure container', () => {
      expect($('[data-disclosure-container="true"').isExisting()).toBeTruthy();
      Terra.validates.element('nested disclosure', { selector });
      $('[class*="slide-group"] #DemoContainer-2 .close-disclosure').click();
    });
  });
});
