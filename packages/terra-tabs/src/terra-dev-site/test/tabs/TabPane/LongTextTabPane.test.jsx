import React from 'react';
import classNames from 'classnames/bind';
import TabPane from '../../../../TabPane';
import styles from './common/TabPane.test.scss';

const cx = classNames.bind(styles);

const LongTextTabPane = () => (
  <div role="tablist" className={cx('content-wrapper')}>
    <TabPane
      label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat eros quis erat tincidunt, id scelerisque magna ultricies. Vivamus pellentesque."
      id="longText"
    />
  </div>
);

export default LongTextTabPane;
