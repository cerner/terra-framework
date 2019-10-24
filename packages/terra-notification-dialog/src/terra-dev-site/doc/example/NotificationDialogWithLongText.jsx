import React from 'react';
import Button from 'terra-button';
import NotificationDialog, { NotificationDialogVariants } from 'terra-notification-dialog';

const clickConfirm = () => {
  console.log('You clicked confirm'); // eslint-disable-line no-console
};

class NotificationDialogWithLongText extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ isOpen: true });
  }

  handleCloseModal() {
    this.setState({ isOpen: false });
  }

  render() {
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
    return (
      <div>
        <NotificationDialog
          variant={NotificationDialogVariants.WARNING}
          isOpen={this.state.isOpen}
          title="Make sure that the title relates directly to the choices."
          startMessage={message}
          acceptAction={{
            text: 'Confirm',
            onClick: clickConfirm,
          }}
          rejectAction={{
            text: 'Close',
            onClick: this.handleCloseModal,
          }}
          buttonOrder="acceptFirst"
          emphasizedAction="accept"
        />
        <Button text="Trigger NotificationDialog" onClick={this.handleOpenModal} />
      </div>
    );
  }
}

export default NotificationDialogWithLongText;
