import React, { useState } from 'react';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import DatePicker from 'terra-date-picker';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const DatePickerControlled = () => {
  const [date, setDate] = useState('2019-03-07');

  const handleDateChange = (event, dateValue) => {
    setDate(dateValue);
  };

  const handleDateChangeRaw = (event, dateValue) => {
    setDate(dateValue);
  };

  const handleSelectedDateUpdate = (event) => {
    setDate(event.currentTarget.textContent);
  };

  return (
    <div className={cx('content-wrapper')}>
      <DatePicker
        name="controlled-date-picker"
        value={date}
        onChange={handleDateChange}
        onChangeRaw={handleDateChangeRaw}
      />
      {'  '}
      <Button
        id="button5"
        text="02/30/2023"
        onClick={handleSelectedDateUpdate}
      />
    </div>
  );
};

export default DatePickerControlled;
