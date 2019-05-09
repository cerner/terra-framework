const viewports = Terra.viewports('medium');

describe('Time Input', () => {
  before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

  describe('Default with no time provided', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/time-input/default'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-time-input-background-color': '#ff7777',
        '--terra-time-input-border-color': '#000000',
        '--terra-time-input-border-radius': '10px',
        '--terra-time-input-border-style': 'dashed',
        '--terra-time-input-border-width': '2px',
        '--terra-time-input-color': '#1c1fb2',
        '--terra-time-input-font-size': '1.5em',
        '--terra-time-input-padding-bottom': '1.178em',
        '--terra-time-input-padding-left': '1.178em',
        '--terra-time-input-padding-right': '1.178em',
        '--terra-time-input-padding-top': '1.178em',
        '--terra-time-input-time-input-group-minute-margin-left': '1.357em',
        '--terra-time-input-time-input-group-hour-margin-right': '1.357em',
        '--terra-time-input-line-height': '2',
        '--terra-time-input-mobile-line-height': '0.5',
        '--terra-time-input-mobile-padding-bottom': '0.714em',
        '--terra-time-input-mobile-padding-left': '0.714em',
        '--terra-time-input-mobile-padding-right': '0.714em',
        '--terra-time-input-mobile-padding-top': '0.714em',
        '--terra-time-input-desktop-input-height': '2.8em',
        '--terra-time-input-time-spacer-margin-bottom': '0.357em',
        '--terra-time-input-time-spacer-margin-left': '0.2858em',
        '--terra-time-input-time-spacer-margin-right': '0.2858em',
        '--terra-time-input-time-spacer-margin-top': '0.714em',
      },
    });
  });

  describe('Default with time provided', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/time-input/default-time'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Invalid time provided', () => {
    before(() => browser.url('/#/raw/tests/terra-time-input/time-input/time-input/invalid-time'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Focus Hour Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/default-time');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    });

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-time-input-transition-duration': '0s',
        '--terra-time-input-transition-timing-function': 'ease',
        '--terra-time-input-background-image': 'linear-gradient(to bottom, #9fc3b2, #9fc3b2)',
        '--terra-time-input-background-size': '0 0',
        '--terra-time-input-focus-border-color': '#0000f2',
        '--terra-time-input-focus-border-style': 'solid',
        '--terra-time-input-focus-border-width': '1px',
        '--terra-time-input-focus-opacity': '1',
        '--terra-time-input-focus-background-size': '100% 10px',
        '--terra-time-input-focus-ltr-box-shadow': '10 10 8px #cccccc',
        '--terra-time-input-desktop-focused-input-background-color': '#ab1f02',
      },
    });
  });

  describe('Focus Minute Styles', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/default-time');
      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
    });

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-time-input-transition-duration': '0s',
        '--terra-time-input-transition-timing-function': 'ease',
        '--terra-time-input-background-image': 'linear-gradient(to bottom, #9fc3b2, #9fc3b2)',
        '--terra-time-input-background-size': '0 0',
        '--terra-time-input-focus-border-color': '#0000f2',
        '--terra-time-input-focus-border-style': 'solid',
        '--terra-time-input-focus-border-width': '1px',
        '--terra-time-input-focus-opacity': '1',
        '--terra-time-input-focus-background-size': '100% 10px',
        '--terra-time-input-focus-ltr-box-shadow': '10 10 8px #cccccc',
        '--terra-time-input-desktop-focused-input-background-color': '#ab1f02',
      },
    });
  });
});

describe('Time Input onChange operations', () => {
  describe('Time Input OnChange', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('1234');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Time Input prepends 0 on single digit hour', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('2');
      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Time Input prepends 0 on hour input of 3 or more', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('3');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Time Input does prepend 0 on hour input less than 3', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('2');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Time Input does not accept hour input greater than 23', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('24');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Time Input prepends 0 on single digit minute', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
      browser.keys('2');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Time Input prepends 0 on minute input of 6 or more', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
      browser.keys('6');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Time Input does not prepend 0 on minute input less than 6', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
      browser.keys('5');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Time Input does not accept minute input greater than 59', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
      browser.keys('66');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Pressing DELETE in minute with no value focuses to hour', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
      browser.keys(['Delete']);
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Triggers an onChange for onBlur on the minute input', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('747');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Does not trigger onChange for an hour with just one digit', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('1223');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowLeft', 'ArrowRight', 'Delete']);
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Does not trigger onChange for a minute with just one digit', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('1223');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.click('#timeInput input[name="terra-time-minute-time-input"]');
      browser.keys(['ArrowLeft', 'ArrowRight', 'Delete']);
    });

    Terra.should.matchScreenshot({ viewports });
  });
});

describe('Time Input onBlur operations', () => {
  describe('Time Input onBlur', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/focus-blur');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
        document.querySelector('#timeInput input[name="terra-time-minute-time-input"]').style.caretColor = 'transparent';
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
        browser.keys('Tab');
        expect(browser.getText('#blur-count')).to.equal('1');
        expect(browser.getText('#focus-count')).to.equal('1');
      });
    });
  });
});

describe('Time Input up and down arrow operations', () => {
  describe('DOWN_ARROW decrements hour by 1', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('23');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowDown']);
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('DOWN_ARROW is ignored when the hour has reached 00', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('00');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowDown']);
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('UP_ARROW increments hour by 1', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowUp', 'ArrowUp']);
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('UP_ARROW is ignored when the hour has reached 23', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/on-change');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('#timeInput input[name="terra-time-hour-time-input"]').style.caretColor = 'transparent';
      });

      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys('23');
      browser.click('#timeInput input[name="terra-time-hour-time-input"]');
      browser.keys(['ArrowUp']);
    });

    Terra.should.matchScreenshot({ viewports });
  });
});
