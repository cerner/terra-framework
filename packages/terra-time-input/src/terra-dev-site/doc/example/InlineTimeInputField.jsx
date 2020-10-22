import React, { useState } from 'react';
import classNames from 'classnames/bind';
import TimeInputField from 'terra-time-input/lib/TimeInputField';
import styles from './TimeInputDocCommon.module.scss';

const cx = classNames.bind(styles);

const TimeInputFieldExample = () => {
  const [timeFieldValue1, setTimeFieldValue1] = useState('');
  const [timeFieldValue2, setTimeFieldValue2] = useState('');
  const [isInline, setIsInline] = useState(false);

  const handleInlineButtonClick = () => {
    setIsInline(!isInline);
  };

  return (
    <div className={cx('time-wrapper')}>
      <TimeInputField
        timeInputId="firstTimeInputField"
        name="first-time-input-field1"
        label="Label text"
        value={timeFieldValue1}
        onChange={(event, timeString) => setTimeFieldValue1(timeString)}
        isInline={isInline}
        error="Error message."
        help="Help message."
      />
      <TimeInputField
        timeInputId="firstTimeInputField"
        name="first-time-input-field"
        label="Label text"
        value={timeFieldValue2}
        onChange={(event, timeString) => setTimeFieldValue2(timeString)}
        isInline={isInline}
        error="Error message."
        help="Help message."
      />
      <p>{`First TimeInputField Value: ${timeFieldValue1}`}</p>
      <p>{`Second TimeInputField Value: ${timeFieldValue2}`}</p>
      <button type="button" id="inline-toggle" onClick={handleInlineButtonClick}>Toggle isInline</button>
    </div>
  );
};

export default TimeInputFieldExample;
