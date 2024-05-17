/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import classNames from 'classnames/bind';
import Popup from 'terra-popup';
import styles from './ArrowVerticalAttachmentsPopup.test.module.scss';

const cx = classNames.bind(styles);

class AlignmentPopup extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleAttachment = this.handleAttachment.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.setParentNode = this.setParentNode.bind(this);
    this.getParentNode = this.getParentNode.bind(this);
    this.state = { open: false, attachment: 'bottom left' };
  }

  handleAttachment(event) {
    this.setState({ attachment: event.target.value, open: true });
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
      <div>
        <div
          id="test-popup-area"
          className={cx('test-popup-area')}
          ref={this.setParentNode}
        >
          <Popup
            boundingRef={this.getParentNode}
            classNameArrow="test-arrow"
            classNameContent="test-content"
            contentAttachment={this.state.attachment}
            contentHeight="80"
            contentWidth="160"
            isArrowDisplayed
            isOpen={this.state.open}
            onRequestClose={this.handleRequestClose}
            targetRef={this.getButtonNode}
          >
            <p className={cx('popup-text')}>This popup arrow has vertical attachment.</p>
          </Popup>
          <button
            type="button"
            id="alignment-button"
            className={cx('popup-button')}
            onClick={this.handleButtonClick}
            ref={this.setButtonNode}
            aria-label="Alignment Button"
          >
            {''}
          </button>
        </div>
        <p>Choose Content Attachment:</p>
        <button type="button" id="attach-Left" value="bottom left" onClick={this.handleAttachment}>Attach Bottom Left</button>
        <button type="button" id="attach-Center" value="bottom center" onClick={this.handleAttachment}>Attach Bottom Center</button>
        <button type="button" id="attach-Right" value="bottom right" onClick={this.handleAttachment}>Attach Bottom Right</button>
      </div>
    );
  }
}

export default AlignmentPopup;
