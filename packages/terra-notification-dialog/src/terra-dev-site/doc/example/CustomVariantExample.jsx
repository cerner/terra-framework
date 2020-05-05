import React, { useState } from 'react';
import Button from 'terra-button';
import classNamesBind from 'classnames/bind';
import NotificationDialog from 'terra-notification-dialog';

import styles from './example-styles.module.scss';

const cx = classNamesBind.bind(styles);

const NotificationDialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = (actionClicked) => {
    alert(`You clicked the ${actionClicked} action.`); // eslint-disable-line no-alert
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <NotificationDialog
        variant="custom"
        custom={{
          iconClassName: cx('custom-notification-dialog-icon'),
          signalWord: 'Custom Dialog Signal Word',
        }}
        isOpen={isOpen}
        title="Use a title that relates directly to the choices"
        startMessage="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
        acceptAction={{
          text: 'accept',
          onClick: () => {
            handleCloseModal('accept');
          },
        }}
        rejectAction={{
          text: 'reject',
          onClick: () => {
            handleCloseModal('reject');
          },
        }}
        buttonOrder="acceptFirst"
        emphasizedAction="accept"
      />
      <Button text="Trigger Notification Dialog" onClick={handleOpenModal} />
    </>
  );
};

export default NotificationDialogExample;
