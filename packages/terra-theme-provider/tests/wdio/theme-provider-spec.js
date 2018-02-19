/* global browser, Terra, before */

const viewports = Terra.viewports('tiny', 'medium');

describe('Theme Provider', () => {
  describe('Displays a default theme-provider', () => {
    before(() => {
      browser.url('/#/raw/tests/theme-provider/default-theme-provider');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Displays a globally themed component', () => {
    before(() => {
      browser.url('#/raw/tests/theme-provider/global-theme-provider');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Displays an updated themed component', () => {
    before(() => {
      browser.url('/#/raw/tests/theme-provider/switch-themes');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Displays an updated globally themed component', () => {
    before(() => {
      browser.url('/#/raw/tests/theme-provider/global-switch-themes');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Displays a themed provider without a themeName provided', () => {
    before(() => {
      browser.url('/#/raw/tests/theme-provider/theme-provider-no-theme');
    });

    Terra.should.matchScreenshot({ viewports });
  });
});
