// 81 Attachment Variants Combinin Target and Content Attachements
describe('Hookshot targetAttachment and contentAttachment combinations', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));

  // Content Attachment: Top Start
  describe('contentAttachment=top start', () => {
    before(() => browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-ts'));

    it('targetAttachment=top start', () => {
      browser.click('#attach-TS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top start', { selector: '#attachment-bounds' });

    it('targetAttachment=top center', () => {
      browser.click('#attach-TC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top center', { selector: '#attachment-bounds' });

    it('targetAttachment=top end', () => {
      browser.click('#attach-TE');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top end', { selector: '#attachment-bounds' });

    it('targetAttachment=middle start', () => {
      browser.click('#attach-MS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle start', { selector: '#attachment-bounds' });

    it('targetAttachment=middle center', () => {
      browser.click('#attach-MC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle center', { selector: '#attachment-bounds' });

    it('targetAttachment=middle end', () => {
      browser.click('#attach-ME');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle end', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom start', () => {
      browser.click('#attach-BS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom start', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom center', () => {
      browser.click('#attach-BC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom center', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom end', () => {
      browser.click('#attach-BE');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom end', { selector: '#attachment-bounds' });
  });

  // Content Attachment: Top Center
  describe('contentAttachment=top center', () => {
    before(() => browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-tc'));

    it('targetAttachment=top start', () => {
      browser.click('#attach-TS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top start', { selector: '#attachment-bounds' });

    it('targetAttachment=top center', () => {
      browser.click('#attach-TC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top center', { selector: '#attachment-bounds' });

    it('targetAttachment=top end', () => {
      browser.click('#attach-TE');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top end', { selector: '#attachment-bounds' });

    it('targetAttachment=middle start', () => {
      browser.click('#attach-MS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle start', { selector: '#attachment-bounds' });

    it('targetAttachment=middle center', () => {
      browser.click('#attach-MC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle center', { selector: '#attachment-bounds' });

    it('targetAttachment=middle end', () => {
      browser.click('#attach-ME');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle end', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom start', () => {
      browser.click('#attach-BS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom start', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom center', () => {
      browser.click('#attach-BC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom center', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom end', () => {
      browser.click('#attach-BE');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom end', { selector: '#attachment-bounds' });
  });

  // Content Attachment: Top End
  describe('contentAttachment=top end', () => {
    before(() => browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-te'));

    it('targetAttachment=top start', () => {
      browser.click('#attach-TS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top start', { selector: '#attachment-bounds' });

    it('targetAttachment=top center', () => {
      browser.click('#attach-TC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top center', { selector: '#attachment-bounds' });

    it('targetAttachment=top end', () => {
      browser.click('#attach-TE');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top end', { selector: '#attachment-bounds' });

    it('targetAttachment=middle start', () => {
      browser.click('#attach-MS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle start', { selector: '#attachment-bounds' });

    it('targetAttachment=middle center', () => {
      browser.click('#attach-MC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle center', { selector: '#attachment-bounds' });

    it('targetAttachment=middle end', () => {
      browser.click('#attach-ME');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle end', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom start', () => {
      browser.click('#attach-BS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom start', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom center', () => {
      browser.click('#attach-BC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom center', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom end', () => {
      browser.click('#attach-BE');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom end', { selector: '#attachment-bounds' });
  });

  // Content Attachment: Middle Start
  describe('contentAttachment=middle start', () => {
    before(() => browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-ms'));

    it('targetAttachment=top start', () => {
      browser.click('#attach-TS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top start', { selector: '#attachment-bounds' });

    it('targetAttachment=top center', () => {
      browser.click('#attach-TC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top center', { selector: '#attachment-bounds' });

    it('targetAttachment=top end', () => {
      browser.click('#attach-TE');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top end', { selector: '#attachment-bounds' });

    it('targetAttachment=middle start', () => {
      browser.click('#attach-MS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle start', { selector: '#attachment-bounds' });

    it('targetAttachment=middle center', () => {
      browser.click('#attach-MC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle center', { selector: '#attachment-bounds' });

    it('targetAttachment=middle end', () => {
      browser.click('#attach-ME');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle end', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom start', () => {
      browser.click('#attach-BS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom start', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom center', () => {
      browser.click('#attach-BC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom center', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom end', () => {
      browser.click('#attach-BE');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom end', { selector: '#attachment-bounds' });
  });

  // Content Attachment: Middle Center
  describe('contentAttachment=middle center', () => {
    before(() => browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-mc'));

    it('targetAttachment=top start', () => {
      browser.click('#attach-TS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top start', { selector: '#attachment-bounds' });

    it('targetAttachment=top center', () => {
      browser.click('#attach-TC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top center', { selector: '#attachment-bounds' });

    it('targetAttachment=top end', () => {
      browser.click('#attach-TE');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top end', { selector: '#attachment-bounds' });

    it('targetAttachment=middle start', () => {
      browser.click('#attach-MS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle start', { selector: '#attachment-bounds' });

    it('targetAttachment=middle center', () => {
      browser.click('#attach-MC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle center', { selector: '#attachment-bounds' });

    it('targetAttachment=middle end', () => {
      browser.click('#attach-ME');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle end', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom start', () => {
      browser.click('#attach-BS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom start', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom center', () => {
      browser.click('#attach-BC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom center', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom end', () => {
      browser.click('#attach-BE');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom end', { selector: '#attachment-bounds' });
  });

  // Content Attachment: Middle End
  describe('contentAttachment=middle end', () => {
    before(() => browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-me'));

    it('targetAttachment=top start', () => {
      browser.click('#attach-TS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top start', { selector: '#attachment-bounds' });

    it('targetAttachment=top center', () => {
      browser.click('#attach-TC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top center', { selector: '#attachment-bounds' });

    it('targetAttachment=top end', () => {
      browser.click('#attach-TE');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top end', { selector: '#attachment-bounds' });

    it('targetAttachment=middle start', () => {
      browser.click('#attach-MS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle start', { selector: '#attachment-bounds' });

    it('targetAttachment=middle center', () => {
      browser.click('#attach-MC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle center', { selector: '#attachment-bounds' });

    it('targetAttachment=middle end', () => {
      browser.click('#attach-ME');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle end', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom start', () => {
      browser.click('#attach-BS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom start', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom center', () => {
      browser.click('#attach-BC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom center', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom end', () => {
      browser.click('#attach-BE');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom end', { selector: '#attachment-bounds' });
  });

  // Content Attachment: Bottom Start
  describe('contentAttachment=bottom start', () => {
    before(() => browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-bs'));

    it('targetAttachment=top start', () => {
      browser.click('#attach-TS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top start', { selector: '#attachment-bounds' });

    it('targetAttachment=top center', () => {
      browser.click('#attach-TC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top center', { selector: '#attachment-bounds' });

    it('targetAttachment=top end', () => {
      browser.click('#attach-TE');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top end', { selector: '#attachment-bounds' });

    it('targetAttachment=middle start', () => {
      browser.click('#attach-MS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle start', { selector: '#attachment-bounds' });

    it('targetAttachment=middle center', () => {
      browser.click('#attach-MC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle center', { selector: '#attachment-bounds' });

    it('targetAttachment=middle end', () => {
      browser.click('#attach-ME');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle end', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom start', () => {
      browser.click('#attach-BS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom start', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom center', () => {
      browser.click('#attach-BC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom center', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom end', () => {
      browser.click('#attach-BE');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom end', { selector: '#attachment-bounds' });
  });

  // Content Attachment: Bottom Center
  describe('contentAttachment=bottom center', () => {
    before(() => browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-bc'));

    it('targetAttachment=top start', () => {
      browser.click('#attach-TS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top start', { selector: '#attachment-bounds' });

    it('targetAttachment=top center', () => {
      browser.click('#attach-TC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top center', { selector: '#attachment-bounds' });

    it('targetAttachment=top end', () => {
      browser.click('#attach-TE');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top end', { selector: '#attachment-bounds' });

    it('targetAttachment=middle start', () => {
      browser.click('#attach-MS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle start', { selector: '#attachment-bounds' });

    it('targetAttachment=middle center', () => {
      browser.click('#attach-MC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle center', { selector: '#attachment-bounds' });

    it('targetAttachment=middle end', () => {
      browser.click('#attach-ME');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle end', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom start', () => {
      browser.click('#attach-BS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom start', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom center', () => {
      browser.click('#attach-BC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom center', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom end', () => {
      browser.click('#attach-BE');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom end', { selector: '#attachment-bounds' });
  });

  // Content Attachment: Bottom End
  describe('contentAttachment=bottom end', () => {
    before(() => browser.url('/#/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-be'));

    it('targetAttachment=top start', () => {
      browser.click('#attach-TS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top start', { selector: '#attachment-bounds' });

    it('targetAttachment=top center', () => {
      browser.click('#attach-TC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top center', { selector: '#attachment-bounds' });

    it('targetAttachment=top end', () => {
      browser.click('#attach-TE');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=top end', { selector: '#attachment-bounds' });

    it('targetAttachment=middle start', () => {
      browser.click('#attach-MS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle start', { selector: '#attachment-bounds' });

    it('targetAttachment=middle center', () => {
      browser.click('#attach-MC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle center', { selector: '#attachment-bounds' });

    it('targetAttachment=middle end', () => {
      browser.click('#attach-ME');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=middle end', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom start', () => {
      browser.click('#attach-BS');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom start', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom center', () => {
      browser.click('#attach-BC');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom center', { selector: '#attachment-bounds' });

    it('targetAttachment=bottom end', () => {
      browser.click('#attach-BE');
      browser.waitForVisible('#attachment-content');
    });
    Terra.should.matchScreenshot('targetAttachment=bottom end', { selector: '#attachment-bounds' });
  });
});
