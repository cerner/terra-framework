import React, { useState } from 'react';
import classNames from 'classnames/bind';
import TimeInputField from 'terra-time-input/lib/TimeInputField';
import TimeUtil from 'terra-time-input/lib/TimeUtil';
import styles from './TimeInputDocCommon.module.scss';

const cx = classNames.bind(styles);

const TimeInputFieldDefault = () => {
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
        isInvalid={isInvalid}
        isIncomplete={isIncomplete}
        required={required}
        error="Error message."
        help="Help message."
        variant={TimeUtil.FORMAT_12_HOUR}
      />
      <button type="button" id="validity-toggle" onClick={handleInvalidButtonClick}>Toggle Validity</button>
      <button type="button" id="incomplete-toggle" onClick={handleIncompleteButtonClick}>Toggle Incomplete</button>
    </div>
  );
};

export default TimeInputFieldDefault;
