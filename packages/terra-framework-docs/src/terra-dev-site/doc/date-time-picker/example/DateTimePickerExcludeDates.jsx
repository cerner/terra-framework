import React, { useState } from 'react';
import moment from 'moment-timezone';
import Field from 'terra-form-field';
import DateTimePicker from 'terra-date-time-picker';

const DateTimePickerExampleExcludeDates = () => {
  const [dateTime, setDateTime] = useState('');

  const handleDateTimeChange = (event, dateTimeValue) => {
    setDateTime(dateTimeValue);
  };

  return (
    <div>
      <p>
        Selected ISO Date Time:
        {dateTime}
      </p>
      <Field label="Enter Date/Time" htmlFor="exclude-dates">
        <DateTimePicker
          name='date-time-picker-example'
          ariaLabel='Enter Date/Time'
          dateInputAttributes={{ id: 'exclude-dates' }}
          onChange={handleDateTimeChange}
          excludeDates={[moment().subtract(1, 'days').format(), moment().add(1, 'days').format()]}
        />
      </Field>
    </div>
  );
};

export default DateTimePickerExampleExcludeDates;
