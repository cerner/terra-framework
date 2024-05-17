import React from 'react';
import Popup from '../../src/Popup';
import styles from './Popup.test.module.scss';

class PopupDefaultExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: true };
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  render() {
    return (
      <div>
        <Popup
          {...this.props}
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          <p>this is popup content</p>
        </Popup>
        <div className={styles.container} ref={this.setButtonNode} />
      </div>
    );
  }
}

export default PopupDefaultExample;
