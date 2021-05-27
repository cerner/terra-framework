import React, { useState } from 'react';
import classNames from 'classnames/bind';
import TimeInputField from 'terra-time-input/lib/TimeInputField';
import styles from './TimeInputDocCommon.module.scss';

const cx = classNames.bind(styles);

const TimeInputFieldExample = () => {
  const [value, setValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  const handleInvalidButtonClick = () => {
    setIsInvalid(!isInvalid);
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
        required
        hideRequired
        error="Error message."
        help="Help message."
        optional="Optional"
      />
      <p>{`TimeInputField Value: ${value}`}</p>
      <button type="button" id="validity-toggle" onClick={handleInvalidButtonClick}>Toggle Validity</button>
    </div>
  );
};

export default TimeInputFieldExample;
