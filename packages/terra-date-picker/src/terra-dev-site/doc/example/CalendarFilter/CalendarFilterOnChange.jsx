import React, { useState, useCallback } from 'react';
import CalendarFilter from 'terra-date-picker/lib/CalendarFilter';
import classNames from 'classnames/bind';
import styles from '../DatePickerExampleCommon.module.scss';

const cx = classNames.bind(styles);

const CalendarFilterOnChange = () => {
  const [date, setDate] = useState('');
  const [formattedDate, setFormattedDate] = useState('');

  const handleDateChange = useCallback((event, selectedDate, formatteddate) => {
    setDate(selectedDate);
    setFormattedDate(formatteddate);
  }, []);

  return (
    <div className={cx('content-wrapper')}>
      <h3>
        Selected Value:
        {' '}
        <span id="input-value">{date}</span>
        <br />
        <br />
        ISO String:
        {' '}
        <span id="iso">{date}</span>
        <br />
        <br />
        Formatted Value:
        {' '}
        <span id="input-value">{formattedDate}</span>
      </h3>
      <CalendarFilter
        onChange={handleDateChange}
      />
    </div>
  );
};

export default CalendarFilterOnChange;
