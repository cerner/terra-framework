import React from 'react';
import classNames from 'classnames/bind';
import CalendarFilter from '../../../../CalendarFilter';
import styles from '../common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const CalendarFilterIncludeDates = () => (
  <div className={cx('content-wrapper')}>
    <h3>Included dates : 2020-04-01, 2020-04-02, 2020-04-03</h3>
    <CalendarFilter
      includeDates={['2020-04-01', '2020-04-02', '2020-04-03']}
    />
  </div>

);

export default CalendarFilterIncludeDates;
