const selector = '#test-infinite-list';

Terra.describeViewports('InfiniteList', ['small'], () => {
  describe('Displays an infinite list with loading indicator', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-infinite-list/infinite-list/infinite-list-loading');
      browser.waitForVisible('#test-infinite-list');
    });

    Terra.it.matchesScreenshot({ selector });
  });

  describe('Displays an infinite list with updating indicator', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-infinite-list/infinite-list/infinite-list-updating');
      browser.waitForVisible('#test-infinite-list');
    });

    Terra.it.matchesScreenshot({ selector });
  });

  describe('Displays an infinite list with selection', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-infinite-list/infinite-list/infinite-list-selection');
      browser.waitForVisible('#test-infinite-list');
      browser.moveToObject('#root', 0, 900);
    });

    Terra.it.matchesScreenshot({ selector });
  });

  describe('Displays an infinite list with role as listbox', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-infinite-list/infinite-list/infinite-list-listbox');
      browser.waitForVisible('#test-infinite-list');
      browser.moveToObject('#root', 0, 900);
    });

    Terra.it.validatesElement({ selector });
  });

  describe('Displays an infinite list with virtual dom from top', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-infinite-list/infinite-list/infinite-list-virtual');
      browser.waitForVisible('#test-infinite-list');
      browser.pause(150);
    });

    Terra.it.matchesScreenshot({ selector });
  });

  describe('Displays an infinite list with virtual dom from bottom', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-infinite-list/infinite-list/infinite-list-virtual');
      browser.waitForVisible('#test-infinite-list [data-infinite-list-index="0"]');
      browser.pause(150);
      browser.click('#test-click');
      browser.waitForVisible('#test-infinite-list [data-infinite-list-index="15"]');
      browser.pause(50);
    });

    Terra.it.matchesScreenshot({ selector });
  });

  describe('Displays an infinite list same count and different content', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-infinite-list/infinite-list/infinite-list-same-count');
      browser.waitForVisible('#test-infinite-list');
      browser.pause(150);
    });
    Terra.it.matchesScreenshot('before-update', { selector });
    it('update the child items', () => {
      browser.click('#test-click');
      browser.pause(50);
    });
    Terra.it.matchesScreenshot('after-update', { selector });
  });
});
