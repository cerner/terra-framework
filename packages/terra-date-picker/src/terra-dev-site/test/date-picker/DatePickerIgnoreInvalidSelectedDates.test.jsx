import React from 'react';
import classNames from 'classnames/bind';
import DatePicker from '../../../DatePicker';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const DatePickerInvalidSelectedDates = () => (
  <div className={cx('content-wrapper')}>
    <span id="selected-date">selectedDate = null</span>
    <br />
    <DatePicker
      name="null-selectedDate"
      selectedDate={null}
    />
    <br />
    <br />
    <span id="selected-date">selectedDate = undefined</span>
    <br />
    <DatePicker
      name="undefined-selectedDate"
      selectedDate={undefined}
    />
    <br />
    <br />
    <span id="selected-date">selectedDate = </span>
    &quot;&quot;
    <br />
    <DatePicker
      name="empty-selectedDate"
      selectedDate=""
    />
    <br />
    <br />
    <span id="selected-date">selectedDate = </span>
    &quot;abc&quot;
    <br />
    <DatePicker
      name="character-selectedDate"
      selectedDate="abc"
    />
    <br />
    <br />
    <span id="selected-date">selectedDate = </span>
    &quot;!@#$&quot;
    <br />
    <DatePicker
      name="special-character-selectedDate"
      selectedDate="!@#$"
    />
  </div>
);

export default DatePickerInvalidSelectedDates;
