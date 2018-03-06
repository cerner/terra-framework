/* global browser, Terra, before */

describe('Default navigation side menu display', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/navigation-side-menu/navigation-side-menu-default');
    browser.waitForVisible('#test-menu');
  });

  Terra.should.matchScreenshot('#test-menu', { selector: '#test-menu' });
  Terra.should.beAccessible({ context: '#test-menu' });
  Terra.should.themeEachCustomProperty('#test-menu', {
    '--terra-navigation-side-menu-item-color': 'green',
    '--terra-navigation-side-menu-item-size': '0.5rem',
    '--terra-navigation-side-menu-item-padding-top': '0',
    '--terra-navigation-side-menu-item-padding-right': '0',
    '--terra-navigation-side-menu-item-padding-bottom': '0',
    '--terra-navigation-side-menu-item-padding-left': '0',
  });
});

describe('Hover navigation side menu display', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/navigation-side-menu/navigation-side-menu-default');
    browser.waitForVisible('#test-menu');
    browser.moveToObject('#test-menu #test-item-1');
  });

  Terra.should.matchScreenshot('#test-menu', { selector: '#test-menu' });
  Terra.should.themeEachCustomProperty('#test-menu', {
    '--terra-navigation-side-menu-item-hover-background-color': 'orange',
  });
});

describe('Selected navigation side menu display', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/navigation-side-menu/navigation-side-menu-default');
    browser.waitForVisible('#test-menu');
    browser.moveToObject('#test-menu #test-item-1');
    browser.click('#test-menu #test-item-1');
    browser.click('#test-menu #test-item-2');
  });

  Terra.should.matchScreenshot('#test-menu', { selector: '#test-menu' });
  Terra.should.beAccessible({ context: '#test-menu' });
  Terra.should.themeEachCustomProperty('#test-menu', {
    '--terra-navigation-side-menu-item-selected-background-color': 'pink',
    '--terra-navigation-side-menu-item-selected-border-left': '1rem dotted orange',
    '--terra-navigation-side-menu-item-selected-padding-left': '0',
  });
});

describe('isRootMenu navigation side menu display', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/navigation-side-menu/navigation-side-menu-root');
    browser.waitForVisible('#test-menu');
  });

  Terra.should.matchScreenshot('#test-menu', { selector: '#test-menu' });
});
