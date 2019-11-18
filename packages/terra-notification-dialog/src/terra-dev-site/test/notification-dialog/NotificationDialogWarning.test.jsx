import React from 'react';
import NotificationDialogVariant from './NotificationDialogVariant.test';
import { NotificationDialogVariants } from '../../../NotificationDialog';

const NotificationDialogWarning = () => (
  <>
    <NotificationDialogVariant variant={NotificationDialogVariants.WARNING} />
  </>
);

export default NotificationDialogWarning;
