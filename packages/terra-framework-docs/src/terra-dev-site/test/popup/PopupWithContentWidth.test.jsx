import React from 'react';
import classNames from 'classnames/bind';
import Popup from 'terra-popup';
import styles from './PopupTypeCommon.test.module.scss';

const cx = classNames.bind(styles);

class PopupWithContentWidth extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: false };
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
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
          contentWidth="400"
        >
          <p>This is a popup with contentWidth as 400px </p>
        </Popup>
        <button type="button" id="default-button" className={cx('popup-button')} onClick={this.handleButtonClick} ref={this.setButtonNode}>
          Default Popup
        </button>
      </div>
    );
  }
}

export default PopupWithContentWidth;
