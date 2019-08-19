Terra.describeViewports('Date Input', ['medium'], () => {
  describe('Default with no date provide', () => {
    before(() => browser.url('/raw/tests/terra-date-input/date-input/default-date-input'));

    Terra.it.validatesElement();
  });

  describe('Default with full date provide', () => {
    before(() => browser.url('/raw/tests/terra-date-input/date-input/populated-date-input'));

    Terra.it.validatesElement();
  });

  describe('Focus Month Styles', () => {
    before(() => {
      browser.url('/raw/tests/terra-date-input/date-input/default-date-input');
      browser.click('select[name="terra-date-month-date-input"]');
    });

    Terra.it.validatesElement();
  });

  describe('Focus Day Styles', () => {
    before(() => {
      browser.url('/raw/tests/terra-date-input/date-input/default-date-input');
      browser.click('input[name="terra-date-day-date-input"]');
    });

    Terra.it.validatesElement();
  });

  describe('Focus Year Styles', () => {
    before(() => {
      browser.url('/raw/tests/terra-date-input/date-input/default-date-input');
      browser.click('input[name="terra-date-year-date-input"]');
    });

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

  describe('Date Input day keyboard operations', () => {
    describe('UP_ARROW increments day by 1 when day value is filled in', () => {
      before(() => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['ArrowUp']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('UP_ARROW increments day by 1 when day value is empty', () => {
      before(() => {
        browser.url('/raw/tests/terra-date-input/date-input/default-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['ArrowUp']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('UP_ARROW is cycles to 01 when the day has reached 31', () => {
      before(() => {
        browser.url('/raw/tests/terra-date-input/date-input/default-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['31', 'ArrowUp']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('DOWN_ARROW decrements day by 1 when day value is filled in', () => {
      before(() => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['ArrowDown']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('DOWN_ARROW decrements day by 1 when day value is empty', () => {
      before(() => {
        browser.url('/raw/tests/terra-date-input/date-input/default-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['ArrowDown']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('DOWN_ARROW cycles to 31 when the day has reached 01', () => {
      before(() => {
        browser.url('/raw/tests/terra-date-input/date-input/default-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['01', 'ArrowDown']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('LEFT_ARROW shifts focus from day to month in month-day-year format if day value is empty', () => {
      before(() => {
        browser.url('/raw/tests/terra-date-input/date-input/default-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['ArrowLeft']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('LEFT_ARROW shifts focus from day to month in month-day-year format if cursor is in left most position in day input', () => {
      before(() => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        // Shift cursor to left most position
        browser.execute('document.querySelector(\'input[name="terra-date-day-date-input"]\').setSelectionRange(0,0);');
        browser.keys(['ArrowLeft']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('LEFT_ARROW does not shift focus if format is day-month-year', () => {
      before(() => {
        browser.url('/raw/tests/terra-date-input/date-input/day-month-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['ArrowLeft']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('RIGHT_ARROW shifts focus from day to year in month-day-year format if day value is empty', () => {
      before(() => {
        browser.url('/raw/tests/terra-date-input/date-input/default-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['ArrowRight']);
      });

      Terra.it.matchesScreenshot();
    });


    describe('RIGHT_ARROW shifts focus from day to month in day-month-year format if day value is empty', () => {
      before(() => {
        browser.url('/raw/tests/terra-date-input/date-input/day-month-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['ArrowRight']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('RIGHT_ARROW shifts focus from day to year in month-day-year format if cursor is in right most position in day input', () => {
      before(() => {
        browser.url('/raw/tests/terra-date-input/date-input/month-day-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        // Enter value to move cursor to right, then press right arrow to shift focus
        browser.keys(['31', 'ArrowRight']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('RIGHT_ARROW shifts focus from day to month in day-month-year format if cursor is in right most position in day input', () => {
      before(() => {
        browser.url('/raw/tests/terra-date-input/date-input/day-month-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        // Enter value to move cursor to right, then press right arrow to shift focus
        browser.keys(['31', 'ArrowRight']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Pressing DELETE in day input with value clears the character', () => {
      before(() => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['Delete']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Pressing DELETE in day input with no value shifts focus day to month in m-d-y format', () => {
      before(() => {
        browser.url('/raw/tests/terra-date-input/date-input/month-day-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['Delete']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Pressing DELETE in day input with no value does not shift focus in d-m-y format', () => {
      before(() => {
        browser.url('/raw/tests/terra-date-input/date-input/day-month-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['Delete']);
      });

      Terra.it.matchesScreenshot();
    });
  });
});
