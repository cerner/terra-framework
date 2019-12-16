import React, { useRef, useState } from 'react';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';
import Popup from 'terra-popup';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import classNames from 'classnames/bind';
import styles from './PopupDocCommon.module.scss';

const cx = classNames.bind(styles);

/* eslint-disable */
const PopupContent = ({ closeButtonRequired, handleRequestClose}) => {
  const placeHolder = <Placeholder title="Popup Content" />;
  if (closeButtonRequired) {
    return (
      <ContentContainer header={<Button text="My Custom Close Button" isBlock onClick={handleRequestClose} />} fill>
        {placeHolder}
      </ContentContainer>
    );
  }
  return placeHolder;
};
/* eslint-enable */

function PopupNoHeader() {
  const parentElement = useRef();
  const [open, setOpen] = useState(false);

  const setParentNode = (node) => {
    parentElement.current = node;
  };

  const getParentNode = () => parentElement.current;

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleRequestClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div
        className={cx('content-wrapper')}
        ref={setParentNode}
      >
        <Popup
          boundingRef={getParentNode}
          contentHeight="240"
          contentWidth="320"
          isHeaderDisabled
          isOpen={open}
          onRequestClose={handleRequestClose}
          targetRef={() => document.getElementById('popup-no-header')}
          isContentFocusDisabled
        >
          <PopupContent title="Popup Content" handleRequestClose={handleRequestClose} />
        </Popup>
        <Button id="popup-no-header" text="No Header Popup" onClick={handleButtonClick} />
      </div>
    </React.Fragment>
  );
}

export default PopupNoHeader;
