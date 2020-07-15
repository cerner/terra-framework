import React from 'react';
import classNames from 'classnames/bind';
import Tab from '../../../../Tab';
import styles from './common/TabPane.test.module.scss';

const cx = classNames.bind(styles);

const LongTextTabPane = () => (
  <div role="tablist" className={cx('content-wrapper')}>
    <Tab
      label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat eros quis erat tincidunt, id scelerisque magna ultricies. Vivamus pellentesque."
      id="longText"
    />
  </div>
);

export default LongTextTabPane;
