import React from 'react';
import NotificationDialogVariant from './NotificationDialogVariant.test';
import { NotificationDialogVariants } from '../../../NotificationDialog';

const NotificationDialogInfo = () => (
  <div>
    <NotificationDialogVariant variant={NotificationDialogVariants.INFO} />
  </div>
);

export default NotificationDialogInfo;
