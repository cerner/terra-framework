import React from 'react';
import classNames from 'classnames/bind';
import TimeInput from '../../../../TimeInput';
import styles from './time-input.test.module.scss';

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
      <div>
        <div id="time-input-value">
          <h3>
Time Input:
            {this.state.input}
          </h3>
        </div>
        <div className={cx(['content-wrapper'])}>
          <TimeInput
            id="timeInput"
            name="time-input"
            onChange={this.handleOnChange}
            showSeconds
          />
        </div>
      </div>
    );
  }
}
export default TimeInputDefault;
