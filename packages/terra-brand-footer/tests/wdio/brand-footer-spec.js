/* global before, browser, Terra */
const viewports = Terra.viewports('tiny', 'large');

const rules = { bypass: { enabled: false } };

describe('BrandFooter', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/default-brand-footer'));

    Terra.should.beAccessible({ viewports, rules });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#wrapper',
      properties: {
        '--terra-brand-footer-margin': '4px',
        '--terra-brand-footer-nav-background-color': 'pink',
        '--terra-brand-footer-nav-color': 'yellow',
        '--terra-brand-footer-nav-header-color': 'orange',
        '--terra-brand-footer-link-color': 'green',
        '--terra-brand-footer-footer-content-background-color': 'red',
        '--terra-brand-footer-footer-content-color': 'black',
        '--terra-brand-footer-nav-padding': '3px',
        '--terra-brand-footer-horizontal-nav-first-link-padding-right-before': '5px',
        '--terra-brand-footer-horizontal-nav-link-padding-before': '5px',
        '--terra-brand-footer-link-group-margin': '20px',
        '--terra-brand-footer-nav-link-font-size': '8px',
        '--terra-brand-footer-nav-link-font-weight': '750',
        '--terra-brand-footer-nav-link-line-height': '1',
        '--terra-brand-footer-link-text-decoration': 'green wavy underline',
        '--terra-brand-footer-footer-content-padding': '12px',
        '--terra-brand-footer-floating-content-margin-bottom': '18px',
        '--terra-brand-footer-content-bottom-margin-top': '12px',
      },
    });
  });

  describe('Links Prop', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/links-prop-brand-footer'));

    Terra.should.beAccessible({ viewports, rules });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#wrapper',
      properties: {
        '--terra-brand-footer-margin': '4px',
        '--terra-brand-footer-nav-background-color': 'pink',
        '--terra-brand-footer-nav-color': 'yellow',
        '--terra-brand-footer-nav-header-color': 'orange',
        '--terra-brand-footer-link-color': 'green',
        '--terra-brand-footer-footer-content-background-color': 'red',
        '--terra-brand-footer-footer-content-color': 'black',
        '--terra-brand-footer-nav-padding': '3px',
        '--terra-brand-footer-horizontal-nav-first-link-padding-right-before': '5px',
        '--terra-brand-footer-horizontal-nav-link-padding-before': '5px',
        '--terra-brand-footer-link-group-margin': '20px',
        '--terra-brand-footer-nav-link-font-size': '8px',
        '--terra-brand-footer-nav-link-font-weight': '750',
        '--terra-brand-footer-nav-link-line-height': '1',
        '--terra-brand-footer-link-text-decoration': 'green wavy underline',
        '--terra-brand-footer-footer-content-padding': '12px',
        '--terra-brand-footer-floating-content-margin-bottom': '18px',
        '--terra-brand-footer-content-bottom-margin-top': '12px',
      },
    });
  });

  describe('No Nav', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/no-nav-brand-footer'));

    Terra.should.beAccessible({ viewports, rules });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-brand-footer-margin': '4px',
        '--terra-brand-footer-footer-content-background-color': 'red',
        '--terra-brand-footer-footer-content-color': 'black',
        '--terra-brand-footer-footer-content-padding': '12px',
        '--terra-brand-footer-floating-content-margin-bottom': '18px',
        '--terra-brand-footer-content-bottom-margin-top': '12px',
      },
    });
  });

  describe('Section Headers', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/section-header-brand-footer'));

    Terra.should.beAccessible({ viewports, rules });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-brand-footer-nav-header-font-size': '10px',
        '--terra-brand-footer-nav-header-font-weight': '150',
        '--terra-brand-footer-nav-header-line-height': '1',
        '--terra-brand-footer-nav-header-text-transform': 'none',
        '--terra-brand-footer-nav-link-font-size': '8px',
        '--terra-brand-footer-nav-link-font-weight': '750',
        '--terra-brand-footer-nav-link-line-height': '1',
      },
    });
  });

  describe('Vertical Nav', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/vertical-nav-brand-footer'));

    Terra.should.beAccessible({ viewports, rules });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-brand-footer-margin': '4px',
        '--terra-brand-footer-nav-background-color': 'pink',
        '--terra-brand-footer-nav-color': 'yellow',
        '--terra-brand-footer-nav-header-color': 'orange',
        '--terra-brand-footer-link-color': 'green',
        '--terra-brand-footer-footer-content-background-color': 'red',
        '--terra-brand-footer-footer-content-color': 'black',
        '--terra-brand-footer-nav-padding': '3px',
        '--terra-brand-footer-vertical-nav-link-group-min-width': '120px',
        '--terra-brand-footer-vertical-nav-link-group-padding-right': '2px',
        '--terra-brand-footer-vertical-nav-link-padding-bottom': '1px',
        '--terra-brand-footer-vertical-nav-link-padding-top': '1px',
        '--terra-brand-footer-vertical-nav-header-padding-bottom': '1px',
        '--terra-brand-footer-vertical-nav-header-padding-top': '1px',
        '--terra-brand-footer-link-group-margin': '20px',
        '--terra-brand-footer-nav-header-font-size': '10px',
        '--terra-brand-footer-nav-header-font-weight': '150',
        '--terra-brand-footer-nav-header-line-height': '1',
        '--terra-brand-footer-nav-header-text-transform': 'none',
        '--terra-brand-footer-nav-link-font-size': '8px',
        '--terra-brand-footer-nav-link-font-weight': '750',
        '--terra-brand-footer-nav-link-line-height': '1',
        '--terra-brand-footer-link-text-decoration': 'green wavy underline',
        '--terra-brand-footer-footer-content-padding': '12px',
        '--terra-brand-footer-floating-content-margin-bottom': '18px',
        '--terra-brand-footer-content-bottom-margin-top': '12px',
      },
    });
  });

  describe('Vertical Mixed Headers', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/vertical-mixed-headers-brand-footer'));

    Terra.should.beAccessible({ viewports, rules });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Horizontal Wrap', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/horizontal-wrap-brand-footer'));

    Terra.should.beAccessible({ viewports, rules });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Many Link Groups', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/many-link-groups-brand-footer'));

    // Medium exemplifies 3x2 layout and Large 4 in a row with 2 on the botton row
    Terra.should.beAccessible({ viewports: Terra.viewports('medium', 'large'), rules });
    Terra.should.matchScreenshot({ viewports: Terra.viewports('medium', 'large') });
  });
});
