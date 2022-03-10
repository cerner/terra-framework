import React, { useState } from 'react';
import moment from 'moment-timezone';
import Field from 'terra-form-field';
import DatePicker from 'terra-date-picker';
import classNames from 'classnames/bind';
import styles from './DatePickerExampleCommon.module.scss';

const cx = classNames.bind(styles);

const DatePickerExampleDefaultDate = () => {
  const todaysDate = moment().format('YYYY-MM-DD');
  const [date, setDate] = useState(todaysDate);

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
      <Field label="Enter Date" htmlFor="defaultedDate">
        <DatePicker
          name="date-input"
          id="defaultedDate"
          onChange={handleDateChange}
          onChangeRaw={handleDateChangeRaw}
          selectedDate={todaysDate}
        />
      </Field>
    </div>
  );
};

export default DatePickerExampleDefaultDate;
