import React from 'react';
import IconHelp from 'terra-icon/lib/icon/IconHelp';
import moment from 'moment-timezone';
/* eslint-disable import/no-extraneous-dependencies */
import DateUtil from '../../lib/DateUtil';
import DatePickerField from '../../lib/DatePickerField';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

// Mock the following functions so that they always return a consistent date.
// Otherwise, a date with a different offset would be created based on the the timezone where the tests are executed.
DateUtil.createSafeDate = jest.fn();
DateUtil.filterInvalidDates = jest.fn();
DateUtil.createSafeDate.mockImplementation(() => moment.utc('2017-01-01'));
DateUtil.filterInvalidDates.mockImplementation(() => [moment.utc('2017-01-01')]);

it('should render a default DatePickerField component', () => {
  const datePickerField = <DatePickerField datePickerId="test-date-picker" name="test-date-picker" label="Label" />;
  const wrapper = mountWithIntl(datePickerField);
  expect(wrapper).toMatchSnapshot();
});

it('should render a DatePickerField with props', () => {
  const datePickerField = (
    <DatePickerField
      datePickerId="test-date-picker"
      error="Text"
      errorIcon={<IconHelp />}
      help="Help"
      hideRequired
      inputAttributes={{
        name: 'test',
      }}
      isInline
      isLabelHidden
      label="Label Test"
      labelAttrs={{
        className: 'label',
      }}
      onBlur={() => {}}
      onChange={() => {}}
      onChangeRaw={() => {}}
      onFocus={() => {}}
      onSelect={() => {}}
      onClickOutside={() => {}}
      onRequestClose={() => {}}
      showOptional
      excludeDates={['2017-04-03']}
      filterDate={() => {}}
      minDate="2017-04-01"
      maxDate="2017-04-10"
      maxWidth="25px"
      name="test-date-picker"
      required
      isInvalid
      disabled
      selectedDate="2017-04-09"
      value="2017-04-09"
    />
  );

  const wrapper = mountWithIntl(datePickerField);
  expect(wrapper).toMatchSnapshot();
});

it('should render a valid DatePickerField with props', () => {
  const datePickerField = (
    <DatePickerField
      datePickerId="test-date-picker"
      error="Text"
      errorIcon={<IconHelp />}
      help="Help"
      hideRequired
      inputAttributes={{
        name: 'test',
      }}
      isInline
      isLabelHidden
      label="Label Test"
      labelAttrs={{
        className: 'label',
      }}
      onChange={() => {}}
      onChangeRaw={() => {}}
      onBlur={() => {}}
      onSelect={() => {}}
      onClickOutside={() => {}}
      onFocus={() => {}}
      showOptional
      excludeDates={['2017-04-03']}
      filterDate={() => {}}
      minDate="2017-04-01"
      maxDate="2017-04-10"
      maxWidth="25px"
      name="test-date-picker"
      required
      disabled
      selectedDate="2017-04-09"
    />
  );

  const wrapper = mountWithIntl(datePickerField);
  expect(wrapper).toMatchSnapshot();
});
