/* global browser, Terra */

const viewports = Terra.viewports('tiny', 'medium');

describe('ApplicationTabs', () => {
  describe('Displays a default application tabs', () => {
    beforeEach(() => browser.url('/#/tests/application-links/default-tabs'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports, context: '#test-root' });
    // const context = '#test-root';
    // // expect(browser.axe({ viewports, context })).to.be.accessible();
    // Terra.should.beAccessible({ viewports, context });
    // Terra.should.themeEachCustomProperty({
    //   '--terra-status-view-padding-bottom': '10px',
    //   '--terra-status-view-padding-top': '10px',
    //   '--terra-status-view-title-color': 'purple',
    //   '--terra-status-view-title-font-size': '36px',
    // });
  });
});
