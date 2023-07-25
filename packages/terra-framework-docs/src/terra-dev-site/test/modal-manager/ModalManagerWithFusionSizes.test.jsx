import React from 'react';
import classNames from 'classnames/bind';
import ModalManager from 'terra-modal-manager';
import DisclosureComponent from './DisclosureFusionComponent';
import styles from './ModalManagerCommon.test.module.scss';

const cx = classNames.bind(styles);

const ModalManagerWithFusionSizes = () => (
  <div role="main" className={cx('content-wrapper')}>
    <ModalManager>
      <DisclosureComponent identifier="root-component" disclosureType="modal" />
    </ModalManager>
  </div>
);

export default ModalManagerWithFusionSizes;
