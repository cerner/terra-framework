const viewports = Terra.viewports('small', 'large');

describe('ApplicationTabs', () => {
  describe('Displays a default application tabs', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-default');
      browser.waitForVisible('#test-tabs [data-application-tabs-more]');
      browser.moveToObject('#test-tabs [data-application-tabs-more]');
    });

    Terra.should.matchScreenshot('#test-tabs', { selector: '#test-tabs', viewports });
    Terra.should.beAccessible({ viewports, context: '#test-tabs' });
    Terra.should.themeEachCustomProperty('#test-tabs', {
      '--terra-application-tabs-spacer-width': '5rem',
      '--terra-application-tab-width': '9rem',
      '--terra-application-tabs-margin-next-to-icon': '1rem',
      '--terra-application-tabs-menu-arrow-left-margin': '2rem',
      '--terra-application-tabs-background-image': 'linear-gradient(to bottom, red, orange)',
      '--terra-application-tabs-background-position': 'top',
      '--terra-application-tabs-background-size': '0 9px',
      '--terra-application-tabs-border-left': '6px solid green',
      '--terra-application-tabs-border-right': '6px solid pink',
      '--terra-application-tabs-color': '#000',
      '--terra-application-tabs-font-size': '1rem',
      '--terra-application-tabs-line-height': '1',
      '--terra-application-tabs-padding': '1rem 2rem',
      '--terra-application-tabs-hover-background-color': 'rgba(0, 0, 0, 0.15)',
      '--terra-application-tabs-active-background-color': 'pink',
      '--terra-application-tabs-active-background-size': '100% 9px',
      '--terra-application-tabs-active-color': '#000',
      '--terra-application-tabs-hover-background-image': 'linear-gradient(to bottom, orange,red)',
      '--terra-application-tabs-hover-background-size': '100% 9px',
      '--terra-application-tabs-hover-color': 'gray',
    });
  });

  describe('Displays collapsed application tabs', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-default');
      browser.waitForVisible('#test-tabs [data-application-tabs-more]');
      browser.click('#test-tabs [data-application-tabs-more]');
      browser.waitForVisible('[data-application-tab-menu-content]');
      browser.pause(150);
      browser.moveToObject('[data-application-tab-menu-content] > *:first-child');
    });

    Terra.should.matchScreenshot({ viewports, selector: '#site' });
    Terra.should.beAccessible({ viewports, context: '#site' });
    Terra.should.themeEachCustomProperty('[data-application-tab-menu-content]', {
      '--terra-application-tabs-collapsed-color': 'blue',
      '--terra-application-tabs-collapsed-hover-background': 'linear-gradient(-90deg, orange, red)',
      '--terra-application-tabs-collapsed-selected-background-image': 'linear-gradient(-270deg, red, orange)',
      '--terra-application-tabs-collapsed-selected-box-shadow': 'inset 1rem 0 0 0 purple',
      '--terra-application-tabs-collapsed-padding-top': '0',
      '--terra-application-tabs-collapsed-padding-right': '0',
      '--terra-application-tabs-collapsed-padding-bottom': '0',
      '--terra-application-tabs-collapsed-padding-left': '0',
    });
  });

  describe('Displays a hidden application tabs selection', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-default');
      browser.waitForVisible('#test-tabs [data-application-tabs-more]');
      browser.click('#test-tabs [data-application-tabs-more] span');
      browser.waitForVisible('[data-application-tab-menu-content]');
      browser.click('[data-application-tab-menu-content] > *:first-child div');
      browser.pause(50);
    });

    Terra.should.matchScreenshot('#test-tabs', { selector: '#test-tabs', viewports });
  });

  describe('Displays a application tabs start aligned', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-start');
      browser.pause(50);
    });

    Terra.should.matchScreenshot('#test-tabs', { selector: '#test-tabs', viewports });
  });

  describe('Displays a application tabs center aligned', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-center');
      browser.pause(50);
    });

    Terra.should.matchScreenshot('#test-tabs', { selector: '#test-tabs', viewports });
  });

  describe('Displays a application tabs end aligned', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-end');
      browser.pause(50);
    });

    Terra.should.matchScreenshot('#test-tabs', { selector: '#test-tabs', viewports });
  });

  describe('Navigates away from the site', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-external');
      browser.pause(50);
      browser.click('#test-tabs #test-button');
      browser.pause(100);
    });

    Terra.should.matchScreenshot('External tabs', { selector: 'body', viewports });
  });
});
