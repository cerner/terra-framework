import React from 'react';
import classNames from 'classnames/bind';
import DatePicker from '../../../DatePicker';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const DatePickerDefault = () => (
  <div className={cx('content-wrapper')}>
    <DatePicker
      name="date-input"
    />
  </div>
);

export default DatePickerDefault;
