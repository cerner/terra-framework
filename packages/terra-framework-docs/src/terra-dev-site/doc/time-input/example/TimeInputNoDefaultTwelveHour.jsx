import React from 'react';
import TimeInput from 'terra-time-input/lib/TimeInput';
import TimeUtil from 'terra-time-input/lib/TimeUtil';
import Field from 'terra-form-field';
import moment from 'moment-timezone';

class timeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: '', labelValue: '' };
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleTimeChange(event, time, meridiem) {
    if (meridiem === 'p.m.') {
      const updatedTime = moment(time, ['HH:mm']).format('hh:mm');
      this.setState({ labelValue: updatedTime });
    } else {
      this.setState({ time });
    }
  }

  render() {
    return (
      <div>
        <Field
          label={`Enter Time: ${this.state.labelValue}`}
          htmlFor="time-input-value"
        >
          <TimeInput
            a11yLabel="Enter Time"
            name="time-input-value"
            value={this.state.time}
            onChange={this.handleTimeChange}
            variant={TimeUtil.FORMAT_12_HOUR}
          />
        </Field>
      </div>
    );
  }
}

export default timeInput;
