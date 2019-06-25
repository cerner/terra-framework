import React from 'react';
import classNames from 'classnames/bind';
import DisclosureComponent from './DisclosureIntegrationComponent';
import ModalManager from '../../../ModalManager';
import styles from './ModalManagerCommon.test.module.scss';

const cx = classNames.bind(styles);

const ModalManagerDefault = () => (
  <div role="main" className={cx('content-wrapper')}>
    <ModalManager>
      <DisclosureComponent identifier="root-component" disclosureType="modal" />
    </ModalManager>
  </div>
);

export default ModalManagerDefault;
