import React from 'react';
import TimeInput from '../../../../TimeInput';
import TimeUtil from '../../../../TimeUtil';

export default class TimeInputElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '15:23' };
    this.handleOnChange = this.handleOnChange.bind(this);
    if (!window.ontouchstart) {
      this.resetontouchstart = true;
      window.ontouchstart = 'true';
    }
  }

  componentDidMount() {
    if (!window.ontouchstart) {
      this.resetontouchstart = true;
      window.ontouchstart = 'true';
    }
  }

  componentWillUnmount() {
    if (this.resetontouchstart) {
      delete window.ontouchstart;
    }
  }

  handleOnChange(event, input) {
    this.setState({ input });
  }

  render() {
    return (
      <>
        <h3>Empty Time Input</h3>
        <TimeInput
          id="timeInput"
          name="time-input"
          variant={TimeUtil.FORMAT_12_HOUR}
        />
        <h3>(this picker is changeable)</h3>
        <div id="time-input-value">
          <h3>
            Time Input with value provided - Current Value:
            {this.state.input}
          </h3>
        </div>
        <TimeInput
          id="timeInputValueProvided"
          name="time-input-value-provided"
          value={this.state.input}
          onChange={this.handleOnChange}
          variant={TimeUtil.FORMAT_12_HOUR}
        />
        <h3>Time Input with IDs Provided</h3>
        <TimeInput
          id="timeInputIdProvided"
          name="time-input-id-provided"
          value="09:23"
          hourAttributes={{ id: 'hours-testing' }}
          minuteAttributes={{ id: 'minutes-testing' }}
          variant={TimeUtil.FORMAT_12_HOUR}
        />
        <h3>Time Input with disabled input</h3>
        <TimeInput
          id="timeInputDisabled"
          name="time-input-disabled"
          variant={TimeUtil.FORMAT_12_HOUR}
          disabled
        />
        <h3>Time Input with Second</h3>
        <TimeInput
          id="timeInputWithSecond"
          name="time-input-with-second"
          variant={TimeUtil.FORMAT_12_HOUR}
          showSeconds
        />
        <h3>Time Input with Invalid Meridiem</h3>
        <TimeInput
          id="timeInputWithInvalidMeridiem"
          name="time-input-with-invalid-meridiem"
          variant={TimeUtil.FORMAT_12_HOUR}
          showSeconds
          isInvalid
          isInvalidMeridiem
        />
      </>
    );
  }
}
