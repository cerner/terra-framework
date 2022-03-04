import React, { useState } from 'react';
import classNames from 'classnames/bind';
import DatePicker from 'terra-date-picker';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const DatePickerOnSelect = () => {
  const [date, setDate] = useState('');

  const handleDateSelect = (event, dateValue) => {
    setDate(dateValue);
  };

  return (
    <div className={cx('content-wrapper')}>
      <h3>
        Selected Date:
        {' '}
        <span id="selected-date">{date}</span>
      </h3>
      <DatePicker
        name="date-input-onselect"
        onSelect={handleDateSelect}
      />
    </div>
  );
};

export default DatePickerOnSelect;
