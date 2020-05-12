import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import CalendarFilter from 'terra-date-picker/lib/CalendarFilter';
import classNames from 'classnames/bind';
import styles from '../DatePickerExampleCommon.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The current calendar date if selected. Use for the selected date message.
   */
  selectedDate: PropTypes.node,
};

const defaultProps = {
  selectedDate: '',
};

const CalendarFilterFilterDates = (props) => {
  const [date, setDate] = useState(props.selectedDate);

  const handleOnDateChange = (event, selectedDate) => {
    setDate(selectedDate);
  };

  const isWeekday = (selectedDate) => {
    const momentDate = moment(selectedDate);

    if (momentDate && momentDate.isValid()) {
      const day = momentDate.day();
      return day !== 0 && day !== 6;
    }

    return true;
  };

  return (
    <div>
      <p>
        Selected ISO Date:
        <span className={cx('date-wrapper')}>{date}</span>
      </p>
      <CalendarFilter
        id="filter-dates"
        onChange={handleOnDateChange}
        filterDate={isWeekday}
      />
    </div>
  );
};

CalendarFilterFilterDates.propTypes = propTypes;
CalendarFilterFilterDates.defaultProps = defaultProps;

export default CalendarFilterFilterDates;
