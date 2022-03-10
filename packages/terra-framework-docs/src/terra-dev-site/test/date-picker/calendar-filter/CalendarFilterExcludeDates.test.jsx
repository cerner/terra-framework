import React from 'react';
import classNames from 'classnames/bind';
import CalendarFilter from 'terra-date-picker/lib/CalendarFilter';
import styles from '../common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const CalendarFilterExcludeDates = () => (
  <div className={cx('content-wrapper')}>
    <h3>Excluded dates : 2020-04-01, 2020-04-03</h3>
    <CalendarFilter
      excludeDates={['2020-04-01', '2020-04-03']}
      selectedDate="2020-04-02"
    />
  </div>

);

export default CalendarFilterExcludeDates;
