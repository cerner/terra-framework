import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import DateTimePicker from '../../lib/DateTimePicker';

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
  const datePicker = shallowWithIntl(<DateTimePicker filterDate={() => {}} name="date-time-input" utcOffset={0} />);
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
  const datePicker = shallowWithIntl(<DateTimePicker name="date-time-input" maxDateTime="2017-04-01" minDateTime="2017-04-10" utcOffset={0} />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with releaseFocus', () => {
  const releaseFocus = () => {};
  const datePicker = shallowWithIntl(<DateTimePicker name="date-time-input" releaseFocus={releaseFocus} utcOffset={0} />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with requestFocus', () => {
  const requestFocus = () => {};
  const datePicker = shallowWithIntl(<DateTimePicker name="date-time-input" requestFocus={requestFocus} utcOffset={0} />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with onChange', () => {
  const onChange = () => {};
  const datePicker = shallowWithIntl(<DateTimePicker name="date-time-input" onChange={onChange} utcOffset={0} />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with onChangeRaw', () => {
  const onChangeRaw = () => {};
  const datePicker = shallowWithIntl(<DateTimePicker name="date-time-input" onChangeRaw={onChangeRaw} utcOffset={0} />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with a default date and time', () => {
  const datePicker = shallowWithIntl(<DateTimePicker name="date-time-input" value="2017-04-01T10:30" utcOffset={0} />);
  expect(datePicker).toMatchSnapshot();
});

it('should render a disabled date time picker', () => {
  const datePicker = shallowWithIntl(<DateTimePicker name="date-time-input" disabled utcOffset={0} />);
  expect(datePicker).toMatchSnapshot();
});

it('Should not throw any errors while date value is outside of the Min, Max range and new time value is being entered ', () => {
  const datePicker = mountWithIntl((
    <DateTimePicker name="date-time-input" maxDateTime="2017-04-01T10:30" minDateTime="2017-04-10T10:30" />
  ));

  const dateInput = datePicker.find({ name: 'terra-date-input', type: 'text' }).at(0);
  dateInput.simulate('change', { target: { value: '04/12/2017' } });
  expect(() => {
    const hourInput = datePicker.find({ name: 'terra-time-hour-input' }).at(0);
    hourInput.simulate('change', { target: { value: '21' } });
    const minuteInput = datePicker.find({ name: 'terra-time-minute-input' }).at(0);
    minuteInput.simulate('change', { target: { value: '30' } });
  }).not.toThrowError();
});
