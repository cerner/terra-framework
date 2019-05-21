const viewports = Terra.viewports('large');

describe('ApplicationNavigation', () => {
  before(() => browser.setViewportSize(viewports[0]));

  describe('Extensions roll up properly', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-navigation/application-navigation/extensions');
      browser.click('[data-application-extension-rollup="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.pause(50);
    });

    Terra.should.validateElement();
  });

  describe('Tabs roll up properly', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-navigation/application-navigation/tabs');
      browser.waitForVisible('[data-tab-menu-inner="true"]');
      browser.click('[data-tab-menu-inner="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.pause(50);
    });

    Terra.should.validateElement();
  });

  describe('Utilities should display properly', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-navigation/application-navigation/utilities');
      browser.click('[data-application-header-utility="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.pause(50);
    });

    Terra.should.validateElement();
  });

  describe('UserName should display properly', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-navigation/application-navigation/user');
    });

    Terra.should.validateElement();
  });

  describe('Title should display properly', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-navigation/application-navigation/title');
    });

    Terra.should.validateElement();
  });

  // describe('Displays an infinite list same count and different content', () => {
  //   before(() => {
  //     browser.setViewportSize(Terra.viewports('small')[0]);
  //     browser.url('/#/raw/tests/terra-infinite-list/infinite-list/infinite-list-same-count');
  //     browser.waitForVisible('#test-infinite-list');
  //     browser.pause(150);
  //   });
  //   Terra.should.matchScreenshot('before-update', { selector: '#test-infinite-list' });
  //   it('update the child items', () => {
  //     browser.click('#test-click');
  //     browser.pause(50);
  //   });
  //   Terra.should.matchScreenshot('after-update', { selector: '#test-infinite-list' });
  // });
});
