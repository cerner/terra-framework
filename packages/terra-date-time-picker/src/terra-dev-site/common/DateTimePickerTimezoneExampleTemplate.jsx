import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DateTimePicker from 'terra-date-time-picker/lib/DateTimePicker';
import DateTimeUtils from '../../DateTimeUtils';

const propTypes = {
  /**
   * The current entered date time. Use for the selected date message.
   */
  value: PropTypes.string,
  /**
   * Timezone for the provided date time.
   */
  initialTimeZone: PropTypes.string,
};

const defaultProps = {
  value: '',
  initialTimeZone: DateTimeUtils.getLocalTimeZone(),
};

function DateTimePickerTimezoneTemplate(props) {
  let dateTimeDisplay = props.value;
  let timeZoneDisplay = props.initialTimeZone;

  const computedDateTime = DateTimeUtils.createSafeDate(dateTimeDisplay, props.initialTimeZone);
  if (computedDateTime && computedDateTime.isValid()) {
    dateTimeDisplay = computedDateTime.format();
    timeZoneDisplay = computedDateTime.tz();
  }
  const [dateTime, setDateTime] = useState(dateTimeDisplay);
  const timeZone = timeZoneDisplay;

  const handleDateTimeChange = (event, time) => {
    setDateTime(time);
  };

  return (
    <>
      <p>
        Selected ISO Date Time:
        <span data-date-time-value>{dateTime}</span>
      </p>
      <p>
        Initial Time Zone:
        <span data-date-time-timezone>{timeZone}</span>
      </p>
      <DateTimePicker
        name="date-time-picker-example"
        onChange={handleDateTimeChange}
        {...props}
      />
    </>
  );
}

DateTimePickerTimezoneTemplate.propTypes = propTypes;
DateTimePickerTimezoneTemplate.defaultProps = defaultProps;

export default DateTimePickerTimezoneTemplate;
