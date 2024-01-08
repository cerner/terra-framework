import React, { useState } from 'react';
import Field from 'terra-form-field';
import DateTimePicker from 'terra-date-time-picker';

const DateTimePickerExample = () => {
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
      <Field label="Enter Date/Time" htmlFor="default">
        <DateTimePicker
          label="Enter Date/Time"
          name="date-time-picker-example"
          dateInputAttributes={{ id: 'default' }}
          onChange={handleDateTimeChange}
        />
      </Field>
    </div>
  );
};

export default DateTimePickerExample;
