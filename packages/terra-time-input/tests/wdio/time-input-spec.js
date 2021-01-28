Terra.describeViewports('Time Input', ['medium'], () => {
  it('displays default with no time provided', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/default');
    Terra.validates.element('default no time');
  });

  it('displays default with time provided', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/default-time');
    Terra.validates.element('default with time');
  });

  it('displays second with no time provided', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/second');
    Terra.validates.element('seconds no time');
  });

  it('displays second with time provided', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/second-time');
    Terra.validates.element('second with time');
  });

  it('displays invalid time provided', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/invalid-provided-time');
    Terra.validates.element('invalid time');
  });

  it('displays invalid time input', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/invalid-time');
    Terra.validates.element('invalid input');
  });

  it('displays invalid mobile time input', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/mobile-invalid');
    Terra.validates.element('invalid mobile input');
  });

  it('displays incomplete time input', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/incomplete-time');
    Terra.validates.element('incomplete input');
  });

  it('displays incomplete mobile time input', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/mobile-incomplete');
    Terra.validates.element('incomplete mobile');
  });

  it('displays invalid and incomplete time input', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/invalid-incomplete-time');
    Terra.validates.element('invalid and incomplete');
  });

  it('displays invalid and incomplete mobile time input', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/mobile-invalid-incomplete');
    Terra.validates.element('invalid and incomplete mobile');
  });

  it('displays focus hour styles', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/default-time');
    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');
    Terra.validates.element('focus hour styles');
  });

  it('displays focus time component styles', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/incomplete-time');
    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');
    Terra.validates.element('focus time component styles');
  });

  it('displays focus minute styles', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/default-time');
    browser.refresh();
    $('#timeInput input[name="terra-time-minute-time-input"]').click();
    Terra.hideInputCaret('#timeInput input[name=\'terra-time-minute-time-input\']');
    Terra.validates.element('focus minute styles');
  });

  it('displays focus second styles', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/second-time');
    browser.refresh();
    $('#timeInput input[name="terra-time-second-time-input"]').click();
    Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

    Terra.validates.element('focus second styles');
  });
});

Terra.describeViewports('Time input onChange operations', ['medium'], () => {
  it('triggers Time Input OnChange', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/on-change');
    Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('123456');
    Terra.validates.element('trigger onChange');
  });

  it('prepends 0 on single digit hour', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('2');
    $('#timeInput input[name="terra-time-minute-time-input"]').click();
    Terra.validates.element('prepend 0 to single digit');
  });

  it('prepends 0 on hour input of 3 or more', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('3');
    Terra.validates.element('prepend 0 to hour more than 3');
  });

  it('displays time input does not prepend 0 on hour input less than 3', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('2');
    Terra.validates.element('does not prepend 0 to hour less than 3');
  });

  it('displays time input does not accept hour input greater than 23', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('24');
    Terra.validates.element('does not accept hour more than 23');
  });

  it('prepends 0 on single digit minute', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-minute-time-input"]').click();
    browser.keys('2');
    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    Terra.validates.element('prepends 0 on single digit minute');
  });

  it('prepends 0 on minute input of 6 or more', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

    $('#timeInput input[name="terra-time-minute-time-input"]').click();
    browser.keys('6');
    Terra.validates.element('prepends 0 on minute input of 6 or more');
  });

  it('does not prepend 0 on minute input less than 6', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

    $('#timeInput input[name="terra-time-minute-time-input"]').click();
    browser.keys('5');
    Terra.validates.element('does not prepend 0 to minute');
  });

  it('does not accept minute input greater than 59', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

    $('#timeInput input[name="terra-time-minute-time-input"]').click();
    browser.keys('66');
    Terra.validates.element('does not accept minute input greater than 59');
  });

  it('Pressing DELETE in minute with no value focuses to hour', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');
    Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

    $('#timeInput input[name="terra-time-minute-time-input"]').click();
    browser.keys(['Delete']);
    Terra.validates.element('delete focuses hour');
  });

  it('prepends 0 on single digit second', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-second-time-input"]').click();
    browser.keys('2');
    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    Terra.validates.element('prepends 0 on single digit second');
  });

  it('prepends 0 on second input of 6 or more', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

    $('#timeInput input[name="terra-time-second-time-input"]').click();
    browser.keys('6');
    Terra.validates.element('prepends 0 on second input of 6 or more');
  });

  it('does not prepend 0 on second input less than 6', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

    $('#timeInput input[name="terra-time-second-time-input"]').click();
    browser.keys('5');
    Terra.validates.element('does not prepend 0 on second input less than 6');
  });

  it('does not accept second input greater than 59', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

    $('#timeInput input[name="terra-time-second-time-input"]').click();
    browser.keys('66');
    Terra.validates.element('does not accept second input greater than 59');
  });

  it('Pressing DELETE in second with no value focuses to minute', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

    $('#timeInput input[name="terra-time-second-time-input"]').click();
    browser.keys(['Delete']);

    Terra.validates.element('delete focuses minute');
  });

  it('Triggers an onChange for onBlur on the minute input', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('747');
    Terra.validates.element('trigger onChange for onBlur');
  });

  it('Does not trigger onChange for an hour with just one digit', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('1223');
    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys(['ArrowLeft', 'ArrowRight', 'Delete']);
    Terra.validates.element('onChange not triggered for hour with one digit');
  });

  it('Does not trigger onChange for a minute with just one digit', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('1223');
    $('#timeInput input[name="terra-time-minute-time-input"]').click();
    browser.keys(['ArrowLeft', 'ArrowRight', 'Delete']);
    Terra.validates.element('onChange not triggered for minute with one digit');
  });
});

describe('Time Input onBlur operations', () => {
  describe('Time Input onBlur', () => {
    it('clicks the hour input and onBlur is not triggered', () => {
      browser.url('/raw/tests/terra-time-input/time-input/time-input/focus-blur');
      $('#timeInput input[name="terra-time-hour-time-input"]').click();
      expect($('#blur-count').getText()).toEqual('0');
      expect($('#focus-count').getText()).toEqual('1');
    });

    it('tabs to the minute input and onBlur is not triggered', () => {
      browser.keys('Tab');
      expect($('#blur-count').getText()).toEqual('0');
      expect($('#focus-count').getText()).toEqual('1');
    });

    it('tabs to the meridiem and onBlur is not triggered', () => {
      browser.keys('Tab');
      expect($('#blur-count').getText()).toEqual('0');
      expect($('#focus-count').getText()).toEqual('1');
    });

    it('tabs out of the component and onBlur is triggered', () => {
      browser.keys('Tab'); // Move focus to "p.m."
      browser.keys('Tab'); // Tab out of the component.
      expect($('#blur-count').getText()).toEqual('1');
      expect($('#focus-count').getText()).toEqual('1');
    });
  });
});

describe('Time Input up and down arrow operations', () => {
  it('decrements hour by 1 using DOWN_ARROW', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('23');
    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys(['ArrowDown']);
    Terra.validates.element('DOWN_ARROW decrements hour by 1');
  });

  it('ignores DOWN_ARROW when the hour has reached 00', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('00');
    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys(['ArrowDown']);
    Terra.validates.element('DOWN_ARROW ignored for hour 00');
  });

  it('increments hour by 1 using UP_ARROW ', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys(['ArrowUp', 'ArrowUp']);
    Terra.validates.element('UP_ARROW increments hour by 1');
  });

  it('ignores UP_ARROW when the hour has reached 23', () => {
    browser.url('/raw/tests/terra-time-input/time-input/time-input/on-change');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('23');
    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys(['ArrowUp']);
    Terra.validates.element('UP_ARROW ignored for hour 23');
  });
});
