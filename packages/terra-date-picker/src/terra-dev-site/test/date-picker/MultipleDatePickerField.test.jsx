import React, { useState } from 'react';
import classNames from 'classnames/bind';
import DatePickerField from '../../../DatePickerField';
import styles from './common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const MultipleDatePickerField = () => {
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
      <div id="primary-description">Description text provided by user for Primary Date Picker</div>
      <DatePickerField
        label="Primary Date Picker"
        isInvalid={isInvalid}
        isIncomplete={isIncomplete}
        required={required}
        error="Error message."
        name="date-input"
        datePickerId="primary"
        help="Help message."
        inputAttributes={{ 'aria-describedby': 'primary-description' }}
      />

      <DatePickerField
        label="Secondary Date Picker"
        isInvalid={isInvalid}
        isIncomplete={isIncomplete}
        required={required}
        error="Error message."
        name="date-input"
        datePickerId="secondary"
        help="Help message."
      />
    </div>
  );
};

export default MultipleDatePickerField;
