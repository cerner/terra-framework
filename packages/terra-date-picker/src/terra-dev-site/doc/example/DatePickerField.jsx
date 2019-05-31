import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DatePickerField from 'terra-date-picker/lib/DatePickerField';

const propTypes = {
  /**
   * The current DatePicker date if selected. Use for the selected date message.
   */
  selectedDate: PropTypes.node,
};

const defaultProps = {
  selectedDate: '',
};

class DatePickerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: this.props.selectedDate };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(event, date) {
    this.setState({ date });
  }

  render() {
    return (
      <div>
        <p>
Selected ISO Date:
          <span style={{ display: 'inline-block' }}>{this.state.date}</span>
        </p>
        <DatePickerField
          label="Enter Date"
          name="date-input"
          datePickerId="default"
          onChange={this.handleDateChange}
          {...this.props}
        />
      </div>
    );
  }
}

DatePickerExample.propTypes = propTypes;
DatePickerExample.defualtProps = defaultProps;

export default DatePickerExample;
