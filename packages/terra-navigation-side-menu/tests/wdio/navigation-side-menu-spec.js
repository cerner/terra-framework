describe('Default navigation side menu display', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/terra-navigation-side-menu/navigation-side-menu/navigation-side-menu-default');
    browser.waitForVisible('#test-menu');
  });

  Terra.it.matchesScreenshot('#test-menu', { selector: '#test-menu' });
  Terra.it.isAccessible();
});

describe('Default navigation side menu display with toolbar', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/terra-navigation-side-menu/navigation-side-menu/navigation-side-menu-default-with-toolbar');
    browser.waitForVisible('#test-menu');
  });

  Terra.it.matchesScreenshot('#test-menu', { selector: '#test-menu' });
  Terra.it.isAccessible();
});

describe('Hover navigation side menu display', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/terra-navigation-side-menu/navigation-side-menu/navigation-side-menu-default');
    browser.waitForVisible('#test-menu');
    browser.moveToObject('#test-menu #test-item-1');
  });

  Terra.it.matchesScreenshot('#test-menu', { selector: '#test-menu' });
});

describe('Selected navigation side menu display', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/terra-navigation-side-menu/navigation-side-menu/navigation-side-menu-default');
    browser.waitForVisible('#test-menu');
    browser.moveToObject('#test-menu #test-item-1');
    browser.click('#test-menu #test-item-1');
    browser.click('#test-menu #test-item-2');
  });

  Terra.it.matchesScreenshot('#test-menu', { selector: '#test-menu' });
  Terra.it.isAccessible();
});

describe('isRootMenu navigation side menu display', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/terra-navigation-side-menu/navigation-side-menu/navigation-side-menu-root');
    browser.waitForVisible('#test-menu');
  });

  Terra.it.matchesScreenshot('#test-menu', { selector: '#test-menu' });
});
