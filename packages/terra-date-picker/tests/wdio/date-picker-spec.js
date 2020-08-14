Terra.describeViewports('Date Picker', ['tiny', 'small', 'medium'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default'));

    it('creates a hidden input and empty value attr. when no date is entered', () => {
      expect(browser.getAttribute('[data-terra-date-input-hidden]', 'name')).to.equal('date-input');
      expect(browser.getAttribute('[data-terra-date-input-hidden]', 'value')).to.equal('');
    });

    it('sets the date', () => {
      browser.setValue('input[name="terra-date-month-date-input"]', '06');
      browser.setValue('input[name="terra-date-day-date-input"]', '01');
      browser.setValue('input[name="terra-date-year-date-input"]', '2017');
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

    describe('Default Date Excluded - Clears input on focusing day input box', () => {
      before(() => browser.refresh());

      Terra.it.matchesScreenshot('default date displayed');

      it('clears the default date after focusing on day input box', () => {
        browser.click('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
      });

      Terra.it.matchesScreenshot('default date cleared');
    });
  });

  describe('Default Date Out Of Range', () => {
    describe('Default Date Out Of Range - Clears input using calendar icon', () => {
      before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default-date-out-of-range'));

      Terra.it.matchesScreenshot('default date displayed');

      it('clears the default date after clicking on calendar button', () => {
        browser.click('[class*="button"]');
      });

      Terra.it.matchesScreenshot('default date cleared');
      Terra.it.isAccessible();
    });

    describe('Default Date Out Of Range - Clears input on focusing month input box', () => {
      before(() => browser.refresh());

      Terra.it.matchesScreenshot('default date displayed');

      it('clears the default date after focusing on month input box', () => {
        browser.click('input[name="terra-date-month-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-month-date-input"]');
      });

      Terra.it.matchesScreenshot('default date cleared');
    });

    describe('Clears default date value that is before the minDate and no maxDate', () => {
      before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default-date-before-min-date-only'));

      Terra.it.matchesScreenshot('default date displayed');

      it('clears the default date when focusing on year input', () => {
        browser.click('input[name="terra-date-year-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
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
      browser.setValue('input[name="terra-date-month-date-input"]', '06');
      browser.setValue('input[name="terra-date-day-date-input"]', '01');
      browser.setValue('input[name="terra-date-year-date-input"]', '2017');
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
      expect(browser.setValue.bind(browser, 'input[name="terra-date-month-date-input"]', '06')).to.throw(Error);
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
      expect(browser.setValue.bind(browser, 'input[name="terra-date-day-date-input"]', '21')).to.throw(Error);
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

  describe('onFocus and onBlur', () => {
    before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-focus-blur'));

    it('puts focus on the input', () => {
      browser.click('input[name="terra-date-month-date-input-onblur"]');
      browser.setValue('input[name="terra-date-month-date-input-onblur"]', '05');
      browser.setValue('input[name="terra-date-day-date-input-onblur"]', '01');
      browser.setValue('input[name="terra-date-year-date-input-onblur"]', '2019');

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
      browser.setValue('input[name="terra-date-month-date-input-onchange"]', '06');
      browser.setValue('input[name="terra-date-day-date-input-onchange"]', '01');
      browser.setValue('input[name="terra-date-year-date-input-onchange"]', '2017');
      Terra.hideInputCaret('input[name="terra-date-year-date-input-onchange"]');

      expect(browser.getText('#iso')).to.equal('2017-06-01');
      expect(browser.getText('#input-value')).to.equal('06/01/2017');
      expect(browser.getText('#complete-date')).to.equal('Yes');
      expect(browser.getText('#valid-date')).to.equal('Yes');
    });

    Terra.it.matchesScreenshot('date set');

    it('clears the date', () => {
      browser.click('input[name="terra-date-day-date-input-onchange"]');
      browser.keys('Delete');
      browser.click('input[name="terra-date-year-date-input-onchange"]');
      browser.keys('Delete');
      browser.click('input[name="terra-date-month-date-input-onchange"]');
      browser.keys('Delete');

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
      browser.setValue('input[name="terra-date-month-date-input-onchangeraw"]', '04');
      browser.setValue('input[name="terra-date-day-date-input-onchangeraw"]', '01');
      browser.setValue('input[name="terra-date-year-date-input-onchangeraw"]', '2019');
      Terra.hideInputCaret('input[name="terra-date-year-date-input-onchangeraw"]');

      expect(browser.getText('#iso')).to.equal('2019-04-01');
      expect(browser.getText('#input-value')).to.equal('04/01/2019');
      expect(browser.getText('#complete-date')).to.equal('Yes');
      expect(browser.getText('#valid-date')).to.equal('No');
    });

    Terra.it.matchesScreenshot('date set to invalid 04/01/2019');

    it('partially sets the date', () => {
      browser.refresh();
      browser.waitForVisible('input[name="terra-date-month-date-input-onchangeraw"]');
      browser.setValue('input[name="terra-date-month-date-input-onchangeraw"]', '06');
      browser.setValue('input[name="terra-date-day-date-input-onchangeraw"]', '01');
      Terra.hideInputCaret('input[name="terra-date-year-date-input-onchangeraw"]');

      expect(browser.getText('#iso')).to.equal('');
      expect(browser.getText('#input-value')).to.equal('0601');
      expect(browser.getText('#complete-date')).to.equal('No');
      expect(browser.getText('#valid-date')).to.equal('No');
    });

    Terra.it.matchesScreenshot('date set to 06-01');

    it('finishes setting the date', () => {
      browser.setValue('input[name="terra-date-year-date-input-onchangeraw"]', '2017');

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
      browser.setValue('input[name="terra-date-month-date-input-onselect"]', '06');
      browser.setValue('input[name="terra-date-day-date-input-onselect"]', '01');
      browser.setValue('input[name="terra-date-year-date-input-onselect"]', '2017');
      Terra.hideInputCaret('input[name="terra-date-year-date-input-onselect"]');
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
      browser.setValue('input[name="terra-date-month-date-input"]', '0');
      browser.keys('a1.b2/;3');
      Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
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
      browser.setValue('input[name="terra-date-month-controlled-date-picker"]', '03');
      browser.setValue('input[name="terra-date-day-controlled-date-picker"]', '07');
      browser.setValue('input[name="terra-date-year-controlled-date-picker"]', '2019');
      Terra.hideInputCaret('input[name="terra-date-year-controlled-date-picker"]');
    });

    Terra.it.matchesScreenshot('date input manually updated');

    it('Open the date picker', () => {
      browser.click('[class*="button"]');
    });

    Terra.it.matchesScreenshot('date picker updated', { selector: '[data-terra-date-picker-calendar]' });

    it('Click button 1 to clear date', () => {
      browser.click('[class*="PopupOverlay"]');
      browser.click('#button1');
    });

    Terra.it.matchesScreenshot('formatted date cleared');

    it('Click button 2 to set formatted date', () => {
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

  describe('Remounts component', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-remount');
    });

    it('Opens the date picker', () => {
      browser.click('[class*="button"]');
    });

    it('Selects a date from date picker', () => {
      browser.keys('ArrowDown');
      browser.keys('Enter');
    });

    Terra.it.validatesElement();
  });

  describe('Initial Focus', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default');
      browser.setValue('input[name="terra-date-month-date-input"]', '12');
      browser.setValue('input[name="terra-date-day-date-input"]', '18');
      browser.setValue('input[name="terra-date-year-date-input"]', '1994');
      Terra.hideInputCaret('input[name="terra-date-month-date-input"]');
      Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
      Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
    });

    it('Month input focused', () => {
      browser.click('input[name="terra-date-month-date-input"]');
    });

    Terra.it.validatesElement('month input highlighted');

    it('Month input cleared with single Delete key press and loses highlight', () => {
      browser.keys('Delete');
    });

    Terra.it.validatesElement('month input cleared completely and loses highlight');

    it('Day input focused', () => {
      browser.click('input[name="terra-date-day-date-input"]');
    });

    Terra.it.validatesElement('day input highlighted');

    it('Day input cleared with single Delete key press and loses highlight', () => {
      browser.keys('Delete');
    });

    Terra.it.validatesElement('day input cleared completely and loses highlight');

    it('Year input focused', () => {
      browser.click('input[name="terra-date-year-date-input"]');
    });

    Terra.it.validatesElement('year input highlighted');

    it('Year input cleared with single Delete key press and loses highlight', () => {
      browser.keys('Delete');
    });

    Terra.it.validatesElement('year input cleared completely and loses highlight');
  });

  describe('Arrow, Delete and Backspace Navigation', () => {
    describe('Right Arrow', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default');
        browser.click('input[name="terra-date-month-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-month-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
      });

      Terra.it.validatesElement('focus on month input');

      it('Focus on day input', () => {
        browser.keys('ArrowRight');
      });

      Terra.it.validatesElement('focus on day input');

      it('Focus on year input', () => {
        browser.keys('ArrowRight');
      });

      Terra.it.validatesElement('focus on year input');
    });

    describe('Left Arrow', () => {
      it('Focus on day input', () => {
        browser.keys('ArrowLeft');
      });

      Terra.it.validatesElement('focus on day input');

      it('Focus on month input', () => {
        browser.keys('ArrowLeft');
      });

      Terra.it.validatesElement('focus on month input');
    });

    describe('Delete Key', () => {
      it('Focus on year input', () => {
        browser.click('input[name="terra-date-year-date-input"]');
      });

      Terra.it.validatesElement('focus on year input');

      it('Focus on day input', () => {
        browser.keys('Delete');
      });

      Terra.it.validatesElement('focus on day input');

      it('Focus on month input', () => {
        browser.keys('Delete');
      });

      Terra.it.validatesElement('focus on month input');
    });

    describe('Backspace Key', () => {
      it('Focus on year input', () => {
        browser.click('input[name="terra-date-year-date-input"]');
      });

      Terra.it.validatesElement('focus on year input');

      it('Focus on day input', () => {
        browser.keys('Backspace');
      });

      Terra.it.validatesElement('focus on day input');

      it('Focus on month input', () => {
        browser.keys('Backspace');
      });

      Terra.it.validatesElement('focus on month input');
    });
  });

  describe('Auto Prepend and Restrictions', () => {
    describe('Month Input', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default');
      });

      it('Auto prepend 0 for digits greater than 1', () => {
        browser.click('input[name="terra-date-month-date-input"]');
        browser.keys('3');
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
      });

      Terra.it.validatesElement('auto preppend 0');

      it('Reject values greater than 12', () => {
        browser.click('input[name="terra-date-month-date-input"]');
        browser.keys('Delete');
        browser.keys('13');
        Terra.hideInputCaret('input[name="terra-date-month-date-input"]');
      });

      Terra.it.validatesElement('rejected digit 3');
    });

    describe('Day Input', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default');
      });

      it('Auto prepend 0 for digits greater than 3', () => {
        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys('5');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
      });

      Terra.it.validatesElement('auto preppend 0');

      it('Reject values greater than 31', () => {
        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys('Delete');
        browser.keys('32');
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
      });

      Terra.it.validatesElement('rejected digit 2');
    });

    describe('Year Input', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
      });

      it('Reject values greater than 2100', () => {
        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys('2101');
      });

      Terra.it.validatesElement('rejected digit 1');

      it('Reject values less than 1900', () => {
        browser.keys('Tab');
        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys('Delete');
        browser.keys('1899');
      });

      Terra.it.validatesElement('rejected digit 9');
    });
  });

  describe('Beyond Min Max', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-beyond-min-max');
    });

    it('Opens the date picker', () => {
      browser.click('[class*="button"]');
    });

    Terra.it.matchesScreenshot('uses default maxDate', { selector: '[data-terra-date-picker-calendar]' });

    it('Select a day', () => {
      browser.click('[class*="react-datepicker-day--selected"]');
    });

    Terra.it.matchesScreenshot('date selected');

    it('Enters date beyond max', () => {
      browser.setValue('input[name="terra-date-month-date-input"]', '11');
      browser.setValue('input[name="terra-date-day-date-input"]', '11');
      browser.setValue('input[name="terra-date-year-date-input"]', '2111');
      Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
    });

    Terra.it.matchesScreenshot('beyond maxDate entered');

    it('Enters min date', () => {
      browser.setValue('input[name="terra-date-month-date-input"]', '01');
      browser.setValue('input[name="terra-date-day-date-input"]', '01');
      browser.setValue('input[name="terra-date-year-date-input"]', '1900');
    });

    Terra.it.matchesScreenshot('minDate entered');

    it('Opens the date picker', () => {
      browser.click('[class*="button"]');
    });

    Terra.it.matchesScreenshot('uses default minDate', { selector: '[data-terra-date-picker-calendar]' });

    it('Select a day', () => {
      browser.click('[class*="react-datepicker-day--selected"]');
    });

    Terra.it.matchesScreenshot('min date selected');

    it('Enters date beyond min', () => {
      browser.setValue('input[name="terra-date-month-date-input"]', '10');
      browser.setValue('input[name="terra-date-day-date-input"]', '20');
      browser.setValue('input[name="terra-date-year-date-input"]', '1899');
    });

    Terra.it.matchesScreenshot('beyond minDate entered');
  });
});
