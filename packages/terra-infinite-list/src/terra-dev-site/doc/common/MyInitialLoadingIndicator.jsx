import React from 'react';
import classNames from 'classnames/bind';
import styles from './MyInitialLoadingIndicator.module.scss';

const cx = classNames.bind(styles);

const MyInitialLoadingIndicator = () => (
  <div className={cx('indicator')} />
);

export default MyInitialLoadingIndicator;
