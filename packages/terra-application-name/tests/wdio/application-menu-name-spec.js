Terra.describeViewports('ApplicationMenuName', ['tiny', 'medium'], () => {
  describe('Displays a default application menu name', () => {
    before(() => browser.url('/#/raw/tests/terra-application-name/application-name/application-menu-name-default'));

    Terra.it.validatesElement({ selector: '#default' });
  });

  describe('Displays a wrapping application menu name', () => {
    before(() => browser.url('/#/raw/tests/terra-application-name/application-name/application-menu-name-wrapping'));

    Terra.it.validatesElement({ selector: '#wrapping' });
  });
});
