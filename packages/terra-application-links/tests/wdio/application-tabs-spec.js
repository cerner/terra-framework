Terra.describeViewports('ApplicationTabs', ['small', 'large'], () => {
  it('Displays a default application tabs', () => {
    browser.url('/raw/tests/terra-application-links/application-links/application-tabs-default');
    $('#test-tabs [data-application-tabs-more]').waitForDisplayed();
    $('#test-tabs [data-application-tabs-more]').moveTo();
    Terra.validates.element('application tabs');
  });

  describe('Displays collapsed application tabs', () => {
    it('Displays collapsed application tabs', () => {
      browser.url('/raw/tests/terra-application-links/application-links/application-tabs-default');
      $('#test-tabs [data-application-tabs-more]').waitForDisplayed();
      $('#test-tabs [data-application-tabs-more]').click();
      $('[data-application-tab-menu-content]').waitForDisplayed();
      $('[data-application-tab-menu-content] > *:first-child').click();
      browser.pause(150);
      $('#test-tabs [data-application-tabs-more]').click();
      $('[data-application-tab-menu-content]').waitForDisplayed();
      $('[data-application-tab-menu-content] > *:first-child').moveTo();

      Terra.validates.element('collapsed application tabs', { selector: '[data-application-tab-menu-content]' });
      browser.keys('Escape');
    });
  });

  describe('Displays a hidden application tabs selection', () => {
    it('Displays a hidden application tabs selection', () => {
      browser.url('/raw/tests/terra-application-links/application-links/application-tabs-default');
      $('#test-tabs [data-application-tabs-more]').waitForDisplayed();
      $('#test-tabs [data-application-tabs-more] span').click();
      $('[data-application-tab-menu-content]').waitForDisplayed();
      $('[data-application-tab-menu-content] > *:first-child div').click();
      browser.pause(50);
      Terra.validates.element('hidden application tabs selection');
    });
  });

  it('Displays a application tabs start aligned', () => {
    browser.url('/raw/tests/terra-application-links/application-links/application-tabs-start');
    browser.pause(50);
    Terra.validates.element('start aligned');
  });

  it('Displays a application tabs center aligned', () => {
    browser.url('/raw/tests/terra-application-links/application-links/application-tabs-center');
    browser.pause(50);
    Terra.validates.element('center aligned');
  });

  it('Displays a application tabs end aligned', () => {
    browser.url('/raw/tests/terra-application-links/application-links/application-tabs-end');
    browser.pause(50);
    Terra.validates.element('end aligned');
  });

  describe('Navigates away from the site', () => {
    it('successfully navigated away', () => {
      browser.url('/raw/tests/terra-application-links/application-links/application-tabs-external');
      browser.pause(50);
      $('#test-tabs #test-button').click();
      browser.pause(500);
      expect(browser.getUrl()).toEqual('https://engineering.cerner.com/terra-ui/home/terra-ui/index');
    });
  });

  it('Displays an application tabs with icons', () => {
    browser.url('/raw/tests/terra-application-links/application-links/application-tabs-with-icons');
    $('#test-tabs [data-application-tabs-more]').waitForDisplayed();
    $('#test-tabs [data-application-tabs-more]').moveTo();
    Terra.validates.element('with icons');
  });

  it('Displays collapsed application tabs with icons', () => {
    browser.url('/raw/tests/terra-application-links/application-links/application-tabs-with-icons');
    $('#test-tabs [data-application-tabs-more]').waitForDisplayed();
    $('#test-tabs [data-application-tabs-more]').click();
    $('[data-application-tab-menu-content]').waitForDisplayed();
    $('[data-application-tab-menu-content] > *:first-child').click();
    browser.pause(150);
    $('#test-tabs [data-application-tabs-more]').click();
    $('[data-application-tab-menu-content]').waitForDisplayed();
    $('[data-application-tab-menu-content] > *:first-child').moveTo();
    Terra.validates.element('collapsed with icons', { selector: '[data-application-tab-menu-content]' });
  });
});
