import React, { useState } from 'react';
import classNames from 'classnames/bind';
import TimeInputField from '../../../../TimeInputField';
import styles from '../common/TimeInput.test.module.scss';

const cx = classNames.bind(styles);

const TimeInputFieldExample = () => {
  const [timeInputFieldValue1, setTimeInputFieldValue1] = useState('');
  const [timeInputFieldValue2, setTimeInputFieldValue2] = useState('');
  const [isInline, setIsInline] = useState(false);

  const handleInlineButtonClick = () => {
    setIsInline(!isInline);
  };

  return (
    <div className={cx('time-wrapper')}>
      <TimeInputField
        timeInputId="primaryTimeInputField"
        name="primary-time-input-field1"
        label="Primary Time Input"
        value={timeInputFieldValue1}
        onChange={(event, timeString) => setTimeInputFieldValue1(timeString)}
        isInline={isInline}
        error="Error message."
        help="Help message."
      />
      <TimeInputField
        timeInputId="secondaryTimeInputField"
        name="secondary-time-input-field"
        label="Secondary Time Input"
        value={timeInputFieldValue2}
        onChange={(event, timeString) => setTimeInputFieldValue2(timeString)}
        isInline={isInline}
        error="Error message."
        help="Help message."
      />
      <button type="button" className={cx('inline-button')} id="inline-toggle" onClick={handleInlineButtonClick}>Toggle isInline</button>
    </div>
  );
};

export default TimeInputFieldExample;
