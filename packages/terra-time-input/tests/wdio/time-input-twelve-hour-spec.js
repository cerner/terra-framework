const validateElement = (testName) => Terra.validates.element(testName, { selector: '#timeInput' });
const validateRoot = (testName) => Terra.validates.element(testName);

Terra.describeViewports('Time Input Twelve Hour', ['medium'], () => {
  it('displays twelve hour default with no time provided', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/default');
    validateElement('no time');
  });

  it('displays twelve hour default with an evening time filled', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/filled-evening');
    validateElement('evening time');
  });

  it('displays twelve hour default with a morning time filled', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/filled-morning');
    validateElement('morning time');
  });

  it('displays twelve Hour meridiem - Sets hour to 12 without meridiem change for hour input 00', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('00');
    validateRoot('set hour to 12 without meridiem');
  });

  it('displays twelve hour meridiem - Up Arrow on hour does not change meridiem', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys(['ArrowUp']);
    validateRoot('up arrow does not change meridiem');
  });

  it('displays twelve hour - Changes time to 01 when up is pressed on hour of 12', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('12');
    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys(['ArrowUp']);
    validateRoot('up arrow changes time to 01');
  });

  it('displays twelve hour - Changes time to 12 when down is pressed on hour of 01', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('01');
    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys(['ArrowDown']);

    validateRoot('down arrow changes time to 12');
  });

  it('displays twelve hour meridiem - Switched when up is press on hour of 11', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('11');
    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys(['ArrowUp']);

    validateRoot('switch meridiem - up arrow');
  });

  it('displays twelve hour meridiem - Switched when down is press on hour of 12', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('12');
    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys(['ArrowDown']);
    validateRoot('switch meridiem - down arrow');
  });

  it('displays twelve hour - Sets time to 12 when hour is 0 and onBlur is called', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('0');
    $('#timeInput input[name="terra-time-minute-time-input"]').click();
    validateRoot('change hour from 0 to 12 onBlur');
  });

  it('displays twelve hour Default with second and no time provided', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/second');
    validateElement('with second - no time');
  });

  it('displays twelve hour - Invalid time input', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/invalid');

    validateElement('invalid input');
  });

  it('displays twelve hour - Incomplete time input', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/incomplete');
    validateElement('incomplete input');
  });

  it('displays twelve hour - Invalid incomplete time input', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/invalid-incomplete');
    validateElement('invalid and incomplete');
  });

  it('displays twelve hour - Invalid meridiem', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/invalid-meridiem');
    validateElement('invalid meridiem');
  });

  describe('pressing -', () => {
    it('should roll over to 11 AM if hour and minute is at 12:00 PM', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/filled-evening');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

      $('#timeInput input[name="terra-time-hour-time-input"]').click();
      browser.keys('12');
      browser.keys('00');
      $('#timeInput input[name="terra-time-minute-time-input"]').click();
      browser.keys('-');
      expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue('11');
      expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue('59');
      validateElement('- causes rollover to morning');
    });

    it('should roll over to 11 PM if hour and minute is at 12:00 AM', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/filled-morning');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

      $('#timeInput input[name="terra-time-hour-time-input"]').click();
      browser.keys('12');
      browser.keys('00');
      $('#timeInput input[name="terra-time-minute-time-input"]').click();
      browser.keys('-');
      expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue('11');
      expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue('59');
      validateElement('- causes rollover to evening');
    });
  });

  describe('pressing +', () => {
    it('should roll over to 12 AM if hour and minute is at 11:59 PM', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/filled-evening');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

      $('#timeInput input[name="terra-time-hour-time-input"]').click();
      browser.keys('11');
      browser.keys('59');
      $('#timeInput input[name="terra-time-minute-time-input"]').click();
      browser.keys('+');
      expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue('12');
      expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue('00');
      validateElement('+ causes rollover to morning');
    });

    it('should roll over to 12 PM if hour and minute is at 11:59 AM', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/filled-morning');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

      $('#timeInput input[name="terra-time-hour-time-input"]').click();
      browser.keys('11');
      browser.keys('59');
      $('#timeInput input[name="terra-time-minute-time-input"]').click();
      browser.keys('+');
      expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue('12');
      expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue('00');
      validateElement('+ causes rollover to evening');
    });
  });

  describe('pressing A', () => {
    describe('in the hour input', () => {
      it('should set merdiem to antemeridiem if it was postmerdiem', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/filled-evening');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('a');
        validateElement('A in hour input evening');
      });

      it('should not change if it was antemeridiem', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/filled-morning');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('a');
        validateElement('A in hour input morning');
      });

      it('should set time to midnight if blank', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/default');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('a');
        validateRoot('A in hour input empty');
      });

      it('should set time to midnight if partially filled', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/default');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('12');
        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('a');
        validateRoot('A in hour input partial');
      });
    });

    describe('in the minute input', () => {
      it('should set merdiem to antemeridiem if it was postmerdiem', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/filled-evening');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('a');
        validateElement('A in minute input evening');
      });

      it('should not change if it was antemeridiem', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/filled-morning');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('a');
        validateElement('A in minute input morning');
      });

      it('should set time to midnight if blank', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/default');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('a');
        validateRoot('A in minute input empty');
      });

      it('should set time to midnight if partially filled', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/default');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('12');
        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('a');
        validateRoot('A in minute input partial');
      });
    });

    describe('in the second input', () => {
      it('should set merdiem to antemeridiem if it was postmerdiem', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/filled-second-evening');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

        $('#timeInput input[name="terra-time-second-time-input"]').click();
        browser.keys('a');
        validateRoot('A in second input evening');
      });

      it('should not change if it was antemeridiem', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/filled-second-morning');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

        $('#timeInput input[name="terra-time-second-time-input"]').click();
        browser.keys('a');
        validateRoot('A in second input morning');
      });

      it('should set time to midnight if blank', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/default-second');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

        $('#timeInput input[name="terra-time-second-time-input"]').click();
        browser.keys('a');
        validateRoot('A in second input empty');
      });

      it('should set time to midnight if partially filled', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/default-second');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

        $('#timeInput input[name="terra-time-second-time-input"]').click();
        browser.keys('12');
        $('#timeInput input[name="terra-time-second-time-input"]').click();
        browser.keys('a');
        validateRoot('A in second input partial');
      });
    });
  });

  describe('pressing P', () => {
    describe('in the hour input', () => {
      it('should set merdiem to postmerdiem if it was antemeridiem', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/filled-morning');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('p');
        validateElement('P in hour input morning');
      });

      it('should not change if it was postmerdiem', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/filled-evening');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('p');
        validateElement('P in hour input evening');
      });

      it('should set time to noon if blank', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/default');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('p');
        validateRoot('P in hour input empty');
      });

      it('should set time to noon if partially filled', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/default');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('12');
        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('p');
        validateRoot('P in hour input partial');
      });
    });

    describe('in the minute input', () => {
      it('should set merdiem to postmerdiem if it was antemeridiem', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/filled-morning');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('p');
        validateElement('P in minute input morning');
      });

      it('should not change if it was postmerdiem', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/filled-evening');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('p');
        validateElement('P in minute input evening');
      });

      it('should set time to noon if blank', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/default');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('p');
        validateRoot('P in minute input empty');
      });

      it('should set time to noon if partially filled', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/default');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('12');
        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('p');
        validateRoot('P in minute input partial');
      });
    });

    describe('in the second input', () => {
      it('should set merdiem to postmerdiem if it was antemeridiem', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/filled-second-morning');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

        $('#timeInput input[name="terra-time-second-time-input"]').click();
        browser.keys('p');
        validateRoot('P in second input morning');
      });

      it('should not change if it was postmerdiem', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/filled-second-evening');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

        $('#timeInput input[name="terra-time-second-time-input"]').click();
        browser.keys('p');
        validateRoot('P in second input evening');
      });

      it('should set time to noon if blank', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/default-second');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

        $('#timeInput input[name="terra-time-second-time-input"]').click();
        browser.keys('p');
        validateRoot('P in second input empty');
      });

      it('should set time to noon if partially filled', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/twelve-hour/default-second');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

        $('#timeInput input[name="terra-time-second-time-input"]').click();
        browser.keys('12');
        $('#timeInput input[name="terra-time-second-time-input"]').click();
        browser.keys('p');
        validateRoot('P in second input partial');
      });
    });
  });
});
