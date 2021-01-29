Terra.describeViewports('Date Picker', ['tiny', 'small', 'medium'], () => {
  describe('Default', () => {
    it('creates a hidden input and empty value attr. when no date is entered', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-default');
      expect(browser.getAttribute('[data-terra-date-input-hidden]', 'name')).to.equal('date-input');
      expect(browser.getAttribute('[data-terra-date-input-hidden]', 'value')).to.equal('');
    });

    it('sets the date', () => {
      browser.setValue('input[name="terra-date-month-date-input"]', '06');
      browser.setValue('input[name="terra-date-day-date-input"]', '01');
      browser.setValue('input[name="terra-date-year-date-input"]', '2017');
      browser.click('[class*="button"]');

      Terra.validates.element('date set', { selector: '#root' });
    });
  });
});

Terra.describeViewports('Date Picker', ['medium'], () => {
  describe('Default Date Excluded', () => {
    describe('Default Date Excluded - Clears input using calendar icon', () => {
      it('should display default date', () => {
        browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-default-date-excluded');
        Terra.validates.element('default date displayed');
      });

      it('clears the default date after clicking on calendar button', () => {
        browser.click('[class*="button"]');
        Terra.validates.element('default date cleared');
      });
    });

    describe('Default Date Excluded - Clears input on focusing day input box', () => {
      it('should display default date', () => {
        browser.refresh();
        Terra.validates.element('default date displayed');
      });

      it('clears the default date after focusing on day input box', () => {
        browser.click('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.validates.element('default date cleared');
      });
    });
  });

  describe('Default Date Out Of Range', () => {
    describe('Default Date Out Of Range - Clears input using calendar icon', () => {
      it('should display default date', () => {
        browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-default-date-out-of-range');
        Terra.validates.element('default date displayed');
      });

      it('clears the default date after clicking on calendar button', () => {
        browser.click('[class*="button"]');
        Terra.validates.element('default date cleared');
      });
    });

    describe('Default Date Out Of Range - Clears input on focusing month input box', () => {
      it('should display default date', () => {
        browser.refresh();
        Terra.validates.element('default date displayed');
      });

      it('clears the default date after focusing on month input box', () => {
        browser.click('input[name="terra-date-month-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-month-date-input"]');
        Terra.validates.element('default date cleared');
      });
    });

    describe('Clears default date value that is before the minDate and no maxDate', () => {
      it('should display default date', () => {
        browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-default-date-before-min-date-only');
        Terra.validates.element('default date displayed');
      });

      it('clears the default date when focusing on year input', () => {
        browser.click('input[name="terra-date-year-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
        Terra.validates.element('default date cleared');
      });
    });
  });

  it('displays Exclude Dates', () => {
    browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-exclude-dates');
    browser.click('[class*="button"]');
    Terra.validates.element('exclude dates', { selector: '[data-terra-date-picker-calendar]' });
  });

  it('displays Filter Dates', () => {
    browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-filter-dates');
    browser.setValue('input[name="terra-date-month-date-input"]', '06');
    browser.setValue('input[name="terra-date-day-date-input"]', '01');
    browser.setValue('input[name="terra-date-year-date-input"]', '2017');
    browser.click('[class*="button"]');
    Terra.validates.element('filter dates', { selector: '[data-terra-date-picker-calendar]' });
  });

  it('displays Include Dates', () => {
    browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-include-dates');
    browser.click('[class*="button"]');
    Terra.validates.element('include dates', { selector: '[data-terra-date-picker-calendar]' });
  });

  describe('Disabled', () => {
    it('should display disabled date picker', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-disabled');
      Terra.validates.element('disabled');
    });

    it('should not accept keyboard input', () => {
      expect(browser.setValue.bind(browser, 'input[name="terra-date-month-date-input"]', '06')).to.throw(Error);
    });

    it('should not accept mouse interaction', () => {
      expect(browser.click.bind(browser, '[class*="button"]')).to.throw(Error);
    });
  });

  describe('Read Only', () => {
    it('should not be clicked', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-read-only');
      browser.moveToObject('#root', 0, 0);

      Terra.validates.element('not clicked');
    });

    it('should not accept keyboard input', () => {
      expect(browser.setValue.bind(browser, 'input[name="terra-date-day-date-input"]', '21')).to.throw(Error);
    });

    it('should not open the date picker', () => {
      browser.click('[class*="button"]');
      Terra.validates.element('clicked');
    });
  });

  it('should display Min Max', () => {
    browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-min-max');
    browser.click('[class*="button"]');
    Terra.validates.element('min max', { selector: '[data-terra-date-picker-calendar]' });
  });

  describe('onFocus and onBlur', () => {
    it('puts focus on the input', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-focus-blur');
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
    it('sets the date', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-on-change');
      browser.setValue('input[name="terra-date-month-date-input-onchange"]', '06');
      browser.setValue('input[name="terra-date-day-date-input-onchange"]', '01');
      browser.setValue('input[name="terra-date-year-date-input-onchange"]', '2017');
      Terra.hideInputCaret('input[name="terra-date-year-date-input-onchange"]');
      expect(browser.getText('#iso')).to.equal('2017-06-01');
      expect(browser.getText('#input-value')).to.equal('06/01/2017');
      expect(browser.getText('#complete-date')).to.equal('Yes');
      expect(browser.getText('#valid-date')).to.equal('Yes');
      Terra.validates.element('date set');
    });

    it('clears the date', () => {
      browser.click('input[name="terra-date-day-date-input-onchange"]');
      browser.keys('Delete');
      browser.click('input[name="terra-date-year-date-input-onchange"]');
      browser.keys('Delete');
      browser.click('input[name="terra-date-month-date-input-onchange"]');
      browser.keys('Delete');
      Terra.hideInputCaret('input[name="terra-date-month-date-input-onchange"]');
      expect(browser.getText('#iso')).to.equal('');
      expect(browser.getText('#input-value')).to.equal('');
      expect(browser.getText('#complete-date')).to.equal('No');
      expect(browser.getText('#valid-date')).to.equal('Yes');
      Terra.validates.element('no date set');
    });
  });

  describe('On Change Raw', () => {
    it('sets an invalid date', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-on-change-raw');
      browser.setValue('input[name="terra-date-month-date-input-onchangeraw"]', '04');
      browser.setValue('input[name="terra-date-day-date-input-onchangeraw"]', '01');
      browser.setValue('input[name="terra-date-year-date-input-onchangeraw"]', '2019');
      Terra.hideInputCaret('input[name="terra-date-year-date-input-onchangeraw"]');
      expect(browser.getText('#iso')).to.equal('2019-04-01');
      expect(browser.getText('#input-value')).to.equal('04/01/2019');
      expect(browser.getText('#complete-date')).to.equal('Yes');
      expect(browser.getText('#valid-date')).to.equal('No');
      Terra.validates.element('date set to invalid 04/01/2019');
    });

    it('partially sets the date', () => {
      browser.refresh();
      browser.waitForVisible('input[name="terra-date-month-date-input-onchangeraw"]');
      browser.setValue('input[name="terra-date-month-date-input-onchangeraw"]', '06');
      browser.setValue('input[name="terra-date-day-date-input-onchangeraw"]', '01');
      Terra.hideInputCaret('input[name="terra-date-year-date-input-onchangeraw"]');

      expect(browser.getText('#iso')).to.equal('');
      expect(browser.getText('#input-value')).to.equal('06/01/');
      expect(browser.getText('#complete-date')).to.equal('No');
      expect(browser.getText('#valid-date')).to.equal('No');
      Terra.validates.element('date set to 06-01');
    });

    it('finishes setting the date', () => {
      browser.setValue('input[name="terra-date-year-date-input-onchangeraw"]', '2017');

      expect(browser.getText('#iso')).to.equal('2017-06-01');
      expect(browser.getText('#input-value')).to.equal('06/01/2017');
      expect(browser.getText('#complete-date')).to.equal('Yes');
      expect(browser.getText('#valid-date')).to.equal('Yes');
      Terra.validates.element('date set to 06-01-2017');
    });
  });

  describe('On Click Outside', () => {
    it('dismisses the datepicker after clicking outside', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-default');
      browser.click('[class*="button"]');
      browser.click('[class*="PopupOverlay"]');
      Terra.validates.element('date picker closed');
    });
  });

  describe('On Select', () => {
    it('enters a date through input', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-on-select');
      browser.setValue('input[name="terra-date-month-date-input-onselect"]', '06');
      browser.setValue('input[name="terra-date-day-date-input-onselect"]', '01');
      browser.setValue('input[name="terra-date-year-date-input-onselect"]', '2017');
      Terra.hideInputCaret('input[name="terra-date-year-date-input-onselect"]');
      Terra.validates.element('Selected date not displayed');
    });

    it('selects a date through date picker', () => {
      browser.click('[class*="button"]');
      browser.click('div[class*="selected"]');
      Terra.validates.element('Selected date displayed');
    });
  });

  it('creates a hidden input with default name attr. and sets value in ISO8601 when a valid date is entered', () => {
    browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-start-date');
    expect(browser.getAttribute('[data-terra-date-input-hidden]', 'name')).to.equal('date-input');
    expect(browser.getAttribute('[data-terra-date-input-hidden]', 'value')).to.equal('2017-04-01');
    Terra.validates.element('start date');
  });

  it('should ignore invalid dates ', () => {
    browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-ignore-invalid-selected-dates');
    browser.moveToObject('#root', 0, 0);
    Terra.validates.screenshot('ignore invalid date');
  });

  describe('Key Limitations', () => {
    it('sets the date', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-default');
      browser.setValue('input[name="terra-date-month-date-input"]', '0');
      browser.keys('a1.b2/;3');
      Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
      Terra.validates.element('default');
    });
  });

  describe('DatePickerField', () => {
    it('displays Valid DatePickerField', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-field');
      browser.moveToObject('#root', 0, 0);
      Terra.validates.element('valid');
    });

    it('displays Invalid DatePickerField', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-field');
      browser.click('#validity-toggle');
      Terra.validates.element('invalid');
      browser.click('#validity-toggle');
    });

    it('displays Incomplete DatePickerField', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-field');
      browser.click('#incomplete-toggle');
      Terra.validates.element('incomplete');
      browser.click('#incomplete-toggle');
    });

    it('displays Invalid and Incomplete DatePickerField', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-field');
      browser.click('#validity-toggle');
      browser.click('#incomplete-toggle');
      Terra.validates.element('invalid and incomplete');
      browser.click('#validity-toggle');
      browser.click('#incomplete-toggle');
    });

    it('displays Disabled DatePickerField', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/disabled-date-picker-field');
      Terra.validates.element('disabled');
    });

    it('displays Multiple DatePickerField', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/multiple-date-picker-field');
      Terra.validates.element('multiple');
    });
  });

  describe('Controlled DatePicker', () => {
    it('Enters date value', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-controlled');
      browser.setValue('input[name="terra-date-month-controlled-date-picker"]', '03');
      browser.setValue('input[name="terra-date-day-controlled-date-picker"]', '07');
      browser.setValue('input[name="terra-date-year-controlled-date-picker"]', '2019');
      Terra.hideInputCaret('input[name="terra-date-year-controlled-date-picker"]');
      Terra.validates.screenshot('date input manually updated');
    });

    it('Open the date picker', () => {
      browser.click('[class*="button"]');
      Terra.validates.screenshot('date picker updated', { selector: '[data-terra-date-picker-calendar]' });
    });

    it('Click button 1 to clear date', () => {
      browser.click('[class*="PopupOverlay"]');
      browser.click('#button1');
      Terra.validates.screenshot('formatted date cleared');
    });

    it('Click button 2 to set formatted date', () => {
      browser.click('#button2');
      Terra.validates.screenshot('formatted date set');
    });

    it('Open the date picker', () => {
      browser.click('[class*="button"]');
      Terra.validates.screenshot('picker with formatted date', { selector: '[data-terra-date-picker-calendar]' });
    });

    it('Click button 3 to set iso date', () => {
      browser.click('[class*="PopupOverlay"]');
      browser.click('#button3');
      Terra.validates.screenshot('iso date set');
    });

    it('Open the date picker', () => {
      browser.click('[class*="button"]');
      Terra.validates.screenshot('picker with iso date', { selector: '[data-terra-date-picker-calendar]' });
    });

    it('Click button 4 to set iso date time', () => {
      browser.click('[class*="PopupOverlay"]');
      browser.click('#button4');
      Terra.validates.screenshot('iso date set without time');
    });

    it('Open the date picker', () => {
      browser.click('[class*="button"]');
      Terra.validates.screenshot('picker with iso date no time', { selector: '[data-terra-date-picker-calendar]' });
    });

    it('Click button 5 to set ordinal date', () => {
      browser.click('[class*="PopupOverlay"]');
      browser.click('#button5');
      Terra.validates.screenshot('ordinal date not set');
    });
  });

  describe('Remounts component', () => {
    it('Opens the date picker', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-remount');
      browser.click('[class*="button"]');
    });

    it('Selects a date from date picker', () => {
      browser.keys('ArrowDown');
      browser.keys('Enter');
      Terra.validates.element('date selected');
    });
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
      Terra.validates.element('month input highlighted');
    });

    it('Month input cleared with single Delete key press and loses highlight', () => {
      browser.keys('Delete');
      Terra.validates.element('month input cleared completely and loses highlight');
    });

    it('Day input focused', () => {
      browser.click('input[name="terra-date-day-date-input"]');
      Terra.validates.element('day input highlighted');
    });

    it('Day input cleared with single Delete key press and loses highlight', () => {
      browser.keys('Delete');
      Terra.validates.element('day input cleared completely and loses highlight');
    });

    it('Year input focused', () => {
      browser.click('input[name="terra-date-year-date-input"]');
      Terra.validates.element('year input highlighted');
    });

    it('Year input cleared with single Delete key press and loses highlight', () => {
      browser.keys('Delete');
      Terra.validates.element('year input cleared completely and loses highlight');
    });
  });

  describe('Arrow, Delete and Backspace Navigation', () => {
    describe('Up Arrow', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default');
        Terra.hideInputCaret('input[name="terra-date-month-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
      });

      it('Increment month input', () => {
        browser.click('input[name="terra-date-month-date-input"]');
        browser.keys('ArrowUp');
        Terra.validates.element('increment month input');
      });

      it('Increment day input', () => {
        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys('ArrowUp');
        Terra.validates.element('increment day input');
      });

      it('Increment year input', () => {
        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys('ArrowUp');
        Terra.validates.element('increment year input');
      });
    });

    describe('Down Arrow', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default');
        Terra.hideInputCaret('input[name="terra-date-month-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
      });

      it('Decrement month input', () => {
        browser.click('input[name="terra-date-month-date-input"]');
        browser.keys('10');
        browser.keys('ArrowLeft');
        browser.keys('ArrowDown');
        Terra.validates.element('decrement month input');
      });

      it('Decrement day input', () => {
        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys('10');
        browser.keys('ArrowLeft');
        browser.keys('ArrowDown');
        Terra.validates.element('decrement day input');
      });

      it('Decrement year input', () => {
        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys('2009');
        browser.keys('ArrowDown');
        Terra.validates.element('decrement year input');
      });
    });

    describe('Right Arrow', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default');
        Terra.hideInputCaret('input[name="terra-date-month-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
      });

      it('Focus on month input', () => {
        browser.click('input[name="terra-date-month-date-input"]');
        Terra.validates.element('focus on month input');
      });

      it('Focus on day input', () => {
        browser.keys('ArrowRight');
        Terra.validates.element('focus on day input');
      });

      it('Focus on year input', () => {
        browser.keys('ArrowRight');
        Terra.validates.element('focus on year input');
      });
    });

    describe('Left Arrow', () => {
      it('Focus on day input', () => {
        browser.keys('ArrowLeft');
        Terra.validates.element('focus on day input');
      });

      it('Focus on month input', () => {
        browser.keys('ArrowLeft');
        Terra.validates.element('focus on month input');
      });
    });

    describe('Delete Key', () => {
      it('Focus on year input', () => {
        browser.click('input[name="terra-date-year-date-input"]');
        Terra.validates.element('focus on year input');
      });

      it('Focus on day input', () => {
        browser.keys('Delete');
        Terra.validates.element('focus on day input');
      });

      it('Focus on month input', () => {
        browser.keys('Delete');
        Terra.validates.element('focus on month input');
      });
    });

    describe('Backspace Key', () => {
      it('Focus on year input', () => {
        browser.click('input[name="terra-date-year-date-input"]');
        Terra.validates.element('focus on year input');
      });

      it('Focus on day input', () => {
        browser.keys('Backspace');
        Terra.validates.element('focus on day input');
      });

      it('Focus on month input', () => {
        browser.keys('Backspace');
        Terra.validates.element('focus on month input');
      });
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
        Terra.validates.element('auto prepend 0');
      });

      it('Reject values greater than 12', () => {
        browser.click('input[name="terra-date-month-date-input"]');
        browser.keys('Delete');
        browser.keys('13');
        Terra.hideInputCaret('input[name="terra-date-month-date-input"]');
        Terra.validates.element('rejected digit 3');
      });
    });

    describe('Day Input', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default');
      });

      it('Auto prepend 0 for digits greater than 3', () => {
        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys('5');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
        Terra.validates.element('auto prepend 0');
      });

      it('Reject values greater than 31', () => {
        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys('Delete');
        browser.keys('32');
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.validates.element('rejected digit 2');
      });
    });

    describe('Year Input', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
      });

      it('Auto prepend 200 for single digit', () => {
        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys('3');
        browser.keys('Tab');
        Terra.validates.element('auto prepend 200');
      });

      it('Auto prepend 20 for two digits', () => {
        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys('Delete');
        browser.keys('31');
        browser.keys('Tab');
        Terra.validates.element('auto prepend 20');
      });

      it('Auto append 0 for three digits in the range 190 to 210', () => {
        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys('Delete');
        browser.keys('204');
        browser.keys('Tab');
        Terra.validates.element('auto append 0');
      });

      it('Reject values greater than 2100', () => {
        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys('Delete');
        browser.keys('2101');
        Terra.validates.element('rejected digit 1');
      });

      it('Reject values less than 1900', () => {
        browser.keys('Tab');
        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys('Delete');
        browser.keys('1899');
        Terra.validates.element('rejected digit 9');
      });
    });
  });

  describe('Beyond Min Max', () => {
    it('Opens the date picker', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-beyond-min-max');
      browser.click('[class*="button"]');
      Terra.validates.element('uses default maxDate', { selector: '[data-terra-date-picker-calendar]' });
    });

    it('Select a day', () => {
      browser.click('[class*="react-datepicker-day--selected"]');
      Terra.validates.element('date selected');
    });

    it('Enters date beyond max', () => {
      browser.setValue('input[name="terra-date-month-date-input"]', '11');
      browser.setValue('input[name="terra-date-day-date-input"]', '11');
      browser.setValue('input[name="terra-date-year-date-input"]', '2111');
      Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
      Terra.validates.element('beyond maxDate entered');
    });

    it('Enters min date', () => {
      browser.refresh();
      browser.setValue('input[name="terra-date-month-date-input"]', '01');
      browser.setValue('input[name="terra-date-day-date-input"]', '01');
      browser.setValue('input[name="terra-date-year-date-input"]', '1900');
      Terra.validates.element('minDate entered');
    });

    it('Opens the date picker', () => {
      browser.click('[class*="button"]');
      Terra.validates.element('uses default minDate', { selector: '[data-terra-date-picker-calendar]' });
    });

    it('Select a day', () => {
      browser.click('[class*="react-datepicker-day--selected"]');
      Terra.validates.element('min date selected');
    });

    it('Enters date beyond min', () => {
      browser.setValue('input[name="terra-date-month-date-input"]', '10');
      browser.setValue('input[name="terra-date-day-date-input"]', '20');
      browser.setValue('input[name="terra-date-year-date-input"]', '1899');
      Terra.validates.element('beyond minDate entered');
    });
  });
});
