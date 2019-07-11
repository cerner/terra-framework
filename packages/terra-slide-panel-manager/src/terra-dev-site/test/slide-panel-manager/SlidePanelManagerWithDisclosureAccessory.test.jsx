import React from 'react';
import classNames from 'classnames/bind';
import DisclosureComponent from './DisclosureComponent';
import SlidePanelManager from '../../../SlidePanelManager';
import styles from './SlidePanelManagerDefault.test.module.scss';

const cx = classNames.bind(styles);

const SlidePanelManagerWithDisclosureAccessory = () => (
  <div role="main" className={cx('content-wrapper')}>
    <SlidePanelManager
      disclosureAccessory={<div className={cx('disclosure-accessory')}>Disclosure Accessory</div>}
    >
      <DisclosureComponent identifier="root-component" disclosureType="panel" renderHeaderAdapter />
    </SlidePanelManager>
  </div>
);

export default SlidePanelManagerWithDisclosureAccessory;
