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
          name="date-time-picker-example"
          dateInputAttributes={{ id: 'min-max-dates', fieldLabel: 'Enter Date/Time' }}
          timeInputAttributes={{ id: 'min-max-dates', fieldLabel: 'Enter Date/Time' }}
          onChange={handleDateTimeChange}
          minDate={moment().format()}
          maxDate={moment().add(6, 'days').format()}
        />
      </Field>
    </div>
  );
};

export default DateTimePickerExampleMinMax;
