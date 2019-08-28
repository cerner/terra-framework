Terra.describeViewports('Date Input', ['medium'], () => {
  describe('Date Input no date provide', () => {
    before(() => browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input'));

    Terra.it.validatesElement();
  });

  describe('Date Input full date provide', () => {
    before(() => browser.url('/#/raw/tests/terra-date-input/date-input/populated-date-input'));

    Terra.it.validatesElement();
  });

  describe('Date Input invalid date provide', () => {
    before(() => browser.url('/#/raw/tests/terra-date-input/date-input/invalid-date-input'));

    Terra.it.validatesElement();
  });

  describe('Disabled Date Input', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-input/date-input/disabled-date-input');
      browser.refresh();
      // Removes the blinking cursor to prevent screenshot mismatches.
      Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
      Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Day Month Year Date Input', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-input/date-input/day-month-year-date-input');
      browser.refresh();
      // Removes the blinking cursor to prevent screenshot mismatches.
      Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
      Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Month Day Year Date Input', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-input/date-input/month-day-year-date-input');
      browser.refresh();
      // Removes the blinking cursor to prevent screenshot mismatches.
      Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
      Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Focus Month Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input');
      browser.click('select[name="terra-date-month-date-input"]');
    });

    Terra.it.validatesElement();
  });

  describe('Focus Day Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input');
      browser.click('input[name="terra-date-day-date-input"]');
    });

    Terra.it.validatesElement();
  });

  describe('Focus Year Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input');
      browser.click('input[name="terra-date-year-date-input"]');
    });

    Terra.it.validatesElement();
  });

  describe('Month select keyboard operations', () => {
    describe('Month Select UP_ARROW increments month by 1', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/populated-date-input');
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

    describe('Month Select DOWN_ARROW decrements month by 1', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/populated-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('select[name="terra-date-month-date-input"]');
        browser.keys(['ArrowDown']);
        browser.keys(['Enter']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Month Select LEFT_ARROW shifts focus to day in day-month-year format', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/day-month-year-date-input');
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

    describe('Month Select RIGHT_ARROW shifts focus to day in month-day-year format', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/month-day-year-date-input');
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

    describe('Month Select RIGHT_ARROW shifts focus to year in day-month-year format', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/day-month-year-date-input');
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

    describe('Month Select Pressing DELETE in month with value clears the value', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/populated-date-input');
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

    describe('Month Select Pressing DELETE in month with no value shifts focus to day in d-m-y format', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/day-month-year-date-input');
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

    describe('Month Select Pressing DELETE in month with no value does not shift focus to day in m-d-y format', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/month-day-year-date-input');
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

  describe('Day input keyboard operations', () => {
    describe('Day Input UP_ARROW increments day by 1 when day value is filled in', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/populated-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['ArrowUp']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Day Input UP_ARROW increments day by 1 when day value is empty', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['ArrowUp']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Day Input UP_ARROW is cycles to 01 when the day has reached 31', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['31', 'ArrowUp']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Day Input DOWN_ARROW decrements day by 1 when day value is filled in', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/populated-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['ArrowDown']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Day Input DOWN_ARROW decrements day to 31 when day value is empty', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['ArrowDown']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Day Input DOWN_ARROW cycles to 31 when the day has reached 01', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['01', 'ArrowDown']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Day Input LEFT_ARROW shifts focus from day to month in month-day-year format if day value is empty', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['ArrowLeft']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Day Input LEFT_ARROW shifts focus from day to month in month-day-year format if cursor is in left most position in day input', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/populated-date-input');
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

    describe('Day Input LEFT_ARROW does not shift focus if format is day-month-year', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/day-month-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['ArrowLeft']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Day Input RIGHT_ARROW shifts focus from day to year in month-day-year format if day value is empty', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['ArrowRight']);
      });

      Terra.it.matchesScreenshot();
    });


    describe('Day Input RIGHT_ARROW shifts focus from day to month in day-month-year format if day value is empty', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/day-month-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['ArrowRight']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Day Input RIGHT_ARROW shifts focus from day to year in month-day-year format if cursor is in right most position in day input', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/month-day-year-date-input');
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

    describe('Day Input RIGHT_ARROW shifts focus from day to month in day-month-year format if cursor is in right most position in day input', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/day-month-year-date-input');
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

    describe('Day Input Pressing DELETE in day input with value clears the character', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/populated-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['Delete']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Day Input Pressing DELETE in day input with no value shifts focus day to month in m-d-y format', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/month-day-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['Delete']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Day Input Pressing DELETE in day input with no value does not shift focus in d-m-y format', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/day-month-year-date-input');
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

  describe('Year input keyboard operations', () => {
    describe('Year Input UP_ARROW increments year by 1 when year value is filled in', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/populated-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['ArrowUp']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Year Input UP_ARROW increments year by 1 when year value is empty', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['ArrowUp']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Year Input UP_ARROW is cycles to 1 when the year has reached 9999', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['9999', 'ArrowUp']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Year Input DOWN_ARROW decrements year by 1 when year value is filled in', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/populated-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['ArrowDown']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Year Input DOWN_ARROW decrements year to 9999 when year value is empty', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['ArrowDown']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Year Input DOWN_ARROW cycles to 9999 when the year has reached 1', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['1', 'ArrowDown']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Year Input LEFT_ARROW shifts focus from year to day in month-day-year format if year value is empty', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/month-day-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['ArrowLeft']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Year Input LEFT_ARROW shifts focus from year to day in month-day-year format if cursor is in left most position in day input', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/month-day-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        // Shift cursor to left most position
        browser.keys(['2000']);
        browser.execute('document.querySelector(\'input[name="terra-date-year-date-input"]\').setSelectionRange(0,0);');
        browser.keys(['ArrowLeft']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Year Input LEFT_ARROW shifts focus from year to month in day-month-year format if year value is empty', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/day-month-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['ArrowLeft']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Year Input LEFT_ARROW shifts focus from year to month in day-month-year format if cursor is in left most position in year input', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/day-month-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        // Shift cursor to left most position
        browser.keys(['2000']);
        browser.execute('document.querySelector(\'input[name="terra-date-year-date-input"]\').setSelectionRange(0,0);');
        browser.keys(['ArrowLeft']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Year Input RIGHT_ARROW does not shift focus in month-day-year format', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/month-day-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['ArrowRight']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Year Input RIGHT_ARROW does not shift focus in day-month-year format', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/day-month-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['ArrowRight']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Year Input Pressing DELETE in year input with value clears the character', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/populated-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['Delete']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Year Input Pressing DELETE in year input with no value shifts focus year to day in m-d-y format', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/month-day-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['Delete']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Year Input Pressing DELETE in year input with no value shifts focus year to month in d-m-y format', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/day-month-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['Delete']);
      });

      Terra.it.matchesScreenshot();
    });
  });

  describe('Date Input OnChange Valid Date', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input');
      browser.refresh();
      // Removes the blinking cursor to prevent screenshot mismatches.
      Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
      Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

      browser.click('select[name="terra-date-month-date-input"]');
      browser.keys(['ArrowDown']);

      browser.click('input[name="terra-date-day-date-input"]');
      browser.keys('30');

      browser.click('input[name="terra-date-year-date-input"]');
      browser.keys('1990');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Date Input OnChange Invalid Date', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input');
      browser.refresh();
      // Removes the blinking cursor to prevent screenshot mismatches.
      Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
      Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

      browser.click('select[name="terra-date-month-date-input"]');
      browser.keys(['ArrowDown']);

      browser.click('input[name="terra-date-day-date-input"]');
      browser.keys('ab');

      browser.click('input[name="terra-date-year-date-input"]');
      browser.keys('cdef');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Date Input prepends 0 on single digit day onBlur', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input');
      browser.refresh();
      // Removes the blinking cursor to prevent screenshot mismatches.
      Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
      Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

      browser.click('input[name="terra-date-day-date-input"]');
      browser.keys('1');
      browser.click('input[name="terra-date-year-date-input"]');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Date Input onBlur', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-input/date-input/focus-blur-date-input');
      browser.click('select[name="terra-date-month-date-input"]');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
        expect(browser.getText('#blur-count')).to.equal('0');
        expect(browser.getText('#focus-count')).to.equal('1');
      });

      it('tabs to the day input and onBlur is not triggered', () => {
        browser.keys('Tab');
        expect(browser.getText('#blur-count')).to.equal('0');
        expect(browser.getText('#focus-count')).to.equal('1');
      });

      it('tabs to the year and onBlur is not triggered', () => {
        browser.keys('Tab');
        expect(browser.getText('#blur-count')).to.equal('0');
        expect(browser.getText('#focus-count')).to.equal('1');
      });

      it('tabs out of the component and onBlur is triggered', () => {
        browser.keys('Tab');
        expect(browser.getText('#blur-count')).to.equal('1');
        expect(browser.getText('#focus-count')).to.equal('1');
      });
    });
  });
});
