import React, { useState } from 'react';
import moment from 'moment-timezone';
import Field from 'terra-form-field';
import DateTimePicker from 'terra-date-time-picker';

const DateTimePickerExampleMinMax = () => {
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
      <Field label="Enter Date/Time" htmlFor="min-max-dates">
        <DateTimePicker
          ariaLabel='Enter Date/Time'
          name="date-time-picker-example"
          dateInputAttributes={{ id: 'min-max-dates' }}
          onChange={handleDateTimeChange}
          minDate={moment().format()}
          maxDate={moment().add(6, 'days').format()}
        />
      </Field>
    </div>
  );
};

export default DateTimePickerExampleMinMax;
