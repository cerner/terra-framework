import React from 'react';
import moment from 'moment-timezone';
import classNames from 'classnames/bind';
import DatePicker from 'terra-date-picker';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const isWeekdayOrToday = (date) => {
  const momentDate = moment(date);

  // Ensure if today is a weekend that the Today button doesn't get disabled and causes the screenshot to mismatch.
  if (momentDate.isSame(moment(), 'day')) {
    return true;
  }

  if (momentDate && momentDate.isValid()) {
    const day = momentDate.day();
    return day !== 0 && day !== 6;
  }

  return true;
};

const DatePickerFilterDates = () => (
  <div className={cx('content-wrapper')}>
    <DatePicker
      name="date-input"
      filterDate={isWeekdayOrToday}
    />
  </div>
);

export default DatePickerFilterDates;
