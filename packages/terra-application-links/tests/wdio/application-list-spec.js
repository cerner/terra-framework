/* global browser, Terra */

const viewports = Terra.viewports('tiny', 'medium');

describe('ApplicationList', () => {
  describe('Displays a default application list', () => {
    beforeEach(() => browser.url('/#/tests/application-links/default-list'));

    Terra.should.matchScreenshot({ viewports });
    // expect(browser.axe({ viewports, context: '#test-root' })).to.be.accessible();
    Terra.should.beAccessible({ viewports, context: '#test-root' });
    // expect(browser.axe({ viewports, context: { include: [['li']] } })).to.be.accessible();
    // Terra.should.themeEachCustomProperty({
    //   '--terra-status-view-padding-bottom': '10px',
    //   '--terra-status-view-padding-top': '10px',
    //   '--terra-status-view-title-color': 'purple',
    //   '--terra-status-view-title-font-size': '36px',
    // });
  });
});
