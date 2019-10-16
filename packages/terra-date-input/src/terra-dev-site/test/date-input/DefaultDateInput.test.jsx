import React, { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DateInput from 'terra-date-input';
import classNames from 'classnames/bind';
import styles from './common/DateInput.test.module.scss';

const cx = classNames.bind(styles);

const Example = () => {
  const [value, setValue] = useState('');

  return (
    <div className={cx('content-wrapper')}>
      <DateInput
        id="dateInput"
        name="date-input"
        value={value}
        onChange={(event, dateString) => setValue(dateString)}
      />
      <p>{`DateInput Value: ${value}`}</p>
    </div>
  );
};

export default Example;
