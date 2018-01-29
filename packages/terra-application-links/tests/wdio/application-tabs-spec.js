/* global browser, Terra */

const viewports = Terra.viewports('tiny', 'medium');

describe('ApplicationTabs', () => {
  describe('Displays a default application tabs', () => {
    beforeEach(() => {
      browser.url('/#/tests/application-links/default-tabs');
      browser.waitForVisible('#test-tabs [data-application-tabs-more]');
      browser.moveToObject('#test-tabs [data-application-tabs-more]');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports, context: '#test-tabs' });
    Terra.should.themeEachCustomProperty({
      '--terra-application-tabs-spacer-width': '2rem',
      '--terra-application-tab-min-width': '8.357rem',
      '--terra-application-tab-max-width': '16.714rem',
      '--terra-application-tabs-margin-next-to-icon': '0.357rem',
      '--terra-application-tab-menu-min-width': '7.143rem',
      '--terra-application-tabs-menu-arrow-left-margin': '0.5rem',
      '--terra-application-tabs-background-image': 'linear-gradient(to bottom, #007ee0, #007ee0)',
      '--terra-application-tabs-background-position': 'top-left',
      '--terra-application-tabs-background-size': '0 4px',
      '--terra-application-tabs-border-color': '#dedfe0',
      '--terra-application-tabs-border-width': '0 1px 0 0',
      '--terra-application-tabs-color': '#fff',
      '--terra-application-tabs-font-size': '1rem',
      '--terra-application-tabs-line-height': '1.4',
      '--terra-application-tabs-padding': '0.643rem 1.071rem',
      '--terra-application-tabs-hover-background-color': 'rgba(0, 0, 0, 0.25)',
      '--terra-application-tabs-active-background-color': '#fff',
      '--terra-application-tabs-active-background-size': '100% 4px',
      '--terra-application-tabs-active-color': '#000',
      '--terra-application-tabs-hover-background-image': 'linear-gradient(to bottom, #c8cacb, #c8cacb)',
      '--terra-application-tabs-hover-background-size': '100% 4px',
      '--terra-application-tabs-hover-color': '#000',
    });
  });

  describe('Displays a hidden application tabs', () => {
    beforeEach(() => {
      browser.url('/#/tests/application-links/default-tabs');
      browser.waitForVisible('#test-tabs [data-application-tabs-more]');
      browser.click('#test-tabs [data-application-tabs-more]');
      browser.waitForVisible('[data-application-tab-menu-content]');
      browser.moveToObject('[data-application-tab-menu-content] > *:first-child');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports, context: '[data-application-tab-menu-content]' });
    Terra.should.themeEachCustomProperty({
      '--terra-application-tabs-hidden-color': '#1c1f21',
      '--terra-application-tabs-hidden-hover-background': 'linear-gradient(-90deg, #fff, #f1f1f2)',
      '--terra-application-tabs-hidden-selected-background-image': 'linear-gradient(-270deg, #fff, #e8e9ea)',
      '--terra-application-tabs-hidden-selected-box-shadow': 'inset 0.5rem 0 0 0 #007cc3',
      '--terra-application-tabs-hidden-selected-left-padding': '1.214rem',
    });
  });

  describe('Displays a hidden application tabs selection', () => {
    beforeEach(() => {
      browser.url('/#/tests/application-links/default-tabs');
      browser.waitForVisible('#test-tabs [data-application-tabs-more]');
      browser.click('#test-tabs [data-application-tabs-more]');
      browser.waitForVisible('[data-application-tab-menu-content]');
      browser.click('[data-application-tab-menu-content] > *:first-child');
    });

    Terra.should.matchScreenshot({ viewports });
  });
});
