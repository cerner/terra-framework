import React from 'react';
import Button from 'terra-button';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Popup from 'terra-popup/lib/Popup';
import Placeholder from 'terra-doc-template/lib/Placeholder';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handlePopupButtonClick = this.handlePopupButtonClick.bind(this);
    this.handlePopupRequestClose = this.handlePopupRequestClose.bind(this);
    this.state = { open: false };
  }

  handlePopupButtonClick() {
    this.setState({ open: true });
  }

  handlePopupRequestClose() {
    this.setState({ open: false });
  }

  render() {
    const { disclosureManager } = this.props;

    return (
      <div className="content-container" style={{ height: '100%', padding: '10px' }}>
        {disclosureManager && disclosureManager.requestFocus ? <h4>Modal focus is trapped!</h4> : null }
        <br />
        <Popup
          isArrowDisplayed
          isOpen={this.state.open}
          onRequestClose={this.handlePopupRequestClose}
          targetRef={() => document.getElementById('popup-in-modal')}
          requestFocus={disclosureManager.requestFocus}
        >
          <Placeholder title="Popup Content" />
        </Popup>
        <Button id="popup-in-modal" text="Popup In Modal" onClick={this.handlePopupButtonClick} />
        <br />
        <br />
        <Button className="close-disclosure" text="Close Disclosure" onClick={disclosureManager.closeDisclosure} />
      </div>
    );
  }
}

ModalContainer.propTypes = {
  disclosureManager: disclosureManagerShape,
};

export default withDisclosureManager(ModalContainer);
