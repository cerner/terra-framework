import React from 'react';
import Button from 'terra-button';
import NotificationDialog, { NotificationDialogVariants } from '../../../NotificationDialog';

class NotificationDialogNoMessage extends React.Component {
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
          variant={NotificationDialogVariants.INFO}
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
          title="There is no message here."
          primaryAction={{
            text: 'Close',
            onClick: this.handleCloseModal,
          }}
        />
        <Button id="trigger-notification-dialog" text="Trigger NotificationDialog" onClick={this.handleOpenModal} />
      </div>
    );
  }
}

export default NotificationDialogNoMessage;
