import React, { useState } from 'react';
import DateTimePicker from '../../../DateTimePicker';
import DateTimeUtils from '../../../DateTimeUtils';

const DateTimePickerEvents = () => {
  const [blurCount, setBlurCount] = useState(0);
  const [focusCount, setFocusCount] = useState(0);
  const [onDismissCount, setOnDismissCount] = useState(0);
  const [changeValue, setChangeValue] = useState('');
  const [changeRawValue, setChangeRawValue] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const handleBlur = () => {
    setBlurCount(blurCount + 1);
  };

  const handleFocus = () => {
    setFocusCount(focusCount + 1);
  };

  const handleChange = (event, value) => {
    setChangeValue(value);
  };

  const handleChangeRaw = (event, value) => {
    setChangeRawValue(value);
  };

  const handleSelect = (event, value) => {
    setSelectValue(value);
  };

  const handleOnDismiss = () => {
    setOnDismissCount(onDismissCount + 1);
  };

  return (
    <div>
      <p>
        onFocus Trigger Count:
        {' '}
        <span id="onFocus-count">{focusCount}</span>
        <br />
        <br />
        onBlur Trigger Count:
        {' '}
        <span id="onBlur-count">{blurCount}</span>
        <br />
        <br />
        onDismiss Trigger Count:
        {' '}
        <span id="onDismiss-count">{onDismissCount}</span>
        <br />
        <br />
        onChangeRaw Triggered:
        {' '}
        <span id="onChangeRaw">{changeRawValue}</span>
        <br />
        <br />
        onChange Triggered:
        {' '}
        <span id="onChange">{changeValue}</span>
        <br />
        <br />
        onSelect Triggered:
        {' '}
        <span id="onSelect">{selectValue}</span>
      </p>
      <DateTimePicker
        name="date-time-picker-events"
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
        onChangeRaw={handleChangeRaw}
        onSelect={handleSelect}
        onDismiss={handleOnDismiss}
        timeVariant={DateTimeUtils.FORMAT_12_HOUR}
        showSeconds
      />
    </div>
  );
};

export default DateTimePickerEvents;
