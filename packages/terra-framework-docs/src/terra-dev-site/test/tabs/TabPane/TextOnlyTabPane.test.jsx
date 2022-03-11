import React from 'react';
import classNames from 'classnames/bind';
import TabPane from 'terra-tabs';
import styles from './common/TabPane.test.module.scss';

const cx = classNames.bind(styles);

const TextOnlyTabPane = () => (
  <div role="tablist" className={cx('content-wrapper')}>
    <TabPane
      label="Text only tab pane"
      id="textOnly"
    />
  </div>
);

export default TextOnlyTabPane;
