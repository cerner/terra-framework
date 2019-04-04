const viewports = Terra.viewports('small', 'large');

viewports.forEach((viewport) => {
  describe('ApplicationTabs', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('Displays a default application tabs', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-default');
        browser.waitForVisible('#test-tabs [data-application-tabs-more]');
        browser.moveToObject('#test-tabs [data-application-tabs-more]');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
      Terra.should.themeCombinationOfCustomProperties({
        selector: '#test-tabs',
        testName: 'themed',
        properties: {
          '--terra-application-links-tabs-tab-width': '9rem',
          '--terra-application-links-tabs-tab-margin-next-to-icon': '1rem',
          '--terra-application-links-tabs-menu-arrow-margin-left': '2rem',
          '--terra-application-links-tabs-tab-background-image': 'linear-gradient(to bottom, red, orange)',
          '--terra-application-links-tabs-tab-background-position': 'top',
          '--terra-application-links-tabs-tab-background-size': '0 9px',
          '--terra-application-links-tabs-tab-divider-before-border-left': '1px solid green',
          '--terra-application-links-tabs-tab-divider-before-border-right': '1px solid pink',
          '--terra-application-links-tabs-tab-color': '#000',
          '--terra-application-links-tabs-tab-font-size': '1rem',
          '--terra-application-links-tabs-tab-line-height': '1',
          '--terra-application-links-tabs-tab-hover-background-color': 'rgba(0, 0, 0, 0.15)',
          '--terra-application-links-tabs-tab-active-background-color': 'pink',
          '--terra-application-links-tabs-tab-active-background-size': '100% 9px',
          '--terra-application-links-tabs-tab-active-color': '#000',
          '--terra-application-links-tabs-tab-hover-background-image': 'linear-gradient(to bottom, orange,red)',
          '--terra-application-links-tabs-tab-hover-background-size': '100% 9px',
          '--terra-application-links-tabs-tab-hover-color': 'gray',
          '--terra-application-links-tabs-tab-text-transform': 'uppercase',
        },
      });
    });

    describe('Displays collapsed application tabs', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-default');
        browser.waitForVisible('#test-tabs [data-application-tabs-more]');
        browser.click('#test-tabs [data-application-tabs-more]');
        browser.waitForVisible('[data-application-tab-menu-content]');
        browser.click('[data-application-tab-menu-content] > *:first-child');
        browser.pause(150);
        browser.click('#test-tabs [data-application-tabs-more]');
        browser.waitForVisible('[data-application-tab-menu-content]');
        browser.moveToObject('[data-application-tab-menu-content] > *:first-child');
      });

      Terra.should.matchScreenshot({ selector: '[data-application-tab-menu-content]' });
      Terra.should.beAccessible();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '[data-application-tab-menu-content]',
        properties: {
          '--terra-application-links-tabs-collapsed-color': 'blue',
          '--terra-application-links-tabs-collapsed-hover-background': 'linear-gradient(-90deg, orange, red)',
          '--terra-application-links-tabs-collapsed-selected-background-image': 'linear-gradient(-270deg, red, orange)',
          '--terra-application-links-tabs-collapsed-selected-box-shadow': 'inset 1rem 0 0 0 purple',
          '--terra-application-links-tabs-collapsed-padding-top': '0',
          '--terra-application-links-tabs-collapsed-padding-right': '0',
          '--terra-application-links-tabs-collapsed-padding-bottom': '0',
          '--terra-application-links-tabs-collapsed-padding-left': '0',
          '--terra-application-links-tabs-tab-text-transform': 'uppercase',
        },
      });
    });

    describe('Displays a hidden application tabs selection', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-default');
        browser.waitForVisible('#test-tabs [data-application-tabs-more]');
        browser.click('#test-tabs [data-application-tabs-more] span');
        browser.waitForVisible('[data-application-tab-menu-content]');
        browser.click('[data-application-tab-menu-content] > *:first-child div');
        browser.pause(50);
      });

      Terra.should.matchScreenshot();
    });

    describe('Displays a application tabs start aligned', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-start');
        browser.pause(50);
      });

      Terra.should.matchScreenshot();
    });

    describe('Displays a application tabs center aligned', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-center');
        browser.pause(50);
      });

      Terra.should.matchScreenshot();
    });

    describe('Displays a application tabs end aligned', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-end');
        browser.pause(50);
      });

      Terra.should.matchScreenshot();
    });

    describe('Navigates away from the site', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-external');
        browser.pause(50);
        browser.click('#test-tabs #test-button');
        browser.pause(100);
      });

      it('successfully navigated away', () => {
        expect(browser.url().value).to.equal('https://engineering.cerner.com/terra-ui/#/home/terra-ui/index');
      });
    });

    describe('Displays an application tabs with icons', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-with-icons');
        browser.waitForVisible('#test-tabs [data-application-tabs-more]');
        browser.moveToObject('#test-tabs [data-application-tabs-more]');
      });

      Terra.should.matchScreenshot();
    });

    describe('Displays collapsed application tabs with icons', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-application-links/application-links/application-tabs-with-icons');
        browser.waitForVisible('#test-tabs [data-application-tabs-more]');
        browser.click('#test-tabs [data-application-tabs-more]');
        browser.waitForVisible('[data-application-tab-menu-content]');
        browser.click('[data-application-tab-menu-content] > *:first-child');
        browser.pause(150);
        browser.click('#test-tabs [data-application-tabs-more]');
        browser.waitForVisible('[data-application-tab-menu-content]');
        browser.moveToObject('[data-application-tab-menu-content] > *:first-child');
      });

      Terra.should.matchScreenshot({ selector: '[data-application-tab-menu-content]' });
    });
  });
});
