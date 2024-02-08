import React, { useState } from 'react';
import moment from 'moment-timezone';
import Field from 'terra-form-field';
import DateTimePicker from 'terra-date-time-picker';
import DateTimeUtil from 'terra-date-time-picker/lib/DateTimeUtils';

const DateTimePickerExampleDateWithSecondsAndTimeVariant = () => {
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
      <Field label="Enter Date/Time" htmlFor="defaultDateTimeVariant">
        <DateTimePicker
          name="date-time-picker-example"
          dateInputAttributes={{ id: 'defaultDateTimeVariant', fieldLabel: 'Enter Date/Time' }}
          timeInputAttributes={{ id: 'defaultDateTimeVariant', fieldLabel: 'Enter Date/Time' }}
          onChange={handleDateTimeChange}
          value={moment().format()}
          showSeconds
          timeVariant={DateTimeUtil.FORMAT_12_HOUR}
        />
      </Field>
    </div>
  );
};

export default DateTimePickerExampleDateWithSecondsAndTimeVariant;
