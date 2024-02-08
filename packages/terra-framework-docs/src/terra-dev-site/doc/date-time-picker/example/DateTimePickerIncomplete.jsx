import React, { useState } from 'react';
import Field from 'terra-form-field';
import DateTimePicker from 'terra-date-time-picker';

const DateTimePickerExampleIncomplete = () => {
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
      <Field label="Enter Date/Time" htmlFor="default-incomplete">
        <DateTimePicker
          name="date-time-picker-example"
          dateInputAttributes={{ id: 'default-incomplete', fieldLabel: 'Enter Date/Time' }}
          timeInputAttributes={{ id: 'default-incomplete', fieldLabel: 'Enter Date/Time' }}
          include-dates
          onChange={handleDateTimeChange}
          isIncomplete
          required
        />
      </Field>
    </div>
  );
};

export default DateTimePickerExampleIncomplete;
