import React, { useState } from 'react';
import moment from 'moment-timezone';
import Field from 'terra-form-field';
import DatePicker from 'terra-date-picker';
import classNames from 'classnames/bind';
import styles from './DatePickerExampleCommon.module.scss';

const cx = classNames.bind(styles);

const DatePickerExampleMinMax = () => {
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
      <Field label="Enter Date" htmlFor="min-max-dates">
        <DatePicker
          name="date-input"
          id="min-max-dates"
          onChange={handleDateChange}
          onChangeRaw={handleDateChangeRaw}
          minDate={moment().format()}
          maxDate={moment().add(6, 'days').format()}
        />
      </Field>
    </div>
  );
};

export default DatePickerExampleMinMax;
