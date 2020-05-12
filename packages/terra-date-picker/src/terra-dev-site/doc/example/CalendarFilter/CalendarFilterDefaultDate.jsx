import React, { useState } from 'react';
import moment from 'moment';
import CalendarFilter from 'terra-date-picker/lib/CalendarFilter';
import classNames from 'classnames/bind';
import styles from '../DatePickerExampleCommon.module.scss';

const cx = classNames.bind(styles);

const CalendarFilterDefaultDate = () => {
  const [date, setSelectedDate] = useState(moment().add(2, 'days').format('YYYY-MM-DD'));

  const handleOnDateChange = (event, selectedDate) => {
    setSelectedDate(selectedDate);
  };

  return (
    <div>
      <p>
        Selected ISO Date:
        <span className={cx('date-wrapper')}>{date}</span>
      </p>
      <CalendarFilter
        id="default"
        onChange={handleOnDateChange}
        selectedDate={date}
      />
    </div>
  );
};

export default CalendarFilterDefaultDate;
