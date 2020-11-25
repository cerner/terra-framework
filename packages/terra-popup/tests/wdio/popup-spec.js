const selector = '#test-popup-area';
let currentViewportSize;

Terra.describeViewports('Popup', ['medium'], () => {
  before(() => {
    currentViewportSize = browser.getViewportSize();
  });

  describe('Default popup', () => {
    it('validates popup does not have an arrow', () => {
      browser.url('/raw/tests/terra-popup/popup/default-popup');
      browser.waitForVisible('.test-content');
      expect(browser.isExisting('.test-arrow')).to.be.false;
      Terra.validates.screenshot('default', { selector });
    });

    it('closes on ESC', () => {
      browser.keys('Escape');
      expect(browser.isExisting('.test-content')).to.be.false;
    });

    it('reopens the popup', () => {
      browser.click('#default-button');
      browser.waitForVisible('.test-content');
    });

    it('closes on outside click', () => {
      browser.moveToObject('#root', 300, 300).leftClick();
      expect(browser.isExisting('.test-content')).to.be.false;
    });

    it('reopens the popup', () => {
      browser.click('#default-button');
      browser.waitForVisible('.test-content');
    });

    it('remains open on height resize', () => {
      browser.setViewportSize({ width: currentViewportSize.width, height: 600 });
      Terra.validates.screenshot('height resize-remains open', { selector });
    });

    it('closes on width resize', () => {
      browser.setViewportSize({ width: currentViewportSize.width - 50, height: currentViewportSize.height });
      Terra.validates.screenshot('width resize-closes', { selector });
    });

    after(() => browser.setViewportSize(currentViewportSize));
  });

  describe('Arrow popup', () => {
    it('validates popup has an arrow', () => {
      browser.url('/raw/tests/terra-popup/popup/arrow-popup');
      browser.waitForVisible('.test-content');
      expect(browser.isExisting('.test-arrow')).to.be.true;

      Terra.validates.screenshot({ selector });

      const rules = { 'landmark-one-main': { enabled: false } };
      Terra.validates.accessibility({ rules });
    });
  });

  describe('Bounded popup', () => {
    it('validates popup with a header', () => {
      browser.url('/raw/tests/terra-popup/popup/bounded-popup');
      browser.waitForVisible('.test-content');
      Terra.validates.element('with header', { selector });
    });

    it('validates popup without a header', () => {
      browser.url('/raw/tests/terra-popup/popup/bounded-no-header-popup');
      browser.waitForVisible('.test-content');
      Terra.validates.screenshot('without header', { selector });
    });

    it('validates height bounded popup', () => {
      browser.url('/raw/tests/terra-popup/popup/bounded-height-popup');
      browser.waitForVisible('.test-content');
      Terra.validates.screenshot('bounded height', { selector });
    });

    it('validates width bounded popup', () => {
      browser.url('/raw/tests/terra-popup/popup/bounded-width-popup');
      browser.waitForVisible('.test-content');
      Terra.validates.screenshot('bounded width', { selector });
    });
  });

  describe('Popup inside a modal', () => {
    it('opens modal', () => {
      browser.url('/raw/tests/terra-popup/popup/popup-inside-modal');
      browser.click('.disclose');
      browser.waitForVisible('#test-popup-area');
    });

    it('opens popup', () => {
      browser.click('#popup-in-modal');
      browser.waitForVisible('.test-content');
      Terra.validates.screenshot('popup open', { selector });
    });

    it('closes on ESC', () => {
      browser.keys('Escape');
      expect(browser.isExisting('.test-content')).to.be.false; // popup should be closed
      expect(browser.isExisting('#test-popup-area')).to.be.true; // modal should still be closed
    });

    it('reopens the popup', () => {
      browser.click('#popup-in-modal');
      browser.waitForVisible('.test-content');
    });

    it('closes on outside click', () => {
      browser.moveToObject('#root', 300, 300).leftClick();
      expect(browser.isExisting('.test-content')).to.be.false;
      expect(browser.isExisting('.test-content')).to.be.false; // popup should be closed
      expect(browser.isExisting('#test-popup-area')).to.be.true; // modal should still be closed
    });

    it('reopens the popup', () => {
      browser.click('#popup-in-modal');
      browser.waitForVisible('.test-content');
    });

    it('remains open on height resize', () => {
      browser.setViewportSize({ width: currentViewportSize.width, height: 600 });
      Terra.validates.screenshot('height resize-remains open', { selector });
    });

    it('closes on width resize', () => {
      browser.setViewportSize({ width: currentViewportSize.width - 50, height: currentViewportSize.height });
      Terra.validates.screenshot('width resize-closes', { selector });
    });

    after(() => browser.setViewportSize(currentViewportSize));
  });

  describe('Vertical Attachments', () => {
    it('positions the arrow for vertical-left attachment', () => {
      browser.url('/raw/tests/terra-popup/popup/arrow-vertical-attachments-popup');
      browser.click('#attach-Left');
      browser.waitForVisible('.test-content');
      Terra.validates.screenshot('vertical-left', { selector });
      browser.keys('Escape');
    });

    it('positions the arrow for vertical-center attachment', () => {
      browser.click('#attach-Center');
      browser.waitForVisible('.test-content');
      Terra.validates.screenshot('vertical-center', { selector });
      browser.keys('Escape');
    });

    it('positions the arrow for vertical-right attachment', () => {
      browser.click('#attach-Right');
      browser.waitForVisible('.test-content');
      Terra.validates.screenshot('vertical-right', { selector });
      browser.keys('Escape');
    });

    it('adjusts the arrow for vertical-left attachment when arrow would be offscreen', () => {
      browser.url('/raw/tests/terra-popup/popup/arrow-vertical-left-adjustment-popup');
      browser.waitForVisible('.test-content');
      Terra.validates.screenshot('adjusted vertical-left', { selector });
    });

    it('adjusts the arrow for vertical-right attachment when arrow would be offscreen', () => {
      browser.url('/raw/tests/terra-popup/popup/arrow-vertical-right-adjustment-popup');
      browser.waitForVisible('.test-content');
      Terra.validates.screenshot('adjusted vertical-right', { selector });
    });
  });

  describe('Content offset', () => {
    it('applies content offset when target has vertical-right when content vertical-left attachment', () => {
      browser.url('/raw/tests/terra-popup/popup/different-attachments-popup');
      browser.click('#attach-Left');
      browser.waitForVisible('.test-content');
      Terra.validates.screenshot('target:vertical-right & content:vertical-left', { selector });
      browser.keys('Escape');
    });

    it('applies content offset when target has vertical-left when content vertical-right attachment', () => {
      browser.click('#attach-Right');
      browser.waitForVisible('.test-content');
      Terra.validates.screenshot('target:vertical-left & content:vertical-right', { selector });
      browser.keys('Escape');
    });
  });

  describe('Popup with [Target Smaller Than Arrow]', () => {
    it('applies content offset when target is smaller than the arrow for vertical-left attachment', () => {
      browser.url('/raw/tests/terra-popup/popup/arrow-small-target-left-popup');
      browser.waitForVisible('.test-content');
      Terra.validates.screenshot('vertical-left', { selector });
    });

    it('applies content offset when target is smaller than the arrow for vertical-right attachment', () => {
      browser.url('/raw/tests/terra-popup/popup/arrow-small-target-right-popup');
      browser.waitForVisible('.test-content');
      Terra.validates.screenshot('vertical-right', { selector });
    });
  });

  describe('Horizontal Attachments', () => {
    it('positions the arrow for horizontal-top attachment', () => {
      browser.url('/raw/tests/terra-popup/popup/arrow-horizontal-attachments-popup');
      browser.click('#attach-Top');
      browser.waitForVisible('.test-content');
      Terra.validates.screenshot('horizontal-top', { selector });
      browser.keys('Escape');
    });

    it('positions the arrow for horizontal-middle attachment', () => {
      browser.click('#attach-Middle');
      browser.waitForVisible('.test-content');
      Terra.validates.screenshot('horizontal-middle', { selector });
      browser.keys('Escape');
    });

    it('positions the arrow for horizontal-bottom attachment', () => {
      browser.click('#attach-Bottom');
      browser.waitForVisible('.test-content');
      Terra.validates.screenshot('horizontal-bottom', { selector });
      browser.keys('Escape');
    });
  });

  it('Displays a small-sized popup correctly', () => {
    browser.url('/raw/tests/terra-popup/popup/size-small-popup');
    browser.waitForVisible('.test-content');
    Terra.validates.element('small sized', { selector });
  });

  it('Displays a medium-sized popup correctly', () => {
    browser.url('/raw/tests/terra-popup/popup/size-medium-popup');
    browser.waitForVisible('.test-content');
    Terra.validates.element('medium sized', { selector });
  });

  it('[Fallback-sized Popup] when invalid sizes are provided', () => {
    browser.url('/raw/tests/terra-popup/popup/size-invalid-popup');
    browser.waitForVisible('.test-content');
    Terra.validates.element('invalid size', { selector });
  });

  describe('Automatic Height Popup', () => {
    it('displays a popup with automatic height correctly', () => {
      browser.url('/raw/tests/terra-popup/popup/automatic-height-popup');
      browser.waitForVisible('.test-content');
      Terra.validates.screenshot({ selector });
    });

    it('remains open on height resize', () => {
      browser.setViewportSize({ width: currentViewportSize.width, height: 600 });
      Terra.validates.screenshot('height resize-remains open', { selector });
    });

    it('closes on width resize', () => {
      browser.setViewportSize({ width: currentViewportSize.width - 50, height: currentViewportSize.height });
      Terra.validates.screenshot('width resize-closes', { selector });
    });

    after(() => browser.setViewportSize(currentViewportSize));
  });

  it('displays a popup with automatic height correctly when bounded', () => {
    browser.url('/raw/tests/terra-popup/popup/automatic-height-bounded-popup');
    browser.waitForVisible('.test-content');
    Terra.validates.screenshot({ selector });
  });

  describe('Automatic Width Popup', () => {
    it('displays a popup with automatic width correctly', () => {
      browser.url('/raw/tests/terra-popup/popup/automatic-width-popup');
      browser.waitForVisible('.test-content');
      Terra.validates.screenshot({ selector });
    });

    it('remains open on height resize', () => {
      browser.setViewportSize({ width: currentViewportSize.width, height: 600 });
      Terra.validates.screenshot('height resize-remains open', { selector });
    });

    it('closes on width resize', () => {
      browser.setViewportSize({ width: currentViewportSize.width - 50, height: currentViewportSize.height });
      Terra.validates.screenshot('width resize-closes', { selector });
    });

    after(() => browser.setViewportSize(currentViewportSize));
  });

  it('displays a popup with automatic width correctly when bounded', () => {
    browser.url('/raw/tests/terra-popup/popup/automatic-width-bounded-popup');
    browser.waitForVisible('.test-content');
    Terra.validates.screenshot('bounded automatic width', { selector });
  });

  describe('Automatic Dimensions Resizing', () => {
    it('validates original content size', () => {
      browser.url('/raw/tests/terra-popup/popup/resized-content-popup');
      browser.waitForVisible('.test-content');
      Terra.validates.screenshot({ selector });
    });

    it('validates original content size', () => {
      browser.click('#resize-content');
      browser.pause(100);
      Terra.validates.screenshot('resized content', { selector });
    });
  });

  describe('Focus Trap Management', () => {
    it('validates focus is moved to popup when open', () => {
      browser.url('/raw/tests/terra-popup/popup/focus-trap-popup');
      browser.waitForVisible('.test-content');
      expect(browser.hasFocus('[data-terra-popup-content]')).to.be.true;
    });

    it('validates popup content can receive focus', () => {
      browser.keys('Tab');
      expect(browser.hasFocus('#button1')).to.be.true;
      browser.keys('Tab');
      expect(browser.hasFocus('#button2')).to.be.true;
    });

    it('validates focus is trapped within the popup', () => {
      browser.keys('Tab');
      expect(browser.hasFocus('#default-button')).to.be.false;
      expect(browser.hasFocus('[data-terra-popup-content]')).to.be.true;
    });
  });
});

Terra.describeViewports('Displays a large-sized popup correctly', ['large'], () => {
  it('displays a large sized popup', () => {
    browser.url('/raw/tests/terra-popup/popup/size-large-popup');
    browser.waitForVisible('.test-content');

    Terra.validates.element('large sized', { selector });
  });
});
