/* global $ */
Terra.describeViewports('ApplicationNavigation - Large', ['large'], () => {
  describe('Extensions roll up properly', () => {
    it('launch popup', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/extensions');
      $('[data-application-extension-rollup="true"]').click();
      $('[data-terra-popup-content="true"]').waitForDisplayed();
      browser.pause(50);
      Terra.validates.element('extensions roll up properly');
    });
  });

  describe('Tabs roll up properly', () => {
    it('launch popup', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/tabs');
      $('[data-tab-menu-inner="true"]').waitForDisplayed();
      $('[data-tab-menu-inner="true"]').click();
      $('[data-terra-popup-content="true"]').waitForDisplayed();
      browser.pause(50);
      Terra.validates.element('tabs roll up properly', { selector: '#root' });
    });
  });

  describe('Utilities should display properly', () => {
    it('launch popup', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/utilities');
      $('[data-application-header-utility="true"]').click();
      $('[data-terra-popup-content="true"]').waitForDisplayed();
      browser.pause(50);
      Terra.validates.element('utilities display properly');
    });
  });

  describe('Utilities should display properly when only help, settings or logout utilities are present', () => {
    it('launch popup', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/no-custom-utility-items');
      $('[data-application-header-utility="true"]').click();
      $('[data-terra-popup-content="true"]').waitForDisplayed();
      browser.pause(50);
      Terra.validates.element('utilities display properly when settings present');
    });
  });

  describe('Utilities should display properly when only custom utility items are specified', () => {
    it('launch popup', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/only-custom-utility-items');
      $('[data-application-header-utility="true"]').click();
      $('[data-terra-popup-content="true"]').waitForDisplayed();
      browser.pause(50);
      Terra.validates.element('utilities display properly when custom utility items present');
    });
  });

  describe('Hero should display properly', () => {
    it('launch popup', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/hero');
      $('[data-application-header-utility="true"]').click();
      $('[data-terra-popup-content="true"]').waitForDisplayed();
      browser.pause(50);
      Terra.validates.element('hero displays properly', { selector: '#root' });
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
      $('[data-application-header-utility="true"]').click();
      $('[data-terra-popup-content="true"]').waitForDisplayed();
      $('[data-navigation-utility-item-settings="true"]').click();
      browser.pause(50);
      Terra.validates.element('utilities display properly and onSelectSettings called on clicking settings');
    });
  });

  describe('Utilities should display properly and onSelectHelp called on clicking Help', () => {
    it('launch popup', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/application-navigation');
      $('[data-application-header-utility="true"]').click();
      $('[data-terra-popup-content="true"]').waitForDisplayed();
      $('[data-navigation-utility-item-help="true"]').click();
      browser.pause(50);
      Terra.validates.element('utilities display properly and onSelectHelp called on clicking help');
    });
  });

  describe('Utilities should display properly and onSelectLogout called on clicking Logout', () => {
    it('launch popup', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/application-navigation');
      $('[data-application-header-utility="true"]').click();
      $('[data-terra-popup-content="true"]').waitForDisplayed();
      $('[data-navigation-utility-item-logout="true"]').click();
      browser.pause(50);
      Terra.validates.element('utilities display properly and onSelectLogout called on clicking logout');
    });
  });

  describe('Should close open popup when custom event is dispatched', () => {
    it('launch popup', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/application-navigation');
      $('[data-application-header-utility="true"]').click();
      $('[data-terra-popup-content="true"]').waitForDisplayed();
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
      $('[data-application-extension-rollup="true"]').click();
      $('[data-terra-popup-content="true"]').waitForDisplayed();
      browser.pause(50);
      Terra.validates.element('extensions roll up properly');
    });
  });

  describe('Tabs enter the nav drawer', () => {
    it('open drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/tabs');
      $('[data-compact-header-toggle="true"]').waitForDisplayed();
      $('[data-compact-header-toggle="true"]').click();
      browser.pause(250);
      Terra.validates.element('tabs enter the nav drawer', { selector: '#root' });
    });
  });

  describe('Utilities enter the nav drawer', () => {
    it('open drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/utilities');
      $('[data-compact-header-toggle="true"]').waitForDisplayed();
      $('[data-compact-header-toggle="true"]').click();
      browser.pause(250);
      Terra.validates.element('utilities enter the nav drawer', { selector: '#root' });
    });
  });

  describe('Nav drawer button should be displayed when only help, settings or logout utilities are present', () => {
    it('open drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/no-custom-utility-items');
      $('[data-compact-header-toggle="true"]').waitForDisplayed();
      $('[data-compact-header-toggle="true"]').click();
      browser.pause(250);
      Terra.validates.element('nav drawer button displays when settings present', { selector: '#root' });
    });
  });

  describe('Nav drawer button should be displayed when only custom utility items are specified', () => {
    it('open drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/only-custom-utility-items');
      $('[data-compact-header-toggle="true"]').waitForDisplayed();
      $('[data-compact-header-toggle="true"]').click();
      browser.pause(250);
      Terra.validates.element('nav drawer button displays when custom utility items specified', { selector: '#root' });
    });
  });

  describe('Hero enters the nav drawer', () => {
    it('open drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/hero-drawer');
      $('[data-compact-header-toggle="true"]').waitForDisplayed();
      $('[data-compact-header-toggle="true"]').click();
      browser.pause(250);
      Terra.validates.element('hero enters the nav drawer', { selector: '#root' });
    });
  });

  describe('Hero and User enters the nav drawer', () => {
    it('open drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/hero-and-user');
      $('[data-compact-header-toggle="true"]').waitForDisplayed();
      $('[data-compact-header-toggle="true"]').click();
      browser.pause(250);
      Terra.validates.element('hero and user enters nav drawer', { selector: '#root' });
    });
  });

  describe('ApplicationNavigation displays the nav drawer', () => {
    it('open drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/application-navigation');
      $('[data-compact-header-toggle="true"]').waitForDisplayed();
      $('[data-compact-header-toggle="true"]').click();
      browser.pause(250);
      Terra.validates.element('ApplicationNavigation displays nav drawer', { selector: '#root' });
    });
  });

  describe('ApplicationNotifications displays the nav drawer', () => {
    it('open drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/application-notifications');
      $('[data-compact-header-toggle="true"]').waitForDisplayed();
      $('[data-compact-header-toggle="true"]').click();
      browser.pause(500);
      Terra.validates.element('ApplicationNotifications displays nav drawer', { selector: '#root' });
    });
  });

  describe('ApplicationNavigation displays the nav drawer and onDrawerMenuStateChange callback is triggered', () => {
    it('open nav drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/application-navigation');
      $('[data-compact-header-toggle="true"]').waitForDisplayed();
      $('[data-compact-header-toggle="true"]').click();
      browser.pause(250);
      Terra.validates.element('ApplicationNavigation displays nav drawer and onDrawerMenuStateChange callback triggered', { selector: '#root' });
    });
  });

  describe('ApplicationNavigation displays the nav drawer and onSelectSettings triggered', () => {
    it('open nav drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/application-navigation');
      $('[data-compact-header-toggle="true"]').waitForDisplayed();
      $('[data-compact-header-toggle="true"]').click();
      $('[data-navigation-drawer-item-settings="true"]').click();
      browser.pause(250);
      Terra.validates.element('ApplicationNavigation displays nav drawer and onSelectSettings triggered', { selector: '#root' });
    });
  });

  describe('ApplicationNavigation displays the nav drawer and onSelectHelp triggered', () => {
    it('open nav drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/application-navigation');
      $('[data-compact-header-toggle="true"]').waitForDisplayed();
      $('[data-compact-header-toggle="true"]').click();
      $('[data-navigation-drawer-item-help="true"]').click();
      browser.pause(250);
      Terra.validates.element('ApplicationNavigation displays the nav drawer and onSelectHelp triggered', { selector: '#root' });
    });
  });

  describe('ApplicationNavigation displays the nav drawer and onSelectLogout triggered', () => {
    it('open nav drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/application-navigation');
      $('[data-compact-header-toggle="true"]').waitForDisplayed();
      $('[data-compact-header-toggle="true"]').click();
      $('[data-navigation-drawer-item-logout="true"]').click();
      browser.pause(250);
      Terra.validates.element('ApplicationNavigation displays nav drawer and onSelectLogout triggered', { selector: '#root' });
    });
  });

  describe('ApplicationNavigation displays the nav drawer and clicking outside closes nav drawer', () => {
    it('open drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/application-navigation');
      $('[data-compact-header-toggle="true"]').waitForDisplayed();
      $('[data-compact-header-toggle="true"]').click();
      $('[class*="Overlay"]').click({ button: 'left' });
      browser.pause(250);
      Terra.validates.element('ApplicationNavigation displays nav drawer and clicking outside closes nav drawer', { selector: '#root' });
    });
  });

  describe('ApplicationNavigation should close open drawer when custom event is dispatched', () => {
    it('open drawer', () => {
      browser.url('/raw/tests/terra-application-navigation/application-navigation/application-navigation');
      $('[data-compact-header-toggle="true"]').waitForDisplayed();
      $('[data-compact-header-toggle="true"]').click({ button: 'left' });
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
      $('[aria-label="Management"]').waitForDisplayed({ timeout: 5000 });
      $('[aria-label="Management"]').click();
      browser.dismissAlert();
      Terra.validates.element('1. Alert is dismissed');
    });

    it('Accept alert', () => {
      $('[aria-label="Management"]').click();
      browser.acceptAlert();
      Terra.validates.element('2. Alert is accepted');
    });

    it('should focus content after a tab', () => {
      browser.keys('Tab');
      Terra.validates.element('3. Content should have focus');
    });
  });
});
