import React from 'react';
import Button from 'terra-button';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Popup from 'terra-popup/lib/Popup';
import ExamplePopupContent from 'terra-popup/lib/terra-dev-site/doc/common/ExamplePopupContent';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

class PopupTopRight extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = { open: false };
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  handleOnChange() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <Popup
          contentAttachment="top right"
          isArrowDisplayed
          isOpen={this.state.open}
          onRequestClose={this.handleRequestClose}
          targetRef={() => document.getElementById('popup-top-right')}
        >
          <ExamplePopupContent onChange={this.handleOnChange} />
        </Popup>
        <Button id="popup-top-right" text="Top-Right" onClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default PopupTopRight;
