Terra.describeViewports('Time Input Field Twelve Hour', ['medium'], () => {
  describe('Incomplete TimeInputField', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/time-input-field');
      browser.click('#incomplete-toggle');
    });
    after(() => {
      browser.click('#incomplete-toggle');
    });

    Terra.it.validatesElement();
  });

  describe('Invalid and Incomplete TimeInputField', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/time-input-field');
      browser.click('#validity-toggle');
      browser.click('#incomplete-toggle');
    });
    after(() => {
      browser.click('#validity-toggle');
      browser.click('#incomplete-toggle');
    });

    Terra.it.validatesElement();
  });

  describe('Disabled TimeInputField', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/disabled-time-input-field');
    });

    Terra.it.validatesElement();
  });

  describe('Multiple TimeInputField', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/multiple-time-input-field');
    });

    Terra.it.validatesElement();
  });

  describe('Multiple TimeInputField Inline', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/multiple-time-input-field');
      browser.click('#inline-toggle');
    });

    Terra.it.validatesElement();
  });

  describe('Second', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/twelve-hour/time-input-field-second');
      browser.click('#validity-toggle');
      browser.click('#incomplete-toggle');
    });
    after(() => {
      browser.click('#validity-toggle');
      browser.click('#incomplete-toggle');
    });

    Terra.it.validatesElement();
  });
});
