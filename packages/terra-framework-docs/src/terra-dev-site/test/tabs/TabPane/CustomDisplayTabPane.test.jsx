import React from 'react';
import classNames from 'classnames/bind';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import TabPane from 'terra-tabs';
import styles from './common/TabPane.test.module.scss';

const cx = classNames.bind(styles);

const CustomDisplayTabPane = () => (
  <div role="tablist" className={cx('content-wrapper')}>
    <TabPane
      label="Custom Display"
      id="customDisplay"
      customDisplay={(
        <div id="customDisplayContent">
          <span className={cx('custom-display-content')}>
            Custom Display
          </span>
          <IconSearch />
        </div>
      )}
    />
  </div>
);

export default CustomDisplayTabPane;
