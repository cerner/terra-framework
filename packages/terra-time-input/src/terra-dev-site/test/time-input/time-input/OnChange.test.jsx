import React from 'react';
import classNames from 'classnames/bind';
import TimeInput from '../../../../TimeInput';
import styles from '../common/TimeInput.test.module.scss';

const cx = classNames.bind(styles);

class TimeInputDefault extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: null };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event, input) {
    this.setState({ input });
  }

  render() {
    return (
      <div className={cx('content-wrapper')}>
        <div id="time-input-value">
          <h3>
Time Input:
            {this.state.input}
          </h3>
        </div>
        <TimeInput
          id="timeInput"
          name="time-input"
          onChange={this.handleOnChange}
          showSeconds
        />
      </div>
    );
  }
}
export default TimeInputDefault;
