/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium', 'large');
const selector = '#root';

describe('Prompt', () => {
  describe('Default with no title, message or actions', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/prompt/default-prompt');
      browser.click('#trigger-prompt');
    });

    Terra.should.beAccessible({ viewports, selector });
    Terra.should.matchScreenshot({ viewports, selector });
  });

  describe('Complete prompt title, message and actions', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/prompt/complete-prompt');
      browser.click('#trigger-prompt');
    });

    Terra.should.beAccessible({ viewports, selector });
    Terra.should.matchScreenshot({ viewports, selector });
  });

  describe('Complete prompt with a long message', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/prompt/complete-prompt-with-long-message');
      browser.click('#trigger-prompt');
    });

    Terra.should.beAccessible({ viewports, selector });
    Terra.should.matchScreenshot({ viewports, selector });
  });

  describe('Complete prompt with themeable properties', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/prompt/complete-prompt');
      browser.click('#trigger-prompt');
    });

    Terra.should.themeEachCustomProperty(
      '#root',
      {
        '--prompt-background': '#FFFF33',
        '--prompt-body-font-size': '2.5rem',
        '--prompt-body-padding': '2.5rem',
        '--prompt-body-width': '45rem',
        '--terra-prompt-title-color': '#c00',
        '--terra-prompt-title-font-size': '3rem',
        '--terra-prompt-message-color': '#c00',
        '--terra-prompt-message-font-size': '2rem',
        '--terra-prompt-message-padding-top': '1rem',
        '--terra-prompt-message-text-align': 'left',
      },
    );
  });

  describe('Complete prompt with themeable actions', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/prompt/complete-prompt');
      browser.click('#trigger-prompt');
    });

    Terra.should.themeEachCustomProperty(
      '#root',
      {
        '--terra-prompt-actions-flex-direction-small-width': 'row-reverse',
        '--terra-prompt-actions-padding': '0',
        '--terra-prompt-actions-button-flex': '1',
        '--terra-prompt-actions-button-margin': '-0rem 0rem 1 0rem',
      },
    );
  });
});
