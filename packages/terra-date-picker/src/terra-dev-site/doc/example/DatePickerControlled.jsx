import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
// eslint-disable-next-line import/no-unresolved, import/extensions, import/no-extraneous-dependencies
import DatePicker from 'terra-date-picker/lib/DatePicker';

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
    this.state = { date: this.props.selectedDate };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDateChangeRaw = this.handleDateChangeRaw.bind(this);
  }

  handleDateChange(event, date) {
    this.setState({ date });
  }

  handleDateChangeRaw(event, date) {
    this.setState({ date });
  }

  render() {
    return (
      <div>
        <p>
Selected ISO Date:
          <span style={{ display: 'inline-block' }}>{this.state.date}</span>
        </p>
        <Field label="Enter Date" htmlFor="controlled-dates">
          <DatePicker
            name="date-input"
            id="controlled-dates"
            onChange={this.handleDateChange}
            onChangeRaw={this.handleDateChangeRaw}
            value={this.props.value}
          />
        </Field>
      </div>
    );
  }
}

DatePickerExample.propTypes = propTypes;
DatePickerExample.defualtProps = defaultProps;

const DatePickerExampleControlled = () => (
  <DatePickerExample
    value={moment().format()}
  />
);

export default DatePickerExampleControlled;
