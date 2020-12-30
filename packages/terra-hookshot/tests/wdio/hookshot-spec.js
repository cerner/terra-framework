/* global $ */
Terra.describeViewports('Hookshot', ['medium'], () => {
  it('Displays default hookshot', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/default-hookshot');
    $('#hookshot-standard-button').click();
    $('#testDefaultContent').waitForDisplayed();
    Terra.validates.element('default', { selector: '#default-bounds' });
  });

  // none position behavior
  it('Displays in primary position when there is enough room with no attachment behavior', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-none');
    $('#position-primary').click();
    $('#trigger-attachment-behavior-none').click();
    $('#attachment-behavior-none-content').waitForDisplayed();
    Terra.validates.element('no position behavior with room', { selector: '#attachment-behavior-none-bounds' });
  });

  it('Displays in primary position when there is not enough room in primary position with no attachment behavior', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-none');
    $('#position-offset').click();
    $('#trigger-attachment-behavior-none').click();
    $('#attachment-behavior-none-content').waitForDisplayed();
    Terra.validates.element('no position behavior with no room', { selector: '#attachment-behavior-none-bounds' });
  });

  // push position behavior
  it('Displays with position pushed when there is not enough room in primary position with no attachment behavior', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-push');
    $('#position-pushed').click();
    $('#trigger-attachment-behavior-push').click();
    $('#attachment-behavior-push-content').waitForDisplayed();
    Terra.validates.element('push attachment behavior', { selector: '#attachment-behavior-push-bounds' });
  });

  // flip position behavior
  it('Displays in primary position when there is enough room with flip attachment behavior', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-flip');
    $('#position-primary').click();
    $('#trigger-attachment-behavior-flip').click();
    $('#attachment-behavior-flip-content').waitForDisplayed();
    Terra.validates.element('flip attachment behavior', { selector: '#attachment-behavior-flip-bounds' });
  });

  it('Displays with position flipped when there is not enough room in primary position with flip attachment behavior', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-flip');
    $('#position-flipped').click();
    $('#trigger-attachment-behavior-flip').click();
    $('#attachment-behavior-flip-content').waitForDisplayed();
    Terra.validates.element('position flipped', { selector: '#attachment-behavior-flip-bounds' });
  });

  it('Displays with position pushed when there is not enough room in primary or flipped position with flip attachment behavior', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-flip');
    $('#position-flipped').click();
    $('#trigger-attachment-behavior-flip').click();
    $('#attachment-behavior-flip-content').waitForDisplayed();
    Terra.validates.element('position pushed', { selector: '#attachment-behavior-flip-bounds' });
  });

  // auto position behavior
  it('Displays in primary position when there is enough room with auto attachment behavior', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-auto');
    $('#position-primary').click();
    $('#trigger-attachment-behavior-auto').click();
    $('#attachment-behavior-auto-content').waitForDisplayed();
    Terra.validates.element('auto attachment behavior', { selector: '#attachment-behavior-auto-bounds' });
  });

  it('Displays with position flipped when there is not enough room in primary position with auto attachment behavior', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-auto');
    $('#position-flipped').click();
    $('#trigger-attachment-behavior-auto').click();
    $('#attachment-behavior-auto-content').waitForDisplayed();
    Terra.validates.element('auto attachment behaviour-flip', { selector: '#attachment-behavior-auto-bounds' });
  });

  it('Displays with position rotated 90 degrees when there is not enough room in primary or flipped positions with auto attachment behavior', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-auto');
    $('#position-90-deg').click();
    $('#trigger-attachment-behavior-auto').click();
    $('#attachment-behavior-auto-content').waitForDisplayed();
    Terra.validates.element('rotated 90 deg', { selector: '#attachment-behavior-auto-bounds' });
  });

  it('Displays with position rotated -90 degrees when there is not enough room in primary, flipped, or 90 degree positions with auto attachment behavior', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-auto');
    $('#position-neg-90-deg').click();
    $('#trigger-attachment-behavior-auto').click();
    $('#attachment-behavior-auto-content').waitForDisplayed();
    Terra.validates.element('rotated -90 deg', { selector: '#attachment-behavior-auto-bounds' });
  });

  it('Displays with position pushed when there is not enough room in primary, flipped, 90 degree, or -90 degree positions with auto attachment', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-attachment-behavior-auto');
    $('#position-pushed').click();
    $('#trigger-attachment-behavior-auto').click();
    $('#attachment-behavior-auto-content').waitForDisplayed();
    Terra.validates.element('auto attachment with position pushed', { selector: '#attachment-behavior-auto-bounds' });
  });

  // attachmentMargin: validate number set adjusts positioning by so much.
  describe('Displays with given margin between the attachment points', () => {
    it('Top Start Content Attachment', () => {
      browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-attachment-margin');
      $('#attach-TS').click();
      $('#attachment-margin-content').waitForDisplayed();
      Terra.validates.element('Top Start', { selector: '#attachment-margin-bounds' });
    });

    it('Top Center Content Attachment', () => {
      $('#attach-TC').click();
      $('#attachment-margin-content').waitForDisplayed();
      Terra.validates.element('Top Center', { selector: '#attachment-margin-bounds' });
    });

    it('Top End Content Attachment', () => {
      $('#attach-TE').click();
      $('#attachment-margin-content').waitForDisplayed();
      Terra.validates.element('Top End', { selector: '#attachment-margin-bounds' });
    });

    it('Middle Start Content Attachment', () => {
      $('#attach-MS').click();
      $('#attachment-margin-content').waitForDisplayed();
      Terra.validates.element('Middle Start', { selector: '#attachment-margin-bounds' });
    });

    it('Middle Center Content Attachment', () => {
      $('#attach-MC').click();
      $('#attachment-margin-content').waitForDisplayed();
      Terra.validates.element('Middle Center', { selector: '#attachment-margin-bounds' });
    });

    it('Middle End Content Attachment', () => {
      $('#attach-ME').click();
      $('#attachment-margin-content').waitForDisplayed();
      Terra.validates.element('Middle End', { selector: '#attachment-margin-bounds' });
    });

    it('Bottom Start Content Attachment', () => {
      $('#attach-BS').click();
      $('#attachment-margin-content').waitForDisplayed();
      Terra.validates.element('Bottom Start', { selector: '#attachment-margin-bounds' });
    });

    it('Bottom Center Content Attachment', () => {
      $('#attach-BC').click();
      $('#attachment-margin-content').waitForDisplayed();
      Terra.validates.element('Bottom Center', { selector: '#attachment-margin-bounds' });
    });

    it('Bottom End Content Attachment', () => {
      $('#attach-BE').click();
      $('#attachment-margin-content').waitForDisplayed();
      Terra.validates.element('Bottom End', { selector: '#attachment-margin-bounds' });
    });
  });

  // boundingRef: test - top bottom start end bounding container adjustments.
  describe('Displays content pushed by bounding container', () => {
    it('Push Left', () => {
      browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-bounding-container');
      $('#push-left').click();
      $('#trigger-bounding-container').click();
      $('#bounding-container-content').waitForDisplayed();
      Terra.validates.element('Push Left', { selector: '#bounding-container-bounds' });
    });

    it('Push Right', () => {
      $('#push-right').click();
      $('#trigger-bounding-container').click();
      $('#bounding-container-content').waitForDisplayed();
      Terra.validates.element('Push Right', { selector: '#bounding-container-bounds' });
    });

    it('Push Down', () => {
      $('#push-down').click();
      $('#trigger-bounding-container').click();
      $('#bounding-container-content').waitForDisplayed();
      Terra.validates.element('Push Down', { selector: '#bounding-container-bounds' });
    });

    it('Push Up', () => {
      $('#push-up').click();
      $('#trigger-bounding-container').click();
      $('#bounding-container-content').waitForDisplayed();
      Terra.validates.element('Push Up', { selector: '#bounding-container-bounds' });
    });
  });

  // Verify Content Offset Positioning
  it('Displays the content offset correctly for dir=ltr', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-content-offset');
    $('#ContentOffset-content').waitForDisplayed();
    Terra.validates.element('content offset dir=ltr', { selector: '#ContentOffset-bounds' });
  });

  it('Displays the content offset correctly for dir=rtl', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-content-offset');
    $('#rtl-ContentOffset').click();
    $('#trigger-ContentOffset').click();
    browser.pause(50);
    $('#ContentOffset-content').waitForDisplayed();
    Terra.validates.element('content offset dir=rtl', { selector: '#root' });
    $('#ltr-ContentOffset').click();
  });

  // Verify Target Offset Positioning
  it('Displays the target offset correctly for dir=ltr', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-target-offset');
    $('#TargetOffset-content').waitForDisplayed();
    Terra.validates.element('target offset dir=ltr', { selector: '#TargetOffset-bounds' });
  });

  it('Displays the target offset correctly for dir=rtl', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-target-offset');
    $('#rtl-TargetOffset').click();
    $('#trigger-TargetOffset').click();
    browser.pause(50);
    $('#TargetOffset-content').waitForDisplayed();
    Terra.validates.element('target offset dir=rtl', { selector: '#root' });
    $('#ltr-TargetOffset').click();
  });

  // Verify Enabled Behaviors
  it('displays Content when isEnabled={true} vs isEnabled={false} ', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-enabled-behaviors');
    $('#Enabled-bounds').waitForDisplayed();
    $('#NotEnabled-bounds').waitForDisplayed();
    Terra.validates.element('display content with isEnabled', { selector: '#EnabledBehaviors-bounds' });
  });

  // Verify Close Behaviors - ALL
  it('Closes the hookshot content on ESC when all close behavior is present', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
    $('#trigger-AllBehavior').click();
    $('#AllBehavior-content').waitForDisplayed();
    browser.keys('ESCAPE');
    Terra.validates.element('close on ESC - all close', { selector: '#AllBehavior-bounds' });
  });

  it('Closes the hookshot content on outside click when all close behavior is present', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
    $('#trigger-AllBehavior').click();
    $('#AllBehavior-content').waitForDisplayed();
    $('#root').click({ x: 10, y: 10 });
    Terra.validates.element('close on outside click', { selector: '#AllBehavior-bounds' });
  });

  // Verify Close Behaviors - ESCAPE
  it('Closes the hookshot content on ESC when closeOnEsc', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
    $('#trigger-EscBehavior').click();
    $('#EscBehavior-content').waitForDisplayed();
    browser.keys('ESCAPE');
    Terra.validates.element('closeOnEsc callback', { selector: '#EscBehavior-bounds' });
  });

  // Verify Close Behaviors - CLICK
  it('Closes the hookshot content on outside click when closeOnOutsideClick', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
    $('#trigger-OutsideClickBehavior').click();
    $('#OutsideClickBehavior-content').waitForDisplayed();
    $('#root').click({ x: 10, y: 10 });
    Terra.validates.element('closeOnOutsideClick callback', { selector: '#OutsideClickBehavior-bounds' });
  });

  // Verify Close Behaviors - CLICK on SVG
  it('Closes the hookshot content on outside click on SVG when closeOnOutsideClick', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
    $('#scroll-bounds').click();
    $('#trigger-OutsideClickBehaviorWithSvgs').click();
    $('#OutsideClickBehaviorWithSvgs-content').waitForDisplayed();
    $('#svg1').click({ x: 10, y: 10 });
    Terra.validates.element('close on SVG click', { selector: '#OutsideClickBehaviorWithSvgs-bounds' });
  });

  // Verify Close Behaviors - NONE
  it('Closes the hookshot content on ESC when no close behavior is present', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
    $('#scroll-bounds').click();
    $('#trigger-NoCloseBehavior').click();
    $('#NoCloseBehavior-content').waitForDisplayed();
    browser.keys('ESCAPE');
    Terra.validates.element('close on ESC - no close behavior', { selector: '#NoCloseBehavior-bounds' });
  });

  it('Closes the hookshot content on outside click when no close behavior is present', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
    $('#scroll-bounds').click();
    $('#trigger-NoCloseBehavior').click();
    $('#NoCloseBehavior-content').waitForDisplayed();
    $('#root').click({ x: 10, y: 10 });
    Terra.validates.element('close on outside click - no close behavior', { selector: '#NoCloseBehavior-bounds' });
    $('#root').click({ x: 0, y: 0 });
  });
});

Terra.describeViewports('Hookshot', ['small'], () => {
  it('Closes the hookshot content on resize when all close behavior is present', () => {
    browser.refresh();
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
    $('#trigger-AllBehavior').click();
    $('#AllBehavior-content').waitForDisplayed();
    browser.pause(100);
    Terra.validates.element('close on resize - all close', { selector: '#AllBehavior-bounds' });
  });

  // Verify Close Behaviors - RESIZE
  it('Closes the hookshot content on resize', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
    $('#trigger-ResizeBehavior').click();
    $('#ResizeBehavior-content').waitForDisplayed();
    $('#scroll-bounds').click();
    browser.pause(100);
    Terra.validates.element('close on resize', { selector: '#ResizeBehavior-bounds' });
  });

  it('Closes the hookshot content on resize when no close behavior is present', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-close-behaviors');
    $('#scroll-bounds').click();
    $('#trigger-NoCloseBehavior').click();
    $('#NoCloseBehavior-content').waitForDisplayed();
    browser.pause(100);
    Terra.validates.element('close on resize - no close', { selector: '#NoCloseBehavior-bounds' });
  });

  it('Displays hookshot positioned by target coordinates', () => {
    browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-coordinates');
    $('#coords-button').click();
    $('#test-coords-content').waitForDisplayed();
    Terra.validates.element('positioned by target coordinates', { selector: '#coords-test' });
  });
});
