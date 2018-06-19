import React from 'react';
import NotificationDialogVariant from './NotificationDialogVariant.test';
import { NotificationDialogVariants } from '../../../NotificationDialog';

const NotificationDialogError = () => (
  <div>
    <NotificationDialogVariant variant={NotificationDialogVariants.ERROR} />
  </div>
);

export default NotificationDialogError;
