import React, { useRef, useState, useEffect } from 'react';
import Button from 'terra-button';
import Popup from 'terra-popup';

function PopupArrow() {
  const buttonElement = useRef();
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const setButtonNode = (node) => {
    buttonElement.current = node;
  };

  const getButtonNode = () => buttonElement.current;

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleRequestClose = () => {
    if (open) {
      setFocusedIndex(0);
    }
    setOpen(false);
    buttonElement.current.focus(); // Return focus to the button when the popup closes
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setFocusedIndex((prevIndex) => (prevIndex + 1) % 2);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setFocusedIndex((prevIndex) => (prevIndex - 1 + 2) % 2);
    }
  };


  useEffect(() => {
    if (open && focusedIndex !== -1) {
      const listItems = document.querySelectorAll('.terra-popup-content a');
      if (listItems.length > 0) {
        listItems[focusedIndex].focus();
      }
    }
  }, [open, focusedIndex]);

  return (
    <React.Fragment>
      <Button text="Medication Links" onClick={handleButtonClick} refCallback={setButtonNode}/>
      <Popup
        isOpen={open}
        onRequestClose={handleRequestClose}
        targetRef={getButtonNode}
        isArrowDisplayed
        tabIndex={-1} // Prevent the popup from receiving focus
      >
        <ul style={{listStyleType:'none',padding:0,margin:0}} className="terra-popup-content" onKeyDown={handleKeyDown} role="menu">
          <li tabIndex={0} aria-selected={focusedIndex === 0} role="menuitem">
            <a
              href="https://www.refseek.com/directory/health_medical.html"
              target="_blank"
              rel="noreferrer"
            >
              Health and Medical sites
            </a>
          </li>
          <li tabIndex={0} aria-selected={focusedIndex === 1} role="menuitem">
            <a
              href="https://www.happiesthealth.com/?utm_source=google&utm_medium=cpc-hp"
              target="_blank"
              rel="noreferrer"
            >
              Health Related Links
            </a>
          </li>
        </ul>
      </Popup>
    </React.Fragment>
  );
}

export default PopupArrow;
