Terra.describeViewports('Date Input', ['medium'], () => {
  describe('Date Input Field no date provide', () => {
    before(() => browser.url('/raw/tests/terra-date-input/date-input/default-date-input-field'));

    Terra.it.validatesElement();
  });

  describe('Date Input Field full date provide', () => {
    before(() => browser.url('/raw/tests/terra-date-input/date-input/populated-date-input-field'));

    Terra.it.validatesElement();
  });

  describe('Date Input Field invalid date provide', () => {
    before(() => browser.url('/raw/tests/terra-date-input/date-input/invalid-date-input-field'));

    Terra.it.validatesElement();
  });

  describe('Day Month Year DateInputField', () => {
    before(() => browser.url('/raw/tests/terra-date-input/date-input/day-month-year-date-input-field'));

    Terra.it.validatesElement();
  });

  describe('Month Day Year DateInputField', () => {
    before(() => browser.url('/raw/tests/terra-date-input/date-input/month-day-year-date-input-field'));

    Terra.it.validatesElement();
  });

  describe('Disabled DateInputField', () => {
    before(() => browser.url('/raw/tests/terra-date-input/date-input/disabled-date-input-field'));

    Terra.it.validatesElement();
  });

  describe('Hide Required DateInputField', () => {
    before(() => browser.url('/raw/tests/terra-date-input/date-input/hide-required-date-input-field'));

    Terra.it.validatesElement();
  });

  describe('Inline DateInputField', () => {
    before(() => browser.url('/raw/tests/terra-date-input/date-input/inline-date-input-field'));

    Terra.it.validatesElement();
  });

  describe('Optional DateInputField', () => {
    before(() => browser.url('/raw/tests/terra-date-input/date-input/optional-date-input-field'));

    Terra.it.validatesElement();
  });

  describe('Required DateInputField', () => {
    before(() => browser.url('/raw/tests/terra-date-input/date-input/required-date-input-field'));

    Terra.it.validatesElement();
  });
});