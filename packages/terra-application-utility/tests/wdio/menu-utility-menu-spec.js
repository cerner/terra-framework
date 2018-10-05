describe('MenuUtilityMenu', () => {
  beforeEach(() => {
    browser.url('/#/raw/tests/terra-application-utility/application-utility/default-menu-utility-menu');
    browser.waitForVisible('#default');
  });

  describe('Displays a default menu utility menu', () => {
    Terra.should.matchScreenshot({ selector: '#default' });
    Terra.should.beAccessible({ context: '#default' });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#default',
      properties: {
        '--terra-application-menu-utility-menu-header-font-size': '2rem',
        '--terra-application-menu-utility-menu-header-font-weight': 'normal',
        '--terra-application-menu-utility-menu-header-line-height': '1.2',
        '--terra-application-menu-utility-menu-margin-bottom': '1rem',
        '--terra-application-menu-utility-menu-margin-top': '1rem',
        '--terra-application-menu-utility-menu-initial-page-header-text-margin-left': '1rem',
        '--terra-application-menu-utility-menu-noninitial-page-header-text-margin-left': '1rem',
        '--terra-application-utility-menu-divider-border-top': '5px dashed pink',
        '--terra-application-utility-menu-divider-height': '1rem',
        '--terra-application-utility-menu-divider-margin-top': '10px',
        '--terra-application-utility-menu-divider-border-after-top': '5px dashed pink',
        '--terra-application-utility-menu-divider-after-height': '1rem',
        '--terra-application-utility-menu-divider-after-margin-top': '10px',
        '--terra-application-menu-utility-menu-chevron-height': '2rem',
        '--terra-application-menu-utility-menu-chevron-width': '2rem',
        '--terra-application-menu-utility-menu-body-item-background-color': 'pink',
        '--terra-application-menu-utility-menu-body-item-font-color': 'pink',
        '--terra-application-menu-utility-menu-body-item-font-size': '2rem',
        '--terra-application-menu-utility-menu-body-item-margin-bottom': '1rem',
        '--terra-application-menu-utility-menu-body-item-margin-top': '1rem',
        '--terra-application-menu-utility-menu-body-item-padding-bottom': '1rem',
        '--terra-application-menu-utility-menu-body-item-padding-left': '1rem',
        '--terra-application-menu-utility-menu-body-item-padding-top': '1rem',
        '--terra-application-menu-utility-menu-body-item-margin-left': '1rem',
        '--terra-application-menu-utility-menu-body-item-margin-right': '1rem',
        '--terra-application-menu-utility-menu-body-item-checkmark-margin-left': '1rem',
        '--terra-application-menu-utility-menu-body-item-checkmark-margin-right': '1rem',
        '--terra-application-menu-utility-menu-body-item-chevron-margin-right': '1rem',
        '--terra-application-menu-utility-menu-body-item-checkmark-width': '1rem',
        '--terra-application-menu-utility-menu-body-item-chevron-width': '1rem',
        '--terra-application-menu-utility-menu-footer-item-background-color': 'blue',
        '--terra-application-menu-utility-menu-footer-item-border-radius': '1rem',
        '--terra-application-menu-utility-menu-footer-item-font-color': 'pink',
        '--terra-application-menu-utility-menu-footer-item-font-size': '2rem',
        '--terra-application-menu-utility-menu-footer-item-height': '1rem',
        '--terra-application-menu-utility-menu-footer-item-margin-bottom': '1rem',
        '--terra-application-menu-utility-menu-footer-item-margin-left': '1rem',
        '--terra-application-menu-utility-menu-footer-item-margin-right': '1rem',
      },
    });
  });

  describe('Hover-menu utility menu', () => {
    beforeEach(() => {
      browser.waitForVisible('#test-item-2');
      browser.moveToObject('#test-item-2');
    });

    Terra.should.matchScreenshot({ selector: '#default' });
    Terra.should.beAccessible({ context: '#default' });
    Terra.should.themeEachCustomProperty('#default', {
      '--terra-application-menu-utility-menu-body-item-hover-background-color': 'blue',
    });
  });

  describe('Focus-menu utility menu', () => {
    beforeEach(() => {
      browser.keys(['Tab', 'Tab', 'Tab']);
    });

    Terra.should.matchScreenshot({ selector: '#default' });
    Terra.should.beAccessible({ context: '#default' });
    Terra.should.themeEachCustomProperty('#default', {
      '--terra-application-menu-utility-menu-body-item-focus-box-shadow': '0 0 3px 3px rgba(50, 50, 233, 0.5), 0 0 4px 4px rgba(50, 50, 233, 0.35)',
    });
  });
});
