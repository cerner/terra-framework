import React from 'react';
import classNames from 'classnames/bind';
import styles from '../example/InfiniteListDocExampleCommon.module.scss';

const cx = classNames.bind(styles);

/* eslint-disable */
const MyExampleContainer = ({ children }) => (
  <div className={cx('main-content')}>
    {children}
  </div>
);

export default MyExampleContainer;
