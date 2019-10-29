import React from 'react';
import classNames from 'classnames/bind';
import TimeInput from '../../../../TimeInput';
import styles from '../common/TimeInput.test.module.scss';

const cx = classNames.bind(styles);

export default class TimeInputElement extends React.Component {
  constructor(props) {
    super(props);

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

  render() {
    return (
      <div className={cx('content-wrapper')}>
        <TimeInput
          id="timeInput"
          name="time-input"
          value="10:23"
          isInvalid
        />
      </div>
    );
  }
}
