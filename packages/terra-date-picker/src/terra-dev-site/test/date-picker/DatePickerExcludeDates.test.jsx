import React from 'react';
import classNames from 'classnames/bind';
import DatePicker from '../../../DatePicker';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const DatePickerExcludeDates = () => (
  <div className={cx('content-wrapper')}>
    <DatePicker
      name="date-input"
      excludeDates={['2017-04-01', '2017-04-03']}
      selectedDate="2017-04-02"
    />
  </div>

);

export default DatePickerExcludeDates;
