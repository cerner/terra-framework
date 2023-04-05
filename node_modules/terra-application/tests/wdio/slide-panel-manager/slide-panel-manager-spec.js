const selector = '#root';

Terra.describeViewports('SlidePanelManager', ['large'], () => {
  before(() => browser.url('/#/raw/tests/terra-application/slide-panel-manager/navigation-prompt'));

  it('opens the slide-panel', () => {
    $('#root-component .disclose-large').click();
    $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').waitForDisplayed();
    Terra.validates.element('1. root panel', { selector });
  });

  it('marks panel as having a pending action', () => {
    $('[class*="slide-group"] #DemoContainer-1 .pending-action-toggle').click();
  });

  it('displays navigation prompt when attempting to close the panel', () => {
    $('[class*="SlidePanel"]  [data-terra-action-header="close-button"]').click();
    $('[class*="notification-dialog"] [class*="actions"] button:nth-child(2)').waitForDisplayed();
    Terra.validates.element('2. root panel-on close-navigation prompt', { selector });
  });

  it('it rejects the closure and keeps the panel open', () => {
    $('[class*="notification-dialog"] [class*="actions"] button:nth-child(1)').click();
    expect($('[class*="notification-dialog"]').isExisting()).toBe(false);
    $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').waitForDisplayed();
    Terra.validates.element('3. root panel-on close-rejected prompt', { selector });
  });

  it('opens a nested slide-panel', () => {
    $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').click();
    $('[class*="slide-group"] #DemoContainer-2 .disclose-tiny').waitForDisplayed();
    Terra.validates.element('4. nested panel', { selector });
  });

  it('marks panel as having a pending action', () => {
    $('[class*="slide-group"] #DemoContainer-2 .pending-action-toggle').click();
  });

  it('opens a 2nd nested slide-panel', () => {
    $('[class*="slide-group"] #DemoContainer-2 .disclose-tiny').click();
    $('[class*="slide-group"] #DemoContainer-3 .disclose-tiny').waitForDisplayed();
  });

  it('does not display a navigation prompt when attempting to go back to the nested panel', () => {
    $('[class*="SlidePanel"] [class*="ActionHeader"] [data-terra-action-header="back-button"]').click();
    expect($('[class*="notification-dialog"]').isExisting()).toBe(false);
    $('[class*="slide-group"] #DemoContainer-2 .disclose-tiny').waitForDisplayed();
  });

  it('displays a navigation prompt when attempting to go back to the root panel', () => {
    $('[class*="SlidePanel"] [class*="ActionHeader"] [data-terra-action-header="back-button"]').click();
    $('[class*="notification-dialog"] [class*="actions"] button:nth-child(2)').waitForDisplayed();
    Terra.validates.element('5. nested panel-on back-navigation-prompt', { selector });
  });

  it('rejects the closure and keeps the panel open', () => {
    $('[class*="notification-dialog"] [class*="actions"] button:nth-child(1)').click();
    expect($('[class*="notification-dialog"]').isExisting()).toBe(false);
    $('[class*="slide-group"] #DemoContainer-2 .disclose-tiny').waitForDisplayed();
    Terra.validates.element('6. nested panel-on back-rejected prompt', { selector });
  });

  it('displays navigation prompt when attempting to close the panel', () => {
    $('[class*="SlidePanel"]  [data-terra-action-header="close-button"]').click();
    $('[class*="notification-dialog"] [class*="actions"] button:nth-child(1)').waitForDisplayed();
    Terra.validates.element('7. nest panel-on close-navigation prompt', { selector });
  });

  it('accepts the go back and displays the previous panel', () => {
    $('[class*="notification-dialog"] [class*="actions"] button:nth-child(2)').click();
    $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').waitForDisplayed();
  });

  it('keeps the navigation prompt open since the root panel also has a pending action', () => {
    expect($('[class*="notification-dialog"]').isExisting()).toBe(true);
    Terra.validates.element('8. root panel-on close-navigation prompt', { selector });
  });

  it('successfully closes the panel', () => {
    $('[class*="notification-dialog"] [class*="actions"] button:nth-child(2)').click();
    expect($('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').isExisting()).toBe(false);
    Terra.validates.element('9. panel-closed', { selector });
  });

  it('opens the slide panel with a nested panel', () => {
    $('#root-component .disclose-large').click();
    $('[class*="slide-group"] #DemoContainer-1 .global-close-disclosure').waitForDisplayed();

    $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').click();
    $('[class*="slide-group"] #DemoContainer-2 .global-close-disclosure').waitForDisplayed();

    Terra.validates.element('10. nested panel-reopened', { selector });
  });

  it('dismisses the nested panel using the global close', () => {
    $('[class*="slide-group"] #DemoContainer-2 .global-close-disclosure').click();
    $('[class*="slide-group"] #DemoContainer-1 .global-close-disclosure').waitForDisplayed();
    Terra.validates.element('11. nested panel-global dismiss', { selector });
  });

  it('dismisses the nested panel using the global close', () => {
    $('[class*="slide-group"] #DemoContainer-1 .global-close-disclosure').click();
    Terra.validates.element('12. root panel-global dismiss', { selector });
  });

  it('opens small slide panel', () => {
    $('#root-component .disclose-small').click();
    $('[class*="slide-group"] #DemoContainer-1 .disclose-small').waitForDisplayed();
  });

  it('renders notification banners in slide panel', () => {
    $('#toggle-error-banner-DemoContainer-1').click();
    $('[data-terra-application-notification-banner="error"]').waitForExist();
    $('#toggle-hazard-low-banner-DemoContainer-1').click();
    $('[data-terra-application-notification-banner="hazard-low"]').waitForExist();
    $('#toggle-unverified-banner-DemoContainer-1').click();
    $('[data-terra-application-notification-banner="unverified"]').waitForExist();
    Terra.validates.element('14. slide panel notification banners', { selector });
  });
});

Terra.describeViewports('CustomDismissCheckWorkflow', ['large'], () => {
  before(() => browser.url('/#/raw/tests/terra-application/slide-panel-manager/custom-dismiss-check'));

  it('opens the slide-panel', () => {
    $('#root-component .disclose-large').click();
    $('[class*="slide-group"] #DemoContainer-1 .disclose-tiny').waitForDisplayed();
    Terra.validates.element('1. root panel', { selector });
  });

  it('marks panel as having a pending action', () => {
    $('[class*="slide-group"] #DemoContainer-1 .pending-action-toggle').click();
  });

  it('attempts to close panel and fails due to custom dismiss check implementation', () => {
    $('[class*="SlidePanel"]  [data-terra-action-header="close-button"]').click();
    Terra.validates.element('2. panel persists after close attempt', { selector });
  });
});
