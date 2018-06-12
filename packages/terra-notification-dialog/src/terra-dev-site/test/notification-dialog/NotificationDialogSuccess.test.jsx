import React from 'react';
import NotificationDialogVariant from './NotificationDialogVariant.test';
import { NotificationDialogVariants } from '../../../NotificationDialog';

const NotificationDialogSuccess = () => (
  <div>
    <NotificationDialogVariant variant={NotificationDialogVariants.SUCCESS} />
  </div>
);

export default NotificationDialogSuccess;
