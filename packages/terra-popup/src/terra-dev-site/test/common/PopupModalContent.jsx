import React from 'react';
import Button from 'terra-button';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';
import Popup from '../../../Popup';

class ModalContent extends React.Component {
  constructor(props) {
    super(props);

    this.handlePopupButtonClick = this.handlePopupButtonClick.bind(this);
    this.handlePopupRequestClose = this.handlePopupRequestClose.bind(this);
    this.handlePopupOnChange = this.handlePopupOnChange.bind(this);
    this.state = { open: false };
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
    const { disclosureManager } = this.props;

    return (
      <div id="test-popup-area" className="content-container" style={{ height: '100%', padding: '10px' }}>
        <Popup
          isArrowDisplayed
          classNameContent="test-content"
          isOpen={this.state.open}
          onRequestClose={this.handlePopupRequestClose}
          targetRef={() => document.getElementById('popup-in-modal')}
        >
          <p>This is popup content</p>
          <button type="button">Test button 1</button>
          <button type="button">Test button 2</button>
        </Popup>
        <Button id="popup-in-modal" style={{ position: 'absolute', left: '125px' }} text="Popup In Modal" onClick={this.handlePopupButtonClick} />
        <br />
        <br />
        <Button className="close-disclosure" text="Close Disclosure" onClick={disclosureManager.closeDisclosure} />
      </div>
    );
  }
}

ModalContent.propTypes = {
  disclosureManager: disclosureManagerShape,
};

export default withDisclosureManager(ModalContent);
