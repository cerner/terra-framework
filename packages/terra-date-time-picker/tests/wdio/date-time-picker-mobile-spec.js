// Color contrast will be resolved in https://github.com/cerner/terra-core/issues/1670
Terra.describeViewports('Date Time Picker Twelve Hour Mobile', ['tiny'], () => {
  before(() => {
    browser.execute('if (!window.ontouchstart) { window.ontouchstart = "true"; }');
  });

  after(() => {
    browser.execute('if (window.ontouchstart) { window.ontouchstart = "false"; }');
  });

  describe('Date Time Picker Twelve Hour Mobile - Default with no time', () => {
    before(() => browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/twelve-hour/date-time-picker-empty-12-hour-mobile'));

    Terra.it.validatesElement();
  });

  describe('Date Time Picker Twelve Hour Mobile - Clicking Meridiem updates the time', () => {
    it('Date Time Picker Twelve Hour Mobile - Clicking Meridiem updates the time', () => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/twelve-hour/date-time-picker-value-12-hour-mobile');

      browser.click('//*[@id="datetimeValueProvided"]/div[2]/div/div[3]/button[1]');
      Terra.it.validatesElement();

      browser.click('//*[@id="datetimeValueProvided"]/div[2]/div/div[3]/button[2]');
    });
  });

  describe('Date Time Picker Twelve Hour Value Mobile - Focus Hour Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/twelve-hour/date-time-picker-value-12-hour-mobile');

      browser.click('//*[@id="terra-time-hour-input"]');
    });

    Terra.it.validatesElement();
  });

  describe('Date Time Picker Twelve Hour Empty Mobile - Focus Hour Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/twelve-hour/date-time-picker-empty-12-hour-mobile');

      browser.click('//*[@id="terra-time-hour-input"]');
    });

    Terra.it.validatesElement();
  });

  describe('Date Time Picker Twelve Hour Disabled Mobile - Focus Hour Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/twelve-hour/date-time-picker-disabled-12-hour-mobile');
    });

    Terra.it.validatesElement();
  });

  describe('Date Time Picker Twelve Hour Value Mobile - Focus Minute Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/twelve-hour/date-time-picker-value-12-hour-mobile');

      browser.click('//*[@id="terra-time-minute-input"]');
    });

    Terra.it.validatesElement();
  });

  describe('Date Time Picker Twelve Hour Empty Mobile - Focus Minute Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/twelve-hour/date-time-picker-empty-12-hour-mobile');

      browser.click('//*[@id="terra-time-minute-input"]');
    });

    Terra.it.validatesElement();
  });

  describe('Date Time Picker Twelve Hour Disabled Mobile - Focus Minute Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/twelve-hour/date-time-picker-disabled-12-hour-mobile');
    });

    Terra.it.validatesElement();
  });
});
