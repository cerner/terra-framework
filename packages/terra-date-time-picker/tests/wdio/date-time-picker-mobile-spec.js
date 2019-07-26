// Color contrast will be resolved in https://github.com/cerner/terra-framework/issues/744
const ignoredA11y = {
  'color-contrast': { enabled: false },
};

Terra.describeViewports('Date Time Picker Twelve Hour Mobile', ['tiny'], () => {
  before(() => {
    browser.execute('if (!window.ontouchstart) { window.ontouchstart = "true"; }');
  });

  after(() => {
    browser.execute('if (window.ontouchstart) { window.ontouchstart = "false"; }');
  });

  describe('Date Time Picker Twelve Hour Mobile - Default with no time', () => {
    before(() => browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-12-hour-mobile'));

    Terra.it.validatesElement({ axeRules: { rules: ignoredA11y } });
  });

  describe('Date Time Picker Twelve Hour Mobile - Clicking Meridiem updates the time', () => {
    it('Date Time Picker Twelve Hour Mobile - Clicking Meridiem updates the time', () => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-12-hour-mobile');

      browser.click('//*[@id="datetimeValueProvided"]/div[2]/div/div[3]/button[1]');
      Terra.validates.element({ axeRules: { rules: ignoredA11y } });

      browser.click('//*[@id="datetimeValueProvided"]/div[2]/div/div[3]/button[2]');
    });
  });

  describe('Date Time Picker Twelve Hour Mobile - Focus Hour Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-12-hour-mobile');
      Terra.hideInputCaret('input[name="terra-time-hour-input"]');

      browser.click('//*[@id="terra-time-hour-input"]');
    });

    Terra.it.validatesElement({ axeRules: { rules: ignoredA11y } });
  });

  describe('Date Time Picker Twelve Hour Mobile - Focus Minute Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-12-hour-mobile');
      Terra.hideInputCaret('input[name="terra-time-minute-input"]');

      browser.click('//*[@id="terra-time-minute-input"]');
    });

    Terra.it.validatesElement({ axeRules: { rules: ignoredA11y } });
  });

  describe('Date Time Picker Twelve Hour Mobile - Focus Second Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-12-hour-mobile');
      Terra.hideInputCaret('input[name="terra-time-second-input"]');

      browser.click('input[name="terra-time-second-input"]');
    });

    Terra.it.validatesElement({ axeRules: { rules: ignoredA11y } });
  });
});
