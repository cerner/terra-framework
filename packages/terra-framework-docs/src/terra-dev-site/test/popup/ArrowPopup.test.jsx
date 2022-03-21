import React from 'react';
import classNames from 'classnames/bind';
import Popup from 'terra-popup';
import styles from './ArrowPopup.test.module.scss';

const cx = classNames.bind(styles);

class ArrowPopup extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: true };
  }

  componentDidMount() {
    this.forceUpdate();
  }

  handleButtonClick() {
    this.setState({ open: true });
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

export default ArrowPopup;
