import React, { useState } from 'react';
import DateTimePicker from 'terra-date-time-picker';

let blurCount = 0;
let focusCount = 0;

const DateTimePickerFocusBlur = () => {
  const [dateTime, setDateTime] = useState('');
  const [blurTriggerCount, setBlurTriggerCount] = useState(0);
  const [focusTriggerCount, setFocusTriggerCount] = useState(0);
  const [iSO, setISO] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [timeValue, setTimeValue] = useState('');
  const [isAmbiguousHour, setIsAmbiguousHour] = useState('No');
  const [isCompleteValue, setIsCompleteValue] = useState('No');
  const [isValidValue, setIsValidValue] = useState('Yes');
  const [dateTimeObj, setDateTimeObj] = useState({});

  const handleBlur = (event, options) => {
    blurCount += 1;
    setBlurTriggerCount(blurCount);
    setISO(options.iSO);
    setInputValue(options.inputValue);
    setDateValue(options.dateValue);
    setTimeValue(options.timeValue);
    setIsAmbiguousHour(options.isAmbiguousHour ? 'Yes' : 'No');
    setIsCompleteValue(options.isCompleteValue ? 'Yes' : 'No');
    setIsValidValue(options.isValidValue ? 'Yes' : 'No');
    const dateTimeValue = {
      date: options.DD,
      month: options.MM,
      year: options.YYYY,
      hour: options.hour,
      minute: options.minutes,
      seconds: options.seconds,
    };
    setDateTimeObj(dateTimeValue);
  };

  const handleFocus = () => {
    focusCount += 1;
    setFocusTriggerCount(focusCount);
  };

  const handleDateChange = (event, dateTimeValue) => {
    setDateTime(dateTimeValue);
  };

  return (
    <div>
      <h3>
        onBlur Trigger Count:
        {' '}
        <span id="blur-count">{blurTriggerCount}</span>
        <br />
        <br />
        onFocus Trigger Count:
        {' '}
        <span id="focus-count">{focusTriggerCount}</span>
        <br />
        <br />
        Selected Date:
        {' '}
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
        <br />
        <br />
        Date Time Object
        {' '}
        <span id="date-time">{JSON.stringify(dateTimeObj)}</span>
      </h3>
      <DateTimePicker
        name="date-time-picker-onblur"
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleDateChange}
        excludeDates={['2019-04-01', '2019-04-02']}
        initialTimeZone="America/Chicago"
      />
    </div>
  );
};

export default DateTimePickerFocusBlur;
