import React, { useState } from 'react';
import moment from 'moment-timezone';
import Field from 'terra-form-field';
import DateTimePicker from 'terra-date-time-picker';

const DateTimePickerExampleDefaultDateTime = () => {
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
      <Field label="Enter Date/Time" htmlFor="defaultDateTime">
        <DateTimePicker
          name='date-time-picker-example'
          ariaLabel='Enter Date/Time'
          dateInputAttributes={{ id: 'defaultDateTime' }}
          onChange={handleDateTimeChange}
          value={moment().format()}
        />
      </Field>
    </div>
  );
};

export default DateTimePickerExampleDefaultDateTime;
