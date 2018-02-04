/* global browser, Terra */

const viewports = Terra.viewports('small', 'large');

describe('ApplicationTabs', () => {
  describe('Displays a default application tabs', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/application-links/application-tabs-default');
      browser.waitForVisible('#test-tabs [data-application-tabs-more]');
      browser.moveToObject('#test-tabs [data-application-tabs-more]');
    });
    Terra.should.matchScreenshot('#test-tabs', { selector: '#test-tabs', viewports });
    // Terra.should.matchScreenshot({ viewports, options: { selector: '#test-tabs' } });
    Terra.should.beAccessible({ viewports, context: '#test-tabs' });
  //   Terra.should.themeEachCustomProperty('#test-tabs', {
  //     '--terra-application-tabs-spacer-width': '5rem',
  //     '--terra-application-tab-width': '9rem',
  //     '--terra-application-tabs-margin-next-to-icon': '1rem',
  //     '--terra-application-tabs-menu-arrow-left-margin': '2rem',
  //     '--terra-application-tabs-background-image': 'linear-gradient(to bottom, red, orange)',
  //     '--terra-application-tabs-background-position': 'top',
  //     '--terra-application-tabs-background-size': '0 9px',
  //     '--terra-application-tabs-border-left': '6px solid green',
  //     '--terra-application-tabs-border-right': '6px solid pink',
  //     '--terra-application-tabs-color': '#000',
  //     '--terra-application-tabs-font-size': '1rem',
  //     '--terra-application-tabs-line-height': '1',
  //     '--terra-application-tabs-padding': '1rem 2rem',
  //     '--terra-application-tabs-hover-background-color': 'rgba(0, 0, 0, 0.15)',
  //     '--terra-application-tabs-active-background-color': 'pink',
  //     '--terra-application-tabs-active-background-size': '100% 9px',
  //     '--terra-application-tabs-active-color': '#000',
  //     '--terra-application-tabs-hover-background-image': 'linear-gradient(to bottom, orange,red)',
  //     '--terra-application-tabs-hover-background-size': '100% 9px',
  //     '--terra-application-tabs-hover-color': 'gray',
  //   });
  });

  describe('Displays hidden application tabs', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/application-links/application-tabs-default');
      browser.waitForVisible('#test-tabs [data-application-tabs-more]');
      browser.click('#test-tabs [data-application-tabs-more]');
      browser.waitForVisible('[data-application-tab-menu-content]');
      browser.pause(150);
      browser.moveToObject('[data-application-tab-menu-content] > *:first-child');
    });

    Terra.should.matchScreenshot({ viewports });
    // Terra.should.matchScreenshot({ viewports, options: { selector: '[data-application-tab-menu-content]' } });
    Terra.should.beAccessible({ viewports, context: '[data-application-tab-menu-content]' });
    // Terra.should.themeEachCustomProperty('[data-application-tab-menu-content]', {
    //   '--terra-application-tabs-hidden-color': 'blue',
    //   '--terra-application-tabs-hidden-hover-background': 'linear-gradient(-90deg, orange, red)',
    //   '--terra-application-tabs-hidden-selected-background-image': 'linear-gradient(-270deg, red, orange)',
    //   '--terra-application-tabs-hidden-selected-box-shadow': 'inset 1rem 0 0 0 purple',
    //   '--terra-application-tabs-hidden-selected-left-padding': '3rem',
    // });
  });

  describe('Displays a hidden application tabs selection', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/application-links/application-tabs-default');
      browser.waitForVisible('#test-tabs [data-application-tabs-more]');
      browser.click('#test-tabs [data-application-tabs-more]');
      browser.waitForVisible('[data-application-tab-menu-content]');
      browser.click('[data-application-tab-menu-content] > *:first-child');
      browser.pause(50);
    });

    Terra.should.matchScreenshot({ viewports });
    // Terra.should.matchScreenshot({ viewports, options: { selector: '#test-tabs' } });
  });
});
