/* eslint-disable */
import React from 'react';
import classNames from 'classnames/bind';
import styles from './PageContent.module.scss';
const cx = classNames.bind(styles);

const PageContent = ({ title, subtitle }) => (
  <div className={cx('outer')}>
    <div className={cx('inner')}>
      <div className={cx('center')}>
        <button className={cx('button')}>{title}</button>
        <div>{subtitle}</div>
      </div>
    </div>
  </div>
);

export default PageContent;
