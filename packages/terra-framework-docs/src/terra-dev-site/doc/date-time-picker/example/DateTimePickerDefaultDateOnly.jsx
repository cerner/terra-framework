import React, { useState } from 'react';
import Field from 'terra-form-field';
import DateTimePicker from 'terra-date-time-picker';

const DateTimePickerExampleDefaultDate = () => {
  const [dateTime, setDateTime] = useState('2017-08-08');

  const handleDateTimeChange = (event, dateTimeValue) => {
    setDateTime(dateTimeValue);
  };

  return (
    <div>
      <p>
        Selected ISO Date Time:
        {dateTime}
      </p>
      <Field label="Enter Date/Time" htmlFor="defaultDate">
        <DateTimePicker
          name="date-time-picker-example"
          dateInputAttributes={{ id: 'defaultDate' }}
          timeInputAttributes={{ id: 'defaultDate' }}
          onChange={handleDateTimeChange}
          value="2017-08-08"
        />
      </Field>
    </div>
  );
};

export default DateTimePickerExampleDefaultDate;
