const selector = '#test-infinite-list';

Terra.describeViewports('InfiniteList', ['small'], () => {
  it('Displays an infinite list with loading indicator', () => {
    browser.url('/raw/tests/terra-infinite-list/infinite-list/infinite-list-loading');
    $('#test-infinite-list').waitForDisplayed();
    Terra.validates.element('with loading indicator', { selector });
  });

  it('Displays an infinite list with updating indicator', () => {
    browser.url('/raw/tests/terra-infinite-list/infinite-list/infinite-list-updating');
    $('#test-infinite-list').waitForDisplayed();
    Terra.validates.element('with updating indicator', { selector });
  });

  it('Displays an infinite list with selection', () => {
    browser.url('/raw/tests/terra-infinite-list/infinite-list/infinite-list-selection');
    $('#test-infinite-list').waitForDisplayed();
    $('#root').moveTo(0, 900);
    Terra.validates.element('with selection', { selector });
  });

  it('Displays an infinite list with role as listbox', () => {
    browser.url('/raw/tests/terra-infinite-list/infinite-list/infinite-list-listbox');
    $('#test-infinite-list').waitForDisplayed();
    $('#root').moveTo(0, 900);
    Terra.validates.element('with role as listbox', { selector });
  });

  it('Displays an infinite list with virtual dom from top', () => {
    browser.url('/raw/tests/terra-infinite-list/infinite-list/infinite-list-virtual');
    $('#test-infinite-list').waitForDisplayed();
    browser.pause(150);
    Terra.validates.element('virtual dom from top', { selector });
  });

  it('Displays an infinite list with virtual dom from bottom', () => {
    browser.url('/raw/tests/terra-infinite-list/infinite-list/infinite-list-virtual');
    $('#test-infinite-list [data-infinite-list-index="0"]').waitForDisplayed();
    browser.pause(150);
    $('#test-click').click();
    $('#test-infinite-list [data-infinite-list-index="15"]').waitForDisplayed();
    browser.pause(50);
    Terra.validates.element('virtual dom from bottom', { selector });
  });

  describe('Displays an infinite list same count and different content', () => {
    it('displays before updating child items', () => {
      browser.url('/raw/tests/terra-infinite-list/infinite-list/infinite-list-same-count');
      $('#test-infinite-list').waitForDisplayed();
      browser.pause(150);
      Terra.validates.element('before-update', { selector });
    });

    it('updates the child items', () => {
      $('#test-click').click();
      browser.pause(50);
      Terra.validates.element('after-update', { selector });
    });
  });
});
