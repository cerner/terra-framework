import React, { useState } from 'react';
import Field from 'terra-form-field';
import moment from 'moment-timezone';
import DatePicker from 'terra-date-picker';
import classNames from 'classnames/bind';
import styles from './DatePickerExampleCommon.module.scss';

const cx = classNames.bind(styles);

const DatePickerExampleFilterDates = () => {
  const [date, setDate] = useState('');

  const handleDateChange = (event, dateValue) => {
    setDate(dateValue);
  };

  const handleDateChangeRaw = (event, dateValue, metadata) => {
    if (!metadata.isValidValue) {
      setDate(null);
    }
  };

  const isWeekday = (dateValue) => {
    const momentDate = moment(dateValue);

    if (momentDate && momentDate.isValid()) {
      const day = momentDate.day();
      return day !== 0 && day !== 6;
    }

    return true;
  };

  return (
    <div>
      <p>
        Selected ISO Date:
        <span className={cx('date-wrapper')}>{date}</span>
      </p>
      <Field label="Enter Date" htmlFor="filter-dates">
        <DatePicker
          name="date-input"
          id="filter-dates"
          onChange={handleDateChange}
          onChangeRaw={handleDateChangeRaw}
          filterDate={isWeekday}
        />
      </Field>
    </div>
  );
};

export default DatePickerExampleFilterDates;
