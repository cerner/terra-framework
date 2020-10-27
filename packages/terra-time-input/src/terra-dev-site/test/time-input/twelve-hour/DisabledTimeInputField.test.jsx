import React from 'react';
import classNames from 'classnames/bind';
import TimeInputField from '../../../../TimeInputField';
import TimeUtil from '../../../../TimeUtil';
import styles from '../common/TimeInput.test.module.scss';

const cx = classNames.bind(styles);

const TimeInputFieldDefault = () => (
  <div className={cx('content-wrapper')}>
    <TimeInputField
      timeInputId="timeInputField"
      name="time-input-field"
      label="Label text"
      value="12:00"
      variant={TimeUtil.FORMAT_12_HOUR}
      help="Help message."
      disabled
    />
  </div>
);

export default TimeInputFieldDefault;
