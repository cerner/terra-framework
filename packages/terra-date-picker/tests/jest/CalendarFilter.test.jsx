import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import moment from 'moment-timezone';
import CalendarFilter from '../../lib/CalendarFilter';
import DateUtil from '../../lib/DateUtil';

// Mock the following functions so that they always return a consistent date.
// Otherwise, a date with a different offset would be created based on the the timezone where the tests are executed.
DateUtil.createSafeDate = jest.fn();
DateUtil.filterInvalidDates = jest.fn();
DateUtil.createSafeDate.mockImplementation(() => moment.utc('2020-01-01'));
DateUtil.filterInvalidDates.mockImplementation(() => [moment.utc('2020-01-01')]);

it('should render a calendar filter with default date', () => {
  const calendarFilter = enzymeIntl.shallowWithIntl(<CalendarFilter name="date-input" selectedDate="2020-06-01" />);
  const wrapper = calendarFilter.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a calendar filter with filtered dates', () => {
  const calendarFilter = enzymeIntl.shallowWithIntl(<CalendarFilter filterDate={() => {}} />);
  const wrapper = calendarFilter.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a calendar filter with excluded dates', () => {
  const calendarFilter = enzymeIntl.shallowWithIntl(<CalendarFilter excludeDates={['2020-04-01']} />);
  const wrapper = calendarFilter.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a calendar filter with included dates', () => {
  const calendarFilter = enzymeIntl.shallowWithIntl(<CalendarFilter includeDates={['2020-04-01']} />);
  const wrapper = calendarFilter.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a calendar filter with min and max dates', () => {
  const calendarFilter = enzymeIntl.shallowWithIntl(<CalendarFilter minDate="2020-04-01" maxDate="2020-04-10" />);
  const wrapper = calendarFilter.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a calendar filter with onChange', () => {
  const onChange = () => {};
  const calendarFilter = enzymeIntl.shallowWithIntl(<CalendarFilter selectedDate="2020-06-01" onChange={onChange} />);
  const wrapper = calendarFilter.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a controlled calendar filter', () => {
  const calendarFilter = enzymeIntl.shallowWithIntl(<CalendarFilter value="2020-06-15" />);
  const wrapper = calendarFilter.dive();
  expect(wrapper).toMatchSnapshot();
});
