Terra.describeViewports('Time Input', ['medium'], () => {
  describe('Default with no time provided', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/time-input/default'));

    Terra.it.validatesElement();
  });

  describe('Default with time provided', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/time-input/default-time'));

    Terra.it.validatesElement();
  });

  describe('Second with no time provided', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/time-input/second'));

    Terra.it.validatesElement();
  });

  describe('Second with time provided', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/time-input/second-time'));

    Terra.it.validatesElement();
  });

  describe('Invalid time provided', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/time-input/invalid-provided-time'));

    Terra.it.validatesElement();
  });

  describe('Invalid time input', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/time-input/invalid-time'));

    Terra.it.validatesElement();
  });

  describe('Invalid mobile time input', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/time-input/mobile-invalid'));

    Terra.it.validatesElement();
  });

  describe('Incomplete time input', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/time-input/incomplete-time'));

    Terra.it.validatesElement();
  });

  describe('Incomplete mobile time input', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/time-input/mobile-incomplete'));

    Terra.it.validatesElement();
  });

  describe('Invalid and Incomplete time input', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/time-input/invalid-incomplete-time'));

    Terra.it.validatesElement();
  });

  describe('Invalid and Incomplete mobile time input', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/time-input/mobile-invalid-incomplete'));

    Terra.it.validatesElement();
  });

  describe('Focus Hour Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/default-time');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');
    });

    Terra.it.validatesElement();
  });

  describe('Focus Time Component Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/incomplete-time');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');
    });

    Terra.it.validatesElement();
  });

  describe('Focus Minute Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/default-time');
      browser.refresh();
      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
      Terra.hideInputCaret('#timeInput input[name=\'terra-time-minute-time-input\']');
    });

    Terra.it.validatesElement();
  });

  describe('Focus Second Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/second-time');
      browser.refresh();
      browser.click('#timeInput input[name="terra-time-second-time-input"]');
      Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');
    });

    Terra.it.validatesElement();
  });
});

Terra.describeViewports('Time Input onChange operations', ['medium'], () => {
  describe('Time Input OnChange', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('123456');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Time Input prepends 0 on single digit hour', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('2');
      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Time Input prepends 0 on hour input of 3 or more', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('3');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Time Input does prepend 0 on hour input less than 3', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('2');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Time Input does not accept hour input greater than 23', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('24');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Time Input prepends 0 on single digit minute', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
      browser.keys('2');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Time Input prepends 0 on minute input of 6 or more', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
      browser.keys('6');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Time Input does not prepend 0 on minute input less than 6', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
      browser.keys('5');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Time Input does not accept minute input greater than 59', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
      browser.keys('66');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Pressing DELETE in minute with no value focuses to hour', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');
      Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
      browser.keys(['Delete']);
    });

    Terra.it.matchesScreenshot();
  });

  describe('Time Input prepends 0 on single digit second', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

      browser.click('#timeInput input[name="terra-time-second-time-input"]');
      browser.keys('2');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Time Input prepends 0 on second input of 6 or more', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

      browser.click('#timeInput input[name="terra-time-second-time-input"]');
      browser.keys('6');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Time Input does not prepend 0 on second input less than 6', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

      browser.click('#timeInput input[name="terra-time-second-time-input"]');
      browser.keys('5');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Time Input does not accept second input greater than 59', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

      browser.click('#timeInput input[name="terra-time-second-time-input"]');
      browser.keys('66');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Pressing DELETE in second with no value focuses to minute', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

      browser.click('#timeInput input[name="terra-time-second-time-input"]');
      browser.keys(['Delete']);
    });

    Terra.it.matchesScreenshot();
  });

  describe('Triggers an onChange for onBlur on the minute input', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-second-time-input"]');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('747');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Does not trigger onChange for an hour with just one digit', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('1223');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowLeft', 'ArrowRight', 'Delete']);
    });

    Terra.it.matchesScreenshot();
  });

  describe('Does not trigger onChange for a minute with just one digit', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-minute-time-input"]');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('1223');
      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
      browser.keys(['ArrowLeft', 'ArrowRight', 'Delete']);
    });

    Terra.it.matchesScreenshot();
  });
});

describe('Time Input onBlur operations', () => {
  describe('Time Input onBlur', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/focus-blur');
    });

    it('clicks the hour input and onBlur is not triggered', () => {
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      expect(browser.getText('#blur-count')).to.equal('0');
      expect(browser.getText('#focus-count')).to.equal('1');
    });

    it('tabs to the minute input and onBlur is not triggered', () => {
      browser.keys('Tab');
      expect(browser.getText('#blur-count')).to.equal('0');
      expect(browser.getText('#focus-count')).to.equal('1');
    });

    it('tabs to the meridiem and onBlur is not triggered', () => {
      browser.keys('Tab');
      expect(browser.getText('#blur-count')).to.equal('0');
      expect(browser.getText('#focus-count')).to.equal('1');
    });

    it('tabs out of the component and onBlur is triggered', () => {
      browser.keys('Tab'); // Move focus to "p.m."
      browser.keys('Tab'); // Tab out of the component.
      expect(browser.getText('#blur-count')).to.equal('1');
      expect(browser.getText('#focus-count')).to.equal('1');
    });
  });
});

describe('Time Input up and down arrow operations', () => {
  describe('DOWN_ARROW decrements hour by 1', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('23');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowDown']);
    });

    Terra.it.matchesScreenshot();
  });

  describe('DOWN_ARROW is ignored when the hour has reached 00', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('00');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowDown']);
    });

    Terra.it.matchesScreenshot();
  });

  describe('UP_ARROW increments hour by 1', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowUp', 'ArrowUp']);
    });

    Terra.it.matchesScreenshot();
  });

  describe('UP_ARROW is ignored when the hour has reached 23', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.refresh();
      Terra.hideInputCaret('#timeInput input[name="terra-time-hour-time-input"]');

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('23');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowUp']);
    });

    Terra.it.matchesScreenshot();
  });
});
