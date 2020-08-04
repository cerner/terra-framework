import React from 'react';
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

class DatePickerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: this.props.value };
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
        <Field label="Enter Date" htmlFor="controlled-dates">
          <DatePicker
            name="controlled-input"
            id="controlled-dates"
            onChange={this.handleDateChange}
            onChangeRaw={this.handleDateChangeRaw}
            value={this.state.date}
          />
        </Field>
      </div>
    );
  }
}

DatePickerExample.propTypes = propTypes;
DatePickerExample.defaultProps = defaultProps;

const DatePickerExampleControlled = () => (
  <DatePickerExample
    value={moment().format('YYYY-MM-DD')}
  />
);

export default DatePickerExampleControlled;
