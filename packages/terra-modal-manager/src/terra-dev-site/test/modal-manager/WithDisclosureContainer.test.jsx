import React from 'react';
import classNames from 'classnames/bind';
import DisclosureComponent from './DisclosureComponent';
import ModalManager from '../../../ModalManager';
import styles from './ModalManagerCommon.test.module.scss';

const cx = classNames.bind(styles);

const DisclosureContainer = (wrappedContent) => (
  <div data-disclosure-container className={cx('disclosure-container')}>
    I am wrapping the content with a purple background!
    {wrappedContent}
  </div>
);

const ModalManagerWithDisclosureContainer = () => (
  <div role="main" className={cx('content-wrapper')}>
    <ModalManager
      withDisclosureContainer={DisclosureContainer}
    >
      <DisclosureComponent identifier="root-component" disclosureType="modal" renderHeaderAdapter />
    </ModalManager>
  </div>
);

export default ModalManagerWithDisclosureContainer;
