/* global $ */
const selector = '#root';

Terra.describeViewports('ModalManager', ['tiny', 'large'], () => {
  before(() => browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-default').refresh());

  afterEach(() => {
    Terra.validates.element({ selector });
    browser.keys('Escape');
  });

  describe('Size Props', () => {
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

  describe('Dimensions Props', () => {
    describe('Disclose Width-320', () => {
      it('Disclose Width-320', () => {
        $('#disclosureDimensions-width-0').click();
        $('#width-320-0').click();
        $('#root-component #disclose-dimension-0').click();
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Width-480', () => {
      it('Disclose Width-480', () => {
        $('#disclosureDimensions-width-0').click();
        $('#width-480-0').click();
        $('#root-component #disclose-dimension-0').click();
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Width-560', () => {
      it('Disclose Width-560', () => {
        $('#disclosureDimensions-width-0').click();
        $('#width-560-0').click();
        $('#root-component #disclose-dimension-0').click();
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Width-640', () => {
      it('Disclose Width-640', () => {
        $('#disclosureDimensions-width-0').click();
        $('#width-640-0').click();
        $('#root-component #disclose-dimension-0').click();
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Width-800', () => {
      it('Disclose Width-800', () => {
        $('#disclosureDimensions-width-0').click();
        $('#width-800-0').click();
        $('#root-component #disclose-dimension-0').click();
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Width-960', () => {
      it('Disclose Width-960', () => {
        $('#disclosureDimensions-width-0').click();
        $('#width-960-0').click();
        $('#root-component #disclose-dimension-0').click();
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Width-1120', () => {
      it('Disclose Width-1120', () => {
        $('#disclosureDimensions-width-0').click();
        $('#width-1120-0').click();
        $('#root-component #disclose-dimension-0').click();
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Width-1280', () => {
      it('Disclose Width-1280', () => {
        $('#disclosureDimensions-width-0').click();
        $('#width-1280-0').click();
        $('#root-component #disclose-dimension-0').click();
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Width-1440', () => {
      it('Disclose Width-1440', () => {
        $('#disclosureDimensions-width-0').click();
        $('#width-1440-0').click();
        $('#root-component #disclose-dimension-0').click();
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Width-1600', () => {
      it('Disclose Width-1600', () => {
        $('#disclosureDimensions-width-0').click();
        $('#width-1600-0').click();
        $('#root-component #disclose-dimension-0').click();
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Width-1760', () => {
      it('Disclose Width-1760', () => {
        $('#disclosureDimensions-width-0').click();
        $('#width-1760-0').click();
        $('#root-component #disclose-dimension-0').click();
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Width-1920', () => {
      it('Disclose Width-1920', () => {
        $('#disclosureDimensions-width-0').click();
        $('#width-1920-0').click();
        $('#root-component #disclose-dimension-0').click();
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Height-240', () => {
      it('Disclose Height-240', () => {
        // reset width
        $('#disclosureDimensions-width-0').click();
        $('#width-320-0').click();

        $('#disclosureDimensions-height-0').click();
        $('#height-240-0').click();
        $('#root-component #disclose-dimension-0').click();
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Height-420', () => {
      it('Disclose Height-420', () => {
        $('#disclosureDimensions-height-0').click();
        $('#height-420-0').click();
        $('#root-component #disclose-dimension-0').click();
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Height-600', () => {
      it('Disclose Height-600', () => {
        $('#disclosureDimensions-height-0').click();
        $('#height-600-0').click();
        $('#root-component #disclose-dimension-0').click();
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Height-690', () => {
      it('Disclose Height-690', () => {
        $('#disclosureDimensions-height-0').click();
        $('#height-690-0').click();
        $('#root-component #disclose-dimension-0').click();
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Height-780', () => {
      it('Disclose Height-780', () => {
        $('#disclosureDimensions-height-0').click();
        $('#height-780-0').click();
        $('#root-component #disclose-dimension-0').click();
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Height-870', () => {
      it('Disclose Height-870', () => {
        $('#disclosureDimensions-height-0').click();
        $('#height-870-0').click();
        $('#root-component #disclose-dimension-0').click();
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Height-960', () => {
      it('Disclose Height-960', () => {
        $('#disclosureDimensions-height-0').click();
        $('#height-960-0').click();
        $('#root-component #disclose-dimension-0').click();
        $('#DemoContainer-1 .disclose').moveTo();
      });
    });

    describe('Disclose Height-1140', () => {
      it('Disclose Height-1140', () => {
        $('#disclosureDimensions-height-0').click();
        $('#height-1140-0').click();
        $('#root-component #disclose-dimension-0').click();
        $('#DemoContainer-1 .disclose').moveTo();
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
        $('#root-component .disclose-large').click();

        $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').waitForDisplayed({ timeout: 500 });
        $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').click();
        Terra.validates.element({ selector });
        browser.keys('Escape');
      });
    });

    describe('Disclosure - Dismiss', () => {
      it('Disclosure - Dismiss', () => {
        $('#root-component .disclose-large').click();

        $('[class*="slide-group"] #DemoContainer-1 .dismiss').waitForDisplayed({ timeout: 500 });
        $('[class*="slide-group"] #DemoContainer-1 .dismiss').click();
        Terra.validates.element({ selector });
      });
    });

    describe('Disclosure - Close Disclosure', () => {
      it('Disclosure - Close Disclosure', () => {
        $('#root-component .disclose-large').click();

        $('[class*="slide-group"] #DemoContainer-1 .close-disclosure').waitForDisplayed({ timeout: 500 });
        $('[class*="slide-group"] #DemoContainer-1 .close-disclosure').click();
        Terra.validates.element({ selector });
      });
    });

    describe('Disclosure - Maximize', () => {
      it('Disclosure - Maximize', () => {
        $('#root-component .disclose-small').click();

        $('[class*="slide-group"] #DemoContainer-1 .maximize').waitForDisplayed({ timeout: 500 });
        $('[class*="slide-group"] #DemoContainer-1 .maximize').click();
        Terra.validates.element({ selector });
        browser.keys('Escape');
      });
    });

    describe('Disclosure - Minimize', () => {
      it('Disclosure - Minimize', () => {
        $('#root-component .disclose-small').click();

        $('[class*="slide-group"] #DemoContainer-1 .maximize').waitForDisplayed({ timeout: 1000 });
        $('[class*="slide-group"] #DemoContainer-1 .maximize').click();

        $('[class*="slide-group"] #DemoContainer-1 .minimize').waitForDisplayed({ timeout: 1000 });
        $('[class*="slide-group"] #DemoContainer-1 .minimize').click();

        $('[class*="slide-group"] #DemoContainer-1 .maximize').waitForDisplayed({ timeout: 1000 });
        Terra.validates.element({ selector });
        browser.keys('Escape');
      });
    });
  });

  describe('Component Integration', () => {
    before(() => browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-integration'));
    describe('Select Field in Modal Manager', () => {
      it('Select Field in Modal Manager', () => {
        $('#root-component .disclose-small').click();

        $('[class*="slide-group"] #DemoContainer-1 .maximize').waitForDisplayed({ timeout: 1000 });
        $('[role="dialog"] [data-terra-select]').click();
        Terra.validates.element({ selector });
        browser.keys(['Escape', 'Escape']);
      });
    });

    describe('Modal Focus', () => {
      it('focuses on the modal when opened', () => {
        $('#root-component .disclose-small').click();
        $('[class*="slide-group"] #DemoContainer-1 .maximize').waitForDisplayed({ timeout: 1000 });
        expect($('[aria-modal="true"][role="dialog"]').isFocused()).toEqual(true);
        Terra.validates.element('modal is focused', { selector });
        browser.keys('Escape');
      });
    });

    describe('Modal Content Focus', () => {
      it('focuses on the modal content when focus is shifted into the modal', () => {
        $('#root-component .disclose-small').click();
        $('[class*="slide-group"] #DemoContainer-1 .maximize').waitForDisplayed({ timeout: 1000 });
        browser.keys(['Tab']); // Shift tab focus onto modal content
        expect($('[class*="slide-group"] #DemoContainer-1 .disclose').isFocused()).toEqual(true);
        Terra.validates.element('modal content is focused', { selector });
        browser.keys('Escape');
      });
    });

    describe('Outside Focus Handling Before Modal', () => {
      it('shifts focus before modal', () => {
        $('#root-component .disclose-small').click();
        $('[class*="slide-group"] #DemoContainer-1 .maximize').waitForDisplayed({ timeout: 1000 });
        browser.keys(['Shift', 'Tab']); // Shift tab focus backward outside of modal
        Terra.validates.element('focused shifted before modal', { selector });
        browser.keys('Escape');
      });
    });

    describe('Outside Focus Handling After Modal', () => {
      it('shifts focus after the modal', () => {
        $('#root-component .disclose-small').click();
        $('[class*="slide-group"] #DemoContainer-1 .maximize').waitForDisplayed({ timeout: 1000 });
        // eslint-disable-next-line prefer-arrow-callback
        browser.execute(function dispatch() {
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
      $('#root-component .disclose-large').click();

      $('[class*="right-buttons"] > *:first-child').waitForDisplayed({ timeout: 500 });
      Terra.validates.element({ selector });
    });

    it('closes the disclosure when the close button is pressed', () => {
      $('#root-component .disclose-large').click();

      $('[class*="right-buttons"] > *:first-child').waitForDisplayed({ timeout: 500 });
      $('[class*="right-buttons"] > *:first-child').click();
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
      $('#root-component .disclose-large').click();
      $('[class*="slide-group"] #DemoContainer-1 .disclose-large').waitForDisplayed({ timeout: 1000 });
      $('[class*="slide-group"] #DemoContainer-1 .disclose-large').click();

      $('[class*="left-buttons"] > *:first-child').waitForDisplayed({ timeout: 500 });
      Terra.validates.element({ selector });
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
    before(() => browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-with-header-adapter')
      .refresh());

    afterEach(() => {
      browser.keys('Escape');
    });

    it('presents the maximize button within the managed header', () => {
      $('#root-component .disclose-large').click();

      $('[class*="left-buttons"] > *:first-child').waitForDisplayed({ timeout: 500 });
      Terra.validates.element({ selector });
    });

    it('maximizes the disclosure when the maximize button is pressed', () => {
      $('#root-component .disclose-large').click();

      $('[class*="left-buttons"] > *:first-child').waitForDisplayed({ timeout: 500 });
      $('[class*="left-buttons"] > *:first-child').click();
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
      $('#root-component .disclose-large').click();

      $('[class*="left-buttons"] > *:first-child').waitForDisplayed({ timeout: 500 });
      $('[class*="left-buttons"] > *:first-child').click();
      Terra.validates.element({ selector });
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

Terra.describeViewports('ModalManager - Disclosure Accessory', ['large'], () => {
  describe('Disclosure Accessory', () => {
    before(() => browser.url('/#/raw/tests/terra-modal-manager/modal-manager/modal-manager-with-disclosure-accessory').refresh());
    it('renders the disclosure accessory', () => {
      $('#root-component .disclose-large').click();

      $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').waitForDisplayed({ timeout: 1000 });
      Terra.validates.element({ selector });
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
    before(() => browser.url('/#/raw/tests/terra-modal-manager/modal-manager/with-disclosure-container').refresh());
    // Skip color contrast check for elements behind a slide-shadow
    const ignoredA11y = {
      'color-contrast': {
        enabled: false,
        selector: '[class*="slide-shadow"]',
      },
    };

    it('opens the modal', () => {
      $('#root-component .disclose-large').click();
      $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').waitForDisplayed({ timeout: 1000 });
    });

    it('renders the panel in an disclosure container', () => {
      expect($('[data-disclosure-container="true"]').isExisting()).toBeTruthy();
      Terra.validates.element({ selector, axeRules: ignoredA11y });
    });

    it('opens a nested slide-panel', () => {
      $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').click();
      $('[class*="slide-group"] #DemoContainer-2 .disclose-tiny').waitForDisplayed({ timeout: 1000 });
    });

    it('renders each disclosed component in a disclosure container', () => {
      expect(browser.isExisting('[data-disclosure-container="true"]')).toBeTruthy();
      Terra.validates.element('nested disclosure', { selector, axeRules: ignoredA11y });
      $('[class*="slide-group"] #DemoContainer-2 .close-disclosure').click();
    });
  });
});
