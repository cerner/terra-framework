import React from 'react';
import classNames from 'classnames/bind';
import TimeInputField from '../../../../TimeInputField';
import styles from '../common/TimeInput.test.module.scss';

const cx = classNames.bind(styles);

const TimeInputFieldDefault = () => (
  <div className={cx('content-wrapper')}>
    <TimeInputField
      label="Label Text"
      dateInputId="timeInput"
      help="help message"
      error="error message"
      name="time-input"
      required
      isInvalid
      isInvalidMeridiem
      isIncomplete
      hideRequired
      showSeconds
    />
  </div>
);

export default TimeInputFieldDefault;
