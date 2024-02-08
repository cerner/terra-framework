import React from 'react';
import moment from 'moment-timezone';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import DateTimePicker from '../../lib/DateTimePicker';
import DateTimeUtils from '../../lib/DateTimeUtils';

it('should render a default date time picker', () => {
  const datePicker = shallowWithIntl(<DateTimePicker initialTimeZone="America/Chicago" name="date-time-input" />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a default date time picker with custom date input attributes', () => {
  const datePicker = shallowWithIntl(<DateTimePicker initialTimeZone="America/Chicago" name="date-time-input" dateInputAttributes={{ id: 'terra-date-input' }} />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a default date time picker with custom time input attributes', () => {
  const datePicker = shallowWithIntl(<DateTimePicker initialTimeZone="America/Chicago" name="date-time-input" timeInputAttributes={{ id: 'terra-time-input' }} />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with filtered dates', () => {
  const datePicker = shallowWithIntl(<DateTimePicker initialTimeZone="America/Chicago" filterDate={() => { }} name="date-time-input" />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with disabled dates', () => {
  const datePicker = shallowWithIntl(<DateTimePicker initialTimeZone="America/Chicago" name="date-time-input" excludeDates={['2017-04-01']} />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with included dates', () => {
  const datePicker = shallowWithIntl(<DateTimePicker initialTimeZone="America/Chicago" name="date-time-input" includeDates={['2017-04-01']} />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with min and max dates', () => {
  const datePicker = shallowWithIntl(<DateTimePicker initialTimeZone="America/Chicago" name="date-time-input" maxDate="2017-04-01" minDate="2017-04-10" />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with onBlur', () => {
  const onBlur = () => { };
  const datePicker = shallowWithIntl(<DateTimePicker initialTimeZone="America/Chicago" name="date-time-input" onBlur={onBlur} />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with onChange', () => {
  const onChange = () => { };
  const datePicker = shallowWithIntl(<DateTimePicker initialTimeZone="America/Chicago" name="date-time-input" onChange={onChange} />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with onChangeRaw', () => {
  const onChangeRaw = () => { };
  const datePicker = shallowWithIntl(<DateTimePicker initialTimeZone="America/Chicago" name="date-time-input" onChangeRaw={onChangeRaw} />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with a default date and time', () => {
  const datePicker = shallowWithIntl(<DateTimePicker initialTimeZone="America/Chicago" name="date-time-input" value="2017-04-01T10:30" />);
  expect(datePicker).toMatchSnapshot();
});

it('should render with a default timeVariant if variant is not specified', () => {
  const defaultTimeVariant = '24-hour';
  const datePicker = shallowWithIntl(<DateTimePicker initialTimeZone="America/Chicago" name="date-time-input" value="2017-04-01T10:30" />);
  expect(datePicker.prop('timeVariant')).toBe(defaultTimeVariant);
  expect(datePicker).toMatchSnapshot();
});

it('should render a disabled date time picker', () => {
  const datePicker = shallowWithIntl(<DateTimePicker initialTimeZone="America/Chicago" name="date-time-input" disabled />);
  expect(datePicker).toMatchSnapshot();
});

it('Should not throw any errors while date value is outside of the Min, Max range and new time value is being entered ', () => {
  const datePicker = mountWithIntl((
    <DateTimePicker initialTimeZone="America/Chicago" name="date-time-input" maxDate="2017-04-01T10:30" minDate="2017-04-10T10:30" />
  ));

  const dateMonthInput = datePicker.find({ name: 'terra-date-month-input', type: 'text' }).at(0);
  dateMonthInput.simulate('change', { target: { value: '04' } });
  const dateDayInput = datePicker.find({ name: 'terra-date-day-input', type: 'text' }).at(0);
  dateDayInput.simulate('change', { target: { value: '12' } });
  const dateYearInput = datePicker.find({ name: 'terra-date-year-input', type: 'text' }).at(0);
  dateYearInput.simulate('change', { target: { value: '2017' } });
  expect(() => {
    const hourInput = datePicker.find({ name: 'terra-time-hour-input' }).at(2);
    hourInput.simulate('change', { target: { value: '21' } });
    const minuteInput = datePicker.find({ name: 'terra-time-minute-input' }).at(2);
    minuteInput.simulate('change', { target: { value: '30' } });
  }).not.toThrowError();
});

it('should render a date time picker with the seconds field enabled', () => {
  const datePicker = shallowWithIntl(<DateTimePicker initialTimeZone="America/Chicago" name="date-time-input" showSeconds />);
  expect(datePicker).toMatchSnapshot();
});

it('should validate the hasTime helper', () => {
  expect(DateTimeUtils.hasTime('2019-06-10T16:00:01', 'America/Chicago')).toBe(true);
  expect(DateTimeUtils.hasTime('2019-06-10', 'America/Chicago')).toBe(false);
});

it('should validate the updateTime helper', () => {
  const updatedHM = DateTimeUtils.updateTime(moment.tz('2019-06-10T10:30:54', 'America/Chicago'), '16:00', false);
  // Directly comparing the moment objects fails due to differences in the parsedDateParts property
  expect(updatedHM.format()).toEqual(moment.tz('2019-06-10T16:00:00', 'America/Chicago').format());

  const updatedHMS = DateTimeUtils.updateTime(moment.tz('2019-06-10T10:30:54', 'America/Chicago'), '16:00:01', true);
  // Directly comparing the moment objects fails due to differences in the parsedDateParts property
  expect(updatedHMS.format()).toEqual(moment.tz('2019-06-10T16:00:01', 'America/Chicago').format());
});

it('should validate the getTime helper', () => {
  expect(DateTimeUtils.getTime('2019-06-10T16:00:01', false, 'America/Chicago')).toEqual('16:00');

  expect(DateTimeUtils.getTime('2019-06-10T16:00:01', true, 'America/Chicago')).toEqual('16:00:01');
});

it('should validate the isValidTime helper', () => {
  expect(DateTimeUtils.isValidTime('16:00', false)).toBe(true);
  expect(DateTimeUtils.isValidTime('16:00:01', false)).toBe(false);

  expect(DateTimeUtils.isValidTime('16:00', true)).toBe(false);
  expect(DateTimeUtils.isValidTime('16:00:01', true)).toBe(true);
});

it('should validate the checkAmbiguousTime helper', () => {
  const ambiguousDateTime = '2016-11-06T01:30:00';
  const nonAmbguousDateTime = '2016-11-06T06:00:00';

  // Ambiguous hour with timezone
  expect(DateTimeUtils.checkAmbiguousTime(moment.tz(ambiguousDateTime, 'America/Chicago'))).toBe(true);

  // Ambiguous hour with invalid timezone
  expect(DateTimeUtils.checkAmbiguousTime(moment.tz(ambiguousDateTime, 'Asia/Kolkata'))).toBe(false);

  // Non-Ambigous hour with timezone
  expect(DateTimeUtils.checkAmbiguousTime(moment.tz(nonAmbguousDateTime, 'America/Chicago'))).toBe(false);
});

it('should validate the createSafeDate helper', () => {
  const momentDate = moment.tz('2019-06-10T16:00:01', 'America/Los_Angeles');
  // Valid date and timzone
  expect(DateTimeUtils.createSafeDate('2019-06-10T16:00:01', 'America/Los_Angeles')).toEqual(momentDate);
  // Valid date and invalid timezone
  expect(DateTimeUtils.createSafeDate('2019-06-10T16:00:01', 'America/Test')).not.toEqual(momentDate);
  // Invalid date and invalid timezone
  expect(DateTimeUtils.createSafeDate('2019-06-35T16:00:01', 'America/Test')).toEqual(undefined);
});

it('correctly applies the theme context className', () => {
  const dateTime = shallowWithIntl(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <DateTimePicker initialTimeZone="America/Chicago" name="date-time-input" />
    </ThemeContextProvider>,
  );
  expect(dateTime).toMatchSnapshot();
});
