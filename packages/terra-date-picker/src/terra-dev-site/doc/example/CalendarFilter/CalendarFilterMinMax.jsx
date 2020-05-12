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

const CalendarFilterMinMax = (props) => {
  const [date, setSelectedDate] = useState(props.selectedDate);

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
        minDate={moment().format()}
        maxDate={moment().add(6, 'days').format()}
      />
    </div>
  );
};

CalendarFilterMinMax.propTypes = propTypes;
CalendarFilterMinMax.defaultProps = defaultProps;

export default CalendarFilterMinMax;
