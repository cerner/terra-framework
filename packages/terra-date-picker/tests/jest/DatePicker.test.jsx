import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import moment from 'moment-timezone';
import DatePicker from '../../lib/DatePicker';
import DateUtil from '../../lib/DateUtil';

// Mock the following functions so that they always return a consistent date.
// Otherwise, a date with a different offset would be created based on the the timezone where the tests are executed.
DateUtil.createSafeDate = jest.fn();
DateUtil.filterInvalidDates = jest.fn();
DateUtil.createSafeDate.mockImplementation(() => moment.utc('2017-01-01'));
DateUtil.filterInvalidDates.mockImplementation(() => [moment.utc('2017-01-01')]);

jest.mock('uuid/v4', () => () => '00000000-0000-0000-0000-000000000000');

it('should render a default date input and date picker', () => {
  const datePicker = shallowWithIntl(<DatePicker name="date-input" />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a default date input with custom input attributes', () => {
  const datePicker = shallowWithIntl(<DatePicker name="date-input" inputAttributes={{ id: 'terra-date-input' }} />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with filtered dates', () => {
  const datePicker = shallowWithIntl(<DatePicker filterDate={() => {}} name="date-input" />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with disabled dates', () => {
  const datePicker = shallowWithIntl(<DatePicker name="date-input" excludeDates={['2017-04-01']} />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with included dates', () => {
  const datePicker = shallowWithIntl(<DatePicker name="date-input" includeDates={['2017-04-01']} />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with min and max dates', () => {
  const datePicker = shallowWithIntl(<DatePicker name="date-input" minDate="2017-04-01" maxDate="2017-04-10" />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with onBlur', () => {
  const onBlur = () => {};
  const datePicker = shallowWithIntl(<DatePicker name="date-input" onBlur={onBlur} />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with onChange', () => {
  const onChange = () => {};
  const datePicker = shallowWithIntl(<DatePicker name="date-input" onChange={onChange} />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with onChangeRaw', () => {
  const onChangeRaw = () => {};
  const datePicker = shallowWithIntl(<DatePicker name="date-input" onChangeRaw={onChangeRaw} />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with onSelect', () => {
  const onSelect = () => {};
  const datePicker = shallowWithIntl(<DatePicker name="date-input" onSelect={onSelect} />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with onCalendarButtonClick', () => {
  const handleOnCalendarButtonClick = () => {};
  const datePicker = shallowWithIntl(<DatePicker name="date-input" onCalendarButtonClick={handleOnCalendarButtonClick} />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a date picker with onFocus', () => {
  const datePicker = shallowWithIntl(<DatePicker name="date-input" onFocus={() => {}} />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a disabled date picker', () => {
  const datePicker = shallowWithIntl(<DatePicker name="date-input" disabled />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a required date input and date picker', () => {
  const datePicker = shallowWithIntl(<DatePicker name="date-input" required />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a controlled date picker', () => {
  const datePicker = shallowWithIntl(<DatePicker name="date-input" value="2019-06-15" />);
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
  const datePicker = mountWithIntl(<DatePicker name="date-input" />);

  // open calendar
  datePicker.find('button').simulate('click');

  expect(datePicker.find('.react-datepicker-arrow').length).toBeGreaterThan(0);

  triggerDomResize(defaultDomWidth);
});

it('should render a modal date picker', () => {
  const defaultDomWidth = global.innerWidth;

  triggerDomResize(500);
  const datePicker = mountWithIntl(<DatePicker name="date-input" />);

  // open calendar
  datePicker.find('button').simulate('click');

  expect(datePicker.find('.react-datepicker-portal')).toHaveLength(1);

  triggerDomResize(defaultDomWidth);
});

it('correctly applies the theme context className', () => {
  const date = mountWithIntl(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <DatePicker name="date-input" />
    </ThemeContextProvider>,
  );
  expect(date).toMatchSnapshot();
});

it('should render a date picker with onRequestClose', () => {
  const datePicker = shallowWithIntl(<DatePicker name="date-input" onRequestClose={() => {}} />);
  const wrapper = datePicker.dive();
  expect(wrapper).toMatchSnapshot();
});
