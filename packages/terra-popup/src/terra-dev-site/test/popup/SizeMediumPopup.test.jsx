import React from 'react';
import classNames from 'classnames/bind';
import Popup from '../../../Popup';
import styles from './SizePopupCommon.module.scss';

const cx = classNames.bind(styles);

class DimensionPopup extends React.Component {
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

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div className={cx('content-wrapper')}>
        <div id="test-popup-area" className={cx('popup-area-medium')} ref={this.setParentNode}>
          <Popup
            boundingRef={this.getParentNode}
            classNameArrow="test-arrow"
            classNameContent="test-content"
            contentHeight="120"
            contentWidth="320"
            isOpen={this.state.open}
            onRequestClose={this.handleRequestClose}
            targetRef={this.getButtonNode}
          >
            <p>This popup is 120h by 320w.</p>
          </Popup>
          <button type="button" id="dimension-button" onClick={this.handleButtonClick} ref={this.setButtonNode}>
            Medium Popup
          </button>
        </div>
      </div>
    );
  }
}

export default DimensionPopup;
