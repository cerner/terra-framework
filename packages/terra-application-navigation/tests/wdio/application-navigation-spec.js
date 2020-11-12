Terra.describeViewports('ApplicationNavigation - Large', ['large'], () => {
  describe('Extensions roll up properly', () => {
    it('launch popup', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/extensions');
      browser.click('[data-application-extension-rollup="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.pause(50);
      Terra.validates.element('default');
    });
  });

  describe('Tabs roll up properly', () => {
    it('launch popup', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/tabs');
      browser.waitForVisible('[data-tab-menu-inner="true"]');
      browser.click('[data-tab-menu-inner="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.pause(50);
      Terra.validates.element('default', { selector: '#root' });
    });
  });

  describe('Utilities should display properly', () => {
    it('launch popup', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/utilities');
      browser.click('[data-application-header-utility="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.pause(50);
      Terra.validates.element('default');
    });
  });

  describe('Utilities should display properly when only help, settings or logout utilities are present', () => {
    before(() => browser.url('/raw/tests/terra-application-navigation/application-navigation/no-custom-utility-items'));
    it('launch popup', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/no-custom-utility-items');
      browser.click('[data-application-header-utility="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.pause(50);
      Terra.validates.element('default');
    });
  });

  describe('Utilities should display properly when only custom utility items are specified', () => {
    it('launch popup', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/only-custom-utility-items');
      browser.click('[data-application-header-utility="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.pause(50);
      Terra.validates.element('default');
    });
  });

  describe('Hero should display properly', () => {
    it('launch popup', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/hero');
      browser.click('[data-application-header-utility="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.pause(50);
      Terra.validates.element('default', { selector: '#root' });
    });
  });

  it('should display username properly', () => {
    browser.url('/raw/tests/terra-application-navigation/application-navigation/user');
    Terra.validates.element('display username');
  });

  it('should display title properly', () => {
    browser.url('/raw/tests/terra-application-navigation/application-navigation/title');
    Terra.validates.element('display title');
  });

  describe('Utilities should display properly and onSelectSettings called on clicking Settings', () => {
    it('launch popup', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/application-navigation');
      browser.click('[data-application-header-utility="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.click('[data-navigation-utility-item-settings="true"]');
      browser.pause(50);
      Terra.validates.element('default');
    });
  });

  describe('Utilities should display properly and onSelectHelp called on clicking Help', () => {
    it('launch popup', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/application-navigation');
      browser.click('[data-application-header-utility="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.click('[data-navigation-utility-item-help="true"]');
      browser.pause(50);
      Terra.validates.element('default');
    });
  });

  describe('Utilities should display properly and onSelectLogout called on clicking Logout', () => {
    it('launch popup', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/application-navigation');
      browser.click('[data-application-header-utility="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.click('[data-navigation-utility-item-logout="true"]');
      browser.pause(50);
      Terra.validates.element('default');
    });
  });

  describe('Should close open popup when custom event is dispatched', () => {
    it('launch popup', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/application-navigation');
      browser.click('[data-application-header-utility="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      Terra.validates.element('1. Popup Open');
    });

    it('close popup', () => {
      // eslint-disable-next-line prefer-arrow-callback
      browser.execute(function dispatch() {
        const event = document.createEvent('Event');
        event.initEvent('terra-application-navigation.dismiss-menu', true, true);
        window.dispatchEvent(event);
      });
      Terra.validates.element('2. Popup Closed');
    });
  });
});

Terra.describeViewports('ApplicationNavigation - Small', ['small'], () => {
  describe('Extensions roll up properly', () => {
    it('launch popup', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/extensions');
      browser.click('[data-application-extension-rollup="true"]');
      browser.waitForVisible('[data-terra-popup-content="true"]');
      browser.pause(50);
      Terra.validates.element('default');
    });
  });

  describe('Tabs enter the nav drawer', () => {
    it('open drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/tabs');
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.pause(250);
      Terra.validates.element('default', { selector: '#root' });
    });
  });

  describe('Utilities enter the nav drawer', () => {
    it('open drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/utilities');
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.pause(250);
      Terra.validates.element('default', { selector: '#root' });
    });
  });

  describe('Nav drawer button should be displayed when only help, settings or logout utilities are present', () => {
    it('open drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/no-custom-utility-items');
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.pause(250);
      Terra.validates.element('default', { selector: '#root' });
    });
  });

  describe('Nav drawer button should be displayed when only custom utility items are specified', () => {
    it('open drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/only-custom-utility-items');
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.pause(250);
      Terra.validates.element('default', { selector: '#root' });
    });
  });

  describe('Hero enters the nav drawer', () => {
    it('open drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/hero-drawer');
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.pause(250);
      Terra.validates.element('default', { selector: '#root' });
    });
  });

  describe('Hero and User enters the nav drawer', () => {
    it('open drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/hero-and-user');
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.pause(250);
      Terra.validates.element('default', { selector: '#root' });
    });
  });

  describe('ApplicationNavigation displays the nav drawer', () => {
    it('open drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/application-navigation');
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.pause(250);
      Terra.validates.element('default', { selector: '#root' });
    });
  });

  describe('ApplicationNotifications displays the nav drawer', () => {
    it('open drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/application-notifications');
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.pause(500);
      Terra.validates.element('default', { selector: '#root' });
    });
  });

  describe('ApplicationNavigation displays the nav drawer and onDrawerMenuStateChange callback is triggered', () => {
    it('open nav drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/application-navigation');
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.pause(250);
      Terra.validates.element('default', { selector: '#root' });
    });
  });

  describe('ApplicationNavigation displays the nav drawer and onSelectSettings triggered', () => {
    it('open nav drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/application-navigation');
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.click('[data-navigation-drawer-item-settings="true"]');
      browser.pause(250);
      Terra.validates.element('default', { selector: '#root' });
    });
  });

  describe('ApplicationNavigation displays the nav drawer and onSelectHelp triggered', () => {
    it('open nav drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/application-navigation');
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.click('[data-navigation-drawer-item-help="true"]');
      browser.pause(250);
      Terra.validates.element('default', { selector: '#root' });
    });
  });

  describe('ApplicationNavigation displays the nav drawer and onSelectLogout triggered', () => {
    it('open nav drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/application-navigation');
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.click('[data-navigation-drawer-item-logout="true"]');
      browser.pause(250);
      Terra.validates.element('default', { selector: '#root' });
    });
  });

  describe('ApplicationNavigation displays the nav drawer and clicking outside closes nav drawer ', () => {
    it('open drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/application-navigation');
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.click('[data-compact-header-toggle="true"]');
      browser.moveToObject('[class*="Overlay"]').leftClick();
      browser.pause(250);
      Terra.validates.element('default', { selector: '#root' });
    });
  });

  describe('ApplicationNavigation should close open drawer when custom event is dispatched', () => {
    it('open drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/application-navigation');
      browser.waitForVisible('[data-compact-header-toggle="true"]');
      browser.moveToObject('[data-compact-header-toggle="true"]').leftClick();
      Terra.validates.element('1. Drawer Open', { selector: '#root' });
    });

    it('close drawer', () => {
      // eslint-disable-next-line prefer-arrow-callback
      browser.execute(function dispatch() {
        const event = document.createEvent('Event');
        event.initEvent('terra-application-navigation.dismiss-menu', true, true);
        window.dispatchEvent(event);
      });
      Terra.validates.element('2. Drawer Closed', { selector: '#root' });
    });
  });
});

Terra.describeViewports('ApplicationNavigation Responsive', ['small', 'medium', 'large', 'huge', 'enormous'], () => {
  it('should display standard responsively', () => {
    browser.url('/raw/tests/terra-application-navigation/application-navigation/application-navigation');
    browser.pause(50);
    Terra.validates.element('standard', { selector: '#root' });
  });

  it('should display notifications responsively', () => {
    browser.url('/raw/tests/terra-application-navigation/application-navigation/application-notifications');
    browser.pause(50);
    Terra.validates.element('notifications', { selector: '#root' });
  });
});

Terra.describeViewports('ApplicationNavigation', ['large', 'huge', 'enormous'], () => {
  describe('Should open selected item when alert is accepted', () => {
    it('Dismiss alert', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/application-navigation-prompt-focus');
      browser.waitForVisible('[aria-label="Management"]', 5000);
      browser.click('[aria-label="Management"]');
      browser.alertDismiss();
      Terra.validates.element('1. Alert is dismissed');
    });

    it('Accept alert', () => {
      browser.click('[aria-label="Management"]');
      browser.alertAccept();
      Terra.validates.element('2. Alert is accepted');
    });

    it('should focus content after a tab', () => {
      browser.keys('Tab');
      Terra.validates.element('3. Content should have focus');
    });
  });
});
