Terra.describeViewports('Date Input', ['medium'], () => {
  const ignoredDisabledAlly = { 'color-contrast': { enabled: false } };
  // Temporary disabled test, since placeholder causes contrast accessibility failure.
  describe('Date Input Field no date provide', () => {
    before(() => browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input-field'));

    Terra.it.validatesElement({ rules: ignoredDisabledAlly });
  });

  describe('Date Input Field full date provide', () => {
    before(() => browser.url('/#/raw/tests/terra-date-input/date-input/populated-date-input-field'));

    Terra.it.validatesElement();
  });

  // Temporary disabled test, since placeholder causes contrast accessibility failure.
  describe('Date Input Field invalid date provide', () => {
    before(() => browser.url('/#/raw/tests/terra-date-input/date-input/invalid-provided-date-input-field'));

    Terra.it.validatesElement({ rules: ignoredDisabledAlly });
  });

  describe('Date Input Field is invalid', () => {
    before(() => browser.url('/#/raw/tests/terra-date-input/date-input/invalid-date-input-field'));

    Terra.it.validatesElement();
  });

  describe('Date Input Field is incomplete', () => {
    before(() => browser.url('/#/raw/tests/terra-date-input/date-input/incomplete-date-input-field'));

    Terra.it.validatesElement();
  });

  describe('Date Input Field is incomplete and invalid', () => {
    before(() => browser.url('/#/raw/tests/terra-date-input/date-input/incomplete-date-input-field'));

    Terra.it.validatesElement();
  });

  describe('Day Month Year DateInputField', () => {
    before(() => browser.url('/#/raw/tests/terra-date-input/date-input/day-month-year-value-date-input-field'));

    Terra.it.validatesElement();
  });

  describe('Month Day Year DateInputField', () => {
    before(() => browser.url('/#/raw/tests/terra-date-input/date-input/month-day-year-value-date-input-field'));

    Terra.it.validatesElement();
  });

  describe('Disabled DateInputField', () => {
    before(() => browser.url('/#/raw/tests/terra-date-input/date-input/disabled-date-input-field'));

    Terra.it.validatesElement();
  });

  describe('Disabled Populated DateInputField', () => {
    before(() => browser.url('/#/raw/tests/terra-date-input/date-input/filled-in-disabled-date-input-field'));

    Terra.it.validatesElement();
  });

  describe('Hide Required DateInputField', () => {
    before(() => browser.url('/#/raw/tests/terra-date-input/date-input/hide-required-date-input-field'));

    Terra.it.validatesElement();
  });

  describe('Inline DateInputField', () => {
    before(() => browser.url('/#/raw/tests/terra-date-input/date-input/inline-date-input-field'));

    Terra.it.validatesElement();
  });

  describe('Optional DateInputField', () => {
    before(() => browser.url('/#/raw/tests/terra-date-input/date-input/optional-date-input-field'));

    Terra.it.validatesElement();
  });

  describe('Required DateInputField', () => {
    before(() => browser.url('/#/raw/tests/terra-date-input/date-input/required-date-input-field'));

    Terra.it.validatesElement();
  });

  describe('Date Input Field Month select keyboard operations', () => {
    describe('Month Select UP_ARROW increments month by 1', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/populated-date-input-field');
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
        browser.url('/#/raw/tests/terra-date-input/date-input/populated-date-input-field');
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

    describe('Month Select Pressing DELETE in month with value clears the value', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/populated-date-input-field');
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
        browser.url('/#/raw/tests/terra-date-input/date-input/day-month-year-date-input-field');
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
        browser.url('/#/raw/tests/terra-date-input/date-input/month-day-year-date-input-field');
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

  describe('Date Input Field Day input keyboard operations', () => {
    describe('Day Input UP_ARROW increments day by 1 when day value is filled in', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/populated-date-input-field');
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
        browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input-field');
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
        browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input-field');
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
        browser.url('/#/raw/tests/terra-date-input/date-input/populated-date-input-field');
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
        browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input-field');
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
        browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-day-date-input"]');
        browser.keys(['01', 'ArrowDown']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Day Input Pressing DELETE in day input with value clears the character', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/populated-date-input-field');
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
        browser.url('/#/raw/tests/terra-date-input/date-input/month-day-year-date-input-field');
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
        browser.url('/#/raw/tests/terra-date-input/date-input/day-month-year-date-input-field');
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

  describe('Date Input Field Year input keyboard operations', () => {
    describe('Year Input UP_ARROW increments year by 1 when year value is filled in', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/populated-date-input-field');
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
        browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input-field');
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
        browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input-field');
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
        browser.url('/#/raw/tests/terra-date-input/date-input/populated-date-input-field');
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
        browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input-field');
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
        browser.url('/#/raw/tests/terra-date-input/date-input/default-date-input-field');
        browser.refresh();
        // Removes the blinking cursor to prevent screenshot mismatches.
        Terra.hideInputCaret('input[name="terra-date-day-date-input"]');
        Terra.hideInputCaret('input[name="terra-date-year-date-input"]');

        browser.click('input[name="terra-date-year-date-input"]');
        browser.keys(['1', 'ArrowDown']);
      });

      Terra.it.matchesScreenshot();
    });

    describe('Year Input Pressing DELETE in year input with value clears the character', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-input/date-input/populated-date-input-field');
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
        browser.url('/#/raw/tests/terra-date-input/date-input/month-day-year-date-input-field');
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
        browser.url('/#/raw/tests/terra-date-input/date-input/day-month-year-date-input-field');
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
});
