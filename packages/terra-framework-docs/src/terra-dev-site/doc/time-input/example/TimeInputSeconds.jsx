import React from 'react';
import TimeInput from 'terra-time-input';
import Field from 'terra-form-field';

class timeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: '' };
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleTimeChange(event, time) {
    this.setState({ time });
  }

  render() {
    return (
      <div>
        <Field
          label={`Enter Time: ${this.state.time}`}
          htmlFor="time-input-value"
        >
          <TimeInput
            a11yLabel="Enter Time"
            name="time-input-value"
            value={this.state.time}
            onChange={this.handleTimeChange}
            showSeconds
          />
        </Field>
      </div>
    );
  }
}

export default timeInput;
