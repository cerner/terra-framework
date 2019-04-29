import React from 'react';
import DatePickerField from '../../../../lib/DatePickerField';

class DatePickerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isInvalid: false };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState(prevState => ({
      isInvalid: !prevState.isInvalid,
    }));
  }

  render() {
    return (
      <div>
        <button type="button" id="validity-toggle" onClick={this.handleButtonClick}>Toggle Validity</button>
        <DatePickerField
          label="Enter Date"
          isInvalid={this.state.isInvalid}
          error="Error message."
          name="date-input"
          datePickerId="default"
          help="Help message."
        />
      </div>
    );
  }
}

export default DatePickerExample;
