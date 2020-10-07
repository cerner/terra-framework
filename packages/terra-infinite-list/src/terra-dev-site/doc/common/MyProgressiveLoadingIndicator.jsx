import React from 'react';
import classNames from 'classnames/bind';
import { Placeholder } from '@cerner/terra-docs';
import styles from './MyProgressiveLoadingIndicator.module.scss';

const cx = classNames.bind(styles);

const MyProgressiveLoadingIndicator = () => (
  <div className={cx('indicator')}>
    <Placeholder title="I'm Loading More" variant="light" />
  </div>
);

export default MyProgressiveLoadingIndicator;
