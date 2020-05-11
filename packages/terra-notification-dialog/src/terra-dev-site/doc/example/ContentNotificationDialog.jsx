import React, { useState } from 'react';
import Button from 'terra-button';
import NotificationDialog, { ContentLayoutAsList } from 'terra-notification-dialog';
import classNamesBind from 'classnames/bind';

import styles from './example-styles.module.scss';

const cx = classNamesBind.bind(styles);

const ContentNotificationDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <NotificationDialog
        variant="warning"
        isOpen={isOpen}
        title="Use a title that relates directly to the choices"
        startMessage="The Start Message is text used to provide more detail or define terminology at the beginning of the dialog body. Don’t repeat the title verbatim."
        content={<ContentLayoutAsList items={['item 1', 'item2 ']} />}
        endMessage="The End Message is text used to provide more detail or define terminology at the end of the dialog body. Don’t repeat the title verbatim."
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
      <Button text="Trigger Notification Dialog" onClick={handleOpenModal} />
    </>
  );
};

export default ContentNotificationDialog;
