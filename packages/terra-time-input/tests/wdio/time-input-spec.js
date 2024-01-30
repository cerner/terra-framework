const validateElement = (testName) => Terra.validates.element(testName, { selector: '#timeInput' });
const validateRoot = (testName) => Terra.validates.element(testName);

Terra.describeViewports('Time Input', ['medium'], () => {
  it('works with a label', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/accessibility');
    validateElement('default with a label');
  });

  it('displays default with no time provided', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default');
    validateElement('default no time');
  });

  it('displays default with time provided', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default-time');
    validateElement('default with time');
  });

  it('displays second with no time provided', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/second');
    validateElement('seconds no time');
  });

  it('displays second with time provided', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/second-time');
    validateElement('second with time');
  });

  it('displays invalid time provided', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/invalid-provided-time');
    validateElement('invalid time');
  });

  it('displays invalid time input', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/invalid-time');
    validateElement('invalid input');
  });

  it('displays invalid mobile time input', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/mobile-invalid');
    validateElement('invalid mobile input');
  });

  it('displays incomplete time input', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/incomplete-time');
    validateElement('incomplete input');
  });

  it('displays incomplete mobile time input', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/mobile-incomplete');
    validateElement('incomplete mobile');
  });

  it('displays invalid and incomplete time input', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/invalid-incomplete-time');
    validateElement('invalid and incomplete');
  });

  it('displays invalid and incomplete mobile time input', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/mobile-invalid-incomplete');
    validateElement('invalid and incomplete mobile');
  });

  it('displays focus hour styles', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default-time');
    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');
    validateElement('focus hour styles');
  });

  it('displays focus time component styles', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/incomplete-time');
    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');
    validateElement('focus time component styles');
  });

  it('displays focus minute styles', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default-time');
    browser.refresh();
    $('#timeInput input[name="terra-time-minute-time-input"]').click();
    Terra.hideInputCaret('#timeInput input[name=\'terra-time-minute-time-input\']');
    validateElement('focus minute styles');
  });

  it('displays focus second styles', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/second-time');
    browser.refresh();
    $('#timeInput input[name="terra-time-second-time-input"]').click();
    Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

    validateElement('focus second styles');
  });
});

Terra.describeViewports('Time input onChange operations', ['medium'], () => {
  it('triggers Time Input OnChange', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/on-change');
    Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('123456');
    validateRoot('trigger onChange');
  });

  it('prepends 0 on single digit hour', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('2');
    $('#timeInput input[name="terra-time-minute-time-input"]').click();
    validateRoot('prepend 0 to single digit');
  });

  it('prepends 0 on hour input of 3 or more', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('3');
    validateRoot('prepend 0 to hour more than 3');
  });

  it('displays time input does not prepend 0 on hour input less than 3', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('2');
    validateRoot('does not prepend 0 to hour less than 3');
  });

  it('displays time input does not accept hour input greater than 23', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('24');
    validateRoot('does not accept hour more than 23');
  });

  it('prepends 0 on single digit minute', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-minute-time-input"]').click();
    browser.keys('2');
    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    validateRoot('prepends 0 on single digit minute');
  });

  it('prepends 0 on minute input of 6 or more', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

    $('#timeInput input[name="terra-time-minute-time-input"]').click();
    browser.keys('6');
    validateRoot('prepends 0 on minute input of 6 or more');
  });

  it('does not prepend 0 on minute input less than 6', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

    $('#timeInput input[name="terra-time-minute-time-input"]').click();
    browser.keys('5');
    validateRoot('does not prepend 0 to minute');
  });

  it('does not accept minute input greater than 59', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

    $('#timeInput input[name="terra-time-minute-time-input"]').click();
    browser.keys('66');
    validateRoot('does not accept minute input greater than 59');
  });

  it('Pressing DELETE in minute with no value focuses to hour', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');
    Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

    $('#timeInput input[name="terra-time-minute-time-input"]').click();
    browser.keys(['Delete']);
    validateRoot('delete focuses hour');
  });

  it('prepends 0 on single digit second', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-second-time-input"]').click();
    browser.keys('2');
    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    validateRoot('prepends 0 on single digit second');
  });

  it('prepends 0 on second input of 6 or more', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

    $('#timeInput input[name="terra-time-second-time-input"]').click();
    browser.keys('6');
    validateRoot('prepends 0 on second input of 6 or more');
  });

  it('does not prepend 0 on second input less than 6', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

    $('#timeInput input[name="terra-time-second-time-input"]').click();
    browser.keys('5');
    validateRoot('does not prepend 0 on second input less than 6');
  });

  it('does not accept second input greater than 59', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

    $('#timeInput input[name="terra-time-second-time-input"]').click();
    browser.keys('66');
    validateRoot('does not accept second input greater than 59');
  });

  it('Pressing DELETE in second with no value focuses to minute', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

    $('#timeInput input[name="terra-time-second-time-input"]').click();
    browser.keys(['Delete']);

    validateRoot('delete focuses minute');
  });

  it('Triggers an onChange for onBlur on the minute input', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('747');
    validateRoot('trigger onChange for onBlur');
  });

  it('Does not trigger onChange for an hour with just one digit', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('1223');
    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys(['ArrowLeft', 'ArrowRight', 'Delete']);
    validateRoot('onChange not triggered for hour with one digit');
  });

  it('Does not trigger onChange for a minute with just one digit', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('1223');
    $('#timeInput input[name="terra-time-minute-time-input"]').click();
    browser.keys(['ArrowLeft', 'ArrowRight', 'Delete']);
    validateRoot('onChange not triggered for minute with one digit');
  });
});

describe('Time Input onBlur operations', () => {
  describe('Time Input onBlur', () => {
    it('clicks the hour input and onBlur is not triggered', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/focus-blur');
      $('#timeInput input[name="terra-time-hour-time-input"]').click();
      expect($('#blur-count').getText()).toEqual('0');
      expect($('#focus-count').getText()).toEqual('1');
    });

    it('tabs to the minute input and onBlur is not triggered', () => {
      browser.keys('ArrowRight');
      expect($('#blur-count').getText()).toEqual('0');
      expect($('#focus-count').getText()).toEqual('1');
    });

    it('tabs to the meridiem and onBlur is not triggered', () => {
      browser.keys('Tab');
      expect($('#blur-count').getText()).toEqual('0');
      expect($('#focus-count').getText()).toEqual('1');
    });

    it('tabs out of the component and onBlur is triggered', () => {
      browser.keys('ArrowRight'); // Move focus to "p.m."
      browser.keys('Tab'); // Tab out of the component.
      expect($('#blur-count').getText()).toEqual('1');
      expect($('#focus-count').getText()).toEqual('1');
    });
  });
});

describe('Time Input shortcut key operations', () => {
  it('should set time to current time minus one hour if blank using DOWN_ARROW', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('ArrowDown');
    const currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() - 1);
    const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
    expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
    expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue(timevalue[1]);
  });

  it('should set time to current time minus one hour if partially filled using DOWN_ARROW', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('12');
    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('ArrowDown');
    const currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() - 1);
    const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
    expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
    expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue(timevalue[1]);
  });

  it('should subtract 1 hour if filled using DOWN_ARROW', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default-time');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('ArrowDown');
    expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue('11');
    expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue('59');
  });

  it('should set time to current time plus one hour if blank using UP_ARROW', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('ArrowUp');
    const currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() + 1);
    const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
    expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
    expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue(timevalue[1]);
  });

  it('should set time to current time plus one hour if partially filled using UP_ARROW', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('12');
    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('ArrowUp');
    const currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() + 1);
    const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
    expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
    expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue(timevalue[1]);
  });

  describe('pressing N', () => {
    describe('in the hour input', () => {
      it('should set time to current if blank', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('n');
        const currentDate = new Date();
        const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue(timevalue[1]);
      });

      it('should set time to current if partially filled', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('12');
        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('n');
        const currentDate = new Date();
        const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
        const minuteValue = Number($('#timeInput input[name="terra-time-minute-time-input"]').getValue());
        const minuteTimeValue = Number(timevalue[1]);
        const minutesInRange = (minuteTimeValue === minuteValue + 1 || minuteTimeValue === minuteValue);
        expect(minutesInRange).toBe(true);
      });

      it('should set time to current if filled', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default-time');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('n');
        const currentDate = new Date();
        const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
        const minuteValue = Number($('#timeInput input[name="terra-time-minute-time-input"]').getValue());
        const minuteTimeValue = Number(timevalue[1]);
        const minutesInRange = (minuteTimeValue === minuteValue + 1 || minuteTimeValue === minuteValue);
        expect(minutesInRange).toBe(true);
      });
    });

    describe('in the minute input', () => {
      it('should set time to current if blank', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('n');
        const currentDate = new Date();
        const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
        const minuteValue = Number($('#timeInput input[name="terra-time-minute-time-input"]').getValue());
        const minuteTimeValue = Number(timevalue[1]);
        const minutesInRange = (minuteTimeValue === minuteValue + 1 || minuteTimeValue === minuteValue);
        expect(minutesInRange).toBe(true);
      });

      it('should set time to current if partially filled', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('12');
        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('n');
        const currentDate = new Date();
        const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
        const minuteValue = Number($('#timeInput input[name="terra-time-minute-time-input"]').getValue());
        const minuteTimeValue = Number(timevalue[1]);
        const minutesInRange = (minuteTimeValue === minuteValue + 1 || minuteTimeValue === minuteValue);
        expect(minutesInRange).toBe(true);
      });

      it('should set time to current if filled', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default-time');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('n');
        const currentDate = new Date();
        const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
        const minuteValue = Number($('#timeInput input[name="terra-time-minute-time-input"]').getValue());
        const minuteTimeValue = Number(timevalue[1]);
        const minutesInRange = (minuteTimeValue === minuteValue + 1 || minuteTimeValue === minuteValue);
        expect(minutesInRange).toBe(true);
      });
    });

    describe('in the second input', () => {
      it('should set time to current if blank', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/second');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

        $('#timeInput input[name="terra-time-second-time-input"]').click();
        browser.keys('n');
        const currentDate = new Date();
        const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue(timevalue[1]);
        const secondsValue = Number($('#timeInput input[name="terra-time-minute-time-input"]').getValue());
        const secondsTimeValue = Number(timevalue[1]);
        const secondsInRange = (secondsTimeValue === secondsValue + 1 || secondsTimeValue === secondsValue);
        expect(secondsInRange).toBe(true);
      });

      it('should set time to current if partially filled', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/second');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

        $('#timeInput input[name="terra-time-second-time-input"]').click();
        browser.keys('12');
        $('#timeInput input[name="terra-time-second-time-input"]').click();
        browser.keys('n');
        const currentDate = new Date();
        const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue(timevalue[1]);
        const secondsValue = Number($('#timeInput input[name="terra-time-minute-time-input"]').getValue());
        const secondsTimeValue = Number(timevalue[1]);
        const secondsInRange = (secondsTimeValue === secondsValue + 1 || secondsTimeValue === secondsValue);
        expect(secondsInRange).toBe(true);
      });

      it('should set time to current if filled', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/second-time');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

        $('#timeInput input[name="terra-time-second-time-input"]').click();
        browser.keys('n');
        const currentDate = new Date();
        const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue(timevalue[1]);
        const secondsValue = Number($('#timeInput input[name="terra-time-minute-time-input"]').getValue());
        const secondsTimeValue = Number(timevalue[1]);
        const secondsInRange = (secondsTimeValue === secondsValue + 1 || secondsTimeValue === secondsValue);
        expect(secondsInRange).toBe(true);
      });
    });
  });

  describe('pressing -', () => {
    describe('in the hour input', () => {
      it('should set time to current time minus one minute if blank', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('-');
        const currentDate = new Date();
        currentDate.setMinutes(currentDate.getMinutes() - 1);
        const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue(timevalue[1]);
      });

      it('should set time to current time minus one minute if partially filled', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('12');
        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('-');
        const currentDate = new Date();
        currentDate.setMinutes(currentDate.getMinutes() - 1);
        const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue(timevalue[1]);
      });

      it('should subtract 1 minute if filled', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default-time');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('-');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue('11');
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue('59');
      });
    });

    describe('in the minute input', () => {
      it('should set time to current time minus one minute if blank', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('-');
        const currentDate = new Date();
        currentDate.setMinutes(currentDate.getMinutes() - 1);
        const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue(timevalue[1]);
        const minuteValue = Number($('#timeInput input[name="terra-time-minute-time-input"]').getValue());
        const minuteTimeValue = Number(timevalue[1]);
        const minuteInRange = (minuteValue === minuteTimeValue - 1 || minuteValue === minuteTimeValue);
        expect(minuteInRange).toBe(true);
      });

      it('should set time to current time minus one minute if partially filled', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('12');
        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('-');
        const currentDate = new Date();
        currentDate.setMinutes(currentDate.getMinutes() - 1);
        const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue(timevalue[1]);
      });

      it('should roll over the hour if minute is at 00', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('12');
        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('00');
        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('-');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue('11');
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue('59');
      });

      it('should roll over to 23 if hour and minute is at 00:00', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('00');
        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('00');
        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('-');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue('23');
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue('59');
      });

      it('should subtract 1 minute if filled', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default-time');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('-');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue('11');
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue('59');
      });
    });

    describe('in the second input', () => {
      it('should set time to current time minus one minute if blank', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/second');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

        $('#timeInput input[name="terra-time-second-time-input"]').click();
        browser.keys('-');
        const currentDate = new Date();
        currentDate.setMinutes(currentDate.getMinutes() - 1);
        const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue(timevalue[1]);
      });

      it('should set time to current time minus one minute if partially filled', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/second');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

        $('#timeInput input[name="terra-time-second-time-input"]').click();
        browser.keys('12');
        $('#timeInput input[name="terra-time-second-time-input"]').click();
        browser.keys('-');
        const currentDate = new Date();
        currentDate.setMinutes(currentDate.getMinutes() - 1);
        const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue(timevalue[1]);
      });

      it('should subtract 1 minute if filled', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/second-time');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

        $('#timeInput input[name="terra-time-second-time-input"]').click();
        browser.keys('-');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue('12');
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue('11');
        expect($('#timeInput input[name="terra-time-second-time-input"]')).toHaveValue('12');
      });
    });
  });

  describe('pressing +', () => {
    describe('in the hour input', () => {
      it('should set time to current time plus one hour if blank', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('+');
        const currentDate = new Date();
        currentDate.setMinutes(currentDate.getMinutes() + 1);
        const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue(timevalue[1]);
      });

      it('should set time to current time plus one minute if partially filled', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('12');
        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('+');
        const currentDate = new Date();
        currentDate.setMinutes(currentDate.getMinutes() + 1);
        const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue(timevalue[1]);
      });

      it('should add 1 minute if filled', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default-time');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('+');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue('12');
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue('01');
      });
    });

    describe('in the minute input', () => {
      it('should set time to current time plus one minute if blank', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('+');
        const currentDate = new Date();
        currentDate.setMinutes(currentDate.getMinutes() + 1);
        const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue(timevalue[1]);
        const minuteValue = Number($('#timeInput input[name="terra-time-minute-time-input"]').getValue());
        const minuteTimeValue = Number(timevalue[1]);
        const minuteInRange = (minuteValue === minuteTimeValue + 1 || minuteValue === minuteTimeValue);
        expect(minuteInRange).toBe(true);
      });

      it('should set time to current time plus one minute if partially filled', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('12');
        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('+');
        const currentDate = new Date();
        currentDate.setMinutes(currentDate.getMinutes() + 1);
        const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue(timevalue[1]);
      });

      it('should roll over the hour if minute is at 59', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('11');
        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('59');
        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('+');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue('12');
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue('00');
      });

      it('should roll over the hour to 00 if hour and minute is at 23:59', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

        $('#timeInput input[name="terra-time-hour-time-input"]').click();
        browser.keys('23');
        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('59');
        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('+');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue('00');
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue('00');
      });

      it('should add 1 minute if filled', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/default-time');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

        $('#timeInput input[name="terra-time-minute-time-input"]').click();
        browser.keys('+');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue('12');
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue('01');
      });
    });

    describe('in the second input', () => {
      it('should set time to current time plus one minute if blank', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/second');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

        $('#timeInput input[name="terra-time-second-time-input"]').click();
        browser.keys('+');
        const currentDate = new Date();
        currentDate.setMinutes(currentDate.getMinutes() + 1);
        const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue(timevalue[1]);
        const secondsValue = Number($('#timeInput input[name="terra-time-minute-time-input"]').getValue());
        const secondsTimeValue = Number(timevalue[1]);
        const secondsInRange = (secondsTimeValue === secondsValue + 1 || secondsTimeValue === secondsValue);
        expect(secondsInRange).toBe(true);
      });

      it('should set time to current time plus one minute if partially filled', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/second');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

        $('#timeInput input[name="terra-time-second-time-input"]').click();
        browser.keys('12');
        $('#timeInput input[name="terra-time-second-time-input"]').click();
        browser.keys('+');
        const currentDate = new Date();
        currentDate.setMinutes(currentDate.getMinutes() + 1);
        const timevalue = currentDate.toISOString().split('T')[1].split('.')[0].split(':');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue(timevalue[0]);
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue(timevalue[1]);
        const secondsValue = Number($('#timeInput input[name="terra-time-minute-time-input"]').getValue());
        const secondsTimeValue = Number(timevalue[1]);
        const secondsInRange = (secondsTimeValue === secondsValue + 1 || secondsTimeValue === secondsValue);
        expect(secondsInRange).toBe(true);
      });

      it('should add 1 minute if filled', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/time-input/time-input/second-time');
        browser.refresh();
        Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

        $('#timeInput input[name="terra-time-second-time-input"]').click();
        browser.keys('+');
        expect($('#timeInput input[name="terra-time-hour-time-input"]')).toHaveValue('12');
        expect($('#timeInput input[name="terra-time-minute-time-input"]')).toHaveValue('13');
        expect($('#timeInput input[name="terra-time-second-time-input"]')).toHaveValue('12');
      });
    });
  });
});
