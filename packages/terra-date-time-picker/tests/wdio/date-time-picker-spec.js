/* eslint-disable no-unused-expressions */
const moment = require('moment-timezone');

const timeZones = ['America/Chicago', 'America/Denver', 'America/Detroit', 'America/Indianapolis',
  'America/Los_Angeles', 'America/New_York', 'America/Phoenix'];
const includesTZ = timeZones.includes(moment.tz.guess());

const viewports = Terra.viewports('tiny', 'large');

const ignoredA11y = {
  label: { enabled: false },
};

describe('DateTimePicker', () => {
  describe('Default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default');
    });

    Terra.it.isAccessible({ rules: ignoredA11y });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Default with Date', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-only');
    });

    Terra.it.isAccessible({ rules: ignoredA11y });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Default with Date and Time', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-time');
    });

    Terra.it.isAccessible({ rules: ignoredA11y });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Time Clarification Dialog', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-dst');
      browser.click('input[name="terra-time-minute-input"]');
      browser.keys('Tab');
      browser.waitForVisible('[class*="time-clarification"]');
    });

    Terra.it.isAccessible({ rules: ignoredA11y });
    Terra.it.matchesScreenshot('0', { viewports, selector: '[class*="abstract-modal"]' });
  });

  describe('Time Clarification Dialog Dismissal', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-dst');
      browser.click('input[name="terra-time-minute-input"]');
      browser.keys('Tab');
      browser.waitForVisible('[class*="time-clarification"]');
    });

    Terra.it.matchesScreenshot('0', { viewports, selector: '[class*="abstract-modal"]' });

    it('closes the dialog', () => {
      browser.click('[class*="button-daylight"]');
    });

    Terra.it.matchesScreenshot('1', { viewports });
  });

  describe('Displays Offset button are clicking daylight button', () => {
    if (includesTZ) {
      before(() => {
        browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-dst');
        browser.click('input[name="terra-time-minute-input"]');
        browser.keys('Tab');
        browser.waitForVisible('[class*="time-clarification"]');
      });

      Terra.it.matchesScreenshot('0', { viewports, selector: '[class*="abstract-modal"]' });

      it('hides the offset button', () => {
        browser.click('[class*="button-daylight"]');
      });

      Terra.it.matchesScreenshot('1', { viewports });
    }
  });

  describe('Displays Offset button are clicking the standard time button', () => {
    if (includesTZ) {
      before(() => {
        browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-dst');
        browser.click('input[name="terra-time-minute-input"]');
        browser.keys('Tab');
        browser.waitForVisible('[class*="time-clarification"]');
      });

      Terra.it.matchesScreenshot('0', { viewports, selector: '[class*="abstract-modal"]' });

      it('hides the offset button', () => {
        browser.click('[class*="button-daylight"]');
      });

      Terra.it.matchesScreenshot('1', { viewports });
    }
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

    const ignoredDisabledAlly = Object.assign({ 'color-contrast': { enabled: false } }, ignoredA11y);
    Terra.it.isAccessible({ rules: ignoredDisabledAlly });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('OnBlur', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-focus-blur');
    });

    it('puts focus on the input', () => {
      browser.click('input[name="terra-date-input"]');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector(\'input[name="terra-date-input"]\').style.caretColor = "transparent";');
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

  describe('Valid date entry moves focus to hour input', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-focus-blur');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector(\'input[name="terra-time-minute-input"]\').style.caretColor = "transparent";');
      browser.setValue('input[name="terra-date-input"]', '04/15/2019');
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('OnChange', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-on-change');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector(\'input[name="terra-time-minute-input"]\').style.caretColor = "transparent";');
      browser.setValue('input[name="terra-date-input"]', '07/12/2017');
      browser.setValue('input[name="terra-time-hour-input"]', '10');
      browser.setValue('input[name="terra-time-minute-input"]', '30');
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('OnChange Raw', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-on-change');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector(\'input[name="terra-date-input"]\').style.caretColor = "transparent";');
      browser.setValue('input[name="terra-date-input"]', '07/12');
      browser.setValue('input[name="terra-time-hour-input"]', '10');
      browser.setValue('input[name="terra-time-minute-input"]', '30');
      browser.setValue('input[name="terra-date-input"]', '/2017');
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Sync Date Time', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-on-change');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector(\'input[name="terra-time-minute-input"]\').style.caretColor = "transparent";');
      browser.execute('document.querySelector(\'input[name="terra-time-hour-input"]\').style.caretColor = "transparent";');
      browser.execute('document.querySelector(\'input[name="terra-date-input"]\').style.caretColor = "transparent";');
    });

    it('Entering valid date with empty time does not trigger onChange', () => {
      browser.setValue('input[name="terra-date-input"]', '04/17/2019');
    });

    Terra.it.matchesScreenshot('valid-date', { viewports });

    it('Entering valid date and time triggers onChange', () => {
      browser.setValue('input[name="terra-time-hour-input"]', '10');
      browser.setValue('input[name="terra-time-minute-input"]', '30');
    });

    Terra.it.matchesScreenshot('valid-time', { viewports });

    it('Change date to invalid and modify time.', () => {
      browser.setValue('input[name="terra-date-input"]', '04/17/20');
      browser.setValue('input[name="terra-time-hour-input"]', '12');
      browser.setValue('input[name="terra-time-minute-input"]', '45');
    });

    Terra.it.matchesScreenshot('invalid-date', { viewports });

    it('Time persists when date becomes valid', () => {
      browser.setValue('input[name="terra-date-input"]', '04/18/2019');
    });

    Terra.it.matchesScreenshot('modified-valid-time', { viewports });
  });

  describe('Excluded Dates are Disabled', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-exclude-dates');
      browser.click('[class*="button"]');
    });

    Terra.it.matchesScreenshot({ viewports, selector: '[class="react-datepicker"]' });
  });

  describe('Filtered Dates are Disabled', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-filter-dates');
      browser.click('[class*="button"]');
    });

    Terra.it.matchesScreenshot({ viewports, selector: '[class="react-datepicker"]' });
  });

  describe('Included Dates are Enabled', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-include-dates');
      browser.click('[class*="button"]');
    });

    Terra.it.matchesScreenshot({ viewports, selector: '[class="react-datepicker"]' });
  });

  describe('OnSelect', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-on-select');
    });

    Terra.it.matchesScreenshot('0', { viewports });

    it('Dismissed the modal manager after a click', () => {
      browser.click('[class*="button"]');
      browser.click('[aria-label="day-27"]');
    });

    Terra.it.matchesScreenshot('1', { viewports });

    it('Trigger onChange', () => {
      browser.setValue('input[name="terra-date-input"]', '07/12/2017');
    });

    Terra.it.matchesScreenshot('2', { viewports });
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
      browser.click('input[name="terra-date-input"]');
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Clears the default date and time on hour input focus when default date is excluded', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-excluded');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector(\'input[name="terra-time-hour-input"]\').style.caretColor = "transparent";');
      browser.click('input[name="terra-time-hour-input"]');
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Clears the default date and time on minute input focus when default date is excluded', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-excluded');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector(\'input[name="terra-time-minute-input"]\').style.caretColor = "transparent";');
      browser.click('input[name="terra-time-minute-input"]');
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Clears the default date and time on date input focus when default date is out of range', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-out-of-range');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector(\'input[name="terra-date-input"]\').style.caretColor = "transparent";');
      browser.click('input[name="terra-date-input"]');
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Clears the default date and time on hour input focus when default date is out of range', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-out-of-range');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector(\'input[name="terra-time-hour-input"]\').style.caretColor = "transparent";');
      browser.click('input[name="terra-time-hour-input"]');
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Clears the default date and time on minute input focus when default date is out of range', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-out-of-range');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector(\'input[name="terra-time-minute-input"]\').style.caretColor = "transparent";');
      browser.click('input[name="terra-time-minute-input"]');
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Time Input displays Twelve Hour format when timeVariant is specified', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-time-input-attributes');
    });

    Terra.it.matchesScreenshot({ viewports });
  });
});
