import React, { useState } from 'react';
import moment from 'moment';
import classNames from 'classnames/bind';
import DatePicker from '../../../DatePicker';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const DatePickerSelectedDate = () => {
  const [date, setDate] = useState(moment().format());

  const handleSelectedDateUpdate = () => {
    setDate(moment().format());
  };

  return (
    <div className={cx('content-wrapper')}>
      <DatePicker
        name="date-input"
        selectedDate={date}
      />
      <button type="button" onClick={handleSelectedDateUpdate}>Update selected date</button>
    </div>
  );
};

export default DatePickerSelectedDate;
