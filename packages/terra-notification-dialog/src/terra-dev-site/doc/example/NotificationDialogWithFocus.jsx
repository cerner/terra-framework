import React from 'react';
import Button from 'terra-button';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';
import NotificationDialog, { NotificationDialogVariants } from '../../../NotificationDialog';

const clickOK = () => {
  alert('You clicked OK'); // eslint-disable-line no-alert
};

const propTypes = {
  disclosureManager: disclosureManagerShape,
};

class NotificationDialogWithFocus extends React.Component {
  constructor(props) {
    super(props);

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
          variant={NotificationDialogVariants.ALERT}
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
          title="Make sure that the title relates directly to the choices."
          message="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
          primaryAction={{
            text: 'OK',
            onClick: clickOK,
          }}
          secondaryAction={{
            text: 'Close',
            onClick: this.handleCloseModal,
          }}
          requestFocus={this.props.disclosureManager.requestFocus}
          releaseFocus={this.props.disclosureManager.releaseFocus}
        />
        <Button text="Trigger NotificationDialog" onClick={this.handleOpenModal} />
      </div>
    );
  }
}

NotificationDialogWithFocus.propTypes = propTypes;
export default withDisclosureManager(NotificationDialogWithFocus);
