/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import classNames from 'classnames/bind';
import Popup from 'terra-popup';
import styles from './ArrowVerticalLeftAdjustmentPopup.test.module.scss';

const cx = classNames.bind(styles);

// This tests verifies the PopupUtils.leftOffset methed when (offset < (2 * arrowOffset) + cornerOffset)
class AlignmentPopup extends React.Component {
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
      <div
        id="test-popup-area"
        className={cx('test-popup-area')}
        ref={this.setParentNode}
      >
        <Popup
          boundingRef={this.getParentNode}
          classNameArrow="test-arrow"
          classNameContent="test-content"
          contentAttachment="top left"
          contentHeight="120"
          contentWidth="160"
          isArrowDisplayed
          isOpen={this.state.open}
          onRequestClose={this.handleRequestClose}
          targetRef={this.getButtonNode}
          isHeaderDisabled={false}
        >
          <p className={cx('popup-text')}>This popup arrow has verital-left attachment, but was adjusted to be on the screen.</p>
        </Popup>
        <button
          type="button"
          id="alignment-button"
          className={cx('popup-button')}
          onClick={this.handleButtonClick}
          ref={this.setButtonNode}
          aria-label="Alignment button"
        >
          {''}
        </button>
      </div>
    );
  }
}

export default AlignmentPopup;
