import React from 'react';
import classNames from 'classnames/bind';
import TimeInput from '../../../../TimeInput';
import styles from './time-input.test.module.scss';

const cx = classNames.bind(styles);

class TimeInputOnBlur extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blurTriggerCount: 0, focusTriggerCount: 0 };
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

  render() {
    return (
      <div>
        <div id="time-input-value">
          <h3>
            onBlur Trigger Count:
            <span id="blur-count">{this.state.blurTriggerCount}</span>
            <br />
            <br />
            onFocus Trigger Count:
            <span id="focus-count">{this.state.focusTriggerCount}</span>
          </h3>
        </div>
        <div className={cx('content-wrapper')}>
          <TimeInput
            id="timeInput"
            name="time-input"
            variant="12-hour"
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
          />
        </div>
      </div>
    );
  }
}
export default TimeInputOnBlur;
