import React from 'react';
import classNames from 'classnames/bind';
import Popup from 'terra-popup';
import styles from './SizeLargePopup.test.module.scss';

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
      <div className={cx('content-wrapper')}>
        <div id="test-popup-area" className={cx('test-popup-area')} ref={this.setParentNode}>
          <Popup
            boundingRef={this.getParentNode}
            classNameArrow="test-arrow"
            classNameContent="test-content"
            contentHeight="240"
            contentWidth="960"
            isOpen={this.state.open}
            onRequestClose={this.handleRequestClose}
            targetRef={this.getButtonNode}
          >
            <p>This popup is 240h by 960w.</p>
          </Popup>
          <button type="button" id="dimension-button" onClick={this.handleButtonClick} ref={this.setButtonNode}>
            Large Popup
          </button>
        </div>
      </div>
    );
  }
}

export default DimensionPopup;
