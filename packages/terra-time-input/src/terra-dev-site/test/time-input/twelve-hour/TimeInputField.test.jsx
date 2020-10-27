import React, { useState } from 'react';
import classNames from 'classnames/bind';
import TimeInputField from '../../../../TimeInputField';
import TimeUtil from '../../../../TimeUtil';
import styles from '../common/TimeInput.test.module.scss';

const cx = classNames.bind(styles);

const TimeInputFieldDefault = () => {
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
    <div className={cx('content-wrapper')}>
      <button type="button" id="validity-toggle" onClick={handleInvalidButtonClick}>Toggle Validity</button>
      <button type="button" id="incomplete-toggle" onClick={handleIncompleteButtonClick}>Toggle Incomplete</button>
      <TimeInputField
        timeInputId="timeInputField"
        name="time-input-infield"
        label="Label text"
        value={value}
        onChange={(event, timeString) => setValue(timeString)}
        isInvalid={isInvalid}
        isIncomplete={isIncomplete}
        required={required}
        error="Error message."
        help="Help message."
        variant={TimeUtil.FORMAT_12_HOUR}
      />
      <p>{`TimeInputField Value: ${value}`}</p>
    </div>
  );
};

export default TimeInputFieldDefault;
