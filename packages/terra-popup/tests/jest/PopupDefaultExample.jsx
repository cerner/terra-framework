import React from 'react';
import classNames from 'classnames/bind';
import Popup from '../../src/Popup';
import styles from './PopupDefaultExample.scss';

const cx = classNames.bind(styles);

class PopupDefaultExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: true };
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  handleRequestClose() {
    this.setState({ open: false });
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
        <div className={cx('popup-button')} ref={this.setButtonNode} />
      </div>
    );
  }
}

export default PopupDefaultExample;
