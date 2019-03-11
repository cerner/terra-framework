import React from 'react';
import classNames from 'classnames/bind';
import styles from './MyProgressiveLoadingIndicator.module.scss';

const cx = classNames.bind(styles);

const MyProgressiveLoadingIndicator = () => (
  <div className={cx('indicator')} />
);

export default MyProgressiveLoadingIndicator;
