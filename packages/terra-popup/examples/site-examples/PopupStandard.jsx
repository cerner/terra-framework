import React from 'react';
import Button from 'terra-button';
import Popup from '../../lib/Popup';
import ExamplePopupContent from './ExamplePopupContent';

class PopupStandard extends React.Component {
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
          isOpen={this.state.open}
          targetRef={() => document.getElementById('popup-standard-button')}
          onRequestClose={this.handleRequestClose}
        >
          <ExamplePopupContent onChange={this.handleOnChange} />
        </Popup>
        <Button id="popup-standard-button" text="Default Popup" onClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default PopupStandard;
