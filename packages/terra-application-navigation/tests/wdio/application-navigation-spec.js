describe('ApplicationNavigation - Large', () => {
  before(() => browser.setViewportSize(Terra.viewports('large')[0]));

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

  describe('Hero should display properly', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-navigation/application-navigation/hero');
      browser.click('[data-application-header-utility="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.pause(50);
    });

    Terra.should.validateElement({ selector: '#root' });
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
});

describe('ApplicationNavigation - Small', () => {
  before(() => browser.setViewportSize(Terra.viewports('small')[0]));

  describe('Extensions roll up properly', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-navigation/application-navigation/extensions');
      browser.click('[data-application-extension-rollup="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.pause(50);
    });

    Terra.should.validateElement();
  });

  describe('Tabs enter the nav drawer', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-navigation/application-navigation/tabs');
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.pause(250);
    });

    Terra.should.validateElement({ selector: '#root' });
  });

  describe('Utilities enter the nav drawer', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-navigation/application-navigation/utilities');
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.pause(250);
    });

    Terra.should.validateElement({ selector: '#root' });
  });

  describe('Hero enters the nav drawer', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-navigation/application-navigation/hero-drawer');
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.pause(250);
    });

    Terra.should.validateElement({ selector: '#root' });
  });

  describe('ApplicationNavigation displays the nav drawer', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-navigation/application-navigation/application-navigation');
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.pause(250);
    });

    Terra.should.validateElement({ selector: '#root' });
  });

  describe('ApplicationNotifications displays the nav drawer', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-navigation/application-navigation/application-notifications');
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.pause(500);
    });

    Terra.should.validateElement({ selector: '#root' });
  });
});

const viewports = Terra.viewports('small', 'medium', 'large', 'huge', 'enormous');

viewports.forEach((viewport) => {
  describe(`ApplicationNavigation Responsive - ${viewport.name}`, () => {
    before(() => browser.setViewportSize(viewport));

    describe('Standard displays responsively', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-application-navigation/application-navigation/application-navigation');
        browser.pause(50);
      });

      Terra.should.validateElement({ selector: '#root' });
    });

    describe('Notifications displays responsively', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-application-navigation/application-navigation/application-notifications');
        browser.pause(50);
      });

      Terra.should.validateElement({ selector: '#root' });
    });
  });
});
