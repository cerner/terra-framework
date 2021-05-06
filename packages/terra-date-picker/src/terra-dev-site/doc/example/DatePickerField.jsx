import React, { useState } from 'react';
import classNames from 'classnames/bind';
import DatePickerField from 'terra-date-picker/lib/DatePickerField';
import styles from './DatePickerExampleCommon.module.scss';

const cx = classNames.bind(styles);

const DatePickerFieldExample = () => {
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
      <DatePickerField
        label="Enter Date"
        name="date-input"
        datePickerId="default-field"
        onChange={handleDateChange}
        onChangeRaw={handleDateChangeRaw}
      />
    </div>
  );
};

export default DatePickerFieldExample;
