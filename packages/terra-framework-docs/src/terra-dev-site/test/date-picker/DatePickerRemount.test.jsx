import React, { useState } from 'react';
import DatePicker from 'terra-date-picker';

const DatePickerRemount = () => {
  const [date, setDate] = useState('2020-04-07');

  return (
    <DatePicker
      name="date-picker-remount"
      key={date}
      selectedDate={date}
      onSelect={(event, value) => {
        setDate(value);
      }}
      inputAttributes={{ id: 'date-input-id' }}
    />
  );
};

export default DatePickerRemount;
