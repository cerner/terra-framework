const selector = '#root';

Terra.describeViewports('notification-dialog', ['tiny', 'medium', 'large'], () => {
  afterEach(() => browser.click('[class*="NotificationDialog-module__actions"] button:last-child'));
  describe('Complete notification-dialog title, message and actions', () => {
    it('focuses on the modal when opened', () => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/complete-notification-dialog');
      browser.click('#trigger-notification-dialog');

      expect(browser.hasFocus('[class*="NotificationDialog-module__actions"] button:first-child')).to.be.equal(true);

      Terra.validates.element({ selector });
    });
  });

  describe('Notification Dialog shifts focus into modal on tab', () => {
    it('focuses on the close button when tab is pressed', () => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/complete-notification-dialog');
      browser.click('#trigger-notification-dialog');
      browser.keys('Tab');
      expect(browser.hasFocus('[class*="notification-dialog-inner-wrapper"] button:last-child')).to.be.equal(true);
      Terra.validates.element({ selector });
    });
  });

  describe('Notification Dialog traps focus in modal', () => {
    it('Notification Dialog traps focus in modal', () => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/complete-notification-dialog');
      browser.click('#trigger-notification-dialog');
      browser.keys('Tab', 'Tab', 'Tab', 'Tab');
      Terra.validates.element({ selector });
    });
  });

  describe('Success Variant notification-dialog', () => {
    it('Success Variant notification-dialog', () => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-success');
      browser.click('#trigger-notification-dialog');
      Terra.validates.element({ selector });
    });
  });

  describe('Info Variant notification-dialog', () => {
    it('Info Variant notification-dialog', () => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-info');
      browser.click('#trigger-notification-dialog');
      Terra.validates.element({ selector });
    });
  });

  describe('Error Variant notification-dialog', () => {
    it('Error Variant notification-dialog', () => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-error');
      browser.click('#trigger-notification-dialog');
      Terra.validates.element({ selector });
    });
  });

  describe('Warning Variant notification-dialog', () => {
    it('Warning Variant notification-dialog', () => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-warning');
      browser.click('#trigger-notification-dialog');
      Terra.validates.element({ selector });
    });
  });

  describe('Complete notification-dialog with a long message', () => {
    it('Complete notification-dialog with a long message', () => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/complete-notification-dialog-with-long-message');
      browser.click('#trigger-notification-dialog');
      Terra.validates.element({ selector });
    });
  });

  describe('No Variant notification-dialog', () => {
    it('No Variant notification-dialog', () => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/no-variant-notification-dialog');
      browser.click('#trigger-notification-dialog');
      Terra.validates.element({ selector });
    });
  });

  describe('Notification-dialog with minimal props', () => {
    it('Notification-dialog with minimal props', () => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-minimal-props');
      browser.click('#trigger-notification-dialog');
      Terra.validates.element({ selector });
    });
  });

  describe('Notification-dialog with No Title', () => {
    it('Notification-dialog with No Title', () => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-no-title');
      browser.click('#trigger-notification-dialog');
      Terra.validates.element({ selector });
    });
  });

  describe('Notification-dialog with No Message', () => {
    it('Notification-dialog with No Message', () => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-no-message');
      browser.click('#trigger-notification-dialog');
      Terra.validates.element({ selector });
    });
  });

  describe('Notification-dialog with Content', () => {
    it('Notification-dialog with Content', () => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/content-notification-dialog');
      browser.click('#trigger-notification-dialog');
      Terra.validates.element({ selector });
    });
  });

  describe('Notification-dialog with emphasized reject action', () => {
    it('Notification-dialog with emphasized reject action', () => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/emphasized-reject-notification-dialog');
      browser.click('#trigger-notification-dialog');
      Terra.validates.element({ selector });
    });
  });
});

Terra.describeViewports('notification-dialog', ['tiny', 'medium', 'large'], () => {
  afterEach(() => browser.click('[class*="NotificationDialog-module__actions"] button:first-child'));

  describe('Notification-dialog with Reversed Actions', () => {
    it('Notification-dialog with Reversed Actions', () => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/reversed-action-notification-dialog');
      browser.click('#trigger-notification-dialog');
      Terra.validates.element({ selector });
    });
  });
});

Terra.describeViewports('NotificationDialog with additional focus trap sources within a modal manager', ['medium'], () => {
  it('opens popup', () => {
    browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-on-modal-manager');
    browser.click('#disclose-modal');
    browser.click('#popup-in-modal');

    // Skip color contrast check for elements behind an overlay
    const ignoredA11y = {
      'color-contrast': {
        enabled: false,
        selector: '[class*="overlay"]',
      },
    };

    Terra.validates.element('Open popup', { selector: '[class*="abstract-modal"]', axeRules: ignoredA11y });

    // it dismisses popup
    browser
      .moveToObject('#root', 300, 300)
      .leftClick();

    Terra.validates.element('Close popup', { selector: '[class*="abstract-modal"]' });

    // it opens notification dialog
    browser.click('#trigger-notification-dialog');
    Terra.validates.element('Open notification dialog', { selector: '[class*="abstract-modal"]', axeRules: ignoredA11y });

    // it dismiss notification dialog
    browser.click('[class*="notification-dialog-inner-wrapper"] button:last-child');

    Terra.validates.element('Close notification dialog', { selector: '[class*="abstract-modal"]' });
  });
});
