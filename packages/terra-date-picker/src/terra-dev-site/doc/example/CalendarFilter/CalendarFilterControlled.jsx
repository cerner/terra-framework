import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import CalendarFilter from 'terra-date-picker/lib/CalendarFilter';
import classNames from 'classnames/bind';
import styles from '../DatePickerExampleCommon.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The date value used for a controlled component.
   */
  value: PropTypes.string,
};

const defaultProps = {
  value: undefined,
};

const CalendarFilterExample = (props) => {
  const [date, setDate] = useState(props.value);

  const handleOnDateSelect = (event, selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <div>
      <p>
        Selected ISO Date:
        <span className={cx('date-wrapper')}>{date}</span>
      </p>
      <CalendarFilter
        id="controlled-dates"
        onSelect={handleOnDateSelect}
        value={date}
      />
    </div>
  );
};

CalendarFilterExample.propTypes = propTypes;
CalendarFilterExample.defaultProps = defaultProps;

const CalendarFilterControlledExample = () => (
  <CalendarFilterExample
    value={moment().format('YYYY-MM-DD')}
  />
);

export default CalendarFilterControlledExample;
