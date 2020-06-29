Terra.describeViewports('Calendar Filter', ['tiny'], () => {
  describe('Calendar-Filter-Default', () => {
    it('renders with default calendar-filter', () => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-default');
      Terra.validates.element();
    });
  });

  describe('Calendar-Filter with Default Date Excluded', () => {
    it('renders with default date disabled', () => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-default-date-excluded');
      Terra.validates.element();
    });
  });

  describe('Calendar-Filter with Default Date Out Of Range', () => {
    it('renders with default date disabled', () => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-default-date-out-of-range');
      Terra.validates.element();
    });
  });

  describe('Calendar-Filter with minDate and maxDate', () => {
    it('renders with min and max-date', () => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-min-max');
      Terra.validates.element();
    });
  });

  describe('Calendar-Filter with Exclude Dates', () => {
    it('renders with excluded date', () => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-exclude-dates');
      Terra.validates.element();
    });
  });

  describe('Calendar-Filter with filtered Dates', () => {
    it('renders with filtered date', () => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-filter-dates');
      Terra.validates.element();
    });
  });

  describe('Calendar-Filter with Included Dates', () => {
    it('renders with Included date', () => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-include-dates');
      Terra.validates.element();
    });
  });

  describe('Calendar-Filter with OnChange Callback', () => {
    it('renders selected date on change', () => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-on-change');
      browser.click('[class*="react-datepicker-day--selected"]');
      Terra.validates.element('Returns selected_date-iso-formmated_date');
    });
  });

  describe('Controlled Calendar Filter', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-controlled');
    });

    it('Click button 1 to set the date value as empty', () => {
      browser.click('#button1');
      Terra.validates.element('empty date set');
    });

    it('Click button 2 to set formatted date', () => {
      browser.click('#button2');
      Terra.validates.element('formatted date set');
    });

    it('Click button 3 to set iso date', () => {
      browser.click('#button3');
      Terra.validates.element('iso date set without time');
    });

    it('Click button 4 to set iso date time', () => {
      browser.click('#button4');
      Terra.validates.element('iso date set');
    });

    it('Click button 5 to set ordinal date', () => {
      browser.click('#button5');
      Terra.validates.element('ordinal date not set');
    });
  });
});
