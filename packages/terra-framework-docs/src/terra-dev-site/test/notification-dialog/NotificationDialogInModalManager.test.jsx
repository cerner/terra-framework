import React, { useContext, useState } from 'react';
import Button from 'terra-button';
import { DisclosureManagerContext } from 'terra-disclosure-manager';
import ModalManager from 'terra-modal-manager';
import NotificationDialog from 'terra-notification-dialog';

/**
 * This example file contains three React Components:
 *    - ModalManagerExample - renders a ModalManager and the ModalContainer.
 *    - ModalContainer - provide a button to disclose the ModalContent.
 *    - ModalContent - provides the example showing the Notification Dialog renders over modal content.
 * Typically Terra would recommend breaking these into three files, but we condense them to one for documentation purposes.
 */

const ModalContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <NotificationDialog
          variant="hazard-low"
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
          emphasizedAction="none"
        />
      )}
      <Button id="trigger-notification-dialog" text="Trigger Notification Dialog" onClick={handleOpenModal} />
    </>
  );
};

const ModalContainer = () => {
  const disclosureManager = useContext(DisclosureManagerContext);

  const disclose = () => {
    disclosureManager.disclose({
      preferredType: 'modal',
      size: 'small',
      content: {
        key: 'ModalContent',
        title: 'Example Modal Content',
        component: <ModalContent />,
      },
    });
  };

  return (
    <Button id="openModal" text="Trigger Modal" onClick={disclose} />
  );
};

const ModalManagerExample = () => (
  <ModalManager>
    <ModalContainer />
  </ModalManager>
);

export default ModalManagerExample;
