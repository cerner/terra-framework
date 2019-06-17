import React from 'react';
// eslint-disable-next-line import/no-unresolved, import/extensions
import TimeInput from 'terra-time-input/lib/TimeInput';

class timeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: '12:12:12', hasSeconds: true };
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleTimeChange(event, time) {
    this.setState({ time });
  }

  render() {
    return (
      <div>
        <p>
Time Provided:
          <span style={{ display: 'inline-block' }}>{this.state.time}</span>
        </p>
        <TimeInput
          name="time-input-value"
          value={this.state.time}
          hasSeconds={this.state.hasSeconds}
          onChange={this.handleTimeChange}
        />
      </div>
    );
  }
}

export default timeInput;
