Terra.describeViewports('ApplicationTabs', ['small', 'large'], () => {
  it('Displays a default application tabs', () => {
    browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-default');
    browser.waitForVisible('#test-tabs [data-application-tabs-more]');
    browser.moveToObject('#test-tabs [data-application-tabs-more]');
    Terra.validates.element();
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
    it('Displays a hidden application tabs selection', () => {
      browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-default');
      browser.waitForVisible('#test-tabs [data-application-tabs-more]');
      browser.click('#test-tabs [data-application-tabs-more] span');
      browser.waitForVisible('[data-application-tab-menu-content]');
      browser.click('[data-application-tab-menu-content] > *:first-child div');
      browser.pause(50);
      Terra.validates.element();
    });
  });

  it('Displays a application tabs start aligned', () => {
    browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-start');
    browser.pause(50);
    Terra.validates.element('start aligned');
  });

  it('Displays a application tabs center aligned', () => {
    browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-center');
    browser.pause(50);
    Terra.validates.element('center aligned');
  });

  it('Displays a application tabs end aligned', () => {
    browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-end');
    browser.pause(50);
    Terra.validates.element('end aligned');
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

  it('Displays an application tabs with icons', () => {
    browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-with-icons');
    browser.waitForVisible('#test-tabs [data-application-tabs-more]');
    browser.moveToObject('#test-tabs [data-application-tabs-more]');
    Terra.validates.element('with icons');
  });

  it('Displays collapsed application tabs with icons', () => {
    browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-with-icons');
    browser.waitForVisible('#test-tabs [data-application-tabs-more]');
    browser.click('#test-tabs [data-application-tabs-more]');
    browser.waitForVisible('[data-application-tab-menu-content]');
    browser.click('[data-application-tab-menu-content] > *:first-child');
    browser.pause(150);
    browser.click('#test-tabs [data-application-tabs-more]');
    browser.waitForVisible('[data-application-tab-menu-content]');
    browser.moveToObject('[data-application-tab-menu-content] > *:first-child');
    Terra.validates.element('collapsed with icons', { selector: '[data-application-tab-menu-content]' });
  });
});
