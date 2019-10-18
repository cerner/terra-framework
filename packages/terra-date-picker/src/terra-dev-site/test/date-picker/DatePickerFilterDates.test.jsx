import React from 'react';
import moment from 'moment';
import classNames from 'classnames/bind';
import DatePicker from '../../../DatePicker';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const isWeekday = (date) => {
  const momentDate = moment(date);

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
      filterDate={isWeekday}
    />
  </div>
);

export default DatePickerFilterDates;
