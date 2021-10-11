import React from 'react';
import TimeInput from '../../../../TimeInput';
import TimeUtil from '../../../../TimeUtil';

class TimeInputDefault extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: null };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event, input) {
    this.setState({ input });
  }

  render() {
    return (
      <div>
        <h3 id="time-input-value">
          Time Input:
          {this.state.input}
        </h3>
        <TimeInput
          id="timeInput"
          name="time-input"
          onChange={this.handleOnChange}
          variant={TimeUtil.FORMAT_12_HOUR}
        />
      </div>
    );
  }
}
export default TimeInputDefault;
