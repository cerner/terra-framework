Terra.describeViewports('Date Picker', ['tiny', 'small', 'medium'], () => {
  describe('Default', () => {
    it('creates a hidden input and empty value attr. when no date is entered', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-default');
      expect($('[data-terra-date-input-hidden]').getAttribute('name')).toEqual('date-input');
      expect($('[data-terra-date-input-hidden]').getAttribute('value')).toEqual('');
    });

    it('sets the date', () => {
      $('input[name="terra-date-date-input"]').setValue('06/01/2017');
      browser.keys('Enter');
      $('[class*="button"]').click();

      Terra.validates.element('default date set', { selector: '#root' });
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
        $('[class*="button"]').click();
        Terra.validates.element('default date cleared');
      });
    });

    describe('Default Date Excluded - Clears input focusing on input box', () => {
      it('should display default date', () => {
        browser.refresh();
        Terra.validates.element('excluded date displayed');
      });

      it('clears the default date and time after focusing on input box', () => {
        $('input[name="terra-date-date-input"]').click();
        // Ensures the mouse pointer doesn't appear in the screenshot
        $('h3').click();
        Terra.validates.element('excluded date cleared');
      });
    });
  });

  describe('Default Date Out Of Range', () => {
    describe('Default Date Out Of Range - Clears input using calendar icon', () => {
      it('should display default date', () => {
        browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-default-date-out-of-range');
        Terra.validates.element('out of range date displayed');
      });

      it('clears the default date and time after clicking on calendar button', () => {
        $('[class*="button"]').click();
        Terra.validates.element('out of range date cleared');
      });
    });

    describe('Default Date Out Of Range - Clears input focusing on input box', () => {
      it('should display default date', () => {
        browser.refresh();

        Terra.validates.element('out of range date displayed focusing on input box');
      });

      it('clears the default date and time after focusing on input box', () => {
        $('input[name="terra-date-date-input"]').click();
        // Ensures the mouse pointer doesn't appear in the screenshot
        $('h3').click();
        Terra.validates.element('out of range date cleared focusing on input box');
      });
    });

    describe('Clears default date value that is before the minDate and no maxDate', () => {
      it('should display default date', () => {
        browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-default-date-before-min-date-only');

        Terra.validates.element('date before the minDate displayed');
      });

      it('clears the default date when focus is on the input', () => {
        $('input[name="terra-date-date-input"]').click();
        // Ensures the mouse pointer doesn't appear in the screenshot
        $('h3').click();
        Terra.validates.element('date before the minDate cleared');
      });
    });
  });

  it('displays Exclude Dates', () => {
    browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-exclude-dates');
    $('[class*="button"]').click();
    Terra.validates.element('exclude dates', { selector: '[data-terra-date-picker-calendar]' });
  });

  it('displays Filter Dates', () => {
    browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-filter-dates');
    $('input[name="terra-date-date-input"]').setValue('06/01/2017');
    browser.keys('Enter');
    $('[class*="button"]').click();
    Terra.validates.element('filter dates', { selector: '[data-terra-date-picker-calendar]' });
  });

  it('displays Include Dates', () => {
    browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-include-dates');
    $('[class*="button"]').click();
    Terra.validates.element('include dates', { selector: '[data-terra-date-picker-calendar]' });
  });

  describe('Disabled', () => {
    it('should display disabled date picker', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-disabled');
      Terra.validates.element('disabled');
    });

    it('should not accept keyboard input', () => {
      expect($('input[name="terra-date-date-input"]').setValue.bind($('input[name="terra-date-date-input"]'), '06/01/2017')).toThrow(Error);
    });

    it('should not accept mouse interaction', () => {
      expect($('[class*="button"]').click.bind($('[class*="button"]'))).toThrow(Error);
    });
  });

  describe('Read Only', () => {
    it('should not be clicked', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-read-only');
      $('#root').moveTo(0, 0);

      Terra.validates.element('not clicked');
    });

    it('should not accept keyboard input', () => {
      expect($('input[name="terra-date-date-input"]').setValue.bind($('input[name="terra-date-date-input"]'), '06/01/2017')).toThrow(Error);
    });

    it('should not open the date picker', () => {
      $('[class*="button"]').click();
      Terra.validates.element('clicked');
    });
  });

  it('should display Min Max', () => {
    browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-min-max');
    $('[class*="button"]').click();
    Terra.validates.element('min max', { selector: '[data-terra-date-picker-calendar]' });
  });

  describe('On Blur', () => {
    it('puts focus on the input', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-focus-blur');
      $('input[name="terra-date-date-input-onblur"]').click();

      browser.keys('05/01/2019');
      expect($('#blur-count').getText()).toEqual('0');
      expect($('#focus-count').getText()).toEqual('1');
      expect($('#iso').getText()).toEqual('');
      expect($('#input-value').getText()).toEqual('');
      expect($('#complete-date').getText()).toEqual('No');
      expect($('#valid-date').getText()).toEqual('Yes');
    });

    it('tabs to the calendar button and onBlur is not triggered', () => {
      browser.keys('Tab');
      expect($('#blur-count').getText()).toEqual('0');
      expect($('#focus-count').getText()).toEqual('1');
      expect($('#iso').getText()).toEqual('');
      expect($('#input-value').getText()).toEqual('');
      expect($('#complete-date').getText()).toEqual('No');
      expect($('#valid-date').getText()).toEqual('Yes');
    });

    it('tabs out of the component and onBlur is triggered', () => {
      browser.keys('Tab');
      expect($('#blur-count').getText()).toEqual('1');
      expect($('#focus-count').getText()).toEqual('1');
      expect($('#iso').getText()).toEqual('2019-05-01');
      expect($('#input-value').getText()).toEqual('05/01/2019');
      expect($('#complete-date').getText()).toEqual('Yes');
      expect($('#valid-date').getText()).toEqual('Yes');
    });
  });

  describe('On Change', () => {
    it('sets the date', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-on-change');
      $('input[name="terra-date-date-input-onchange"]').setValue('06/01/2017');
      browser.keys('Enter');
      // Ensures the mouse pointer doesn't appear in the screenshot
      $('h3').click();
      expect($('#iso').getText()).toEqual('2017-06-01');
      expect($('#input-value').getText()).toEqual('06/01/2017');
      expect($('#complete-date').getText()).toEqual('Yes');
      expect($('#valid-date').getText()).toEqual('Yes');
      Terra.validates.element('on change date set');
    });

    it('clears the date', () => {
      $('input[name="terra-date-date-input-onchange"]').click();
      // Manually clear the date input -- clearValue command successfully clears the input value,
      // however chromedriver does not trigger the change event.
      for (let i = 0; i < 8; i += 1) {
        browser.keys('Backspace');
      }
      // The date extends past the center of the element so the cursor must be repositioned to remove everything
      $('input[name="terra-date-date-input-onchange"]').click();
      browser.keys('Backspace');
      browser.keys('Backspace');
      browser.keys('Backspace');
      // Ensures the mouse pointer doesn't appear in the screenshot
      $('h3').click();
      expect($('#iso').getText()).toEqual('');
      expect($('#input-value').getText()).toEqual('');
      expect($('#complete-date').getText()).toEqual('No');
      expect($('#valid-date').getText()).toEqual('Yes');
      Terra.validates.element('on change no date set');
    });
  });

  describe('On Change Raw', () => {
    it('sets an invalid date', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-on-change-raw');
      $('input[name="terra-date-date-input-onchangeraw"]').setValue('04/01/2019');
      // Ensures the mouse pointer doesn't appear in the screenshot
      $('h3').click();
      expect($('#iso').getText()).toEqual('2019-04-01');
      expect($('#input-value').getText()).toEqual('04/01/2019');
      expect($('#complete-date').getText()).toEqual('Yes');
      expect($('#valid-date').getText()).toEqual('No');
      Terra.validates.element('on change raw date set to invalid 04/01/2019');
    });

    it('partially sets the date', () => {
      $('input[name="terra-date-date-input-onchangeraw"]').setValue('06/01');
      // Ensures the mouse pointer doesn't appear in the screenshot
      $('h3').click();
      expect($('#iso').getText()).toEqual('');
      expect($('#input-value').getText()).toEqual('06/01');
      expect($('#complete-date').getText()).toEqual('No');
      expect($('#valid-date').getText()).toEqual('No');
      Terra.validates.element('on change raw date set to 06-01');
    });

    it('finishes setting the date', () => {
      $('input[name="terra-date-date-input-onchangeraw"]').addValue('/2017');
      // Ensures the mouse pointer doesn't appear in the screenshot
      $('h3').click();
      expect($('#iso').getText()).toEqual('2017-06-01');
      expect($('#input-value').getText()).toEqual('06/01/2017');
      expect($('#complete-date').getText()).toEqual('Yes');
      expect($('#valid-date').getText()).toEqual('Yes');
      Terra.validates.element('on change raw date set to 06-01-2017');
    });
  });

  describe('On Click Outside', () => {
    it('dismisses the datepicker after clicking outside', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-default');
      $('[class*="button"]').click();
      $('[class*="PopupOverlay"]').click();
      Terra.validates.element('on click outside date picker closed');
    });
  });

  describe('On Select', () => {
    it('enters a date through input', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-on-select');
      $('input[name="terra-date-date-input-onselect"]').setValue('06/01/2017');
      // Ensures the mouse pointer doesn't appear in the screenshot
      $('h3').click();
      Terra.validates.element('on select date not displayed');
    });

    it('selects a date through date picker', () => {
      $('[class*="button"]').click();
      $('div[class*="selected"]').click();
      Terra.validates.element('on select  date displayed');
    });
  });

  it('creates a hidden input with default name attr. and sets value in ISO8601 when a valid date is entered', () => {
    browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-start-date');
    expect($('[data-terra-date-input-hidden]').getAttribute('name')).toEqual('date-input');
    expect($('[data-terra-date-input-hidden]').getAttribute('value')).toEqual('2017-04-01');
    Terra.validates.element('hidden input start date');
  });

  it('should ignore invalid dates ', () => {
    browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-ignore-invalid-selected-dates');
    $('#root').moveTo(0, 0);
    Terra.validates.element('ignore invalid date');
  });

  describe('Key Limitations', () => {
    it('sets the date', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-default');
      $('input[name="terra-date-date-input"]').setValue('0');
      browser.keys('a1.b2/;3');
      Terra.validates.element('key limitations');
    });
  });

  describe('DatePickerField', () => {
    it('displays Valid DatePickerField', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-field');
      $('#root').moveTo(0, 0);
      Terra.validates.element('date picker field valid');
    });

    it('displays Invalid DatePickerField', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-field');
      $('#validity-toggle').click();
      Terra.validates.element('date picker field invalid');
      $('#validity-toggle').click();
    });

    it('displays Incomplete DatePickerField', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-field');
      $('#incomplete-toggle').click();
      Terra.validates.element('date picker field incomplete');
      $('#incomplete-toggle').click();
    });

    it('displays Invalid and Incomplete DatePickerField', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-field');
      $('#validity-toggle').click();
      $('#incomplete-toggle').click();
      Terra.validates.element('date picker field invalid and incomplete');
      $('#validity-toggle').click();
      $('#incomplete-toggle').click();
    });

    it('displays Disabled DatePickerField', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/disabled-date-picker-field');
      Terra.validates.element('date picker field disabled');
    });

    it('displays Multiple DatePickerField', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/multiple-date-picker-field');
      Terra.validates.element('date picker field multiple');
    });
  });

  describe('Controlled DatePicker', () => {
    it('Enters date value', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-controlled');
      $('input[name="terra-date-controlled-date-picker"]').setValue('03/07/2019');
      Terra.validates.element('controlled date picker date input manually updated');
    });

    it('Open the date picker', () => {
      $('[class*="button"]').click();
      Terra.validates.element('controlled date picker date picker updated', { selector: '[data-terra-date-picker-calendar]' });
    });

    it('Click button 2 to set formatted date', () => {
      $('[class*="PopupOverlay"]').click();
      $('#button2').click();
      Terra.validates.element('controlled date picker formatted date set');
    });

    it('Open the date picker', () => {
      $('[class*="button"]').click();
      Terra.validates.element('controlled date picker with formatted date', { selector: '[data-terra-date-picker-calendar]' });
    });

    it('Click button 3 to set iso date', () => {
      $('[class*="PopupOverlay"]').click();
      $('#button3').click();
      Terra.validates.element('controlled date picker iso date set');
    });

    it('Open the date picker', () => {
      $('[class*="button"]').click();
      Terra.validates.element('controlled date picker with iso date', { selector: '[data-terra-date-picker-calendar]' });
    });

    it('Click button 4 to set iso date time', () => {
      $('[class*="PopupOverlay"]').click();
      $('#button4').click();
      Terra.validates.element('controlled date picker iso date set without time');
    });

    it('Open the date picker', () => {
      $('[class*="button"]').click();
      Terra.validates.element('controlled date picker with iso date no time', { selector: '[data-terra-date-picker-calendar]' });
    });

    it('Click button 5 to set ordinal date', () => {
      $('[class*="PopupOverlay"]').click();
      $('#button5').click();
      Terra.validates.element('controlled date picker ordinal date not set');
    });
  });

  describe('Remounts component', () => {
    it('Opens the date picker', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-remount');
      $('[class*="button"]').click();
    });

    it('Selects a date from date picker', () => {
      browser.keys('ArrowDown');
      browser.keys('Enter');
      Terra.validates.element('remounts component date selected');
    });
  });

  describe('Beyond Min Max', () => {
    it('Opens the date picker', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/date-picker-beyond-min-max');
      $('[class*="button"]').click();
      Terra.validates.element('uses default maxDate', { selector: '[data-terra-date-picker-calendar]' });
    });

    it('Select a day', () => {
      $('[class*="react-datepicker-day--selected"]').click();
      Terra.validates.element('beyond min max date selected');
    });

    it('Enters date beyond max', () => {
      $('input[name="terra-date-date-input"]').setValue('11/11/2111');
      Terra.validates.element('beyond max date entered');
    });

    it('Enters min date', () => {
      $('input[name="terra-date-date-input"]').setValue('01/01/1900');
      Terra.validates.element('min date entered');
    });

    it('Opens the date picker', () => {
      $('[class*="button"]').click();
      Terra.validates.element('uses default minDate', { selector: '[data-terra-date-picker-calendar]' });
    });

    it('Select a day', () => {
      $('[class*="react-datepicker-day--selected"]').click();
      Terra.validates.element('min date selected');
    });

    it('Enters date beyond min', () => {
      $('input[name="terra-date-date-input"]').setValue('10/20/1899');
      Terra.validates.element('beyond min date entered');
    });
  });
});
