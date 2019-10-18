import React from 'react';
import classNames from 'classnames/bind';
import DatePicker from '../../../DatePicker';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const DatePickerDefaultDateOutOfRange = () => (
  <div className={cx('content-wrapper')}>
    <h3>Extraneous Clickable Text</h3>
    <DatePicker
      name="date-input"
      minDate="2017-04-10"
      maxDate="2017-04-20"
      selectedDate="2017-04-01"
    />
  </div>
);

export default DatePickerDefaultDateOutOfRange;
