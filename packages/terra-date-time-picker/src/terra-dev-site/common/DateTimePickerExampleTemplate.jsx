import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved, import/extensions
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

class DatePickerExample extends React.Component {
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
          <span id="date-time-value">{this.state.dateTime}</span>
        </p>
        <DateTimePicker
          name="date-time-picker-example"
          onChange={this.handleDateTimeChange}
          {...this.props}
        />
      </div>
    );
  }
}

DatePickerExample.propTypes = propTypes;
DatePickerExample.defualtProps = defaultProps;

export default DatePickerExample;
