import React from 'react';
import classNames from 'classnames/bind';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Tab from '../../../../Tab';
import styles from './common/TabPane.test.module.scss';

const cx = classNames.bind(styles);

const IconAndTextTabPane = () => (
  <div role="tablist" className={cx('content-wrapper')}>
    <Tab
      label="Icon and Text"
      id="iconAndText"
      icon={<IconSearch />}
    />
  </div>
);

export default IconAndTextTabPane;
