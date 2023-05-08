import React, { useRef, useState } from 'react';
import Button from 'terra-button';
import Popup from 'terra-popup';

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
      <Button text="Medicaton Links" onClick={handleButtonClick} refCallback={setButtonNode} />
      <Popup
        isOpen={open}
        onRequestClose={handleRequestClose}
        targetRef={getButtonNode}
        isArrowDisplayed
      >

        <a href="https://www.refseek.com/directory/health_medical.html">Health and Medical sites</a>
        <br />
        <a href="https://www.northeaststate.edu/Campus-Life/Health-and-Wellness/Health-Related-Links/
        "
        >
          Health Related Links
        </a>
      </Popup>
    </React.Fragment>
  );
}

export default PopupArrow;
