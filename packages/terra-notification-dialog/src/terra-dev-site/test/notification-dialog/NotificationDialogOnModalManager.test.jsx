import React from 'react';
import ModalManager from 'terra-modal-manager';
import NotificationDialogModalContainer from '../../doc/common/NotificationDialogModalContainer';

const NotificationDialogOnModalManager = () => (
  <ModalManager>
    <p> Notification Dialog has the highest z-index of 9001. Click the button to trigger Notification Dialog </p>
    <NotificationDialogModalContainer />
  </ModalManager>
);

export default NotificationDialogOnModalManager;
