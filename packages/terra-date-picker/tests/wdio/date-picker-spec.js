Terra.describeViewports('Date Picker', ['tiny', 'small', 'medium'], () => {
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

    Terra.it.validatesElement({ selector: '#root' });
  });
});

Terra.describeViewports('Date Picker', ['medium'], () => {
  describe('Default Date Excluded', () => {
    describe('Default Date Excluded - Clears input using calendar icon', () => {
      before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default-date-excluded'));

      Terra.it.matchesScreenshot('default date displayed');
      it('clears the default date after clicking on calendar button', () => {
        browser.click('[class*="button"]');
      });
      Terra.it.matchesScreenshot('default date cleared');
      Terra.it.isAccessible();
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
      Terra.it.isAccessible();
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

    Terra.it.matchesScreenshot({ selector: '[data-terra-date-picker-calendar]' });
    Terra.it.isAccessible();
  });

  describe('Filter Dates', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-filter-dates');
      browser.setValue('input[name="terra-date-date-input"]', '06/01/2017');
      browser.keys('Enter');
      browser.click('[class*="button"]');
    });

    Terra.it.matchesScreenshot({ selector: '[data-terra-date-picker-calendar]' });
    Terra.it.isAccessible();
  });

  describe('Include Dates', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-include-dates');
      browser.click('[class*="button"]');
    });

    Terra.it.matchesScreenshot({ selector: '[data-terra-date-picker-calendar]' });
    Terra.it.isAccessible();
  });

  describe('Disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-disabled'));

    Terra.it.matchesScreenshot();
    Terra.it.isAccessible();

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
    Terra.it.isAccessible();

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

    Terra.it.matchesScreenshot({ selector: '[data-terra-date-picker-calendar]' });
    Terra.it.isAccessible();
  });

  describe('On Blur', () => {
    before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-focus-blur'));

    it('puts focus on the input', () => {
      browser.click('input[name="terra-date-date-input-onblur"]');

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
      expect(browser.getText('#iso')).to.equal('2017-06-01');
      expect(browser.getText('#input-value')).to.equal('06/01/2017');
      expect(browser.getText('#complete-date')).to.equal('Yes');
      expect(browser.getText('#valid-date')).to.equal('Yes');
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
      browser.keys('Backspace');
      // Ensures the mouse pointer doesn't appear in the screenshot
      browser.click('h3');
      expect(browser.getText('#iso')).to.equal('');
      expect(browser.getText('#input-value')).to.equal('');
      expect(browser.getText('#complete-date')).to.equal('No');
      expect(browser.getText('#valid-date')).to.equal('Yes');
    });
    Terra.it.matchesScreenshot('no date set');
    Terra.it.isAccessible();
  });

  describe('On Change Raw', () => {
    before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-on-change-raw'));

    it('sets an invalid date', () => {
      browser.setValue('input[name="terra-date-date-input-onchangeraw"]', '04/01/2019');
      // Ensures the mouse pointer doesn't appear in the screenshot
      browser.click('h3');
      expect(browser.getText('#iso')).to.equal('2019-04-01');
      expect(browser.getText('#input-value')).to.equal('04/01/2019');
      expect(browser.getText('#complete-date')).to.equal('Yes');
      expect(browser.getText('#valid-date')).to.equal('No');
    });
    Terra.it.matchesScreenshot('date set to invalid 04/01/2019');

    it('partially sets the date', () => {
      browser.setValue('input[name="terra-date-date-input-onchangeraw"]', '06/01');
      // Ensures the mouse pointer doesn't appear in the screenshot
      browser.click('h3');
      expect(browser.getText('#iso')).to.equal('');
      expect(browser.getText('#input-value')).to.equal('06/01');
      expect(browser.getText('#complete-date')).to.equal('No');
      expect(browser.getText('#valid-date')).to.equal('No');
    });
    Terra.it.matchesScreenshot('date set to 06-01');

    it('finishes setting the date', () => {
      browser.addValue('input[name="terra-date-date-input-onchangeraw"]', '/2017');
      // Ensures the mouse pointer doesn't appear in the screenshot
      browser.click('h3');
      expect(browser.getText('#iso')).to.equal('2017-06-01');
      expect(browser.getText('#input-value')).to.equal('06/01/2017');
      expect(browser.getText('#complete-date')).to.equal('Yes');
      expect(browser.getText('#valid-date')).to.equal('Yes');
    });
    Terra.it.matchesScreenshot('date set to 06-01-2017');
    Terra.it.isAccessible();
  });

  describe('On Click Outside', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default');
      browser.click('[class*="button"]');
    });

    it('dismisses the datepicker after clicking outside', () => {
      browser.click('[class*="PopupOverlay"]');
    });

    Terra.it.matchesScreenshot('date picker closed');
    Terra.it.isAccessible();
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
    Terra.it.isAccessible();
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
    Terra.it.isAccessible();
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
    });

    it('sets the date', () => {
      browser.setValue('input[name="terra-date-date-input"]', '0');
      browser.keys('a1.b2/;3');
    });

    Terra.it.validatesElement('default');
  });

  describe('DatePickerField', () => {
    describe('Valid DatePickerField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-field');
        browser.moveToObject('#root', 0, 0);
      });

      Terra.it.validatesElement();
    });

    describe('Invalid DatePickerField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-field');
        browser.click('#validity-toggle');
      });
      after(() => {
        browser.click('#validity-toggle');
      });

      Terra.it.validatesElement();
    });

    describe('Incomplete DatePickerField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-field');
        browser.click('#incomplete-toggle');
      });
      after(() => {
        browser.click('#incomplete-toggle');
      });

      Terra.it.validatesElement();
    });

    describe('Invalid and Incomplete DatePickerField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-field');
        browser.click('#validity-toggle');
        browser.click('#incomplete-toggle');
      });
      after(() => {
        browser.click('#validity-toggle');
        browser.click('#incomplete-toggle');
      });

      Terra.it.validatesElement();
    });

    describe('Disabled DatePickerField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-picker/date-picker/disabled-date-picker-field');
      });

      Terra.it.validatesElement();
    });
  });

  describe('Controlled DatePicker', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-controlled');
    });

    it('Enters date value', () => {
      browser.setValue('input[name="terra-date-controlled-date-picker"]', '03/07/2019');
    });

    Terra.it.matchesScreenshot('date input manually updated');

    it('Open the date picker', () => {
      browser.click('[class*="button"]');
    });

    Terra.it.matchesScreenshot('date picker updated', { selector: '[data-terra-date-picker-calendar]' });

    it('Click button 2 to set formatted date', () => {
      browser.click('[class*="PopupOverlay"]');
      browser.click('#button2');
    });

    Terra.it.matchesScreenshot('formatted date set');

    it('Open the date picker', () => {
      browser.click('[class*="button"]');
    });

    Terra.it.matchesScreenshot('picker with formatted date', { selector: '[data-terra-date-picker-calendar]' });

    it('Click button 3 to set iso date', () => {
      browser.click('[class*="PopupOverlay"]');
      browser.click('#button3');
    });

    Terra.it.matchesScreenshot('iso date set');

    it('Open the date picker', () => {
      browser.click('[class*="button"]');
    });

    Terra.it.matchesScreenshot('picker with iso date', { selector: '[data-terra-date-picker-calendar]' });

    it('Click button 4 to set iso date time', () => {
      browser.click('[class*="PopupOverlay"]');
      browser.click('#button4');
    });

    Terra.it.matchesScreenshot('iso date set without time');

    it('Open the date picker', () => {
      browser.click('[class*="button"]');
    });

    Terra.it.matchesScreenshot('picker with iso date no time', { selector: '[data-terra-date-picker-calendar]' });

    it('Click button 5 to set ordinal date', () => {
      browser.click('[class*="PopupOverlay"]');
      browser.click('#button5');
    });

    Terra.it.matchesScreenshot('ordinal date not set');

    it('Open the date picker', () => {
      browser.click('[class*="button"]');
    });

    Terra.it.matchesScreenshot('picker with ordinal date not set', { selector: '[data-terra-date-picker-calendar]' });

    it('Select date', () => {
      browser.keys('ArrowDown');
      browser.keys('Enter');
    });

    Terra.it.matchesScreenshot('date selected');
  });
});
