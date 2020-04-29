import React from 'react';
import classNames from 'classnames/bind';
import Tab from '../../../../Tab';
import styles from './common/TabPane.test.module.scss';

const cx = classNames.bind(styles);

const TextOnlyTabPane = () => (
  <div role="tablist" className={cx('content-wrapper')}>
    <Tab
      label="Text only tab pane"
      id="textOnly"
    />
  </div>
);

export default TextOnlyTabPane;
