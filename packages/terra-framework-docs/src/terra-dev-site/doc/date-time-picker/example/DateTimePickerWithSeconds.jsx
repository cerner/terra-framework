import React, { useState } from 'react';
import moment from 'moment-timezone';
import Field from 'terra-form-field';
import DateTimePicker from 'terra-date-time-picker';

const DateTimePickerExampleDateWithSeconds = () => {
  const [dateTime, setDateTime] = useState(moment().format());

  const handleDateTimeChange = (event, dateTimeValue) => {
    setDateTime(dateTimeValue);
  };

  return (
    <div>
      <p>
        Selected ISO Date Time:
        {dateTime}
      </p>
      <Field label="Enter Date/Time" htmlFor="defaultDateTimeSeconds">
        <DateTimePicker
          label="Enter Date/Time"
          name="date-time-picker-example"
          dateInputAttributes={{ id: 'defaultDateTimeSeconds' }}
          onChange={handleDateTimeChange}
          value={moment().format()}
          showSeconds
        />
      </Field>
    </div>
  );
};

export default DateTimePickerExampleDateWithSeconds;
