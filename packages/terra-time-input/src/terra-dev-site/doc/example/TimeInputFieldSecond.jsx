import React, { useState } from 'react';
import classNames from 'classnames/bind';
import TimeInputField from 'terra-time-input/lib/TimeInputField';
import styles from './TimeInputDocCommon.module.scss';

const cx = classNames.bind(styles);

const TimeInputFieldExample = () => {
  const [value, setValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [isIncomplete, setIsIncomplete] = useState(false);
  const [required, setRequired] = useState(false);

  const handleInvalidButtonClick = () => {
    setIsInvalid(!isInvalid);
  };

  const handleIncompleteButtonClick = () => {
    setIsIncomplete(!isIncomplete);
    setRequired(!required);
  };

  return (
    <div className={cx('time-wrapper')}>
      <TimeInputField
        timeInputId="timeInputField"
        name="time-input-field"
        label="Label text"
        value={value}
        onChange={(event, timeString) => setValue(timeString)}
        isInvalid={isInvalid}
        isIncomplete={isIncomplete}
        required={required}
        error="Error message."
        help="Help message."
        showSeconds
      />
      <p>{`TimeInputField Value: ${value}`}</p>
      <button type="button" id="validity-toggle" onClick={handleInvalidButtonClick}>Toggle Validity</button>
      <button type="button" id="incomplete-toggle" onClick={handleIncompleteButtonClick}>Toggle Incomplete</button>
    </div>
  );
};

export default TimeInputFieldExample;
