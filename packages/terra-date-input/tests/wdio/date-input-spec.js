Terra.describeViewports('Date Input', ['medium'], () => {
  describe('Default with no date provide', () => {
    before(() => browser.url('/raw/tests/terra-date-input/date-input/default-date-input'));

    Terra.it.validatesElement();
  });

  describe('Default with full date provide', () => {
    before(() => browser.url('/raw/tests/terra-date-input/date-input/populated-date-input'));

    Terra.it.validatesElement();
  });

  describe('Date Input month keyboard operations', () => {
    describe('UP_ARROW increments month by 1', () => {
      before(() => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('select[name="terra-date-month-date-input"]');
        browser.keys(['ArrowUp']);
        browser.keys(['Enter']);
      });

      Terra.it.validatesElement();
    });

    describe('DOWN_ARROW decrements month by 1', () => {
      before(() => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('select[name="terra-date-month-date-input"]');
        browser.keys(['ArrowDown', 'ArrowDown']);
        browser.keys(['Enter']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('LEFT_ARROW shifts focus to day in day-month-year format', () => {
      before(() => {
        browser.url('/raw/tests/terra-date-input/date-input/day-month-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('select[name="terra-date-month-date-input"]');
        browser.keys(['Enter']);
        browser.keys(['ArrowLeft']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('RIGHT_ARROW shifts focus to day in month-day-year format', () => {
      before(() => {
        browser.url('/raw/tests/terra-date-input/date-input/month-day-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('select[name="terra-date-month-date-input"]');
        browser.keys(['Enter']);
        browser.keys(['ArrowRight']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('RIGHT_ARROW shifts focus to year in day-month-year format', () => {
      before(() => {
        browser.url('/raw/tests/terra-date-input/date-input/day-month-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('select[name="terra-date-month-date-input"]');
        browser.keys(['Enter']);
        browser.keys(['ArrowRight']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Pressing DELETE in month with value clears the value', () => {
      before(() => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('select[name="terra-date-month-date-input"]');
        browser.keys(['Enter']);
        browser.keys(['Delete']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Pressing DELETE in month with no value shifts focus to day in d-m-y format', () => {
      before(() => {
        browser.url('/raw/tests/terra-date-input/date-input/day-month-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('select[name="terra-date-month-date-input"]');
        browser.keys(['Enter']);
        browser.keys(['Delete']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Pressing DELETE in month with no value does not shift focus to day in m-d-y format', () => {
      before(() => {
        browser.url('/raw/tests/terra-date-input/date-input/month-day-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('select[name="terra-date-month-date-input"]');
        browser.keys(['Enter']);
        browser.keys(['Delete']);
      });

      Terra.it.matchesScreenshot();
    });
  });
});
