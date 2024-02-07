import React, { useContext, useState } from 'react';
import classNames from 'classnames/bind';

import Button from 'terra-button';
import { DisclosureManagerContext } from 'terra-disclosure-manager';
import ModalManager from 'terra-modal-manager';
import NotificationDialog from 'terra-notification-dialog';

import styles from './example-styles.module.scss';

const cx = classNames.bind(styles);

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
          variant="hazard-medium"
          dialogTitle="Use a Title That Relates Directly to the Actions"
          startMessage="The message should clearly provide a contextual description of the issue concisely, and include a resolution statement that explains how to resolve the issue or what steps to take next."
          endMessage="If further action is needed, provide relevant actions and ask the user to confirm how to proceed."
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
      <Button text="Trigger Notification Dialog" onClick={handleOpenModal} />
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
    <Button text="Trigger Modal" onClick={disclose} />
  );
};

const ModalManagerExample = () => (
  <div className={cx('example-wrapper')}>
    <ModalManager shouldTrapFocus>
      <ModalContainer />
    </ModalManager>
  </div>
);

export default ModalManagerExample;
