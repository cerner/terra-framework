const moment = require('moment-timezone');

Terra.describeViewports('DateTimePicker', ['tiny', 'large'], () => {
  it('displays Default date time picker', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default');

    Terra.validates.element('default');
  });

  it('displays invalid date time picker', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-invalid');

    Terra.validates.element('invalid');
  });

  it('displays Incomplete date time picker', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-incomplete');

    Terra.validates.element('incomplete');
  });

  it('displays Invalid and Incomplete date time picker', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-invalid-incomplete');

    Terra.validates.element('invalid and incomplete');
  });

  it('displays Default with Date', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-date-only');

    Terra.validates.element('with date');
  });

  it('displays Default with Date and Time', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-date-time');

    Terra.validates.element('with date and time');
  });

  it('should handle Re-entering Same Missing Hour Twice', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-with-timezone-dst');
    Terra.hideInputCaret('input[name="terra-time-minute-input"]');
    Terra.hideInputCaret('input[name="terra-time-hour-input"]');
    browser.keys('Tab');
    $('input[name="terra-date-month-input"]').waitForDisplayed();
    $('input[name="terra-date-day-input"]').waitForDisplayed();
    $('input[name="terra-date-year-input"]').waitForDisplayed();
    $('input[name="terra-time-hour-input"]').waitForDisplayed();
    $('input[name="terra-time-minute-input"]').waitForDisplayed();

    $('input[name="terra-date-month-input"]').addValue('03');
    $('input[name="terra-date-day-input"]').addValue('11');
    $('input[name="terra-date-year-input"]').addValue('2018');
    $('input[name="terra-time-hour-input"]').addValue('02');
    $('input[name="terra-time-minute-input"]').addValue('30');
    $('input[name="terra-time-hour-input"]').clearValue();
    $('input[name="terra-time-hour-input"]').addValue('02');

    Terra.validates.element('re-enter missing hour');
  });

  it('displays Time Clarification Dialog', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-dst');
    $('input[name="terra-time-minute-input"]').click();
    browser.keys('Tab');
    $('[class*="time-clarification"]').waitForDisplayed();

    Terra.validates.element('time clarification dialog', { selector: '[class*="abstract-modal"]' });
  });

  describe('Time Clarification Dialog Dismissal', () => {
    it('displays open dialog', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-dst');
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
      browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-dst');
      $('input[name="terra-time-minute-input"]').click();
      browser.keys('Tab');
      $('[class*="time-clarification"]').waitForDisplayed();

      Terra.validates.element('dialog open for daylight', { selector: '[class*="abstract-modal"]' });
    });

    it('hides the offset button', () => {
      $('[class*="button-daylight"]').click();

      Terra.validates.element('offset button hidden for daylight');
    });
  });

  describe('Displays Offset button after clicking the standard time button', () => {
    it('displays time clarification modal', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-dst');
      $('input[name="terra-time-minute-input"]').click();
      browser.keys('Tab');
      $('[class*="time-clarification"]').waitForDisplayed();

      Terra.validates.element('dialog open for standard time', { selector: '[class*="abstract-modal"]' });
    });

    it('hides the offset button', () => {
      $('[class*="button-standard"]').click();

      Terra.validates.element('offset button hidden for standard time');
    });
  });

  it('displays Time Clarification Dialog Disabled', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-dst-disabled');
    $('input[name="terra-time-minute-input"]').click();
    browser.keys('Tab');
    $('[class*="time-clarification"]').waitForDisplayed();
    $('[class*="button-daylight"]').click();
    $('#date-time-picker-toggler').click();
    $('#root').moveTo(0, 0);

    Terra.validates.element('disabled time clarification dialog');
  });

  describe('OnBlur', () => {
    it('puts focus on the input', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-focus-blur');
      $('input[name="terra-date-month-input"]').click();

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

    it('enter a complete date to keep focus on the year input and onBlur is not triggered', () => {
      browser.refresh();
      $('input[name="terra-date-month-input"]').setValue('05');
      $('input[name="terra-date-day-input"]').setValue('01');
      $('input[name="terra-date-year-input"]').setValue('2019');

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
      browser.refresh();
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
      browser.refresh();
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
      browser.refresh();
      $('input[name="terra-date-month-input"]').setValue('05');
      $('input[name="terra-date-day-input"]').setValue('01');
      $('input[name="terra-date-year-input"]').setValue('2019');
      $('input[name="terra-time-hour-input"]').setValue('10');
      $('input[name="terra-time-minute-input"]').setValue('10');
      $('#root').click();

      expect($('#blur-count').getText()).toEqual('2');
      expect($('#iso').getText()).toEqual('2019-05-01T10:10:00-05:00');
      expect($('#input-value').getText()).toEqual('05/01/2019 10:10');
      expect($('#date-value').getText()).toEqual('05/01/2019');
      expect($('#time-value').getText()).toEqual('10:10');
      expect($('#ambiguous-date').getText()).toEqual('No');
      expect($('#complete-date').getText()).toEqual('Yes');
      expect($('#valid-date').getText()).toEqual('Yes');
      expect($('#date-time').getText()).toEqual('{"date":"01","month":"05","year":"2019","hour":"10","minute":"10"}');
    });
  });

  describe('OnBlur with invalid date', () => {
    it('iso string is updated upon entering an invalid date', () => {
      browser.refresh();
      $('input[name="terra-date-month-input"]').setValue('04');
      $('input[name="terra-date-day-input"]').setValue('01');
      $('input[name="terra-date-year-input"]').setValue('2019');
      $('input[name="terra-time-hour-input"]').setValue('10');
      $('input[name="terra-time-minute-input"]').setValue('30');
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
      $('input[name="terra-date-month-input"]').setValue('03');
      $('input[name="terra-date-day-input"]').setValue('10');
      $('input[name="terra-date-year-input"]').setValue('2019');
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
      browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-focus-blur');
      $('input[name="terra-date-month-input"]').setValue('05');
      $('input[name="terra-date-day-input"]').setValue('01');
      $('input[name="terra-date-year-input"]').setValue('2019');
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

  describe('OnChange', () => {
    it('is triggered', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-on-change');
      Terra.hideInputCaret('input[name="terra-time-minute-input"]');
      Terra.hideInputCaret('input[name="terra-time-hour-input"]');
      $('input[name="terra-date-month-input"]').setValue('07');
      $('input[name="terra-date-day-input"]').setValue('12');
      $('input[name="terra-date-year-input"]').setValue('2017');
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

    it('keeps focus on year input on valid entry completion', () => {
      browser.refresh();
      Terra.hideInputCaret('input[name="terra-time-hour-input"]');
      $('input[name="terra-date-month-input"]').setValue('04');
      $('input[name="terra-date-day-input"]').setValue('15');
      $('input[name="terra-date-year-input"]').setValue('2019');

      Terra.validates.element('keep focus on year');
    });

    it('missing hour', () => {
      browser.refresh();
      Terra.hideInputCaret('input[name="terra-time-minute-input"]');
      $('input[name="terra-date-month-input"]').setValue('03');
      $('input[name="terra-date-day-input"]').setValue('10');
      $('input[name="terra-date-year-input"]').setValue('2019');
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
      Terra.validates.element('missing hour on change');
    });
  });

  describe('Sync Date Time', () => {
    it('Entering valid date with empty time does not trigger onChange', () => {
      browser.refresh();
      Terra.hideInputCaret('input[name="terra-date-year-input"]');
      Terra.hideInputCaret('input[name="terra-time-minute-input"]');
      Terra.hideInputCaret('input[name="terra-time-hour-input"]');
      $('input[name="terra-date-month-input"]').setValue('04');
      $('input[name="terra-date-day-input"]').setValue('17');
      $('input[name="terra-date-year-input"]').setValue('2019');

      Terra.validates.element('valid date');
    });

    it('Entering valid date and time triggers onChange', () => {
      $('input[name="terra-time-hour-input"]').setValue('10');
      $('input[name="terra-time-minute-input"]').setValue('30');

      Terra.validates.element('valid time');
    });
  });

  describe('OnChange Raw', () => {
    it('is triggered', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-on-change-raw');
      Terra.hideInputCaret('input[name="terra-date-year-input"]');
      Terra.hideInputCaret('input[name="terra-time-minute-input"]');
      $('input[name="terra-date-month-input"]').setValue('07');
      $('input[name="terra-date-day-input"]').setValue('12');
      $('input[name="terra-time-hour-input"]').setValue('10');
      $('input[name="terra-time-minute-input"]').setValue('30');
      $('input[name="terra-date-month-input"]').click();
      browser.keys('Delete');
      $('input[name="terra-date-day-input"]').click();
      browser.keys('Delete');
      $('input[name="terra-date-year-input"]').setValue('2017');

      expect($('#iso').getText()).toEqual('');
      expect($('#input-value').getText()).toEqual('//2017 10:30');
      expect($('#date-value').getText()).toEqual('//2017');
      expect($('#time-value').getText()).toEqual('10:30');
      expect($('#ambiguous-date').getText()).toEqual('No');
      expect($('#complete-date').getText()).toEqual('No');
      expect($('#valid-date').getText()).toEqual('No');
      Terra.validates.element('triggered');
    });

    it('missing hour', () => {
      browser.refresh();
      Terra.hideInputCaret('input[name="terra-time-minute-input"]');
      $('input[name="terra-date-month-input"]').setValue('03');
      $('input[name="terra-date-day-input"]').setValue('10');
      $('input[name="terra-date-year-input"]').setValue('2019');
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
      Terra.validates.element('missing hour on change raw');
    });
  });

  it('should disable Excluded Dates', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-exclude-dates');
    $('[class*="button"]').click();

    Terra.validates.element('excluded dates disabled', { selector: '[data-terra-date-picker-calendar]' });
  });

  it('should disable filtered dates', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-filter-dates');
    $('[class*="button"]').click();

    Terra.validates.element('filtered dates disabled', { selector: '[data-terra-date-picker-calendar]' });
  });

  it('should enable Included Dates', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-include-dates');
    $('[class*="button"]').click();

    Terra.validates.element('included dates enabled', { selector: '[data-terra-date-picker-calendar]' });
  });

  describe('OnSelect', () => {
    it('displays date time picker', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-on-select');
      Terra.hideInputCaret('input[name="terra-date-year-input"]');
      Terra.hideInputCaret('input[name="terra-time-hour-input"]');

      Terra.validates.element('display picker on select');
    });

    it('Select a date from the picker', () => {
      $('[class*="button"]').click();
      $('[class*="react-datepicker-week"] > *:nth-child(2)').click();

      Terra.validates.element('select date on select');
    });

    it('Trigger onChange', () => {
      $('input[name="terra-date-year-input"]').setValue('2019');

      Terra.validates.element('trigger onChange on select');
    });
  });

  it('Clears the default date and time on the calendar button click when default date is excluded', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-date-excluded');
    $('[class*="button"]').click();

    expect($('span[data-date-time-value]').getText()).toEqual('');
  });

  it('Clears the default date and time on date input focus when default date is excluded', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-date-excluded');
    $('input[name="terra-date-month-input"]').click();
    Terra.hideInputCaret('input[name="terra-date-month-input"]');

    Terra.validates.element('clear excluded date - date focus');
  });

  it('Clears the default date and time on hour input focus when default date is excluded', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-date-excluded');
    Terra.hideInputCaret('input[name="terra-time-hour-input"]');
    $('input[name="terra-time-hour-input"]').click();

    Terra.validates.element('clear excluded date - hour focus');
  });

  it('Clears the default date and time on minute input focus when default date is excluded', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-date-excluded');
    Terra.hideInputCaret('input[name="terra-time-minute-input"]');
    $('input[name="terra-time-minute-input"]').click();

    Terra.validates.element('clear excluded date - minute focus');
  });

  it('Clears the default date and time on date input focus when default date is out of range', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-date-out-of-range');
    $('input[name="terra-date-month-input"]').click();
    Terra.hideInputCaret('input[name="terra-date-month-input"]');

    Terra.validates.element('clear out of range date - date focus');
  });

  it('Clears the default date and time on hour input focus when default date is out of range', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-date-out-of-range');
    Terra.hideInputCaret('input[name="terra-time-hour-input"]');
    $('input[name="terra-time-hour-input"]').click();

    Terra.validates.element('clear out of range date - hour focus');
  });

  it('Clears the default date and time on minute input focus when default date is out of range', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-date-out-of-range');
    Terra.hideInputCaret('input[name="terra-time-minute-input"]');
    $('input[name="terra-time-minute-input"]').click();

    Terra.validates.element('clear out of range date - minute focus');
  });

  it('displays Time Input in Twelve Hour format when timeVariant is specified', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-time-input-attributes');

    Terra.validates.element('twelve hour');
  });

  it('displays Time Input with seconds field', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-with-seconds');

    Terra.validates.element('with seconds field');
  });

  it('displays Time Input with seconds field and twelve hour format', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-seconds-twelve-hour');

    Terra.validates.element('twelve hour and seconds field');
  });

  describe('onBlur (CDT to CST)', () => {
    it('displays before DST resolution', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-dst-blur');
      $('input[name="terra-time-minute-input"]').click();
      browser.keys('Tab');
      $('[class*="time-clarification"]').waitForDisplayed();

      Terra.validates.element('before DST resolution to CST', { selector: '#root' });
    });

    it('handles blur after date-time ambiguity is resolved', () => {
      $('[class*="button-daylight"]').click();

      Terra.validates.element('after DST resolution to CST', { selector: '#root' });
    });

    it('updates the underlying date-time upon changing the offset using the offset button', () => {
      $('[class*="button-offset"]').click();
      $('[class*="time-clarification"]').waitForDisplayed();
      $('[class*="button-standard"]').click();
      browser.keys('Tab'); // This is _needed_ to remove focus from the offset button.

      Terra.validates.element('after offset change to CST', { selector: '#root' });
    });
  });

  describe('onBlur (CST to CDT)', () => {
    it('displays before DST resolution', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-dst-blur');
      $('input[name="terra-time-minute-input"]').click();
      browser.keys('Tab');
      $('[class*="time-clarification"]').waitForDisplayed();

      Terra.validates.element('before DST resolution to CDT', { selector: '#root' });
    });

    it('handles blur after date-time ambiguity is resolved', () => {
      $('[class*="button-standard"]').click();

      Terra.validates.element('after DST resolution to CDT', { selector: '#root' });
    });

    it('updates the underlying date-time upon changing the offset using the offset button', () => {
      $('[class*="button-offset"]').click();
      $('[class*="time-clarification"]').waitForDisplayed();
      $('[class*="button-daylight"]').click();
      browser.keys('Tab'); // This is _needed_ to remove focus from the offset button.

      Terra.validates.element('after offset change to CDT', { selector: '#root' });
    });
  });

  describe('Should not allow user to change date programmatically', () => {
    it('displays date time before button click', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-changing-default-value-programmatically');

      Terra.validates.element('date-time before button click', { selector: '#root' });
    });

    it('updating date and time value programmatically on button click', () => {
      $('#button1').click();

      Terra.validates.element('date-time remains unchanged after button click', { selector: '#root' });
    });
  });

  it('should remount component', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-remount');
    $('input[name="terra-date-day-input"]').setValue('07');
    Terra.hideInputCaret('input[name="terra-date-day-input"]');

    Terra.validates.element('remounts component');
  });

  it('displays with timezone', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-with-timezone');

    Terra.validates.element('with timezone', { selector: '#root' });
  });

  it('With timezone', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-with-timezone-dst');
    browser.refresh();
    Terra.hideInputCaret('input[name="terra-time-minute-input"]');
    browser.keys('Tab');
    $('input[name="terra-date-month-input"]').waitForDisplayed();
    $('input[name="terra-date-day-input"]').waitForDisplayed();
    $('input[name="terra-date-year-input"]').waitForDisplayed();
    $('input[name="terra-time-hour-input"]').waitForDisplayed();
    $('input[name="terra-time-minute-input"]').waitForDisplayed();

    $('input[name="terra-date-month-input"]').addValue('03');
    $('input[name="terra-date-day-input"]').addValue('11');
    $('input[name="terra-date-year-input"]').addValue('2018');
    $('input[name="terra-time-hour-input"]').addValue('02');
    $('input[name="terra-time-minute-input"]').addValue('30');

    Terra.validates.element('missing hour with timezone');
  });

  it('With timezone', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-with-timezone-dst');
    browser.refresh();
    $('input[name="terra-time-minute-input"]').click();
    browser.keys('Tab');
    $('[class*="time-clarification"]').waitForDisplayed();

    Terra.validates.element('DST', { selector: '#root' });
  });

  it('With timezone and check todays date', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-with-timezone-dst');
    browser.refresh();
    $('[data-terra-open-calendar-button]').click();
    $('[class*="react-datepicker-today-button"]').click();

    expect($('input[data-terra-date-input-hidden="true"]').getValue()).toEqual(moment().tz('America/Chicago').format('YYYY-MM-DD'));
  });
});

Terra.describeViewports('DateTimePicker', ['large'], () => {
  describe('Keyboard Shortcuts', () => {
    describe('N', () => {
      describe('if blank date', () => {
        it('should set date to today in the hour input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default');
          browser.refresh();
          $('input[name="terra-time-hour-input"]').click();
          browser.keys('n');

          const today = moment.utc();
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue((`0${today.hour()}`).slice(-2));
          expect($('input[name="terra-time-minute-input"]')).toHaveValue((`0${today.minute()}`).slice(-2));
        });

        it('should set date to today in the minute input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default');
          browser.refresh();
          $('input[name="terra-time-minute-input"]').click();
          browser.keys('n');

          const today = moment.utc();
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue((`0${today.hour()}`).slice(-2));
          expect($('input[name="terra-time-minute-input"]')).toHaveValue((`0${today.minute()}`).slice(-2));
          const minuteValue = Number($('input[name="terra-time-minute-input"]').getValue());
          const minuteTimeValue = today.minutes();
          const minuteInRange = (minuteTimeValue === minuteValue + 1 || minuteTimeValue === minuteValue);
          expect(minuteInRange).toBe(true);
        });

        it('should set date to today in the second input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-with-seconds');
          browser.refresh();
          $('input[name="terra-time-second-input"]').click();
          browser.keys('n');

          const today = moment.utc();
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue((`0${today.hour()}`).slice(-2));
          expect($('input[name="terra-time-minute-input"]')).toHaveValue((`0${today.minute()}`).slice(-2));
          const secondsValue = Number($('input[name="terra-time-second-input"]').getValue());
          const secondsTimeValue = today.seconds();
          const secondsInRange = (secondsTimeValue === secondsValue + 1 || secondsTimeValue === secondsValue + 2 || secondsTimeValue === secondsValue);
          expect(secondsInRange).toBe(true);
        });
      });

      describe('if invalid date', () => {
        it('should set date to today in the hour input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default');
          browser.refresh();
          $('input[name="terra-date-year-input"]').click();
          browser.keys('2016');
          $('input[name="terra-date-month-input"]').click();
          browser.keys('05');
          $('input[name="terra-time-hour-input"]').click();
          browser.keys('n');

          const today = moment.utc();
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue((`0${today.hour()}`).slice(-2));
          expect($('input[name="terra-time-minute-input"]')).toHaveValue((`0${today.minute()}`).slice(-2));
        });

        it('should set date to today in the minute input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default');
          browser.refresh();
          $('input[name="terra-date-year-input"]').click();
          browser.keys('2016');
          $('input[name="terra-date-month-input"]').click();
          browser.keys('05');
          $('input[name="terra-time-minute-input"]').click();
          browser.keys('n');

          const today = moment.utc();
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue((`0${today.hour()}`).slice(-2));
          expect($('input[name="terra-time-minute-input"]')).toHaveValue((`0${today.minute()}`).slice(-2));
        });

        it('should set date to today in the second input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-with-seconds');
          browser.refresh();
          $('input[name="terra-date-year-input"]').click();
          browser.keys('2016');
          $('input[name="terra-date-month-input"]').click();
          browser.keys('05');
          $('input[name="terra-time-second-input"]').click();
          browser.keys('n');

          const today = moment.utc();
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue((`0${today.hour()}`).slice(-2));
          expect($('input[name="terra-time-minute-input"]')).toHaveValue((`0${today.minute()}`).slice(-2));
          const secondsValue = Number($('input[name="terra-time-second-input"]').getValue());
          const secondsTimeValue = today.seconds();
          const secondsInRange = (secondsTimeValue === secondsValue + 1 || secondsTimeValue === secondsValue + 2 || secondsTimeValue === secondsValue);
          expect(secondsInRange).toBe(true);
        });
      });

      describe('if valid date', () => {
        it('should set date to today in the hour input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-date-time');
          browser.refresh();
          $('input[name="terra-time-hour-input"]').click();
          browser.keys('n');

          const today = moment.utc();
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue((`0${today.hour()}`).slice(-2));
          expect($('input[name="terra-time-minute-input"]')).toHaveValue((`0${today.minute()}`).slice(-2));
        });

        it('should set date to today in the minute input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-date-time');
          browser.refresh();
          $('input[name="terra-time-minute-input"]').click();
          browser.keys('n');

          const today = moment.utc();
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue((`0${today.hour()}`).slice(-2));
          expect($('input[name="terra-time-minute-input"]')).toHaveValue((`0${today.minute()}`).slice(-2));
        });

        it('should set date to today in the second input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-date-time-with-seconds');
          browser.refresh();
          $('input[name="terra-time-second-input"]').click();
          browser.keys('n');

          const today = moment.utc();
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue((`0${today.hour()}`).slice(-2));
          expect($('input[name="terra-time-minute-input"]')).toHaveValue((`0${today.minute()}`).slice(-2));
        });
        const secondsValue = Number($('input[name="terra-time-second-input"]').getValue());
        const secondsTimeValue = today.seconds();
        const secondsInRange = (secondsTimeValue === secondsValue + 1 || secondsTimeValue === secondsValue + 2 || secondsTimeValue === secondsValue);
        expect(secondsInRange).toBe(true);
      });
    });

    describe('-', () => {
      describe('if blank date', () => {
        it('should set date to today and now minus 1 hour in the hour input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default');
          browser.refresh();
          $('input[name="terra-time-hour-input"]').click();
          browser.keys('-');

          const today = moment.utc().subtract(1, 'hours');
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue((`0${today.hour()}`).slice(-2));
          expect($('input[name="terra-time-minute-input"]')).toHaveValue((`0${today.minute()}`).slice(-2));
          const hourValue = Number($('input[name="terra-time-hour-input"]').getValue());
          const hourTimeValue = today.hours();
          const hourInRange = (hourTimeValue === hourValue + 1 || hourTimeValue === hourValue);
          expect(hourInRange).toBe(true);
        });

        it('should set date to today and now minus 1 minute in the minute input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default');
          browser.refresh();
          $('input[name="terra-time-minute-input"]').click();
          browser.keys('-');

          const today = moment.utc().subtract(1, 'minutes');
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue((`0${today.hour()}`).slice(-2));
          expect($('input[name="terra-time-minute-input"]')).toHaveValue((`0${today.minute()}`).slice(-2));
          const minuteValue = Number($('input[name="terra-time-minute-input"]').getValue());
          const minuteTimeValue = today.minutes();
          const minuteInRange = (minuteTimeValue === minuteValue + 1 || minuteTimeValue === minuteValue);
          expect(minuteInRange).toBe(true);
        });

        it('should set date to today and now minus 1 second in the second input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-with-seconds');
          browser.refresh();
          $('input[name="terra-time-second-input"]').click();
          browser.keys('-');

          const today = moment.utc().subtract(1, 'seconds');
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue((`0${today.hour()}`).slice(-2));
          expect($('input[name="terra-time-minute-input"]')).toHaveValue((`0${today.minute()}`).slice(-2));
        });
      });

      describe('if invalid date', () => {
        it('should set date to today and now minus 1 minute in the hour input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default');
          browser.refresh();
          $('input[name="terra-date-year-input"]').click();
          browser.keys('2016');
          $('input[name="terra-date-month-input"]').click();
          browser.keys('05');
          $('input[name="terra-time-hour-input"]').click();
          browser.keys('-');

          const today = moment.utc().subtract(1, 'minutes');
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue((`0${today.hour()}`).slice(-2));
          expect($('input[name="terra-time-minute-input"]')).toHaveValue((`0${today.minute()}`).slice(-2));
        });

        it('should set date to today and now minus 1 minute in the minute input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default');
          browser.refresh();
          $('input[name="terra-date-year-input"]').click();
          browser.keys('2016');
          $('input[name="terra-date-month-input"]').click();
          browser.keys('05');
          $('input[name="terra-time-minute-input"]').click();
          browser.keys('-');

          const today = moment.utc().subtract(1, 'minutes');
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue((`0${today.hour()}`).slice(-2));
          expect($('input[name="terra-time-minute-input"]')).toHaveValue((`0${today.minute()}`).slice(-2));
          const minuteValue = Number($('input[name="terra-time-minute-input"]').getValue());
          const minuteTimeValue = today.minutes();
          const minuteInRange = (minuteTimeValue === minuteValue + 1 || minuteTimeValue === minuteValue);
          expect(minuteInRange).toBe(true);
        });

        it('should set date to today and now minus 1 minute in the second input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-with-seconds');
          browser.refresh();
          $('input[name="terra-date-year-input"]').click();
          browser.keys('2016');
          $('input[name="terra-date-month-input"]').click();
          browser.keys('05');
          $('input[name="terra-time-second-input"]').click();
          browser.keys('-');

          const today = moment.utc().subtract(1, 'minutes');
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue((`0${today.hour()}`).slice(-2));
          expect($('input[name="terra-time-minute-input"]')).toHaveValue((`0${today.minute()}`).slice(-2));
        });
      });

      describe('if valid date', () => {
        it('should not change the date and lower time by 1 minute in the hour input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-date-time');
          browser.refresh();
          $('input[name="terra-time-hour-input"]').click();
          browser.keys('-');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('2017');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('08');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('08');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('10');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('29');
        });

        it('should not change the date and lower time by 1 minute in the minute input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-date-time');
          browser.refresh();
          $('input[name="terra-time-minute-input"]').click();
          browser.keys('-');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('2017');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('08');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('08');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('10');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('29');
        });

        it('should not change the date and lower time by 1 minute in the second input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-date-time-with-seconds');
          browser.refresh();
          $('input[name="terra-time-second-input"]').click();
          browser.keys('-');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('2017');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('08');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('08');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('10');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('29');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
        });

        it('should decrement date by one day if time is at 00:00', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-date-time-with-seconds');
          browser.refresh();
          $('input[name="terra-time-hour-input"]').click();
          browser.keys('000000');
          $('input[name="terra-time-second-input"]').click();
          browser.keys('-');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('2017');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('08');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('07');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('23');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('59');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
        });

        it('should not decrement date past minimum date possible', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-min-date');
          browser.refresh();
          $('input[name="terra-time-minute-input"]').click();
          browser.keys('-');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('1900');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('01');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('01');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('00');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('00');
        });

        describe('in DST', () => {
          it('should skip the DST Spring hour ', () => {
            browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-dst');
            browser.refresh();
            $('input[name="terra-date-year-input"]').click();
            browser.keys('2022');
            $('input[name="terra-date-month-input"]').click();
            browser.keys('03');
            $('input[name="terra-date-day-input"]').click();
            browser.keys('13');
            $('input[name="terra-time-hour-input"]').click();
            browser.keys('03');
            $('input[name="terra-time-minute-input"]').click();
            browser.keys('00');
            browser.keys('-');

            expect($('input[name="terra-date-year-input"]')).toHaveValue('2022');
            expect($('input[name="terra-date-month-input"]')).toHaveValue('03');
            expect($('input[name="terra-date-day-input"]')).toHaveValue('13');
            expect($('input[name="terra-time-hour-input"]')).toHaveValue('01');
            expect($('input[name="terra-time-minute-input"]')).toHaveValue('59');
          });

          it('should skip the DST Spring hour - Twelve Hour', () => {
            browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-dst-twelve-hour');
            browser.refresh();
            $('input[name="terra-date-year-input"]').click();
            browser.keys('2022');
            $('input[name="terra-date-month-input"]').click();
            browser.keys('03');
            $('input[name="terra-date-day-input"]').click();
            browser.keys('13');
            $('input[name="terra-time-hour-input"]').click();
            browser.keys('03');
            $('input[name="terra-time-minute-input"]').click();
            browser.keys('00');
            browser.keys('-');

            expect($('input[name="terra-date-year-input"]')).toHaveValue('2022');
            expect($('input[name="terra-date-month-input"]')).toHaveValue('03');
            expect($('input[name="terra-date-day-input"]')).toHaveValue('13');
            expect($('input[name="terra-time-hour-input"]')).toHaveValue('01');
            expect($('input[name="terra-time-minute-input"]')).toHaveValue('59');
          });

          it('should not trigger the Time Clarification dialog', () => {
            browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-dst');
            browser.refresh();
            $('input[name="terra-date-year-input"]').click();
            browser.keys('2022');
            $('input[name="terra-date-month-input"]').click();
            browser.keys('11');
            $('input[name="terra-date-day-input"]').click();
            browser.keys('06');
            $('input[name="terra-time-hour-input"]').click();
            browser.keys('02');
            $('input[name="terra-time-minute-input"]').click();
            browser.keys('00');
            browser.keys('-');
            Terra.validates.element('- keyboard shortcut results in no dialog', { selector: '#root' });

            $('#root').click();
            Terra.validates.element('- keyboard shortcut blurring results in dialog', { selector: '#root' });
          });

          it('should not trigger the Time Clarification dialog - Twelve Hour', () => {
            browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-dst-twelve-hour');
            browser.refresh();
            $('input[name="terra-date-year-input"]').click();
            browser.keys('2022');
            $('input[name="terra-date-month-input"]').click();
            browser.keys('11');
            $('input[name="terra-date-day-input"]').click();
            browser.keys('06');
            $('input[name="terra-time-hour-input"]').click();
            browser.keys('02');
            $('input[name="terra-time-minute-input"]').click();
            browser.keys('00');
            browser.keys('-');
            Terra.validates.element('- keyboard shortcut results in no dialog - Twelve Hour', { selector: '#root' });

            $('#root').click();
            Terra.validates.element('- keyboard shortcut blurring results in dialog - Twelve Hour', { selector: '#root' });
          });

          it('should leave DST Fall time clarified hour', () => {
            browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-dst');
            browser.refresh();
            $('input[name="terra-date-year-input"]').click();
            browser.keys('2022');
            $('input[name="terra-date-month-input"]').click();
            browser.keys('11');
            $('input[name="terra-date-day-input"]').click();
            browser.keys('06');
            $('input[name="terra-time-hour-input"]').click();
            browser.keys('01');
            $('input[name="terra-time-minute-input"]').click();
            browser.keys('00');
            $('#root').click();
            $('[class*="time-clarification"]').waitForDisplayed();
            $('[class*="button-daylight"]').click();
            $('input[name="terra-time-minute-input"]').click();
            browser.keys('-');

            expect($('input[name="terra-date-year-input"]')).toHaveValue('2022');
            expect($('input[name="terra-date-month-input"]')).toHaveValue('11');
            expect($('input[name="terra-date-day-input"]')).toHaveValue('06');
            expect($('input[name="terra-time-hour-input"]')).toHaveValue('00');
            expect($('input[name="terra-time-minute-input"]')).toHaveValue('59');
          });

          it('should leave DST Fall time clarified hour - Twelve Hour', () => {
            browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-dst-twelve-hour');
            browser.refresh();
            $('input[name="terra-date-year-input"]').click();
            browser.keys('2022');
            $('input[name="terra-date-month-input"]').click();
            browser.keys('11');
            $('input[name="terra-date-day-input"]').click();
            browser.keys('06');
            $('input[name="terra-time-hour-input"]').click();
            browser.keys('01');
            $('input[name="terra-time-minute-input"]').click();
            browser.keys('00');
            $('#root').click();
            $('[class*="time-clarification"]').waitForDisplayed();
            $('[class*="button-daylight"]').click();
            $('input[name="terra-time-minute-input"]').click();
            browser.keys('-');

            expect($('input[name="terra-date-year-input"]')).toHaveValue('2022');
            expect($('input[name="terra-date-month-input"]')).toHaveValue('11');
            expect($('input[name="terra-date-day-input"]')).toHaveValue('06');
            expect($('input[name="terra-time-hour-input"]')).toHaveValue('12');
            expect($('input[name="terra-time-minute-input"]')).toHaveValue('59');
          });
        });
      });
    });

    describe('+', () => {
      describe('if blank date', () => {
        it('should set date to today and now plus 1 hour in the hour input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default');
          browser.refresh();
          $('input[name="terra-time-hour-input"]').click();
          browser.keys('+');

          const today = moment.utc().add(1, 'hours');
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue((`0${today.hour()}`).slice(-2));
          expect($('input[name="terra-time-minute-input"]')).toHaveValue((`0${today.minute()}`).slice(-2));
          const hourValue = Number($('input[name="terra-time-hour-input"]').getValue());
          const hourTimeValue = today.hours();
          const hourInRange = (hourTimeValue === hourValue + 1 || hourTimeValue === hourValue);
          expect(hourInRange).toBe(true);
        });

        it('should set date to today and now plus 1 minute in the minute input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default');
          browser.refresh();
          $('input[name="terra-time-minute-input"]').click();
          browser.keys('+');

          const today = moment.utc().add(1, 'minutes');
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue((`0${today.hour()}`).slice(-2));
          expect($('input[name="terra-time-minute-input"]')).toHaveValue((`0${today.minute()}`).slice(-2));
          const minuteValue = Number($('input[name="terra-time-minute-input"]').getValue());
          const minuteTimeValue = today.minutes();
          const minuteInRange = (minuteTimeValue === minuteValue + 1 || minuteTimeValue === minuteValue);
          expect(minuteInRange).toBe(true);
        });

        it('should set date to today and now plus 1 seconds in the second input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-with-seconds');
          browser.refresh();
          $('input[name="terra-time-second-input"]').click();
          browser.keys('+');

          const today = moment.utc().add(1, 'seconds');
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue((`0${today.hour()}`).slice(-2));
          expect($('input[name="terra-time-minute-input"]')).toHaveValue((`0${today.minute()}`).slice(-2));
          const secondsValue = Number($('input[name="terra-time-second-input"]').getValue());
          const secondsTimeValue = today.seconds();
          const secondsInRange = (secondsTimeValue === secondsValue + 1 || secondsTimeValue === secondsValue + 2 || secondsTimeValue === secondsValue);
          expect(secondsInRange).toBe(true);
        });
      });

      describe('if invalid date', () => {
        it('should set date to today and now plus 1 minute in the hour input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default');
          browser.refresh();
          $('input[name="terra-date-year-input"]').click();
          browser.keys('2016');
          $('input[name="terra-date-month-input"]').click();
          browser.keys('05');
          $('input[name="terra-time-hour-input"]').click();
          browser.keys('+');

          const today = moment.utc().add(1, 'minutes');
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue((`0${today.hour()}`).slice(-2));
          expect($('input[name="terra-time-minute-input"]')).toHaveValue((`0${today.minute()}`).slice(-2));
        });

        it('should set date to today and now plus 1 minute in the minute input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default');
          browser.refresh();
          $('input[name="terra-date-year-input"]').click();
          browser.keys('2016');
          $('input[name="terra-date-month-input"]').click();
          browser.keys('05');
          $('input[name="terra-time-minute-input"]').click();
          browser.keys('+');

          const today = moment.utc().add(1, 'minutes');
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue((`0${today.hour()}`).slice(-2));
          expect($('input[name="terra-time-minute-input"]')).toHaveValue((`0${today.minute()}`).slice(-2));
          const minuteValue = Number($('input[name="terra-time-minute-input"]').getValue());
          const minuteTimeValue = today.minutes();
          const minuteInRange = (minuteTimeValue === minuteValue + 1 || minuteTimeValue === minuteValue);
          expect(minuteInRange).toBe(true);
        });

        it('should set date to today and now plus 1 second in the second input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-with-seconds');
          browser.refresh();
          $('input[name="terra-date-year-input"]').click();
          browser.keys('2016');
          $('input[name="terra-date-month-input"]').click();
          browser.keys('05');
          $('input[name="terra-time-second-input"]').click();
          browser.keys('+');

          const today = moment.utc().add(1, 'seconds');
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue((`0${today.hour()}`).slice(-2));
          expect($('input[name="terra-time-minute-input"]')).toHaveValue((`0${today.minute()}`).slice(-2));
        });
      });

      describe('if valid date', () => {
        it('should not change date and subtract 1 minute from the time in the hour input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-date-time');
          browser.refresh();
          $('input[name="terra-time-hour-input"]').click();
          browser.keys('+');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('2017');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('08');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('08');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('10');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('31');
        });

        it('should not change date and subtract 1 minute from the time in the minute input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-date-time');
          browser.refresh();
          $('input[name="terra-time-minute-input"]').click();
          browser.keys('+');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('2017');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('08');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('08');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('10');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('31');
        });

        it('should not change date and subtract 1 minute from the time in the second input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-date-time-with-seconds');
          browser.refresh();
          $('input[name="terra-time-second-input"]').click();
          browser.keys('+');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('2017');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('08');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('08');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('10');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('31');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
        });

        it('should increment date by one day if time is at 23:59', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-date-time-with-seconds');
          browser.refresh();
          $('input[name="terra-time-hour-input"]').click();
          browser.keys('2359');
          $('input[name="terra-time-second-input"]').click();
          browser.keys('+');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('2017');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('08');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('09');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('00');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('00');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
        });

        it('should not increment date past maximum datetime possible', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-max-date');
          browser.refresh();
          $('input[name="terra-time-minute-input"]').click();
          browser.keys('+');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('2100');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('12');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('31');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('23');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('59');
        });

        describe('in DST', () => {
          it('should skip the DST Spring hour ', () => {
            browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-dst');
            browser.refresh();
            $('input[name="terra-date-year-input"]').click();
            browser.keys('2022');
            $('input[name="terra-date-month-input"]').click();
            browser.keys('03');
            $('input[name="terra-date-day-input"]').click();
            browser.keys('13');
            $('input[name="terra-time-hour-input"]').click();
            browser.keys('01');
            $('input[name="terra-time-minute-input"]').click();
            browser.keys('59');
            browser.keys('+');

            expect($('input[name="terra-date-year-input"]')).toHaveValue('2022');
            expect($('input[name="terra-date-month-input"]')).toHaveValue('03');
            expect($('input[name="terra-date-day-input"]')).toHaveValue('13');
            expect($('input[name="terra-time-hour-input"]')).toHaveValue('03');
            expect($('input[name="terra-time-minute-input"]')).toHaveValue('00');
          });

          it('should skip the DST Spring hour - Twelve Hour', () => {
            browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-dst-twelve-hour');
            browser.refresh();
            $('input[name="terra-date-year-input"]').click();
            browser.keys('2022');
            $('input[name="terra-date-month-input"]').click();
            browser.keys('03');
            $('input[name="terra-date-day-input"]').click();
            browser.keys('13');
            $('input[name="terra-time-hour-input"]').click();
            browser.keys('01');
            $('input[name="terra-time-minute-input"]').click();
            browser.keys('59');
            browser.keys('+');

            expect($('input[name="terra-date-year-input"]')).toHaveValue('2022');
            expect($('input[name="terra-date-month-input"]')).toHaveValue('03');
            expect($('input[name="terra-date-day-input"]')).toHaveValue('13');
            expect($('input[name="terra-time-hour-input"]')).toHaveValue('03');
            expect($('input[name="terra-time-minute-input"]')).toHaveValue('00');
          });

          it('should not trigger the Time Clarification dialog', () => {
            browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-dst');
            browser.refresh();
            $('input[name="terra-date-year-input"]').click();
            browser.keys('2022');
            $('input[name="terra-date-month-input"]').click();
            browser.keys('11');
            $('input[name="terra-date-day-input"]').click();
            browser.keys('06');
            $('input[name="terra-time-hour-input"]').click();
            browser.keys('00');
            $('input[name="terra-time-minute-input"]').click();
            browser.keys('59');
            browser.keys('+');
            Terra.validates.element('+ keyboard shortcut results in no dialog', { selector: '#root' });

            $('#root').click();
            Terra.validates.element('+ keyboard shortcut blurring results in dialog', { selector: '#root' });
          });

          it('should not trigger the Time Clarification dialog - Twelve Hour', () => {
            browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-dst-twelve-hour');
            browser.refresh();
            $('input[name="terra-date-year-input"]').click();
            browser.keys('2022');
            $('input[name="terra-date-month-input"]').click();
            browser.keys('11');
            $('input[name="terra-date-day-input"]').click();
            browser.keys('06');
            $('input[name="terra-time-hour-input"]').click();
            browser.keys('12');
            $('input[name="terra-time-minute-input"]').click();
            browser.keys('59');
            browser.keys('+');
            Terra.validates.element('+ keyboard shortcut results in no dialog - Twelve Hour', { selector: '#root' });

            $('#root').click();
            Terra.validates.element('+ keyboard shortcut blurring results in dialog - Twelve Hour', { selector: '#root' });
          });

          it('should leave DST Fall time clarified hour', () => {
            browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-dst');
            browser.refresh();
            $('input[name="terra-date-year-input"]').click();
            browser.keys('2022');
            $('input[name="terra-date-month-input"]').click();
            browser.keys('11');
            $('input[name="terra-date-day-input"]').click();
            browser.keys('06');
            $('input[name="terra-time-hour-input"]').click();
            browser.keys('01');
            $('input[name="terra-time-minute-input"]').click();
            browser.keys('59');
            $('#root').click();
            $('[class*="time-clarification"]').waitForDisplayed();
            $('[class*="button-daylight"]').click();
            $('input[name="terra-time-minute-input"]').click();
            browser.keys('+');

            expect($('input[name="terra-date-year-input"]')).toHaveValue('2022');
            expect($('input[name="terra-date-month-input"]')).toHaveValue('11');
            expect($('input[name="terra-date-day-input"]')).toHaveValue('06');
            expect($('input[name="terra-time-hour-input"]')).toHaveValue('02');
            expect($('input[name="terra-time-minute-input"]')).toHaveValue('00');
          });

          it('should leave DST Fall time clarified hour  - Twelve Hour', () => {
            browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-dst-twelve-hour');
            browser.refresh();
            $('input[name="terra-date-year-input"]').click();
            browser.keys('2022');
            $('input[name="terra-date-month-input"]').click();
            browser.keys('11');
            $('input[name="terra-date-day-input"]').click();
            browser.keys('06');
            $('input[name="terra-time-hour-input"]').click();
            browser.keys('01');
            $('input[name="terra-time-minute-input"]').click();
            browser.keys('59');
            $('#root').click();
            $('[class*="time-clarification"]').waitForDisplayed();
            $('[class*="button-daylight"]').click();
            $('input[name="terra-time-minute-input"]').click();
            browser.keys('+');

            expect($('input[name="terra-date-year-input"]')).toHaveValue('2022');
            expect($('input[name="terra-date-month-input"]')).toHaveValue('11');
            expect($('input[name="terra-date-day-input"]')).toHaveValue('06');
            expect($('input[name="terra-time-hour-input"]')).toHaveValue('02');
            expect($('input[name="terra-time-minute-input"]')).toHaveValue('00');
          });

          it('should show the correct time when the day moves past the start date of  DST', () => {
            browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-dst');
            browser.refresh();
            $('input[name="terra-date-year-input"]').click();
            browser.keys('2020');
            $('input[name="terra-date-month-input"]').click();
            browser.keys('03');
            $('input[name="terra-date-day-input"]').click();
            browser.keys('07');
            $('input[name="terra-time-hour-input"]').click();
            browser.keys('02');
            $('input[name="terra-time-minute-input"]').click();
            browser.keys('30');
            $('input[name="terra-date-day-input"]').click();
            browser.keys('+');
            browser.keys('-');

            expect($('input[name="terra-date-year-input"]')).toHaveValue('2020');
            expect($('input[name="terra-date-month-input"]')).toHaveValue('03');
            expect($('input[name="terra-date-day-input"]')).toHaveValue('07');
            expect($('input[name="terra-time-hour-input"]')).toHaveValue('02');
            expect($('input[name="terra-time-minute-input"]')).toHaveValue('30');
          });
        });
      });
    });

    describe('A', () => {
      describe('if blank date', () => {
        it('should set date to today and time to 12:00 AM in the hour input ', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-seconds-twelve-hour');
          browser.refresh();
          $('input[name="terra-time-hour-input"]').click();
          browser.keys('a');

          const today = moment.utc();
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('12');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('00');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
          expect($('button[class*="meridiem"]')).toHaveAttrContaining('class', 'is-selected');
        });

        it('should set date to today and time to 12:00 AM in the minute input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-seconds-twelve-hour');
          browser.refresh();
          $('input[name="terra-time-minute-input"]').click();
          browser.keys('a');

          const today = moment.utc();
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('12');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('00');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
          expect($('button[class*="meridiem"]')).toHaveAttrContaining('class', 'is-selected');
        });

        it('should set date to today and time to 12:00 AM in the second input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-seconds-twelve-hour');
          browser.refresh();
          $('input[name="terra-time-second-input"]').click();
          browser.keys('a');

          const today = moment.utc();
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('12');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('00');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
          expect($('button[class*="meridiem"]')).toHaveAttrContaining('class', 'is-selected');
        });
      });

      describe('if invalid date', () => {
        it('should set date to today and time to 12:00 AM in the hour input ', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-seconds-twelve-hour');
          browser.refresh();
          $('input[name="terra-date-year-input"]').click();
          browser.keys('2016');
          $('input[name="terra-date-month-input"]').click();
          browser.keys('05');
          $('input[name="terra-time-hour-input"]').click();
          browser.keys('a');

          const today = moment.utc();
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('12');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('00');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
          expect($('button[class*="meridiem"]')).toHaveAttrContaining('class', 'is-selected');
        });

        it('should set date to today and time to 12:00 AM in the minute input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-seconds-twelve-hour');
          browser.refresh();
          $('input[name="terra-date-year-input"]').click();
          browser.keys('2016');
          $('input[name="terra-date-month-input"]').click();
          browser.keys('05');
          $('input[name="terra-time-minute-input"]').click();
          browser.keys('a');

          const today = moment.utc();
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('12');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('00');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
          expect($('button[class*="meridiem"]')).toHaveAttrContaining('class', 'is-selected');
        });

        it('should set date to today and time to 12:00 AM in the second input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-seconds-twelve-hour');
          browser.refresh();
          $('input[name="terra-date-year-input"]').click();
          browser.keys('2016');
          $('input[name="terra-date-month-input"]').click();
          browser.keys('05');
          $('input[name="terra-time-second-input"]').click();
          browser.keys('a');

          const today = moment.utc();
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('12');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('00');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
          expect($('button[class*="meridiem"]')).toHaveAttrContaining('class', 'is-selected');
        });
      });

      describe('if valid date and AM time', () => {
        it('should not change date and should leave time as AM in the hour input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-seconds-twelve-hour');
          browser.refresh();
          $('input[name="terra-time-hour-input"]').click();
          browser.keys('a');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('2017');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('08');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('08');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('10');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('30');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
          expect($('button[class*="meridiem"]')).toHaveAttrContaining('class', 'is-selected');
        });

        it('should not change date and should leave time as AM in the minute input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-seconds-twelve-hour');
          browser.refresh();
          $('input[name="terra-time-minute-input"]').click();
          browser.keys('a');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('2017');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('08');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('08');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('10');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('30');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
          expect($('button[class*="meridiem"]')).toHaveAttrContaining('class', 'is-selected');
        });

        it('should not change date and should leave time as AM in the second input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-seconds-twelve-hour');
          browser.refresh();
          $('input[name="terra-time-second-input"]').click();
          browser.keys('a');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('2017');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('08');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('08');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('10');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('30');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
          expect($('button[class*="meridiem"]')).toHaveAttrContaining('class', 'is-selected');
        });
      });

      describe('if valid date and PM time', () => {
        it('should not change date and should change time to AM in the hour input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-seconds-twelve-hour');
          browser.refresh();
          $('button[class*="meridiem"]:not([class*="is-selected"])').click();
          $('input[name="terra-time-hour-input"]').click();
          browser.keys('a');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('2017');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('08');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('08');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('10');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('30');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
          expect($('button[class*="meridiem"]')).toHaveAttrContaining('class', 'is-selected');
        });

        it('should not change date and should change time to AM in the minute input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-seconds-twelve-hour');
          browser.refresh();
          $('button[class*="meridiem"]:not([class*="is-selected"])').click();
          $('input[name="terra-time-minute-input"]').click();
          browser.keys('a');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('2017');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('08');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('08');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('10');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('30');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
          expect($('button[class*="meridiem"]')).toHaveAttrContaining('class', 'is-selected');
        });

        it('should not change date and should change time to AM in the second input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-seconds-twelve-hour');
          browser.refresh();
          $('button[class*="meridiem"]:not([class*="is-selected"])').click();
          $('input[name="terra-time-second-input"]').click();
          browser.keys('a');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('2017');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('08');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('08');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('10');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('30');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
          expect($('button[class*="meridiem"]')).toHaveAttrContaining('class', 'is-selected');
        });
      });

      describe('if 24 time', () => {
        it('should not do anything in hour input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default');
          browser.refresh();
          $('input[name="terra-time-hour-input"]').click();
          browser.keys('a');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('');
        });

        it('should not do anything in minute input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default');
          browser.refresh();
          $('input[name="terra-time-minute-input"]').click();
          browser.keys('a');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('');
        });

        it('should not do anything in second input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-with-seconds');
          browser.refresh();
          $('input[name="terra-time-second-input"]').click();
          browser.keys('a');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('');
        });
      });
    });

    describe('P', () => {
      describe('if blank date', () => {
        it('should set date to today and time to 12:00 PM in the hour input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-seconds-twelve-hour');
          browser.refresh();
          $('input[name="terra-time-hour-input"]').click();
          browser.keys('p');

          const today = moment.utc();
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('12');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('00');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
          expect($('button[class*="meridiem"]')).not.toHaveAttrContaining('class', 'is-selected');
        });

        it('should set date to today and time to 12:00 PM in the minute input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-seconds-twelve-hour');
          browser.refresh();
          $('input[name="terra-time-minute-input"]').click();
          browser.keys('p');

          const today = moment.utc();
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('12');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('00');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
          expect($('button[class*="meridiem"]')).not.toHaveAttrContaining('class', 'is-selected');
        });

        it('should set date to today and time to 12:00 PM in the second input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-seconds-twelve-hour');
          browser.refresh();
          $('input[name="terra-time-second-input"]').click();
          browser.keys('p');

          const today = moment.utc();
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('12');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('00');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
          expect($('button[class*="meridiem"]')).not.toHaveAttrContaining('class', 'is-selected');
        });
      });

      describe('if invalid date', () => {
        it('should set date to today and time to 12:00 PM in the hour input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-seconds-twelve-hour');
          browser.refresh();
          $('input[name="terra-date-year-input"]').click();
          browser.keys('2016');
          $('input[name="terra-date-month-input"]').click();
          browser.keys('05');
          $('input[name="terra-time-hour-input"]').click();
          browser.keys('p');

          const today = moment.utc();
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('12');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('00');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
          expect($('button[class*="meridiem"]')).not.toHaveAttrContaining('class', 'is-selected');
        });

        it('should set date to today and time to 12:00 PM in the minute input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-seconds-twelve-hour');
          browser.refresh();
          $('input[name="terra-date-year-input"]').click();
          browser.keys('2016');
          $('input[name="terra-date-month-input"]').click();
          browser.keys('05');
          $('input[name="terra-time-minute-input"]').click();
          browser.keys('p');

          const today = moment.utc();
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('12');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('00');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
          expect($('button[class*="meridiem"]')).not.toHaveAttrContaining('class', 'is-selected');
        });

        it('should set date to today and time to 12:00 PM in the second input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-seconds-twelve-hour');
          browser.refresh();
          $('input[name="terra-date-year-input"]').click();
          browser.keys('2016');
          $('input[name="terra-date-month-input"]').click();
          browser.keys('05');
          $('input[name="terra-time-second-input"]').click();
          browser.keys('p');

          const today = moment.utc();
          expect($('input[name="terra-date-year-input"]')).toHaveValue(today.year().toString());
          expect($('input[name="terra-date-month-input"]')).toHaveValue((`0${(today.month() + 1)}`).slice(-2));
          expect($('input[name="terra-date-day-input"]')).toHaveValue((`0${today.date()}`).slice(-2));
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('12');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('00');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
          expect($('button[class*="meridiem"]')).not.toHaveAttrContaining('class', 'is-selected');
        });
      });

      describe('if valid date and AM time', () => {
        it('should not change date and should change time to PM in the hour input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-seconds-twelve-hour');
          browser.refresh();
          $('input[name="terra-time-hour-input"]').click();
          browser.keys('p');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('2017');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('08');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('08');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('10');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('30');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
          expect($('button[class*="meridiem"]')).not.toHaveAttrContaining('class', 'is-selected');
        });

        it('should not change date and should change time to PM in the minute input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-seconds-twelve-hour');
          browser.refresh();
          $('input[name="terra-time-minute-input"]').click();
          browser.keys('p');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('2017');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('08');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('08');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('10');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('30');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
          expect($('button[class*="meridiem"]')).not.toHaveAttrContaining('class', 'is-selected');
        });

        it('should not change date and should change time to PM in the second input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-seconds-twelve-hour');
          browser.refresh();
          $('input[name="terra-time-second-input"]').click();
          browser.keys('p');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('2017');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('08');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('08');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('10');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('30');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
          expect($('button[class*="meridiem"]')).not.toHaveAttrContaining('class', 'is-selected');
        });
      });

      describe('if valid date and PM time', () => {
        it('should not change date and should keep time to PM in the hour input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-seconds-twelve-hour');
          browser.refresh();
          $('button[class*="meridiem"]:not([class*="is-selected"])').click();
          $('input[name="terra-time-hour-input"]').click();
          browser.keys('p');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('2017');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('08');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('08');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('10');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('30');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
          expect($('button[class*="meridiem"]')).not.toHaveAttrContaining('class', 'is-selected');
        });

        it('should not change date and should keep time to PM in the minute input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-seconds-twelve-hour');
          browser.refresh();
          $('button[class*="meridiem"]:not([class*="is-selected"])').click();
          $('input[name="terra-time-minute-input"]').click();
          browser.keys('p');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('2017');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('08');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('08');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('10');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('30');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
          expect($('button[class*="meridiem"]')).not.toHaveAttrContaining('class', 'is-selected');
        });

        it('should not change date and should keep time to PM in the second input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default-seconds-twelve-hour');
          browser.refresh();
          $('button[class*="meridiem"]:not([class*="is-selected"])').click();
          $('input[name="terra-time-second-input"]').click();
          browser.keys('p');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('2017');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('08');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('08');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('10');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('30');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('00');
          expect($('button[class*="meridiem"]')).not.toHaveAttrContaining('class', 'is-selected');
        });
      });

      describe('if 24 time', () => {
        it('should not do anything in hour input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default');
          browser.refresh();
          $('input[name="terra-time-hour-input"]').click();
          browser.keys('p');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('');
        });

        it('should not do anything in minute input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-default');
          browser.refresh();
          $('input[name="terra-time-minute-input"]').click();
          browser.keys('p');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('');
        });

        it('should not do anything in second input', () => {
          browser.url('/raw/tests/cerner-terra-framework-docs/date-time-picker/date-time-picker-with-seconds');
          browser.refresh();
          $('input[name="terra-time-second-input"]').click();
          browser.keys('p');

          expect($('input[name="terra-date-year-input"]')).toHaveValue('');
          expect($('input[name="terra-date-month-input"]')).toHaveValue('');
          expect($('input[name="terra-date-day-input"]')).toHaveValue('');
          expect($('input[name="terra-time-hour-input"]')).toHaveValue('');
          expect($('input[name="terra-time-minute-input"]')).toHaveValue('');
          expect($('input[name="terra-time-second-input"]')).toHaveValue('');
        });
      });
    });
  });
});

