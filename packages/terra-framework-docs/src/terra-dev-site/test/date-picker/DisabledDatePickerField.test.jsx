import React from 'react';
import classNames from 'classnames/bind';
import DatePickerField from 'terra-date-picker/lib/DatePickerField';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const DisabledDatePickerField = () => (
  <div className={cx('content-wrapper')}>
    <DatePickerField
      label="Enter Date"
      name="date-input"
      selectedDate="2017-04-01"
      datePickerId="disabled-date-picker"
      disabled
    />
  </div>
);

export default DisabledDatePickerField;
