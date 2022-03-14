import React, { useState } from 'react';
import Button from 'terra-button';
import Popup from 'terra-popup';
import { Placeholder } from '@cerner/terra-docs';

const HEIGHT_KEYS = Object.keys(Popup.Opts.heights);
const WIDTH_KEYS = Object.keys(Popup.Opts.widths);

function PopupDimensions() {
  const [open, setOpen] = useState(false);
  const [popupContentHeight, setPopupContentHeight] = useState('Default');
  const [popupContentWidth, setPopupContentWidth] = useState('Default');
  /* eslint-disable */
  const PopupContent = ({ contentStyle, isHeightBounded, isWidthBounded }) => {
    let title = 'Popup Content';
    if (isHeightBounded) {
      title += ' HeightBounded';
    }
    if (isWidthBounded) {
      title += ' WidthBounded';
    }
    return <Placeholder title={title} style={contentStyle} />;
  };
  /* eslint-enable */

  const generateOptions = (values) => values.map((currentValue, index) => {
    const keyValue = index;
    return <option key={keyValue} value={currentValue}>{currentValue}</option>;
  });

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleRequestClose = () => {
    setOpen(false);
  };

  const handleSelectHeightChange = (event) => {
    setPopupContentHeight(event.target.value);
  };

  const handleSelectWidthChange = (event) => {
    setPopupContentWidth(event.target.value);
  };

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
    <div>
      <label htmlFor="popupContentHeight">Pop Content Height</label>
      <select id="popupContentHeight" name="popupContentHeight" value={popupContentHeight} onChange={handleSelectHeightChange}>
        <option value="Default">Default</option>
        {generateOptions(HEIGHT_KEYS)}
      </select>
      <br />
      <br />
      <label htmlFor="popupContentWidth">Pop Content Width</label>
      <select id="popupContentWidth" name="popupContentWidth" value={popupContentWidth} onChange={handleSelectWidthChange}>
        <option value="Default">Default</option>
        {generateOptions(WIDTH_KEYS)}
      </select>
      <br />
      <br />
      <div>
        <Popup
          {...contentDimensions}
          classNameContent="test-content"
          isOpen={open}
          onRequestClose={handleRequestClose}
          targetRef={() => document.getElementById('popup-dimensions')}
        >
          <PopupContent contentStyle={contentStyle} />
        </Popup>
        <Button id="popup-dimensions" text={`${popupContentHeight || 'Default'} x ${popupContentWidth || 'Default'} Popup`} onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default PopupDimensions;
