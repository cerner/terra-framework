import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import CalendarFilter from 'terra-date-picker/lib/CalendarFilter';

const propTypes = {
  /**
   * The date value used for a controlled component.
   */
  value: PropTypes.string,
};

const defaultProps = {
  value: undefined,
};

const CalendarFilterControlledExample = ({
  value,
}) => {
  const [date, setDate] = useState(value);
  const [iso, setIso] = useState('');
  const [formattedDate, setFormattedDate] = useState('');

  const handleOnDateChange = (event, selectedDate, formatteddate) => {
    setDate(selectedDate);
    setIso(selectedDate);
    setFormattedDate(formatteddate);
  };

  return (
    <div>
      <h3>
        Selected Value:
        {' '}
        <span id="selected-date">{date}</span>
        <br />
        <br />
        ISO String:
        {' '}
        <span id="iso">{iso}</span>
        <br />
        <br />
        Formatted Value:
        {' '}
        <span id="formatted-date">{formattedDate}</span>
      </h3>
      <CalendarFilter
        onChange={handleOnDateChange}
        value={date}
      />
    </div>
  );
};

CalendarFilterControlledExample.propTypes = propTypes;
CalendarFilterControlledExample.defaultProps = defaultProps;

const CalendarFilterControlled = () => (
  <CalendarFilterControlledExample
    value={moment().format('YYYY-MM-DD')}
  />
);

export default CalendarFilterControlled;
