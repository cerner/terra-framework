/* global browser, Terra, before */

describe('Displays default hookshot', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/default-hookshot');
    browser.click('#hookshot-standard-button');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#default-bounds' });
});

// none position behavior
describe('Displays in primary position when there is enough room with no attachment behavior', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-attachment-behavior-none');
    browser.click('#position-primary');
    browser.click('#trigger-attachment-behavior-none');
    browser.waitForVisible('#attachment-behavior-none-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-behavior-none-bounds' });
});

describe('Displays in primary position when there is enough room with no attachment behavior', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-attachment-behavior-none');
    browser.click('#position-pushed');
    browser.click('#trigger-attachment-behavior-none');
    browser.waitForVisible('#attachment-behavior-none-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-behavior-none-bounds' });
});

// flip position behavior
describe('Displays in primary position when there is enough room with flip attachment behavior', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-attachment-behavior-flip');
    browser.click('#position-primary');
    browser.click('#trigger-attachment-behavior-flip');
    browser.waitForVisible('#attachment-behavior-flip-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-behavior-flip-bounds' });
});

describe('Displays in primary position when there is enough room with flip attachment behavior', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-attachment-behavior-flip');
    browser.click('#position-flipped');
    browser.click('#trigger-attachment-behavior-flip');
    browser.waitForVisible('#attachment-behavior-flip-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-behavior-flip-bounds' });
});

describe('Displays with position pushed when there is not enough room in primary or flipped position with flip attachment behavior', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-attachment-behavior-flip');
    browser.click('#position-flipped');
    browser.click('#trigger-attachment-behavior-flip');
    browser.waitForVisible('#attachment-behavior-flip-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-behavior-flip-bounds' });
});

// auto position behavior
describe('Displays in primary position when there is enough room with auto attachment behavior', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-attachment-behavior-auto');
    browser.click('#position-primary');
    browser.click('#trigger-attachment-behavior-auto');
    browser.waitForVisible('#attachment-behavior-auto-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-behavior-auto-bounds' });
});

describe('Displays with position flipped when there is not enough room in primary position with auto attachment behavior', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-attachment-behavior-auto');
    browser.click('#position-flipped');
    browser.click('#trigger-attachment-behavior-auto');
    browser.waitForVisible('#attachment-behavior-auto-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-behavior-auto-bounds' });
});

describe('Displays with position rotated 90 degrees when there is not enough room in primary or flipped positions with auto attachment behavior', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-attachment-behavior-auto');
    browser.click('#position-90-deg');
    browser.click('#trigger-attachment-behavior-auto');
    browser.waitForVisible('#attachment-behavior-auto-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-behavior-auto-bounds' });
});

describe('Displays with position rotated -90 degrees when there is not enough room in primary, flipped, or 90 degree positions with auto attachment behavior', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-attachment-behavior-auto');
    browser.click('#position-neg-90-deg');
    browser.click('#trigger-attachment-behavior-auto');
    browser.waitForVisible('#attachment-behavior-auto-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-behavior-auto-bounds' });
});

describe('Displays with position pushed when there is not enough room in primary, flipped, 90 degree, or -90 degree positions with auto attachment', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-attachment-behavior-auto');
    browser.click('#position-pushed');
    browser.click('#trigger-attachment-behavior-auto');
    browser.waitForVisible('#attachment-behavior-auto-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-behavior-auto-bounds' });
});

// attachmentMargin: validate number set adjusts positioning by so much.
describe('Displays with given margin between the attachment points - Middle Start Content Attachment', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-attachment-margin');
    browser.click('#attach-MS');
    browser.click('#trigger-attachment-margin');
    browser.waitForVisible('#attachment-margin-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-margin-bounds' });
});

describe('Displays without margin between the attachment points - Middle Center Content Attachment', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-attachment-margin');
    browser.click('#attach-ME');
    browser.click('#trigger-attachment-margin');
    browser.waitForVisible('#attachment-margin-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-margin-bounds' });
});

describe('Displays without margin between the attachment points - Middle Center Content Attachment', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-attachment-margin');
    browser.click('#attach-MC');
    browser.click('#trigger-attachment-margin');
    browser.waitForVisible('#attachment-margin-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-margin-bounds' });
});

describe('Displays with given margin between the attachment points - Bottom Start Content Attachment', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-attachment-margin');
    browser.click('#attach-BS');
    browser.click('#trigger-attachment-margin');
    browser.waitForVisible('#attachment-margin-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-margin-bounds' });
});

describe('Displays with given margin between the attachment points - Bottom End Content Attachment', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-attachment-margin');
    browser.click('#attach-BE');
    browser.click('#trigger-attachment-margin');
    browser.waitForVisible('#attachment-margin-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-margin-bounds' });
});

describe('Displays with given margin between the attachment points - Bottom Center Content Attachment', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-attachment-margin');
    browser.click('#attach-BC');
    browser.click('#trigger-attachment-margin');
    browser.waitForVisible('#attachment-margin-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-margin-bounds' });
});

describe('Displays with given margin between the attachment points - Top Start Content Attachment', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-attachment-margin');
    browser.click('#attach-TS');
    browser.click('#trigger-attachment-margin');
    browser.waitForVisible('#attachment-margin-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-margin-bounds' });
});

describe('Displays with given margin between the attachment points - Top End Content Attachment', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-attachment-margin');
    browser.click('#attach-TE');
    browser.click('#trigger-attachment-margin');
    browser.waitForVisible('#attachment-margin-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-margin-bounds' });
});

describe('Displays with given margin between the attachment points - Top Center Content Attachment', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-attachment-margin');
    browser.click('#attach-TC');
    browser.click('#trigger-attachment-margin');
    browser.waitForVisible('#attachment-margin-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-margin-bounds' });
});

// boundingRef: test - top bottom start end bounding container adjustments.
describe('Displays content pushed start by bounding container', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-bounding-container');
    browser.click('#push-left');
    browser.click('#trigger-bounding-container');
    browser.waitForVisible('#bounding-container-content');
  });

  Terra.should.matchScreenshot({ selector: '#bounding-container-bounds' });
});

describe('Displays content pushed end by bounding container', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-bounding-container');
    browser.click('#push-right');
    browser.click('#trigger-bounding-container');
    browser.waitForVisible('#bounding-container-content');
  });

  Terra.should.matchScreenshot({ selector: '#bounding-container-bounds' });
});

describe('Displays content pushed down by bounding container', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-bounding-container');
    browser.click('#push-down');
    browser.click('#trigger-bounding-container');
    browser.waitForVisible('#bounding-container-content');
  });

  Terra.should.matchScreenshot({ selector: '#bounding-container-bounds' });
});

describe('Displays content pushed up by bounding container', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-bounding-container');
    browser.click('#push-up');
    browser.click('#trigger-bounding-container');
    browser.waitForVisible('#bounding-container-content');
  });

  Terra.should.matchScreenshot({ selector: '#bounding-container-bounds' });
});

// Verify Content Offset Positioning
describe('Display the content offset correctly for dir=ltr', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-offset');
    browser.waitForVisible('#ContentOffset-content');
  });

  Terra.should.matchScreenshot({ selector: '#ContentOffset-bounds' });
});

describe('Displays the content offset correctly for dir=rtl', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-offset');
    browser.execute("document.getElementsByTagName('html')[0].dir='rtl';");
    browser.pause(500);
    browser.click('#trigger-ContentOffset');
    browser.waitForVisible('#ContentOffset-content');
  });
  afterEach(() => {
    browser.execute("document.getElementsByTagName('html')[0].dir='ltr';");
  });

  Terra.should.matchScreenshot({ selector: '#ContentOffset-bounds' });
});

// Verify Target Offset Positioning
describe('Display the target offset correctly for dir=ltr', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-target-offset');
    browser.waitForVisible('#TargetOffset-content');
  });

  Terra.should.matchScreenshot({ selector: '#TargetOffset-bounds' });
});

describe('Displays the target offset correctly for dir=rtl', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-target-offset');
    browser.execute("document.getElementsByTagName('html')[0].dir='rtl';");
    browser.pause(500);
    browser.click('#trigger-TargetOffset');
    browser.waitForVisible('#TargetOffset-content');
  });
  afterEach(() => {
    browser.execute("document.getElementsByTagName('html')[0].dir='ltr';");
  });

  Terra.should.matchScreenshot({ selector: '#TargetOffset-bounds' });
});

// Verify Enabled Behaviors
describe('Displays content pushed up by bounding container', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-enabled-behaviors');
    browser.click('#push-up');
    browser.click('#trigger-bounding-container');
    browser.waitForVisible('#bounding-container-content');
  });

  Terra.should.matchScreenshot({ selector: '#EnabledBehaviors-bounds' });
});


// Verify Close Behaviors - ALL
describe('Closes the hookshot content on ESC when all close behavior is present', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-close-behaviors');
    browser.click('#trigger-AllBehavior');
    browser.waitForVisible('#AllBehavior-content');
    browser.keys(browser.Keys.ESCAPE);
  });

  Terra.should.matchScreenshot({ selector: '#AllBehavior-bounds' });
});

describe('Closes the hookshot content on outside click when all close behavior is present', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-close-behaviors');
    browser.click('#trigger-AllBehavior');
    browser.waitForVisible('#AllBehavior-content');
    browser
      .moveToElement('#root', 10, 10)
      .mouseButtonDown(0);
  });

  Terra.should.matchScreenshot({ selector: '#AllBehavior-bounds' });
});

describe('Closes the hookshot content on resize when all close behavior is present', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-close-behaviors');
    browser.click('#trigger-AllBehavior');
    browser.waitForVisible('#AllBehavior-content');
    browser.setViewportSize(Terra.viewports('small')[0]);
    browser.pause(100);
  });

  Terra.should.matchScreenshot({ selector: '#AllBehavior-bounds' });
});

// Verify Close Behaviors - ESCAPE
describe('Closes the hookshot content on ESC when closeOnEsc', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-close-behaviors');
    browser.click('#trigger-EscBehavior');
    browser.waitForVisible('#EscBehavior-content');
    browser.keys(browser.Keys.ESCAPE);
  });

  Terra.should.matchScreenshot({ selector: '#EscBehavior-bounds' });
});

// Verify Close Behaviors - CLICK
describe('Closes the hookshot content on outside click when closeOnOutsideClick', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-close-behaviors');
    browser.click('#trigger-OutsideClickBehavior');
    browser.waitForVisible('#OutsideClickBehavior-content');
    browser
      .moveToElement('#root', 10, 10)
      .mouseButtonDown(0);
  });

  Terra.should.matchScreenshot({ selector: '#OutsideClickBehavior-bounds' });
});

// Verify Close Behaviors - RESIZE
describe('Closes the hookshot content on outside click when closeOnOutsideClick', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-close-behaviors');
    browser.click('#trigger-ResizeBehavior');
    browser.waitForVisible('#ResizeBehavior-content');
    browser.setViewportSize(Terra.viewports('small')[0]);
    browser.pause(100);
  });

  Terra.should.matchScreenshot({ selector: '#ResizeBehavior-bounds' });
});

// Verify Close Behaviors - NONE
describe('Closes the hookshot content on ESC when all close behavior is present', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-close-behaviors');
    browser.click('#trigger-NoCloseBehavior');
    browser.waitForVisible('#NoCloseBehavior-content');
    browser.keys(browser.Keys.ESCAPE);
  });

  Terra.should.matchScreenshot({ selector: '#NoCloseBehavior-bounds' });
});

describe('Closes the hookshot content on outside click when all close behavior is present', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-close-behaviors');
    browser.click('#trigger-NoCloseBehavior');
    browser.waitForVisible('#NoCloseBehavior-content');
    browser
      .moveToElement('#root', 10, 10)
      .mouseButtonDown(0);
  });

  Terra.should.matchScreenshot({ selector: '#NoCloseBehavior-bounds' });
});

describe('Closes the hookshot content on resize when all close behavior is present', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-close-behaviors');
    browser.click('#trigger-NoCloseBehavior');
    browser.waitForVisible('#NoCloseBehavior-content');
    browser.setViewportSize(Terra.viewports('small')[0]);
    browser.pause(100);
  });

  Terra.should.matchScreenshot({ selector: '#NoCloseBehavior-bounds' });
});
