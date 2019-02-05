import React from 'react';
import Button from 'terra-button';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';
import Popup from 'terra-popup/lib/Popup';
import ExamplePopupContent from 'terra-popup/lib/terra-dev-site/doc/common/ExamplePopupContent';
import NotificationDialog, { NotificationDialogVariants } from '../../../NotificationDialog';

const clickOK = () => {
  console.log('You clicked OK'); // eslint-disable-line no-console
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
    this.handlePopupOnChange = this.handlePopupOnChange.bind(this);
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

  handlePopupOnChange() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <NotificationDialog
          variant={NotificationDialogVariants.ALERT}
          isOpen={this.state.isOpen}
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
        <Button text="Dismiss" onClick={this.props.disclosureManager.dismiss} />
        <Popup
          isArrowDisplayed
          isOpen={this.state.open}
          onRequestClose={this.handlePopupRequestClose}
          targetRef={() => document.getElementById('popup-in-modal')}
          releaseFocus={this.props.disclosureManager.releaseFocus}
          requestFocus={this.props.disclosureManager.requestFocus}
          isContentFocusDisabled
        >
          <ExamplePopupContent onChange={this.handlePopupOnChange} />
        </Popup>
        <Button id="popup-in-modal" text="Popup In Modal" onClick={this.handlePopupButtonClick} />
      </div>
    );
  }
}

NotificationDialogWithFocus.propTypes = propTypes;
export default withDisclosureManager(NotificationDialogWithFocus);
