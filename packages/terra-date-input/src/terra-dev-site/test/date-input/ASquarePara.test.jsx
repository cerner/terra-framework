import React from 'react';
import classNames from 'classnames/bind';
import styles from './common/DateInput.test.module.scss';

const cx = classNames.bind(styles);

const SquareParaExample = () => {
  const value = 'A';

  return (
    <div className={cx('content-wrapper')}>
      <div className={cx('red-square')}>{value}</div>
      <p>{`Paragraph: ${value}`}</p>
    </div>
  );
};

export default SquareParaExample;
