/* eslint-disable */
import React from 'react';
import classNames from 'classnames/bind';
import styles from './PageContent.module.scss';
const cx = classNames.bind(styles);

const PageContent = ({ title }) => (
  <div className={cx('outer')}>
    <div className={cx('inner')}>
      <button className={cx('button')}>{title}</button>
    </div>
  </div>
);

export default PageContent;
