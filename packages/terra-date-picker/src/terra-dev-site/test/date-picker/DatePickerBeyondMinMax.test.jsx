import React, { useState } from 'react';
import classNames from 'classnames/bind';
import DatePicker from '../../../DatePicker';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const DatePickerBeyondMinMax = () => {
  const [date, setDate] = useState('');

  const handleDateChange = (event, dateValue) => {
    setDate(dateValue);
  };

  const handleDateChangeRaw = (event, dateValue, metadata) => {
    if (!metadata.isValidValue) {
      setDate(null);
    }
  };

  return (
    <div>
      <p>
        Selected ISO Date:
        <span className={cx('date-wrapper')}>{date}</span>
      </p>
      <DatePicker
        name="date-input"
        selectedDate="2100-12-25"
        onChange={handleDateChange}
        onChangeRaw={handleDateChangeRaw}
        minDate="1899-05-20"
        maxDate="2101-05-20"
      />
    </div>
  );
};

export default DatePickerBeyondMinMax;

