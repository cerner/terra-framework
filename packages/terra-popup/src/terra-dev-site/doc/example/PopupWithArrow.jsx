import React, { useRef, useState } from 'react';
import Button from 'terra-button';
import Popup from 'terra-popup';
import Placeholder from 'terra-doc-template/lib/Placeholder';

function PopupArrow() {
  const buttonElement = useRef();
  const [open, setOpen] = useState(false);

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
      <Button text="Arrow Popup" onClick={handleButtonClick} refCallback={setButtonNode} />
      <Popup
        isOpen={open}
        onRequestClose={handleRequestClose}
        targetRef={getButtonNode}
        isArrowDisplayed
      >
        <Placeholder title="Popup Content" />
      </Popup>
    </React.Fragment>
  );
}

export default PopupArrow;
