import React from 'react';
import Button from 'terra-button';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Popup from 'terra-popup/lib/Popup';
import ExamplePopupContent from 'terra-popup/lib/terra-dev-site/doc/common/ExamplePopupContent';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const HEIGHT_KEYS = Object.keys(Popup.Opts.heights);
const WIDTH_KEYS = Object.keys(Popup.Opts.widths);

class PopupDimensions extends React.Component {
  static generateOptions(values) {
    return values.map((currentValue, index) => {
      const keyValue = index;
      return <option key={keyValue} value={currentValue}>{currentValue}</option>;
    });
  }

  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.state = { open: false };
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  handleOnChange() {
    this.setState({ open: false });
  }

  handleSelectChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const contentDimensions = {};
    if (this.state.popupContentHeight !== 'Default') {
      contentDimensions.contentHeight = this.state.popupContentHeight;
    }

    if (this.state.popupContentWidth !== 'Default') {
      contentDimensions.contentWidth = this.state.popupContentWidth;
    }

    return (
      <div>
        <label htmlFor="popupContentHeight">Pop Content Height</label>
        <select id="popupContentHeight" name="popupContentHeight" value={this.state.popupContentHeight} onChange={this.handleSelectChange}>
          <option value="Default">Default</option>
          {PopupDimensions.generateOptions(HEIGHT_KEYS)}
        </select>
        <br />
        <br />
        <label htmlFor="popupContentWidth">Pop Content Width</label>
        <select id="popupContentWidth" name="popupContentWidth" value={this.state.popupContentWidth} onChange={this.handleSelectChange}>
          <option value="Default">Default</option>
          {PopupDimensions.generateOptions(WIDTH_KEYS)}
        </select>
        <br />
        <br />
        <div>
          <Popup
            {...contentDimensions}
            classNameArrow="test-arrow"
            classNameContent="test-content"
            isOpen={this.state.open}
            onRequestClose={this.handleRequestClose}
            targetRef={() => document.getElementById('popup-dimensions')}
            isContentFocusDisabled
          >
            <ExamplePopupContent onChange={this.handleOnChange} />
          </Popup>
          <Button id="popup-dimensions" text={`${this.state.popupContentHeight || 'Default'} x ${this.state.popupContentWidth || 'Default'} Popup`} onClick={this.handleButtonClick} />
        </div>
      </div>
    );
  }
}

export default PopupDimensions;
