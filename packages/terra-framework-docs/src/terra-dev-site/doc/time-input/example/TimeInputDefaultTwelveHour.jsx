import React from 'react';
import TimeInput from 'terra-time-input/lib/TimeInput';
import TimeUtil from 'terra-time-input/lib/TimeUtil';
import Field from 'terra-form-field';
import moment from 'moment-timezone';

class timeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: '09:24', labelValue: '09:24' };
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleTimeChange(event, time, meridiem) {
    if (meridiem === 'p.m.') {
      const updatedTime = moment(time, ['HH:mm']).format('hh:mm');
      this.setState({ labelValue: updatedTime });
    } else {
      this.setState({ labelValue: time });
      this.setState({ time });
    }
  }

  render() {
    return (
      <div>
        <Field
          label={`Entered Time: ${this.state.labelValue}`}
          htmlFor="time-input-value"
        >
          <TimeInput
            a11yLabel="Entered Time"
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
