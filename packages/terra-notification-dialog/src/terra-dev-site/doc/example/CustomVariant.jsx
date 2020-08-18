import React, { useState } from 'react';
import Button from 'terra-button';
import classNamesBind from 'classnames/bind';
import NotificationDialog from 'terra-notification-dialog';

import styles from './example-styles.module.scss';

const cx = classNamesBind.bind(styles);

const NotificationDialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      {isOpen && (
        <NotificationDialog
          variant="custom"
          custom={{
            iconClassName: cx('custom-notification-dialog-icon'),
            signalWord: 'Custom Dialog Signal Word',
          }}
          dialogTitle="Use a Title That Relates Directly to The Choices"
          startMessage="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
          acceptAction={{
            text: 'accept',
            onClick: handleCloseModal,
          }}
          rejectAction={{
            text: 'reject',
            onClick: handleCloseModal,
          }}
          buttonOrder="acceptFirst"
          emphasizedAction="accept"
        />
      )}
      <Button text="Trigger Notification Dialog" onClick={handleOpenModal} />
    </>
  );
};

export default NotificationDialogExample;
