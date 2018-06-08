import React from 'react';
import Button from 'terra-button';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Popup from 'terra-popup/lib/Popup';
import ExamplePopupContent from 'terra-popup/lib/terra-dev-site/doc/common/ExamplePopupContent';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

class PopupMiddleCenter extends React.Component {
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
          contentAttachment="middle center"
          isArrowDisplayed
          isOpen={this.state.open}
          targetRef={() => document.getElementById('popup-middle-center')}
          onRequestClose={this.handleRequestClose}
        >
          <ExamplePopupContent onChange={this.handleOnChange} />
        </Popup>
        <Button id="popup-middle-center" text="Middle-Center" onClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default PopupMiddleCenter;
