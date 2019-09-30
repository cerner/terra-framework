Terra.describeViewports('ApplicationHeaderName', ['tiny', 'medium'], () => {
  describe('Displays a default application header name', () => {
    before(() => browser.url('/#/raw/tests/terra-application-name/application-name/application-header-name-default'));
    browser.waitForVisible('[class*="demo-image-container"]');
    Terra.it.validatesElement({ selector: '#default' });
  });

  describe('Displays a truncated application header name', () => {
    before(() => browser.url('/#/raw/tests/terra-application-name/application-name/application-header-name-truncated'));

    Terra.it.validatesElement({ selector: '#truncated' });
  });
});
