/* global browser, Terra */

const viewports = Terra.viewports('medium');

describe('ApplicationTabs', () => {
  describe('Displays a default application tabs', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/application-links/application-tabs-default');
      browser.waitForVisible('#test-tabs [data-application-tabs-more]');
      browser.moveToObject('#test-tabs [data-application-tabs-more]');
    });

    Terra.should.matchScreenshot('#test-tabs', { selector: '#test-tabs', viewports });
  });

  describe('Displays a hidden application tabs selection', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/application-links/application-tabs-default');
      browser.waitForVisible('#test-tabs [data-application-tabs-more]');
      browser.click('#test-tabs [data-application-tabs-more] span');
      browser.waitForVisible('[data-application-tab-menu-content]');
      browser.click('[data-application-tab-menu-content] > *:first-child div');
      browser.pause(50);
    });

    Terra.should.matchScreenshot('#test-tabs', { selector: '#test-tabs', viewports });
  });
});
