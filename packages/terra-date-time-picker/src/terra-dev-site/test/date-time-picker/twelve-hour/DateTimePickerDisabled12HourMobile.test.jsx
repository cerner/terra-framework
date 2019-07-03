import React from 'react';
import classNames from 'classnames/bind';
import DateTimePickerExampleTemplate from '../../../common/DateTimePickerExampleTemplate';
import DateTimeUtil from '../../../../DateTimeUtils';
import styles from './DateTimePicker12HourMobile.test.module.scss';

const cx = classNames.bind(styles);

export default class DateTimePicker12HourDisabledMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { datetime: '2019-04-10T15:23:00-05:00' };
    this.handleOnChange = this.handleOnChange.bind(this);
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

  handleOnChange(event, datetime) {
    this.setState({ datetime });
  }

  render() {
    return (
      <div className={cx('content-wrapper')}>
        <h3 id="titleWithDateTimeValue">Disabled Date-Time-Picker</h3>
        <DateTimePickerExampleTemplate
          id="disabledDatetimeValueProvided"
          disabled
          value={this.state.datetime}
          timeVariant={DateTimeUtil.FORMAT_12_HOUR}
        />
      </div>
    );
  }
}
