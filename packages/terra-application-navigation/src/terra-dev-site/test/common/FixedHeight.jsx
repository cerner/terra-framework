/* eslint-disable */
import React from 'react';
import classNames from 'classnames/bind';
import styles from './FixedHeight.module.scss';
const cx = classNames.bind(styles);

const FixedHeight = ({ children }) => (
  <div className={cx('outer')}>
    {children}
  </div>
);

export default FixedHeight;
