const viewports = Terra.viewports('tiny', 'medium');

describe('ApplicationHeaderName', () => {
  describe('Displays a default application header name', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-application-name/application-name/application-header-name-default'));

    Terra.should.matchScreenshot({ viewports, selector: '#default' });
    Terra.should.beAccessible({ viewports, context: '#default' });
  });

  describe('Displays a truncated application header name', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-application-name/application-name/application-header-name-truncated'));

    Terra.should.matchScreenshot({ viewports, selector: '#truncated' });
  });
});
