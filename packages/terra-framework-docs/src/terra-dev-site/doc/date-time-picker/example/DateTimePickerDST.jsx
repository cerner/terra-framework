import React, { useState } from 'react';
import moment from 'moment-timezone';
import Field from 'terra-form-field';
import DateTimePicker from 'terra-date-time-picker';

const DateTimePickerExampleDST = () => {
  const initialValue = moment().tz('America/Chicago').format();
  const [dateTime, setDateTime] = useState(initialValue);

  const handleDateTimeChange = (event, dateTimeValue) => {
    setDateTime(dateTimeValue);
  };

  return (
    <div>
      <div>
        <p>
          In the United States, the missing hour occurs when DST begins at these recent past and near future dates between 2:00 and 3:00.
          <br />
          {' '}
          - March 13th, 2016
          <br />
          {' '}
          - March 12th, 2017
          <br />
          {' '}
          - March 11th, 2018
          <br />
          {' '}
          - March 10th, 2019
          <br />
          {' '}
          - March 08th, 2020
        </p>
        <p>
          In the United States, the ambiguous hour occurs when DST ends at these recent past and near future dates between 1:00 and 2:00:
          <br />
          {' '}
          - November 6th, 2016
          <br />
          {' '}
          - November 5th, 2017
          <br />
          {' '}
          - November 4th, 2018
          <br />
          {' '}
          - November 3rd, 2019
          <br />
          {' '}
          - November 1st, 2020
        </p>
        <p>
          For the United States, click
          {' '}
          <a href="https://en.wikipedia.org/wiki/Daylight_saving_time_in_the_United_States">here</a>
          {' '}
          to see more recent past and near future starting and ending dates of daylight saving time.
          <br />
          For other time zones, click
          {' '}
          <a href="http://www.timezoneconverter.com/cgi-bin/zoneinfo">here</a>
          {' '}
          to see the starting and ending dates of daylight saving time for the current year.
        </p>
      </div>
      <p>
        Selected ISO Date Time:
        {dateTime}
      </p>
      <Field label="Enter Date/Time" htmlFor="dst-picker">
        <DateTimePicker
          name="date-time-picker-example"
          dateInputAttributes={{ id: 'dst-picker' }}
          onChange={handleDateTimeChange}
          value={initialValue}
          initialTimeZone="America/Chicago"
        />
      </Field>
    </div>
  );
};

export default DateTimePickerExampleDST;
