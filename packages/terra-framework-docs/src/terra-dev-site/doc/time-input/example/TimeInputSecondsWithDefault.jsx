import React from 'react';
import TimeInput from 'terra-time-input';
import Field from 'terra-form-field';

class timeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: '12:37:14' };
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleTimeChange(event, time) {
    this.setState({ time });
  }

  render() {
    return (
      <div>
        <Field
          label={`Entered Time: ${this.state.time}`}
          htmlFor="time-input-value"
        >
          <TimeInput
            a11yLabel="Entered Time"
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
