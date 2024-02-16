import React, { useState } from 'react';
import moment from 'moment-timezone';
import Field from 'terra-form-field';
import DateTimePicker from 'terra-date-time-picker';
import DateTimeUtil from 'terra-date-time-picker/lib/DateTimeUtils';

const DateTimePickerExampleTimeVariant = () => {
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
      <Field label="Enter Date/Time" htmlFor="timeVariant">
        <DateTimePicker
          ariaLabel="Enter Date/Time"
          name="date-time-picker-example"
          dateInputAttributes={{ id: 'timeVariant' }}
          onChange={handleDateTimeChange}
          value={moment().format()}
          timeVariant={DateTimeUtil.FORMAT_12_HOUR}
        />
      </Field>
    </div>
  );
};

export default DateTimePickerExampleTimeVariant;
