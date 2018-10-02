describe('Popup', () => {
  describe('Arrow Popup', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => browser.url('/#/raw/tests/terra-popup/popup/arrow-popup'));

    const rules = { 'landmark-one-main': { enabled: false } };

    Terra.should.beAccessible({ selector: '.test-content', rules });
    Terra.should.themeEachCustomProperty('#test-popup-area', {
      '--terra-popup-content-inner-box-shadow': '10px 10px 36px blue',
      '--terra-popup-content-inner-background-color': 'yellow',
      '--terra-popup-content-inner-border': '10px dashed black',
      '--terra-popup-arrow-inner-color': 'red',
    });
  });

  describe('Bounded Popup', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => browser.url('/#/raw/tests/terra-popup/popup/bounded-popup'));

    // Remove when #1353 is resolved
    const rules = { 'button-name': { enabled: false }, 'landmark-one-main': { enabled: false } };

    Terra.should.beAccessible({ selector: '.test-content', rules });
    Terra.should.themeEachCustomProperty('#test-popup-area', {
      '--terra-popup-content-header-border-bottom': '15px double red',
      '--terra-popup-content-close-icon': 'green',
    });
  });

  Terra.viewports('tiny', 'medium').forEach((viewport) => {
    describe('Arrow Popup viewports', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-popup/popup/arrow-popup-closed');
        browser.setViewportSize(viewport);
        browser.click('#arrow-button');
      });

      Terra.should.matchScreenshot({ selector: '#test-popup-area' });
    });
  });

  Terra.viewports('tiny', 'medium').forEach((viewport) => {
    describe('Bounded Popup viewports', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-popup/popup/bounded-popup-closed');
        browser.setViewportSize(viewport);
        browser.click('#bounded-button');
      });

      Terra.should.matchScreenshot({ selector: '#test-popup-area' });
    });
  });

  describe('Displays a default popup & closes on width resize', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/default-popup');
      browser.waitForVisible('.test-content');
      browser.setViewportSize(Terra.viewports('small')[0]);
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a default popup & remains open on height resize', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/default-popup');
      browser.waitForVisible('.test-content');
      browser.setViewportSize({ width: browser.getViewportSize('width'), height: 600 });
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a default popup & closes on ESC', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/default-popup');
      browser.waitForVisible('.test-content');
      browser.keys('ESCAPE');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a default popup & closes on outside click', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/default-popup');
      browser.waitForVisible('.test-content');
      browser
        .moveToObject('#root', 300, 300)
        .leftClick();
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a default popup without an arrow', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/default-popup');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a popup with an arrow', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/arrow-popup');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a bounded popup with a header', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/bounded-popup');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a bounded popup without a header', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/no-header-popup');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a popup bounded by height', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/bounded-height-popup');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a popup bounded by width', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/bounded-width-popup');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a popup bounded by width and height with no header', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/bounded-no-header-popup');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Verifies content and arrow classnames are applied', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/class-name-popup');
      browser.waitForVisible('.terra-test-class-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a popup inside a modal & closes on width resize', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/popup-inside-modal');
      browser.click('.disclose');
      browser.waitForVisible('#test-popup-area');
      browser.click('#popup-in-modal');
      browser.waitForVisible('.test-content');
      browser.setViewportSize(Terra.viewports('small')[0]);
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a popup inside a modal & remains open on height resize', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/popup-inside-modal');
      browser.click('.disclose');
      browser.waitForVisible('#test-popup-area');
      browser.click('#popup-in-modal');
      browser.waitForVisible('.test-content');
      browser.setViewportSize({ width: browser.getViewportSize('width'), height: 600 });
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a popup inside modal & closes on ESC', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/popup-inside-modal');
      browser.click('.disclose');
      browser.waitForVisible('#test-popup-area');
      browser.click('#popup-in-modal');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a popup inside modal & closes on outside click', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/popup-inside-modal');
      browser.click('.disclose');
      browser.waitForVisible('#test-popup-area');
      browser.click('#popup-in-modal');
      browser.waitForVisible('.test-content');
      browser
        .moveToObject('#root', 300, 300)
        .leftClick();
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Positions the arrow for vertical-left attachment', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/arrow-vertical-attachments-popup');
      browser.click('#attach-Left');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Positions the arrow for vertical-center attachment', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/arrow-vertical-attachments-popup');
      browser.click('#attach-Center');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Positions the arrow for vertical-right attachment', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/arrow-vertical-attachments-popup');
      browser.click('#attach-Right');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Adjusts the arrow for vertical-left attachment when arrow would be offscreen', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/arrow-vertical-left-adjustment-popup');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Adjusts the arrow for vertical-right attachment when arrow would be offscreen', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/arrow-vertical-right-adjustment-popup');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Applies content offset when target has vertial-right when content vertial-left attachment', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/different-attachments-popup');
      browser.click('#attach-Left');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Applies content offset when target has vertial-left when content vertial-right attachment', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/different-attachments-popup');
      browser.click('#attach-Right');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Applies content offset when target is smaller than the arrow for vertial-left attachment', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/arrow-small-target-left-popup');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Applies content offset when target is smaller than the arrow for vertial-right attachment', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/arrow-small-target-right-popup');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Positions the arrow for horizontal-top attachment', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/arrow-horizontal-attachments-popup');
      browser.click('#attach-Top');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Positions the arrow for horizontal-middle attachment', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/arrow-horizontal-attachments-popup');
      browser.click('#attach-Middle');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Positions the arrow for horizontal-bottom attachment', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/arrow-horizontal-attachments-popup');
      browser.click('#attach-Bottom');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a small-sized popup correctly', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/size-small-popup');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a medium-sized popup correctly', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/size-medium-popup');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a large-sized popup correctly', () => {
    before(() => browser.setViewportSize(Terra.viewports('large')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/size-large-popup');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a fallback-sized popup correctly when invalid sizes are provided', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/size-invalid-popup');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a popup with automatic height correctly', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/automatic-height-popup');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a popup with automatic height & closes on width resize', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/automatic-height-popup');
      browser.waitForVisible('.test-content');
      browser.setViewportSize(Terra.viewports('small')[0]);
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a popup with automatic height & remains open on height resize', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/automatic-height-popup');
      browser.waitForVisible('.test-content');
      browser.setViewportSize({ width: browser.getViewportSize('width'), height: 600 });
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a popup with automatic height correctly when bounded by height', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/automatic-height-bounded-popup');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a popup with automatic width correctly', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/automatic-width-popup');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a popup with automatic width & closes on width resize', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/automatic-width-popup');
      browser.waitForVisible('.test-content');
      browser.setViewportSize(Terra.viewports('small')[0]);
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a popup with automatic width & remains open on height resize', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/automatic-width-popup');
      browser.waitForVisible('.test-content');
      browser.setViewportSize({ width: browser.getViewportSize('width'), height: 600 });
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a popup with automatic width correctly when bounded by width', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/automatic-width-bounded-popup');
      browser.waitForVisible('.test-content');
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });

  describe('Displays a popup with automatic dimensions resizing', () => {
    before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-popup/popup/resized-content-popup');
      browser.waitForVisible('.test-content');
      browser.click('#resize-content');
      browser.pause(100);
    });

    Terra.should.matchScreenshot({ selector: '#test-popup-area' });
  });
});
