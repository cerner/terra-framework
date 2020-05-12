Terra.describeViewports('Calendar Filter', ['tiny'], () => {
  describe('Calendar-Filter-Default', () => {
    before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-default'));

    Terra.it.validatesElement();
  });

  describe('Calendar-Filter with Default Date Excluded', () => {
    before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-default-date-excluded'));

    Terra.it.validatesElement();
  });

  describe('Calendar-Filter with Default Date Out Of Range', () => {
    before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-default-date-out-of-range'));

    Terra.it.validatesElement();
  });

  describe('Calendar-Filter with minDate and maxDate', () => {
    before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-min-max'));

    Terra.it.validatesElement();
  });

  describe('Calendar-Filter with Exclude Dates', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-exclude-dates');
    });

    Terra.it.validatesElement();
  });

  describe('Calendar-Filter with filtered Dates', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-filter-dates');
    });

    Terra.it.validatesElement();
  });

  describe('Calendar-Filter with Included Dates', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-include-dates');
    });

    Terra.it.validatesElement();
  });

  describe('Controlled DatePicker', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-controlled');
    });

    it('Click button 1 to set the date value as empty', () => {
      browser.click('#button1');
    });

    Terra.it.matchesScreenshot('empty date set');

    it('Click button 2 to set formatted date', () => {
      browser.click('#button2');
    });

    Terra.it.matchesScreenshot('formatted date set');

    it('Click button 3 to set iso date', () => {
      browser.click('#button3');
    });

    Terra.it.matchesScreenshot('iso date set without time');

    it('Click button 4 to set iso date time', () => {
      browser.click('#button4');
    });

    Terra.it.matchesScreenshot('iso date set');

    it('Click button 5 to set ordinal date', () => {
      browser.click('#button5');
    });

    Terra.it.matchesScreenshot('ordinal date not set');
  });
});
