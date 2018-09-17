const viewports = Terra.viewports('tiny', 'medium');
const selector = '#root';

describe('Theme Provider', () => {
  describe('Displays a default theme-provider', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-theme-provider/theme-provider/default-theme-provider');
    });

    Terra.should.matchScreenshot({ viewports, selector });
  });

  describe('Displays a globally themed component', () => {
    before(() => {
      browser.url('#/raw/tests/terra-theme-provider/theme-provider/global-theme-provider');
    });

    Terra.should.matchScreenshot({ viewports, selector });
  });

  describe('Displays an updated themed component', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-theme-provider/theme-provider/switch-themes');
    });

    Terra.should.matchScreenshot({ viewports, selector });
  });

  describe('Displays an updated themed component - After Click', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-theme-provider/theme-provider/switch-themes');
      browser.selectByAttribute('#theme', 'value', 'cerner-mock-theme');
    });

    Terra.should.matchScreenshot({ viewports, selector });
  });

  describe('Displays an updated globally themed component', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-theme-provider/theme-provider/global-switch-themes');
    });

    Terra.should.matchScreenshot({ viewports, selector });
  });

  describe('Displays an updated globally themed component -  After Click', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-theme-provider/theme-provider/global-switch-themes');
      browser.selectByAttribute('#theme', 'value', 'cerner-mock-theme');
    });

    Terra.should.matchScreenshot({ viewports, selector });
  });

  describe('Displays a themed provider without a themeName provided', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-theme-provider/theme-provider/theme-provider-no-theme');
    });

    Terra.should.matchScreenshot({ viewports, selector });
  });
});
