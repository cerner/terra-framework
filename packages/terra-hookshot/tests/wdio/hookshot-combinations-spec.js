// 81 Attachment Variants Combinin Target and Content Attachements
Terra.describeViewports('Hookshot targetAttachment and contentAttachment combinations', ['small'], () => {
  // Content Attachment: Top Start
  describe('contentAttachment=top start', () => {
    it('targetAttachment=top start', () => {
      browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-ts');
      $('#attach-TS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top center', () => {
      $('#attach-TC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top end', () => {
      $('#attach-TE').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle start', () => {
      $('#attach-MS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle center', () => {
      $('#attach-MC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle end', () => {
      $('#attach-ME').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom start', () => {
      $('#attach-BS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom center', () => {
      $('#attach-BC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom end', () => {
      $('#attach-BE').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom end', { selector: '#attachment-bounds' });
    });
  });

  // Content Attachment: Top Center
  describe('contentAttachment=top center', () => {
    it('targetAttachment=top start', () => {
      browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-tc');
      $('#attach-TS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top center', () => {
      $('#attach-TC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top end', () => {
      $('#attach-TE').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle start', () => {
      $('#attach-MS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle center', () => {
      $('#attach-MC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle end', () => {
      $('#attach-ME').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom start', () => {
      $('#attach-BS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom center', () => {
      $('#attach-BC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom end', () => {
      $('#attach-BE').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom end', { selector: '#attachment-bounds' });
    });
  });

  // Content Attachment: Top End
  describe('contentAttachment=top end', () => {
    it('targetAttachment=top start', () => {
      browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-te');
      $('#attach-TS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top center', () => {
      $('#attach-TC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top end', () => {
      $('#attach-TE').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle start', () => {
      $('#attach-MS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle center', () => {
      $('#attach-MC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle end', () => {
      $('#attach-ME').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom start', () => {
      $('#attach-BS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom center', () => {
      $('#attach-BC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom end', () => {
      $('#attach-BE').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom end', { selector: '#attachment-bounds' });
    });
  });

  // Content Attachment: Middle Start
  describe('contentAttachment=middle start', () => {
    it('targetAttachment=top start', () => {
      browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-ms');
      $('#attach-TS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top center', () => {
      $('#attach-TC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top end', () => {
      $('#attach-TE').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle start', () => {
      $('#attach-MS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle center', () => {
      $('#attach-MC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle end', () => {
      $('#attach-ME').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom start', () => {
      $('#attach-BS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom center', () => {
      $('#attach-BC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom end', () => {
      $('#attach-BE').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom end', { selector: '#attachment-bounds' });
    });
  });

  // Content Attachment: Middle Center
  describe('contentAttachment=middle center', () => {
    it('targetAttachment=top start', () => {
      browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-mc');
      $('#attach-TS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top center', () => {
      $('#attach-TC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top end', () => {
      $('#attach-TE').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle start', () => {
      $('#attach-MS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle center', () => {
      $('#attach-MC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle end', () => {
      $('#attach-ME').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom start', () => {
      $('#attach-BS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom center', () => {
      $('#attach-BC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom end', () => {
      $('#attach-BE').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom end', { selector: '#attachment-bounds' });
    });
  });

  // Content Attachment: Middle End
  describe('contentAttachment=middle end', () => {
    it('targetAttachment=top start', () => {
      browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-me');
      $('#attach-TS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top center', () => {
      $('#attach-TC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top end', () => {
      $('#attach-TE').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle start', () => {
      $('#attach-MS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle center', () => {
      $('#attach-MC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle end', () => {
      $('#attach-ME').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom start', () => {
      $('#attach-BS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom center', () => {
      $('#attach-BC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom end', () => {
      $('#attach-BE').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom end', { selector: '#attachment-bounds' });
    });
  });

  // Content Attachment: Bottom Start
  describe('contentAttachment=bottom start', () => {
    it('targetAttachment=top start', () => {
      browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-bs');
      $('#attach-TS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top center', () => {
      $('#attach-TC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top end', () => {
      $('#attach-TE').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle start', () => {
      $('#attach-MS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle center', () => {
      $('#attach-MC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle end', () => {
      $('#attach-ME').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom start', () => {
      $('#attach-BS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom center', () => {
      $('#attach-BC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom end', () => {
      $('#attach-BE').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom end', { selector: '#attachment-bounds' });
    });
  });

  // Content Attachment: Bottom Center
  describe('contentAttachment=bottom center', () => {
    it('targetAttachment=top start', () => {
      browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-bc');
      $('#attach-TS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top center', () => {
      $('#attach-TC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top end', () => {
      $('#attach-TE').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle start', () => {
      $('#attach-MS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle center', () => {
      $('#attach-MC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle end', () => {
      $('#attach-ME').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom start', () => {
      $('#attach-BS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom center', () => {
      $('#attach-BC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom end', () => {
      $('#attach-BE').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom end', { selector: '#attachment-bounds' });
    });
  });

  // Content Attachment: Bottom End
  describe('contentAttachment=bottom end', () => {
    it('targetAttachment=top start', () => {
      browser.url('/raw/tests/terra-hookshot/hookshot/hookshot-content-attachment-be');
      $('#attach-TS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top center', () => {
      $('#attach-TC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=top end', () => {
      $('#attach-TE').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=top end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle start', () => {
      $('#attach-MS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle center', () => {
      $('#attach-MC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=middle end', () => {
      $('#attach-ME').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=middle end', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom start', () => {
      $('#attach-BS').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom start', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom center', () => {
      $('#attach-BC').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom center', { selector: '#attachment-bounds' });
    });

    it('targetAttachment=bottom end', () => {
      $('#attach-BE').click();
      $('#attachment-content').waitForDisplayed();
      Terra.validates.element('targetAttachment=bottom end', { selector: '#attachment-bounds' });
    });
  });
});
