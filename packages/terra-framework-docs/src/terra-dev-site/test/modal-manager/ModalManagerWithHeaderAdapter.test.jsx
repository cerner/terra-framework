import React from 'react';
import classNames from 'classnames/bind';
import ModalManager from 'terra-modal-manager/src/ModalManager';
import DisclosureComponent from './DisclosureComponent';
import styles from './ModalManagerCommon.test.module.scss';

const cx = classNames.bind(styles);

const ModalManagerWithHeaderAdapter = () => (
  <div role="main" className={cx('content-wrapper')}>
    <ModalManager>
      <DisclosureComponent identifier="root-component" disclosureType="modal" renderHeaderAdapter />
    </ModalManager>
  </div>
);

export default ModalManagerWithHeaderAdapter;
