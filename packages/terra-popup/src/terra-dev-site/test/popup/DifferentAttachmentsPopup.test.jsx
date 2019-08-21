import React from 'react';
import classNames from 'classnames/bind';
import Popup from '../../../Popup';
import styles from './DifferentAttachmentsPopup.test.module.scss';

const cx = classNames.bind(styles);

const targetOptions = {
  'bottom left': 'top right',
  'bottom right': 'top left',
};

// This tests verifies the PopupUtils.getContentOffset methed when (cAttachment.horizontal !== tAttachment.horizontal)
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
    this.state = { open: false, contentAttachment: 'bottom left', targetAttachment: 'top right' };
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

  handleAttachment(event) {
    this.setState({ contentAttachment: event.target.value, targetAttachment: targetOptions[event.target.value], open: true });
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
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
            contentAttachment={this.state.contentAttachment}
            targetAttachment={this.state.targetAttachment}
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
          >
            {''}
          </button>
        </div>
        <p>Choose Content Attachment. It will flip the target attachment.</p>
        <button type="button" id="attach-Left" value="bottom left" onClick={this.handleAttachment}>Attach Bottom Left</button>
        <button type="button" id="attach-Right" value="bottom right" onClick={this.handleAttachment}>Attach Bottom Right</button>
      </div>
    );
  }
}

export default AlignmentPopup;
