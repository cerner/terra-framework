/* global browser, Terra */

const viewports = Terra.viewports('tiny', 'medium');

describe('ApplicationHeaderUtility', () => {
  beforeEach(() => {
    browser.url('/#/raw/tests/application-utility/default-application-header-utility');
    browser.waitForVisible('#default');
  });

  describe('Displays a default application header utility', () => {
    Terra.should.matchScreenshot({ viewports, selector: '#default' });
    Terra.should.beAccessible({ viewports, context: '#default' });
    Terra.should.themeEachCustomProperty('#default', {
      '--terra-application-header-utility-background-color': 'blue',
      '--terra-application-header-utility-border-radius': '6px',
      '--terra-application-header-utility-border-width': '10px',
      '--terra-application-header-utility-color': 'purple',
      '--terra-application-header-utility-padding-left': '20px',
      '--terra-application-header-utility-padding-right': '20px',
      '--terra-application-header-utility-icon-min-width': '15px',
      '--terra-application-header-utility-accessory-height': '2rem',
      '--terra-application-header-utility-accessory-margin-right': '20px',
      '--terra-application-header-utility-accessory-width': '2rem',
      '--terra-application-header-utility-title-font-size': '2rem',
      '--terra-application-header-utility-title-font-weight': 'bold',
      '--terra-application-header-utility-title-margin-right': '20px',
    });
  });

  describe('Hover: application header utility', () => {
    beforeEach(() => { browser.moveToObject('#default'); });
    Terra.should.matchScreenshot({ viewports, selector: '#default' });
    Terra.should.beAccessible({ viewports, context: '#default' });
    Terra.should.themeEachCustomProperty('#default', {
      '--terra-application-header-utility-hover-background-color': 'blue',
    });
  });

  describe('Focus: application header utility', () => {
    beforeEach(() => { browser.keys('Tab'); });
    Terra.should.matchScreenshot({ viewports, selector: '#default' });
    Terra.should.beAccessible({ viewports, context: '#default' });
    Terra.should.themeEachCustomProperty('#default', {
      '--terra-application-header-utility-focus-outline-color': 'blue',
      '--terra-application-header-utility-focus-outline-width': '10px',
    });
  });
});
