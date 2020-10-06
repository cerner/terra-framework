import React from 'react';
import classNames from 'classnames/bind';
import TimeInput from '../../../../TimeInput';
import styles from '../common/TimeInput.test.module.scss';

const cx = classNames.bind(styles);

const TimeInputDefault = () => (
  <div className={cx('content-wrapper')}>
    <div id="abc">User Defined</div>
    <TimeInput
      id="timeInput"
      name="time-input"
      value="12:00"
      hourAttributes={{ 'aria-describedby': 'abc' }}
    />
  </div>
);

export default TimeInputDefault;
