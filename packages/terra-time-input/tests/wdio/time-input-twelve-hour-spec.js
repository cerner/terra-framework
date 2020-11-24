Terra.describeViewports('Time Input Twelve Hour', ['medium'], () => {
  it('displays Twelve Hour Default with no time provided', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/default');
    Terra.validates.element('no time');
  });

  it('displays Twelve Hour Default with an evening time filled', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/filled-evening');
    Terra.validates.element('evening time');
  });

  it('displays Twelve Hour Default with a morning time filled', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/filled-morning');
    Terra.validates.element('morning time');
  });

  it('displays Twelve Hour Meridiem - Sets hour to 12 without meridiem change for hour input 00', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    browser.keys('00');
    Terra.validates.element('set hour to 12 without meridiem');
  });

  it('displays Twelve Hour Meridiem - Up Arrow on hour does not change meridiem', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    browser.keys(['ArrowUp']);
    Terra.validates.element('up arrow does not change meridiem');
  });

  it('displays Twelve Hour - Changes time to 01 when up is pressed on hour of 12', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    browser.keys('12');
    browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    browser.keys(['ArrowUp']);
    Terra.validates.element('up arrow changes time to 01');
  });

  it('displays Twelve Hour - Changes time to 12 when down is pressed on hour of 01', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    browser.keys('01');
    browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    browser.keys(['ArrowDown']);

    Terra.validates.element('down arrow changes time to 12');
  });

  it('displays Twelve Hour Meridiem - Switched when up is press on hour of 11', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    browser.keys('11');
    browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    browser.keys(['ArrowUp']);

    Terra.validates.element('switch meridiem - up arrow');
  });

  it('displays Twelve Hour Meridiem - Switched when down is press on hour of 12', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    browser.keys('12');
    browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    browser.keys(['ArrowDown']);
    Terra.validates.element('switch meridiem - down arrow');
  });

  it('displays Twelve Hour - Sets time to 12 when hour is 0 and onBlur is called', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/default');
    browser.refresh();
    Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    browser.keys('0');
    browser.click('#timeInput input[name="terra-time-minute-time-input"]');
    Terra.validates.element('change hour from 0 to 12 onBlur');
  });

  it('displays Twelve Hour Default with second and no time provided', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/second');
    Terra.validates.element('with second - no time');
  });

  it('displays Twelve Hour - Invalid time input', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/invalid');

    Terra.validates.element('invalid input');
  });

  it('displays Twelve Hour - Incomplete time input', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/incomplete');
    Terra.validates.element('incomplete input');
  });

  it('displays Twelve Hour - Invalid incomplete time input', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/invalid-incomplete');
    Terra.validates.element('invalid and incomplete');
  });

  it('displays Twelve Hour - Invalid meridiem', () => {
    browser.url('/raw/tests/terra-time-input/time-input/twelve-hour/invalid-meridiem');
    Terra.validates.element('invalid meridiem');
  });
});
