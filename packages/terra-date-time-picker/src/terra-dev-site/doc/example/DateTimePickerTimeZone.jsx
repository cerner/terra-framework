import React, { useState } from 'react';
import DateTimePicker from 'terra-date-time-picker/lib/DateTimePicker';
import moment from 'moment-timezone';
import Field from 'terra-form-field';
import DateTimeUtils from '../../../DateTimeUtils';

function DateTimePickerTimeZone() {
  const [timeZone, setTimezone] = useState('Asia/Kolkata');
  const [dateTime, setDateTime] = useState(moment().format());

  const handleDateTimeChange = (event, datetime) => {
    const computedDateTime = DateTimeUtils.createSafeDate(datetime, timeZone);

    setDateTime(computedDateTime.format());
    setTimezone(computedDateTime.tz());
  };

  return (
    <>
      <p>
        Selected ISO Date Time:
        {dateTime}
      </p>
      <p>
        Selected Timezone:
        {timeZone}
      </p>
      <Field label="Enter Date/Time" htmlFor="timeZone">
        <DateTimePicker
          name="date-time-picker-example"
          dateInputAttributes={{ id: 'timezone' }}
          onChange={handleDateTimeChange}
          initialTimeZone={timeZone}
          value={dateTime}
        />
      </Field>
    </>
  );
}

export default DateTimePickerTimeZone;
