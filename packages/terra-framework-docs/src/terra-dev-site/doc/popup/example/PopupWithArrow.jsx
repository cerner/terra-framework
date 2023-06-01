import React, { useRef, useState, useEffect } from 'react';
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

  useEffect(() => {
    if (open) {
      const firstLink = document.querySelector('.terra-popup-content a');
      if (firstLink) {
        firstLink.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <Button text="Medication Links" onClick={handleButtonClick} refCallback={setButtonNode} />
      <Popup
        isOpen={open}
        onRequestClose={handleRequestClose}
        targetRef={getButtonNode}
        isArrowDisplayed
      >
        <div className="terra-popup-content">
          <a
            href="https://www.refseek.com/directory/health_medical.html"
            target="_blank"
            rel="noreferrer"
          >
            Health and Medical sites
          </a>
          <br />
          <a
            href="https://www.happiesthealth.com/?utm_source=google&utm_medium=cpc-hp"
            target="_blank"
            rel="noreferrer"
          >
            Health Related Links
          </a>
        </div>
      </Popup>
    </React.Fragment>
  );
}

export default PopupArrow;
