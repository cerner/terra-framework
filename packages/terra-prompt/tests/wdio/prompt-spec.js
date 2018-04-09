/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('Prompt', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/prompt/default-prompt'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
