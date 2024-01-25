import React, { useState } from 'react';
import classNames from 'classnames/bind';
import DatePicker from 'terra-date-picker';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

let blurCount = 0;
let focusCount = 0;

const DatePickerFocusBlur = () => {
  const [blurTriggerCount, setBlurTriggerCount] = useState(0);
  const [focusTriggerCount, setFocusTriggerCount] = useState(0);
  const [iSO, setISO] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isCompleteValue, setIsCompleteValue] = useState('No');
  const [isValidValue, setIsValidValue] = useState('Yes');
  const [dateObj, setDateObj] = useState({});

  const handleBlur = (event, options) => {
    blurCount += 1;
    setBlurTriggerCount(blurCount);
    setISO(options.iSO);
    setInputValue(options.inputValue);
    setIsCompleteValue(options.isCompleteValue ? 'Yes' : 'No');
    setIsValidValue(options.isValidValue ? 'Yes' : 'No');
    const dateVal = {
      Date: options.DD,
      Month: options.MM,
      Year: options.YYYY,
    };
    setDateObj(dateVal);
  };

  const handleFocus = () => {
    focusCount += 1;
    setFocusTriggerCount(focusCount);
  };

  return (
    <div className={cx('content-wrapper')}>
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
        Is Date Complete?
        {' '}
        <span id="complete-date">{isCompleteValue}</span>
        <br />
        <br />
        Is Date Valid?
        {' '}
        <span id="valid-date">{isValidValue}</span>
        <br />
        <br />
        Date Object
        {' '}
        <span id="date-obj">{JSON.stringify(dateObj)}</span>
      </h3>
      <DatePicker
        name="date-input-onblur"
        onBlur={handleBlur}
        onFocus={handleFocus}
        excludeDates={['2019-04-01', '2019-04-02']}
      />
    </div>
  );
};

export default DatePickerFocusBlur;
