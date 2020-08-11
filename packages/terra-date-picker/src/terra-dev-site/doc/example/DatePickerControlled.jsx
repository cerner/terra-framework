import React, { useState } from 'react';
import moment from 'moment';
import Field from 'terra-form-field';
import DatePicker from 'terra-date-picker';
import classNames from 'classnames/bind';
import styles from './DatePickerExampleCommon.module.scss';

const cx = classNames.bind(styles);

const DatePickerExampleControlled = () => {
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));

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
      <Field label="Enter Date" htmlFor="controlled-dates">
        <DatePicker
          name="controlled-input"
          id="controlled-dates"
          onChange={handleDateChange}
          onChangeRaw={handleDateChangeRaw}
          value={date}
        />
      </Field>
    </div>
  );
};

export default DatePickerExampleControlled;
