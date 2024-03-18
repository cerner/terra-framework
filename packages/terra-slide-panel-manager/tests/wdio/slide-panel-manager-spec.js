Terra.describeViewports('SlidePanelManager', ['tiny', 'large'], () => {
  before(() => {
    browser.url('/#/raw/tests/cerner-terra-framework-docs/slide-panel-manager/slide-panel-manager-default');
    browser.refresh();
  });
  afterEach(() => {
    $('[class*="slide-group"] #DemoContainer-1 .dismiss').click();
  });
  describe('Sizes', () => {
    it('Disclose Default', () => {
      $('#root-component .disclose').click();
      Terra.validates.element('disclose default', { selector: '#site' });
    });

    it('Disclose Tiny', () => {
      $('#root-component .disclose-tiny').click();
      Terra.validates.element('disclose tiny', { selector: '#site' });
    });

    it('Disclose Small', () => {
      $('#root-component .disclose-small').click();
      Terra.validates.element('disclose small', { selector: '#site' });
    });

    it('Disclose Medium', () => {
      $('#root-component .disclose-medium').click();
      Terra.validates.element('disclose medium', { selector: '#site' });
    });

    it('Disclose Large', () => {
      $('#root-component .disclose-large').click();
      Terra.validates.element('disclose large', { selector: '#site' });
    });

    it('Disclose Huge', () => {
      $('#root-component .disclose-huge').click();
      Terra.validates.element('disclose huge', { selector: '#site' });
    });

    it('Disclose Fullscreen', () => {
      $('#root-component .disclose-fullscreen').click();
      Terra.validates.element('disclose fullscreen', { selector: '#site' });
    });
  });

  describe('Dimensions', () => {
    it('Disclose Width-320', () => {
      $('#disclosureDimensions-width-0').click();
      $('#width-320-0').click();
      $('#root-component #disclose-dimension-0').click();
      browser.pause(300);
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose width-320', { selector: '#site' });
    });

    it('Disclose Width-480', () => {
      $('#disclosureDimensions-width-0').click();
      $('#width-480-0').click();
      $('#root-component #disclose-dimension-0').click();
      browser.pause(300);
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose width-480', { selector: '#site' });
    });

    it('Disclose Width-560', () => {
      $('#disclosureDimensions-width-0').click();
      $('#width-560-0').click();
      $('#root-component #disclose-dimension-0').click();
      browser.pause(300);
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose width-560', { selector: '#site' });
    });

    it('Disclose Width-640', () => {
      $('#disclosureDimensions-width-0').click();
      $('#width-640-0').click();
      $('#root-component #disclose-dimension-0').click();
      browser.pause(300);
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose width-640', { selector: '#site' });
    });

    it('Disclose Height-240', () => {
      $('#disclosureDimensions-width-0').click();
      $('#width-320-0').click();

      $('#disclosureDimensions-height-0').click();
      $('#height-240-0').click();
      $('#root-component #disclose-dimension-0').click();
      browser.pause(300);
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose height-240', { selector: '#site' });
    });

    it('Disclose Height-420', () => {
      $('#disclosureDimensions-height-0').click();
      $('#height-420-0').click();
      $('#root-component #disclose-dimension-0').click();
      browser.pause(300);
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose height-420', { selector: '#site' });
    });

    it('Disclose Height-600', () => {
      $('#disclosureDimensions-height-0').click();
      $('#height-600-0').click();
      $('#root-component #disclose-dimension-0').click();
      browser.pause(300);
      $('#DemoContainer-1 .disclose').moveTo();

      Terra.validates.element('disclose height-600', { selector: '#site' });
    });

    it('Disclose Height-690', () => {
      $('#disclosureDimensions-height-0').click();
      $('#height-690-0').click();
      $('#root-component #disclose-dimension-0').click();
      browser.pause(300);
      $('#DemoContainer-1 .disclose').moveTo();
      Terra.validates.element('disclose height-690', { selector: '#site' });
    });
  });
});

Terra.describeViewports('SlidePanelManager- Behaviors', ['large'], () => {
  before(() => {
    browser.url('/#/raw/tests/cerner-terra-framework-docs/slide-panel-manager/slide-panel-manager-default');
    browser.refresh();
  });

  describe('Nested Disclose', () => {
    it('Nested Disclose', () => {
      $('#root-component .disclose-large').click();

      $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').waitForDisplayed({ timeout: 1000 });
      $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').click();

      Terra.validates.element('nested disclosure behaviors', { selector: '#site' });
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

      browser.pause(1000);
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
      browser.url('/#/raw/tests/cerner-terra-framework-docs/slide-panel-manager/slide-panel-manager-with-header-adapter');
      browser.refresh();
    });

    it('presents the close button within the managed header', () => {
      $('#root-component .disclose-large').click();

      $('[class*="right-buttons"] > *:first-child').waitForDisplayed({ timeout: 1000 });
      Terra.validates.element('close button', { selector });
      $('[class*="right-buttons"] > *:first-child').click();
    });

    it('closes the disclosure when the close button is pressed', () => {
      $('#root-component .disclose-large').click();

      $('[class*="right-buttons"] > *:first-child').waitForDisplayed({ timeout: 1000 });
      $('[class*="right-buttons"] > *:first-child').click();
      Terra.validates.element('after selecting close', { selector });
    });
  });

  describe('Disclosure - Header Back', () => {
    before(() => {
      browser.url('/#/raw/tests/cerner-terra-framework-docs/slide-panel-manager/slide-panel-manager-with-header-adapter');
      browser.refresh();
    });

    afterEach(() => {
      $('[class*="right-buttons"] > *:first-child').click();
    });

    it('presents the back button within the managed header', () => {
      $('#root-component .disclose-large').click();
      $('[class*="slide-group"] #DemoContainer-1 .disclose-large').waitForDisplayed({ timeout: 1000 });
      $('[class*="slide-group"] #DemoContainer-1 .disclose-large').click();

      $('[class*="left-buttons"] > *:first-child').waitForDisplayed({ timeout: 1000 });
      Terra.validates.element('back button', { selector });
    });

    it('navigates back when the back button is pressed', () => {
      $('#root-component .disclose-large').click();
      $('[class*="slide-group"] #DemoContainer-1 .disclose-large').waitForDisplayed({ timeout: 1000 });
      $('[class*="slide-group"] #DemoContainer-1 .disclose-large').click();

      $('[class*="left-buttons"] > *:first-child').waitForDisplayed({ timeout: 1000 });
      $('[class*="left-buttons"] > *:first-child').click();
      Terra.validates.element('after selecting back', { selector });
    });
  });
});

Terra.describeViewports('SlidePanelManager - Disclosure Accessory', ['large'], () => {
  const selector = '#root-component';

  describe('Disclosure Accessory', () => {
    before(() => {
      browser.url('/#/raw/tests/cerner-terra-framework-docs/slide-panel-manager/slide-panel-manager-with-disclosure-accessory');
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

      Terra.validates.element('nested disclosure accessory', { selector });
      $('[class*="slide-group"] #DemoContainer-2 .close-disclosure').click();
    });
  });

  describe('Disclosure Container', () => {
    before(() => browser.url('/#/raw/tests/cerner-terra-framework-docs/slide-panel-manager/with-disclosure-container'));
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
      Terra.validates.element('nested disclosure Container', { selector });
      $('[class*="slide-group"] #DemoContainer-2 .close-disclosure').click();
    });
  });
});
