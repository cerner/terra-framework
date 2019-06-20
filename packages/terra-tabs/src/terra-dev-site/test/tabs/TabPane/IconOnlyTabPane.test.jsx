import React from 'react';
import classNames from 'classnames/bind';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import TabPane from '../../../../TabPane';
import styles from './common/TabPane.test.scss';

const cx = classNames.bind(styles);

const IconOnlyTabPane = () => (
  <div role="tablist" className={cx('content-wrapper')}>
    <TabPane
      label="Icon Only"
      id="iconOnly"
      icon={<IconSearch />}
      isIconOnly
    />
  </div>
);

export default IconOnlyTabPane;
