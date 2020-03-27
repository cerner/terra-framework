// Terra.describeViewports('Date Time Picker Twelve Hour Mobile', ['tiny'], () => {
//   before(() => {
//     browser.execute('if (!window.ontouchstart) { window.ontouchstart = "true"; }');
//   });
//
//   after(() => {
//     browser.execute('if (window.ontouchstart) { window.ontouchstart = "false"; }');
//   });
//
//   describe('Date Time Picker Twelve Hour Mobile - Default with no time', () => {
//     before(() => browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/twelve-hour/date-time-picker-empty-12-hour-mobile'));
//
//     Terra.it.validatesElement();
//   });
//
//   describe('Date Time Picker Twelve Hour Mobile - Clicking Meridiem updates the time', () => {
//     before(() => {
//       browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/twelve-hour/date-time-picker-value-12-hour-mobile');
//
//       browser.click('//*[@id="datetimeValueProvided"]/div[2]/div/div[2]/button[1]');
//     });
//
//     Terra.it.validatesElement();
//   });
//
//   describe('Date Time Picker Twelve Hour Value Mobile - Focus Hour Styles', () => {
//     before(() => {
//       browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/twelve-hour/date-time-picker-value-12-hour-mobile');
//       Terra.hideInputCaret('input[name="terra-time-hour-input"]');
//
//       browser.click('input[name="terra-time-hour-input"]');
//     });
//
//     Terra.it.validatesElement();
//   });
//
//   describe('Date Time Picker Twelve Hour Empty Mobile - Focus Hour Styles', () => {
//     before(() => {
//       browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/twelve-hour/date-time-picker-empty-12-hour-mobile');
//       Terra.hideInputCaret('input[name="terra-time-hour-input"]');
//
//       browser.click('input[name="terra-time-hour-input"]');
//     });
//
//     Terra.it.validatesElement();
//   });
//
//   describe('Date Time Picker Twelve Hour Seconds Mobile - Focus Hour Styles', () => {
//     before(() => {
//       browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/twelve-hour/date-time-picker-seconds-12-hour-mobile');
//       Terra.hideInputCaret('input[name="terra-time-hour-input"]');
//
//       browser.click('input[name="terra-time-hour-input"]');
//     });
//
//     Terra.it.validatesElement();
//   });
//
//   describe('Date Time Picker Twelve Hour Disabled Mobile - Disabled Styles', () => {
//     before(() => {
//       browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/twelve-hour/date-time-picker-disabled-12-hour-mobile');
//     });
//
//     Terra.it.validatesElement();
//   });
//
//   describe('Date Time Picker Twelve Hour Value Mobile - Focus Minute Styles', () => {
//     before(() => {
//       browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/twelve-hour/date-time-picker-value-12-hour-mobile');
//       Terra.hideInputCaret('input[name="terra-time-minute-input"]');
//
//       browser.click('input[name="terra-time-minute-input"]');
//     });
//
//     Terra.it.validatesElement();
//   });
//
//   describe('Date Time Picker Twelve Hour Empty Mobile - Focus Minute Styles', () => {
//     before(() => {
//       browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/twelve-hour/date-time-picker-empty-12-hour-mobile');
//       Terra.hideInputCaret('input[name="terra-time-minute-input"]');
//
//       browser.click('input[name="terra-time-minute-input"]');
//     });
//
//     Terra.it.validatesElement();
//   });
//
//   describe('Date Time Picker Twelve Hour Seconds Mobile - Default', () => {
//     before(() => {
//       browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/twelve-hour/date-time-picker-seconds-12-hour-mobile');
//     });
//
//     Terra.it.validatesElement();
//   });
//
//   describe('Date Time Picker Twelve Hour Seconds Mobile - Focus Minute Styles', () => {
//     before(() => {
//       browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/twelve-hour/date-time-picker-seconds-12-hour-mobile');
//       Terra.hideInputCaret('input[name="terra-time-minute-input"]');
//
//       browser.click('input[name="terra-time-minute-input"]');
//     });
//
//     Terra.it.validatesElement();
//   });
//
//   describe('Date Time Picker Twelve Hour Seconds Mobile - Focus Second Styles', () => {
//     before(() => {
//       browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/twelve-hour/date-time-picker-seconds-12-hour-mobile');
//       Terra.hideInputCaret('input[name="terra-time-second-input"]');
//
//       browser.click('input[name="terra-time-second-input"]');
//     });
//
//     Terra.it.validatesElement();
//   });
// });
