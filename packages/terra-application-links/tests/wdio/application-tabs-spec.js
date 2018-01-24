/* global browser, Terra */

const viewports = Terra.viewports('tiny', 'medium');

describe('ApplicationTabs', () => {
  describe('Displays a default application tabs', () => {
    beforeEach(() => browser.url('/#/tests/application-link-tests/default-tabs'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-status-view-padding-bottom': '10px',
      '--terra-status-view-padding-top': '10px',
      '--terra-status-view-title-color': 'purple',
      '--terra-status-view-title-font-size': '36px',
    });
  });
});
