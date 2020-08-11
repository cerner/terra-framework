import React, { useState } from 'react';
import moment from 'moment';
import Field from 'terra-form-field';
import DatePicker from 'terra-date-picker';
import classNames from 'classnames/bind';
import styles from './DatePickerExampleCommon.module.scss';

const cx = classNames.bind(styles);

const DatePickerExampleExcludeDates = () => {
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
      <Field label="Enter Date" htmlFor="exclude-dates">
        <DatePicker
          name="date-input"
          id="exclude-dates"
          onChange={handleDateChange}
          onChangeRaw={handleDateChangeRaw}
          excludeDates={[moment().subtract(1, 'days').format(), moment().add(1, 'days').format()]}
        />
      </Field>
    </div>
  );
};

export default DatePickerExampleExcludeDates;
