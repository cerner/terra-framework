Terra.describeViewports('ApplicationHeader', ['small', 'large'], () => {
  it('Displays a default application header', () => {
    browser.url('/raw/tests/terra-application-layout/application-layout/application-layout-header');
    $('#test-header').waitForDisplayed();
    Terra.validates.element('application header', { selector: '#test-header' });
  });

  it('Displays an application header toggle standard', () => {
    browser.url('/raw/tests/terra-application-layout/application-layout/application-layout-header-small');
    $('#root').moveTo({ xOffset: 0, yOffset: 900 });
    $('#test-header').waitForDisplayed();
    Terra.validates.element('toggle standard', { selector: '#test-header' });
  });

  describe('Displays an application header utilities', () => {
    it('opens the utility menu', () => {
      browser.url('/raw/tests/terra-application-layout/application-layout/application-layout-header');
      $('#test-header').waitForDisplayed();
      $('[data-application-header-utility]').click();
      Terra.validates.element('#test-header', { selector: '#test-header' });
      Terra.validates.element('application header utilities', { selector: '#site' });
    });
  });

  it('Displays an application header with icons', () => {
    browser.url('/raw/tests/terra-application-layout/application-layout/application-layout-header-with-icons');
    $('#test-header').waitForDisplayed();
    $('#root').moveTo({ xOffset: 0, yOffset: 0 });
    Terra.validates.element('with icons', { selector: '#test-header' });
  });
});
