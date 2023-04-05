const selector = '#root';

Terra.describeViewports('ModalManager', ['large'], () => {
  before(() => browser.url('/#/raw/tests/terra-application/modal-manager/navigation-prompt'));

  it('opens the modal', () => {
    $('#root-component .disclose-large').click();
    $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').waitForDisplayed();
    Terra.validates.element('1. root modal', { selector });
  });

  it('marks modal as having a pending action', () => {
    $('[class*="slide-group"] #DemoContainer-1 .pending-action-toggle').click();
  });

  it('displays navigation prompt when attempting to close the modal', () => {
    $('[class*="Modal"] [class*="ActionHeader"] .close-button').click();
    $('[class*="notification-dialog"] [class*="actions"] button:nth-child(2)').waitForDisplayed();
    Terra.validates.element('2. root modal-on close-navigation prompt', { selector });
  });

  it('it rejects the closure and keeps the modal open', () => {
    $('[class*="notification-dialog"] [class*="actions"] button:nth-child(1)').click();
    expect($('[class*="notification-dialog"]').isExisting()).toBe(false);
    $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').waitForDisplayed();
    Terra.validates.element('3. root modal-on close-rejected prompt', { selector });
  });

  it('opens a nested modal', () => {
    $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').click();
    $('[class*="slide-group"] #DemoContainer-2 .disclose-tiny').waitForDisplayed();
    Terra.validates.element('4. nested modal', { selector });
  });

  it('marks modal as having a pending action', () => {
    $('[class*="slide-group"] #DemoContainer-2 .pending-action-toggle').click();
  });

  it('opens a 2nd nested modal', () => {
    $('[class*="slide-group"] #DemoContainer-2 .disclose-tiny').click();
    $('[class*="slide-group"] #DemoContainer-3 .disclose-tiny').waitForDisplayed();
  });

  it('does not display a navigation prompt when attempting to go back to the nested modal', () => {
    $('[class*="Modal"] [class*="ActionHeader"] [data-terra-action-header="back-button"]').click();
    expect($('[class*="notification-dialog"]').isExisting()).toBe(false);
    $('[class*="slide-group"] #DemoContainer-2 .disclose-tiny').waitForDisplayed();
  });

  it('displays a navigation prompt when attempting to go back to the root modal', () => {
    $('[class*="Modal"] [class*="ActionHeader"] [data-terra-action-header="back-button"]').click();
    $('[class*="notification-dialog"] [class*="actions"] button:nth-child(2)').waitForDisplayed();
    Terra.validates.element('5. nested modal-on back-navigation-prompt', { selector });
  });

  it('rejects the closure and keeps the modal open', () => {
    $('[class*="notification-dialog"] [class*="actions"] button:nth-child(1)').click();
    expect($('[class*="notification-dialog"]').isExisting()).toBe(false);
    $('[class*="slide-group"] #DemoContainer-2 .disclose-tiny').waitForDisplayed();
    Terra.validates.element('6. nested modal-on back-rejected prompt', { selector });
  });

  it('displays navigation prompt when attempting to close the modal', () => {
    $('[class*="Modal"] [class*="ActionHeader"] .close-button').click();
    $('[class*="notification-dialog"] [class*="actions"] button:nth-child(1)').waitForDisplayed();
    Terra.validates.element('7. nest modal-on close-navigation prompt', { selector });
  });

  it('accepts the go back and displays the previous modal', () => {
    $('[class*="notification-dialog"] [class*="actions"] button:nth-child(2)').click();
    $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').waitForDisplayed();
  });

  it('keeps the navigation prompt open since the root modal also has a pending action', () => {
    expect($('[class*="notification-dialog"]').isExisting()).toBe(true);
    Terra.validates.element('8. root modal-on close-navigation prompt', { selector });
  });

  it('successfully closes the modal', () => {
    $('[class*="notification-dialog"] [class*="actions"] button:nth-child(2)').click();
    expect($('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').isExisting()).toBe(false);
    Terra.validates.element('9. modal-closed', { selector });
  });

  it('opens the modal with a nested modal', () => {
    $('#root-component .disclose-large').click();
    $('[class*="slide-group"] #DemoContainer-1 .global-close-disclosure').waitForDisplayed();

    $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').click();
    $('[class*="slide-group"] #DemoContainer-2 .global-close-disclosure').waitForDisplayed();

    Terra.validates.element('10. nested modal-reopened', { selector });
  });

  it('dismisses the nested modal using the global close', () => {
    $('[class*="slide-group"] #DemoContainer-2 .global-close-disclosure').click();
    $('[class*="slide-group"] #DemoContainer-1 .global-close-disclosure').waitForDisplayed();
    Terra.validates.element('11. nested modal-global dismiss', { selector });
  });

  it('dismisses the nested modal using the global close', () => {
    $('[class*="slide-group"] #DemoContainer-1 .global-close-disclosure').click();
    Terra.validates.element('12. root modal-global dismiss', { selector });
  });

  it('opens medium modal', () => {
    $('#root-component .disclose-medium').click();
    $('[class*="slide-group"] #DemoContainer-1 .disclose-medium').waitForDisplayed();
  });

  it('renders notification banners in modal', () => {
    $('#toggle-hazard-medium-banner-DemoContainer-1').click();
    $('[data-terra-application-notification-banner="hazard-medium"]').waitForExist();
    $('#toggle-hazard-low-banner-DemoContainer-1').click();
    $('[data-terra-application-notification-banner="hazard-low"]').waitForExist();
    $('#toggle-error-banner-DemoContainer-1').click();
    $('[data-terra-application-notification-banner="error"]').waitForExist();
    Terra.validates.element('14. modal notification banners', { selector });
  });
});

Terra.describeViewports('CustomDismissCheckWorkflow', ['large'], () => {
  before(() => browser.url('/#/raw/tests/terra-application/modal-manager/custom-dismiss-check'));

  it('opens the modal', () => {
    $('#root-component .disclose-large').click();
    $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').waitForDisplayed();
    Terra.validates.element('1. shows modal with custom dismiss check', { selector });
  });

  it('marks modal as having a pending action', () => {
    $('[class*="slide-group"] #DemoContainer-1 .pending-action-toggle').click();
  });

  it('attempts to close modal and fails due to custom dismiss check implementation', () => {
    $('[class*="Modal"] [class*="ActionHeader"] .close-button').click();
    Terra.validates.element('2. modal persists after close attempt', { selector });
  });
});
