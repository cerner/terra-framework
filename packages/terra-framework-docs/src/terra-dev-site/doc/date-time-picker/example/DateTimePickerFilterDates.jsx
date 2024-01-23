import React, { useState } from 'react';
import moment from 'moment-timezone';
import Field from 'terra-form-field';
import DateTimePicker from 'terra-date-time-picker';

const DateTimePickerExampleFilterDates = () => {
  const [dateTime, setDateTime] = useState('');

  const handleDateTimeChange = (event, dateTimeValue) => {
    setDateTime(dateTimeValue);
  };

  const isWeekday = (date) => {
    const momentDate = moment(date);

    if (momentDate && momentDate.isValid()) {
      const day = momentDate.day();
      return day !== 0 && day !== 6;
    }

    return true;
  };

  return (
    <div>
      <p>
        Selected ISO Date Time:
        {dateTime}
      </p>
      <Field label="Enter Date/Time" htmlFor="filter-dates">
        <DateTimePicker
          name="date-time-picker-example"
          dateInputAttributes={{ id: 'filter-dates' }}
          onChange={handleDateTimeChange}
          filterDate={isWeekday}
        />
      </Field>
    </div>
  );
};

export default DateTimePickerExampleFilterDates;
