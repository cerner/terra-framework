const selector = '#root';

Terra.viewports('tiny', 'medium', 'large').forEach((viewport) => {
  describe('Complete notification-dialog title, message and actions', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/complete-notification-dialog');
      browser.setViewportSize(viewport);
      browser.click('#trigger-notification-dialog');
    });

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
  });

  describe('Success Variant notification-dialog', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-success');
      browser.setViewportSize(viewport);
      browser.click('#trigger-notification-dialog');
    });

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
  });

  describe('Info Variant notification-dialog', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-info');
      browser.setViewportSize(viewport);
      browser.click('#trigger-notification-dialog');
    });

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
  });

  describe('Error Variant notification-dialog', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-error');
      browser.setViewportSize(viewport);
      browser.click('#trigger-notification-dialog');
    });

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
  });

  describe('Warning Variant notification-dialog', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-warning');
      browser.setViewportSize(viewport);
      browser.click('#trigger-notification-dialog');
    });

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
  });

  describe('Complete notification-dialog with a long message', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/complete-notification-dialog-with-long-message');
      browser.setViewportSize(viewport);
      browser.click('#trigger-notification-dialog');
    });

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
  });

  describe('No Variant notification-dialog', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/no-variant-notification-dialog');
      browser.setViewportSize(viewport);
      browser.click('#trigger-notification-dialog');
    });

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
  });

  describe('Notification-dialog with minimal props', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-minimal-props');
      browser.setViewportSize(viewport);
      browser.click('#trigger-notification-dialog');
    });

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
  });

  describe('Notification-dialog with No Title', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-no-title');
      browser.setViewportSize(viewport);
      browser.click('#trigger-notification-dialog');
    });

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
  });

  describe('Notification-dialog with No Message', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/notification-dialog-no-message');
      browser.setViewportSize(viewport);
      browser.click('#trigger-notification-dialog');
    });

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
  });

  describe('Complete notification-dialog with themeable properties', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/complete-notification-dialog');
      browser.setViewportSize(viewport);
      browser.click('#trigger-notification-dialog');
    });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#root',
      properties: {
        '--notification-dialog-background': '#FFFF33',
        '--notification-dialog-body-font-size': '0.15rem',
        '--notification-dialog-body-padding': '2.5rem',
        '--notification-dialog-body-width': '45rem',
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
      browser.setViewportSize(viewport);
      browser.click('#trigger-notification-dialog');
    });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#root',
      properties: {
        '--terra-notification-dialog-alert-icon': '#000',
      },
    });
  });

  describe('Complete notification-dialog with themeable actions', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-notification-dialog/notification-dialog/complete-notification-dialog');
      browser.setViewportSize(viewport);
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
