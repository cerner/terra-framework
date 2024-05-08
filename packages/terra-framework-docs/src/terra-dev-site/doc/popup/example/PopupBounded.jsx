import React, { useRef, useState } from 'react';
import Button from 'terra-button';
import Popup from 'terra-popup';
import { Placeholder } from '@cerner/terra-docs';
import classNames from 'classnames/bind';
import styles from './PopupDocCommon.module.scss';

const cx = classNames.bind(styles);

function PopupBounded() {
  const buttonElement = useRef();
  const parentElement = useRef();
  const [open, setOpen] = useState(false);

  const setParentNode = (node) => {
    parentElement.current = node;
  };

  const getParentNode = () => parentElement.current;

  const setButtonNode = (node) => {
    buttonElement.current = node;
  };

  const getButtonNode = () => buttonElement.current;

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
        <Button text="Bounded Popup" onClick={handleButtonClick} refCallback={setButtonNode} />
        <Popup
          boundingRef={getParentNode}
          classNameArrow="test-arrow"
          classNameContent="test-content"
          contentHeight="240"
          contentWidth="320"
          isOpen={open}
          onRequestClose={handleRequestClose}
          targetRef={getButtonNode}
          isHeaderDisabled={false}
          isContentFocusDisabled
        >
          <Placeholder title="Popup Content" />
        </Popup>
      </div>
    </React.Fragment>
  );
}

export default PopupBounded;
