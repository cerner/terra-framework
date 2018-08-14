import React from 'react';
import Popup from '../../../Popup';

class DefaultPopup extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: false };
  }

  componentWillMount() {
    this.overlayStyle = document.documentElement.style.overflow;
    this.overlayId = document.documentElement.id;
    document.documentElement.id = 'popup-overlay-test';
  }

  componentDidMount() {
    document.documentElement.style.overflow = 'auto';
  }

  componentWillUnmount() {
    document.documentElement.id = this.overlayId;
    document.documentElement.style.overflow = this.overlayStyle;
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div id="test-popup-area" style={{ height: '150px', width: '350px', background: 'aliceblue' }}>
        <Popup
          classNameArrow="test-arrow"
          classNameContent="test-content"
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          <p>this is popup content</p>
        </Popup>
        <button type="button" id="overlay-button" style={{ position: 'absolute', left: '125px' }} onClick={this.handleButtonClick} ref={this.setButtonNode}>
          Default Popup
        </button>
      </div>
    );
  }
}

export default DefaultPopup;
