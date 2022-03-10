import React from 'react';
import classNames from 'classnames/bind';
import DatePicker from 'terra-date-picker';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const DatePickerDisabled = () => (
  <div className={cx('content-wrapper')}>
    <DatePicker
      name="date-input"
      selectedDate="2017-04-01"
      disabled
    />
  </div>
);

export default DatePickerDisabled;
