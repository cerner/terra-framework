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
