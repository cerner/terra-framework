import React from 'react';
import DatePicker from '../../../DatePicker';

const DateTimePickerInvalidSelectedDates = () => (
  <div>
    <span id="selected-date">selectedDate = null</span>
    <br />
    <DatePicker
      name="null-selectedDate"
      selectedDate={null}
    />
    <br />
    <br />
    <span id="selected-date">selectedDate = undefined</span>
    <br />
    <DatePicker
      name="undefined-selectedDate"
      selectedDate={undefined}
    />
    <br />
    <br />
    <span id="selected-date">selectedDate = </span>
    {'""'}
    <br />
    <DatePicker
      name="empty-selectedDate"
      selectedDate=""
    />
    <br />
    <br />
    <span id="selected-date">selectedDate = </span>
    {'"abc"'}
    <br />
    <DatePicker
      name="character-selectedDate"
      selectedDate="abc"
    />
    <br />
    <br />
    <span id="selected-date">selectedDate = </span>
    {'"!@#$"'}
    <br />
    <DatePicker
      name="special-character-selectedDate"
      selectedDate="!@#$"
    />
  </div>
);

export default DateTimePickerInvalidSelectedDates;
