import React from 'react';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
import DatePicker from 'terra-date-picker';
import classNames from 'classnames/bind';
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

class DatePickerInvalidExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: this.props.selectedDate };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDateChangeRaw = this.handleDateChangeRaw.bind(this);
  }

  handleDateChange(event, date) {
    this.setState({ date });
  }

  handleDateChangeRaw(event, date, metadata) {
    if (!metadata.isValidValue) {
      this.setState({ date: null });
    }
  }

  render() {
    return (
      <div>
        <p>
          Selected ISO Date:
          <span className={cx('date-wrapper')}>{this.state.date}</span>
        </p>
        <Field label="Enter Date" htmlFor="default-invalid">
          <DatePicker
            name="date-input"
            id="default-invalid"
            onChange={this.handleDateChange}
            onChangeRaw={this.handleDateChangeRaw}
            isInvalid
            {...this.props}
          />
        </Field>
      </div>
    );
  }
}

DatePickerInvalidExample.propTypes = propTypes;
DatePickerInvalidExample.defaultProps = defaultProps;

export default DatePickerInvalidExample;
