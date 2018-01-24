/* global browser, Terra */

const viewports = Terra.viewports('tiny', 'medium');

describe('ApplicationList', () => {
  describe('Displays a default application list', () => {
    beforeEach(() => browser.url('/#/tests/application-link-tests/default-list'));

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
