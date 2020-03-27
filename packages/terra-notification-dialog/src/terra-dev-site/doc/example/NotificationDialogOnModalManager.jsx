import React from 'react';
import classNames from 'classnames/bind';
import ModalManager from 'terra-modal-manager';
import NotificationDialogModalContainer from './NotificationDialogModalContainer';

import styles from './example-styles.module.scss';

const cx = classNames.bind(styles);

const NotificationDialogOnModalManager = () => (
  <div className={cx('example-wrapper')}>
    <ModalManager>
      <p> Notification Dialog has the highest z-index of 9000. Click the button to trigger Notification Dialog </p>
      <NotificationDialogModalContainer />
    </ModalManager>
  </div>
);

export default NotificationDialogOnModalManager;
