import React from 'react';
import classNames from 'classnames/bind';
import DatePicker from '../../../DatePicker';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const DatePickerIncludeDates = () => (
  <div className={cx('content-wrapper')}>
    <DatePicker
      name="date-input"
      includeDates={['2017-04-01', '2017-04-02', '2017-04-03']}
    />
  </div>

);

export default DatePickerIncludeDates;
