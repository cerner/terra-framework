import React from 'react';
import classNames from 'classnames/bind';
import TimeInput from 'terra-time-input';
import styles from '../common/TimeInput.test.module.scss';

const cx = classNames.bind(styles);

class TimeInputOnBlur extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blurTriggerCount: 0, focusTriggerCount: 0, timeObj: {} };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.blurCount = 0;
    this.focusCount = 0;
  }

  handleBlur(event, metaData) {
    this.blurCount += 1;
    this.setState({ blurTriggerCount: this.blurCount, timeObj: metaData });
  }

  handleFocus() {
    this.focusCount += 1;
    this.setState({ focusTriggerCount: this.focusCount });
  }

  render() {
    return (
      <div className={cx('content-wrapper')}>
        <div id="time-input-value">
          <h3>
            onBlur Trigger Count:
            <span id="blur-count">{this.state.blurTriggerCount}</span>
            <br />
            <br />
            onFocus Trigger Count:
            <span id="focus-count">{this.state.focusTriggerCount}</span>
            <br />
            <br />
            Time Object:
            <span id="time-obj">{JSON.stringify(this.state.timeObj)}</span>
          </h3>
        </div>
        <TimeInput
          id="timeInput"
          name="time-input"
          variant="12-hour"
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
        />
      </div>
    );
  }
}
export default TimeInputOnBlur;
