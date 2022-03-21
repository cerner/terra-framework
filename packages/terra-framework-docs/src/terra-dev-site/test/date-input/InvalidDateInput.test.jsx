import React from 'react';

import DateInput from 'terra-date-input';
import classNames from 'classnames/bind';
import styles from './common/DateInput.test.module.scss';

const cx = classNames.bind(styles);

const Example = () => (
  <div className={cx('content-wrapper')}>
    <DateInput
      id="dateInput"
      name="date-input"
      value="1999-03-10"
      isInvalid
    />
  </div>
);

export default Example;
