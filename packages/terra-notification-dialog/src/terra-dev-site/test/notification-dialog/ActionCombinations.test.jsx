import React, { useMemo, useState } from 'react';
import Button from 'terra-button';
import NotificationDialog from 'terra-notification-dialog';

const CompleteNotificationDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [emphasizedAction, setEmphasizedAction] = useState('accept');
  const [buttonOrder, setButtonOrder] = useState('acceptFirst');

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const acceptAction = useMemo(() => ({
    text: 'accept',
    onClick: handleCloseModal,
  }), []);

  const rejectAction = useMemo(() => ({
    text: 'reject',
    onClick: handleCloseModal,
  }), []);

  const [actions, setActions] = useState({ acceptAction });

  const handleOpenModal = (actionType) => {
    const actionsProps = {};
    if (actionType.includes('accept')) {
      actionsProps.acceptAction = acceptAction;
    }
    if (actionType.includes('reject')) {
      actionsProps.rejectAction = rejectAction;
    }
    setActions(actionsProps);
    setIsOpen(true);
  };

  const handleOpenButtonOrderModal = (selectedButtonOrder) => {
    setActions({ acceptAction, rejectAction });
    setButtonOrder(selectedButtonOrder);
    setIsOpen(true);
  };

  const handleOpenEmphasizedModal = (selectedAsEmphasized) => {
    setActions({ acceptAction, rejectAction });
    setEmphasizedAction(selectedAsEmphasized);
    setIsOpen(true);
  };

  return (
    <>
      {isOpen && (
        <NotificationDialog
          variant="hazard-medium"
          dialogTitle="Action Options in Notification Dialog"
          startMessage="The notification dialog can display one or two buttons to accept and/or reject the message and close the dialog."
          content="The buttonOrder prop can be used to flip which button is first when both buttons are rendered."
          endMessage="The emphasizedAction prop indicates whether acceptAction, rejectAction or neither action should be emphasized."
          {...actions}
          buttonOrder={buttonOrder}
          emphasizedAction={emphasizedAction}
        />
      )}
      <h2>Actions Options</h2>
      <Button id="accept" text="Accept Action" onClick={() => handleOpenModal('accept')} />
      <Button id="reject" text="Reject Action" onClick={() => handleOpenModal('reject')} />
      <Button id="acceptAndReject" text="Accept and Reject Action" onClick={() => handleOpenModal('acceptORreject')} />

      <h2>Button Order Options</h2>
      <Button id="acceptFirst" text="Accept Action First" onClick={() => handleOpenButtonOrderModal('acceptFirst')} />
      <Button id="rejectFirst" text="Reject Action First" onClick={() => handleOpenButtonOrderModal('rejectFirst')} />

      <h2>Emphasized Button Options</h2>
      <Button id="acceptEmphasized" text="Accept Action Emphasized" onClick={() => handleOpenEmphasizedModal('accept')} />
      <Button id="rejectEmphasized" text="Reject Action Emphasized" onClick={() => handleOpenEmphasizedModal('reject')} />
      <Button id="neitherEmphasized" text="Neither Emphasized" onClick={() => handleOpenEmphasizedModal('none')} />
    </>
  );
};

export default CompleteNotificationDialog;
