import React from 'react';
import TimeInput from 'terra-time-input';
import classNames from 'classnames/bind';
import styles from './TimeInputDocCommon.module.scss';

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
          isInvalid
        />
      </div>
    );
  }
}

export default timeInput;
