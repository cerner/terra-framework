Terra.describeViewports('Time Input Twelve Hour', ['medium'], () => {
  it('displays twelve hour default with no time provided', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/default');
    Terra.validates.element('no time');
  });

  it('displays twelve hour default with an evening time filled', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/filled-evening');
    Terra.validates.element('evening time');
  });

  it('displays twelve hour default with a morning time filled', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/filled-morning');
    Terra.validates.element('morning time');
  });

  it('displays twelve Hour meridiem - Sets hour to 12 without meridiem change for hour input 00', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('00');
    Terra.validates.element('set hour to 12 without meridiem');
  });

  it('displays twelve hour meridiem - Up Arrow on hour does not change meridiem', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys(['ArrowUp']);
    Terra.validates.element('up arrow does not change meridiem');
  });

  it('displays twelve hour - Changes time to 01 when up is pressed on hour of 12', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('12');
    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys(['ArrowUp']);
    Terra.validates.element('up arrow changes time to 01');
  });

  it('displays twelve hour - Changes time to 12 when down is pressed on hour of 01', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('01');
    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys(['ArrowDown']);

    Terra.validates.element('down arrow changes time to 12');
  });

  it('displays twelve hour meridiem - Switched when up is press on hour of 11', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('11');
    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys(['ArrowUp']);

    Terra.validates.element('switch meridiem - up arrow');
  });

  it('displays twelve hour meridiem - Switched when down is press on hour of 12', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('12');
    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys(['ArrowDown']);
    Terra.validates.element('switch meridiem - down arrow');
  });

  it('displays twelve hour - Sets time to 12 when hour is 0 and onBlur is called', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

    $('#timeInput input[name="terra-time-hour-time-input"]').click();
    browser.keys('0');
    $('#timeInput input[name="terra-time-minute-time-input"]').click();
    Terra.validates.element('change hour from 0 to 12 onBlur');
  });

  it('displays twelve hour Default with second and no time provided', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/second');
    Terra.validates.element('with second - no time');
  });

  it('displays twelve hour - Invalid time input', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/invalid');

    Terra.validates.element('invalid input');
  });

  it('displays twelve hour - Incomplete time input', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/incomplete');
    Terra.validates.element('incomplete input');
  });

  it('displays twelve hour - Invalid incomplete time input', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/invalid-incomplete');
    Terra.validates.element('invalid and incomplete');
  });

  it('displays twelve hour - Invalid meridiem', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/invalid-meridiem');
    Terra.validates.element('invalid meridiem');
  });
});
