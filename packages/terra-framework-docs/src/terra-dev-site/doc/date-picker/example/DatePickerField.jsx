import React, { useState } from 'react';
import classNames from 'classnames/bind';
import DatePickerField from 'terra-date-picker/lib/DatePickerField';
import styles from './DatePickerExampleCommon.module.scss';

const cx = classNames.bind(styles);

const DatePickerFieldExample = () => {
  const [date, setDate] = useState('');
  const [invalid, setInValid] = useState(false);

  const handleDateChange = (event, dateValue) => {
    setDate(dateValue);
    setInValid(false);
  };

  const handleDateChangeRaw = (event, dateValue, metadata) => {
    if (!metadata.isValidValue && metadata.inputValue.length === 10) {
      setDate(null);
      setInValid(true);
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
        isInvalid={invalid}
        error={<p>Enter valid date</p>}
      />
    </div>
  );
};

export default DatePickerFieldExample;
