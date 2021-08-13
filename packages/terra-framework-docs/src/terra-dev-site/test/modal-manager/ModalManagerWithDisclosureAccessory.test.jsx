import React from 'react';
import classNames from 'classnames/bind';
import ModalManager from 'terra-modal-manager';
import DisclosureComponent from './DisclosureComponent';
import styles from './ModalManagerCommon.test.module.scss';

const cx = classNames.bind(styles);

const ModalManagerWithDisclosureAccessory = () => (
  <div role="main" className={cx('content-wrapper')}>
    <ModalManager
      disclosureAccessory={<div className={cx('disclosure-accessory')}>Disclosure Accessory</div>}
    >
      <DisclosureComponent identifier="root-component" disclosureType="modal" renderHeaderAdapter />
    </ModalManager>
  </div>
);

export default ModalManagerWithDisclosureAccessory;
