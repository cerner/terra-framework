/* global browser, Terra */

const viewports = Terra.viewports('tiny', 'medium');

describe('ApplicationList', () => {
  describe('Displays a default application list', () => {
    beforeEach(() => browser.url('/#/raw/tests/application-links/application-list-default'));

    Terra.should.matchScreenshot('#test-list', { selector: '#test-list', viewports });
    Terra.should.beAccessible({ viewports, context: '#test-list' });
    Terra.should.themeEachCustomProperty('#test-list', {
      '--terra-application-list-color': 'blue',
      '--terra-application-list-font-size': '2rem',
      '--terra-application-list-padding-top': '0',
      '--terra-application-list-padding-right': '0',
      '--terra-application-list-padding-bottom': '0',
      '--terra-application-list-padding-left': '0',
      '--terra-application-list-selected-background-image': 'linear-gradient(-270deg, orange, red)',
      '--terra-application-list-selected-border-left': '10px dotted purple',
      '--terra-application-list-selected-padding-left': '0',
    });
  });

  describe('Displays an application list hover', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/application-links/application-list-default');
      browser.waitForVisible('#test-list');
      browser.moveToObject('#test-list >*:nth-child(2)');
    });

    Terra.should.matchScreenshot('#test-list', { selector: '#test-list', viewports });
    Terra.should.themeEachCustomProperty('#test-list', {
      '--terra-application-list-background-hover': 'linear-gradient(-90deg, red, orange)',
    });
  });

  describe('Displays an application list selection', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/application-links/application-list-default');
      browser.waitForVisible('#test-list');
      browser.click('#test-list >*:nth-child(2)');
    });

    Terra.should.matchScreenshot('#test-list', { selector: '#test-list', viewports });
  });
});
