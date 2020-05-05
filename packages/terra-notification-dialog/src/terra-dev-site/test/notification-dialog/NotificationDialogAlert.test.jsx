import React from 'react';
import NotificationDialogVariant from './NotificationDialogVariant';
import { NotificationDialogVariants } from '../../../NotificationDialog';

const NotificationDialogError = () => (
  <NotificationDialogVariant variant={NotificationDialogVariants.ALERT} />
);

export default NotificationDialogError;
