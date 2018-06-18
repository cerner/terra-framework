import React from 'react';
import classNames from 'classnames/bind';
import ModalManager from 'terra-modal-manager';
import NotificationDialogModalContainer from './NotificationDialogModalContainer';

import styles from './example-styles.scss';

const cx = classNames.bind(styles);

const NotificationDialogOnModalManager = () => (
  <div className={cx('example-wrapper')}>
    <ModalManager>
      <h4> Notification Dialog on Modal Manager</h4>
      <p> Notification Dialog has the highest z-index of 9001. Click the button to trigger Notification Dialog </p>
      <NotificationDialogModalContainer />
    </ModalManager>
  </div>
);

export default NotificationDialogOnModalManager;
