import React from 'react';
// eslint-disable-next-line import/no-unresolved, import/extensions
import TimeInput from 'terra-time-input/lib/TimeInput';
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
          name="time-input-default"
          onChange={this.handleTimeChange}
        />
      </div>
    );
  }
}

export default timeInput;
