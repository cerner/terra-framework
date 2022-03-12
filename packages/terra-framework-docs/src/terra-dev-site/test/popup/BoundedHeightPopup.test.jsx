import React from 'react';
import classNames from 'classnames/bind';
import Popup from 'terra-popup';
import styles from './BoundedHeightPopup.test.module.scss';

const cx = classNames.bind(styles);

class BoundedPopup extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.setParentNode = this.setParentNode.bind(this);
    this.getParentNode = this.getParentNode.bind(this);
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

  setParentNode(node) {
    this.parentNode = node;
  }

  getParentNode() {
    return this.parentNode;
  }

  render() {
    return (
      <div id="test-popup-area" className={cx('test-popup-area')} ref={this.setParentNode}>
        <Popup
          boundingRef={this.getParentNode}
          contentHeight="480"
          classNameArrow="test-arrow"
          classNameContent="test-content"
          isOpen={this.state.open}
          onRequestClose={this.handleRequestClose}
          targetRef={this.getButtonNode}
        >
          <p className={cx('popup-text')}>This popup is bounded by height.</p>
        </Popup>
        <button type="button" id="bounded-button" onClick={this.handleButtonClick} ref={this.setButtonNode}>
          Bounded Height
        </button>
      </div>
    );
  }
}

export default BoundedPopup;
