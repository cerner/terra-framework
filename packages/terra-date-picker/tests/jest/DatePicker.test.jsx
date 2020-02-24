import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import moment from 'moment';
import DatePicker from '../../lib/DatePicker';
import DateUtil from '../../lib/DateUtil';

// Mock the following functions so that they always return a consistent date.
// Otherwise, a date with a different offset would be created based on the the timezone where the tests are executed.
DateUtil.createSafeDate = jest.fn();
DateUtil.filterInvalidDates = jest.fn();
DateUtil.createSafeDate.mockImplementation(() => moment.utc('2017-01-01'));
DateUtil.filterInvalidDates.mockImplementation(() => [moment.utc('2017-01-01')]);

it('should render a default date input and date picker', () => {
  const datePicker = shallowWithIntl(<DatePicker name="date-input" utcOffset={0} />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a default date input with custom input attributes', () => {
  const datePicker = shallowWithIntl(<DatePicker name="date-input" utcOffset={0} inputAttributes={{ id: 'terra-date-input' }} />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with filtered dates', () => {
  const datePicker = shallowWithIntl(<DatePicker filterDate={() => {}} name="date-input" utcOffset={0} />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with disabled dates', () => {
  const datePicker = shallowWithIntl(<DatePicker name="date-input" excludeDates={['2017-04-01']} utcOffset={0} />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with included dates', () => {
  const datePicker = shallowWithIntl(<DatePicker name="date-input" includeDates={['2017-04-01']} utcOffset={0} />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with min and max dates', () => {
  const datePicker = shallowWithIntl(<DatePicker name="date-input" minDate="2017-04-01" maxDate="2017-04-10" utcOffset={0} />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with onBlur', () => {
  const onBlur = () => {};
  const datePicker = shallowWithIntl(<DatePicker name="date-input" onBlur={onBlur} utcOffset={0} />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with onChange', () => {
  const onChange = () => {};
  const datePicker = shallowWithIntl(<DatePicker name="date-input" onChange={onChange} utcOffset={0} />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with onChangeRaw', () => {
  const onChangeRaw = () => {};
  const datePicker = shallowWithIntl(<DatePicker name="date-input" onChangeRaw={onChangeRaw} utcOffset={0} />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with onSelect', () => {
  const onSelect = () => {};
  const datePicker = shallowWithIntl(<DatePicker name="date-input" onSelect={onSelect} utcOffset={0} />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with onCalendarButtonClick', () => {
  const handleOnCalendarButtonClick = () => {};
  const datePicker = shallowWithIntl(<DatePicker name="date-input" onCalendarButtonClick={handleOnCalendarButtonClick} utcOffset={0} />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with onFocus', () => {
  const datePicker = shallowWithIntl(<DatePicker name="date-input" onFocus={() => {}} utcOffset={0} />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a disabled date picker', () => {
  const datePicker = shallowWithIntl(<DatePicker name="date-input" disabled utcOffset={0} />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a required date input and date picker', () => {
  const datePicker = shallowWithIntl(<DatePicker name="date-input" utcOffset={0} required />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a controlled date picker', () => {
  const datePicker = shallowWithIntl(<DatePicker name="date-input" value="2019-06-15" utcOffset={0} />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

const triggerDomResize = (width) => {
  global.innerWidth = width;
  // Trigger the window resize event.
  global.dispatchEvent(new Event('resize'));
};

it('should render a pop-up date picker', () => {
  const defaultDomWidth = global.innerWidth;

  triggerDomResize(1000);
  const datePicker = mountWithIntl(<DatePicker name="date-input" utcOffset={0} />);

  // open calendar
  datePicker.find('button').simulate('click');

  expect(datePicker.find('.react-datepicker-arrow').length).toBeGreaterThan(0);

  triggerDomResize(defaultDomWidth);
});

it('should render a modal date picker', () => {
  const defaultDomWidth = global.innerWidth;

  triggerDomResize(500);
  const datePicker = mountWithIntl(<DatePicker name="date-input" utcOffset={0} />);

  // open calendar
  datePicker.find('button').simulate('click');

  expect(datePicker.find('.react-datepicker-portal')).toHaveLength(1);

  triggerDomResize(defaultDomWidth);
});
