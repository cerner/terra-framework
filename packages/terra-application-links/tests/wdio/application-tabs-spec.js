
Terra.describeViewports('ApplicationTabs', ['small', 'large'], () => {
  describe('Displays a default application tabs', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-default');
      browser.waitForVisible('#test-tabs [data-application-tabs-more]');
      browser.moveToObject('#test-tabs [data-application-tabs-more]');
    });

    Terra.it.validatesElement();
  });

  describe('Displays collapsed application tabs', () => {
    it('Displays collapsed application tabs', () => {
      browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-default');
      browser.waitForVisible('#test-tabs [data-application-tabs-more]');
      browser.click('#test-tabs [data-application-tabs-more]');
      browser.waitForVisible('[data-application-tab-menu-content]');
      browser.click('[data-application-tab-menu-content] > *:first-child');
      browser.pause(150);
      browser.click('#test-tabs [data-application-tabs-more]');
      browser.waitForVisible('[data-application-tab-menu-content]');
      browser.moveToObject('[data-application-tab-menu-content] > *:first-child');

      Terra.validates.element({ selector: '[data-application-tab-menu-content]' });
      browser.keys('Escape');
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

    Terra.it.validatesElement();
  });

  describe('Displays a application tabs start aligned', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-start');
      browser.pause(50);
    });

    Terra.it.validatesElement();
  });

  describe('Displays a application tabs center aligned', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-center');
      browser.pause(50);
    });

    Terra.it.validatesElement();
  });

  describe('Displays a application tabs end aligned', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-end');
      browser.pause(50);
    });

    Terra.it.validatesElement();
  });

  describe('Navigates away from the site', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-external');
      browser.pause(50);
      browser.click('#test-tabs #test-button');
      browser.pause(100);
    });

    it('successfully navigated away', () => {
      expect(browser.url().value).to.equal('https://engineering.cerner.com/terra-ui/home/terra-ui/index');
    });
  });

  describe('Displays an application tabs with icons', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-with-icons');
      browser.waitForVisible('#test-tabs [data-application-tabs-more]');
      browser.moveToObject('#test-tabs [data-application-tabs-more]');
    });

    Terra.it.validatesElement();
  });

  describe('Displays collapsed application tabs with icons', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-with-icons');
      browser.waitForVisible('#test-tabs [data-application-tabs-more]');
      browser.click('#test-tabs [data-application-tabs-more]');
      browser.waitForVisible('[data-application-tab-menu-content]');
      browser.click('[data-application-tab-menu-content] > *:first-child');
      browser.pause(150);
      browser.click('#test-tabs [data-application-tabs-more]');
      browser.waitForVisible('[data-application-tab-menu-content]');
      browser.moveToObject('[data-application-tab-menu-content] > *:first-child');
    });

    Terra.it.validatesElement({ selector: '[data-application-tab-menu-content]' });
  });
});
