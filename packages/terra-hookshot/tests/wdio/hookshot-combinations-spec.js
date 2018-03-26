/* global browser, Terra, before */

describe('[1] Display correctly for contentAttachment="top start" & targetAttachment="top start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-ts');
    browser.click('#attach-TS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[2] Display correctly for contentAttachment="top start" & targetAttachment="top center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-ts');
    browser.click('#attach-TC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[3] Display correctly for contentAttachment="top start" & targetAttachment="top end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-ts');
    browser.click('#attach-TE');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[4] Display correctly for contentAttachment="top start" & targetAttachment="middle start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-ts');
    browser.click('#attach-MS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[5] Display correctly for contentAttachment="top start" & targetAttachment="middle center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-ts');
    browser.click('#attach-MC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[6] Display correctly for contentAttachment="top start" & targetAttachment="middle end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-ts');
    browser.click('#attach-ME');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[7] Display correctly for contentAttachment="top start" & targetAttachment="bottom start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-ts');
    browser.click('#attach-BS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[8] Display correctly for contentAttachment="top start" & targetAttachment="bottom center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-ts');
    browser.click('#attach-BC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[9] Display correctly for contentAttachment="top start" & targetAttachment="bottom end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-ts');
    browser.click('#attach-BE');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[10] Display correctly for contentAttachment="top center" & targetAttachment="top start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-tc');
    browser.click('#attach-TS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[11] Display correctly for contentAttachment="top center" & targetAttachment="top center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-tc');
    browser.click('#attach-TC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[12] Display correctly for contentAttachment="top center" & targetAttachment="top end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-tc');
    browser.click('#attach-TE');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[13] Display correctly for contentAttachment="top center" & targetAttachment="middle start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-tc');
    browser.click('#attach-MS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[14] Display correctly for contentAttachment="top center" & targetAttachment="middle center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-tc');
    browser.click('#attach-MC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[15] Display correctly for contentAttachment="top center" & targetAttachment="middle end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-tc');
    browser.click('#attach-ME');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[16] Display correctly for contentAttachment="top center" & targetAttachment="bottom start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-tc');
    browser.click('#attach-BS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[17] Display correctly for contentAttachment="top center" & targetAttachment="bottom center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-tc');
    browser.click('#attach-BC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[18] Display correctly for contentAttachment="top center" & targetAttachment="bottom end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-tc');
    browser.click('#attach-BE');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[19] Display correctly for contentAttachment="top end" & targetAttachment="top start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-te');
    browser.click('#attach-TS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[20] Display correctly for contentAttachment="top end" & targetAttachment="top center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-te');
    browser.click('#attach-TC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[21] Display correctly for contentAttachment="top end" & targetAttachment="top end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-te');
    browser.click('#attach-TE');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[22] Display correctly for contentAttachment="top end" & targetAttachment="middle start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-te');
    browser.click('#attach-MS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[23] Display correctly for contentAttachment="top end" & targetAttachment="middle center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-te');
    browser.click('#attach-MC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[24] Display correctly for contentAttachment="top end" & targetAttachment="middle end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-te');
    browser.click('#attach-ME');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[25] Display correctly for contentAttachment="top end" & targetAttachment="bottom start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-te');
    browser.click('#attach-BS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[26] Display correctly for contentAttachment="top end" & targetAttachment="bottom center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-te');
    browser.click('#attach-BC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[27] Display correctly for contentAttachment="top end" & targetAttachment="bottom end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-te');
    browser.click('#attach-BE');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[28] Display correctly for contentAttachment="middle start" & targetAttachment="top start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-ms');
    browser.click('#attach-TS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[29] Display correctly for contentAttachment="middle start" & targetAttachment="top center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-ms');
    browser.click('#attach-TC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[30] Display correctly for contentAttachment="middle start" & targetAttachment="top end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-ms');
    browser.click('#attach-TE');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[31] Display correctly for contentAttachment="middle start" & targetAttachment="middle start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-ms');
    browser.click('#attach-MS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[32] Display correctly for contentAttachment="middle start" & targetAttachment="middle center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-ms');
    browser.click('#attach-MC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[33] Display correctly for contentAttachment="middle start" & targetAttachment="middle end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-ms');
    browser.click('#attach-ME');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[34] Display correctly for contentAttachment="middle start" & targetAttachment="bottom start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-ms');
    browser.click('#attach-BS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[35] Display correctly for contentAttachment="middle start" & targetAttachment="bottom center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-ms');
    browser.click('#attach-BC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[36] Display correctly for contentAttachment="middle start" & targetAttachment="bottom end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-ms');
    browser.click('#attach-BE');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[37] Display correctly for contentAttachment="middle center" & targetAttachment="top start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-mc');
    browser.click('#attach-TS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[38] Display correctly for contentAttachment="middle center" & targetAttachment="top center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-mc');
    browser.click('#attach-TC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[39] Display correctly for contentAttachment="middle center" & targetAttachment="top end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-mc');
    browser.click('#attach-TE');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[40] Display correctly for contentAttachment="middle center" & targetAttachment="middle start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-mc');
    browser.click('#attach-MS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[41] Display correctly for contentAttachment="middle center" & targetAttachment="middle center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-mc');
    browser.click('#attach-MC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[42] Display correctly for contentAttachment="middle center" & targetAttachment="middle end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-mc');
    browser.click('#attach-ME');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[43] Display correctly for contentAttachment="middle center" & targetAttachment="bottom start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-mc');
    browser.click('#attach-BS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[44] Display correctly for contentAttachment="middle center" & targetAttachment="bottom center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-mc');
    browser.click('#attach-BC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[45] Display correctly for contentAttachment="middle center" & targetAttachment="bottom end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-mc');
    browser.click('#attach-BE');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[46] Display correctly for contentAttachment="middle end" & targetAttachment="top start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-me');
    browser.click('#attach-TS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[47] Display correctly for contentAttachment="middle end" & targetAttachment="top center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-me');
    browser.click('#attach-TC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[48] Display correctly for contentAttachment="middle end" & targetAttachment="top end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-me');
    browser.click('#attach-TE');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[49] Display correctly for contentAttachment="middle end" & targetAttachment="middle start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-me');
    browser.click('#attach-MS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[50] Display correctly for contentAttachment="middle end" & targetAttachment="middle center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-me');
    browser.click('#attach-MC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[51] Display correctly for contentAttachment="middle end" & targetAttachment="middle end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-me');
    browser.click('#attach-ME');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[52] Display correctly for contentAttachment="middle end" & targetAttachment="bottom start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-me');
    browser.click('#attach-BS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[53] Display correctly for contentAttachment="middle end" & targetAttachment="bottom center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-me');
    browser.click('#attach-BC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[54] Display correctly for contentAttachment="middle end" & targetAttachment="bottom end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-me');
    browser.click('#attach-BE');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[55] Display correctly for contentAttachment="bottom start" & targetAttachment="top start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-bs');
    browser.click('#attach-TS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[56] Display correctly for contentAttachment="bottom start" & targetAttachment="top center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-bs');
    browser.click('#attach-TC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[57] Display correctly for contentAttachment="bottom start" & targetAttachment="top end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-bs');
    browser.click('#attach-TE');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[58] Display correctly for contentAttachment="bottom start" & targetAttachment="middle start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-bs');
    browser.click('#attach-MS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[59] Display correctly for contentAttachment="bottom start" & targetAttachment="middle center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-bs');
    browser.click('#attach-MC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[60] Display correctly for contentAttachment="bottom start" & targetAttachment="middle end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-bs');
    browser.click('#attach-ME');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[61] Display correctly for contentAttachment="bottom start" & targetAttachment="bottom start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-bs');
    browser.click('#attach-BS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[62] Display correctly for contentAttachment="bottom start" & targetAttachment="bottom center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-bs');
    browser.click('#attach-BC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[63] Display correctly for contentAttachment="bottom start" & targetAttachment="bottom end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-bs');
    browser.click('#attach-BE');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[64] Display correctly for contentAttachment="bottom center" & targetAttachment="top start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-bc');
    browser.click('#attach-TS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[65] Display correctly for contentAttachment="bottom center" & targetAttachment="top center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-bc');
    browser.click('#attach-TC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[66] Display correctly for contentAttachment="bottom center" & targetAttachment="top end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-bc');
    browser.click('#attach-TE');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[67] Display correctly for contentAttachment="bottom center" & targetAttachment="middle start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-bc');
    browser.click('#attach-MS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[68] Display correctly for contentAttachment="bottom center" & targetAttachment="middle center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-bc');
    browser.click('#attach-MC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[69] Display correctly for contentAttachment="bottom center" & targetAttachment="middle end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-bc');
    browser.click('#attach-ME');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[70] Display correctly for contentAttachment="bottom center" & targetAttachment="bottom start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-bc');
    browser.click('#attach-BS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[71] Display correctly for contentAttachment="bottom center" & targetAttachment="bottom center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-bc');
    browser.click('#attach-BC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[72] Display correctly for contentAttachment="bottom center" & targetAttachment="bottom end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-bc');
    browser.click('#attach-BE');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[73] Display correctly for contentAttachment="bottom end" & targetAttachment="top start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-be');
    browser.click('#attach-TS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[74] Display correctly for contentAttachment="bottom end" & targetAttachment="top center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-be');
    browser.click('#attach-TC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[75] Display correctly for contentAttachment="bottom end" & targetAttachment="top end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-be');
    browser.click('#attach-TE');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[76] Display correctly for contentAttachment="bottom end" & targetAttachment="middle start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-be');
    browser.click('#attach-MS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[77] Display correctly for contentAttachment="bottom end" & targetAttachment="middle center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-be');
    browser.click('#attach-MC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[78] Display correctly for contentAttachment="bottom end" & targetAttachment="middle end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-be');
    browser.click('#attach-ME');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[79] Display correctly for contentAttachment="bottom end" & targetAttachment="bottom start"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-be');
    browser.click('#attach-BS');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[80] Display correctly for contentAttachment="bottom end" & targetAttachment="bottom center"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-be');
    browser.click('#attach-BC');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});

describe('[81] Display correctly for contentAttachment="bottom end" & targetAttachment="bottom end"', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/hookshot/hookshot-content-attachment-be');
    browser.click('#attach-BE');
    browser.waitForVisible('#attachment-content');
  });

  Terra.should.matchScreenshot({ selector: '#attachment-bounds' });
});
