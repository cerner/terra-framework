import React from 'react';
import classNames from 'classnames/bind';
import { Placeholder } from '@cerner/terra-docs';
import styles from './MyInitialLoadingIndicator.module.scss';

const cx = classNames.bind(styles);

const MyInitialLoadingIndicator = () => (
  <div className={cx('indicator')}>
    <Placeholder title="I'm Loading" variant="light" />
  </div>
);

export default MyInitialLoadingIndicator;
