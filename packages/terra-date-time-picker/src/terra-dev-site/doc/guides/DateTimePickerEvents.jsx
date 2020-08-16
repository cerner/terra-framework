import React, { useState } from 'react';
import DateTimePicker from '../../../DateTimePicker';
import DateTimeUtils from '../../../DateTimeUtils';

let blurCount = 0;
let focusCount = 0;
let clickOutsideCount = 0;

const DateTimePickerEvents = () => {
  const [blurTriggerCount, setBlurTriggerCount] = useState(0);
  const [focusTriggerCount, setFocusTriggerCount] = useState(0);
  const [changeValue, setChangeValue] = useState('');
  const [changeRawValue, setChangeRawValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [clickOutsideTriggerCount, setClickOutsideTriggerCount] = useState(0);

  const handleBlur = () => {
    blurCount += 1;
    setBlurTriggerCount(blurCount);
  };

  const handleFocus = () => {
    focusCount += 1;
    setFocusTriggerCount(focusCount);
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

  const handleOnClickOutside = () => {
    clickOutsideCount += 1;
    setClickOutsideTriggerCount(clickOutsideCount);
  };

  return (
    <div>
      <p>
        onFocus Trigger Count:
        {' '}
        <span id="onFocus-count">{focusTriggerCount}</span>
        <br />
        <br />
        onBlur Trigger Count:
        {' '}
        <span id="onBlur-count">{blurTriggerCount}</span>
        <br />
        <br />
        onClickOutside Trigger Count:
        {' '}
        <span id="onClickOutside-count">{clickOutsideTriggerCount}</span>
        <br />
        <br />
        onChangeRaw Triggered:
        {' '}
        <span id="onChangeRaw-count">{changeRawValue}</span>
        <br />
        <br />
        onChange Triggered:
        {' '}
        <span id="onChange-Count">{changeValue}</span>
        <br />
        <br />
        onSelect Triggered:
        {' '}
        <span id="onSelect-count">{selectValue}</span>
      </p>
      <DateTimePicker
        name="date-time-picker-events"
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
        onChangeRaw={handleChangeRaw}
        onSelect={handleSelect}
        onClickOutside={handleOnClickOutside}
        timeVariant={DateTimeUtils.FORMAT_12_HOUR}
        showSeconds
      />
    </div>
  );
};

export default DateTimePickerEvents;
