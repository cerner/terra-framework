const viewports = Terra.viewports('medium');

describe('Time Input Twelve Hour', () => {
  before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

  describe('Twelve Hour Default with no time provided', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default'));

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Twelve Hour Default with an evening time filled', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/filled-evening'));

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Twelve Hour Default with a morning time filled', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/filled-morning'));

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Twelve Hour Meridiem - Up switches to a.m.', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');

      browser.click('#timeInput input[value="a.m."]');
      browser.keys(['ArrowUp']);
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Twelve Hour Meridiem - Down switches to p.m.', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');
      browser.refresh();

      browser.click('#timeInput input[value="a.m."]');
      browser.keys(['ArrowDown']);
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Twelve Hour Meridiem - Auto focuses on meridiem when filling out whole time', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');
      browser.refresh();
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('1234p');
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Twelve Hour Meridiem - Auto focuses on meridiem when filling out minute', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');
      browser.refresh();
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
      browser.keys('34p');
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Twelve Hour Meridiem - Sets hour to 12 without meridiem change for hour input 00', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');
      browser.refresh();
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('00');
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Twelve Hour Meridiem - Sets hour to 12 without meridiem change for hour input 00', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');
      browser.refresh();
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('00');
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Twelve Hour Meridiem - Up Arrow on hour does not change meridiem', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');
      browser.refresh();
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowUp']);
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Twelve Hour - Changes time to 01 when up is pressed on hour of 12', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');
      browser.refresh();
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('12');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowUp']);
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Twelve Hour - Changes time to 12 when down is pressed on hour of 01', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');
      browser.refresh();
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('01');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowDown']);
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Twelve Hour Meridiem - Switched when up is press on hour of 11', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');
      browser.refresh();
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('11');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowUp']);
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Twelve Hour Meridiem - Switched when down is press on hour of 12', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');
      browser.refresh();
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('12');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowDown']);
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Twelve Hour - Sets time to 12 when hour is 0 and onBlur is called', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');
      browser.refresh();
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('0');
      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Twelve Hour - Sets time to 12 when hour is 0 and onBlur is called', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');
      browser.refresh();
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('0');
      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Twelve Hour - Sets time to 12 when hour is 0 and onBlur is called', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');
      browser.refresh();
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('0');
      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Twelve Hour - Focuses to minute when left is pressed from meridiem', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');
      browser.refresh();
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[value="a.m."]');
      browser.keys(['ArrowLeft']);
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Twelve Hour - Focuses to minute when delete is pressed from meridiem', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/default');
      browser.refresh();
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[value="a.m."]');
      browser.keys(['Delete']);
    });

    Terra.it.matchesScreenshot({ viewports });
  });
});
