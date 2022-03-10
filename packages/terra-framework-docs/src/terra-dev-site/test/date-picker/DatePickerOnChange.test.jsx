import React, { useState } from 'react';
import classNames from 'classnames/bind';
import DatePicker from 'terra-date-picker';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const DatePickerOnChange = () => {
  const [date, setDate] = useState('');
  const [iSO, setISO] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isCompleteValue, setIsCompleteValue] = useState('No');
  const [isValidValue, setIsValidValue] = useState('Yes');

  const handleDateChange = (event, dateValue, options) => {
    setDate(dateValue);
    setISO(options.iSO);
    setInputValue(options.inputValue);
    setIsCompleteValue(options.isCompleteValue ? 'Yes' : 'No');
    setIsValidValue(options.isValidValue ? 'Yes' : 'No');
  };

  return (
    <div className={cx('content-wrapper')}>
      <h3>
        Selected Date:
        <span id="selected-date">{date}</span>
        <br />
        <br />
        ISO String:
        {' '}
        <span id="iso">{iSO}</span>
        <br />
        <br />
        Input Value:
        {' '}
        <span id="input-value">{inputValue}</span>
        <br />
        <br />
        Is Date Complete?
        {' '}
        <span id="complete-date">{isCompleteValue}</span>
        <br />
        <br />
        Is Date Valid?
        {' '}
        <span id="valid-date">{isValidValue}</span>
      </h3>
      <DatePicker
        name="date-input-onchange"
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DatePickerOnChange;
