import React from 'react';
import Button from 'terra-button';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';
import Popup from 'terra-popup';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import NotificationDialog, { NotificationDialogVariants } from 'terra-notification-dialog';

const clickConfirm = () => {
  console.log('You clicked confirm'); // eslint-disable-line no-console
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
    this.handlePopupButtonClick = this.handlePopupButtonClick.bind(this);
    this.handlePopupRequestClose = this.handlePopupRequestClose.bind(this);
  }

  handleOpenModal() {
    this.setState({ isOpen: true });
  }

  handleCloseModal() {
    this.setState({ isOpen: false });
  }

  handlePopupButtonClick() {
    this.setState({ open: true });
  }

  handlePopupRequestClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <NotificationDialog
          variant={NotificationDialogVariants.ALERT}
          isOpen={this.state.isOpen}
          title="Make sure that the title relates directly to the choices."
          startMessage="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
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
        <Button text="Dismiss" onClick={this.props.disclosureManager.dismiss} />
        <Popup
          isArrowDisplayed
          isOpen={this.state.open}
          onRequestClose={this.handlePopupRequestClose}
          targetRef={() => document.getElementById('popup-in-modal')}
        >
          <Placeholder title="Popup Content" />
        </Popup>
        <Button id="popup-in-modal" text="Popup In Modal" onClick={this.handlePopupButtonClick} />
      </div>
    );
  }
}

NotificationDialogWithFocus.propTypes = propTypes;
export default withDisclosureManager(NotificationDialogWithFocus);
