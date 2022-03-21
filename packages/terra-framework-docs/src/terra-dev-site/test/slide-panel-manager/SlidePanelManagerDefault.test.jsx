import React from 'react';
import classNames from 'classnames/bind';
import SlidePanelManager from 'terra-slide-panel-manager';
import DisclosureComponent from './DisclosureComponent';
import styles from './SlidePanelManagerDefault.test.module.scss';

const cx = classNames.bind(styles);

const SlidePanelManagerDefault = () => (
  <div role="main" className={cx('content-wrapper')}>
    <SlidePanelManager>
      <DisclosureComponent identifier="root-component" disclosureType="panel" />
    </SlidePanelManager>
  </div>
);

export default SlidePanelManagerDefault;
