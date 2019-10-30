import React, { useRef, useState } from 'react';
import Button from 'terra-button';
import Popup from 'terra-popup';
import Placeholder from 'terra-doc-template/lib/Placeholder';

function PopupStandard() {
  const buttonElement = useRef(null);
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
      <Button text="Default Popup" onClick={handleButtonClick} refCallback={setButtonNode} />
      <Popup
        isOpen={open}
        targetRef={getButtonNode}
        onRequestClose={handleRequestClose}
      >
        <Placeholder title="Popup Content" />
      </Popup>
    </React.Fragment>
  );
}

export default PopupStandard;
