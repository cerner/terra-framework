import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
import DatePicker from 'terra-date-picker';
import classNames from 'classnames/bind';
import styles from './DatePickerExampleCommon.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The date value used for a controlled component.
   */
  value: PropTypes.string,
};

const defaultProps = {
  value: undefined,
};

const DatePickerExample = ({ value }) => {
  const [date, setDate] = useState(value);

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
      <Field label="Enter Date" htmlFor="controlled-dates">
        <DatePicker
          name="controlled-input"
          id="controlled-dates"
          onChange={handleDateChange}
          onChangeRaw={handleDateChangeRaw}
          value={date}
        />
      </Field>
    </div>
  );
};

DatePickerExample.propTypes = propTypes;
DatePickerExample.defaultProps = defaultProps;

const DatePickerExampleControlled = () => (
  <DatePickerExample
    value={moment().format('YYYY-MM-DD')}
  />
);

export default DatePickerExampleControlled;
