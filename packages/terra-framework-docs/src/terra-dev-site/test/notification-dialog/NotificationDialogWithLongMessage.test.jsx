import React, { useState, useRef } from 'react';
import Button from 'terra-button';
import NotificationDialog from 'terra-notification-dialog';

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
          variant="hazard-high"
          dialogTitle="This is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the title"
          startMessage={message}
          onRequestClose={handleCloseModal}
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
      <Button id="trigger-notification-dialog" text="Trigger NotificationDialog" onClick={handleOpenModal} refCallback={setButtonNode} />
    </>
  );
};

export default CompleteNotificationDialogWithLongMessage;
