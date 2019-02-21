import React from 'react';
import { IntlProvider } from 'react-intl';
import DateTimePicker from '../../lib/DateTimePicker';
import messages from '../../translations/en-US.json';
import dateInputMessages from '../../node_modules/terra-date-picker/translations/en-US.json';
import timeInputMessages from '../../node_modules/terra-time-input/translations/en-US.json';

const locale = 'en-US';

it('should render a default date time picker', () => {
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-time-input" utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a default date time picker with custom date input attributes', () => {
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-time-input" utcOffset={0} dateInputAttributes={{ id: 'terra-date-input' }} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a default date time picker with custom time input attributes', () => {
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-time-input" utcOffset={0} timeInputAttributes={{ id: 'terra-time-input' }} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with filtered dates', () => {
  const isWeekday = (date) => {
    const day = date.day();
    return day !== 0 && day !== 6;
  };
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker filterDate={isWeekday} name="date-time-input" utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with disabled dates', () => {
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-time-input" excludeDates={['2017-04-01']} utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with included dates', () => {
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-time-input" includeDates={['2017-04-01']} utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with min and max dates', () => {
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-time-input" maxDateTime="2017-04-01" minDateTime="2017-04-10" utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with releaseFocus', () => {
  const releaseFocus = () => {};
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-time-input" releaseFocus={releaseFocus} utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with requestFocus', () => {
  const requestFocus = () => {};
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-time-input" requestFocus={requestFocus} utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with onChange', () => {
  const onChange = () => {};
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-time-input" onChange={onChange} utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with onChangeRaw', () => {
  const onChangeRaw = () => {};
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-time-input" onChangeRaw={onChangeRaw} utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a date time picker with a default date and time', () => {
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-time-input" value="2017-04-01T10:30" utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('should render a disabled date time picker', () => {
  const datePicker = shallow((
    <IntlProvider locale={locale} messages={messages}>
      <DateTimePicker name="date-time-input" disabled utcOffset={0} />
    </IntlProvider>));
  expect(datePicker).toMatchSnapshot();
});

it('Should not throw any errors while date value is outside of the Min, Max range and new time value is being entered ', () => {
  const allMessages = Object.assign(messages, dateInputMessages, timeInputMessages);

  const datePicker = mount((
    <IntlProvider locale={locale} messages={allMessages}>
      <DateTimePicker name="date-time-input" maxDateTime="2017-04-01T10:30" minDateTime="2017-04-10T10:30" />
    </IntlProvider>
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
