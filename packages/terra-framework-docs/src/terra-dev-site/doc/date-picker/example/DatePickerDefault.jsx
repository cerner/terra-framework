import React, { useState } from 'react';
import Field from 'terra-form-field';
import DatePicker from 'terra-date-picker';
import classNames from 'classnames/bind';
import styles from './DatePickerExampleCommon.module.scss';

const cx = classNames.bind(styles);

const DatePickerExampleDefault = () => {
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
      <Field label="Enter Date" htmlFor="default">
        <DatePicker
          ariaLabel="Enter Date"
          name="date-input"
          id="default"
          onChange={handleDateChange}
          onChangeRaw={handleDateChangeRaw}
          isInvalid={invalid}
        />
      </Field>
    </div>
  );
};

export default DatePickerExampleDefault;
