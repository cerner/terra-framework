const viewports = Terra.viewports('tiny', 'medium');

describe('ApplicationMenuName', () => {
  describe('Displays a default application menu name', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-application-name/application-name/application-menu-name-default'));

    Terra.should.matchScreenshot({ viewports, selector: '#default' });
    Terra.should.beAccessible({ viewports, context: '#default' });
  });

  describe('Displays a truncated application menu name', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-application-name/application-name/application-menu-name-truncated'));

    Terra.should.matchScreenshot({ viewports, selector: '#truncated' });
  });
});
