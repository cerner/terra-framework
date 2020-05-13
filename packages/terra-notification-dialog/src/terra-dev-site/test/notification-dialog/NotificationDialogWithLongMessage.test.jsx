import React, { useState } from 'react';
import Button from 'terra-button';
import NotificationDialog from '../../../NotificationDialog';

const clickConfirm = () => {
  alert('You clicked confirm'); // eslint-disable-line no-alert
};

const message = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.
Integer congue feugiat ultricies.
Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.
Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.
Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.
Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.
Nam vehicula, arcu vitae egestas porttitor,
turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.
Integer congue feugiat ultricies.
Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.
Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.
Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.
Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.
Nam vehicula, arcu vitae egestas porttitor,
turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.
Integer congue feugiat ultricies.
Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.
Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.
Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.
Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.
Nam vehicula, arcu vitae egestas porttitor
turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.
Integer congue feugiat ultricies.
Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.
Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.
Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.
Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.
Nam vehicula, arcu vitae egestas porttitor,
turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.
Integer congue feugiat ultricies.
Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.
Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.
Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.
Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.
Nam vehicula, arcu vitae egestas porttitor,
turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.
Integer congue feugiat ultricies.
Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.
Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.
Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.
Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.
Nam vehicula, arcu vitae egestas porttitor,
turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.
Integer congue feugiat ultricies.
Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.
Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.
Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.
Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.
Nam vehicula, arcu vitae egestas porttitor
turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.
Integer congue feugiat ultricies.
Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.
Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.
Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.
Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.
Nam vehicula, arcu vitae egestas porttitor,
turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.
Integer congue feugiat ultricies.
Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.
Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.
Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.
Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.
Nam vehicula, arcu vitae egestas porttitor,
turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.`;

const CompleteNotificationDialogWithLongMessage = () => {
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
        variant="alert"
        isOpen={isOpen}
        title="This is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the title"
        startMessage={message}
        acceptAction={{
          text: 'accept',
          onClick: clickConfirm,
        }}
        rejectAction={{
          text: 'reject',
          onClick: handleCloseModal,
        }}
        buttonOrder="acceptFirst"
        emphasizedAction="accept"
      />
      <Button id="trigger-notification-dialog" text="Trigger NotificationDialog" onClick={handleOpenModal} />
    </>
  );
};

export default CompleteNotificationDialogWithLongMessage;
