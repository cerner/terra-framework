/* global browser, Terra */
// const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('EmbeddedComponent', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/embedded-component/default-embedded-component'));

    Terra.should.matchScreenshot({ selector: '#site' });
  });
});
