/* global browser, Terra, beforeEach, expect */

describe('Application Header', () => {
  const viewports = Terra.viewports('small', 'huge');

  it('Displays a default application header', () => {
    browser.url('#/raw/tests/application-header-layout/application-header-default');
    const screenshots = browser.checkViewport({ viewports });

    expect(screenshots).to.matchReference();
  });
});
