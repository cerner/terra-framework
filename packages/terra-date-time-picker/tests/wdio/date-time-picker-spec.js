/* global $ */
const moment = require('moment-timezone');

moment.tz.setDefault('America/Chicago');

Terra.describeViewports('DateTimePicker', ['tiny', 'large'], () => {
  it('displays Default date time picker', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default');
    Terra.validates.element('default');
  });

  it('displays invalid date time picker', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-invalid');
    Terra.validates.element('invalid');
  });

  it('displays Incomplete date time picker', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-incomplete');
    Terra.validates.element('incomplete');
  });

  it('displays Invalid and Incomplete date time picker', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-invalid-incomplete');
    Terra.validates.element('invalid and incomplete');
  });

  it('displays Default with Date', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-only');
    Terra.validates.element('with date');
  });

  it('displays Default with Date and Time', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-time');
    Terra.validates.element('with date and time');
  });

  it('should handle Re-entering Same Missing Hour Twice', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-with-timezone-dst');
    Terra.hideInputCaret('input[name="terra-time-minute-input"]');
    $('input[name="terra-date-input"]').setValue('03/11/2018');
    $('input[name="terra-time-hour-input"]').setValue('02');
    $('input[name="terra-time-minute-input"]').setValue('30');
    $('input[name="terra-time-hour-input"]').clearValue();
    $('input[name="terra-time-hour-input"]').setValue('02');
    Terra.validates.element('re-enter missing hour');
  });

  it('displays Time Clarification Dialog', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-dst');
    $('input[name="terra-time-minute-input"]').click();
    browser.keys('Tab');
    $('[class*="time-clarification"]').waitForDisplayed();
    Terra.validates.element('time clarification dialog', { selector: '[class*="abstract-modal"]' });
  });

  describe('Time Clarification Dialog Dismissal', () => {
    it('displays open dialog', () => {
      browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-dst');
      $('input[name="terra-time-minute-input"]').click();
      browser.keys('Tab');
      $('[class*="time-clarification"]').waitForDisplayed();
      Terra.validates.element('dialog open', { selector: '[class*="abstract-modal"]' });
    });

    it('closes the dialog', () => {
      $('[class*="button-daylight"]').click();
      Terra.validates.element('dialog closed');
    });
  });

  describe('Displays Offset button after clicking daylight button', () => {
    it('displays time clarification modal', () => {
      browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-dst');
      $('input[name="terra-time-minute-input"]').click();
      browser.keys('Tab');
      $('[class*="time-clarification"]').waitForDisplayed();
      Terra.validates.element('dialog open', { selector: '[class*="abstract-modal"]' });
    });

    it('hides the offset button', () => {
      $('[class*="button-daylight"]').click();
      Terra.validates.element('offset button hidden');
    });
  });

  describe('Displays Offset button after clicking the standard time button', () => {
    it('displays time clarification modal', () => {
      browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-dst');
      $('input[name="terra-time-minute-input"]').click();
      browser.keys('Tab');
      $('[class*="time-clarification"]').waitForDisplayed();
      Terra.validates.element('dialog open', { selector: '[class*="abstract-modal"]' });
    });

    it('hides the offset button', () => {
      $('[class*="button-standard"]').click();
      Terra.validates.element('offset button hidden');
    });
  });

  it('displays Time Clarification Dialog Disabled', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-dst-disabled');
    $('input[name="terra-time-minute-input"]').click();
    browser.keys('Tab');
    $('[class*="time-clarification"]').waitForDisplayed();
    $('[class*="button-daylight"]').click();
    $('#date-time-picker-toggler').click();
    $('#root').moveToObject(0, 0);
    Terra.validates.element('disabled time clarification dialog');
  });

  describe('OnBlur', () => {
    it('puts focus on the input', () => {
      browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-focus-blur');
      $('input[name="terra-date-input"]').click();
      expect($('#blur-count').getText()).toEqual('0');
      expect($('#focus-count').getText()).toEqual('1');
      expect($('#iso').getText()).toEqual('');
      expect($('#input-value').getText()).toEqual('');
      expect($('#date-value').getText()).toEqual('');
      expect($('#time-value').getText()).toEqual('');
      expect($('#ambiguous-date').getText()).toEqual('No');
      expect($('#complete-date').getText()).toEqual('No');
      expect($('#valid-date').getText()).toEqual('Yes');
    });

    it('enter a complete date to move focus to the hour input and onBlur is not triggered', () => {
      browser.keys('05/01/2019');
      expect($('#blur-count').getText()).toEqual('0');
      expect($('#focus-count').getText()).toEqual('1');
      expect($('#iso').getText()).toEqual('');
      expect($('#input-value').getText()).toEqual('');
      expect($('#date-value').getText()).toEqual('');
      expect($('#time-value').getText()).toEqual('');
      expect($('#ambiguous-date').getText()).toEqual('No');
      expect($('#complete-date').getText()).toEqual('No');
      expect($('#valid-date').getText()).toEqual('Yes');
    });

    it('enter the hour to move focus to the minute input and onBlur is not triggered', () => {
      $('input[name="terra-time-hour-input"]').setValue('10');
      expect($('#blur-count').getText()).toEqual('0');
      expect($('#focus-count').getText()).toEqual('1');
      expect($('#iso').getText()).toEqual('');
      expect($('#input-value').getText()).toEqual('');
      expect($('#date-value').getText()).toEqual('');
      expect($('#time-value').getText()).toEqual('');
      expect($('#ambiguous-date').getText()).toEqual('No');
      expect($('#complete-date').getText()).toEqual('No');
      expect($('#valid-date').getText()).toEqual('Yes');
    });

    it('enter the minute and onBlur is not triggered', () => {
      $('input[name="terra-time-minute-input"]').setValue('10');
      expect($('#blur-count').getText()).toEqual('0');
      expect($('#focus-count').getText()).toEqual('1');
      expect($('#iso').getText()).toEqual('');
      expect($('#input-value').getText()).toEqual('');
      expect($('#date-value').getText()).toEqual('');
      expect($('#time-value').getText()).toEqual('');
      expect($('#ambiguous-date').getText()).toEqual('No');
      expect($('#complete-date').getText()).toEqual('No');
      expect($('#valid-date').getText()).toEqual('Yes');
    });

    it('tabs out of the component and onBlur is triggered', () => {
      $('#root').click();
      expect($('#blur-count').getText()).toEqual('1');
      expect($('#iso').getText()).toEqual('2019-05-01T10:10:00-05:00');
      expect($('#input-value').getText()).toEqual('05/01/2019 10:10');
      expect($('#date-value').getText()).toEqual('05/01/2019');
      expect($('#time-value').getText()).toEqual('10:10');
      expect($('#ambiguous-date').getText()).toEqual('No');
      expect($('#complete-date').getText()).toEqual('Yes');
      expect($('#valid-date').getText()).toEqual('Yes');
    });
  });

  describe('OnBlur with invalid date', () => {
    it('iso string is updated upon entering an invalid date', () => {
      browser.refresh();
      $('input[name="terra-date-input"]').setValue('04/01/2019');
      $('input[name="terra-time-hour-input"]').setValue('10');
      $('input[name="terra-time-minute-input"]30');
      $('#root').click();
      expect($('#iso').getText()).toEqual('2019-04-01T10:30:00-05:00');
      expect($('#input-value').getText()).toEqual('04/01/2019 10:30');
      expect($('#date-value').getText()).toEqual('04/01/2019');
      expect($('#time-value').getText()).toEqual('10:30');
      expect($('#ambiguous-date').getText()).toEqual('No');
      expect($('#complete-date').getText()).toEqual('Yes');
      expect($('#valid-date').getText()).toEqual('No');
    });
  });

  describe('OnBlur with empty date-time', () => {
    it('is triggered ', () => {
      browser.refresh();
      $('input[name="terra-time-minute-input"]').click();
      $('#root').click();
      expect($('#blur-count').getText()).toEqual('1');
      expect($('#focus-count').getText()).toEqual('1');
      expect($('#iso').getText()).toEqual('');
      expect($('#input-value').getText()).toEqual('');
      expect($('#date-value').getText()).toEqual('');
      expect($('#time-value').getText()).toEqual('');
      expect($('#ambiguous-date').getText()).toEqual('No');
      expect($('#complete-date').getText()).toEqual('No');
      expect($('#valid-date').getText()).toEqual('Yes');
    });
  });

  describe('OnBlur metadata', () => {
    it('missing hour', () => {
      browser.refresh();
      $('input[name="terra-date-input"]').setValue('03/10/2019');
      $('input[name="terra-time-hour-input"]').setValue('02');
      $('input[name="terra-time-minute-input"]').setValue('30');
      $('#root').click();
      $('#iso').waitForDisplayed();
      expect($('#iso').getText()).toEqual('2019-03-10T03:30:00-05:00');
      expect($('#input-value').getText()).toEqual('03/10/2019 03:30');
      expect($('#date-value').getText()).toEqual('03/10/2019');
      expect($('#time-value').getText()).toEqual('03:30');
      expect($('#ambiguous-date').getText()).toEqual('No');
      expect($('#complete-date').getText()).toEqual('Yes');
      expect($('#valid-date').getText()).toEqual('Yes');
    });
  });

  describe('OnBlur with only date', () => {
    it('triggers onBlur with date only', () => {
      browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-focus-blur');
      $('input[name="terra-date-input"]').setValue('05/01/2019');
      $('#root').click();
      expect($('#iso').getText()).toEqual('');
      expect($('#input-value').getText()).toEqual('05/01/2019');
      expect($('#date-value').getText()).toEqual('05/01/2019');
      expect($('#time-value').getText()).toEqual('');
      expect($('#ambiguous-date').getText()).toEqual('No');
      expect($('#complete-date').getText()).toEqual('No');
      expect($('#valid-date').getText()).toEqual('No');
    });
  });

  describe('OnBlur with only time', () => {
    it('triggers onBlur with time only', () => {
      browser.refresh();
      $('input[name="terra-time-hour-input"]').setValue('10');
      $('input[name="terra-time-minute-input"]').setValue('30');
      $('#root').click();
      expect($('#iso').getText()).toEqual('');
      expect($('#input-value').getText()).toEqual('10:30');
      expect($('#date-value').getText()).toEqual('');
      expect($('#time-value').getText()).toEqual('10:30');
      expect($('#ambiguous-date').getText()).toEqual('No');
      expect($('#complete-date').getText()).toEqual('No');
      expect($('#valid-date').getText()).toEqual('No');
    });
  });

  describe('Auto focus', () => {
    it('moves focus to hour input on valid entry completion', () => {
      browser.refresh();
      // Removes the blinking cursor to prevent screenshot mismatches.
      Terra.hideInputCaret('input[name="terra-time-hour-input"]');
      $('input[name="terra-date-input"]').setValue('04/15/2019');
      Terra.validates.element('move focus to hour');
    });
  });

  describe('OnChange', () => {
    it('is triggered', () => {
      browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-on-change');
      // Removes the blinking cursor to prevent screenshot mismatches.
      Terra.hideInputCaret('input[name="terra-time-minute-input"]');
      $('input[name="terra-date-input"]').setValue('07/12/2017');
      $('input[name="terra-time-hour-input"]').setValue('10');
      $('input[name="terra-time-minute-input"]').setValue('30');
      expect($('#iso').getText()).toEqual('2017-07-12T10:30:00-05:00');
      expect($('#input-value').getText()).toEqual('07/12/2017 10:30');
      expect($('#date-value').getText()).toEqual('07/12/2017');
      expect($('#time-value').getText()).toEqual('10:30');
      expect($('#ambiguous-date').getText()).toEqual('No');
      expect($('#complete-date').getText()).toEqual('Yes');
      expect($('#valid-date').getText()).toEqual('Yes');
      Terra.validates.element('onChange triggered');
    });

    it('missing hour', () => {
      browser.refresh();
      $('input[name="terra-date-input"]').setValue('03/10/2019');
      $('input[name="terra-time-hour-input"]').setValue('02');
      $('input[name="terra-time-minute-input"]').setValue('30');
      $('#iso').waitForDisplayed();
      expect($('#iso').getText()).toEqual('2019-03-10T03:30:00-05:00');
      expect($('#input-value').getText()).toEqual('03/10/2019 03:30');
      expect($('#date-value').getText()).toEqual('03/10/2019');
      expect($('#time-value').getText()).toEqual('03:30');
      expect($('#ambiguous-date').getText()).toEqual('No');
      expect($('#complete-date').getText()).toEqual('Yes');
      expect($('#valid-date').getText()).toEqual('Yes');
      Terra.validates.element('missing hour');
    });
  });

  describe('Sync Date Time', () => {
    it('Entering valid date with empty time does not trigger onChange', () => {
      browser.refresh();
      // Removes the blinking cursor to prevent screenshot mismatches.
      Terra.hideInputCaret('input[name="terra-time-minute-input"]');
      Terra.hideInputCaret('input[name="terra-time-hour-input"]');
      $('input[name="terra-date-input"]').setValue('04/17/2019');
      Terra.validates.element('valid-date');
    });

    it('Entering valid date and time triggers onChange', () => {
      $('input[name="terra-time-hour-input"]').setValue('10');
      $('input[name="terra-time-minute-input"]').setValue('30');
      Terra.validates.element('valid-time');
    });

    it('Change date to invalid and modify time.', () => {
      $('input[name="terra-date-input"]').setValue('04/17/20');
      $('input[name="terra-time-hour-input"]').setValue('12');
      $('input[name="terra-time-minute-input"]').setValue('45');
      Terra.validates.element('invalid-date');
    });

    it('Time persists when date becomes valid', () => {
      $('input[name="terra-date-input"]').setValue('04/18/2019');
      Terra.validates.element('modified-valid-time');
    });
  });

  describe('OnChange Raw', () => {
    it('is triggered', () => {
      browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-on-change-raw');
      // Removes the blinking cursor to prevent screenshot mismatches.
      Terra.hideInputCaret('input[name="terra-date-input"]');
      Terra.hideInputCaret('input[name="terra-time-minute-input"]');
      $('input[name="terra-date-input"]').setValue('07/12');
      $('input[name="terra-time-hour-input"]').setValue('10');
      $('input[name="terra-time-minute-input"]').setValue('30');
      $('input[name="terra-date-input"]').setValue('/2017');
      expect($('#iso').getText()).toEqual('');
      expect($('#input-value').getText()).toEqual('/2017 10:30');
      expect($('#date-value').getText()).toEqual('/2017');
      expect($('#time-value').getText()).toEqual('10:30');
      expect($('#ambiguous-date').getText()).toEqual('No');
      expect($('#complete-date').getText()).toEqual('No');
      expect($('#valid-date').getText()).toEqual('No');
      Terra.validates.element('triggered');
    });

    it('missing hour', () => {
      browser.refresh();
      $('input[name="terra-date-input"]').setValue('03/10/2019');
      $('input[name="terra-time-hour-input"]').setValue('02');
      $('input[name="terra-time-minute-input"]').setValue('30');
      $('#iso').waitForDisplayed();
      expect($('#iso').getText()).toEqual('2019-03-10T03:30:00-05:00');
      expect($('#input-value').getText()).toEqual('03/10/2019 03:30');
      expect($('#date-value').getText()).toEqual('03/10/2019');
      expect($('#time-value').getText()).toEqual('03:30');
      expect($('#ambiguous-date').getText()).toEqual('No');
      expect($('#complete-date').getText()).toEqual('Yes');
      expect($('#valid-date').getText()).toEqual('Yes');
      Terra.validates.element('missing hour');
    });
  });

  it('should disable Excluded Dates', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-exclude-dates');
    $('[class*="button"]').click();
    Terra.validates.element('excluded dates disabled', { selector: '[data-terra-date-picker-calendar]' });
  });

  it('should disable filtered dates', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-filter-dates');
    $('[class*="button"]').click();
    Terra.validates.element('filtered dates disabled', { selector: '[data-terra-date-picker-calendar]' });
  });

  it('should enable Included Dates', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-include-dates');
    $('[class*="button"]').click();
    Terra.validates.element('included dates enabled', { selector: '[data-terra-date-picker-calendar]' });
  });

  describe('OnSelect', () => {
    it('displays date time picker', () => {
      browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-on-select');
      Terra.validates.element('display picker');
    });

    it('Select a date from the picker', () => {
      $('[class*="button"]').click();
      $('[class*="react-datepicker-week"] > *:nth-child(2)').click();
      Terra.validates.element('select date');
    });

    it('Trigger onChange', () => {
      Terra.hideInputCaret('input[name="terra-time-hour-input"]');
      $('input[name="terra-date-input"]').setValue('07/12/2017');
      Terra.validates.element('trigger onChange');
    });
  });

  it('Clears the default date and time on the calendar button click when default date is excluded', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-excluded');
    $('[class*="button"]').click();
    expect($('#date-time-value').getText()).toEqual('');
  });

  it('Clears the default date and time on date input focus when default date is excluded', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-excluded');
    $('input[name="terra-date-input"]').click();
    Terra.validates.element('clear excluded date - date focus');
  });

  it('Clears the default date and time on hour input focus when default date is excluded', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-excluded');
    // Removes the blinking cursor to prevent screenshot mismatches.
    Terra.hideInputCaret('input[name="terra-time-hour-input"]');
    $('input[name="terra-time-hour-input"]').click();
    Terra.validates.element('clear excluded date - hour focus');
  });

  it('Clears the default date and time on minute input focus when default date is excluded', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-excluded');
    // Removes the blinking cursor to prevent screenshot mismatches.
    Terra.hideInputCaret('input[name="terra-time-minute-input"]');
    $('input[name="terra-time-minute-input"]').click();
    Terra.validates.element('clear excluded date - minute focus');
  });

  it('Clears the default date and time on date input focus when default date is out of range', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-out-of-range');
    $('input[name="terra-date-input"]').click();
    Terra.validates.element('clear out of range date - date focus');
  });

  it('Clears the default date and time on hour input focus when default date is out of range', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-out-of-range');
    // Removes the blinking cursor to prevent screenshot mismatches.
    Terra.hideInputCaret('input[name="terra-time-hour-input"]');
    $('input[name="terra-time-hour-input"]').click();
    Terra.validates.element('clear out of range date - hour focus');
  });

  it('Clears the default date and time on minute input focus when default date is out of range', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-out-of-range');
    // Removes the blinking cursor to prevent screenshot mismatches.
    Terra.hideInputCaret('input[name="terra-time-minute-input"]');
    $('input[name="terra-time-minute-input"]').click();
    Terra.validates.element('clear out of range date - minute focus');
  });

  it('displays Time Input in Twelve Hour format when timeVariant is specified', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-time-input-attributes');
    Terra.validates.element('twelve hour');
  });

  it('displays Time Input with seconds field', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-with-seconds');
    Terra.validates.element('with seconds field');
  });

  it('displays Time Input with seconds field and twelve hour format', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-seconds-twelve-hour');
    Terra.validates.element('twelve hour and seconds field');
  });

  describe('onBlur (CDT to CST)', () => {
    it('displays before DST resolution', () => {
      browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-dst-blur');
      $('input[name="terra-time-minute-input"]').click();
      browser.keys('Tab');
      $('[class*="time-clarification"]').waitForDisplayed();
      Terra.validates.element('before DST resolution', { selector: '#root' });
    });

    it('handles blur after date-time ambiguity is resolved', () => {
      $('[class*="button-daylight"]').click();
      Terra.validates.element('after DST resolution', { selector: '#root' });
    });

    it('updates the underlying date-time upon changing the offset using the offset button', () => {
      $('[class*="button-offset"]').click();
      $('[class*="time-clarification"]').waitForDisplayed();
      $('[class*="button-standard"]').click();
      browser.keys('Tab'); // This is _needed_ to remove focus from the offset button.
      Terra.validates.element('after offset change', { selector: '#root' });
    });
  });

  describe('onBlur (CST to CDT)', () => {
    it('displays before DST resolution', () => {
      browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-dst-blur');
      $('input[name="terra-time-minute-input"]').click();
      browser.keys('Tab');
      $('[class*="time-clarification"]').waitForDisplayed();
      Terra.validates.element('before DST resolution', { selector: '#root' });
    });

    it('handles blur after date-time ambiguity is resolved', () => {
      $('[class*="button-standard"]').click();
      Terra.validates.element('after DST resolution', { selector: '#root' });
    });

    it('updates the underlying date-time upon changing the offset using the offset button', () => {
      $('[class*="button-offset"]').click();
      $('[class*="time-clarification"]').waitForDisplayed();
      $('[class*="button-daylight"]').click();
      browser.keys('Tab'); // This is _needed_ to remove focus from the offset button.
      Terra.validates.element('after offset change', { selector: '#root' });
    });
  });

  describe('Should not allow user to change date programmatically', () => {
    it('displays date time before button click', () => {
      browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-changing-default-value-programmatically');
      Terra.validates.element('date-time before button click', { selector: '#root' });
    });

    it('updating date and time value programmatically on button click', () => {
      $('#button1').click();
      Terra.validates.element('date-time remains unchanged after button click', { selector: '#root' });
    });
  });

  it('should remount component', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-remount');
    $('input[name="terra-date-input"]').setValue('04/07/2020');
    Terra.validates.element('remounts component');
  });

  it('displays with timezone', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-with-timezone');
    Terra.validates.element('With Timezone', { selector: '#root' });
  });

  it('With timezone', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-with-timezone-dst');
    browser.refresh();
    Terra.hideInputCaret('input[name="terra-time-minute-input"]');
    $('input[name="terra-date-input"]').clearValue();
    $('input[name="terra-date-input"]').setValue('03/11/2018');
    $('input[name="terra-time-hour-input"]').setValue('02');
    $('input[name="terra-time-minute-input"]').setValue('30');
    Terra.validates.element('missing hour');
  });

  it('With timezone', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-with-timezone-dst');
    browser.refresh();
    $('input[name="terra-time-minute-input"]').click();
    browser.keys('Tab');
    $('[class*="time-clarification"]').waitForDisplayed();
    Terra.validates.element('DST', { selector: '#root' });
  });

  it('With timezone and check todays date', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-with-timezone-dst');
    browser.refresh();
    $('[data-terra-open-calendar-button]').click();
    $('[class*="react-datepicker-today-button"]').click();
    expect($('[name="terra-date-input"]').getValue()).toEqual(moment().tz('America/Chicago').format('MM/DD/YYYY'));
  });
});
