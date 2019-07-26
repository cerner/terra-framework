// Color contrast will be resolved in https://github.com/cerner/terra-core/issues/1670
const ignoredA11y = {
  'color-contrast': { enabled: false },
};

Terra.describeViewports('Time Input Twelve Hour Mobile', ['medium'], () => {
  before(() => {
    browser.execute('if (!window.ontouchstart) { window.ontouchstart = "true"; }');
  });

  after(() => {
    browser.execute('if (window.ontouchstart) { window.ontouchstart = "false"; }');
  });

  describe('Twelve Hour Mobile - Default with no time', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/mobile'));

    Terra.it.matchesScreenshot();
    Terra.it.isAccessible({ rules: ignoredA11y });
  });

  describe('Twelve Hour Mobile - Clicking Meridiem updates the time', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/mobile');

      browser.click('#timeInputValueProvided button:not([aria-pressed="true"])');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Twelve Hour Mobile - Focus Hour Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/mobile');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    });

    Terra.it.isAccessible({ rules: ignoredA11y });
    Terra.it.matchesScreenshot();
  });

  describe('Twelve Hour Mobile - Focus Minute Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/mobile');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
    });

    Terra.it.isAccessible({ rules: ignoredA11y });
    Terra.it.matchesScreenshot();
  });

  describe('Twelve Hour Mobile - Focus Second Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/mobile');
      browser.refresh();
      Terra.hideInputCaret('#timeInputWithSecond input[name="terra-time-second-time-input-with-second"]');

      browser.click('#timeInputWithSecond input[name="terra-time-second-time-input-with-second"]');
    });

    Terra.it.isAccessible({ rules: ignoredA11y });
    Terra.it.matchesScreenshot();
  });

  describe('Twelve Hour Mobile - Auto focues next input when filling out whole thing', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/mobile');
      browser.refresh();
      Terra.hideInputCaret('#timeInputWithSecond input[name="terra-time-second-time-input-with-second"]');

      browser.click('#timeInputWithSecond input[name="terra-time-second-time-input-with-second"]');
      browser.keys('123456');
    });

    Terra.it.isAccessible({ rules: ignoredA11y });
    Terra.it.matchesScreenshot();
  });
});
