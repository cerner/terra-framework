const viewports = Terra.viewports('medium');

// Color contrast will be resolved in https://github.com/cerner/terra-core/issues/1670
const ignoredA11y = {
  'color-contrast': { enabled: false },
};

describe('Time Input Twelve Hour Mobile', () => {
  before(() => {
    browser.setViewportSize(Terra.viewports('tiny')[0]);
    browser.execute('if (!window.ontouchstart) { window.ontouchstart = "true"; }');
  });

  after(() => {
    browser.execute('if (window.ontouchstart) { window.ontouchstart = "false"; }');
  });

  describe('Twelve Hour Mobile - Default with no time', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/mobile'));

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports, rules: ignoredA11y });
  });

  describe('Twelve Hour Mobile - Clicking Meridiem updates the time', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/mobile');

      browser.click('#timeInputValueProvided button:not([aria-pressed="true"])');
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Twelve Hour Mobile - Focus Hour Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/mobile');
      browser.refresh();
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    });

    Terra.it.isAccessible({ viewports, rules: ignoredA11y });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Twelve Hour Mobile - Focus Minute Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/mobile');
      browser.refresh();
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
    });

    Terra.it.isAccessible({ viewports, rules: ignoredA11y });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Twelve Hour Mobile - Focus Second Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/mobile');
      browser.refresh();
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInputSecond input[name="terra-time-second-time-input-second"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInputSecond input[name="terra-time-second-time-input-second"]');
    });

    Terra.it.isAccessible({ viewports, rules: ignoredA11y });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Twelve Hour Mobile - Auto focues meridiem wien filling out whole thing', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/mobile');
      browser.refresh();

      browser.click('#timeInputSecond input[name="terra-time-hour-time-input-second"]');
      browser.keys('123456');
    });

    Terra.it.isAccessible({ viewports, rules: ignoredA11y });
    Terra.it.matchesScreenshot({ viewports });
  });
});
