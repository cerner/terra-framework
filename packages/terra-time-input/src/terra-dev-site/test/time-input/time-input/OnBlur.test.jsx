import React from 'react';
import TimeInput from '../../../../TimeInput';

class TimeInputOnBlur extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blurState: 'Blur not triggered' };
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur() {
    this.setState({ blurState: 'Blur triggered' });
  }

  render() {
    return (
      <div>
        <div id="time-input-value">
          <h3>
            Blur State:
            <span id="blur-state">{this.state.blurState}</span>
          </h3>
        </div>
        <div style={{ caretColor: 'transparent' }}>
          <TimeInput
            id="timeInput"
            name="time-input"
            variant="12-hour"
            onBlur={this.handleBlur}
          />
        </div>
      </div>
    );
  }
}
export default TimeInputOnBlur;
