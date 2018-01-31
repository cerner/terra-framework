/* global browser, Terra */

const viewports = Terra.viewports('tiny', 'medium');

describe('ApplicationList', () => {
  describe('Displays a default application list', () => {
    beforeEach(() => browser.url('/#/raw/tests/application-links/application-list-default'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports, context: '#test-list' });
    Terra.should.themeEachCustomProperty({
      '--terra-application-list-color': 'blue',
      '--terra-application-list-font-size': '2rem',
      '--terra-application-list-line-height': '4rem',
      '--terra-application-list-padding': '0 2rem',
      '--terra-application-list-selected-background-image': 'linear-gradient(-270deg, orange, red)',
      '--terra-application-list-selected-box-shadow': 'inset 1rem 0 0 0 purple',
      '--terra-application-list-selected-padding': '0 2rem',
    });
  });

  describe('Displays an application list hover', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/application-links/application-list-default');
      browser.waitForVisible('#test-list');
      browser.moveToObject('#test-list >*:nth-child(2)');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-application-list-background-hover': 'linear-gradient(-90deg, red, orange)',
    });
  });

  describe('Displays an application list selection', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/application-links/application-list-default');
      browser.waitForVisible('#test-list');
      browser.click('#test-list >*:nth-child(2)');
    });

    Terra.should.matchScreenshot({ viewports });
  });
});
