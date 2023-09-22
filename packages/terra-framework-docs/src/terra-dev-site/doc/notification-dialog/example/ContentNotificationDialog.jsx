import React, { useState, useRef } from 'react';
import Button from 'terra-button';
import NotificationDialog, { ContentLayoutAsList } from 'terra-notification-dialog';

const ContentNotificationDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonElement = useRef();

  const setButtonNode = (node) => {
    buttonElement.current = node;
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    document.querySelector('#root').removeAttribute('inert');
    buttonElement.current.focus();
  };

  return (
    <>
      {isOpen && (
        <NotificationDialog
          variant="hazard-medium"
          dialogTitle="Use a Title That Relates Directly to the Actions"
          startMessage="The message should clearly provide a contextual description of the issue concisely, use ContentLayoutAsList when enumerating a list of relevant items:"
          content={<ContentLayoutAsList items={['Item 1', 'Item 2']} />}
          endMessage="If further action is needed, provide relevant actions and ask the user to confirm how to proceed, or include a resolution statement that explains how to resolve the issue or what steps to take next."
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

export default ContentNotificationDialog;
