import React, { useState } from 'react';
import Field from 'terra-form-field';
import DateTimePicker from 'terra-date-time-picker';

const DateTimePickerExampleInvalid = () => {
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
      <Field label="Enter Date/Time" htmlFor="default-invalid">
        <DateTimePicker
          label="Enter Date/Time"
          name="date-time-picker-example"
          dateInputAttributes={{ id: 'default-invalid' }}
          onChange={handleDateTimeChange}
          isInvalid
        />
      </Field>
    </div>
  );
};

export default DateTimePickerExampleInvalid;
