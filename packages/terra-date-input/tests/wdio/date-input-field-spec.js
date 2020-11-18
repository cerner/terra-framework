Terra.describeViewports('Date Input Field', ['medium'], () => {
  it('should display no date provided', () => {
    browser.url('/raw/tests/terra-date-input/date-input/default-date-input-field');
    Terra.validates.element('no date');
  });

  it('should display full date provided', () => {
    browser.url('/raw/tests/terra-date-input/date-input/populated-date-input-field');
    Terra.validates.element('full date');
  });

  it('should display invalid date provide', () => {
    browser.url('/raw/tests/terra-date-input/date-input/invalid-provided-date-input-field');
    Terra.validates.element('invalid date');
  });

  it('should display invalid date input field', () => {
    browser.url('/raw/tests/terra-date-input/date-input/invalid-date-input-field');
    Terra.validates.element('invalid field');
  });

  it('it should display incomplete date input field', () => {
    browser.url('/raw/tests/terra-date-input/date-input/incomplete-date-input-field');
    Terra.validates.element('incomplete');
  });

  it('should display incomplete and invalid', () => {
    browser.url('/raw/tests/terra-date-input/date-input/incomplete-date-input-field');
    Terra.validates.element('incomplete and invalid');
  });

  it('should display Day Month Year ', () => {
    browser.url('/raw/tests/terra-date-input/date-input/day-month-year-value-date-input-field');
    Terra.validates.element('day month year');
  });

  it('should display Month Day Year ', () => {
    browser.url('/raw/tests/terra-date-input/date-input/month-day-year-value-date-input-field');
    Terra.validates.element('month day year');
  });

  it('should display Disabled DateInputField', () => {
    browser.url('/raw/tests/terra-date-input/date-input/disabled-date-input-field');
    Terra.validates.element('disabled');
  });

  it('should display Disabled Populated DateInputField', () => {
    browser.url('/raw/tests/terra-date-input/date-input/filled-in-disabled-date-input-field');
    Terra.validates.element('populated disabled');
  });

  it('should Hide Required DateInputField', () => {
    browser.url('/raw/tests/terra-date-input/date-input/hide-required-date-input-field');
    Terra.validates.element('hide required');
  });

  it('should Inline DateInputField', () => {
    browser.url('/raw/tests/terra-date-input/date-input/inline-date-input-field');
    Terra.validates.element('inline');
  });

  it('should display Optional DateInputField', () => {
    browser.url('/raw/tests/terra-date-input/date-input/optional-date-input-field');
    Terra.validates.element('optional');
  });

  it('Required DateInputField', () => {
    browser.url('/raw/tests/terra-date-input/date-input/required-date-input-field');
    Terra.validates.element('required');
  });

  describe('Date Input Field Month select keyboard operations', () => {
    describe('Month Select UP_ARROW increments month by 1', () => {
      it('should increment month by 1', () => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('select[name="terra-date-month-date-input"]');
        browser.keys(['ArrowUp']);
        browser.keys(['Enter']);
        Terra.validates.element('increment month');
      });
    });

    describe('Month Select DOWN_ARROW decrements month by 1', () => {
      it('should decrement month by 1', () => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('select[name="terra-date-month-date-input"]');
        browser.keys(['ArrowDown']);
        browser.keys(['Enter']);
        Terra.validates.element('decrement month');
      });
    });

    describe('Month Select Pressing DELETE in month with value clears the value', () => {
      it('should clear month value', () => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('select[name="terra-date-month-date-input"]');
        browser.keys(['Enter']);
        browser.keys(['Delete']);
        Terra.validates.element('clear month');
      });
    });

    describe('Month Select Pressing DELETE in month with no value shifts focus to day in d-m-y format', () => {
      it('should shift focus to day  on pressing delete', () => {
        browser.url('/raw/tests/terra-date-input/date-input/day-month-year-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('select[name="terra-date-month-date-input"]');
        browser.keys(['Enter']);
        browser.keys(['Delete']);
        Terra.validates.element('shift focus to day');
      });
    });

    describe('Month Select Pressing DELETE in month with no value does not shift focus to day in m-d-y format', () => {
      it('should not shift focus to day on pressing delete', () => {
        browser.url('/raw/tests/terra-date-input/date-input/month-day-year-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('select[name="terra-date-month-date-input"]');
        browser.keys(['Enter']);
        browser.keys(['Delete']);

        Terra.validates.element('no focus shift');
      });
    });
  });

  describe('Date Input Field Day input keyboard operations', () => {
    describe('Day Input UP_ARROW increments day by 1 when day value is filled in', () => {
      it('should increment day by 1', () => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['ArrowUp']);

        Terra.validates.element('increment day filled');
      });
    });

    describe('Day Input UP_ARROW increments day by 1 when day value is empty', () => {
      it('should increment day by 1', () => {
        browser.url('/raw/tests/terra-date-input/date-input/default-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['ArrowUp']);
        Terra.validates.element('increment day-empty');
      });
    });

    describe('Day Input UP_ARROW is cycles to 01 when the day has reached 31', () => {
      it('should cycle to 1', () => {
        browser.url('/raw/tests/terra-date-input/date-input/default-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['31', 'ArrowUp']);

        Terra.validates.element('cycle day');
      });
    });

    describe('Day Input DOWN_ARROW decrements day by 1 when day value is filled in', () => {
      it('should decrement day by 1', () => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['ArrowDown']);

        Terra.validates.element('decrement day-filled');
      });
    });

    describe('Day Input DOWN_ARROW decrements day to 31 when day value is empty', () => {
      it('should decrement day to 31', () => {
        browser.url('/raw/tests/terra-date-input/date-input/default-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['ArrowDown']);

        Terra.validates.element('decrement day-empty');
      });
    });

    describe('Day Input DOWN_ARROW cycles to 31 when the day has reached 01', () => {
      it('should cycle day to 31', () => {
        browser.url('/raw/tests/terra-date-input/date-input/default-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['01', 'ArrowDown']);
        Terra.validates.element('cycle day');
      });
    });

    describe('Day Input Pressing DELETE in day input with value clears the character', () => {
      it('should clear day input', () => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['Delete']);

        Terra.validates.element('clear day');
      });
    });

    describe('Day Input Pressing DELETE in day input with no value shifts focus day to month in m-d-y format', () => {
      it('should shift focus to day', () => {
        browser.url('/raw/tests/terra-date-input/date-input/month-day-year-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['Delete']);

        Terra.validates.element('shift focus');
      });
    });

    describe('Day Input Pressing DELETE in day input with no value does not shift focus in d-m-y format', () => {
      it('should not shift focus on delete', () => {
        browser.url('/raw/tests/terra-date-input/date-input/day-month-year-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['Delete']);

        Terra.validates.element('no shift in focus');
      });
    });
  });

  describe('Date Input Field Year input keyboard operations', () => {
    describe('Year Input UP_ARROW increments year by 1 when year value is filled in', () => {
      it('should increment year by 1', () => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['ArrowUp']);

        Terra.validates.element('increment year-filled');
      });
    });

    describe('Year Input UP_ARROW increments year to 1900 when year value is empty', () => {
      it('should increment year to 1900', () => {
        browser.url('/raw/tests/terra-date-input/date-input/default-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['ArrowUp']);

        Terra.validates.element('increment year-empty');
      });
    });

    describe('Year Input UP_ARROW is cycles to 1900 when the year has reached 2100', () => {
      it('should cycle to 1900', () => {
        browser.url('/raw/tests/terra-date-input/date-input/default-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['2100', 'ArrowUp']);

        Terra.validates.element('cycle year');
      });
    });

    describe('Year Input DOWN_ARROW decrements year by 1 when year value is filled in', () => {
      it('should decrement year by 1', () => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['ArrowDown']);

        Terra.validates.element('decrement year-filled');
      });
    });

    describe('Year Input DOWN_ARROW decrements year to 2100 when year value is empty', () => {
      it('should decrement year to 2100', () => {
        browser.url('/raw/tests/terra-date-input/date-input/default-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['ArrowDown']);

        Terra.validates.element('decrement year-empty');
      });
    });

    describe('Year Input DOWN_ARROW cycles to 2100 when the year has reached 1900', () => {
      it('should be cycle to 2100', () => {
        browser.url('/raw/tests/terra-date-input/date-input/default-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['1900', 'ArrowDown']);

        Terra.validates.element('cycle year');
      });
    });

    describe('Year Input Pressing DELETE in year input with value clears the character', () => {
      it('should clear year value on delete', () => {
        browser.url('/raw/tests/terra-date-input/date-input/populated-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['Delete']);

        Terra.validates.element('clear year');
      });
    });

    describe('Year Input Pressing DELETE in year input with no value shifts focus year to day in m-d-y format', () => {
      it('should shift focus to day', () => {
        browser.url('/raw/tests/terra-date-input/date-input/month-day-year-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['Delete']);

        Terra.validates.element('shift focus to day');
      });
    });

    describe('Year Input Pressing DELETE in year input with no value shifts focus year to month in d-m-y format', () => {
      it('should shift focus to month', () => {
        browser.url('/raw/tests/terra-date-input/date-input/day-month-year-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['Delete']);

        Terra.validates.element('shift focus to month');
      });
    });
  });

  describe('Date Input onBlur', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-input/date-input/focus-blur-date-input-field');
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

  it('should display Multiple DateInputField', () => {
    browser.url('/raw/tests/terra-date-input/date-input/multiple-date-input-field');
    Terra.validates.element('multiple');
  });
});
