const viewports = Terra.viewports('small', 'large');

describe('ApplicationHeader', () => {
  describe('Displays a default application header', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-header');
      browser.waitForVisible('#test-header');
    });

    Terra.should.matchScreenshot('#test-header', { selector: '#test-header', viewports });
    Terra.should.beAccessible({ viewports, context: '#test-header' });
  });

  describe('Displays an application header toggle standard', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-header-small');
      browser.waitForVisible('#test-header');
    });

    Terra.should.matchScreenshot('#test-header', { selector: '#test-header', viewports });
  });

  describe('Displays an application header utilities', () => {
    before(() => browser.setViewportSize(Terra.viewports('small')[0]));
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-application-layout/application-layout/application-layout-header');
      browser.waitForVisible('#test-header');
      browser.click('[data-application-header-utility]');
    });

    Terra.should.matchScreenshot({ selector: '#site' });
  });
});
