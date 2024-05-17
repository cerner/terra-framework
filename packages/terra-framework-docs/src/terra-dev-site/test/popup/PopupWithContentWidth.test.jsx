import React, { Component } from 'react';
import classNames from 'classnames/bind';
import Popup from 'terra-popup';
import styles from './PopupTypeCommon.test.module.scss';

const cx = classNames.bind(styles);
const HEIGHT_KEYS = Object.keys(Popup.Opts.heights);
const WIDTH_KEYS = Object.keys(Popup.Opts.widths);

class PopupWithContentWidth extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.handleSelectHeightChange = this.handleSelectHeightChange.bind(this);
    this.handleSelectWidthChange = this.handleSelectWidthChange.bind(this);
    this.state = {
      open: false,
      popupContentHeight: 'Default',
      popupContentWidth: 'Default',
    };
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  handleSelectHeightChange(event) {
    this.setState({ popupContentHeight: event.target.value });
  }

  handleSelectWidthChange(event) {
    this.setState({ popupContentWidth: event.target.value });
  }

  getButtonNode() {
    return this.buttonNode;
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }
  /* eslint-enable */

  generateOptions = (values) => values.map((currentValue, index) => {
    const keyValue = index;
    return <option key={keyValue} value={currentValue}>{currentValue}</option>;
  });

  render() {
    const { open, popupContentHeight, popupContentWidth } = this.state;

    const contentDimensions = {};
    if (popupContentHeight !== 'Default') {
      contentDimensions.contentHeight = popupContentHeight;
    }
    if (popupContentWidth !== 'Default') {
      contentDimensions.contentWidth = popupContentWidth;
    }

    const contentStyle = {};
    if (popupContentHeight === 'auto') {
      contentStyle.height = '500px';
    }
    if (popupContentWidth === 'auto') {
      contentStyle.width = '500px';
    }

    return (
      <div id="test-popup-area" className={cx('test-popup-area')}>
        <label htmlFor="popupContentHeight">Pop Content Height</label>
        <select
          id="popupContentHeight"
          name="popupContentHeight"
          value={popupContentHeight}
          onChange={this.handleSelectHeightChange}
        >
          <option value="Default">Default</option>
          {this.generateOptions(HEIGHT_KEYS)}
        </select>
        <br />
        <br />
        <label htmlFor="popupContentWidth">Pop Content Width</label>
        <select id="popupContentWidth" name="popupContentWidth" value={popupContentWidth} onChange={this.handleSelectWidthChange}>
          <option value="Default">Default</option>
          {this.generateOptions(WIDTH_KEYS)}
        </select>
        <br />
        <br />
        <div>
          <Popup
            {...contentDimensions}
            classNameContent="test-content"
            isOpen={open}
            targetRef={this.getButtonNode}
            onRequestClose={this.handleRequestClose}
          >
            <p>This is a popup with custom contentWidth and contentHeight</p>
          </Popup>
        </div>
        <button
          type="button"
          id="popup-dimensions"
          className={cx('popup-button')}
          onClick={this.handleButtonClick}
          ref={this.setButtonNode}
        >
          Popup Dimensions
        </button>
      </div>
    );
  }
}

export default PopupWithContentWidth;
