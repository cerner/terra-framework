import React from 'react';
import Popup from '../../lib/Popup';
import TestPopupContent from './TestPopupContent';

class PopupExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: true, size: { height: '40px', width: '100px' } };
  }

  componentDidMount() {
    this.forceUpdate();
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
      <div style={{ height: '300px', width: '500px', background: 'aliceblue' }}>
        <Popup
          classNameArrow="test-arrow"
          classNameContent="test-content"
          contentHeight="auto"
          contentWidth="auto"
          isArrowDisplayed
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          <TestPopupContent size={this.state.size} onClick={() => this.setState({ size: { height: '80px', width: '200px' } }) } />
        </Popup>
        <button style={{ position: 'absolute', left: '200px' }} id="default-button" onClick={this.handleButtonClick} ref={this.setButtonNode}>
          Default Popup
        </button>
      </div>
    );
  }
}

export default PopupExample;
