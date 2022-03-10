import React from 'react';
import classNames from 'classnames/bind';
import DatePicker from 'terra-date-picker';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const DatePickerMinMax = () => (
  <div className={cx('content-wrapper')}>
    <DatePicker
      name="date-input"
      minDate="2017-04-01"
      maxDate="2017-04-10"
    />
  </div>

);

export default DatePickerMinMax;
