import React from 'react';
import moment from 'moment-timezone';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import DateTimePicker from '../../lib/DateTimePicker';
import DateTimeUtils from '../../lib/DateTimeUtils';

it('should render a default date time picker', () => {
  const datePicker = shallowWithIntl(<DateTimePicker name="date-time-input" utcOffset={0} />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a default date time picker with custom date input attributes', () => {
  const datePicker = shallowWithIntl(<DateTimePicker name="date-time-input" utcOffset={0} dateInputAttributes={{ id: 'terra-date-input' }} />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a default date time picker with custom time input attributes', () => {
  const datePicker = shallowWithIntl(<DateTimePicker name="date-time-input" utcOffset={0} timeInputAttributes={{ id: 'terra-time-input' }} />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with filtered dates', () => {
  const datePicker = shallowWithIntl(<DateTimePicker filterDate={() => { }} name="date-time-input" utcOffset={0} />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with disabled dates', () => {
  const datePicker = shallowWithIntl(<DateTimePicker name="date-time-input" excludeDates={['2017-04-01']} utcOffset={0} />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with included dates', () => {
  const datePicker = shallowWithIntl(<DateTimePicker name="date-time-input" includeDates={['2017-04-01']} utcOffset={0} />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with min and max dates', () => {
  const datePicker = shallowWithIntl(<DateTimePicker name="date-time-input" maxDate="2017-04-01" minDate="2017-04-10" utcOffset={0} />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with onBlur', () => {
  const onBlur = () => { };
  const datePicker = shallowWithIntl(<DateTimePicker name="date-time-input" onBlur={onBlur} utcOffset={0} />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with onChange', () => {
  const onChange = () => { };
  const datePicker = shallowWithIntl(<DateTimePicker name="date-time-input" onChange={onChange} utcOffset={0} />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with onChangeRaw', () => {
  const onChangeRaw = () => { };
  const datePicker = shallowWithIntl(<DateTimePicker name="date-time-input" onChangeRaw={onChangeRaw} utcOffset={0} />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with a default date and time', () => {
  const datePicker = shallowWithIntl(<DateTimePicker name="date-time-input" value="2017-04-01T10:30" utcOffset={0} />);
  expect(datePicker).toMatchSnapshot();
});

it('should render with a default timeVariant if variant is not specified', () => {
  const defaultTimeVariant = '24-hour';
  const datePicker = shallowWithIntl(<DateTimePicker name="date-time-input" value="2017-04-01T10:30" utcOffset={0} />);
  expect(datePicker.prop('timeVariant')).toBe(defaultTimeVariant);
  expect(datePicker).toMatchSnapshot();
});

it('should render a disabled date time picker', () => {
  const datePicker = shallowWithIntl(<DateTimePicker name="date-time-input" disabled utcOffset={0} />);
  expect(datePicker).toMatchSnapshot();
});

it('Should not throw any errors while date value is outside of the Min, Max range and new time value is being entered ', () => {
  const datePicker = mountWithIntl((
    <DateTimePicker name="date-time-input" maxDate="2017-04-01T10:30" minDate="2017-04-10T10:30" />
  ));

  const dateMonthInput = datePicker.find({ name: 'terra-date-month-input', type: 'text' }).at(0);
  dateMonthInput.simulate('change', { target: { value: '04' } });
  const dateDayInput = datePicker.find({ name: 'terra-date-day-input', type: 'text' }).at(0);
  dateDayInput.simulate('change', { target: { value: '12' } });
  const dateYearInput = datePicker.find({ name: 'terra-date-year-input', type: 'text' }).at(0);
  dateYearInput.simulate('change', { target: { value: '2017' } });
  expect(() => {
    const hourInput = datePicker.find({ name: 'terra-time-hour-input' }).at(0);
    hourInput.simulate('change', { target: { value: '21' } });
    const minuteInput = datePicker.find({ name: 'terra-time-minute-input' }).at(0);
    minuteInput.simulate('change', { target: { value: '30' } });
  }).not.toThrowError();
});

it('should render a date time picker with the seconds field enabled', () => {
  const datePicker = shallowWithIntl(<DateTimePicker name="date-time-input" utcOffset={0} showSeconds />);
  expect(datePicker).toMatchSnapshot();
});

it('should validate the hasTime helper', () => {
  expect(DateTimeUtils.hasTime('2019-06-10T16:00:01')).toBe(true);
  expect(DateTimeUtils.hasTime('2019-06-10')).toBe(false);
});

it('should validate the updateTime helper', () => {
  const updatedHM = DateTimeUtils.updateTime(moment('2019-06-10T10:30:54'), '16:00', false);
  // Directly comparing the moment objects fails due to differences in the parsedDateParts property
  expect(updatedHM.format()).toEqual(moment('2019-06-10T16:00:54').format());

  const updatedHMS = DateTimeUtils.updateTime(moment('2019-06-10T10:30:54'), '16:00:01', true);
  // Directly comparing the moment objects fails due to differences in the parsedDateParts property
  expect(updatedHMS.format()).toEqual(moment('2019-06-10T16:00:01').format());
});

it('should validate the getTime helper', () => {
  expect(DateTimeUtils.getTime('2019-06-10T16:00:01', false)).toEqual('16:00');

  expect(DateTimeUtils.getTime('2019-06-10T16:00:01', true)).toEqual('16:00:01');
});

it('should validate the isValidTime helper', () => {
  expect(DateTimeUtils.isValidTime('16:00', false)).toBe(true);
  expect(DateTimeUtils.isValidTime('16:00:01', false)).toBe(false);

  expect(DateTimeUtils.isValidTime('16:00', true)).toBe(false);
  expect(DateTimeUtils.isValidTime('16:00:01', true)).toBe(true);
});

it('correctly applies the theme context className', () => {
  const dateTime = shallowWithIntl(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <DateTimePicker name="date-time-input" utcOffset={0} />
    </ThemeContextProvider>,
  );
  expect(dateTime).toMatchSnapshot();
});
