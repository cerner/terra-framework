Terra.describeViewports('Date Time Picker Twelve Hour Mobile', ['tiny'], () => {
  before(() => {
    browser.execute('if (!window.ontouchstart) { window.ontouchstart = "true"; }');
  });

  after(() => {
    browser.execute('if (window.ontouchstart) { window.ontouchstart = "false"; }');
  });

  it('displays Date Time Picker Twelve Hour Mobile - Default with no time', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/twelve-hour/date-time-picker-empty-12-hour-mobile');
    Terra.validates.element('no time');
  });

  it('displays Date Time Picker Twelve Hour Mobile - Clicking Meridiem updates the time', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/twelve-hour/date-time-picker-value-12-hour-mobile');
    $('//*[@id="datetimeValueProvided"]/div/div[2]/div/div[2]/button[1]').click();
    Terra.validates.element('click meridiem');
  });

  it('displays Date Time Picker Twelve Hour Value Mobile - Focus Hour Styles', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/twelve-hour/date-time-picker-value-12-hour-mobile');
    Terra.hideInputCaret('input[name="terra-time-hour-input"]');
    $('input[name="terra-time-hour-input"]').click();
    Terra.validates.element('focus hour styles');
  });

  it('displays Date Time Picker Twelve Hour Empty Mobile - Focus Hour Styles', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/twelve-hour/date-time-picker-empty-12-hour-mobile');
    Terra.hideInputCaret('input[name="terra-time-hour-input"]');
    $('input[name="terra-time-hour-input"]').click();
    Terra.validates.element('focus hour styles empty');
  });

  it('displays Date Time Picker Twelve Hour Seconds Mobile - Focus Hour Styles', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/twelve-hour/date-time-picker-seconds-12-hour-mobile');
    Terra.hideInputCaret('input[name="terra-time-hour-input"]');
    $('input[name="terra-time-hour-input"]').click();
    Terra.validates.element('focus hour styles seconds');
  });

  it('displays Date Time Picker Twelve Hour Disabled Mobile - Disabled Styles', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/twelve-hour/date-time-picker-disabled-12-hour-mobile');
    Terra.validates.element('disabled');
  });

  it('displays Date Time Picker Twelve Hour Value Mobile - Focus Minute Styles', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/twelve-hour/date-time-picker-value-12-hour-mobile');
    Terra.hideInputCaret('input[name="terra-time-minute-input"]');
    $('input[name="terra-time-minute-input"]').click();
    Terra.validates.element('focus minute styles');
  });

  it('displays Date Time Picker Twelve Hour Empty Mobile - Focus Minute Styles', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/twelve-hour/date-time-picker-empty-12-hour-mobile');
    Terra.hideInputCaret('input[name="terra-time-minute-input"]');
    $('input[name="terra-time-minute-input"]').click();
    Terra.validates.element('focus minute styles empty');
  });

  it('displays Date Time Picker Twelve Hour Seconds Mobile - Default', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/twelve-hour/date-time-picker-seconds-12-hour-mobile');
    Terra.validates.element('twelve hour seconds');
  });

  it('displays Date Time Picker Twelve Hour Seconds Mobile - Focus Minute Styles', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/twelve-hour/date-time-picker-seconds-12-hour-mobile');
    Terra.hideInputCaret('input[name="terra-time-minute-input"]');
    $('input[name="terra-time-minute-input"]').click();
    Terra.validates.element('focus minute styles seconds');
  });

  it('displays Date Time Picker Twelve Hour Seconds Mobile - Focus Second Styles', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/twelve-hour/date-time-picker-seconds-12-hour-mobile');
    Terra.hideInputCaret('input[name="terra-time-second-input"]');
    $('input[name="terra-time-second-input"]').click();
    Terra.validates.element('focus second styles');
  });
});
