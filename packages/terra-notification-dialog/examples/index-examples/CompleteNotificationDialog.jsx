import React from 'react';
import Button from 'terra-button';
import NotificationDialog from '../../src/NotificationDialog';

const clickOK = () => {
  alert('You clicked OK');
};

class CompleteNotificationDialog extends React.Component {
  constructor() {
    super();

    this.state = {
      showNotificationDialog: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showNotificationDialog: true });
  }

  handleCloseModal() {
    this.setState({ showNotificationDialog: false });
  }

  render() {
    return (
      <div>
        <NotificationDialog
          showNotificationDialog={this.state.showNotificationDialog}
          onRequestClose={this.handleCloseModal}
          title="This is the title"
          message="This is the message"
          actions={[
            <Button
              text="Ok"
              onClick={clickOK}
            />,
            <Button
              text="Close"
              onClick={this.handleCloseModal}
            />,
          ]}
        />
        <Button text="Trigger NotificationDialog" onClick={this.handleOpenModal} />
      </div>
    );
  }
}

export default CompleteNotificationDialog;
