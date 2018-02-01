import React from 'react';
import classNames from 'classnames/bind';
import SlidePanelManager from '../../src/SlidePanelManager';
import ManagerContentComponent from './ManagerContentComponent';

import styles from './example-styles.scss';

const cx = classNames.bind(styles);

const SlidePanelManagerExample = () => (
  <div className={cx('example-wrapper')}>
    <SlidePanelManager>
      <ManagerContentComponent />
    </SlidePanelManager>
  </div>
);

export default SlidePanelManagerExample;
