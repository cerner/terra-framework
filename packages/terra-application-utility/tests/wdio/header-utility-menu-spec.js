describe('HeaderUtilityMenu', () => {
  beforeEach(() => {
    browser.url('/#/raw/tests/terra-application-utility/application-utility/default-header-utility-menu');
    browser.waitForVisible('#default');
  });

  describe('Displays a default header utility menu', () => {
    Terra.should.matchScreenshot({ selector: '#default' });
    Terra.should.beAccessible({ context: '#default' });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#default',
      properties: {
        '--terra-application-utility-header-type-menu-header-font-size': '2rem',
        '--terra-application-utility-header-type-menu-header-font-weight': 'normal',
        '--terra-application-utility-header-type-menu-header-line-height': '1.2',
        '--terra-application-utility-header-type-menu-header-margin-bottom': '1rem',
        '--terra-application-utility-header-type-menu-header-margin-top': '1rem',
        '--terra-application-utility-header-type-menu-initial-page-header-text-margin-left': '1rem',
        '--terra-application-utility-header-type-menu-noninitial-page-header-text-margin-left': '1rem',
        '--terra-application-utility-header-type-menu-back-width': '2rem',
        '--terra-application-utility-header-body-item-background-color': 'pink',
        '--terra-application-utility-header-body-item-font-color': 'pink',
        '--terra-application-utility-header-body-item-font-size': '2rem',
        '--terra-application-utility-header-body-item-margin-bottom': '1rem',
        '--terra-application-utility-header-body-item-margin-top': '1rem',
        '--terra-application-utility-header-body-item-padding-bottom': '1rem',
        '--terra-application-utility-header-body-item-padding-left': '1rem',
        '--terra-application-utility-header-body-item-padding-top': '1rem',
        '--terra-application-utility-header-body-item-margin-left': '1rem',
        '--terra-application-utility-header-body-item-margin-right': '1rem',
        '--terra-application-utility-header-body-item-checkmark-margin-left': '1rem',
        '--terra-application-utility-header-body-item-checkmark-margin-right': '1rem',
        '--terra-application-utility-header-body-item-checkmark-width': '1rem',
        '--terra-application-utility-header-body-item-chevron-margin-right': '1rem',
        '--terra-application-utility-header-body-item-chevron-width': '1rem',
        '--terra-application-utility-header-footer-item-background-color': 'blue',
        '--terra-application-utility-header-footer-item-font-color': 'pink',
        '--terra-application-utility-header-footer-item-font-size': '2rem',
        '--terra-application-utility-header-footer-item-margin-bottom': '1rem',
        '--terra-application-utility-header-footer-item-margin-left': '1rem',
        '--terra-application-utility-header-footer-item-margin-right': '1rem',
      },
    });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed-fonts',
      properties: {
        '--terra-application-utility-header-type-menu-header-font-size': '1.5rem',
        '--terra-application-utility-header-type-menu-header-font-weight': 'normal',
        '--terra-application-utility-header-body-item-font-color': 'red',
        '--terra-application-utility-header-body-item-font-size': '1.5rem',
        '--terra-application-utility-header-footer-item-font-color': 'red',
        '--terra-application-utility-header-footer-item-font-size': '1.5rem',
      },
    });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed-padding',
      properties: {
        '--terra-application-utility-header-body-item-padding-bottom': '1rem',
        '--terra-application-utility-header-body-item-padding-left': '1rem',
        '--terra-application-utility-header-body-item-padding-top': '1rem',
      },
    });
  });

  describe('Hover-header utility menu', () => {
    beforeEach(() => {
      browser.waitForVisible('#test-item-2');
      browser.moveToObject('#test-item-2');
    });

    Terra.should.matchScreenshot({ selector: '#default' });
    Terra.should.beAccessible({ context: '#default' });
    Terra.should.themeEachCustomProperty('#default', {
      '--terra-application-utility-header-menu-body-item-hover-background-color': 'blue',
    });
  });

  describe('Focus-header utility menu', () => {
    beforeEach(() => {
      browser.keys(['Tab', 'Tab', 'Tab']);
    });

    Terra.should.matchScreenshot({ selector: '#default' });
    Terra.should.beAccessible({ context: '#default' });
    Terra.should.themeEachCustomProperty('#default', {
      '--terra-application-utility-header-menu-body-item-focus-box-shadow': '0 0 3px 3px rgba(50, 50, 233, 0.5), 0 0 4px 4px rgba(50, 50, 233, 0.35)',
    });
  });
});
