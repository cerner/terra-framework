import React from 'react';
import classNames from 'classnames/bind';
import Popup from '../../../Popup';
import styles from './ArrowPopupCommon.test.scss';

const cx = classNames.bind(styles);

class ArrowPopupClosed extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: false };
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
      <div id="test-popup-area" className={cx('test-popup-area')}>
        <Popup
          classNameArrow="test-arrow"
          classNameContent="test-content"
          contentAttachment="middle right"
          isArrowDisplayed
          isOpen={this.state.open}
          onRequestClose={this.handleRequestClose}
          targetRef={this.getButtonNode}
        >
          <p>this is popup content</p>
        </Popup>
        <button type="button" id="arrow-button" className={cx('arrow-button')} onClick={this.handleButtonClick} ref={this.setButtonNode}>
          Arrow Popup
        </button>
      </div>
    );
  }
}

export default ArrowPopupClosed;
