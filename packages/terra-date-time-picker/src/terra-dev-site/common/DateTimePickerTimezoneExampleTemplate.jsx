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
  timeZone: PropTypes.string,
};

const defaultProps = {
  value: '',
  timeZone: DateTimeUtils.getLocalTimeZone(),
};

function DateTimePickerTimezoneTemplate(props) {
  let dateTimeDisplay = props.value;
  let timeZoneDisplay = props.timeZone;

  const computedDateTime = DateTimeUtils.createSafeDate(dateTimeDisplay, props.timeZone);
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
        <span id="date-time-value">{dateTime}</span>
      </p>
      <p>
        Selected Time Zone:
        <span id="date-time-timeZone">{timeZone}</span>
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
