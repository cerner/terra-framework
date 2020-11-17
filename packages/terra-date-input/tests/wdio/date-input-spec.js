Terra.describeViewports('Date Input', ['medium'], () => {
  it('should display no date provided', () => {
    browser.url('/raw/tests/terra-date-input/date-input/default-date-input');
    Terra.validates.element('no date');
  });

  it('should display full date provided', () => {
    browser.url('/raw/tests/terra-date-input/date-input/populated-date-input');
    Terra.validates.element('full date');
  });

  it('should display invalid date provided', () => {
    browser.url('/raw/tests/terra-date-input/date-input/invalid-provided-date-input');
    Terra.validates.element('invalid date');
  });

  it('should be invalid', () => {
    browser.url('/raw/tests/terra-date-input/date-input/invalid-date-input');
    Terra.validates.element('invalid input');
  });

  it('should display incomplete input', () => {
    browser.url('/raw/tests/terra-date-input/date-input/incomplete-date-input');
    Terra.validates.element('incomplete');
  });

  it('should display invalid and incomplete date input', () => {
    browser.url('/raw/tests/terra-date-input/date-input/invalid-incomplete-date-input');
    Terra.validates.element('invalid and incomplete');
  });

  it('should display Disabled Date Input', () => {
    browser.url('/raw/tests/terra-date-input/date-input/disabled-date-input');
    browser.refresh();
    // Removes the blinking cursor to prevent screenshot mismatches.
    Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
    Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
    Terra.validates.element('disabled');
  });

  it('should display Day Month Year Date Input', () => {
    browser.url('/raw/tests/terra-date-input/date-input/day-month-year-date-input');
    browser.refresh();
    // Removes the blinking cursor to prevent screenshot mismatches.
    Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
    Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
    Terra.validates.element('day month year');
  });

  it('should display Month Day Year Date Input', () => {
    browser.url('/raw/tests/terra-date-input/date-input/month-day-year-date-input');
    browser.refresh();
    // Removes the blinking cursor to prevent screenshot mismatches.
    Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
    Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
    Terra.validates.element('month day year');
  });

  it(' should Focus Month Styles', () => {
    browser.url('/raw/tests/terra-date-input/date-input/default-date-input');
    browser.click('select[name="terra-date-month-date-input"]');
    Terra.validates.element('focus month styles');
  });

  it('should Focus Day Styles', () => {
    browser.url('/raw/tests/terra-date-input/date-input/populated-date-input');
    browser.click('input[name="terra-date-day-date-input"]');
    Terra.validates.element('focus day styles');
  });

  it('should display Focus Year Styles', () => {
    browser.url('/raw/tests/terra-date-input/date-input/populated-date-input');
    browser.click('input[name="terra-date-year-date-input"]');
    Terra.validates.element('focus year styles');
  });

  describe('Month Select placeholder option clears value', () => {
    it('Selects January in month select', () => {
      browser.url('/raw/tests/terra-date-input/date-input/day-month-year-date-input');
      Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
      Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
      browser.click('select[name="terra-date-month-date-input"]');
      browser.keys(['ArrowDown']);
      browser.keys(['Enter']);
      Terra.validates.element('First Month Selected');
    });

    it('Selects Placeholder option to clear selected value', () => {
      browser.click('select[name="terra-date-month-date-input"]');
      browser.keys(['ArrowUp']);
      browser.keys(['Enter']);
      Terra.validates.element('Value Cleared');
    });
  });

  describe('Month select keyboard operations', () => {
    describe('Month Select UP_ARROW increments month by 1', () => {
      it('should increment month by 1', () => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('select[name="terra-date-month-date-input"]');
        browser.keys(['ArrowUp']);
        browser.keys(['Enter']);

        Terra.validates.element('default');
      });
    });

    describe('Month Select DOWN_ARROW decrements month by 1', () => {
      it('should decrement month by 1', () => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('select[name="terra-date-month-date-input"]');
        browser.keys(['ArrowDown']);
        browser.keys(['Enter']);
        Terra.validates.element('default');
      });
    });

    describe('Month Select Pressing DELETE in month with value clears the value', () => {
      it('should clear value on delete', () => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('select[name="terra-date-month-date-input"]');
        browser.keys(['Enter']);
        browser.keys(['Delete']);
        Terra.validates.element('default');
      });
    });

    describe('Month Select Pressing DELETE in month with no value shifts focus to day in d-m-y format', () => {
      it('should shift focus to day', () => {
        browser.url('/raw/tests/terra-date-input/date-input/day-month-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('select[name="terra-date-month-date-input"]');
        browser.keys(['Enter']);
        browser.keys(['Delete']);

        Terra.validates.element('default');
      });
    });

    describe('Month Select Pressing DELETE in month with no value does not shift focus to day in m-d-y format', () => {
      it('should not shift focus to day', () => {
        browser.url('/raw/tests/terra-date-input/date-input/month-day-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('select[name="terra-date-month-date-input"]');
        browser.keys(['Enter']);
        browser.keys(['Delete']);

        Terra.validates.element('default');
      });
    });
  });

  describe('Day input keyboard operations', () => {
    describe('Day Input UP_ARROW increments day by 1 when day value is filled in', () => {
      it('should increment day by 1', () => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['ArrowUp']);

        Terra.validates.element('default');
      });
    });

    describe('Day Input UP_ARROW increments day by 1 when day value is empty', () => {
      it('should increment day by 1', () => {
        browser.url('/raw/tests/terra-date-input/date-input/default-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['ArrowUp']);

        Terra.validates.element('default');
      });
    });

    describe('Day Input UP_ARROW is cycles to 01 when the day has reached 31', () => {
      it('should cycle day to 01', () => {
        browser.url('/raw/tests/terra-date-input/date-input/default-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['31', 'ArrowUp']);

        Terra.validates.element('default');
      });
    });

    describe('Day Input DOWN_ARROW decrements day by 1 when day value is filled in', () => {
      it('should decrement day by 1', () => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['ArrowDown']);
        Terra.validates.element('default');
      });
    });

    describe('Day Input DOWN_ARROW decrements day to 31 when day value is empty', () => {
      it('should decrement day to 31', () => {
        browser.url('/raw/tests/terra-date-input/date-input/default-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['ArrowDown']);

        Terra.validates.element('default');
      });
    });

    describe('Day Input DOWN_ARROW cycles to 31 when the day has reached 01', () => {
      it('should cycle day to 31', () => {
        browser.url('/raw/tests/terra-date-input/date-input/default-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['01', 'ArrowDown']);

        Terra.validates.element('default');
      });
    });

    describe('Day Input Pressing DELETE in day input with value clears the character', () => {
      it('should clear day value on delete', () => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['Delete']);

        Terra.validates.element('default');
      });
    });

    describe('Day Input Pressing DELETE in day input with no value shifts focus day to month in m-d-y format', () => {
      it('should shift focus to month', () => {
        browser.url('/raw/tests/terra-date-input/date-input/month-day-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['Delete']);
        Terra.validates.element('default');
      });
    });

    describe('Day Input Pressing DELETE in day input with no value does not shift focus in d-m-y format', () => {
      it('should not shift focus on delete', () => {
        browser.url('/raw/tests/terra-date-input/date-input/day-month-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['Delete']);

        Terra.validates.element('default');
      });
    });
  });

  describe('Year input keyboard operations', () => {
    describe('Year Input UP_ARROW increments year by 1 when year value is filled in', () => {
      it('should increment year by 1', () => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['ArrowUp']);

        Terra.validates.element('default');
      });
    });

    describe('Year Input UP_ARROW increments year to 1900 when year value is empty', () => {
      it('should increment year to 1900', () => {
        browser.url('/raw/tests/terra-date-input/date-input/default-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['ArrowUp']);

        Terra.validates.element('default');
      });
    });

    describe('Year Input UP_ARROW is cycles to 1900 when the year has reached 2100', () => {
      it('should cycle to 1900', () => {
        browser.url('/raw/tests/terra-date-input/date-input/default-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['2100', 'ArrowUp']);

        Terra.validates.element('default');
      });
    });

    describe('Year Input DOWN_ARROW decrements year by 1 when year value is filled in', () => {
      it('should decrement year by 1', () => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['ArrowDown']);

        Terra.validates.element('default');
      });
    });

    describe('Year Input DOWN_ARROW decrements year to 2100 when year value is empty', () => {
      it('should decrement year to 2100', () => {
        browser.url('/raw/tests/terra-date-input/date-input/default-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['ArrowDown']);
        Terra.validates.element('default');
      });
    });

    it('should cycle to 2100 when the year has reached 1900', () => {
      browser.url('/raw/tests/terra-date-input/date-input/default-date-input');
      browser.refresh();
      // Removes the blinking cursor to prevent screenshot mismatches.
      Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
      Terra.hideInputCaret('input[name="terra-date-year-date-input"]');
      browser.click('input[name="terra-date-year-date-input"]');
      browser.keys(['1900', 'ArrowDown']);
      Terra.validates.element('Down Arrow Cycles To 2100');
    });

    it('should not allow user to enter year values outside 1900-2100 ', () => {
      browser.url('/raw/tests/terra-date-input/date-input/default-date-input');
      browser.refresh();
      // Removes the blinking cursor to prevent screenshot mismatches.
      Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
      Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

      browser.click('input[name="terra-date-year-date-input"]');
      browser.keys(['7654']);

      Terra.validates.element('does not allow value outside 1900-2100');
    });

    describe('Year Input Pressing DELETE in year input with value clears the character', () => {
      it('should clear year input on delete', () => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['Delete']);

        Terra.validates.element('default');
      });
    });

    describe('Year Input Pressing DELETE in year input with no value shifts focus year to day in m-d-y format', () => {
      it('should shift focus to day', () => {
        browser.url('/raw/tests/terra-date-input/date-input/month-day-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['Delete']);
        Terra.validates.element('default');
      });
    });

    describe('Year Input Pressing DELETE in year input with no value shifts focus year to month in d-m-y format', () => {
      it('should shift focus to month', () => {
        browser.url('/raw/tests/terra-date-input/date-input/day-month-year-date-input');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['Delete']);
        Terra.validates.element('default');
      });
    });
  });

  describe('Date Input OnChange Valid Date', () => {
    it('should trigger onChange on valid input', () => {
      browser.url('/raw/tests/terra-date-input/date-input/default-date-input');
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

      Terra.validates.element('default');
    });
  });

  describe('Date Input OnChange Invalid Date', () => {
    it('should trigger onChange on invalid input', () => {
      browser.url('/raw/tests/terra-date-input/date-input/default-date-input');
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
      Terra.validates.element('default');
    });
  });

  describe('Date Input prepends 0 on single digit day onBlur', () => {
    it('should prepend 0 onBlur', () => {
      browser.url('/raw/tests/terra-date-input/date-input/default-date-input');
      browser.refresh();
      // Removes the blinking cursor to prevent screenshot mismatches.
      Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
      Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

      browser.click('input[name="terra-date-day-date-input"]');
      browser.keys('1');
      browser.click('input[name="terra-date-year-date-input"]');

      Terra.validates.element('default');
    });
  });

  describe('Date Input onBlur', () => {
    before(() => {
      browser.url('/raw/tests/terra-date-input/date-input/focus-blur-date-input');
      browser.click('select[name="terra-date-month-date-input"]');
      // eslint-disable-next-line prefer-arrow-callback
      browser.execute(function dispatch() {
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
