import React from 'react';
import classNamesBind from 'classnames/bind';
import NotificationDialogVariant from './NotificationDialogVariant';

import styles from './CustomVariant.module.scss';

const cx = classNamesBind.bind(styles);

const NotificationDialogError = () => (
  <NotificationDialogVariant
    variant="custom"
    custom={{
      iconClassName: cx('custom-notification-dialog-icon'),
      signalWord: 'Custom Signal Word',
    }}
  />
);

export default NotificationDialogError;
