Terra.describeViewports('Date Picker', ['tiny', 'small', 'medium'], () => {
  describe('Default', () => {
    it('creates a hidden input and empty value attr. when no date is entered', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-default');

      expect($('[data-terra-date-input-hidden]').getAttribute('name')).toEqual('date-input');
      expect($('[data-terra-date-input-hidden]').getAttribute('value')).toEqual('');
    });

    it('sets the date', () => {
      $('input[name="terra-date-month-date-input"]').setValue('06');
      $('input[name="terra-date-day-date-input"]').setValue('01');
      $('input[name="terra-date-year-date-input"]').setValue('2017');
      $('[class*="button"]').click();

      Terra.validates.element('default date set', { selector: '#root' });
    });
  });
});

Terra.describeViewports('Date Picker', ['medium'], () => {
  describe('Default Date Excluded', () => {
    describe('Default Date Excluded - Clears input using calendar icon', () => {
      it('should display default date', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-default-date-excluded');

        Terra.validates.element('default date displayed');
      });

      it('clears the default date after clicking on calendar button', () => {
        $('[class*="button"]').click();

        Terra.validates.element('default date cleared');
      });
    });

    describe('Default Date Excluded - Clears input on focusing day input box', () => {
      it('should display default date', () => {
        browser.refresh();

        Terra.validates.element('excluded date displayed');
      });

      it('clears the default date after focusing on day input box', () => {
        $('input[name="terra-date-day-date-input"]').click();
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');

        Terra.validates.element('excluded date cleared');
      });
    });
  });

  describe('Default Date Out Of Range', () => {
    describe('Default Date Out Of Range - Clears input using calendar icon', () => {
      it('should display default date', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-default-date-out-of-range');

        Terra.validates.element('out of range date displayed');
      });

      it('clears the default date after clicking on calendar button', () => {
        $('[class*="button"]').click();

        Terra.validates.element('out of range date cleared');
      });
    });

    describe('Default Date Out Of Range - Clears input on focusing month input box', () => {
      it('should display default date', () => {
        browser.refresh();

        Terra.validates.element('out of range date displayed on focusing month input box');
      });

      it('clears the default date after focusing on month input box', () => {
        $('input[name="terra-date-month-date-input"]').click();
        Terra.hideInputCaret('input[name="terra-date-month-date-input"]');

        Terra.validates.element('out of range date cleared after focusing on month input box');
      });
    });

    describe('Clears default date value that is before the minDate and no maxDate', () => {
      it('should display default date', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-default-date-before-min-date-only');

        Terra.validates.element('date before the minDate displayed');
      });

      it('clears the default date when focusing on year input', () => {
        $('input[name="terra-date-year-date-input"]').click();
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        Terra.validates.element('date before the minDate cleared');
      });
    });
  });

  it('displays Exclude Dates', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-exclude-dates');
    $('[class*="button"]').click();

    Terra.validates.element('exclude dates', { selector: '[data-terra-date-picker-calendar]' });
  });

  it('displays Filter Dates', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-filter-dates');
    $('input[name="terra-date-month-date-input"]').setValue('06');
    $('input[name="terra-date-day-date-input"]').setValue('01');
    $('input[name="terra-date-year-date-input"]').setValue('2017');
    $('[class*="button"]').click();

    Terra.validates.element('filter dates', { selector: '[data-terra-date-picker-calendar]' });
  });

  it('displays Include Dates', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-include-dates');
    $('[class*="button"]').click();

    Terra.validates.element('include dates', { selector: '[data-terra-date-picker-calendar]' });
  });

  describe('Disabled', () => {
    it('should display disabled date picker', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-disabled');

      Terra.validates.element('disabled');
    });

    it('should not accept keyboard input', () => {
      $('input[name="terra-date-month-date-input"]').setValue.bind($('input[name="terra-date-month-date-input"]'), '06');

      Terra.validates.element('disabled reject keyboard input');
    });

    it('should not accept mouse interaction', () => {
      $('[class*="button"]').click.bind($('[class*="button"]'));

      Terra.validates.element('disabled reject mouse interaction');
    });
  });

  describe('Read Only', () => {
    it('should not be clicked', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-read-only');
      $('#root').moveTo(0, 0);

      Terra.validates.element('not clicked');
    });

    it('should not accept keyboard input', () => {
      $('input[name="terra-date-day-date-input"]').setValue.bind($('input[name="terra-date-day-date-input"]'), '21');

      Terra.validates.element('read-only reject keyboard input');
    });

    it('should not open the date picker', () => {
      $('[class*="button"]').click();

      Terra.validates.element('clicked');
    });
  });

  it('should display Min Max', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-min-max');
    $('[class*="button"]').click();

    Terra.validates.element('min max', { selector: '[data-terra-date-picker-calendar]' });
  });

  describe('onFocus and onBlur', () => {
    it('puts focus on the input', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-focus-blur');
      $('input[name="terra-date-month-date-input-onblur"]').click();
      $('input[name="terra-date-month-date-input-onblur"]').setValue('05');
      $('input[name="terra-date-day-date-input-onblur"]').setValue('01');
      $('input[name="terra-date-year-date-input-onblur"]').setValue('2019');

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
      expect($('#date-obj').getText()).toEqual('{"Date":"01","Month":"05","Year":"2019"}');
    });
  });

  describe('On Change', () => {
    it('sets the date', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-on-change');
      $('input[name="terra-date-month-date-input-onchange"]').setValue('06');
      $('input[name="terra-date-day-date-input-onchange"]').setValue('01');
      $('input[name="terra-date-year-date-input-onchange"]').setValue('2017');
      Terra.hideInputCaret('input[name="terra-date-year-date-input-onchange"]');

      expect($('#iso').getText()).toEqual('2017-06-01');
      expect($('#input-value').getText()).toEqual('06/01/2017');
      expect($('#complete-date').getText()).toEqual('Yes');
      expect($('#valid-date').getText()).toEqual('Yes');
      Terra.validates.element('on change date set');
    });

    it('clears the date', () => {
      $('input[name="terra-date-day-date-input-onchange"]').click();
      browser.keys('Delete');
      $('input[name="terra-date-year-date-input-onchange"]').click();
      browser.keys('Delete');
      $('input[name="terra-date-month-date-input-onchange"]').click();
      browser.keys('Delete');
      Terra.hideInputCaret('input[name="terra-date-month-date-input-onchange"]');

      expect($('#iso').getText()).toEqual('');
      expect($('#input-value').getText()).toEqual('');
      expect($('#complete-date').getText()).toEqual('No');
      expect($('#valid-date').getText()).toEqual('Yes');
      Terra.validates.element('on change no date set');
    });
  });

  describe('On Change Raw', () => {
    it('sets an invalid date', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-on-change-raw');
      $('input[name="terra-date-month-date-input-onchangeraw"]').setValue('04');
      $('input[name="terra-date-day-date-input-onchangeraw"]').setValue('01');
      $('input[name="terra-date-year-date-input-onchangeraw"]').setValue('2019');
      Terra.hideInputCaret('input[name="terra-date-year-date-input-onchangeraw"]');

      expect($('#iso').getText()).toEqual('2019-04-01');
      expect($('#input-value').getText()).toEqual('04/01/2019');
      expect($('#complete-date').getText()).toEqual('Yes');
      expect($('#valid-date').getText()).toEqual('No');
      Terra.validates.element('on change raw date set to invalid 04/01/2019');
    });

    it('partially sets the date', () => {
      browser.refresh();
      $('input[name="terra-date-month-date-input-onchangeraw"]').waitForDisplayed();
      $('input[name="terra-date-month-date-input-onchangeraw"]').setValue('06');
      $('input[name="terra-date-day-date-input-onchangeraw"]').setValue('01');
      Terra.hideInputCaret('input[name="terra-date-year-date-input-onchangeraw"]');

      expect($('#iso').getText()).toEqual('');
      expect($('#input-value').getText()).toEqual('06/01/');
      expect($('#complete-date').getText()).toEqual('No');
      expect($('#valid-date').getText()).toEqual('No');
      Terra.validates.element('on change raw date set to 06-01');
    });

    it('finishes setting the date', () => {
      $('input[name="terra-date-year-date-input-onchangeraw"]').setValue('2017');

      expect($('#iso').getText()).toEqual('2017-06-01');
      expect($('#input-value').getText()).toEqual('06/01/2017');
      expect($('#complete-date').getText()).toEqual('Yes');
      expect($('#valid-date').getText()).toEqual('Yes');
      Terra.validates.element('on change raw date set to 06-01-2017');
    });

    it('sets date on select through datepicker', () => {
      // Enter date
      $('input[name="terra-date-month-date-input-onchangeraw"]').setValue('06');
      $('input[name="terra-date-day-date-input-onchangeraw"]').setValue('01');
      $('input[name="terra-date-year-date-input-onchangeraw"]').setValue('2017');
      Terra.hideInputCaret('input[name="terra-date-year-date-input-onchangeraw"]');

      // Select date through date picker
      $('[class*="button"]').click();
      $('div[class*="selected"]').click();

      Terra.validates.element('datepicker - on change raw date displayed');
    });
  });

  describe('On Click Outside', () => {
    it('dismisses the datepicker after clicking outside', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-default');
      $('[class*="button"]').click();
      $('[class*="PopupOverlay"]').click();

      Terra.validates.element('on click outside date picker closed');
    });
  });

  describe('On Select', () => {
    it('enters a date through input', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-on-select');
      $('input[name="terra-date-month-date-input-onselect"]').setValue('06');
      $('input[name="terra-date-day-date-input-onselect"]').setValue('01');
      $('input[name="terra-date-year-date-input-onselect"]').setValue('2017');
      Terra.hideInputCaret('input[name="terra-date-year-date-input-onselect"]');

      Terra.validates.element('on select date not displayed');
    });

    it('selects a date through date picker', () => {
      $('[class*="button"]').click();
      $('div[class*="selected"]').click();

      Terra.validates.element('on select date displayed');
    });
  });

  it('creates a hidden input with default name attr. and sets value in ISO8601 when a valid date is entered', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-start-date');
    expect($('[data-terra-date-input-hidden]').getAttribute('name')).toEqual('date-input');
    expect($('[data-terra-date-input-hidden]').getAttribute('value')).toEqual('2017-04-01');

    Terra.validates.element('hidden input start date');
  });

  it('should ignore invalid dates ', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-ignore-invalid-selected-dates');
    $('#root').moveTo(0, 0);

    Terra.validates.element('ignore invalid date');
  });

  describe('Key Limitations', () => {
    it('sets the date', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-default');
      $('input[name="terra-date-month-date-input"]').setValue('0');
      browser.keys('a1.b2/;3');
      Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

      Terra.validates.element('key limitations');
    });
  });

  describe('DatePickerField', () => {
    it('displays Valid DatePickerField', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-field');
      $('#root').moveTo(0, 0);

      Terra.validates.element('date picker field valid');
    });

    it('displays Invalid DatePickerField', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-field');
      $('#validity-toggle').click();
      Terra.validates.element('date picker field invalid');
      $('#validity-toggle').click();
    });

    it('displays Incomplete DatePickerField', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-field');
      $('#incomplete-toggle').click();
      Terra.validates.element('date picker field incomplete');
      $('#incomplete-toggle').click();
    });

    it('displays Invalid and Incomplete DatePickerField', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-field');
      $('#validity-toggle').click();
      $('#incomplete-toggle').click();
      Terra.validates.element('date picker field invalid and incomplete');
      $('#validity-toggle').click();
      $('#incomplete-toggle').click();
    });

    it('displays Disabled DatePickerField', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/disabled-date-picker-field');

      Terra.validates.element('date picker field disabled');
    });

    it('displays Multiple DatePickerField', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/multiple-date-picker-field');

      Terra.validates.element('date picker field multiple');
    });
  });

  describe('Controlled DatePicker', () => {
    it('Enters date value', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-controlled');
      $('input[name="terra-date-month-controlled-date-picker"]').setValue('03');
      $('input[name="terra-date-day-controlled-date-picker"]').setValue('07');
      $('input[name="terra-date-year-controlled-date-picker"]').setValue('2019');
      Terra.hideInputCaret('input[name="terra-date-year-controlled-date-picker"]');

      Terra.validates.element('controlled date picker date input manually updated');
    });

    it('Open the date picker', () => {
      $('[class*="button"]').click();

      Terra.validates.element('controlled date picker date picker updated', { selector: '[data-terra-date-picker-calendar]' });
    });

    it('Click button 1 to clear date', () => {
      $('[class*="PopupOverlay"]').click();
      $('#button1').click();

      Terra.validates.element('controlled date picker formatted date cleared');
    });

    it('Click button 2 to set formatted date', () => {
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
      browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-remount');
      $('[class*="button"]').click();
    });

    it('Selects a date from date picker', () => {
      browser.keys('ArrowDown');
      browser.keys('Enter');

      Terra.validates.element('remounts component date selected');
    });
  });

  describe('Initial Focus', () => {
    before(() => {
      browser.url('/#/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-default');
      $('input[name="terra-date-month-date-input"]').setValue('12');
      $('input[name="terra-date-day-date-input"]').setValue('18');
      $('input[name="terra-date-year-date-input"]').setValue('1994');
      Terra.hideInputCaret('input[name="terra-date-month-date-input"]');
      Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
      Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
    });

    it('Month input focused', () => {
      $('input[name="terra-date-month-date-input"]').click();

      Terra.validates.element('month input highlighted');
    });

    it('Month input cleared with single Delete key press and loses highlight', () => {
      browser.keys('Delete');

      Terra.validates.element('month input cleared completely and loses highlight');
    });

    it('Day input focused', () => {
      $('input[name="terra-date-day-date-input"]').click();

      Terra.validates.element('day input highlighted');
    });

    it('Day input cleared with single Delete key press and loses highlight', () => {
      browser.keys('Delete');

      Terra.validates.element('day input cleared completely and loses highlight');
    });

    it('Year input focused', () => {
      $('input[name="terra-date-year-date-input"]').click();

      Terra.validates.element('year input highlighted');
    });

    it('Year input cleared with single Delete key press and loses highlight', () => {
      browser.keys('Delete');

      Terra.validates.element('year input cleared completely and loses highlight');
    });
  });

  describe('Arrow, Delete and Backspace Navigation', () => {
    describe('Up Arrow', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-default');
      });

      it('sets month to next month on month input', () => {
        Terra.hideInputCaret('input[name="terra-date-month-date-input"]');
        $('input[name="terra-date-month-date-input"]').click();
        browser.keys('ArrowUp');

        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getMonth() + 1);
        expect($('input')).toHaveValue(tomorrow.toISOString().split('T')[0]);
      });

      it('sets Date to tomorrow if on day input', () => {
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        $('input[name="terra-date-day-date-input"]').click();
        browser.keys('ArrowUp');

        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        expect($('input')).toHaveValue(tomorrow.toISOString().split('T')[0]);
      });

      it('sets year to last year if on year input', () => {
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
        $('input[name="terra-date-year-date-input"]').click();
        browser.keys('ArrowUp');

        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getFullYear() + 1);
        expect($('input')).toHaveValue(tomorrow.toISOString().split('T')[0]);
      });
    });

    describe('Down Arrow', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-default');
      });

      it('sets month to last month on month input', () => {
        Terra.hideInputCaret('input[name="terra-date-month-date-input"]');
        $('input[name="terra-date-month-date-input"]').click();
        browser.keys('ArrowDown');

        const yesterday = new Date();
        yesterday.setDate(yesterday.getMonth() - 1);
        expect($('input')).toHaveValue(yesterday.toISOString().split('T')[0]);
      });

      it('sets Date to yesterday if on day input', () => {
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        $('input[name="terra-date-day-date-input"]').click();
        browser.keys('ArrowDown');

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        expect($('input')).toHaveValue(yesterday.toISOString().split('T')[0]);
      });

      it('sets year to last year if on year input', () => {
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
        $('input[name="terra-date-year-date-input"]').click();
        browser.keys('ArrowDown');

        const yesterday = new Date();
        yesterday.setDate(yesterday.getFullYear() - 1);
        expect($('input')).toHaveValue(yesterday.toISOString().split('T')[0]);
      });
    });

    describe('Right Arrow', () => {
      before(() => {
        browser.url('/#/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-default');
        Terra.hideInputCaret('input[name="terra-date-month-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
      });

      it('Focus on month input', () => {
        $('input[name="terra-date-month-date-input"]').click();

        Terra.validates.element('initial focus on month input');
      });

      it('Focus on day input', () => {
        browser.keys('ArrowRight');

        Terra.validates.element('right arrow focus on day input');
      });

      it('Focus on year input', () => {
        browser.keys('ArrowRight');

        Terra.validates.element('right arrow focus on year input');
      });
    });

    describe('Left Arrow', () => {
      it('Focus on day input', () => {
        browser.keys('ArrowLeft');

        Terra.validates.element('arrow left focus on day input');
      });

      it('Focus on month input', () => {
        browser.keys('ArrowLeft');

        Terra.validates.element('arrow left focus on month input');
      });
    });

    describe('Delete Key', () => {
      it('Focus on year input', () => {
        $('input[name="terra-date-year-date-input"]').click();

        Terra.validates.element('initial focus on year input');
      });

      it('Focus on day input', () => {
        browser.keys('Delete');

        Terra.validates.element('delete key focus on day input');
      });

      it('Focus on month input', () => {
        browser.keys('Delete');

        Terra.validates.element('delete key focus on month input');
      });
    });

    describe('Backspace Key', () => {
      it('Focus on year input', () => {
        $('input[name="terra-date-year-date-input"]').click();

        Terra.validates.element('initial focus on year input');
      });

      it('Focus on day input', () => {
        browser.keys('Backspace');

        Terra.validates.element('backspace key focus on day input');
      });

      it('Focus on month input', () => {
        browser.keys('Backspace');

        Terra.validates.element('backspace key focus on month input');
      });
    });
  });

  describe('Keyboard shortcuts', () => {
    describe('N', () => {
      describe('if blank', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-default');
        });

        it('sets Date to today on month input', () => {
          Terra.hideInputCaret('input[name="terra-date-month-date-input"]');
          $('input[name="terra-date-month-date-input"]').click();
          browser.keys('t');

          const today = new Date();
          expect($('input')).toHaveValue(today.toISOString().split('T')[0]);
        });

        it('sets Date to today on day input', () => {
          Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
          $('input[name="terra-date-day-date-input"]').click();
          browser.keys('t');

          const today = new Date();
          expect($('input')).toHaveValue(today.toISOString().split('T')[0]);
        });

        it('sets Date to today on year input', () => {
          Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
          $('input[name="terra-date-year-date-input"]').click();
          browser.keys('t');

          const today = new Date();
          expect($('input')).toHaveValue(today.toISOString().split('T')[0]);
        });
      });

      describe('if partially filled', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-default');
        });

        it('sets Date to today on month input', () => {
          Terra.hideInputCaret('input[name="terra-date-month-date-input"]');
          $('input[name="terra-date-month-date-input"]').click();
          browser.keys('06');
          $('input[name="terra-date-month-date-input"]').click();
          browser.keys('t');

          const today = new Date();
          expect($('input')).toHaveValue(today.toISOString().split('T')[0]);
        });

        it('sets Date to today on day input', () => {
          Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
          $('input[name="terra-date-day-date-input"]').click();
          browser.keys('20');
          $('input[name="terra-date-day-date-input"]').click();
          browser.keys('t');

          const today = new Date();
          expect($('input')).toHaveValue(today.toISOString().split('T')[0]);
        });

        it('sets Date to today on year input', () => {
          Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
          $('input[name="terra-date-year-date-input"]').click();
          browser.keys('2005');
          $('input[name="terra-date-year-date-input"]').click();
          browser.keys('t');

          const today = new Date();
          expect($('input')).toHaveValue(today.toISOString().split('T')[0]);
        });
      });

      describe('if a valid date', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-start-date');
        });

        it('sets Date to today on month input', () => {
          Terra.hideInputCaret('input[name="terra-date-month-date-input"]');
          $('input[name="terra-date-month-date-input"]').click();
          browser.keys('t');

          const today = new Date();
          expect($('input')).toHaveValue(today.toISOString().split('T')[0]);
        });

        it('sets Date to today on day input', () => {
          Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
          $('input[name="terra-date-day-date-input"]').click();
          browser.keys('t');

          const today = new Date();
          expect($('input')).toHaveValue(today.toISOString().split('T')[0]);
        });

        it('sets Date to today on year input', () => {
          Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
          $('input[name="terra-date-year-date-input"]').click();
          browser.keys('t');

          const today = new Date();
          expect($('input')).toHaveValue(today.toISOString().split('T')[0]);
        });
      });
    });

    describe('-', () => {
      describe('if blank', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-default');
        });

        it('sets month to last month on month input', () => {
          Terra.hideInputCaret('input[name="terra-date-month-date-input"]');
          $('input[name="terra-date-month-date-input"]').click();
          browser.keys('-');

          const yesterday = new Date();
          yesterday.setDate(yesterday.getMonth() - 1);
          expect($('input')).toHaveValue(yesterday.toISOString().split('T')[0]);
        });

        it('sets Date to yesterday if on day input', () => {
          Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
          $('input[name="terra-date-day-date-input"]').click();
          browser.keys('-');

          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          expect($('input')).toHaveValue(yesterday.toISOString().split('T')[0]);
        });

        it('sets year to last year if on year input', () => {
          Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
          $('input[name="terra-date-year-date-input"]').click();
          browser.keys('-');

          const yesterday = new Date();
          yesterday.setDate(yesterday.getFullYear() - 1);
          expect($('input')).toHaveValue(yesterday.toISOString().split('T')[0]);
        });
      });

      describe('if partially filled', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-default');
        });

        it('sets month to last month on month input', () => {
          Terra.hideInputCaret('input[name="terra-date-month-date-input"]');
          $('input[name="terra-date-month-date-input"]').click();
          browser.keys('06');
          $('input[name="terra-date-month-date-input"]').click();
          browser.keys('-');

          const yesterday = new Date();
          yesterday.setDate(yesterday.getMonth() - 1);
          expect($('input')).toHaveValue(yesterday.toISOString().split('T')[0]);
        });

        it('sets Date to yesterday if on day input', () => {
          Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
          $('input[name="terra-date-day-date-input"]').click();
          browser.keys('20');
          $('input[name="terra-date-day-date-input"]').click();
          browser.keys('-');

          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          expect($('input')).toHaveValue(yesterday.toISOString().split('T')[0]);
        });

        it('sets year to last year if on year input', () => {
          Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
          $('input[name="terra-date-year-date-input"]').click();
          browser.keys('2005');
          $('input[name="terra-date-year-date-input"]').click();
          browser.keys('-');

          const yesterday = new Date();
          yesterday.setDate(yesterday.getFullYear() - 1);
          expect($('input')).toHaveValue(yesterday.toISOString().split('T')[0]);
        });
      });

      describe('if a valid date', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-start-date');
        });

        it('sets Date to valid date minus 1 month if pressed in month', () => {
          Terra.hideInputCaret('input[name="terra-date-month-date-input"]');
          $('input[name="terra-date-month-date-input"]').click();
          browser.keys('-');

          expect($('input')).toHaveValue('2017-03-01');
        });

        it('sets Date to valid date minus 1 day if pressed in day', () => {
          Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
          $('input[name="terra-date-day-date-input"]').click();
          browser.keys('-');

          expect($('input')).toHaveValue('2017-03-31');
        });

        it('sets Date to valid date minus 1 year if pressed in year', () => {
          Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
          $('input[name="terra-date-year-date-input"]').click();
          browser.keys('-');

          expect($('input')).toHaveValue('2016-04-01');
        });
      });

      it('leaves date at minimum allowed date', () => {
        browser.url('/#/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-default');
        $('input[name="terra-date-year-date-input"]').click();
        browser.keys('1900');
        $('input[name="terra-date-month-date-input"]').click();
        browser.keys('01');
        $('input[name="terra-date-day-date-input"]').click();
        browser.keys('01');
        browser.keys('-');

        expect($('input')).toHaveValue('1900-01-01');
      });
    });

    describe('+', () => {
      describe('if blank', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-default');
        });

        it('sets month to next month on month input', () => {
          Terra.hideInputCaret('input[name="terra-date-month-date-input"]');
          $('input[name="terra-date-month-date-input"]').click();
          browser.keys('=');

          const tomorrow = new Date();
          tomorrow.setDate(tomorrow.getMonth() + 1);
          expect($('input')).toHaveValue(tomorrow.toISOString().split('T')[0]);
        });

        it('sets Date to tomorrow if on day input', () => {
          Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
          $('input[name="terra-date-day-date-input"]').click();
          browser.keys('=');

          const tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);
          expect($('input')).toHaveValue(tomorrow.toISOString().split('T')[0]);
        });

        it('sets year to last year if on year input', () => {
          Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
          $('input[name="terra-date-year-date-input"]').click();
          browser.keys('=');

          const tomorrow = new Date();
          tomorrow.setDate(tomorrow.getFullYear() + 1);
          expect($('input')).toHaveValue(tomorrow.toISOString().split('T')[0]);
        });
      });

      describe('if partially filled', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-default');
        });

        it('sets month to next month on month input', () => {
          Terra.hideInputCaret('input[name="terra-date-month-date-input"]');
          $('input[name="terra-date-month-date-input"]').click();
          browser.keys('06');
          $('input[name="terra-date-month-date-input"]').click();
          browser.keys('=');

          const tomorrow = new Date();
          tomorrow.setDate(tomorrow.getMonth() + 1);
          expect($('input')).toHaveValue(tomorrow.toISOString().split('T')[0]);
        });

        it('sets Date to tomorrow if on day input', () => {
          Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
          $('input[name="terra-date-day-date-input"]').click();
          browser.keys('20');
          $('input[name="terra-date-day-date-input"]').click();
          browser.keys('=');

          const tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);
          expect($('input')).toHaveValue(tomorrow.toISOString().split('T')[0]);
        });

        it('sets yesr to last year if on year input', () => {
          Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
          $('input[name="terra-date-year-date-input"]').click();
          browser.keys('2005');
          $('input[name="terra-date-year-date-input"]').click();
          browser.keys('=');

          const tomorrow = new Date();
          tomorrow.setDate(tomorrow.getFullYear() + 1);
          expect($('input')).toHaveValue(tomorrow.toISOString().split('T')[0]);
        });
      });

      describe('if a valid date', () => {
        beforeEach(() => {
          browser.url('/#/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-start-date');
        });

        it('sets Date to valid date plus 1 month if pressed in month', () => {
          Terra.hideInputCaret('input[name="terra-date-month-date-input"]');
          $('input[name="terra-date-month-date-input"]').click();
          browser.keys('=');

          expect($('input')).toHaveValue('2017-05-01');
        });

        it('sets Date to valid date plus 1 day if pressed in day', () => {
          Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
          $('input[name="terra-date-day-date-input"]').click();
          browser.keys('=');

          expect($('input')).toHaveValue('2017-04-02');
        });

        it('sets Date to valid date plus 1 year if pressed in year', () => {
          Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
          $('input[name="terra-date-year-date-input"]').click();
          browser.keys('=');

          expect($('input')).toHaveValue('2018-04-01');
        });
      });

      it('does not change date at maximum allowed date', () => {
        browser.url('/#/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-default');
        $('input[name="terra-date-year-date-input"]').click();
        browser.keys('2100');
        $('input[name="terra-date-month-date-input"]').click();
        browser.keys('12');
        $('input[name="terra-date-day-date-input"]').click();
        browser.keys('31');
        browser.keys('+');

        expect($('input[name="terra-date-year-date-input"]')).toHaveValue('2100');
        expect($('input[name="terra-date-month-date-input"]')).toHaveValue('12');
        expect($('input[name="terra-date-day-date-input"]')).toHaveValue('31');
        expect($('input')).toHaveValue('2100-12-31');
      });
    });
  });

  describe('Auto Prepend and Restrictions', () => {
    describe('Month Input', () => {
      before(() => {
        browser.url('/#/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-default');
      });

      it('Auto prepend 0 for digits greater than 1', () => {
        $('input[name="terra-date-month-date-input"]').click();
        browser.keys('3');
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');

        Terra.validates.element('month input auto prepend 0');
      });

      it('Reject values greater than 12', () => {
        $('input[name="terra-date-month-date-input"]').click();
        browser.keys('Delete');
        browser.keys('13');
        Terra.hideInputCaret('input[name="terra-date-month-date-input"]');

        Terra.validates.element('month input rejected digit 3');
      });
    });

    describe('Day Input', () => {
      before(() => {
        browser.url('/#/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-default');
      });

      it('Auto prepend 0 for digits greater than 3', () => {
        $('input[name="terra-date-day-date-input"]').click();
        browser.keys('5');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        Terra.validates.element('day input auto prepend 0');
      });

      it('Reject values greater than 31', () => {
        $('input[name="terra-date-day-date-input"]').click();
        browser.keys('Delete');
        browser.keys('32');
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');

        Terra.validates.element('day input rejected digit 2');
      });
    });

    describe('Year Input', () => {
      before(() => {
        browser.url('/#/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-default');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
      });

      it('Auto prepend 200 for single digit', () => {
        $('input[name="terra-date-year-date-input"]').click();
        browser.keys('3');
        browser.keys('Tab');

        Terra.validates.element('year input auto prepend 200');
      });

      it('Auto prepend 20 for two digits', () => {
        $('input[name="terra-date-year-date-input"]').click();
        browser.keys('Delete');
        browser.keys('31');
        browser.keys('Tab');

        Terra.validates.element('year input auto prepend 20');
      });

      it('Auto append 0 for three digits in the range 190 to 210', () => {
        $('input[name="terra-date-year-date-input"]').click();
        browser.keys('Delete');
        browser.keys('204');
        browser.keys('Tab');

        Terra.validates.element('year input auto append 0');
      });

      it('Reject values greater than 2100', () => {
        $('input[name="terra-date-year-date-input"]').click();
        browser.keys('Delete');
        browser.keys('2101');

        Terra.validates.element('year input rejected digit 1');
      });

      it('Reject values less than 1900', () => {
        browser.keys('Tab');
        $('input[name="terra-date-year-date-input"]').click();
        browser.keys('Delete');
        browser.keys('1899');

        Terra.validates.element('year input rejected digits 99');
      });
    });
  });

  describe('Beyond Min Max', () => {
    it('Opens the date picker', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-beyond-min-max');
      $('[class*="button"]').click();

      Terra.validates.element('uses default maxDate', { selector: '[data-terra-date-picker-calendar]' });
    });

    it('Select a day', () => {
      $('[class*="react-datepicker-day--selected"]').click();

      Terra.validates.element('beyond min max date selected');
    });

    it('Enters date beyond max', () => {
      $('input[name="terra-date-month-date-input"]').setValue('11');
      $('input[name="terra-date-day-date-input"]').setValue('11');
      $('input[name="terra-date-year-date-input"]').setValue('2111');
      Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

      Terra.validates.element('beyond max date entered');
    });

    it('Enters min date', () => {
      browser.refresh();
      $('input[name="terra-date-month-date-input"]').setValue('02');
      $('input[name="terra-date-day-date-input"]').setValue('01');
      $('input[name="terra-date-year-date-input"]').setValue('1900');
      $('[class*="button"]').click();
      $('[aria-label="Previous month"]').click();
      browser.keys('Escape');
      $('input[name="terra-date-month-date-input"]').setValue('01');
      $('input[name="terra-date-day-date-input"]').setValue('01');
      $('input[name="terra-date-year-date-input"]').setValue('1900');
      Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

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
      $('input[name="terra-date-month-date-input"]').setValue('10');
      $('input[name="terra-date-day-date-input"]').setValue('20');
      $('input[name="terra-date-year-date-input"]').setValue('1899');

      Terra.validates.element('beyond min date entered');
    });
  });
});

Terra.describeViewports('Date Picker', ['tiny', 'small'], () => {
  describe('Disable date picker - Disable date picker in mobile view', () => {
    it('should disable the date picker', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-calendar-disable');
      $('#button1').click();
      expect($('#button1').isFocused()).toEqual(true);
      $('[data-terra-open-calendar-button]').click();
      Terra.validates.element('disabled date picker');
    });
  });
});

Terra.describeViewports('Date Picker', ['tiny', 'small', 'medium'], () => {
  describe('Default', () => {
    it('sets default label to calendar button when no date is entered', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/date-picker/date-picker-default');

      expect($('[class*="button"]').getAttribute('aria-label')).toEqual(' Open Calendar');
    });

    it('sets the valid date to calendar button label ', () => {
      $('input[name="terra-date-month-date-input"]').setValue('01');
      $('input[name="terra-date-day-date-input"]').setValue('01');
      $('input[name="terra-date-year-date-input"]').setValue('2017');
      expect($('[class*="button"]').getAttribute('aria-label')).toEqual('Sunday, January 1, 2017 selected. Open Calendar');
    });
  });
});
