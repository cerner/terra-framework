Terra.describeViewports('Hookshot', ['medium'], () => {
  it('Displays default hookshot', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/default-hookshot');
    browser.click('#hookshot-standard-button');
    browser.waitForVisible('#testDefaultContent');
    Terra.validates.element('default', { selector: '#default-bounds' });
  });

  // none position behavior
  it('Displays in primary position when there is enough room with no attachment behavior', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-none');
    browser.click('#position-primary');
    browser.click('#trigger-attachment-behavior-none');
    browser.waitForVisible('#attachment-behavior-none-content');
    Terra.validates.element('no position behavior with room', { selector: '#attachment-behavior-none-bounds' });
  });

  it('Displays in primary position when there is not enough room in primary position with no attachment behavior', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-none');
    browser.click('#position-offset');
    browser.click('#trigger-attachment-behavior-none');
    browser.waitForVisible('#attachment-behavior-none-content');
    Terra.validates.element('no position behavior with no room', { selector: '#attachment-behavior-none-bounds' });
  });

  // push position behavior
  it('Displays with position pushed when there is not enough room in primary position with no attachment behavior', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-push');
    browser.click('#position-pushed');
    browser.click('#trigger-attachment-behavior-push');
    browser.waitForVisible('#attachment-behavior-push-content');
    Terra.validates.element('push attachment behavior', { selector: '#attachment-behavior-push-bounds' });
  });

  // flip position behavior
  it('Displays in primary position when there is enough room with flip attachment behavior', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-flip');
    browser.click('#position-primary');
    browser.click('#trigger-attachment-behavior-flip');
    browser.waitForVisible('#attachment-behavior-flip-content');
    Terra.validates.element('flip attachment behavior', { selector: '#attachment-behavior-flip-bounds' });
  });

  it('Displays with position flipped when there is not enough room in primary position with flip attachment behavior', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-flip');
    browser.click('#position-flipped');
    browser.click('#trigger-attachment-behavior-flip');
    browser.waitForVisible('#attachment-behavior-flip-content');
    Terra.validates.element('position flipped', { selector: '#attachment-behavior-flip-bounds' });
  });

  it('Displays with position pushed when there is not enough room in primary or flipped position with flip attachment behavior', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-flip');
    browser.click('#position-flipped');
    browser.click('#trigger-attachment-behavior-flip');
    browser.waitForVisible('#attachment-behavior-flip-content');
    Terra.validates.element('position pushed', { selector: '#attachment-behavior-flip-bounds' });
  });

  // auto position behavior
  it('Displays in primary position when there is enough room with auto attachment behavior', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-auto');
    browser.click('#position-primary');
    browser.click('#trigger-attachment-behavior-auto');
    browser.waitForVisible('#attachment-behavior-auto-content');
    Terra.validates.element('auto attachment behavior', { selector: '#attachment-behavior-auto-bounds' });
  });

  it('Displays with position flipped when there is not enough room in primary position with auto attachment behavior', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-auto');
    browser.click('#position-flipped');
    browser.click('#trigger-attachment-behavior-auto');
    browser.waitForVisible('#attachment-behavior-auto-content');
    Terra.validates.element('auto attachment behaviour-flip', { selector: '#attachment-behavior-auto-bounds' });
  });

  it('Displays with position rotated 90 degrees when there is not enough room in primary or flipped positions with auto attachment behavior', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-auto');
    browser.click('#position-90-deg');
    browser.click('#trigger-attachment-behavior-auto');
    browser.waitForVisible('#attachment-behavior-auto-content');
    Terra.validates.element('rotated 90 deg', { selector: '#attachment-behavior-auto-bounds' });
  });

  it('Displays with position rotated -90 degrees when there is not enough room in primary, flipped, or 90 degree positions with auto attachment behavior', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-auto');
    browser.click('#position-neg-90-deg');
    browser.click('#trigger-attachment-behavior-auto');
    browser.waitForVisible('#attachment-behavior-auto-content');
    Terra.validates.element('rotated -90 deg', { selector: '#attachment-behavior-auto-bounds' });
  });

  it('Displays with position pushed when there is not enough room in primary, flipped, 90 degree, or -90 degree positions with auto attachment', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-auto');
    browser.click('#position-pushed');
    browser.click('#trigger-attachment-behavior-auto');
    browser.waitForVisible('#attachment-behavior-auto-content');
    Terra.validates.element('auto attachment with position pushed', { selector: '#attachment-behavior-auto-bounds' });
  });

  // attachmentMargin: validate number set adjusts positioning by so much.
  describe('Displays with given margin between the attachment points', () => {
    it('Top Start Content Attachment', () => {
      browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-attachment-margin');
      browser.click('#attach-TS');
      browser.waitForVisible('#attachment-margin-content');
      Terra.validates.element('Top Start', { selector: '#attachment-margin-bounds' });
    });

    it('Top Center Content Attachment', () => {
      browser.click('#attach-TC');
      browser.waitForVisible('#attachment-margin-content');
      Terra.validates.element('Top Center', { selector: '#attachment-margin-bounds' });
    });

    it('Top End Content Attachment', () => {
      browser.click('#attach-TE');
      browser.waitForVisible('#attachment-margin-content');
      Terra.validates.element('Top End', { selector: '#attachment-margin-bounds' });
    });

    it('Middle Start Content Attachment', () => {
      browser.click('#attach-MS');
      browser.waitForVisible('#attachment-margin-content');
      Terra.validates.element('Middle Start', { selector: '#attachment-margin-bounds' });
    });

    it('Middle Center Content Attachment', () => {
      browser.click('#attach-MC');
      browser.waitForVisible('#attachment-margin-content');
      Terra.validates.element('Middle Center', { selector: '#attachment-margin-bounds' });
    });

    it('Middle End Content Attachment', () => {
      browser.click('#attach-ME');
      browser.waitForVisible('#attachment-margin-content');
      Terra.validates.element('Middle End', { selector: '#attachment-margin-bounds' });
    });

    it('Bottom Start Content Attachment', () => {
      browser.click('#attach-BS');
      browser.waitForVisible('#attachment-margin-content');
      Terra.validates.element('Bottom Start', { selector: '#attachment-margin-bounds' });
    });

    it('Bottom Center Content Attachment', () => {
      browser.click('#attach-BC');
      browser.waitForVisible('#attachment-margin-content');
      Terra.validates.element('Bottom Center', { selector: '#attachment-margin-bounds' });
    });

    it('Bottom End Content Attachment', () => {
      browser.click('#attach-BE');
      browser.waitForVisible('#attachment-margin-content');
      Terra.validates.element('Bottom End', { selector: '#attachment-margin-bounds' });
    });
  });

  // boundingRef: test - top bottom start end bounding container adjustments.
  describe('Displays content pushed by bounding container', () => {
    it('Push Left', () => {
      browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-bounding-container');
      browser.click('#push-left');
      browser.click('#trigger-bounding-container');
      browser.waitForVisible('#bounding-container-content');
      Terra.validates.element('Push Left', { selector: '#bounding-container-bounds' });
    });

    it('Push Right', () => {
      browser.click('#push-right');
      browser.click('#trigger-bounding-container');
      browser.waitForVisible('#bounding-container-content');
      Terra.validates.element('Push Right', { selector: '#bounding-container-bounds' });
    });

    it('Push Down', () => {
      browser.click('#push-down');
      browser.click('#trigger-bounding-container');
      browser.waitForVisible('#bounding-container-content');
      Terra.validates.element('Push Down', { selector: '#bounding-container-bounds' });
    });

    it('Push Up', () => {
      browser.click('#push-up');
      browser.click('#trigger-bounding-container');
      browser.waitForVisible('#bounding-container-content');
      Terra.validates.element('Push Up', { selector: '#bounding-container-bounds' });
    });
  });

  // Verify Content Offset Positioning
  it('Displays the content offset correctly for dir=ltr', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-content-offset');
    browser.waitForVisible('#ContentOffset-content');
    Terra.validates.element('content offset dir=ltr', { selector: '#ContentOffset-bounds' });
  });

  it('Displays the content offset correctly for dir=rtl', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-content-offset');
    browser.click('#rtl-ContentOffset');
    browser.click('#trigger-ContentOffset');
    browser.pause(50);
    browser.waitForVisible('#ContentOffset-content');
    Terra.validates.element('content offset dir=rtl', { selector: '#root' });
    browser.click('#ltr-ContentOffset');
  });

  // Verify Target Offset Positioning
  it('Displays the target offset correctly for dir=ltr', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-target-offset');
    browser.waitForVisible('#TargetOffset-content');
    Terra.validates.element('target offset dir=ltr', { selector: '#TargetOffset-bounds' });
  });

  it('Displays the target offset correctly for dir=rtl', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-target-offset');
    browser.click('#rtl-TargetOffset');
    browser.click('#trigger-TargetOffset');
    browser.pause(50);
    browser.waitForVisible('#TargetOffset-content');
    Terra.validates.element('target offset dir=rtl', { selector: '#root' });
    browser.click('#ltr-TargetOffset');
  });

  // Verify Enabled Behaviors
  it('displays Content when isEnabled={true} vs isEnabled={false} ', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-enabled-behaviors');
    browser.waitForVisible('#Enabled-bounds');
    browser.waitForVisible('#NotEnabled-bounds');
    Terra.validates.element('display content with isEnabled', { selector: '#EnabledBehaviors-bounds' });
  });

  // Verify Close Behaviors - ALL
  it('Closes the hookshot content on ESC when all close behavior is present', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
    browser.click('#trigger-AllBehavior');
    browser.waitForVisible('#AllBehavior-content');
    browser.keys('ESCAPE');
    Terra.validates.element('close on ESC - all close', { selector: '#AllBehavior-bounds' });
  });

  it('Closes the hookshot content on outside click when all close behavior is present', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
    browser.click('#trigger-AllBehavior');
    browser.waitForVisible('#AllBehavior-content');
    browser
      .moveToObject('#root', 10, 10)
      .leftClick();
    Terra.validates.element('close on outside click', { selector: '#AllBehavior-bounds' });
  });

  // Verify Close Behaviors - ESCAPE
  it('Closes the hookshot content on ESC when closeOnEsc', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
    browser.click('#trigger-EscBehavior');
    browser.waitForVisible('#EscBehavior-content');
    browser.keys('ESCAPE');
    Terra.validates.element('closeOnEsc callback', { selector: '#EscBehavior-bounds' });
  });

  // Verify Close Behaviors - CLICK
  it('Closes the hookshot content on outside click when closeOnOutsideClick', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
    browser.click('#trigger-OutsideClickBehavior');
    browser.waitForVisible('#OutsideClickBehavior-content');
    browser
      .moveToObject('#root', 10, 10)
      .leftClick();
    Terra.validates.element('closeOnOutsideClick callback', { selector: '#OutsideClickBehavior-bounds' });
  });

  // Verify Close Behaviors - CLICK on SVG
  it('Closes the hookshot content on outside click on SVG when closeOnOutsideClick', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
    browser.click('#scroll-bounds');
    browser.click('#trigger-OutsideClickBehaviorWithSvgs');
    browser.waitForVisible('#OutsideClickBehaviorWithSvgs-content');
    browser
      .moveToObject('#svg1', 10, 10)
      .leftClick();
    Terra.validates.element('close on SVG click', { selector: '#OutsideClickBehaviorWithSvgs-bounds' });
  });

  // Verify Close Behaviors - NONE
  it('Closes the hookshot content on ESC when no close behavior is present', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
    browser.click('#scroll-bounds');
    browser.click('#trigger-NoCloseBehavior');
    browser.waitForVisible('#NoCloseBehavior-content');
    browser.keys('ESCAPE');
    Terra.validates.element('close on ESC - no close behavior', { selector: '#NoCloseBehavior-bounds' });
  });

  it('Closes the hookshot content on outside click when no close behavior is present', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
    browser.click('#scroll-bounds');
    browser.click('#trigger-NoCloseBehavior');
    browser.waitForVisible('#NoCloseBehavior-content');
    browser
      .moveToObject('#root', 10, 10)
      .leftClick();
    Terra.validates.element('close on outside click - no close behavior', { selector: '#NoCloseBehavior-bounds' });
    browser.moveToObject('#root', 0, 0).leftClick();
  });
});

Terra.describeViewports('Hookshot', ['small'], () => {
  it('Closes the hookshot content on resize when all close behavior is present', () => {
    browser.refresh();
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
    browser.click('#trigger-AllBehavior');
    browser.waitForVisible('#AllBehavior-content');
    browser.pause(100);
    Terra.validates.element('close on resize - all close', { selector: '#AllBehavior-bounds' });
  });

  // Verify Close Behaviors - RESIZE
  it('Closes the hookshot content on resize', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
    browser.click('#trigger-ResizeBehavior');
    browser.waitForVisible('#ResizeBehavior-content');
    browser.click('#scroll-bounds');
    browser.pause(100);
    Terra.validates.element('close on resize', { selector: '#ResizeBehavior-bounds' });
  });

  it('Closes the hookshot content on resize when no close behavior is present', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
    browser.click('#scroll-bounds');
    browser.click('#trigger-NoCloseBehavior');
    browser.waitForVisible('#NoCloseBehavior-content');
    browser.pause(100);
    Terra.validates.element('close on resize - no close', { selector: '#NoCloseBehavior-bounds' });
  });

  it('Displays hookshot positioned by target coordinates', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-coordinates');
    browser.click('#coords-button');
    browser.waitForVisible('#test-coords-content');
    Terra.validates.element('positioned by target coordinates', { selector: '#coords-test' });
  });
});
