import React from 'react';
import moment from 'moment';
import CalendarFilter from 'terra-date-picker/lib/CalendarFilter';
import classNames from 'classnames/bind';
import styles from '../DatePickerExampleCommon.module.scss';

const cx = classNames.bind(styles);

const CalendarFilterDefaultDate = () => {
  const defaultDate = moment().add(2, 'days').format('YYYY-MM-DD');

  return (
    <div>
      <p>
        Default Selected Date:
        <span className={cx('date-wrapper')}>{defaultDate}</span>
      </p>
      <CalendarFilter
        id="default"
        selectedDate={defaultDate}
      />
    </div>
  );
};

export default CalendarFilterDefaultDate;
