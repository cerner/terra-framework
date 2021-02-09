const selector = '#root';

Terra.describeViewports('Theme Provider', ['tiny', 'medium'], () => {
  it('Displays a default theme-provider', () => {
    browser.url('/raw/tests/terra-theme-provider/theme-provider/default-theme-provider');
    Terra.validates.element('default', { rules: { 'color-contrast': { enabled: false } }, selector });
  });

  it('Displays an updated themed component', () => {
    browser.url('/raw/tests/terra-theme-provider/theme-provider/switch-themes');
    Terra.validates.element('updated themed component', { selector });
  });

  it('Displays an updated themed component - After Click', () => {
    browser.url('/raw/tests/terra-theme-provider/theme-provider/switch-themes');
    $('#theme').selectByAttribute('value', 'cerner-mock-theme');
    Terra.validates.element('updated themed component after click', { rules: { 'color-contrast': { enabled: false } }, selector });
  });

  it('Displays a themed provider without a themeName provided', () => {
    browser.url('/raw/tests/terra-theme-provider/theme-provider/theme-provider-no-theme');
    Terra.validates.element('no themeName', { selector });
  });
});
