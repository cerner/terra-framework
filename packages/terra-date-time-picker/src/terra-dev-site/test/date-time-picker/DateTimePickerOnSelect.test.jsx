import React, { useState } from 'react';
import DateTimePicker from '../../../DateTimePicker';

const DateTimePickerOnSelect = () => {
  const [onChangeDate, setOnChangeDate] = useState('');
  const [onSelectDate, setOnSelectDate] = useState('');

  const handleDateChange = (event, onChangeDateValue) => {
    setOnChangeDate(onChangeDateValue);
  };

  const handleDateSelect = (event, onSelectDateValue) => {
    setOnSelectDate(onSelectDateValue);
  };

  return (
    <div>
      <h3>
        OnChange Date:
        <span id="changed-date">{onChangeDate}</span>
      </h3>
      <h3>
        OnSelect Date:
        <span id="selected-date">{onSelectDate}</span>
      </h3>
      <DateTimePicker
        name="date-time-picker-onchange"
        onChange={handleDateChange}
        onSelect={handleDateSelect}
        value="2017-04-01T12:00"
      />
    </div>
  );
};

export default DateTimePickerOnSelect;
