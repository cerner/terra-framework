import React, { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import DatePickerField from 'terra-date-picker/lib/DatePickerField';
import styles from './DatePickerExampleCommon.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The current DatePicker date if selected. Use for the selected date message.
   */
  selectedDate: PropTypes.node,
};

const defaultProps = {
  selectedDate: '',
};

const DatePickerExample = (props) => {
  const [date, setDate] = useState(props.selectedDate);

  const handleDateChange = (event, dateValue) => {
    setDate(dateValue);
  };

  const handleDateChangeRaw = (event, dateValue, metadata) => {
    if (!metadata.isValidValue) {
      setDate(null);
    }
  };

  return (
    <div>
      <p>
        Selected ISO Date:
        <span className={cx('date-wrapper')}>{date}</span>
      </p>
      <DatePickerField
        label="Enter Date"
        name="date-input"
        datePickerId="default-field"
        onChange={handleDateChange}
        onChangeRaw={handleDateChangeRaw}
        {...props}
      />
    </div>
  );
};

DatePickerExample.propTypes = propTypes;
DatePickerExample.defaultProps = defaultProps;

export default DatePickerExample;
