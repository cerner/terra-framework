import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import DatePicker from './DatePicker';
import styles from './CalendarFilter.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * An array of ISO 8601 string representation of the dates to disable in the picker. The values must be in the `YYYY-MM-DD` format.
   */
  excludeDates: PropTypes.arrayOf(PropTypes.string),
  /**
   * A function that gets called for each date in the picker to evaluate which date should be disabled.
   * A return value of true will be enabled and false will be disabled.
   */
  filterDate: PropTypes.func,
  /**
   * An array of ISO 8601 string representation of the dates to enable in the picker. All Other dates will be disabled. The values must be in the `YYYY-MM-DD` format.
   */
  includeDates: PropTypes.arrayOf(PropTypes.string),
  /**
   * An ISO 8601 string representation of the maximum date that can be selected. The value must be in the YYYY-MM-DD format. Must be before 12/31/2100
   */
  maxDate: PropTypes.string,
  /**
   * An ISO 8601 string representation of the minimum date that can be selected. The value must be in the `YYYY-MM-DD` format. Must be after 01/01/1900
   */
  minDate: PropTypes.string,
  /**
   * A callback function to execute when a valid date is selected or entered.
   * The first parameter is the event. The second parameter is the changed date value. The third parameter is the selected date value formatted based on the locale at the time when the onChange callback is triggered.
   */
  onChange: PropTypes.func,
  /**
   * An ISO 8601 string representation of the default value to show in the calendar-filter.
   * The value must be in the `YYYY-MM-DD` format and value should be valid date which is not part of exluded date values OR out of range date values.
   * defaults to current date if not provided.
   */
  selectedDate: PropTypes.string,
  /**
   * The date value. This prop should only be used for a controlled calendar-filter.
   * When this prop is set a handler is needed for `onSelect` props to manage the date value.
   * If both `selectedDate` and this prop are set, then `selectedDate` will have no effect.
   * The value must be in the `YYYY-MM-DD` format or the all-numeric date format based on the locale.
   */
  value: PropTypes.string,
};

const defaultProps = {
  excludeDates: undefined,
  filterDate: undefined,
  includeDates: undefined,
  maxDate: '2100-12-31',
  minDate: '1900-01-01',
  onChange: undefined,
  selectedDate: undefined,
};

const CalendarFilter = ({
  excludeDates,
  filterDate,
  includeDates,
  maxDate,
  minDate,
  onChange,
  selectedDate,
  value,
  ...customProps
}) => {
  const handleOnChange = useCallback((event, date, metaData) => {
    if (onChange) {
      const { inputValue: formattedDateValue } = metaData;
      onChange(event, date, formattedDateValue);
    }
  }, [onChange]);

  return (
    <DatePicker
      {...customProps}
      name="terra-calendar-filter"
      inline
      hidePortal
      selectedDate={selectedDate}
      value={value}
      onChange={handleOnChange}
      excludeDates={excludeDates}
      filterDate={filterDate}
      includeDates={includeDates}
      maxDate={maxDate}
      minDate={minDate}
      calendarClassName={cx('calendar-filter')}
    />
  );
};

CalendarFilter.propTypes = propTypes;
CalendarFilter.defaultProps = defaultProps;

export default CalendarFilter;
