import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
import DateTimePicker from 'terra-date-time-picker/lib/DateTimePicker';


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
        <Field label="Enter Date/Time" htmlFor="min-max-dates">
          <DateTimePicker
            name="date-time-picker-example"
            dateInputAttributes={{ id: 'min-max-dates' }}
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

const DateTimePickerExampleMinMax = () => (
  <DateTimePickerExample
    minDate={moment().format()}
    maxDate={moment().add(6, 'days').format()}
  />
);

export default DateTimePickerExampleMinMax;
