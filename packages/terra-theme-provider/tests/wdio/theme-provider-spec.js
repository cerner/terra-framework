const selector = '#root';

Terra.describeViewports('Theme Provider', ['tiny', 'medium'], () => {
  describe('Displays a default theme-provider', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-theme-provider/theme-provider/default-theme-provider');
    });

    Terra.it.matchesScreenshot({ selector });
  });

  describe('Displays an updated themed component', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-theme-provider/theme-provider/switch-themes');
    });

    Terra.it.matchesScreenshot({ selector });
  });

  describe('Displays an updated themed component - After Click', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-theme-provider/theme-provider/switch-themes');
      browser.selectByAttribute('#theme', 'value', 'cerner-mock-theme');
    });

    Terra.it.matchesScreenshot({ selector });
  });

  describe('Displays a themed provider without a themeName provided', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-theme-provider/theme-provider/theme-provider-no-theme');
    });

    Terra.it.matchesScreenshot({ selector });
  });
});
