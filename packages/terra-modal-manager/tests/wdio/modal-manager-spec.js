const selector = '#root';

Terra.describeViewports('ModalManager', ['tiny', 'large'], () => {
  before(() => {
    browser.url('/#/raw/tests/cerner-terra-framework-docs/modal-manager/modal-manager-default');
    browser.refresh();
  });

  afterEach(() => {
    browser.keys('Escape');
  });

  describe('Size Props', () => {
    it('Disclose Default', () => {
      $('#root-component .disclose').click();
      Terra.validates.element('disclose default', { selector });
    });

    it('Disclose Tiny', () => {
      $('#root-component .disclose-tiny').click();
      Terra.validates.element('disclose tiny', { selector });
    });

    it('Disclose Small', () => {
      $('#root-component .disclose-small').click();
      Terra.validates.element('disclose small', { selector });
    });

    it('Disclose Medium', () => {
      $('#root-component .disclose-medium').click();
      Terra.validates.element('disclose medium', { selector });
    });

    it('Disclose Large', () => {
      $('#root-component .disclose-large').click();
      Terra.validates.element('disclose large', { selector });
    });

    it('Disclose Huge', () => {
      $('#root-component .disclose-huge').click();
      Terra.validates.element('disclose huge', { selector });
    });

    it('Disclose Fullscreen', () => {
      $('#root-component .disclose-fullscreen').click();
      Terra.validates.element('disclose fullscreen', { selector });
    });
  });

  describe('Dimensions Props', () => {
    it('Disclose Width-320', () => {
      $('#disclosureDimensions-width-0').click();
      $('#width-320-0').click();
      $('#root-component #disclose-dimension-0').click();
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose width-320', { selector });
    });

    it('Disclose Width-480', () => {
      $('#disclosureDimensions-width-0').click();
      $('#width-480-0').click();
      $('#root-component #disclose-dimension-0').click();
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose width-480', { selector });
    });

    it('Disclose Width-560', () => {
      $('#disclosureDimensions-width-0').click();
      $('#width-560-0').click();
      $('#root-component #disclose-dimension-0').click();
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose width-560', { selector });
    });

    it('Disclose Width-640', () => {
      $('#disclosureDimensions-width-0').click();
      $('#width-640-0').click();
      $('#root-component #disclose-dimension-0').click();
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose width-640', { selector });
    });

    it('Disclose Width-800', () => {
      $('#disclosureDimensions-width-0').click();
      $('#width-800-0').click();
      $('#root-component #disclose-dimension-0').click();
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose width-800', { selector });
    });

    it('Disclose Width-960', () => {
      $('#disclosureDimensions-width-0').click();
      $('#width-960-0').click();
      $('#root-component #disclose-dimension-0').click();
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose width-960', { selector });
    });

    it('Disclose Width-1120', () => {
      $('#disclosureDimensions-width-0').click();
      $('#width-1120-0').click();
      $('#root-component #disclose-dimension-0').click();
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose width-1120', { selector });
    });

    it('Disclose Width-1280', () => {
      $('#disclosureDimensions-width-0').click();
      $('#width-1280-0').click();
      $('#root-component #disclose-dimension-0').click();
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose width-1280', { selector });
    });

    it('Disclose Width-1440', () => {
      $('#disclosureDimensions-width-0').click();
      $('#width-1440-0').click();
      $('#root-component #disclose-dimension-0').click();
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose width-1440', { selector });
    });

    it('Disclose Width-1600', () => {
      $('#disclosureDimensions-width-0').click();
      $('#width-1600-0').click();
      $('#root-component #disclose-dimension-0').click();
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose width-1600', { selector });
    });

    it('Disclose Width-1760', () => {
      $('#disclosureDimensions-width-0').click();
      $('#width-1760-0').click();
      $('#root-component #disclose-dimension-0').click();
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose width-1760', { selector });
    });

    it('Disclose Width-1920', () => {
      $('#disclosureDimensions-width-0').click();
      $('#width-1920-0').click();
      $('#root-component #disclose-dimension-0').click();
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose width-1920', { selector });
    });

    it('Disclose Height-240', () => {
      // reset width
      $('#disclosureDimensions-width-0').click();
      $('#width-320-0').click();

      $('#disclosureDimensions-height-0').click();
      $('#height-240-0').click();
      $('#root-component #disclose-dimension-0').click();
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose height-240', { selector });
    });

    it('Disclose Height-420', () => {
      $('#disclosureDimensions-height-0').click();
      $('#height-420-0').click();
      $('#root-component #disclose-dimension-0').click();
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose height-420', { selector });
    });

    it('Disclose Height-600', () => {
      $('#disclosureDimensions-height-0').click();
      $('#height-600-0').click();
      $('#root-component #disclose-dimension-0').click();
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose height-600', { selector });
    });

    it('Disclose Height-690', () => {
      $('#disclosureDimensions-height-0').click();
      $('#height-690-0').click();
      $('#root-component #disclose-dimension-0').click();
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose height-690', { selector });
    });

    it('Disclose Height-780', () => {
      $('#disclosureDimensions-height-0').click();
      $('#height-780-0').click();
      $('#root-component #disclose-dimension-0').click();
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose height-780', { selector });
    });

    it('Disclose Height-870', () => {
      $('#disclosureDimensions-height-0').click();
      $('#height-870-0').click();
      $('#root-component #disclose-dimension-0').click();
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose height-870', { selector });
    });

    it('Disclose Height-960', () => {
      $('#disclosureDimensions-height-0').click();
      $('#height-960-0').click();
      $('#root-component #disclose-dimension-0').click();
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose height-960', { selector });
    });

    it('Disclose Height-1140', () => {
      $('#disclosureDimensions-height-0').click();
      $('#height-1140-0').click();
      $('#root-component #disclose-dimension-0').click();
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose height-1140', { selector });
    });
  });
});

Terra.describeViewports('ModalManager - Behaviors', ['large'], () => {
  describe('Behaviors', () => {
    before(() => {
      browser.url('/#/raw/tests/cerner-terra-framework-docs/modal-manager/modal-manager-default');
      browser.refresh();
    });
    describe('Nested Disclose', () => {
      it('Nested Disclose', () => {
        $('#root-component .disclose-large').click();

        $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').waitForDisplayed({ timeout: 500 });
        $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').click();
        Terra.validates.element('Nested Disclose Behaviors', { selector });
        browser.keys('Escape');
      });
    });

    describe('Disclosure - Dismiss', () => {
      it('Disclosure - Dismiss', () => {
        $('#root-component .disclose-large').click();

        $('[class*="slide-group"] #DemoContainer-1 .dismiss').waitForDisplayed({ timeout: 500 });
        $('[class*="slide-group"] #DemoContainer-1 .dismiss').click();
        Terra.validates.element('Disclosure - Dismiss', { selector });
      });
    });

    describe('Disclosure - Close Disclosure', () => {
      it('Disclosure - Close Disclosure', () => {
        $('#root-component .disclose-large').click();

        $('[class*="slide-group"] #DemoContainer-1 .close-disclosure').waitForDisplayed({ timeout: 500 });
        $('[class*="slide-group"] #DemoContainer-1 .close-disclosure').click();
        Terra.validates.element('Disclosure - Close Disclosure', { selector });
      });
    });

    describe('Disclosure - Maximize', () => {
      it('Disclosure - Maximize', () => {
        $('#root-component .disclose-small').click();

        $('[class*="slide-group"] #DemoContainer-1 .maximize').waitForDisplayed({ timeout: 500 });
        $('[class*="slide-group"] #DemoContainer-1 .maximize').click();
        Terra.validates.element('Disclosure - Maximize', { selector });
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
        Terra.validates.element('Disclosure - Minimize', { selector });
        browser.keys('Escape');
      });
    });
  });

  describe('Component Integration', () => {
    before(() => browser.url('/#/raw/tests/cerner-terra-framework-docs/modal-manager/modal-manager-integration'));
    describe('Select Field in Modal Manager', () => {
      it('Select Field in Modal Manager', () => {
        $('#root-component .disclose-small').click();

        $('[class*="slide-group"] #DemoContainer-1 .maximize').waitForDisplayed({ timeout: 1000 });
        $('[role="dialog"] [data-terra-select]').click();
        Terra.validates.element('Select Field in Modal Manager', { selector });
        browser.keys(['Escape', 'Escape']);
      });
    });

    describe('Modal Focus', () => {
      it(' is on the first element when modal when opened', () => {
        $('#root-component .disclose-small').click();
        $('[class*="slide-group"] #DemoContainer-1 .maximize').waitForDisplayed({ timeout: 1000 });
        
        const firstElementWithModalBeginAttribute =  $('[aria-modal="true"][role="dialog"] [data-terra-abstract-modal-begin="true"]');
        expect(firstElementWithModalBeginAttribute.getText() === '').toEqual(true);
        
        const expectedParentElement = $('[aria-modal="true"][role="dialog"]');
        expect(firstElementWithModalBeginAttribute.parentElement().getHTML() === expectedParentElement.getHTML()).toEqual(true);
        
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
    before(() => {
      browser.url('/#/raw/tests/cerner-terra-framework-docs/modal-manager/modal-manager-with-header-adapter');
      browser.refresh();
    });

    afterEach(() => {
      browser.keys('Escape');
    });

    it('presents the close button within the managed header', () => {
      $('#root-component .disclose-large').click();

      $('[class*="right-buttons"] > *:first-child').waitForDisplayed({ timeout: 500 });
      Terra.validates.element('close button displays', { selector });
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
      browser.url('/#/raw/tests/cerner-terra-framework-docs/modal-manager/modal-manager-with-header-adapter');
      browser.refresh();
    });

    afterEach(() => {
      browser.keys('Escape');
    });

    it('presents the back button within the managed header', () => {
      $('#root-component .disclose-large').click();
      $('[class*="slide-group"] #DemoContainer-1 .disclose-large').waitForDisplayed({ timeout: 1000 });
      $('[class*="slide-group"] #DemoContainer-1 .disclose-large').click();

      $('[class*="left-buttons"] > *:first-child').waitForDisplayed({ timeout: 500 });
      Terra.validates.element('displays back button', { selector });
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
});

Terra.describeViewports('ModalManager - Disclosure Accessory', ['large'], () => {
  describe('Disclosure Accessory', () => {
    before(() => {
      browser.url('/#/raw/tests/cerner-terra-framework-docs/modal-manager/modal-manager-with-disclosure-accessory');
      browser.refresh();
    });
    it('renders the disclosure accessory', () => {
      $('#root-component .disclose-large').click();

      $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').waitForDisplayed({ timeout: 1000 });
      Terra.validates.element('accessory', { selector });
      $('[class*="slide-group"] #DemoContainer-1 .close-disclosure').click();
    });

    it('renders the disclosure accessory for each disclosed component', () => {
      $('#root-component .disclose-large').click();
      $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').waitForDisplayed({ timeout: 1000 });
      $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').click();

      Terra.validates.element('nested disclosure accessory', { selector });
      $('[class*="slide-group"] #DemoContainer-2 .close-disclosure').click();
    });
  });

  describe('Disclosure Container', () => {
    before(() => {
      browser.url('/#/raw/tests/cerner-terra-framework-docs/modal-manager/with-disclosure-container');
      browser.refresh();
    });
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
      Terra.validates.element('displays panel', { selector, axeRules: ignoredA11y });
    });

    it('opens a nested slide-panel', () => {
      $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').click();
      $('[class*="slide-group"] #DemoContainer-2 .disclose-tiny').waitForDisplayed({ timeout: 1000 });
    });

    it('renders each disclosed component in a disclosure container', () => {
      expect($('[data-disclosure-container="true"]').isExisting()).toBeTruthy();
      Terra.validates.element('nested disclosure container', { selector, axeRules: ignoredA11y });
      $('[class*="slide-group"] #DemoContainer-2 .close-disclosure').click();
    });
  });
});
