import React, { useState } from 'react';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import DatePicker from '../../../DatePicker';
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
        id="button1"
        text=""
        onClick={handleSelectedDateUpdate}
      />
      {'  '}
      <Button
        id="button2"
        text="01/01/2019"
        onClick={handleSelectedDateUpdate}
      />
      {'  '}
      <Button
        id="button3"
        text="2019-02-02"
        onClick={handleSelectedDateUpdate}
      />
      {'  '}
      <Button
        id="button4"
        text="2019-03-03T10:30"
        onClick={handleSelectedDateUpdate}
      />
      {'  '}
      <Button
        id="button5"
        text="0101123"
        onClick={handleSelectedDateUpdate}
      />
    </div>
  );
};

export default DatePickerControlled;
