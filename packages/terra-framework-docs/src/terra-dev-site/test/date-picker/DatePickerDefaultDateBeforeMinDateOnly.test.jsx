import React from 'react';
import classNames from 'classnames/bind';
import DatePicker from 'terra-date-picker';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const DatePickerDefaultDateBeforeMinDateOnly = () => (
  <div className={cx('content-wrapper')}>
    <h3>minDate Only</h3>
    <DatePicker
      name="date-input"
      minDate="2017-04-02T12:00"
      selectedDate="2017-04-01T12:00"
    />
  </div>
);

export default DatePickerDefaultDateBeforeMinDateOnly;
