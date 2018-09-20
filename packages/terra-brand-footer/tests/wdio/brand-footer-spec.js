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
        '--terra-brand-footer-margin-bottom': '4px',
        '--terra-brand-footer-margin-top': '4px',
        '--terra-brand-footer-margin-left': '4px',
        '--terra-brand-footer-margin-right': '4px',
        '--terra-brand-footer-nav-background-color': 'pink',
        '--terra-brand-footer-nav-color': 'yellow',
        '--terra-brand-footer-nav-header-color': 'orange',
        '--terra-brand-footer-link-color': 'green',
        '--terra-brand-footer-footer-content-background-color': 'red',
        '--terra-brand-footer-footer-content-color': 'black',
        '--terra-brand-footer-nav-padding-bottom': '3px',
        '--terra-brand-footer-nav-padding-top': '3px',
        '--terra-brand-footer-nav-padding-left': '3px',
        '--terra-brand-footer-nav-padding-right': '3px',
        '--terra-brand-footer-horizontal-nav-first-link-padding-before-right': '5px',
        '--terra-brand-footer-horizontal-nav-link-padding-before-bottom': '5px',
        '--terra-brand-footer-horizontal-nav-link-padding-before-top': '5px',
        '--terra-brand-footer-horizontal-nav-link-padding-before-left': '5px',
        '--terra-brand-footer-horizontal-nav-link-padding-before-right': '5px',
        '--terra-brand-footer-link-group-margin-bottom': '20px',
        '--terra-brand-footer-link-group-margin-top': '20px',
        '--terra-brand-footer-link-group-margin-left': '20px',
        '--terra-brand-footer-link-group-margin-right': '20px',
        '--terra-brand-footer-nav-link-font-size': '8px',
        '--terra-brand-footer-nav-link-font-weight': '750',
        '--terra-brand-footer-nav-link-line-height': '1',
        '--terra-brand-footer-link-text-decoration': 'green wavy underline',
        '--terra-brand-footer-footer-content-padding-bottom': '12px',
        '--terra-brand-footer-footer-content-padding-top': '12px',
        '--terra-brand-footer-footer-content-padding-left': '12px',
        '--terra-brand-footer-footer-content-padding-right': '12px',
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
        '--terra-brand-footer-margin-bottom': '4px',
        '--terra-brand-footer-margin-top': '4px',
        '--terra-brand-footer-margin-left': '4px',
        '--terra-brand-footer-margin-right': '4px',
        '--terra-brand-footer-nav-background-color': 'pink',
        '--terra-brand-footer-nav-color': 'yellow',
        '--terra-brand-footer-nav-header-color': 'orange',
        '--terra-brand-footer-link-color': 'green',
        '--terra-brand-footer-footer-content-background-color': 'red',
        '--terra-brand-footer-footer-content-color': 'black',
        '--terra-brand-footer-nav-padding-bottom': '3px',
        '--terra-brand-footer-nav-padding-top': '3px',
        '--terra-brand-footer-nav-padding-left': '3px',
        '--terra-brand-footer-nav-padding-right': '3px',
        '--terra-brand-footer-horizontal-nav-first-link-padding-before-right': '5px',
        '--terra-brand-footer-horizontal-nav-link-padding-before-bottom': '5px',
        '--terra-brand-footer-horizontal-nav-link-padding-before-top': '5px',
        '--terra-brand-footer-horizontal-nav-link-padding-before-left': '5px',
        '--terra-brand-footer-horizontal-nav-link-padding-before-right': '5px',
        '--terra-brand-footer-link-group-margin-bottom': '20px',
        '--terra-brand-footer-link-group-margin-top': '20px',
        '--terra-brand-footer-link-group-margin-left': '20px',
        '--terra-brand-footer-link-group-margin-right': '20px',
        '--terra-brand-footer-nav-link-font-size': '8px',
        '--terra-brand-footer-nav-link-font-weight': '750',
        '--terra-brand-footer-nav-link-line-height': '1',
        '--terra-brand-footer-link-text-decoration': 'green wavy underline',
        '--terra-brand-footer-footer-content-padding-bottom': '12px',
        '--terra-brand-footer-footer-content-padding-top': '12px',
        '--terra-brand-footer-footer-content-padding-left': '12px',
        '--terra-brand-footer-footer-content-padding-right': '12px',
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
        '--terra-brand-footer-margin-bottom': '4px',
        '--terra-brand-footer-margin-top': '4px',
        '--terra-brand-footer-margin-left': '4px',
        '--terra-brand-footer-margin-right': '4px',
        '--terra-brand-footer-footer-content-background-color': 'red',
        '--terra-brand-footer-footer-content-color': 'black',
        '--terra-brand-footer-footer-content-padding-bottom': '12px',
        '--terra-brand-footer-footer-content-padding-top': '12px',
        '--terra-brand-footer-footer-content-padding-left': '12px',
        '--terra-brand-footer-footer-content-padding-right': '12px',
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
        '--terra-brand-footer-margin-bottom': '4px',
        '--terra-brand-footer-margin-top': '4px',
        '--terra-brand-footer-margin-left': '4px',
        '--terra-brand-footer-margin-right': '4px',
        '--terra-brand-footer-nav-background-color': 'pink',
        '--terra-brand-footer-nav-color': 'yellow',
        '--terra-brand-footer-nav-header-color': 'orange',
        '--terra-brand-footer-link-color': 'green',
        '--terra-brand-footer-footer-content-background-color': 'red',
        '--terra-brand-footer-footer-content-color': 'black',
        '--terra-brand-footer-nav-padding-bottom': '3px',
        '--terra-brand-footer-nav-padding-top': '3px',
        '--terra-brand-footer-nav-padding-left': '3px',
        '--terra-brand-footer-nav-padding-right': '3px',
        '--terra-brand-footer-vertical-nav-link-group-min-width': '120px',
        '--terra-brand-footer-vertical-nav-link-group-padding-right': '2px',
        '--terra-brand-footer-vertical-nav-link-padding-bottom': '1px',
        '--terra-brand-footer-vertical-nav-link-padding-top': '1px',
        '--terra-brand-footer-vertical-nav-header-padding-bottom': '1px',
        '--terra-brand-footer-vertical-nav-header-padding-top': '1px',
        '--terra-brand-footer-link-group-margin-bottom': '20px',
        '--terra-brand-footer-link-group-margin-top': '20px',
        '--terra-brand-footer-link-group-margin-left': '20px',
        '--terra-brand-footer-link-group-margin-right': '20px',
        '--terra-brand-footer-nav-header-font-size': '10px',
        '--terra-brand-footer-nav-header-font-weight': '150',
        '--terra-brand-footer-nav-header-line-height': '1',
        '--terra-brand-footer-nav-header-text-transform': 'none',
        '--terra-brand-footer-nav-link-font-size': '8px',
        '--terra-brand-footer-nav-link-font-weight': '750',
        '--terra-brand-footer-nav-link-line-height': '1',
        '--terra-brand-footer-link-text-decoration': 'green wavy underline',
        '--terra-brand-footer-footer-content-padding-bottom': '12px',
        '--terra-brand-footer-footer-content-padding-top': '12px',
        '--terra-brand-footer-footer-content-padding-left': '12px',
        '--terra-brand-footer-footer-content-padding-right': '12px',
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

  describe('Many Sections', () => {
    before(() => browser.url('/#/raw/tests/terra-brand-footer/brand-footer/many-sections-brand-footer'));

    // Medium exemplifies 3x2 layout and Large 4 in a row with 2 on the botton row
    Terra.should.beAccessible({ viewports: Terra.viewports('medium', 'large'), rules });
    Terra.should.matchScreenshot({ viewports: Terra.viewports('medium', 'large') });
  });
});
