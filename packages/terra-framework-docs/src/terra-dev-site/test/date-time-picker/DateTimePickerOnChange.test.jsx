import React, { useState } from 'react';
import DateTimePicker from 'terra-date-time-picker';

const DateTimePickerOnChange = () => {
  const [dateTime, setDateTime] = useState('');
  const [iSO, setISO] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [timeValue, setTimeValue] = useState('');
  const [isAmbiguousHour, setIsAmbiguousHour] = useState('No');
  const [isCompleteValue, setIsCompleteValue] = useState('No');
  const [isValidValue, setIsValidValue] = useState('Yes');

  const handleDateChange = (event, dateTimeValue, options) => {
    setDateTime(dateTimeValue);
    setISO(options.iSO);
    setInputValue(options.inputValue);
    setDateValue(options.dateValue);
    setTimeValue(options.timeValue);
    setIsAmbiguousHour(options.isAmbiguousHour ? 'Yes' : 'No');
    setIsCompleteValue(options.isCompleteValue ? 'Yes' : 'No');
    setIsValidValue(options.isValidValue ? 'Yes' : 'No');
  };

  return (
    <div>
      <h3>
        Selected Date:
        <span id="selected-date">{dateTime}</span>
        <br />
        <br />
        ISO String:
        {' '}
        <span id="iso">{iSO}</span>
        <br />
        <br />
        Input Value:
        {' '}
        <span id="input-value">{inputValue}</span>
        <br />
        <br />
        Date Value:
        {' '}
        <span id="date-value">{dateValue}</span>
        <br />
        <br />
        Time Value:
        {' '}
        <span id="time-value">{timeValue}</span>
        <br />
        <br />
        Is Ambiguous?
        {' '}
        <span id="ambiguous-date">{isAmbiguousHour}</span>
        <br />
        <br />
        Is Date-Time Complete?
        {' '}
        <span id="complete-date">{isCompleteValue}</span>
        <br />
        <br />
        Is Date-Time Valid?
        {' '}
        <span id="valid-date">{isValidValue}</span>
      </h3>
      <DateTimePicker
        name="date-time-picker-onchange"
        onChange={handleDateChange}
        initialTimeZone="America/Chicago"
      />
    </div>
  );
};

export default DateTimePickerOnChange;
