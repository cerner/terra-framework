/* eslint-disable no-unused-expressions */
const moment = require('moment-timezone');

const ignoredA11y = {
  label: { enabled: false },
};

moment.tz.setDefault('America/Chicago');

Terra.describeViewports('DateTimePicker', ['tiny', 'large'], () => {
  describe('Default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default');
      browser.refresh();
    });

    Terra.it.isAccessible({ rules: ignoredA11y });
    Terra.it.matchesScreenshot();
  });

  describe('Invalid', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-invalid');
      browser.refresh();
    });

    Terra.it.isAccessible({ rules: ignoredA11y });
    Terra.it.matchesScreenshot();
  });

  describe('Incomplete', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-incomplete');
      browser.refresh();
    });

    Terra.it.isAccessible({ rules: ignoredA11y });
    Terra.it.matchesScreenshot();
  });

  describe('Invalid and Incomplete', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-invalid-incomplete');
      browser.refresh();
    });

    Terra.it.isAccessible({ rules: ignoredA11y });
    Terra.it.matchesScreenshot();
  });

  describe('Default with Date', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-only');
      browser.refresh();
    });

    Terra.it.isAccessible({ rules: ignoredA11y });
    Terra.it.matchesScreenshot();
  });

  describe('Default with Date and Time', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-time');
      browser.refresh();
    });

    Terra.it.isAccessible({ rules: ignoredA11y });
    Terra.it.matchesScreenshot();
  });

  describe('Handles Missing Hour', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default');
      browser.refresh();
      Terra.hideInputCaret('input[name="terra-time-minute-input"]');
      browser.setValue('input[name="terra-date-input"]', '03/11/2018');
      browser.setValue('input[name="terra-time-hour-input"]', '02');
      browser.setValue('input[name="terra-time-minute-input"]', '30');
    });

    Terra.it.isAccessible({ rules: ignoredA11y });
    Terra.it.matchesScreenshot();
  });

  describe('Handles Re-entering Same Missing Hour Twice', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default');
      browser.refresh();
      Terra.hideInputCaret('input[name="terra-time-minute-input"]');
      browser.setValue('input[name="terra-date-input"]', '03/11/2018');
      browser.setValue('input[name="terra-time-hour-input"]', '02');
      browser.setValue('input[name="terra-time-minute-input"]', '30');
      browser.clearElement('input[name="terra-time-hour-input"]');
      browser.setValue('input[name="terra-time-hour-input"]', '02');
    });

    Terra.it.isAccessible({ rules: ignoredA11y });
    Terra.it.matchesScreenshot();
  });

  describe('Time Clarification Dialog', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-dst');
      browser.click('input[name="terra-time-minute-input"]');
      browser.keys('Tab');
      browser.waitForVisible('[class*="time-clarification"]');
    });

    Terra.it.isAccessible({ rules: ignoredA11y });
    Terra.it.matchesScreenshot('0', { selector: '[class*="abstract-modal"]' });
  });

  describe('Time Clarification Dialog Dismissal', () => {
    Terra.it.matchesScreenshot('0', { selector: '[class*="abstract-modal"]' });

    it('closes the dialog', () => {
      browser.click('[class*="button-daylight"]');
    });

    Terra.it.matchesScreenshot('1');
  });

  describe('Displays Offset button after clicking daylight button', () => {
    before(() => {
      browser.refresh();
    });

    it('displays time clarification modal', () => {
      browser.click('input[name="terra-time-minute-input"]');
      browser.keys('Tab');
      browser.waitForVisible('[class*="time-clarification"]');
    });

    Terra.it.matchesScreenshot('0', { selector: '[class*="abstract-modal"]' });

    it('hides the offset button', () => {
      browser.click('[class*="button-daylight"]');
    });

    Terra.it.matchesScreenshot('1');
  });

  describe('Displays Offset button after clicking the standard time button', () => {
    before(() => {
      browser.refresh();
    });

    it('displays time clarification modal', () => {
      browser.click('input[name="terra-time-minute-input"]');
      browser.keys('Tab');
      browser.waitForVisible('[class*="time-clarification"]');
    });

    Terra.it.matchesScreenshot('0', { selector: '[class*="abstract-modal"]' });

    it('hides the offset button', () => {
      browser.click('[class*="button-standard"]');
    });

    Terra.it.matchesScreenshot('1');
  });

  describe('Time Clarification Dialog Disabled', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-dst-disabled');
      browser.click('input[name="terra-time-minute-input"]');
      browser.keys('Tab');
      browser.waitForVisible('[class*="time-clarification"]');
      browser.click('[class*="button-daylight"]');
      browser.click('#date-time-picker-toggler');
      browser.moveToObject('#root', 0, 0);
    });

    const ignoredDisabledAlly = { 'color-contrast': { enabled: false }, ...ignoredA11y };
    Terra.it.isAccessible({ rules: ignoredDisabledAlly });
    Terra.it.matchesScreenshot();
  });

  describe('OnBlur', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-focus-blur');
    });

    it('puts focus on the input', () => {
      browser.click('input[name="terra-date-input"]');
      expect(browser.getText('#blur-count')).to.equal('0');
      expect(browser.getText('#focus-count')).to.equal('1');
      expect(browser.getText('#iso')).to.equal('');
      expect(browser.getText('#input-value')).to.equal('');
      expect(browser.getText('#complete-date')).to.equal('No');
      expect(browser.getText('#valid-date')).to.equal('Yes');
    });

    it('enter a complete date to move focus to the hour input and onBlur is not triggered', () => {
      browser.keys('05/01/2019');
      expect(browser.getText('#blur-count')).to.equal('0');
      expect(browser.getText('#focus-count')).to.equal('1');
      expect(browser.getText('#iso')).to.equal('');
      expect(browser.getText('#input-value')).to.equal('');
      expect(browser.getText('#complete-date')).to.equal('No');
      expect(browser.getText('#valid-date')).to.equal('Yes');
    });

    it('enter the hour to move focus to the minute input and onBlur is not triggered', () => {
      browser.setValue('input[name="terra-time-hour-input"]', '10');
      expect(browser.getText('#blur-count')).to.equal('0');
      expect(browser.getText('#focus-count')).to.equal('1');
      expect(browser.getText('#iso')).to.equal('');
      expect(browser.getText('#input-value')).to.equal('');
      expect(browser.getText('#complete-date')).to.equal('No');
      expect(browser.getText('#valid-date')).to.equal('Yes');
    });

    it('enter the minute and onBlur is not triggered', () => {
      browser.setValue('input[name="terra-time-minute-input"]', '10');
      expect(browser.getText('#blur-count')).to.equal('0');
      expect(browser.getText('#focus-count')).to.equal('1');
      expect(browser.getText('#iso')).to.equal('');
      expect(browser.getText('#input-value')).to.equal('');
      expect(browser.getText('#complete-date')).to.equal('No');
      expect(browser.getText('#valid-date')).to.equal('Yes');
    });

    it('tabs out of the component and onBlur is triggered', () => {
      browser.keys('Tab');
      expect(browser.getText('#blur-count')).to.equal('1');
      expect(browser.getText('#iso')).to.equal('2019-05-01T10:10:00-05:00');
      expect(browser.getText('#input-value')).to.equal('05/01/2019 10:10');
      expect(browser.getText('#complete-date')).to.equal('Yes');
      expect(browser.getText('#valid-date')).to.equal('Yes');
    });
  });

  describe('OnBlur with empty date-time', () => {
    before(() => {
      browser.refresh();
    });

    it('is triggered ', () => {
      browser.click('input[name="terra-time-minute-input"]');
      browser.keys('Tab');
      expect(browser.getText('#blur-count')).to.equal('1');
      expect(browser.getText('#focus-count')).to.equal('1');
      expect(browser.getText('#iso')).to.equal('');
      expect(browser.getText('#input-value')).to.equal('');
      expect(browser.getText('#complete-date')).to.equal('No');
      expect(browser.getText('#valid-date')).to.equal('Yes');
    });
  });

  describe('Valid date entry moves focus to hour input', () => {
    before(() => {
      browser.refresh();
      // Removes the blinking cursor to prevent screenshot mismatches.
      Terra.hideInputCaret('input[name="terra-time-minute-input"]');
      browser.setValue('input[name="terra-date-input"]', '04/15/2019');
    });

    Terra.it.matchesScreenshot();
  });

  describe('OnChange', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-on-change');
      // Removes the blinking cursor to prevent screenshot mismatches.
      Terra.hideInputCaret('input[name="terra-time-minute-input"]');
      browser.setValue('input[name="terra-date-input"]', '07/12/2017');
      browser.setValue('input[name="terra-time-hour-input"]', '10');
      browser.setValue('input[name="terra-time-minute-input"]', '30');
    });

    Terra.it.matchesScreenshot();
  });

  describe('OnChange Raw', () => {
    before(() => {
      browser.refresh();
      Terra.hideInputCaret('input[name="terra-date-input"]');
      browser.setValue('input[name="terra-date-input"]', '07/12');
      browser.setValue('input[name="terra-time-hour-input"]', '10');
      browser.setValue('input[name="terra-time-minute-input"]', '30');
      browser.setValue('input[name="terra-date-input"]', '/2017');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Sync Date Time', () => {
    before(() => {
      browser.refresh();
      // Removes the blinking cursor to prevent screenshot mismatches.
      Terra.hideInputCaret('input[name="terra-time-minute-input"]');
      Terra.hideInputCaret('input[name="terra-time-hour-input"]');
    });

    it('Entering valid date with empty time does not trigger onChange', () => {
      browser.setValue('input[name="terra-date-input"]', '04/17/2019');
    });

    Terra.it.matchesScreenshot('valid-date');

    it('Entering valid date and time triggers onChange', () => {
      browser.setValue('input[name="terra-time-hour-input"]', '10');
      browser.setValue('input[name="terra-time-minute-input"]', '30');
    });

    Terra.it.matchesScreenshot('valid-time');

    it('Change date to invalid and modify time.', () => {
      browser.setValue('input[name="terra-date-input"]', '04/17/20');
      browser.setValue('input[name="terra-time-hour-input"]', '12');
      browser.setValue('input[name="terra-time-minute-input"]', '45');
    });

    Terra.it.matchesScreenshot('invalid-date');

    it('Time persists when date becomes valid', () => {
      browser.setValue('input[name="terra-date-input"]', '04/18/2019');
    });

    Terra.it.matchesScreenshot('modified-valid-time');
  });

  describe('Excluded Dates are Disabled', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-exclude-dates');
      browser.click('[class*="button"]');
    });

    Terra.it.matchesScreenshot({ selector: '[data-terra-date-picker-calendar]' });
  });

  describe('Filtered Dates are Disabled', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-filter-dates');
      browser.click('[class*="button"]');
    });

    Terra.it.matchesScreenshot({ selector: '[data-terra-date-picker-calendar]' });
  });

  describe('Included Dates are Enabled', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-include-dates');
      browser.click('[class*="button"]');
    });

    Terra.it.matchesScreenshot({ selector: '[data-terra-date-picker-calendar]' });
  });

  describe('OnSelect', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-on-select');
    });

    Terra.it.matchesScreenshot('0');

    it('Select a date from the picker', () => {
      browser.click('[class*="button"]');
      browser.click('[class*="react-datepicker-week"] > *:nth-child(2)');
    });

    Terra.it.matchesScreenshot('1');

    it('Trigger onChange', () => {
      browser.setValue('input[name="terra-date-input"]', '07/12/2017');
    });

    Terra.it.matchesScreenshot('2');
  });

  describe('Clears the default date and time on the calendar button click when default date is excluded', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-excluded');
      browser.click('[class*="button"]');

      expect(browser.getText('#date-time-value')).to.equal('');
    });
  });

  describe('Clears the default date and time on date input focus when default date is excluded', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-excluded');
      browser.refresh();
      browser.click('input[name="terra-date-input"]');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Clears the default date and time on hour input focus when default date is excluded', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-excluded');
      browser.refresh();
      // Removes the blinking cursor to prevent screenshot mismatches.
      Terra.hideInputCaret('input[name="terra-time-hour-input"]');
      browser.click('input[name="terra-time-hour-input"]');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Clears the default date and time on minute input focus when default date is excluded', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-excluded');
      browser.refresh();
      // Removes the blinking cursor to prevent screenshot mismatches.
      Terra.hideInputCaret('input[name="terra-time-minute-input"]');
      browser.click('input[name="terra-time-minute-input"]');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Clears the default date and time on date input focus when default date is out of range', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-out-of-range');
      browser.refresh();
      browser.click('input[name="terra-date-input"]');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Clears the default date and time on hour input focus when default date is out of range', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-out-of-range');
      browser.refresh();
      // Removes the blinking cursor to prevent screenshot mismatches.
      Terra.hideInputCaret('input[name="terra-time-hour-input"]');
      browser.click('input[name="terra-time-hour-input"]');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Clears the default date and time on minute input focus when default date is out of range', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-out-of-range');
      browser.refresh();
      // Removes the blinking cursor to prevent screenshot mismatches.
      Terra.hideInputCaret('input[name="terra-time-minute-input"]');
      browser.click('input[name="terra-time-minute-input"]');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Time Input displays Twelve Hour format when timeVariant is specified', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-time-input-attributes');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Time Input displays with seconds field', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-with-seconds');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Time Input displays with seconds field and twelve hour format', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-seconds-twelve-hour');
    });

    Terra.it.matchesScreenshot();
  });

  describe('onBlur (CDT to CST)', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-dst-blur');
      browser.refresh();
      browser.click('input[name="terra-time-minute-input"]');
      browser.keys('Tab');
      browser.waitForVisible('[class*="time-clarification"]');
    });

    Terra.it.matchesScreenshot('before DST resolution', { selector: '#root' });

    it('handles blur after date-time ambiguity is resolved', () => {
      browser.click('[class*="button-daylight"]');
    });

    Terra.it.matchesScreenshot('after DST resolution', { selector: '#root' });

    it('updates the underlying date-time upon changing the offset using the offset button', () => {
      browser.click('[class*="button-offset"]');
      browser.waitForVisible('[class*="time-clarification"]');
      browser.click('[class*="button-standard"]');
      browser.keys('Tab'); // This is _needed_ to remove focus from the offset button.
    });

    Terra.it.matchesScreenshot('after offset change', { selector: '#root' });
  });

  describe('onBlur (CST to CDT)', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-dst-blur');
      browser.refresh();
      browser.click('input[name="terra-time-minute-input"]');
      browser.keys('Tab');
      browser.waitForVisible('[class*="time-clarification"]');
    });

    Terra.it.matchesScreenshot('before DST resolution', { selector: '#root' });

    it('handles blur after date-time ambiguity is resolved', () => {
      browser.click('[class*="button-standard"]');
    });

    Terra.it.matchesScreenshot('after DST resolution', { selector: '#root' });

    it('updates the underlying date-time upon changing the offset using the offset button', () => {
      browser.click('[class*="button-offset"]');
      browser.waitForVisible('[class*="time-clarification"]');
      browser.click('[class*="button-daylight"]');
      browser.keys('Tab'); // This is _needed_ to remove focus from the offset button.
    });

    Terra.it.matchesScreenshot('after offset change', { selector: '#root' });
  });
});
