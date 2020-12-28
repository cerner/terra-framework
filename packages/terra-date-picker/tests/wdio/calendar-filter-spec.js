/* global $ */
Terra.describeViewports('Calendar Filter', ['tiny'], () => {
  describe('Calendar-Filter-Default', () => {
    it('renders with default calendar-filter', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-default');
      Terra.validates.element('default');
    });
  });

  describe('Calendar-Filter with Default Date Excluded', () => {
    it('renders with default date disabled', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-default-date-excluded');
      Terra.validates.element('default date excluded');
    });
  });

  describe('Calendar-Filter with Default Date Out Of Range', () => {
    it('renders with default date disabled', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-default-date-out-of-range');
      Terra.validates.element('out of range');
    });
  });

  describe('Calendar-Filter with minDate and maxDate', () => {
    it('renders with min and max-date', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-min-max');
      Terra.validates.element('minDate and maxDate');
    });
  });

  describe('Calendar-Filter with Exclude Dates', () => {
    it('renders with excluded date', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-exclude-dates');
      Terra.validates.element('exclude date');
    });
  });

  describe('Calendar-Filter with filtered Dates', () => {
    it('renders with filtered date', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-filter-dates');
      Terra.validates.element('filtered date');
    });
  });

  describe('Calendar-Filter with Included Dates', () => {
    it('renders with Included date', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-include-dates');
      Terra.validates.element('included date');
    });
  });

  describe('Calendar-Filter with OnChange Callback', () => {
    it('renders selected date on change', () => {
      browser.url('/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-on-change');
      $('[class*="react-datepicker-day--selected"]').click();
      Terra.validates.element('Returns selected_date-iso-formmated_date');
    });
  });

  describe('Controlled Calendar Filter', () => {
    before(() => {
      browser.url('/raw/tests/terra-date-picker/date-picker/calendar-filter/calendar-filter-controlled');
    });

    it('Click button 1 to set the date value as empty', () => {
      $('#button1').click();
      Terra.validates.element('empty date set');
    });

    it('Click button 2 to set formatted date', () => {
      $('#button2').click();
      Terra.validates.element('formatted date set');
    });

    it('Click button 3 to set iso date', () => {
      $('#button3').click();
      Terra.validates.element('iso date set without time');
    });

    it('Click button 4 to set iso date time', () => {
      $('#button4').click();
      Terra.validates.element('iso date set');
    });

    it('Click button 5 to set ordinal date', () => {
      $('#button5').click();
      Terra.validates.element('ordinal date not set');
    });
  });
});
