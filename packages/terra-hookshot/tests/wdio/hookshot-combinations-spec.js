// 81 Attachment Variants Combinin Target and Content Attachements
Terra.describeViewports('Hookshot targetAttachment and contentAttachment combinations', ['small'], () => {
  // Content Attachment: Top Start
  describe('contentAttachment=top start', () => {
    it('targetAttachment=top start', () => {
      browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-ts');
      browser.click('#attach-TS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top center', () => {
      browser.click('#attach-TC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top end', () => {
      browser.click('#attach-TE');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle start', () => {
      browser.click('#attach-MS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle center', () => {
      browser.click('#attach-MC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle end', () => {
      browser.click('#attach-ME');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom start', () => {
      browser.click('#attach-BS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom center', () => {
      browser.click('#attach-BC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom end', () => {
      browser.click('#attach-BE');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom end', { selector: '#attachment-bounds' });
    });
  });

  // Content Attachment: Top Center
  describe('contentAttachment=top center', () => {
    it('targetAttachment=top start', () => {
      browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-tc');
      browser.click('#attach-TS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top center', () => {
      browser.click('#attach-TC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top end', () => {
      browser.click('#attach-TE');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle start', () => {
      browser.click('#attach-MS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle center', () => {
      browser.click('#attach-MC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle end', () => {
      browser.click('#attach-ME');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom start', () => {
      browser.click('#attach-BS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom center', () => {
      browser.click('#attach-BC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom end', () => {
      browser.click('#attach-BE');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom end', { selector: '#attachment-bounds' });
    });
  });

  // Content Attachment: Top End
  describe('contentAttachment=top end', () => {
    it('targetAttachment=top start', () => {
      browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-te');
      browser.click('#attach-TS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top center', () => {
      browser.click('#attach-TC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top end', () => {
      browser.click('#attach-TE');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle start', () => {
      browser.click('#attach-MS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle center', () => {
      browser.click('#attach-MC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle end', () => {
      browser.click('#attach-ME');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom start', () => {
      browser.click('#attach-BS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom center', () => {
      browser.click('#attach-BC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom end', () => {
      browser.click('#attach-BE');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom end', { selector: '#attachment-bounds' });
    });
  });

  // Content Attachment: Middle Start
  describe('contentAttachment=middle start', () => {
    it('targetAttachment=top start', () => {
      browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-ms');
      browser.click('#attach-TS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top center', () => {
      browser.click('#attach-TC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top end', () => {
      browser.click('#attach-TE');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle start', () => {
      browser.click('#attach-MS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle center', () => {
      browser.click('#attach-MC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle end', () => {
      browser.click('#attach-ME');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom start', () => {
      browser.click('#attach-BS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom center', () => {
      browser.click('#attach-BC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom end', () => {
      browser.click('#attach-BE');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom end', { selector: '#attachment-bounds' });
    });
  });

  // Content Attachment: Middle Center
  describe('contentAttachment=middle center', () => {
    it('targetAttachment=top start', () => {
      browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-mc');
      browser.click('#attach-TS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top center', () => {
      browser.click('#attach-TC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top end', () => {
      browser.click('#attach-TE');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle start', () => {
      browser.click('#attach-MS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle center', () => {
      browser.click('#attach-MC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle end', () => {
      browser.click('#attach-ME');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom start', () => {
      browser.click('#attach-BS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom center', () => {
      browser.click('#attach-BC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom end', () => {
      browser.click('#attach-BE');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom end', { selector: '#attachment-bounds' });
    });
  });

  // Content Attachment: Middle End
  describe('contentAttachment=middle end', () => {
    it('targetAttachment=top start', () => {
      browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-me');
      browser.click('#attach-TS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top center', () => {
      browser.click('#attach-TC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top end', () => {
      browser.click('#attach-TE');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle start', () => {
      browser.click('#attach-MS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle center', () => {
      browser.click('#attach-MC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle end', () => {
      browser.click('#attach-ME');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom start', () => {
      browser.click('#attach-BS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom center', () => {
      browser.click('#attach-BC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom end', () => {
      browser.click('#attach-BE');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom end', { selector: '#attachment-bounds' });
    });
  });

  // Content Attachment: Bottom Start
  describe('contentAttachment=bottom start', () => {
    it('targetAttachment=top start', () => {
      browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-bs');
      browser.click('#attach-TS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top center', () => {
      browser.click('#attach-TC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top end', () => {
      browser.click('#attach-TE');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle start', () => {
      browser.click('#attach-MS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle center', () => {
      browser.click('#attach-MC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle end', () => {
      browser.click('#attach-ME');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom start', () => {
      browser.click('#attach-BS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom center', () => {
      browser.click('#attach-BC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom end', () => {
      browser.click('#attach-BE');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom end', { selector: '#attachment-bounds' });
    });
  });

  // Content Attachment: Bottom Center
  describe('contentAttachment=bottom center', () => {
    it('targetAttachment=top start', () => {
      browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-bc');
      browser.click('#attach-TS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top center', () => {
      browser.click('#attach-TC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top end', () => {
      browser.click('#attach-TE');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle start', () => {
      browser.click('#attach-MS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle center', () => {
      browser.click('#attach-MC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle end', () => {
      browser.click('#attach-ME');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom start', () => {
      browser.click('#attach-BS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom center', () => {
      browser.click('#attach-BC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom end', () => {
      browser.click('#attach-BE');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom end', { selector: '#attachment-bounds' });
    });
  });

  // Content Attachment: Bottom End
  describe('contentAttachment=bottom end', () => {
    it('targetAttachment=top start', () => {
      browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-be');
      browser.click('#attach-TS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top center', () => {
      browser.click('#attach-TC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top end', () => {
      browser.click('#attach-TE');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=top end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle start', () => {
      browser.click('#attach-MS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle center', () => {
      browser.click('#attach-MC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle end', () => {
      browser.click('#attach-ME');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=middle end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom start', () => {
      browser.click('#attach-BS');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom center', () => {
      browser.click('#attach-BC');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom end', () => {
      browser.click('#attach-BE');
      browser.waitForVisible('#attachment-content');
      Terra.validates.element('targetAttachment=bottom end', { selector: '#attachment-bounds' });
    });
  });
});
