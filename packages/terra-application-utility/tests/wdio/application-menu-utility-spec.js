/* global browser, Terra */

const viewports = Terra.viewports('tiny', 'medium');

describe('ApplicationMenuUtility', () => {
  beforeEach(() => {
    browser.url('/#/raw/tests/application-utility/default-application-menu-utility');
    browser.waitForVisible('#default');
  });

  describe('Displays a default application menu utility', () => {
    Terra.should.matchScreenshot({ viewports, selector: '#default' });
    Terra.should.beAccessible({ viewports, context: '#default' });
    Terra.should.themeEachCustomProperty('#default', {
      '--terra-application-menu-utility-background-color': 'blue',
      '--terra-application-menu-utility-border-bottom-width': '6px',
      '--terra-application-menu-utility-border-left-width': '6px',
      '--terra-application-menu-utility-border-radius': '6px',
      '--terra-application-menu-utility-border-right-width': '6px',
      '--terra-application-menu-utility-border-top': '6px solid blue',
      '--terra-application-menu-utility-color': 'purple',
      '--terra-application-menu-utility-padding-left': '20px',
      '--terra-application-menu-utility-padding-right': '20px',
      '--terra-application-menu-utility-icon-min-width': '15px',
      '--terra-application-menu-utility-photo-margin-right': '20px',
      '--terra-application-menu-utility-photo-width': '1.857rem',
      '--terra-application-menu-utility-user-name-font-size': '2rem',
      '--terra-application-menu-utility-user-name-margin-right': '20px',
    });
  });

  describe('Hover: application menu utility', () => {
    beforeEach(() => { browser.moveToObject('#default'); });
    Terra.should.matchScreenshot({ viewports, selector: '#default' });
    Terra.should.beAccessible({ viewports, context: '#default' });
    Terra.should.themeEachCustomProperty('#default', {
      '--terra-application-menu-utility-hover-background-color': 'blue',
    });
  });

  describe('Focus: application menu utility', () => {
    beforeEach(() => { browser.keys('Tab'); });
    Terra.should.matchScreenshot({ viewports, selector: '#default' });
    Terra.should.beAccessible({ viewports, context: '#default' });
    Terra.should.themeEachCustomProperty('#default', {
      '--terra-application-menu-utility-focus-outline-color': 'blue',
      '--terra-application-menu-utility-focus-outline-width': '10px',
    });
  });

  describe('Displays a default menu utility menu', () => {
    beforeEach(() => {
      browser.moveToObject('#default');
      browser.click('#default');
      browser.waitForVisible('[data-application-menu-utility-menu]');
    });
    Terra.should.matchScreenshot({ selector: '[data-application-menu-utility-menu]' });
    Terra.should.beAccessible({ context: '[data-application-menu-utility-menu]' });
    Terra.should.themeEachCustomProperty('[data-application-menu-utility-menu]', {
      '--terra-application-menu-utility-menu-header-font-size': '2rem',
      '--terra-application-menu-utility-menu-header-font-weight': 'normal',
      '--terra-application-menu-utility-menu-header-height': '4rem',
      '--terra-application-menu-utility-menu-header-text-margin-left': '1rem',
      '--terra-application-menu-utility-menu-header-back-button-background-color': 'blue',
      '--terra-application-menu-utility-menu-header-back-button-border-width': '6px',
      '--terra-application-menu-utility-menu-header-back-button-width': '2rem',
      '--terra-application-utility-menu-divider-border-bottom': '5px dashed pink',
      '--terra-application-utility-menu-divider-height': '1rem',
      '--terra-application-utility-menu-divider-margin-top': '10px',
      '--terra-application-utility-menu-divider-border-after-bottom': '5px dashed pink',
      '--terra-application-utility-menu-divider-after-height': '1rem',
      '--terra-application-utility-menu-divider-after-margin-top': '10px',
      '--terra-application-menu-utility-menu-chevron-height': '2rem',
      '--terra-application-menu-utility-menu-chevron-width': '2rem',
      '--terra-application-menu-utility-menu-footer-divider-margin-bottom': '1rem',
      '--terra-application-menu-utility-menu-body-item-font-size': '2rem',
      '--terra-application-menu-utility-menu-body-item-margin-bottom': '1rem',
      '--terra-application-menu-utility-menu-body-item-padding-left': '1rem',
      '--terra-application-menu-utility-menu-body-item-margin-top': '1rem',
      '--terra-application-menu-utility-menu-body-item-checkmark-height': '1rem',
      '--terra-application-menu-utility-menu-body-item-checkmark-margin-right': '1rem',
      '--terra-application-menu-utility-menu-body-item-checkmark-width': '1rem',
      '--terra-application-menu-utility-menu-body-item-chevron-height': '1rem',
      '--terra-application-menu-utility-menu-body-item-chevron-width': '1rem',
      '--terra-application-menu-utility-menu-footer-item-background-color': 'blue',
      '--terra-application-menu-utility-menu-footer-item-border-radius': '1rem',
      '--terra-application-menu-utility-menu-footer-item-font-size': '2rem',
      '--terra-application-menu-utility-menu-footer-item-height': '1rem',
      '--terra-application-menu-utility-menu-footer-item-margin-bottom': '1rem',
      '--terra-application-menu-utility-menu-footer-item-margin-left': '1rem',
      '--terra-application-menu-utility-menu-footer-item-margin-right': '1rem',
    });
  });

  describe('Hover: menu utility menu', () => {
    beforeEach(() => {
      browser.moveToObject('#default');
      browser.click('#default');
      browser.waitForVisible('[data-application-menu-utility-menu]');
      browser.waitForVisible('#test-additional-item-3');
      browser.moveToObject('#test-additional-item-3');
    });

    Terra.should.matchScreenshot({ selector: '[data-application-menu-utility-menu]' });
    Terra.should.beAccessible({ context: '#test-additional-item-3' });
    Terra.should.themeEachCustomProperty('#test-additional-item-3', {
      '--terra-application-menu-utility-menu-body-item-hover-focus-color': 'blue',
    });
  });

  describe('Focus: menu utility menu', () => {
    beforeEach(() => {
      browser.moveToObject('#default');
      browser.click('#default');
      browser.waitForVisible('[data-application-menu-utility-menu]');
      browser.keys('Tab');
    });

    Terra.should.matchScreenshot({ selector: '[data-application-menu-utility-menu]' });
    Terra.should.beAccessible({ context: '[data-application-menu-utility-menu]' });
    Terra.should.themeEachCustomProperty('[data-application-menu-utility-menu]', {
      '--terra-application-menu-utility-menu-body-item-hover-focus-color': 'blue',
    });
  });
});
