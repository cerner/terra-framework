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
      '--terra-application-header-utility-photo-margin-right': '20px',
      '--terra-application-header-utility-photo-width': '1.857rem',
      '--terra-application-header-utility-user-name-font-size': '2rem',
      '--terra-application-header-utility-user-name-margin-right': '20px',
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

  describe('Displays a default header utility menu', () => {
    beforeEach(() => {
      browser.moveToObject('#default');
      browser.click('#default');
      browser.waitForVisible('[data-application-header-utility-menu]');
    });
    Terra.should.matchScreenshot({ selector: '[data-application-header-utility-menu]' });
    Terra.should.beAccessible({ context: '[data-application-header-utility-menu]' });
    Terra.should.themeEachCustomProperty('[data-application-header-utility-menu]', {
      '--terra-application-header-utility-menu-header-font-size': '2rem',
      '--terra-application-header-utility-menu-header-font-weight': 'normal',
      '--terra-application-header-utility-menu-header-height': '4rem',
      '--terra-application-header-utility-menu-header-text-margin-left': '1rem',
      '--terra-application-header-utility-menu-header-back-button-background-color': 'blue',
      '--terra-application-header-utility-menu-header-back-button-border-width': '6px',
      '--terra-application-header-utility-menu-header-back-button-width': '2rem',
      '--terra-application-header-utility-menu-chevron-height': '2rem',
      '--terra-application-header-utility-menu-chevron-width': '2rem',
      '--terra-application-header-utility-menu-footer-divider-margin-bottom': '1rem',
      '--terra-application-header-utility-menu-body-item-font-size': '2rem',
      '--terra-application-header-utility-menu-body-item-margin-bottom': '1rem',
      '--terra-application-header-utility-menu-body-item-padding-left': '1rem',
      '--terra-application-header-utility-menu-body-item-margin-top': '1rem',
      '--terra-application-header-utility-menu-body-item-checkmark-height': '1rem',
      '--terra-application-header-utility-menu-body-item-checkmark-margin-right': '1rem',
      '--terra-application-header-utility-menu-body-item-checkmark-width': '1rem',
      '--terra-application-header-utility-menu-body-item-chevron-height': '1rem',
      '--terra-application-header-utility-menu-body-item-chevron-width': '1rem',
      '--terra-application-header-utility-menu-footer-item-background-color': 'blue',
      '--terra-application-header-utility-menu-footer-item-border-radius': '1rem',
      '--terra-application-header-utility-menu-footer-item-font-size': '2rem',
      '--terra-application-header-utility-menu-footer-item-height': '1rem',
      '--terra-application-header-utility-menu-footer-item-margin-bottom': '1rem',
      '--terra-application-header-utility-menu-footer-item-margin-left': '1rem',
      '--terra-application-header-utility-menu-footer-item-margin-right': '1rem',
    });
  });

  describe('Hover: header utility menu', () => {
    beforeEach(() => {
      browser.moveToObject('#default');
      browser.click('#default');
      browser.waitForVisible('[data-application-header-utility-menu]');
      browser.waitForVisible('#test-additional-item-3');
      browser.moveToObject('#test-additional-item-3');
    });

    Terra.should.matchScreenshot({ selector: '[data-application-header-utility-menu]' });
    Terra.should.beAccessible({ context: '#test-additional-item-3' });
    Terra.should.themeEachCustomProperty('#test-additional-item-3', {
      '--terra-application-header-utility-menu-body-item-hover-focus-color': 'blue',
    });
  });

  describe('Focus: header utility menu', () => {
    beforeEach(() => {
      browser.moveToObject('#default');
      browser.click('#default');
      browser.waitForVisible('[data-application-header-utility-menu]');
      browser.keys('Tab');
    });

    Terra.should.matchScreenshot({ selector: '[data-application-header-utility-menu]' });
    Terra.should.beAccessible({ context: '[data-application-header-utility-menu]' });
    Terra.should.themeEachCustomProperty('[data-application-header-utility-menu]', {
      '--terra-application-header-utility-menu-body-item-hover-focus-color': 'blue',
    });
  });
});
