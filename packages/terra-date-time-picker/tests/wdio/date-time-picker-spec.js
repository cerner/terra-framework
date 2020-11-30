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

  it('should Handle Missing Hour', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default');
    Terra.hideInputCaret('input[name="terra-time-minute-input"]');
    browser.setValue('input[name="terra-date-input"]', '03/11/2018');
    browser.setValue('input[name="terra-time-hour-input"]', '02');
    browser.setValue('input[name="terra-time-minute-input"]', '30');
    Terra.validates.element('handle missing hour');
  });

  it('should handle Re-entering Same Missing Hour Twice', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default');
    Terra.hideInputCaret('input[name="terra-time-minute-input"]');
    browser.setValue('input[name="terra-date-input"]', '03/11/2018');
    browser.setValue('input[name="terra-time-hour-input"]', '02');
    browser.setValue('input[name="terra-time-minute-input"]', '30');
    browser.clearElement('input[name="terra-time-hour-input"]');
    browser.setValue('input[name="terra-time-hour-input"]', '02');
    Terra.validates.element('re-enter missing hour');
  });

  it('displays Time Clarification Dialog', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-dst');
    browser.click('input[name="terra-time-minute-input"]');
    browser.keys('Tab');
    browser.waitForVisible('[class*="time-clarification"]');
    Terra.validates.element('time clarification dialog', { selector: '[class*="abstract-modal"]' });
  });

  describe('Time Clarification Dialog Dismissal', () => {
    it('displays open dialog', () => {
      browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-dst');
      browser.click('input[name="terra-time-minute-input"]');
      browser.keys('Tab');
      browser.waitForVisible('[class*="time-clarification"]');
      Terra.validates.element('dialog open', { selector: '[class*="abstract-modal"]' });
    });

    it('closes the dialog', () => {
      browser.click('[class*="button-daylight"]');
      Terra.validates.element('dialog closed');
    });
  });

  describe('Displays Offset button after clicking daylight button', () => {
    it('displays time clarification modal', () => {
      browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-dst');
      browser.click('input[name="terra-time-minute-input"]');
      browser.keys('Tab');
      browser.waitForVisible('[class*="time-clarification"]');
      Terra.validates.element('dialog open', { selector: '[class*="abstract-modal"]' });
    });

    it('hides the offset button', () => {
      browser.click('[class*="button-daylight"]');
      Terra.validates.element('offset button hidden');
    });
  });

  describe('Displays Offset button after clicking the standard time button', () => {
    it('displays time clarification modal', () => {
      browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-dst');
      browser.click('input[name="terra-time-minute-input"]');
      browser.keys('Tab');
      browser.waitForVisible('[class*="time-clarification"]');
      Terra.validates.element('dialog open', { selector: '[class*="abstract-modal"]' });
    });

    it('hides the offset button', () => {
      browser.click('[class*="button-standard"]');
      Terra.validates.element('offset button hidden');
    });
  });

  it('displays Time Clarification Dialog Disabled', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-dst-disabled');
    browser.click('input[name="terra-time-minute-input"]');
    browser.keys('Tab');
    browser.waitForVisible('[class*="time-clarification"]');
    browser.click('[class*="button-daylight"]');
    browser.click('#date-time-picker-toggler');
    browser.moveToObject('#root', 0, 0);
    Terra.validates.element('disabled time clarification dialog');
  });

  describe('OnBlur', () => {
    it('puts focus on the input', () => {
      browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-focus-blur');
      browser.click('input[name="terra-date-input"]');
      expect(browser.getText('#blur-count')).to.equal('0');
      expect(browser.getText('#focus-count')).to.equal('1');
      expect(browser.getText('#iso')).to.equal('');
      expect(browser.getText('#input-value')).to.equal('');
      expect(browser.getText('#date-value')).to.equal('');
      expect(browser.getText('#time-value')).to.equal('');
      expect(browser.getText('#ambiguous-date')).to.equal('No');
      expect(browser.getText('#complete-date')).to.equal('No');
      expect(browser.getText('#valid-date')).to.equal('Yes');
    });

    it('enter a complete date to move focus to the hour input and onBlur is not triggered', () => {
      browser.keys('05/01/2019');
      expect(browser.getText('#blur-count')).to.equal('0');
      expect(browser.getText('#focus-count')).to.equal('1');
      expect(browser.getText('#iso')).to.equal('');
      expect(browser.getText('#input-value')).to.equal('');
      expect(browser.getText('#date-value')).to.equal('');
      expect(browser.getText('#time-value')).to.equal('');
      expect(browser.getText('#ambiguous-date')).to.equal('No');
      expect(browser.getText('#complete-date')).to.equal('No');
      expect(browser.getText('#valid-date')).to.equal('Yes');
    });

    it('enter the hour to move focus to the minute input and onBlur is not triggered', () => {
      browser.setValue('input[name="terra-time-hour-input"]', '10');
      expect(browser.getText('#blur-count')).to.equal('0');
      expect(browser.getText('#focus-count')).to.equal('1');
      expect(browser.getText('#iso')).to.equal('');
      expect(browser.getText('#input-value')).to.equal('');
      expect(browser.getText('#date-value')).to.equal('');
      expect(browser.getText('#time-value')).to.equal('');
      expect(browser.getText('#ambiguous-date')).to.equal('No');
      expect(browser.getText('#complete-date')).to.equal('No');
      expect(browser.getText('#valid-date')).to.equal('Yes');
    });

    it('enter the minute and onBlur is not triggered', () => {
      browser.setValue('input[name="terra-time-minute-input"]', '10');
      expect(browser.getText('#blur-count')).to.equal('0');
      expect(browser.getText('#focus-count')).to.equal('1');
      expect(browser.getText('#iso')).to.equal('');
      expect(browser.getText('#input-value')).to.equal('');
      expect(browser.getText('#date-value')).to.equal('');
      expect(browser.getText('#time-value')).to.equal('');
      expect(browser.getText('#ambiguous-date')).to.equal('No');
      expect(browser.getText('#complete-date')).to.equal('No');
      expect(browser.getText('#valid-date')).to.equal('Yes');
    });

    it('tabs out of the component and onBlur is triggered', () => {
      browser.keys('Tab');
      expect(browser.getText('#blur-count')).to.equal('1');
      expect(browser.getText('#iso')).to.equal('2019-05-01T10:10:00-05:00');
      expect(browser.getText('#input-value')).to.equal('05/01/2019 10:10');
      expect(browser.getText('#date-value')).to.equal('05/01/2019');
      expect(browser.getText('#time-value')).to.equal('10:10');
      expect(browser.getText('#ambiguous-date')).to.equal('No');
      expect(browser.getText('#complete-date')).to.equal('Yes');
      expect(browser.getText('#valid-date')).to.equal('Yes');
    });
  });

  describe('OnBlur with invalid date', () => {
    it('iso string is updated upon entering an invalid date', () => {
      browser.refresh();
      browser.setValue('input[name="terra-date-input"]', '04/01/2019');
      browser.setValue('input[name="terra-time-hour-input"]', '10');
      browser.setValue('input[name="terra-time-minute-input"]', '30');
      browser.keys('Tab');
      expect(browser.getText('#iso')).to.equal('2019-04-01T10:30:00-05:00');
      expect(browser.getText('#input-value')).to.equal('04/01/2019 10:30');
      expect(browser.getText('#date-value')).to.equal('04/01/2019');
      expect(browser.getText('#time-value')).to.equal('10:30');
      expect(browser.getText('#ambiguous-date')).to.equal('No');
      expect(browser.getText('#complete-date')).to.equal('Yes');
      expect(browser.getText('#valid-date')).to.equal('No');
    });
  });

  describe('OnBlur with empty date-time', () => {
    it('is triggered ', () => {
      browser.refresh();
      browser.click('input[name="terra-time-minute-input"]');
      browser.keys('Tab');
      expect(browser.getText('#blur-count')).to.equal('1');
      expect(browser.getText('#focus-count')).to.equal('1');
      expect(browser.getText('#iso')).to.equal('');
      expect(browser.getText('#input-value')).to.equal('');
      expect(browser.getText('#date-value')).to.equal('');
      expect(browser.getText('#time-value')).to.equal('');
      expect(browser.getText('#ambiguous-date')).to.equal('No');
      expect(browser.getText('#complete-date')).to.equal('No');
      expect(browser.getText('#valid-date')).to.equal('Yes');
    });
  });

  describe('OnBlur metadata', () => {
    it('missing hour', () => {
      browser.refresh();
      browser.setValue('input[name="terra-date-input"]', '03/10/2019');
      browser.setValue('input[name="terra-time-hour-input"]', '02');
      browser.setValue('input[name="terra-time-minute-input"]', '30');
      browser.keys('Tab');
      browser.waitForVisible('#iso');
      expect(browser.getText('#iso')).to.equal('2019-03-10T03:30:00-05:00');
      expect(browser.getText('#input-value')).to.equal('03/10/2019 03:30');
      expect(browser.getText('#date-value')).to.equal('03/10/2019');
      expect(browser.getText('#time-value')).to.equal('03:30');
      expect(browser.getText('#ambiguous-date')).to.equal('No');
      expect(browser.getText('#complete-date')).to.equal('Yes');
      expect(browser.getText('#valid-date')).to.equal('Yes');
    });
  });

  describe('OnBlur with only date', () => {
    it('triggers onBlur with date only', () => {
      browser.refresh();
      browser.setValue('input[name="terra-date-input"]', '05/01/2019');
      browser.click('input[name="terra-time-minute-input"]');
      browser.keys('Tab');
      expect(browser.getText('#iso')).to.equal('');
      expect(browser.getText('#input-value')).to.equal('05/01/2019');
      expect(browser.getText('#date-value')).to.equal('05/01/2019');
      expect(browser.getText('#time-value')).to.equal('');
      expect(browser.getText('#ambiguous-date')).to.equal('No');
      expect(browser.getText('#complete-date')).to.equal('No');
      expect(browser.getText('#valid-date')).to.equal('No');
    });
  });

  describe('OnBlur with only time', () => {
    it('triggers onBlur with time only', () => {
      browser.refresh();
      browser.setValue('input[name="terra-time-hour-input"]', '10');
      browser.setValue('input[name="terra-time-minute-input"]', '30');
      browser.keys('Tab');
      expect(browser.getText('#iso')).to.equal('');
      expect(browser.getText('#input-value')).to.equal('10:30');
      expect(browser.getText('#date-value')).to.equal('');
      expect(browser.getText('#time-value')).to.equal('10:30');
      expect(browser.getText('#ambiguous-date')).to.equal('No');
      expect(browser.getText('#complete-date')).to.equal('No');
      expect(browser.getText('#valid-date')).to.equal('No');
    });
  });

  it('moves focus to hour input on Valid date entry ', () => {
    browser.refresh();
    // Removes the blinking cursor to prevent screenshot mismatches.
    Terra.hideInputCaret('input[name="terra-time-hour-input"]');
    browser.setValue('input[name="terra-date-input"]', '04/15/2019');
    Terra.validates.element('move focus to hour');
  });

  describe('OnChange', () => {
    it('is triggered', () => {
      browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-on-change');
      // Removes the blinking cursor to prevent screenshot mismatches.
      Terra.hideInputCaret('input[name="terra-time-minute-input"]');
      browser.setValue('input[name="terra-date-input"]', '07/12/2017');
      browser.setValue('input[name="terra-time-hour-input"]', '10');
      browser.setValue('input[name="terra-time-minute-input"]', '30');
      expect(browser.getText('#iso')).to.equal('2017-07-12T10:30:00-05:00');
      expect(browser.getText('#input-value')).to.equal('07/12/2017 10:30');
      expect(browser.getText('#date-value')).to.equal('07/12/2017');
      expect(browser.getText('#time-value')).to.equal('10:30');
      expect(browser.getText('#ambiguous-date')).to.equal('No');
      expect(browser.getText('#complete-date')).to.equal('Yes');
      expect(browser.getText('#valid-date')).to.equal('Yes');
      Terra.validates.element('onChange triggered');
    });

    it('missing hour', () => {
      browser.refresh();
      browser.setValue('input[name="terra-date-input"]', '03/10/2019');
      browser.setValue('input[name="terra-time-hour-input"]', '02');
      browser.setValue('input[name="terra-time-minute-input"]', '30');
      browser.waitForVisible('#iso');
      expect(browser.getText('#iso')).to.equal('2019-03-10T03:30:00-05:00');
      expect(browser.getText('#input-value')).to.equal('03/10/2019 03:30');
      expect(browser.getText('#date-value')).to.equal('03/10/2019');
      expect(browser.getText('#time-value')).to.equal('03:30');
      expect(browser.getText('#ambiguous-date')).to.equal('No');
      expect(browser.getText('#complete-date')).to.equal('Yes');
      expect(browser.getText('#valid-date')).to.equal('Yes');
      Terra.validates.element('missing hour');
    });
  });

  describe('Sync Date Time', () => {
    it('Entering valid date with empty time does not trigger onChange', () => {
      browser.refresh();
      // Removes the blinking cursor to prevent screenshot mismatches.
      Terra.hideInputCaret('input[name="terra-time-minute-input"]');
      Terra.hideInputCaret('input[name="terra-time-hour-input"]');
      browser.setValue('input[name="terra-date-input"]', '04/17/2019');
      Terra.validates.element('valid-date');
    });

    it('Entering valid date and time triggers onChange', () => {
      browser.setValue('input[name="terra-time-hour-input"]', '10');
      browser.setValue('input[name="terra-time-minute-input"]', '30');
      Terra.validates.element('valid-time');
    });

    it('Change date to invalid and modify time.', () => {
      browser.setValue('input[name="terra-date-input"]', '04/17/20');
      browser.setValue('input[name="terra-time-hour-input"]', '12');
      browser.setValue('input[name="terra-time-minute-input"]', '45');
      Terra.validates.element('invalid-date');
    });

    it('Time persists when date becomes valid', () => {
      browser.setValue('input[name="terra-date-input"]', '04/18/2019');
      Terra.validates.element('modified-valid-time');
    });
  });

  describe('OnChange Raw', () => {
    it('is triggered', () => {
      browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-on-change-raw');
      // Removes the blinking cursor to prevent screenshot mismatches.
      Terra.hideInputCaret('input[name="terra-time-minute-input"]');
      browser.setValue('input[name="terra-date-input"]', '07/12');
      browser.setValue('input[name="terra-time-hour-input"]', '10');
      browser.setValue('input[name="terra-time-minute-input"]', '30');
      browser.setValue('input[name="terra-date-input"]', '/2017');
      expect(browser.getText('#iso')).to.equal('');
      expect(browser.getText('#input-value')).to.equal('/2017 10:30');
      expect(browser.getText('#date-value')).to.equal('/2017');
      expect(browser.getText('#time-value')).to.equal('10:30');
      expect(browser.getText('#ambiguous-date')).to.equal('No');
      expect(browser.getText('#complete-date')).to.equal('No');
      expect(browser.getText('#valid-date')).to.equal('No');
      Terra.validates.element('triggered');
    });

    it('missing hour', () => {
      browser.refresh();
      browser.setValue('input[name="terra-date-input"]', '03/10/2019');
      browser.setValue('input[name="terra-time-hour-input"]', '02');
      browser.setValue('input[name="terra-time-minute-input"]', '30');
      browser.waitForVisible('#iso');
      expect(browser.getText('#iso')).to.equal('2019-03-10T03:30:00-05:00');
      expect(browser.getText('#input-value')).to.equal('03/10/2019 03:30');
      expect(browser.getText('#date-value')).to.equal('03/10/2019');
      expect(browser.getText('#time-value')).to.equal('03:30');
      expect(browser.getText('#ambiguous-date')).to.equal('No');
      expect(browser.getText('#complete-date')).to.equal('Yes');
      expect(browser.getText('#valid-date')).to.equal('Yes');
      Terra.validates.element('missing hour');
    });
  });

  it('should disable Excluded Dates', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-exclude-dates');
    browser.click('[class*="button"]');
    Terra.validates.element('excluded dates disabled', { selector: '[data-terra-date-picker-calendar]' });
  });

  it('should disable filtered dates', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-filter-dates');
    browser.click('[class*="button"]');
    Terra.validates.element('filtered dates disabled', { selector: '[data-terra-date-picker-calendar]' });
  });

  it('should enable Included Dates', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-include-dates');
    browser.click('[class*="button"]');
    Terra.validates.element('included dates enabled', { selector: '[data-terra-date-picker-calendar]' });
  });

  describe('OnSelect', () => {
    it('displays date time picker', () => {
      browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-on-select');
      Terra.validates.element('display picker');
    });

    it('Select a date from the picker', () => {
      browser.click('[class*="button"]');
      browser.click('[class*="react-datepicker-week"] > *:nth-child(2)');
      Terra.validates.element('select date');
    });

    it('Trigger onChange', () => {
      browser.setValue('input[name="terra-date-input"]', '07/12/2017');
      Terra.validates.element('trigger onChange');
    });
  });

  it('Clears the default date and time on the calendar button click when default date is excluded', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-excluded');
    browser.click('[class*="button"]');
    expect(browser.getText('#date-time-value')).to.equal('');
  });

  it('Clears the default date and time on date input focus when default date is excluded', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-excluded');
    browser.click('input[name="terra-date-input"]');
    Terra.validates.element('clear excluded date - date focus');
  });

  it('Clears the default date and time on hour input focus when default date is excluded', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-excluded');
    // Removes the blinking cursor to prevent screenshot mismatches.
    Terra.hideInputCaret('input[name="terra-time-hour-input"]');
    browser.click('input[name="terra-time-hour-input"]');
    Terra.validates.element('clear excluded date - hour focus');
  });

  it('Clears the default date and time on minute input focus when default date is excluded', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-excluded');
    // Removes the blinking cursor to prevent screenshot mismatches.
    Terra.hideInputCaret('input[name="terra-time-minute-input"]');
    browser.click('input[name="terra-time-minute-input"]');
    Terra.validates.element('clear excluded date - minute focus');
  });

  it('Clears the default date and time on date input focus when default date is out of range', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-out-of-range');
    browser.click('input[name="terra-date-input"]');
    Terra.validates.element('clear out of range date - date focus');
  });

  it('Clears the default date and time on hour input focus when default date is out of range', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-out-of-range');
    // Removes the blinking cursor to prevent screenshot mismatches.
    Terra.hideInputCaret('input[name="terra-time-hour-input"]');
    browser.click('input[name="terra-time-hour-input"]');
    Terra.validates.element('clear out of range date - hour focus');
  });

  it('Clears the default date and time on minute input focus when default date is out of range', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-out-of-range');
    // Removes the blinking cursor to prevent screenshot mismatches.
    Terra.hideInputCaret('input[name="terra-time-minute-input"]');
    browser.click('input[name="terra-time-minute-input"]');
    Terra.validates.element('clear out of range date - minute focus');
  });

  it('displays Time Input in Twelve Hour format when timeVariant is specified', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-time-input-attributes');
    Terra.validates.screenshot('twelve hour');
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
      browser.click('input[name="terra-time-minute-input"]');
      browser.keys('Tab');
      browser.waitForVisible('[class*="time-clarification"]');
      Terra.validates.element('before DST resolution', { selector: '#root' });
    });

    it('handles blur after date-time ambiguity is resolved', () => {
      browser.click('[class*="button-daylight"]');
      Terra.validates.element('after DST resolution', { selector: '#root' });
    });

    it('updates the underlying date-time upon changing the offset using the offset button', () => {
      browser.click('[class*="button-offset"]');
      browser.waitForVisible('[class*="time-clarification"]');
      browser.click('[class*="button-standard"]');
      browser.keys('Tab'); // This is _needed_ to remove focus from the offset button.
      Terra.validates.element('after offset change', { selector: '#root' });
    });
  });

  describe('onBlur (CST to CDT)', () => {
    it('displays before DST resolution', () => {
      browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-dst-blur');
      browser.click('input[name="terra-time-minute-input"]');
      browser.keys('Tab');
      browser.waitForVisible('[class*="time-clarification"]');
      Terra.validates.element('before DST resolution', { selector: '#root' });
    });

    it('handles blur after date-time ambiguity is resolved', () => {
      browser.click('[class*="button-standard"]');
      Terra.validates.element('after DST resolution', { selector: '#root' });
    });

    it('updates the underlying date-time upon changing the offset using the offset button', () => {
      browser.click('[class*="button-offset"]');
      browser.waitForVisible('[class*="time-clarification"]');
      browser.click('[class*="button-daylight"]');
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
      browser.click('#button1');
      Terra.validates.element('date-time remains unchanged after button click', { selector: '#root' });
    });
  });

  it('should remount component', () => {
    browser.url('/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-remount');
    browser.setValue('input[name="terra-date-input"]', '04/07/2020');
    Terra.validates.element('remounts component');
  });
});
