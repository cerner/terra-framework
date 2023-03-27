import React, { useRef, useState } from 'react';
import Button from 'terra-button';
import Popup from 'terra-popup';

function PopupStandard() {
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

  const text = 'Default PopUp Example';
  const truncatedText = text.substring(0, 15) + '...'; // eslint-disable-line prefer-template

  return (
    <React.Fragment>
      <Button text={truncatedText} onClick={handleButtonClick} refCallback={setButtonNode} />

      <Popup
        isOpen={open}
        targetRef={getButtonNode}
        onRequestClose={handleRequestClose}
        isHeaderDisabled={false}
        isContentFocusDisabled={false}
      >
        <div>
          {text}
        </div>
      </Popup>
    </React.Fragment>
  );
}

export default PopupStandard;
