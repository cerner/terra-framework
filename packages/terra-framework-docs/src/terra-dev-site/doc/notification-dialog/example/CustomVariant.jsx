import React, { useState, useRef } from 'react';
import Button from 'terra-button';
import classNamesBind from 'classnames/bind';
import NotificationDialog from 'terra-notification-dialog';

import styles from './example-styles.module.scss';

const cx = classNamesBind.bind(styles);

const NotificationDialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonElement = useRef();

  const setButtonNode = (node) => {
    buttonElement.current = node;
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    document.querySelector('#root').removeAttribute('inert');
    buttonElement.current.focus();
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
            signalWord: 'Custom Signal Word',
          }}
          dialogTitle="Use a Title That Relates Directly to The Actions"
          startMessage="The message should clearly provide a contextual description of the issue concisely, and include a resolution statement that explains how to resolve the issue or what steps to take next."
          endMessage="If further action is needed, provide relevant actions and ask the user to confirm how to proceed."
          onRequestClose={handleCloseModal}
          acceptAction={{
            text: 'Emphasized Accept Action',
            onClick: handleCloseModal,
          }}
          rejectAction={{
            text: 'Reject Action',
            onClick: handleCloseModal,
          }}
          buttonOrder="acceptFirst"
          emphasizedAction="accept"
        />
      )}
      <Button text="Trigger Notification Dialog" onClick={handleOpenModal} refCallback={setButtonNode} />
    </>
  );
};

export default NotificationDialogExample;
