import React from 'react';
import Button from 'terra-button';
import NotificationDialog, { NotificationDialogVariants } from '../../../NotificationDialog';

class NotificationDialogNoTitle extends React.Component {
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
          variant={NotificationDialogVariants.ERROR}
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
          message="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
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

export default NotificationDialogNoTitle;
