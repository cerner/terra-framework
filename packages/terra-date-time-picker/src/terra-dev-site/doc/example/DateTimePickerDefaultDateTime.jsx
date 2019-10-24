import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
import DateTimePicker from 'terra-date-time-picker';

const propTypes = {
  /**
   * The current entered date time. Use for the selected date message.
   */
  value: PropTypes.node,
};

const defaultProps = {
  value: '',
};

class DateTimePickerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dateTime: this.props.value };
    this.handleDateTimeChange = this.handleDateTimeChange.bind(this);
  }

  handleDateTimeChange(event, dateTime) {
    this.setState({ dateTime });
  }

  render() {
    return (
      <div>
        <p>
          Selected ISO Date Time:
          {this.state.dateTime}
        </p>
        <Field label="Enter Date/Time" htmlFor="defaultDateTime">
          <DateTimePicker
            name="date-time-picker-example"
            dateInputAttributes={{ id: 'defaultDateTime' }}
            onChange={this.handleDateTimeChange}
            {...this.props}
          />
        </Field>
      </div>
    );
  }
}

DateTimePickerExample.propTypes = propTypes;
DateTimePickerExample.defaultProps = defaultProps;

const DateTimePickerExampleDefaultDateTime = () => (
  <DateTimePickerExample
    value={moment().format()}
  />
);

export default DateTimePickerExampleDefaultDateTime;
