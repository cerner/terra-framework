const viewports = Terra.viewports('tiny', 'medium');

describe('ApplicationHeaderName', () => {
  describe('Displays a default application header name', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-application-name/application-name/application-header-name-default'));

    Terra.should.matchScreenshot({ viewports, selector: '#default' });
    Terra.should.beAccessible({ viewports, context: '#default' });
    Terra.should.themeEachCustomProperty('#default', {
      '--terra-application-header-name-align-items': 'left',
      '--terra-application-header-name-color': '#800080',
      '--terra-application-header-name-flex': '1 1 auto',
      '--terra-application-header-name-accessory-padding-left': '1rem',
      '--terra-application-header-name-title-font-weight': 'bold',
      '--terra-application-header-name-title-padding-left': '1rem',
      '--terra-application-header-name-title-padding-right': '3rem',
    });
  });

  describe('Displays a truncated application header name', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-application-name/application-name/application-header-name-truncated'));

    Terra.should.matchScreenshot({ viewports, selector: '#truncated' });
  });
});
