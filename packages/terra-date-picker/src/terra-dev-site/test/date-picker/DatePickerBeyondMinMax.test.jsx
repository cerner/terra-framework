import React from 'react';
import classNames from 'classnames/bind';
import DatePicker from '../../../DatePicker';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const DatePickerBeyondMinMax = () => (
  <DatePicker
    name="date-input"
    minDate="1899-05-20"
    maxDate="2101-05-20"
    selectedDate="2100-12-25"
  />
);

export default DatePickerBeyondMinMax;
