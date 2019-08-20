import React from 'react';
import DateInput from 'terra-date-input';


class DateInputOnBlur extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blurTriggerCount: 0, focusTriggerCount: 0, value: '' };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.blurCount = 0;
    this.focusCount = 0;
  }

  handleBlur() {
    this.blurCount = this.blurCount + 1;
    this.setState({ blurTriggerCount: this.blurCount });
  }

  handleFocus() {
    this.focusCount = this.focusCount + 1;
    this.setState({ focusTriggerCount: this.focusCount });
  }

  handleOnChangeFocus(event, dateString) {
    this.setState({ value: dateString });
  }

  render() {
    return (
      <div>
        <div id="date-input-value">
          <h3>
            onBlur Trigger Count:
            <span id="blur-count">{this.state.blurTriggerCount}</span>
            <br />
            <br />
            onFocus Trigger Count:
            <span id="focus-count">{this.state.focusTriggerCount}</span>
          </h3>
        </div>
        <DateInput
          id="dateInput"
          name="date-input"
          value={this.state.value}
          onChange={this.handleOnChange}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
        />
      </div>
    );
  }
}
export default DateInputOnBlur;
