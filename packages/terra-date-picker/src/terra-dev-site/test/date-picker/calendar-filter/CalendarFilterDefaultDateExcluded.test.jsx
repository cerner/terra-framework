import React from 'react';
import classNames from 'classnames/bind';
import CalendarFilter from '../../../../CalendarFilter';
import styles from '../common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const CalendarFilterDefaultDateExcluded = () => (
  <div className={cx('content-wrapper')}>
    <h3>Default date : 2020-04-05 excluded</h3>
    <CalendarFilter
      excludeDates={['2020-04-03', '2020-04-04', '2020-04-05', '2020-04-06', '2020-04-07']}
      selectedDate="2020-04-05"
    />
  </div>
);

export default CalendarFilterDefaultDateExcluded;
