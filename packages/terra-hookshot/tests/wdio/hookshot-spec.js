Terra.describeViewports('Hookshot', ['medium'], () => {
  describe('Displays default hookshot', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/default-hookshot');
      browser.click('#hookshot-standard-button');
      browser.waitForVisible('#testDefaultContent');
    });

    Terra.it.matchesScreenshot({ selector: '#default-bounds' });
  });

  // none position behavior
  describe('Displays in primary position when there is enough room with no attachment behavior', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-none');
      browser.click('#position-primary');
      browser.click('#trigger-attachment-behavior-none');
      browser.waitForVisible('#attachment-behavior-none-content');
    });

    Terra.it.matchesScreenshot({ selector: '#attachment-behavior-none-bounds' });
  });

  describe('Displays in primary position when there is not enough room in primary position with no attachment behavior', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-none');
      browser.click('#position-offset');
      browser.click('#trigger-attachment-behavior-none');
      browser.waitForVisible('#attachment-behavior-none-content');
    });

    Terra.it.matchesScreenshot({ selector: '#attachment-behavior-none-bounds' });
  });

  // push position behavior
  describe('Displays with position pushed when there is not enough room in primary position with no attachment behavior', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-push');
      browser.click('#position-pushed');
      browser.click('#trigger-attachment-behavior-push');
      browser.waitForVisible('#attachment-behavior-push-content');
    });

    Terra.it.matchesScreenshot({ selector: '#attachment-behavior-push-bounds' });
  });

  // flip position behavior
  describe('Displays in primary position when there is enough room with flip attachment behavior', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-flip');
      browser.click('#position-primary');
      browser.click('#trigger-attachment-behavior-flip');
      browser.waitForVisible('#attachment-behavior-flip-content');
    });

    Terra.it.matchesScreenshot({ selector: '#attachment-behavior-flip-bounds' });
  });

  describe('Displays with position flipped when there is not enough room in primary position with flip attachment behavior', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-flip');
      browser.click('#position-flipped');
      browser.click('#trigger-attachment-behavior-flip');
      browser.waitForVisible('#attachment-behavior-flip-content');
    });

    Terra.it.matchesScreenshot({ selector: '#attachment-behavior-flip-bounds' });
  });

  describe('Displays with position pushed when there is not enough room in primary or flipped position with flip attachment behavior', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-flip');
      browser.click('#position-flipped');
      browser.click('#trigger-attachment-behavior-flip');
      browser.waitForVisible('#attachment-behavior-flip-content');
    });

    Terra.it.matchesScreenshot({ selector: '#attachment-behavior-flip-bounds' });
  });

  // auto position behavior
  describe('Displays in primary position when there is enough room with auto attachment behavior', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-auto');
      browser.click('#position-primary');
      browser.click('#trigger-attachment-behavior-auto');
      browser.waitForVisible('#attachment-behavior-auto-content');
    });

    Terra.it.matchesScreenshot({ selector: '#attachment-behavior-auto-bounds' });
  });

  describe('Displays with position flipped when there is not enough room in primary position with auto attachment behavior', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-auto');
      browser.click('#position-flipped');
      browser.click('#trigger-attachment-behavior-auto');
      browser.waitForVisible('#attachment-behavior-auto-content');
    });

    Terra.it.matchesScreenshot({ selector: '#attachment-behavior-auto-bounds' });
  });

  describe('Displays with position rotated 90 degrees when there is not enough room in primary or flipped positions with auto attachment behavior', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-auto');
      browser.click('#position-90-deg');
      browser.click('#trigger-attachment-behavior-auto');
      browser.waitForVisible('#attachment-behavior-auto-content');
    });

    Terra.it.matchesScreenshot({ selector: '#attachment-behavior-auto-bounds' });
  });

  describe('Displays with position rotated -90 degrees when there is not enough room in primary, flipped, or 90 degree positions with auto attachment behavior', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-auto');
      browser.click('#position-neg-90-deg');
      browser.click('#trigger-attachment-behavior-auto');
      browser.waitForVisible('#attachment-behavior-auto-content');
    });

    Terra.it.matchesScreenshot({ selector: '#attachment-behavior-auto-bounds' });
  });

  describe('Displays with position pushed when there is not enough room in primary, flipped, 90 degree, or -90 degree positions with auto attachment', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-auto');
      browser.click('#position-pushed');
      browser.click('#trigger-attachment-behavior-auto');
      browser.waitForVisible('#attachment-behavior-auto-content');
    });

    Terra.it.matchesScreenshot({ selector: '#attachment-behavior-auto-bounds' });
  });

  // attachmentMargin: validate number set adjusts positioning by so much.
  describe('Displays with given margin between the attachment points', () => {
    before(() => browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-attachment-margin'));

    it('Top Start Content Attachment', () => {
      browser.click('#attach-TS');
      browser.waitForVisible('#attachment-margin-content');
    });
    Terra.it.matchesScreenshot('Top Start', { selector: '#attachment-margin-bounds' });

    it('Top Center Content Attachment', () => {
      browser.click('#attach-TC');
      browser.waitForVisible('#attachment-margin-content');
    });
    Terra.it.matchesScreenshot('Top Center', { selector: '#attachment-margin-bounds' });

    it('Top End Content Attachment', () => {
      browser.click('#attach-TE');
      browser.waitForVisible('#attachment-margin-content');
    });
    Terra.it.matchesScreenshot('Top End', { selector: '#attachment-margin-bounds' });

    it('Middle Start Content Attachment', () => {
      browser.click('#attach-MS');
      browser.waitForVisible('#attachment-margin-content');
    });
    Terra.it.matchesScreenshot('Middle Start', { selector: '#attachment-margin-bounds' });

    it('Middle Center Content Attachment', () => {
      browser.click('#attach-MC');
      browser.waitForVisible('#attachment-margin-content');
    });
    Terra.it.matchesScreenshot('Middle Center', { selector: '#attachment-margin-bounds' });

    it('Middle End Content Attachment', () => {
      browser.click('#attach-ME');
      browser.waitForVisible('#attachment-margin-content');
    });
    Terra.it.matchesScreenshot('Middle End', { selector: '#attachment-margin-bounds' });

    it('Bottom Start Content Attachment', () => {
      browser.click('#attach-BS');
      browser.waitForVisible('#attachment-margin-content');
    });
    Terra.it.matchesScreenshot('Bottom Start', { selector: '#attachment-margin-bounds' });

    it('Bottom Center Content Attachment', () => {
      browser.click('#attach-BC');
      browser.waitForVisible('#attachment-margin-content');
    });
    Terra.it.matchesScreenshot('Bottom Center', { selector: '#attachment-margin-bounds' });

    it('Bottom End Content Attachment', () => {
      browser.click('#attach-BE');
      browser.waitForVisible('#attachment-margin-content');
    });
    Terra.it.matchesScreenshot('Bottom End', { selector: '#attachment-margin-bounds' });
  });

  // boundingRef: test - top bottom start end bounding container adjustments.
  describe('Displays content pushed by bounding container', () => {
    before(() => browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-bounding-container'));

    it('Push Left', () => {
      browser.click('#push-left');
      browser.click('#trigger-bounding-container');
      browser.waitForVisible('#bounding-container-content');
    });
    Terra.it.matchesScreenshot('Push Left', { selector: '#bounding-container-bounds' });

    it('Push Right', () => {
      browser.click('#push-right');
      browser.click('#trigger-bounding-container');
      browser.waitForVisible('#bounding-container-content');
    });
    Terra.it.matchesScreenshot('Push Right', { selector: '#bounding-container-bounds' });

    it('Push Down', () => {
      browser.click('#push-down');
      browser.click('#trigger-bounding-container');
      browser.waitForVisible('#bounding-container-content');
    });
    Terra.it.matchesScreenshot('Push Down', { selector: '#bounding-container-bounds' });

    it('Push Up', () => {
      browser.click('#push-up');
      browser.click('#trigger-bounding-container');
      browser.waitForVisible('#bounding-container-content');
    });
    Terra.it.matchesScreenshot('Push Up', { selector: '#bounding-container-bounds' });
  });

  // Verify Content Offset Positioning
  describe('Display the content offset correctly for dir=ltr', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-content-offset');
      browser.waitForVisible('#ContentOffset-content');
    });

    Terra.it.matchesScreenshot({ selector: '#ContentOffset-bounds' });
  });

  describe('Displays the content offset correctly for dir=rtl', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-content-offset');
      browser.click('#rtl-ContentOffset');
      browser.click('#trigger-ContentOffset');
      browser.pause(50);
      browser.waitForVisible('#ContentOffset-content');
    });
    after(() => {
      browser.click('#ltr-ContentOffset');
    });

    Terra.it.matchesScreenshot({ selector: '#root' });
  });

  // Verify Target Offset Positioning
  describe('Display the target offset correctly for dir=ltr', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-target-offset');
      browser.waitForVisible('#TargetOffset-content');
    });

    Terra.it.matchesScreenshot({ selector: '#TargetOffset-bounds' });
  });

  describe('Displays the target offset correctly for dir=rtl', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-target-offset');
      browser.click('#rtl-TargetOffset');
      browser.click('#trigger-TargetOffset');
      browser.pause(50);
      browser.waitForVisible('#TargetOffset-content');
    });
    after(() => {
      browser.click('#ltr-TargetOffset');
    });

    Terra.it.matchesScreenshot({ selector: '#root' });
  });

  // Verify Enabled Behaviors
  describe('Content displays when isEnabled={true} vs isEnabled={false} ', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-enabled-behaviors');
      browser.waitForVisible('#Enabled-bounds');
      browser.waitForVisible('#NotEnabled-bounds');
    });

    Terra.it.matchesScreenshot({ selector: '#EnabledBehaviors-bounds' });
  });

  // Verify Close Behaviors - ALL
  describe('Closes the hookshot content on ESC when all close behavior is present', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
      browser.click('#trigger-AllBehavior');
      browser.waitForVisible('#AllBehavior-content');
      browser.keys('ESCAPE');
    });

    Terra.it.matchesScreenshot({ selector: '#AllBehavior-bounds' });
  });

  describe('Closes the hookshot content on outside click when all close behavior is present', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
      browser.click('#trigger-AllBehavior');
      browser.waitForVisible('#AllBehavior-content');
      browser
        .moveToObject('#root', 10, 10)
        .leftClick();
    });

    Terra.it.matchesScreenshot({ selector: '#AllBehavior-bounds' });
  });

  // Verify Close Behaviors - ESCAPE
  describe('Closes the hookshot content on ESC when closeOnEsc', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
      browser.click('#trigger-EscBehavior');
      browser.waitForVisible('#EscBehavior-content');
      browser.keys('ESCAPE');
    });

    Terra.it.matchesScreenshot({ selector: '#EscBehavior-bounds' });
  });

  // Verify Close Behaviors - CLICK
  describe('Closes the hookshot content on outside click when closeOnOutsideClick', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
      browser.click('#trigger-OutsideClickBehavior');
      browser.waitForVisible('#OutsideClickBehavior-content');
      browser
        .moveToObject('#root', 10, 10)
        .leftClick();
    });

    Terra.it.matchesScreenshot({ selector: '#OutsideClickBehavior-bounds' });
  });

  // Verify Close Behaviors - CLICK on SVG
  describe('Closes the hookshot content on outside click on SVG when closeOnOutsideClick', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
      browser.click('#scroll-bounds');
      browser.click('#trigger-OutsideClickBehaviorWithSvgs');
      browser.waitForVisible('#OutsideClickBehaviorWithSvgs-content');
      browser
        .moveToObject('#svg1', 10, 10)
        .leftClick();
    });

    Terra.it.matchesScreenshot({ selector: '#OutsideClickBehaviorWithSvgs-bounds' });
  });

  // Verify Close Behaviors - NONE
  describe('Closes the hookshot content on ESC when no close behavior is present', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
      browser.click('#scroll-bounds');
      browser.click('#trigger-NoCloseBehavior');
      browser.waitForVisible('#NoCloseBehavior-content');
      browser.keys('ESCAPE');
    });

    Terra.it.matchesScreenshot({ selector: '#NoCloseBehavior-bounds' });
  });

  describe('Closes the hookshot content on outside click when no close behavior is present', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
      browser.click('#scroll-bounds');
      browser.click('#trigger-NoCloseBehavior');
      browser.waitForVisible('#NoCloseBehavior-content');
      browser
        .moveToObject('#root', 10, 10)
        .leftClick();
    });

    Terra.it.matchesScreenshot({ selector: '#NoCloseBehavior-bounds' });

    after(() => browser.moveToObject('#root', 0, 0).leftClick());
  });
});

Terra.describeViewports('Hookshot', ['small'], () => {
  describe('Closes the hookshot content on resize when all close behavior is present', () => {
    before(() => {
      browser.refresh();
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
      browser.click('#trigger-AllBehavior');
      browser.waitForVisible('#AllBehavior-content');
      browser.pause(100);
    });

    Terra.it.matchesScreenshot({ selector: '#AllBehavior-bounds' });
  });

  // Verify Close Behaviors - RESIZE
  describe('Closes the hookshot content on resize', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
      browser.click('#trigger-ResizeBehavior');
      browser.waitForVisible('#ResizeBehavior-content');
      browser.click('#scroll-bounds');
      browser.pause(100);
    });

    Terra.it.matchesScreenshot({ selector: '#ResizeBehavior-bounds' });
  });

  describe('Closes the hookshot content on resize when no close behavior is present', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
      browser.click('#scroll-bounds');
      browser.click('#trigger-NoCloseBehavior');
      browser.waitForVisible('#NoCloseBehavior-content');
      browser.pause(100);
    });

    Terra.it.matchesScreenshot({ selector: '#NoCloseBehavior-bounds' });
  });

  describe('Displays hookshot positioned by target coordinates', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-coordinates');
      browser.click('#coords-button');
      browser.waitForVisible('#test-coords-content');
    });

    Terra.it.matchesScreenshot({ selector: '#coords-test' });
  });
});
