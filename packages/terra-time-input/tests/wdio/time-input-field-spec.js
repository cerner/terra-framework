Terra.describeViewports('Time Input Field', ['medium'], () => {
  describe('Incomplete', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/time-input-field');
      browser.click('#incomplete-toggle');
    });
    after(() => {
      browser.click('#incomplete-toggle');
    });

    Terra.it.validatesElement();
  });

  describe('Invalid and Incomplete', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/time-input-field');
      browser.click('#validity-toggle');
      browser.click('#incomplete-toggle');
    });
    after(() => {
      browser.click('#validity-toggle');
      browser.click('#incomplete-toggle');
    });

    Terra.it.validatesElement();
  });

  describe('Disabled', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/disabled-time-input-field');
    });

    Terra.it.validatesElement();
  });

  describe('Multiple', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/multiple-time-input-field');
    });

    Terra.it.validatesElement();
  });

  describe('Multiple inline', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/multiple-time-input-field');
      browser.click('#inline-toggle');
    });

    Terra.it.validatesElement();
  });

  describe('Second', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-time-input/time-input/time-input/time-input-field-second');
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
