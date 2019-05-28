// Color contrast will be resolved in https://github.com/cerner/terra-core/issues/1670
const ignoredA11y = {
  'color-contrast': { enabled: false },
};

describe('Date Time Picker Twelve Hour Mobile', () => {
  before(() => {
    browser.setViewportSize(Terra.viewports('tiny')[0]);
    browser.execute('if (!window.ontouchstart) { window.ontouchstart = "true"; }');
  });

  after(() => {
    browser.execute('if (window.ontouchstart) { window.ontouchstart = "false"; }');
  });

  describe('Date Time Picker Twelve Hour Mobile - Default with no time', () => {
    before(() => browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-12-hour-mobile'));

    Terra.it.validatesElement('default', { axeRules: { rules: ignoredA11y } });
  });

  describe('Date Time Picker Twelve Hour Mobile - Clicking Meridiem updates the time', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-12-hour-mobile');

      browser.click('//*[@id="datetimeValueProvided"]/div[2]/div/div[3]/button[1]');
    });

    Terra.it.validatesElement('default', { axeRules: { rules: ignoredA11y } });
  });

  describe('Date Time Picker Twelve Hour Mobile - Focus Hour Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-12-hour-mobile');

      browser.click('//*[@id="terra-time-hour-input"]');
    });

    Terra.it.validatesElement('default', { axeRules: { rules: ignoredA11y } });
  });

  describe('Date Time Picker Twelve Hour Mobile - Focus Minute Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-12-hour-mobile');

      browser.click('//*[@id="terra-time-minute-input"]');
    });

    Terra.it.validatesElement('default', { axeRules: { rules: ignoredA11y } });
  });
});
