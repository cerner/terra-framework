import React, { useState } from 'react';
import moment from 'moment-timezone';
import Field from 'terra-form-field';
import DateTimePicker from 'terra-date-time-picker';

const DateTimePickerExampleIncludeDates = () => {
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
      <Field label="Enter Date/Time" htmlFor="include-dates">
        <DateTimePicker
          ariaLabel='Enter Date/Time'
          name='date-time-picker-example'
          dateInputAttributes={{ id: 'include-dates' }}
          onChange={handleDateTimeChange}
          includeDates={[moment().format(), moment().subtract(1, 'days').format(), moment().add(1, 'days').format()]}
        />
      </Field>
    </div>
  );
};

export default DateTimePickerExampleIncludeDates;
