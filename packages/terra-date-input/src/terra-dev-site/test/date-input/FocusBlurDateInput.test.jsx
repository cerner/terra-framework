import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DateInput from 'terra-date-input';
import classNames from 'classnames/bind';
import styles from './common/DateInput.test.module.scss';

const cx = classNames.bind(styles);

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
      <div className={cx('content-wrapper')}>
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
