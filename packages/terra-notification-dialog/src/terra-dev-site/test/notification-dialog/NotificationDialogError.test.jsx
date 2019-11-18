import React from 'react';
import NotificationDialogVariant from './NotificationDialogVariant.test';
import { NotificationDialogVariants } from '../../../NotificationDialog';

const NotificationDialogError = () => (
  <>
    <NotificationDialogVariant variant={NotificationDialogVariants.ERROR} />
  </>
);

export default NotificationDialogError;
