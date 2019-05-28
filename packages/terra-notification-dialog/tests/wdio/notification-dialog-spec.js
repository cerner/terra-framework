const selector = '#root';

Terra.viewports('tiny', 'medium', 'large').forEach((viewport) => {
  before(() => browser.setViewportSize(viewport));

  describe('Complete notification-dialog title, message and actions', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/complete-notification-dialog');
      browser.click('#trigger-notification-dialog');
    });

    it('focuses on the modal when opened', () => {
      expect(browser.hasFocus('[class*="NotificationDialog-module__actions"] button:first-child')).to.be.equal(true);
    });

    Terra.it.isAccessible({ selector });
    Terra.it.matchesScreenshot({ selector });
  });

  describe('Notification Dialog shifts focus into modal on tab', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/complete-notification-dialog');
      browser.click('#trigger-notification-dialog');
      browser.keys('Tab');

      it('focuses on the close button when tab is pressed', () => {
        expect(browser.hasFocus('[class*="notification-dialog-inner-wrapper"] button:last-child')).to.be.equal(true);
      });
    });

    Terra.it.matchesScreenshot({ selector });
  });

  describe('Notification Dialog traps focus in modal', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/complete-notification-dialog');
      browser.click('#trigger-notification-dialog');
      browser.keys('Tab', 'Tab', 'Tab', 'Tab');
    });

    Terra.it.matchesScreenshot({ selector });
  });

  describe('Success Variant notification-dialog', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-success');
      browser.click('#trigger-notification-dialog');
    });

    Terra.it.isAccessible({ selector });
    Terra.it.matchesScreenshot({ selector });
  });

  describe('Info Variant notification-dialog', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-info');
      browser.click('#trigger-notification-dialog');
    });

    Terra.it.isAccessible({ selector });
    Terra.it.matchesScreenshot({ selector });
  });

  describe('Error Variant notification-dialog', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-error');
      browser.click('#trigger-notification-dialog');
    });

    Terra.it.isAccessible({ selector });
    Terra.it.matchesScreenshot({ selector });
  });

  describe('Warning Variant notification-dialog', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-warning');
      browser.click('#trigger-notification-dialog');
    });

    Terra.it.isAccessible({ selector });
    Terra.it.matchesScreenshot({ selector });
  });

  describe('Complete notification-dialog with a long message', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/complete-notification-dialog-with-long-message');
      browser.click('#trigger-notification-dialog');
    });

    Terra.it.isAccessible({ selector });
    Terra.it.matchesScreenshot({ selector });
  });

  describe('No Variant notification-dialog', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/no-variant-notification-dialog');
      browser.click('#trigger-notification-dialog');
    });

    Terra.it.isAccessible({ selector });
    Terra.it.matchesScreenshot({ selector });
  });

  describe('Notification-dialog with minimal props', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-minimal-props');
      browser.click('#trigger-notification-dialog');
    });

    Terra.it.isAccessible({ selector });
    Terra.it.matchesScreenshot({ selector });
  });

  describe('Notification-dialog with No Title', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-no-title');
      browser.click('#trigger-notification-dialog');
    });

    Terra.it.isAccessible({ selector });
    Terra.it.matchesScreenshot({ selector });
  });

  describe('Notification-dialog with No Message', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-no-message');
      browser.click('#trigger-notification-dialog');
    });

    Terra.it.isAccessible({ selector });
    Terra.it.matchesScreenshot({ selector });
  });
});

describe('NotificationDialog with additional focus trap sources within a modal manager', () => {
  before(() => {
    browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-on-modal-manager');
    browser.setViewportSize(Terra.viewports('medium')[0]);
    browser.click('#disclose-modal');
  });

  it('opens popup', () => {
    browser.click('#popup-in-modal');
  });

  Terra.it.matchesScreenshot('Open popup', { selector: '[class*="abstract-modal"]' });

  it('dismisses popup', () => {
    browser
      .moveToObject('#root', 300, 300)
      .leftClick();
  });

  Terra.it.matchesScreenshot('Close popup', { selector: '[class*="abstract-modal"]' });

  it('opens notification dialog', () => {
    browser.click('#trigger-notification-dialog');
  });

  Terra.it.matchesScreenshot('Open notification dialog', { selector: '[class*="abstract-modal"]' });

  it('dismiss notification dialog', () => {
    browser.click('[class*="notification-dialog-inner-wrapper"] button:last-child');
  });

  Terra.it.matchesScreenshot('Close notification dialog', { selector: '[class*="abstract-modal"]' });
});
