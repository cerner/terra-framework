/* global browser, Terra */

describe('UserData', () => {
  beforeEach(() => {
    browser.url('/#/raw/tests/application-utility/default-user-data');
    browser.waitForVisible('#default');
  });

  describe('Displays a default user data', () => {
    Terra.should.matchScreenshot({ selector: '#default' });
    Terra.should.beAccessible({ context: '#default' });
    Terra.should.themeEachCustomProperty('#default', {
      '--terra-application-utility-user-data-photo-height': '5rem',
      '--terra-application-utility-user-data-photo': '5rem',
      '--terra-application-utility-user-data-photo-width': '5rem',
      '--terra-application-utility-user-data-name-font-size': '2rem',
      '--terra-application-utility-user-data-detail-font-size': '2rem',
      '--terra-application-utility-menu-page-chevron-height': '2rem',
      '--terra-application-utility-menu-page-height': '1rem',
      '--terra-application-utility-menu-page-chevron-width': '1rem',
    });
  });
});
