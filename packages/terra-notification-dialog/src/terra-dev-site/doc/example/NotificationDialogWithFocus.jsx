import React, { useState } from 'react';
import Button from 'terra-button';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';
import Popup from 'terra-popup';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import NotificationDialog, { NotificationDialogVariants } from 'terra-notification-dialog';

const clickConfirm = () => {
  console.log('You clicked confirm'); // eslint-disable-line no-console
};

const propTypes = {
  disclosureManager: disclosureManagerShape,
};

const NotificationDialogWithFocus = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handlePopupButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handlePopupRequestClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <NotificationDialog
        variant={NotificationDialogVariants.ALERT}
        isOpen={isOpen}
        title="Make sure that the title relates directly to the choices."
        startMessage="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
        acceptAction={{
          text: 'Confirm',
          onClick: clickConfirm,
        }}
        rejectAction={{
          text: 'Close',
          onClick: handleCloseModal,
        }}
        buttonOrder="acceptFirst"
        emphasizedAction="accept"
      />
      <Button text="Trigger NotificationDialog" onClick={handleOpenModal} />
      <Button text="Dismiss" onClick={props.disclosureManager.dismiss} />
      <Popup
        isArrowDisplayed
        isOpen={isPopupOpen}
        onRequestClose={handlePopupRequestClose}
        targetRef={() => document.getElementById('popup-in-modal')}
      >
        <Placeholder title="Popup Content" />
      </Popup>
      <Button id="popup-in-modal" text="Popup In Modal" onClick={handlePopupButtonClick} />
    </>
  );
};

NotificationDialogWithFocus.propTypes = propTypes;
export default withDisclosureManager(NotificationDialogWithFocus);
