import React from 'react';
import Button from 'terra-button';
import Popup from '../../../Popup';
import ExamplePopupContent from '../common/ExamplePopupContent';

class PopupAttachmentBehavior extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false, behavior: 'auto' };

    this.openPopup = this.openPopup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleChange(event) {
    this.setState({ behavior: event.target.value });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  openPopup() {
    this.setState({ open: true });
  }

  render() {
    return (
      <div>
        <label htmlFor="popup-behavior">Attachment Behavior</label>
        <select onChange={this.handleChange} value={this.state.behavior} style={{ margin: '5px' }}>
          <option value="auto">Auto</option>
          <option value="flip">Flip</option>
          <option value="push">Push</option>
        </select>
        <div>
          <Button id="popup-behavior-target" text="Open Popup" onClick={this.openPopup} />
          <Popup
            attachmentBehavior={this.state.behavior}
            contentAttachment="top center"
            isArrowDisplayed
            isOpen={this.state.open}
            targetRef={() => document.getElementById('popup-behavior-target')}
            onRequestClose={this.handleRequestClose}
          >
            <ExamplePopupContent onChange={this.handleRequestClose} />
          </Popup>
        </div>
      </div>
    );
  }
}

export default PopupAttachmentBehavior;
