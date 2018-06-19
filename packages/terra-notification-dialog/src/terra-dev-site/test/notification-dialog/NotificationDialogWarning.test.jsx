import React from 'react';
import NotificationDialogVariant from './NotificationDialogVariant.test';
import { NotificationDialogVariants } from '../../../NotificationDialog';

const NotificationDialogWarning = () => (
  <div>
    <NotificationDialogVariant variant={NotificationDialogVariants.WARNING} />
  </div>
);

export default NotificationDialogWarning;
