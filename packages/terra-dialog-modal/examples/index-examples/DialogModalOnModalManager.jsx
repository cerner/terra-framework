import React from 'react';
import classNames from 'classnames/bind';
import ModalManager from 'terra-modal-manager';
import DialogModalContainer from './DialogModalContainer';

import styles from './example-styles.scss';

const cx = classNames.bind(styles);

const DialogModalOnModalManager = () => (
  <div className={cx('example-wrapper')}>
    <ModalManager>
      <h4> Dialog Modal on Modal Manager</h4>
      <p> Dialog Modal has z-index of 8001 which is higher than that of modal manager. Click the button to trigger Dialog Modal </p>
      <DialogModalContainer />
    </ModalManager>
  </div>
);

export default DialogModalOnModalManager;
