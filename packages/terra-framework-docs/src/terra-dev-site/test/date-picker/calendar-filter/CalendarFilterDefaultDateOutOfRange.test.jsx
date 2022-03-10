import React from 'react';
import classNames from 'classnames/bind';
import CalendarFilter from 'terra-date-picker/lib/CalendarFilter';
import styles from '../common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const CalendarFilterDefaultDateOutOfRange = () => (
  <div className={cx('content-wrapper')}>
    <h3>Default date : 2020-04-01 out of range</h3>
    <CalendarFilter
      minDate="2020-04-10"
      maxDate="2020-04-20"
      selectedDate="2020-04-01"
    />
  </div>
);

export default CalendarFilterDefaultDateOutOfRange;
