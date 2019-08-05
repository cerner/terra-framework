const ignoredA11y = {
  'color-contrast': { enabled: false },
  label: { enabled: false },
};

Terra.describeViewports('Date Picker', ['medium'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default'));

    it('creates a hidden input and empty value attr. when no date is entered', () => {
      expect(browser.getAttribute('[data-terra-date-input-hidden]', 'name')).to.equal('date-input');
      expect(browser.getAttribute('[data-terra-date-input-hidden]', 'value')).to.equal('');
    });

    it('sets the date', () => {
      browser.setValue('input[name="terra-date-date-input"]', '06/01/2017');
      browser.keys('Enter');
      browser.click('[class*="button"]');
    });

    Terra.it.matchesScreenshot({ selector: '#calendar' });
    Terra.it.isAccessible({ rules: ignoredA11y });
  });

  describe('Default Date Excluded', () => {
    describe('Default Date Excluded - Clears input using calendar icon', () => {
      before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default-date-excluded'));

      Terra.it.matchesScreenshot('default date displayed');
      it('clears the default date after clicking on calendar button', () => {
        browser.click('[class*="button"]');
      });
      Terra.it.matchesScreenshot('default date cleared');
      Terra.it.isAccessible({ rules: ignoredA11y });
    });

    describe('Default Date Excluded - Clears input focusing on input box', () => {
      before(() => browser.refresh());

      Terra.it.matchesScreenshot('default date displayed');
      it('clears the default date and time after focusing on input box', () => {
        browser.click('input[name="terra-date-date-input"]');
        // Ensures the mouse pointer doesn't appear in the screenshot
        browser.click('h3');
      });
      Terra.it.matchesScreenshot('default date cleared');
    });
  });

  describe('Default Date Out Of Range', () => {
    describe('Default Date Out Of Range - Clears input using calendar icon', () => {
      before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default-date-out-of-range'));

      Terra.it.matchesScreenshot('default date displayed');
      it('clears the default date and time after clicking on calendar button', () => {
        browser.click('[class*="button"]');
      });
      Terra.it.matchesScreenshot('default date cleared');
      Terra.it.isAccessible({ rules: ignoredA11y });
    });

    describe('Default Date Out Of Range - Clears input focusing on input box', () => {
      before(() => browser.refresh());

      Terra.it.matchesScreenshot('default date displayed');
      it('clears the default date and time after focusing on input box', () => {
        browser.click('input[name="terra-date-date-input"]');
        // Ensures the mouse pointer doesn't appear in the screenshot
        browser.click('h3');
      });
      Terra.it.matchesScreenshot('default date cleared');
    });

    describe('Clears default date value that is before the minDate and no maxDate', () => {
      before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default-date-before-min-date-only'));

      Terra.it.matchesScreenshot('default date displayed');
      it('clears the default date when focus is on the input', () => {
        browser.click('input[name="terra-date-date-input"]');
        // Ensures the mouse pointer doesn't appear in the screenshot
        browser.click('h3');
      });
      Terra.it.matchesScreenshot('default date cleared');
    });
  });

  describe('Exclude Dates', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-exclude-dates');
      browser.click('[class*="button"]');
    });

    Terra.it.matchesScreenshot({ selector: '#calendar' });
    Terra.it.isAccessible({ rules: ignoredA11y });
  });

  describe('Filter Dates', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-filter-dates');
      browser.setValue('input[name="terra-date-date-input"]', '06/01/2017');
      browser.keys('Enter');
      browser.click('[class*="button"]');
    });

    Terra.it.matchesScreenshot({ selector: '#calendar' });
    Terra.it.isAccessible({ rules: ignoredA11y });
  });

  describe('Include Dates', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-include-dates');
      browser.click('[class*="button"]');
    });

    Terra.it.matchesScreenshot({ selector: '#calendar' });
    Terra.it.isAccessible({ rules: ignoredA11y });
  });

  describe('Disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-disabled'));

    Terra.it.matchesScreenshot();
    Terra.it.isAccessible({ rules: ignoredA11y });

    it('should not accept keyboard input', () => {
      expect(browser.setValue.bind(browser, 'input[name="terra-date-date-input"]', '06/01/2017')).to.throw(Error);
    });

    it('should not accept mouse interaction', () => {
      expect(browser.click.bind(browser, '[class*="button"]')).to.throw(Error);
    });
  });

  describe('Read Only', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-read-only');
      browser.moveToObject('#root', 0, 0);
    });

    Terra.it.matchesScreenshot('not clicked');
    Terra.it.isAccessible({ rules: ignoredA11y });

    it('should not accept keyboard input', () => {
      expect(browser.setValue.bind(browser, 'input[name="terra-date-date-input"]', '06/01/2017')).to.throw(Error);
    });

    it('should not open the date picker', () => {
      browser.click('[class*="button"]');
    });

    Terra.it.matchesScreenshot('clicked');
  });

  describe('Min Max', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-min-max');
      browser.click('[class*="button"]');
    });

    Terra.it.matchesScreenshot({ selector: '#calendar' });
    Terra.it.isAccessible({ rules: ignoredA11y });
  });

  describe('On Blur', () => {
    before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-focus-blur'));

    it('puts focus on the input', () => {
      browser.click('input[name="terra-date-date-input-onblur"]');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector(\'input\').style.caretColor = \'transparent\';');

      browser.keys('05/01/2019');
      expect(browser.getText('#blur-count')).to.equal('0');
      expect(browser.getText('#focus-count')).to.equal('1');
      expect(browser.getText('#iso')).to.equal('');
      expect(browser.getText('#input-value')).to.equal('');
      expect(browser.getText('#complete-date')).to.equal('No');
      expect(browser.getText('#valid-date')).to.equal('Yes');
    });

    it('tabs to the calendar button and onBlur is not triggered', () => {
      browser.keys('Tab');
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
      expect(browser.getText('#focus-count')).to.equal('1');
      expect(browser.getText('#iso')).to.equal('2019-05-01');
      expect(browser.getText('#input-value')).to.equal('05/01/2019');
      expect(browser.getText('#complete-date')).to.equal('Yes');
      expect(browser.getText('#valid-date')).to.equal('Yes');
    });
  });

  describe('On Change', () => {
    before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-on-change'));

    it('sets the date', () => {
      browser.setValue('input[name="terra-date-date-input-onchange"]', '06/01/2017');
      browser.keys('Enter');
      // Ensures the mouse pointer doesn't appear in the screenshot
      browser.click('h3');
    });
    Terra.it.matchesScreenshot('date set');

    it('clears the date', () => {
      browser.click('input[name="terra-date-date-input-onchange"]');
      // Manually clear the date input -- clearValue command successfully clears the input value,
      // however chromedriver does not trigger the change event.
      for (let i = 0; i < 8; i += 1) {
        browser.keys('Backspace');
      }
      // The date extends past the center of the element so the cursor must be repositioned to remove everything
      browser.click('input[name="terra-date-date-input-onchange"]');
      browser.keys('Backspace');
      browser.keys('Backspace');
      // Ensures the mouse pointer doesn't appear in the screenshot
      browser.click('h3');
    });
    Terra.it.matchesScreenshot('no date set');
    Terra.it.isAccessible({ rules: ignoredA11y });
  });

  describe('On Change Raw', () => {
    before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-on-change-raw'));

    it('partially sets the date', () => {
      browser.setValue('input[name="terra-date-date-input-onchangeraw"]', '06/01');
      // Ensures the mouse pointer doesn't appear in the screenshot
      browser.click('h3');
    });
    Terra.it.matchesScreenshot('date set to 06-01');

    it('finishes setting the date', () => {
      browser.addValue('input[name="terra-date-date-input-onchangeraw"]', '/2017');
      // Ensures the mouse pointer doesn't appear in the screenshot
      browser.click('h3');
    });
    Terra.it.matchesScreenshot('date set to 06-01-2017');
    Terra.it.isAccessible({ rules: ignoredA11y });
  });

  describe('On Click Outside', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default');
      browser.click('[class*="button"]');
    });

    it('dismisses the datepicker after clicking outside', () => {
      browser.click('[class*="PopupOverlay"]');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector(\'input\').style.caretColor = \'transparent\';');
    });

    Terra.it.matchesScreenshot('date picker closed');
    Terra.it.isAccessible({ rules: ignoredA11y });
  });

  describe('On Select', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-on-select');
    });

    it('enters a date through input', () => {
      browser.setValue('input[name="terra-date-date-input-onselect"]', '06/01/2017');
      // Ensures the mouse pointer doesn't appear in the screenshot
      browser.click('h3');
    });
    Terra.it.matchesScreenshot('Selected date not displayed');

    it('selects a date through date picker', () => {
      browser.click('[class*="button"]');
      browser.click('div[class*="selected"]');
    });
    Terra.it.matchesScreenshot('Selected date displayed');
    Terra.it.isAccessible({ rules: ignoredA11y });
  });

  describe('Start Date', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-start-date');
    });

    it('creates a hidden input with default name attr. and sets value in ISO8601 when a valid date is entered', () => {
      expect(browser.getAttribute('[data-terra-date-input-hidden]', 'name')).to.equal('date-input');
      expect(browser.getAttribute('[data-terra-date-input-hidden]', 'value')).to.equal('2017-04-01');
    });
    Terra.it.matchesScreenshot();
    Terra.it.isAccessible({ rules: ignoredA11y });
  });

  describe('Invalid dates are ignored', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-ignore-invalid-selected-dates');
      browser.moveToObject('#root', 0, 0);
    });

    Terra.it.matchesScreenshot();
  });

  describe('Key Limitations', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector(\'input[name="terra-date-date-input"]\').style.caretColor = \'transparent\';');
    });

    it('sets the date', () => {
      browser.setValue('input[name="terra-date-date-input"]', '0');
      browser.keys('a1.b2/;3');
    });

    Terra.it.validatesElement('default', { axeRules: { rules: ignoredA11y } });
  });

  describe('DatePickerField', () => {
    describe('Valid DatePickerField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-field');
        browser.moveToObject('#root', 0, 0);
      });

      Terra.it.validatesElement({ axeRules: { rules: ignoredA11y } });
    });

    describe('Invalid DatePickerField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-field');
        browser.click('#validity-toggle');
      });

      Terra.it.validatesElement({ axeRules: { rules: ignoredA11y } });
    });

    describe('Disabled DatePickerField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-picker/date-picker/disabled-date-picker-field');
      });

      Terra.it.validatesElement({ axeRules: { rules: ignoredA11y } });
    });
  });

  describe('Controlled DatePicker', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-controlled');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input:last-of-type").style.caretColor = "transparent";');
    });

    it('Enters date value', () => {
      browser.setValue('input[name="terra-date-controlled-date-picker"]', '03/07/2019');
    });

    Terra.it.matchesScreenshot('date input manually updated');

    it('Open the date picker', () => {
      browser.click('[class*="button"]');
    });

    Terra.it.matchesScreenshot('date picker updated', { selector: '#calendar' });

    it('Click button to reset date', () => {
      browser.click('[class*="PopupOverlay"]');
      browser.click('#reset-button');
    });

    Terra.it.matchesScreenshot('date input reset');

    it('Open the date picker', () => {
      browser.click('[class*="button"]');
    });

    Terra.it.matchesScreenshot('date picker reset', { selector: '#calendar' });

    it('Select date', () => {
      browser.keys('ArrowDown');
      browser.keys('Enter');
    });

    Terra.it.matchesScreenshot('date selected');
  });
});
