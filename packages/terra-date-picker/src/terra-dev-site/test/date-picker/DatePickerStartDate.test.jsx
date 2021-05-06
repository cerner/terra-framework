import React from 'react';
import classNames from 'classnames/bind';
import DatePicker from '../../../DatePicker';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const DatePickerStartDate = () => (
  <div className={cx('content-wrapper')}>
    <DatePicker
      name="date-input"
      selectedDate="2017-04-01"
    />
  </div>
);

export default DatePickerStartDate;
