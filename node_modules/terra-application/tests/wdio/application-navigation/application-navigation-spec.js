const selector = '#root';
const NOTIFICATION_DIALOG_SELECTOR = '[data-terra-notification-dialog]';
const ACCEPT_ACTION_SELECTOR = '[data-terra-notification-dialog-button="accept"]';
const REJECT_ACTION_SELECTOR = '[data-terra-notification-dialog-button="reject"]';

Terra.describeViewports('ApplicationNavigation', ['large'], () => {
  describe('Prompts Enabled', () => {
    before(() => browser.url('/raw/tests/terra-application/application-navigation/application-navigation-test'));

    it('prompts user when selecting primary navigation items', () => {
      $('#pending-action-toggle-1').click();
      $('div[aria-label="Page 2"]').click();

      $(NOTIFICATION_DIALOG_SELECTOR).waitForDisplayed();
      Terra.validates.element('1. primary navigation item prompt', { selector });
    });

    it('rejects prompt on primary navigation', () => {
      $(REJECT_ACTION_SELECTOR).click();
      Terra.validates.element('2. primary navigation item prompt reject', { selector: '[data-nav-test-content="true"]' });
    });

    it('prompts user when selecting primary navigation items and accepts prompt', () => {
      $('div[aria-label="Page 2"]').click();
      $(NOTIFICATION_DIALOG_SELECTOR).waitForDisplayed();
      $(ACCEPT_ACTION_SELECTOR).click();
      Terra.validates.element('3. primary navigation item prompt accept', { selector: '[data-nav-test-content="true"]' });
    });

    it('marks multiple items as pending and attempts to navigate away', () => {
      $('#pending-action-toggle-1').click();
      $('#pending-action-toggle-2').click();
      $('div[aria-label="Page 1"]').click();
      $(NOTIFICATION_DIALOG_SELECTOR).waitForDisplayed();
      Terra.validates.element('4. primary navigation item prompt with multiple prompts', { selector });
    });

    it('accept prompt on primary navigation with multiple prompts', () => {
      $(ACCEPT_ACTION_SELECTOR).click();
    });

    it('prompts user when selecting logout', () => {
      $('#pending-action-toggle-1').click();
      $('[data-application-header-utility="true"]').click();
      $('[data-terra-popup-content="true"]').waitForDisplayed();
      $('[data-terra-popup-content="true"] button').click();

      $(NOTIFICATION_DIALOG_SELECTOR).waitForDisplayed();
      Terra.validates.element('5. logout prompt item prompt', { selector });
    });

    it('reject prompt on logout', () => {
      $(REJECT_ACTION_SELECTOR).click();
      Terra.validates.element('6. logout prompt reject', { selector });
    });

    it('accepts prompt to successfully log out', () => {
      $('[data-application-header-utility="true"]').click();
      $('[data-terra-popup-content="true"]').waitForDisplayed();
      $('[data-terra-popup-content="true"] button').click();

      $(NOTIFICATION_DIALOG_SELECTOR).waitForDisplayed();
      $(ACCEPT_ACTION_SELECTOR).click();
      Terra.validates.element('7. logout prompt accept', { selector });
    });
  });

  describe('Prompts Disabled', () => {
    before(() => browser.url('/raw/tests/terra-application/application-navigation/application-navigation-disabled-prompts-test'));

    it('does not prompt user when selecting primary navigation items', () => {
      $('#pending-action-toggle').click();
      $('div[aria-label="Page 2"]').click();

      Terra.validates.element('1. no prompt for primary navigation items', { selector });
    });

    it('does not prompt user when selecting logout', () => {
      $('#pending-action-toggle').click();
      $('[data-application-header-utility="true"]').click();
      $('[data-terra-popup-content="true"]').waitForDisplayed();
      $('[data-terra-popup-content="true"] button').click();

      Terra.validates.element('2. no prompt for logout', { selector });
    });
  });
});
