Terra.describeViewports('Time Input Twelve Hour', ['medium'], () => {
  describe('Twelve Hour Default with no time provided', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default'));

    Terra.it.matchesScreenshot();
  });

  describe('Twelve Hour Default with an evening time filled', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/filled-evening'));

    Terra.it.matchesScreenshot();
  });

  describe('Twelve Hour Default with a morning time filled', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/filled-morning'));

    Terra.it.matchesScreenshot();
  });

  describe('Twelve Hour Meridiem - Sets hour to 12 without meridiem change for hour input 00', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('00');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Twelve Hour Meridiem - Up Arrow on hour does not change meridiem', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowUp']);
    });

    Terra.it.matchesScreenshot();
  });

  describe('Twelve Hour - Changes time to 01 when up is pressed on hour of 12', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('12');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowUp']);
    });

    Terra.it.matchesScreenshot();
  });

  describe('Twelve Hour - Changes time to 12 when down is pressed on hour of 01', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('01');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowDown']);
    });

    Terra.it.matchesScreenshot();
  });

  describe('Twelve Hour Meridiem - Switched when up is press on hour of 11', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('11');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowUp']);
    });

    Terra.it.matchesScreenshot();
  });

  describe('Twelve Hour Meridiem - Switched when down is press on hour of 12', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('12');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowDown']);
    });

    Terra.it.matchesScreenshot();
  });

  describe('Twelve Hour - Sets time to 12 when hour is 0 and onBlur is called', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('0');
      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Twelve Hour - Sets time to 12 when hour is 0 and onBlur is called', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('0');
      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Twelve Hour - Sets time to 12 when hour is 0 and onBlur is called', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('0');
      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Twelve Hour Default with second and no time provided', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/second'));

    Terra.it.matchesScreenshot();
  });

  describe('Twelve Hour - Invalid time input', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/invalid'));

    Terra.it.matchesScreenshot();
  });

  describe('Twelve Hour - Incomplete time input', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/incomplete'));

    Terra.it.matchesScreenshot();
  });

  describe('Twelve Hour - Invalid incomplete time input', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/invalid-incomplete'));

    Terra.it.matchesScreenshot();
  });

  describe('Twelve Hour - Invalid meridiem', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/invalid-meridiem'));

    Terra.it.matchesScreenshot();
  });
});
