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

const CalendarFilterIncludeDates = ({
  selectedDate,
}) => {
  const [date, setSelectedDate] = useState(selectedDate);

  const handleOnDateChange = (event, dateValue) => {
    setSelectedDate(dateValue);
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
        includeDates={[moment().format(), moment().subtract(1, 'days').format(), moment().add(1, 'days').format()]}
      />
    </div>
  );
};

CalendarFilterIncludeDates.propTypes = propTypes;
CalendarFilterIncludeDates.defaultProps = defaultProps;

export default CalendarFilterIncludeDates;
