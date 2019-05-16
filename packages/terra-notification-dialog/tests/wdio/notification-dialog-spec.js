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

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
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

    Terra.should.matchScreenshot({ selector });
  });

  describe('Notification Dialog traps focus in modal', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/complete-notification-dialog');
      browser.click('#trigger-notification-dialog');
      browser.keys('Tab', 'Tab', 'Tab', 'Tab');
    });

    Terra.should.matchScreenshot({ selector });
  });

  describe('Success Variant notification-dialog', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-success');
      browser.click('#trigger-notification-dialog');
    });

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
  });

  describe('Info Variant notification-dialog', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-info');
      browser.click('#trigger-notification-dialog');
    });

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
  });

  describe('Error Variant notification-dialog', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-error');
      browser.click('#trigger-notification-dialog');
    });

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
  });

  describe('Warning Variant notification-dialog', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-warning');
      browser.click('#trigger-notification-dialog');
    });

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
  });

  describe('Complete notification-dialog with a long message', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/complete-notification-dialog-with-long-message');
      browser.click('#trigger-notification-dialog');
    });

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
  });

  describe('No Variant notification-dialog', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/no-variant-notification-dialog');
      browser.click('#trigger-notification-dialog');
    });

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
  });

  describe('Notification-dialog with minimal props', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-minimal-props');
      browser.click('#trigger-notification-dialog');
    });

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
  });

  describe('Notification-dialog with No Title', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-no-title');
      browser.click('#trigger-notification-dialog');
    });

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
  });

  describe('Notification-dialog with No Message', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-no-message');
      browser.click('#trigger-notification-dialog');
    });

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
  });

  describe('Complete notification-dialog with themeable properties', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/complete-notification-dialog');
      browser.click('#trigger-notification-dialog');
    });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#root',
      properties: {
        '--terra-notification-dialog-background': '#FFFF33',
        '--terra-notification-dialog-body-font-size': '0.15rem',
        '--terra-notification-dialog-body-padding': '2.5rem',
        '--terra-notification-dialog-body-width': '45rem',
        '--terra-notification-dialog-title-color': '#c00',
        '--terra-notification-dialog-title-font-size': '3rem',
        '--terra-notification-dialog-message-color': '#c00',
        '--terra-notification-dialog-message-font-size': '2rem',
        '--terra-notification-dialog-message-padding-top': '1rem',
        '--terra-notification-dialog-message-text-align': 'left',
      },
    });
  });

  describe('Complete notification-dialog with themeable icons', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/complete-notification-dialog');
      browser.click('#trigger-notification-dialog');
    });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#root',
      properties: {
        '--terra-notification-dialog-alert-icon-background': '#000',
      },
    });
  });

  describe('Complete notification-dialog with themeable actions', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/complete-notification-dialog');
      browser.click('#trigger-notification-dialog');
    });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#root',
      properties: {
        '--terra-notification-dialog-actions-flex-direction': 'row-reverse',
        '--terra-notification-dialog-footer-padding': '0',
        '--terra-notification-dialog-actions-button-flex': '1',
        '--terra-notification-dialog-actions-button-margin-bottom': '0rem',
        '--terra-notification-dialog-actions-button-margin-left': '0rem',
        '--terra-notification-dialog-actions-button-margin-right': '0rem',
        '--terra-notification-dialog-actions-button-margin-top': '0rem',
      },
    });
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

  Terra.should.matchScreenshot('Open popup', { selector: '[class*="abstract-modal"]' });

  it('dismisses popup', () => {
    browser
      .moveToObject('#root', 300, 300)
      .leftClick();
  });

  Terra.should.matchScreenshot('Close popup', { selector: '[class*="abstract-modal"]' });

  it('opens notification dialog', () => {
    browser.click('#trigger-notification-dialog');
  });

  Terra.should.matchScreenshot('Open notification dialog', { selector: '[class*="abstract-modal"]' });

  it('dismiss notification dialog', () => {
    browser.click('[class*="notification-dialog-inner-wrapper"] button:last-child');
  });

  Terra.should.matchScreenshot('Close notification dialog', { selector: '[class*="abstract-modal"]' });
});
