import React from 'react';
import Button from 'terra-button';
import NotificationDialog, { NotificationDialogVariants } from '../../src/NotificationDialog';

const clickOK = () => {
  alert('You clicked OK');  // eslint-disable-line no-alert
};

class CompleteNotificationDialog extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      isFocused: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOnRequestFocus = this.handleOnRequestFocus.bind(this);
    this.handleOnReleaseFocus = this.handleOnReleaseFocus.bind(this);
  }

  handleOpenModal() {
    this.setState({ isOpen: true });
  }

  handleCloseModal() {
    this.setState({ isOpen: false });
  }

  handleOnRequestFocus() {
    this.setState({ isFocused: true });
  }

  handleOnReleaseFocus() {
    this.setState({ isFocused: false });
  }

  render() {
    return (
      <div>
        <NotificationDialog
          variant={NotificationDialogVariants.ALERT}
          isOpen={this.state.isOpen}
          isFocused={this.state.isFocused}
          onRequestClose={this.handleCloseModal}
          title="Make sure that the title relates directly to the choices."
          message="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
          primaryAction={{
            text: 'Ok',
            onClick: clickOK,
          }}
          secondaryAction={{
            text: 'Close',
            onClick: this.handleCloseModal,
          }}
          requestFocus={this.handleOnRequestFocus}
          releaseFocus={this.handleOnReleaseFocus}
        />
        <Button text="Trigger NotificationDialog" onClick={this.handleOpenModal} />
      </div>
    );
  }
}

export default CompleteNotificationDialog;
