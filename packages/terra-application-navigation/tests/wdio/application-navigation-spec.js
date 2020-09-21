Terra.describeViewports('ApplicationNavigation - Large', ['large'], () => {
  describe('Extensions roll up properly', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/extensions'));

    it('launch popup', () => {
      browser.click('[data-application-extension-rollup="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.pause(50);
    });

    Terra.it.validatesElement();
  });

  describe('Tabs roll up properly', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/tabs'));

    it('launch popup', () => {
      browser.waitForVisible('[data-tab-menu-inner="true"]');
      browser.click('[data-tab-menu-inner="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.pause(50);
    });

    Terra.it.validatesElement({ selector: '#root' });
  });

  describe('Utilities should display properly', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/utilities'));

    it('launch popup', () => {
      browser.click('[data-application-header-utility="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.pause(50);
    });

    Terra.it.validatesElement();
  });

  describe('Utilities should display properly when only help, settings or logout utilities are present', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/no-custom-utility-items'));

    it('launch popup', () => {
      browser.click('[data-application-header-utility="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.pause(50);
    });

    Terra.it.validatesElement();
  });

  describe('Utilities should display properly when only custom utility items are specified', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/only-custom-utility-items'));

    it('launch popup', () => {
      browser.click('[data-application-header-utility="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.pause(50);
    });

    Terra.it.validatesElement();
  });

  describe('Hero should display properly', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/hero'));

    it('launch popup', () => {
      browser.click('[data-application-header-utility="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.pause(50);
    });

    Terra.it.validatesElement({ selector: '#root' });
  });

  describe('UserName should display properly', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/user'));

    Terra.it.validatesElement();
  });

  describe('Title should display properly', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/title'));

    Terra.it.validatesElement();
  });

  describe('Utilities should display properly and onSelectSettings called on clicking Settings', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/application-navigation'));

    it('launch popup', () => {
      browser.click('[data-application-header-utility="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.click('[data-navigation-utility-item-settings="true"]');
      browser.pause(50);
    });

    Terra.it.validatesElement();
  });

  describe('Utilities should display properly and onSelectHelp called on clicking Help', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/application-navigation'));

    it('launch popup', () => {
      browser.click('[data-application-header-utility="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.click('[data-navigation-utility-item-help="true"]');
      browser.pause(50);
    });

    Terra.it.validatesElement();
  });

  describe('Utilities should display properly and onSelectLogout called on clicking Logout', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/application-navigation'));

    it('launch popup', () => {
      browser.click('[data-application-header-utility="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.click('[data-navigation-utility-item-logout="true"]');
      browser.pause(50);
    });

    Terra.it.validatesElement();
  });

  describe('Should close open popup when custom event is dispatched', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/application-navigation'));

    it('launch popup', () => {
      browser.click('[data-application-header-utility="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.pause(50);
    });

    Terra.it.validatesElement('1. Popup Open');

    it('close popup', () => {
      browser.execute(() => {
        window.dispatchEvent(new Event('terra-application-navigation.dismiss-menu'));
      })
    });

    Terra.it.validatesElement('2. Popup Closed');
  });
});

Terra.describeViewports('ApplicationNavigation - Small', ['small'], () => {
  describe('Extensions roll up properly', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/extensions'));

    it('launch popup', () => {
      browser.click('[data-application-extension-rollup="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.pause(50);
    });

    Terra.it.validatesElement();
  });

  describe('Tabs enter the nav drawer', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/tabs'));

    it('open drawer', () => {
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.pause(250);
    });

    Terra.it.validatesElement({ selector: '#root' });
  });

  describe('Utilities enter the nav drawer', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/utilities'));

    it('open drawer', () => {
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.pause(250);
    });

    Terra.it.validatesElement({ selector: '#root' });
  });

  describe('Nav drawer button should be displayed when only help, settings or logout utilities are present', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/no-custom-utility-items'));

    it('open drawer', () => {
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.pause(250);
    });

    Terra.it.validatesElement({ selector: '#root' });
  });

  describe('Nav drawer button should be displayed when only custom utility items are specified', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/only-custom-utility-items'));

    it('open drawer', () => {
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.pause(250);
    });

    Terra.it.validatesElement({ selector: '#root' });
  });

  describe('Hero enters the nav drawer', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/hero-drawer'));

    it('open drawer', () => {
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.pause(250);
    });

    Terra.it.validatesElement({ selector: '#root' });
  });

  describe('Hero and User enters the nav drawer', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/hero-and-user'));

    it('open drawer', () => {
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.pause(250);
    });

    Terra.it.validatesElement({ selector: '#root' });
  });

  describe('ApplicationNavigation displays the nav drawer', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/application-navigation'));

    it('open drawer', () => {
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.pause(250);
    });

    Terra.it.validatesElement({ selector: '#root' });
  });

  describe('ApplicationNotifications displays the nav drawer', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/application-notifications'));

    it('open drawer', () => {
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.pause(500);
    });

    Terra.it.validatesElement({ selector: '#root' });
  });

  describe('ApplicationNavigation displays the nav drawer and onDrawerMenuStateChange callback is triggered', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/application-navigation'));

    it('open nav drawer', () => {
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.pause(250);
    });

    Terra.it.validatesElement({ selector: '#root' });
  });

  describe('ApplicationNavigation displays the nav drawer and onSelectSettings triggered', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/application-navigation'));

    it('open nav drawer', () => {
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.click('[data-navigation-drawer-item-settings="true"]');
      browser.pause(250);
    });

    Terra.it.validatesElement({ selector: '#root' });
  });

  describe('ApplicationNavigation displays the nav drawer and onSelectHelp triggered', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/application-navigation'));

    it('open nav drawer', () => {
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.click('[data-navigation-drawer-item-help="true"]');
      browser.pause(250);
    });

    Terra.it.validatesElement({ selector: '#root' });
  });

  describe('ApplicationNavigation displays the nav drawer and onSelectLogout triggered', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/application-navigation'));

    it('open nav drawer', () => {
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.click('[data-navigation-drawer-item-logout="true"]');
      browser.pause(250);
    });

    Terra.it.validatesElement({ selector: '#root' });
  });

  describe('ApplicationNavigation displays the nav drawer and clicking outside closes nav drawer ', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/application-navigation'));

    it('open drawer', () => {
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.moveToObject('[class*="Overlay"]').leftClick();
      browser.pause(250);
    });

    Terra.it.validatesElement({ selector: '#root' });
  });

  describe('ApplicationNavigation should close open drawer when custom event is dispatched', () => {
    before(() => browser.url('/#/raw/tests/terra-application-navigation/application-navigation/application-navigation'));

    it('open drawer', () => {
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.moveToObject('[data-compact-header-toggle="true"]').leftClick();
      browser.pause(250);
    });

    Terra.it.validatesElement('1. Drawer Open', { selector: '#root' });

    it('close drawer', () => {
      browser.execute(() => {
        window.dispatchEvent(new Event('terra-application-navigation.dismiss-menu'));
      })
    });

    Terra.it.validatesElement('2. Drawer Closed', { selector: '#root' });
  });
});

Terra.describeViewports('ApplicationNavigation Responsive', ['small', 'medium', 'large', 'huge', 'enormous'], () => {
  describe('Standard displays responsively', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-application-navigation/application-navigation/application-navigation');
      browser.pause(50);
    });

    Terra.it.validatesElement({ selector: '#root' });
  });

  describe('Notifications displays responsively', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-application-navigation/application-navigation/application-notifications');
      browser.pause(50);
    });

    Terra.it.validatesElement({ selector: '#root' });
  });
});

Terra.describeViewports('ApplicationNavigation', ['large', 'huge', 'enormous'], () => {
  describe('Should open selected item when alert is accepted', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-application-navigation/application-navigation/application-navigation-prompt-focus');
      browser.waitForVisible('[aria-label="Management"]', 5000);
      browser.click('[aria-label="Management"]');
    });

    it('Dismiss alert', () => {
      browser.alertDismiss();
    });

    Terra.it.validatesElement('1. Alert is dismissed');

    it('Accept alert', () => {
      browser.click('[aria-label="Management"]');
      browser.alertAccept();
    });

    Terra.it.validatesElement('2. Alert is accepted');

    it('should focus content after a tab', () => {
      browser.keys('Tab');
    });

    Terra.it.validatesElement('3. Content should have focus');
  });
});
