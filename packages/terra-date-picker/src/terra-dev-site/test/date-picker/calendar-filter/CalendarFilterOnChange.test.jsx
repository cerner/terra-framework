import React, { useState } from 'react';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import CalendarFilter from '../../../../CalendarFilter';

const propTypes = {
  /**
   * The date value used for a controlled component.
   */
  value: PropTypes.string,
};

const defaultProps = {
  value: undefined,
};

const CalendarFilterOnChange = ({
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

CalendarFilterOnChange.propTypes = propTypes;
CalendarFilterOnChange.defaultProps = defaultProps;

const CalendarFilterOnChangeExample = () => (
  <CalendarFilterOnChange
    value={moment().format('2020-05-15')}
  />
);

export default CalendarFilterOnChangeExample;
