import React from 'react';
import Button from 'terra-button';
import NotificationDialog, { NotificationDialogVariants } from '../../../NotificationDialog';

const clickOK = () => {
  alert('You clicked OK'); // eslint-disable-line no-alert
};

class CompleteNotificationDialogWithLongMessage extends React.Component {
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
    return (
      <div>
        <NotificationDialog
          variant={NotificationDialogVariants.SUCCESS}
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare odio quis turpis viverra, volutpat laoreet magna porta."
          message="Quisque egestas ullamcorper velit vitae volutpat. Quisque vestibulum nulla nunc, eget pharetra massa semper ac. In sit amet felis tincidunt, laoreet tortor nec, tempus ipsum."
          primaryAction={{
            text: 'OK',
            onClick: clickOK,
          }}
          secondaryAction={{
            text: 'Close',
            onClick: this.handleCloseModal,
          }}
        />
        <Button text="Trigger Notification Dialog" onClick={this.handleOpenModal} />
      </div>
    );
  }
}

export default CompleteNotificationDialogWithLongMessage;
