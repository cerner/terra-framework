import React from 'react';
import classNames from 'classnames/bind';
import DisclosureComponent from './DisclosureComponent';
import SlidePanelManager from '../../../SlidePanelManager';
import styles from './SlidePanelManagerDefault.test.scss';

const cx = classNames.bind(styles);

const SlidePanelManagerDefault = () => (
  <div role="main" className={cx('content-wrapper')}>
    <SlidePanelManager>
      <DisclosureComponent identifier="root-component" disclosureType="panel" />
    </SlidePanelManager>
  </div>
);

export default SlidePanelManagerDefault;
