import React from 'react';
import classNames from 'classnames/bind';
import DatePicker from 'terra-date-picker';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const DatePickerDefaultDateExcluded = () => (
  <div className={cx('content-wrapper')}>
    <h3>Extraneous Clickable Text</h3>
    <DatePicker
      name="date-input"
      excludeDates={['2017-04-03', '2017-04-04', '2017-04-05', '2017-04-06', '2017-04-07']}
      selectedDate="2017-04-05"
    />
  </div>
);

export default DatePickerDefaultDateExcluded;
