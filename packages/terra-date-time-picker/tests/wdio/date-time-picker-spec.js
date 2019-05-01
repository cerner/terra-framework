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

    Terra.should.beAccessible({ rules: ignoredA11y });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-date-time-picker-clarification-modal-background-color': '#e2e2e2',
        '--terra-date-time-picker-clarification-modal-border': '#f2a1c0 dashed 2px',
        '--terra-date-time-picker-clarification-modal-border-radius': '1.5rem',
        '--terra-date-time-picker-clarification-modal-box-shadow': '0 3px 7px rgba(50, 50, 50, 0.4)',
        '--terra-date-time-picker-clarification-modal-color': '#ef12bc',
      },
    });
  });

  describe('Default with Date', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-only');
    });

    Terra.should.beAccessible({ rules: ignoredA11y });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Default with Date and Time', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-time');
    });

    Terra.should.beAccessible({ rules: ignoredA11y });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Time Clarification Dialog', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-dst');
      browser.click('input[name="terra-time-minute-input"]');
      browser.keys('Tab');
      browser.waitForVisible('[class*="time-clarification"]');
    });

    Terra.should.beAccessible({ rules: ignoredA11y });
    Terra.should.matchScreenshot('0', { viewports, selector: '[class*="abstract-modal"]' });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '[class*="abstract-modal"]',
      properties: {
        '--terra-date-time-picker-clarification-modal-background-color': '#e2e2e2',
        '--terra-date-time-picker-clarification-modal-border': '#f2a1c0 dashed 2px',
        '--terra-date-time-picker-clarification-modal-border-radius': '1.5rem',
        '--terra-date-time-picker-clarification-modal-box-shadow': '0 3px 7px rgba(50, 50, 50, 0.4)',
        '--terra-date-time-picker-clarification-modal-color': '#ef12bc',
      },
    });
  });

  describe('Time Clarification Dialog Dismissal', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-dst');
      browser.click('input[name="terra-time-minute-input"]');
      browser.keys('Tab');
      browser.waitForVisible('[class*="time-clarification"]');
    });

    Terra.should.matchScreenshot('0', { viewports, selector: '[class*="abstract-modal"]' });

    it('closes the dialog', () => {
      browser.click('[class*="button-daylight"]');
    });

    Terra.should.matchScreenshot('1', { viewports });
  });

  describe('Displays Offset button are clicking daylight button', () => {
    if (includesTZ) {
      before(() => {
        browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-dst');
        browser.click('input[name="terra-time-minute-input"]');
        browser.keys('Tab');
        browser.waitForVisible('[class*="time-clarification"]');
      });

      Terra.should.matchScreenshot('0', { viewports, selector: '[class*="abstract-modal"]' });

      it('hides the offset button', () => {
        browser.click('[class*="button-daylight"]');
      });

      Terra.should.matchScreenshot('1', { viewports });
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

      Terra.should.matchScreenshot('0', { viewports, selector: '[class*="abstract-modal"]' });

      it('hides the offset button', () => {
        browser.click('[class*="button-daylight"]');
      });

      Terra.should.matchScreenshot('1', { viewports });
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
    });

    const ignoredDisabledAlly = Object.assign({ 'color-contrast': { enabled: false } }, ignoredA11y);
    Terra.should.beAccessible({ rules: ignoredDisabledAlly });
    Terra.should.matchScreenshot({ viewports });
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

    Terra.should.matchScreenshot({ viewports });
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

    Terra.should.matchScreenshot({ viewports });
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

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Excluded Dates are Disabled', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-exclude-dates');
      browser.click('[class*="button"]');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Filtered Dates are Disabled', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-filter-dates');
      browser.click('[class*="button"]');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Included Dates are Enabled', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-include-dates');
      browser.click('[class*="button"]');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Launches and Dismisses modal manager after date selection', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-inside-modal');
      browser.click('[class*="disclose"]');
      browser.click('[class*="custom-input"] > [class*="button"]');
    });

    Terra.should.matchScreenshot('0', { viewports });

    it('Dismissed the modal manager after a click', () => {
      browser.click('[aria-label="day-27"]');
    });

    Terra.should.matchScreenshot('1', { viewports });
  });

  describe('OnSelect', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-on-select');
    });

    Terra.should.matchScreenshot('0', { viewports });

    it('Dismissed the modal manager after a click', () => {
      browser.click('[class*="button"]');
      browser.click('[aria-label="day-27"]');
    });

    Terra.should.matchScreenshot('1', { viewports });

    it('Trigger onChange', () => {
      browser.setValue('input[name="terra-date-input"]', '07/12/2017');
    });

    Terra.should.matchScreenshot('2', { viewports });
  });

  describe('Displays the date picker inside a modal manager and exits when Enter is pressed', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-inside-modal');
      browser.click('[class*="disclose"]');
      browser.click('[class*="custom-input"] > [class*="button"]');
    });

    Terra.should.matchScreenshot('0', { viewports, selector: '[class*="abstract-modal"]' });

    it('Dismissed the modal manager after a click', () => {
      browser.keys(['Enter']);
    });

    Terra.should.matchScreenshot('1', { viewports });
  });

  describe('Displays the date picker inside a modal manager and exits when Escape is pressed', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-inside-modal');
      browser.click('[class*="disclose"]');
      browser.click('[class*="custom-input"] > [class*="button"]');
    });

    Terra.should.matchScreenshot('0', { viewports, selector: '[class*="abstract-modal"]' });

    it('Dismissed the modal manager after a click', () => {
      browser.keys(['Escape']);
    });

    Terra.should.matchScreenshot('1', { viewports });
  });

  describe('Displays the date picker inside a modal manager and exits when Tab is pressed', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-inside-modal');
      browser.click('[class*="disclose"]');
      browser.click('[class*="custom-input"] > [class*="button"]');
    });

    Terra.should.matchScreenshot('0', { viewports, selector: '[class*="abstract-modal"]' });

    it('Dismissed the modal manager after a click', () => {
      browser.keys(['Tab']);
    });

    Terra.should.matchScreenshot('1', { viewports });
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

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Clears the default date and time on hour input focus when default date is excluded', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-excluded');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector(\'input[name="terra-time-hour-input"]\').style.caretColor = "transparent";');
      browser.click('input[name="terra-time-hour-input"]');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Clears the default date and time on minute input focus when default date is excluded', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-excluded');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector(\'input[name="terra-time-minute-input"]\').style.caretColor = "transparent";');
      browser.click('input[name="terra-time-minute-input"]');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Clears the default date and time on date input focus when default date is out of range', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-out-of-range');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector(\'input[name="terra-date-input"]\').style.caretColor = "transparent";');
      browser.click('input[name="terra-date-input"]');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Clears the default date and time on hour input focus when default date is out of range', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-out-of-range');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector(\'input[name="terra-time-hour-input"]\').style.caretColor = "transparent";');
      browser.click('input[name="terra-time-hour-input"]');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Clears the default date and time on minute input focus when default date is out of range', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-time-picker/date-time-picker/date-time-picker-default-date-out-of-range');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector(\'input[name="terra-time-minute-input"]\').style.caretColor = "transparent";');
      browser.click('input[name="terra-time-minute-input"]');
    });

    Terra.should.matchScreenshot({ viewports });
  });
});
