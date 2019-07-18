/* eslint-disable import/no-unresolved */
import React from 'react';
import TimeInput from 'terra-time-input/lib/TimeInput';
import TimeUtil from 'terra-time-input/lib/TimeUtil';
import classNames from 'classnames/bind';
import styles from './TimeInput.module.scss';

const cx = classNames.bind(styles);

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
        <p>
          Time Provided:
          <span className={cx('time-wrapper')}>{this.state.time}</span>
        </p>
        <TimeInput
          name="time-input-value"
          value={this.state.time}
          onChange={this.handleTimeChange}
          showSeconds
          variant={TimeUtil.FORMAT_12_HOUR}
        />
      </div>
    );
  }
}

export default timeInput;
