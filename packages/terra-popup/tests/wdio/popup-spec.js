const selector = '#test-popup-area';
let currentViewportSize;

Terra.describeViewports('Popup', ['medium'], () => {
  before(() => {
    currentViewportSize = browser.getWindowSize();
  });

  describe('Default popup', () => {
    it('validates popup does not have an arrow', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/popup/default-popup');
      $('.test-content').waitForDisplayed();
      expect($('.test-arrow').isExisting()).toBeFalsy();
      Terra.validates.element('default', { selector });
    });

    it('closes on ESC and focuses on button', () => {
      browser.keys('Escape');
      expect($('#default-button').isFocused()).toBeTruthy();
      expect($('.test-content').isExisting()).toBeFalsy();
    });

    it('reopens the popup', () => {
      $('#default-button').click();
      $('.test-content').waitForDisplayed();
    });

    it('closes on outside click', () => {
      $('#root').click({ x: 300, y: 300 });
      expect($('.test-content').isExisting()).toBeFalsy();
    });

    it('reopens the popup', () => {
      $('#default-button').click();
      $('.test-content').waitForDisplayed();
    });

    it('remains open on height resize', () => {
      browser.setWindowSize(currentViewportSize.width, 600);
      Terra.validates.element('height resize-remains open default popup', { selector });
    });

    it('closes on width resize', () => {
      browser.setWindowSize(currentViewportSize.width - 50, currentViewportSize.height);
      Terra.validates.element('width resize-closes open default popup', { selector });
    });

    after(() => browser.setWindowSize(currentViewportSize.width, currentViewportSize.height));
  });

  describe('Arrow popup', () => {
    it('validates popup has an arrow', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/popup/arrow-popup');
      $('.test-content').waitForDisplayed();
      expect($('.test-arrow').isExisting()).toBeTruthy();

      Terra.validates.element('popup with arrow', { selector });

      const rules = { 'landmark-one-main': { enabled: false } };
      Terra.validates.accessibility({ rules });
    });
  });

  describe('Popup with contentWidth', () => {
    it('opens popup', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/popup/popup-with-content-width');
      $('#popupContentHeight > option:nth-child(8)').click();
      $('#popupContentWidth > option:nth-child(5)').click();
      $('#popup-dimensions').waitForDisplayed();
      $('#popup-dimensions').click();
      $('.test-content').waitForDisplayed();
      Terra.validates.element('popup dimensions', { selector });
    });

    it('closes on ESC', () => {
      browser.keys('Escape');
      expect($('.test-content').isExisting()).toBeFalsy();
    });
  });

  describe('Bounded popup', () => {
    it('validates popup with a header', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/popup/bounded-popup');
      $('.test-content').waitForDisplayed();
      Terra.validates.element('with header', { selector });
    });

    it('validates popup without a header', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/popup/bounded-no-header-popup');
      $('.test-content').waitForDisplayed();
      Terra.validates.element('without header', { selector });
    });

    it('validates height bounded popup', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/popup/bounded-height-popup');
      $('.test-content').waitForDisplayed();
      Terra.validates.element('bounded height', { selector });
    });

    it('validates width bounded popup', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/popup/bounded-width-popup');
      $('.test-content').waitForDisplayed();
      Terra.validates.element('bounded width', { selector });
    });
  });

  describe('Popup inside a modal', () => {
    it('opens modal', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/popup/popup-inside-modal');
      $('.disclose').click();
      $('#test-popup-area').waitForDisplayed();
    });

    it('opens popup', () => {
      $('#popup-in-modal').click();
      $('.test-content').waitForDisplayed();
      Terra.validates.element('popup open', { selector });
    });

    it('closes on ESC', () => {
      browser.keys('Escape');
      expect($('.test-content').isExisting()).toBeFalsy(); // popup should be closed
      expect($('#test-popup-area').isExisting()).toBeTruthy(); // modal should still be closed
    });

    it('reopens the popup', () => {
      $('#popup-in-modal').click();
      $('.test-content').waitForDisplayed();
    });

    it('closes on outside click', () => {
      $('#root').click({ x: 300, y: 300 });
      expect($('.test-content').isExisting()).toBeFalsy();
      expect($('.test-content').isExisting()).toBeFalsy(); // popup should be closed
      expect($('#test-popup-area').isExisting()).toBeTruthy(); // modal should still be closed
    });

    it('reopens the popup', () => {
      $('#popup-in-modal').click();
      $('.test-content').waitForDisplayed();
    });

    it('remains open on height resize', () => {
      browser.setWindowSize(currentViewportSize.width, 600);
      Terra.validates.element('height resize-remains open popup in modal', { selector });
    });

    it('closes on width resize', () => {
      browser.setWindowSize(currentViewportSize.width - 50, currentViewportSize.height);
      Terra.validates.element('width resize-closes open popup in modal', { selector });
    });

    after(() => browser.setWindowSize(currentViewportSize.width, currentViewportSize.height));
  });

  describe('Vertical Attachments', () => {
    it('positions the arrow for vertical-left attachment', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/popup/arrow-vertical-attachments-popup');
      $('#attach-Left').click();
      $('.test-content').waitForDisplayed();
      Terra.validates.element('vertical-left attachment arrow', { selector });
      browser.keys('Escape');
    });

    it('positions the arrow for vertical-center attachment', () => {
      $('#attach-Center').click();
      $('.test-content').waitForDisplayed();
      Terra.validates.element('vertical-center attachment arrow', { selector });
      browser.keys('Escape');
    });

    it('positions the arrow for vertical-right attachment', () => {
      $('#attach-Right').click();
      $('.test-content').waitForDisplayed();
      Terra.validates.element('vertical-right attachment arrow', { selector });
      browser.keys('Escape');
    });

    it('adjusts the arrow for vertical-left attachment when arrow would be offscreen', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/popup/arrow-vertical-left-adjustment-popup');
      $('.test-content').waitForDisplayed();
      Terra.validates.element('adjusted vertical-left', { selector });
    });

    it('adjusts the arrow for vertical-right attachment when arrow would be offscreen', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/popup/arrow-vertical-right-adjustment-popup');
      $('.test-content').waitForDisplayed();
      Terra.validates.element('adjusted vertical-right', { selector });
    });
  });

  describe('Content offset', () => {
    it('applies content offset when target has vertical-right when content vertical-left attachment', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/popup/different-attachments-popup');
      $('#attach-Left').click();
      $('.test-content').waitForDisplayed();
      Terra.validates.element('target:vertical-right & content:vertical-left', { selector });
      browser.keys('Escape');
    });

    it('applies content offset when target has vertical-left when content vertical-right attachment', () => {
      $('#attach-Right').click();
      $('.test-content').waitForDisplayed();
      Terra.validates.element('target:vertical-left & content:vertical-right', { selector });
      browser.keys('Escape');
    });
  });

  describe('Popup with [Target Smaller Than Arrow]', () => {
    it('applies content offset when target is smaller than the arrow for vertical-left attachment', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/popup/arrow-small-target-left-popup');
      $('.test-content').waitForDisplayed();
      Terra.validates.element('vertical-left target smaller than arrow', { selector });
    });

    it('applies content offset when target is smaller than the arrow for vertical-right attachment', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/popup/arrow-small-target-right-popup');
      $('.test-content').waitForDisplayed();
      Terra.validates.element('vertical-right target smaller than arrow', { selector });
    });
  });

  describe('Horizontal Attachments', () => {
    it('positions the arrow for horizontal-top attachment', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/popup/arrow-horizontal-attachments-popup');
      $('#attach-Top').click();
      $('.test-content').waitForDisplayed();
      Terra.validates.element('horizontal-top', { selector });
      browser.keys('Escape');
    });

    it('positions the arrow for horizontal-middle attachment', () => {
      $('#attach-Middle').click();
      $('.test-content').waitForDisplayed();
      Terra.validates.element('horizontal-middle', { selector });
      browser.keys('Escape');
    });

    it('positions the arrow for horizontal-bottom attachment', () => {
      $('#attach-Bottom').click();
      $('.test-content').waitForDisplayed();
      Terra.validates.element('horizontal-bottom', { selector });
      browser.keys('Escape');
    });
  });

  it('Displays a small-sized popup correctly', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/popup/size-small-popup');
    $('.test-content').waitForDisplayed();
    Terra.validates.element('small sized', { selector });
  });

  it('Displays a medium-sized popup correctly', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/popup/size-medium-popup');
    $('.test-content').waitForDisplayed();
    Terra.validates.element('medium sized', { selector });
  });

  it('[Fallback-sized Popup] when invalid sizes are provided', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/popup/size-invalid-popup');
    $('.test-content').waitForDisplayed();
    Terra.validates.element('invalid size', { selector });
  });

  describe('Automatic Height Popup', () => {
    it('displays a popup with automatic height correctly', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/popup/automatic-height-popup');
      $('.test-content').waitForDisplayed();
      Terra.validates.element('automatic height', { selector });
    });

    it('remains open on height resize', () => {
      browser.setWindowSize(currentViewportSize.width, 600);
      Terra.validates.element('height resize-remains open automatic height popup', { selector });
    });

    it('closes on width resize', () => {
      browser.setWindowSize(currentViewportSize.width - 50, currentViewportSize.height);
      Terra.validates.element('width resize-closes open automatic height popup', { selector });
    });

    after(() => browser.setWindowSize(currentViewportSize.width, currentViewportSize.height));
  });

  it('displays a popup with automatic height correctly when bounded', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/popup/automatic-height-bounded-popup');
    $('.test-content').waitForDisplayed();
    Terra.validates.element('automatic height bounded popup', { selector });
  });

  describe('Automatic Width Popup', () => {
    it('displays a popup with automatic width correctly', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/popup/automatic-width-popup');
      $('.test-content').waitForDisplayed();
      Terra.validates.element('automatic width', { selector });
    });

    it('remains open on height resize', () => {
      browser.setWindowSize(currentViewportSize.width, 600);
      Terra.validates.element('height resize-remains open automatic width popup', { selector });
    });

    it('closes on width resize', () => {
      browser.setWindowSize(currentViewportSize.width - 50, currentViewportSize.height);
      Terra.validates.element('width resize-closes automatic width popup', { selector });
    });

    after(() => browser.setWindowSize(currentViewportSize.width, currentViewportSize.height));
  });

  it('displays a popup with automatic width correctly when bounded', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/popup/automatic-width-bounded-popup');
    $('.test-content').waitForDisplayed();
    Terra.validates.element('bounded automatic width', { selector });
  });

  describe('Automatic Dimensions Resizing', () => {
    it('validates original content size', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/popup/resized-content-popup');
      $('.test-content').waitForDisplayed();
      Terra.validates.element('original content size', { selector });
    });

    it('validates original content size', () => {
      $('#resize-content').click();
      browser.pause(100);
      Terra.validates.element('resized content', { selector });
    });
  });

  describe('Focus Trap Management', () => {
    it('validates focus is moved to close button when open', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/popup/focus-trap-popup');
      $('.test-content').waitForDisplayed();
      expect($('[data-terra-popup-header-button]').isFocused()).toBeTruthy();
    });

    it('validates popup content can receive focus', () => {
      browser.keys('Tab');
      expect($('#button1').isFocused()).toBeTruthy();
      browser.keys('Tab');
      expect($('#button2').isFocused()).toBeTruthy();
    });

    it('validates focus is trapped within the popup', () => {
      browser.keys('Tab');
      expect($('#default-button').isFocused()).toBeFalsy();
      expect($('[data-terra-popup-header-button]').isFocused()).toBeTruthy();
    });
  });
});

Terra.describeViewports('Displays a large-sized popup correctly', ['large'], () => {
  it('displays a large sized popup', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/popup/size-large-popup');
    $('.test-content').waitForDisplayed();

    Terra.validates.element('large sized', { selector });
  });
});
